(function () {
  const data = window.siteData;
  if (!data) return;

  const methodGrid = document.querySelector("[data-method-grid]");
  const comparisonGrid = document.querySelector("[data-comparison-grid]");
  const scenarioGrid = document.querySelector("[data-scenario-grid]");
  const pathGrid = document.querySelector("[data-path-grid]");
  const resourceGrid = document.querySelector("[data-resource-grid]");
  const featuredComparisons = document.querySelector("[data-featured-comparisons]");

  function fillGrid(container, items, renderer) {
    if (!container) return;
    container.innerHTML = "";
    items.forEach((item) => container.appendChild(renderer(item)));
  }

  function methodCard(method) {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="result-meta">
        <span class="tag">${method.category}</span>
        <span class="tag">${method.difficulty}</span>
      </div>
      <h3>${method.title}</h3>
      <p>${method.summary}</p>
      <p><strong>Best for:</strong> ${method.bestUseCase}</p>
      <p><strong>Common confusion:</strong> ${method.confusion}</p>
    `;
    return card;
  }

  function simpleCard(item, kicker, extraLabel, extraValue) {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <p class="card-kicker">${kicker}</p>
      <h3>${item.title}</h3>
      <p>${item.summary || item.description || item.audience}</p>
      ${extraValue ? `<p><strong>${extraLabel}:</strong> ${extraValue}</p>` : ""}
    `;
    return card;
  }

  fillGrid(methodGrid, data.methods, methodCard);
  fillGrid(comparisonGrid, data.comparisons, (item) => simpleCard(item, "Comparison guide"));
  fillGrid(scenarioGrid, data.scenarios, (item) => simpleCard(item, "Research scenario", "Typical question", item.question));
  fillGrid(pathGrid, data.paths, (item) => simpleCard(item, "Learning path", "Modules", item.modules));
  fillGrid(resourceGrid, data.resources, (item) => simpleCard(item, "Foundation resource"));

  if (featuredComparisons) {
    fillGrid(featuredComparisons, data.comparisons.slice(0, 4), (item) => {
      const card = document.createElement("article");
      card.className = "topic-card";
      card.innerHTML = `
        <p class="card-kicker">Featured comparison</p>
        <h3>${item.title}</h3>
        <p>${item.summary}</p>
      `;
      return card;
    });
  }

  const searchInput = document.querySelector("[data-method-search]");
  const goalSelect = document.querySelector("[data-method-goal]");
  if (searchInput && goalSelect && methodGrid) {
    const goals = [...new Set(data.methods.flatMap((method) => method.researchGoals))]
      .filter((goal) => goal !== "unsure")
      .sort();

    goals.forEach((goal) => {
      const option = document.createElement("option");
      option.value = goal;
      option.textContent = goal.replaceAll("-", " ");
      goalSelect.appendChild(option);
    });

    function filterMethods() {
      const query = searchInput.value.trim().toLowerCase();
      const goal = goalSelect.value;
      const filtered = data.methods.filter((method) => {
        const haystack = [
          method.title,
          method.summary,
          method.bestUseCase,
          method.category,
          method.researchGoals.join(" ")
        ]
          .join(" ")
          .toLowerCase();

        const queryMatch = !query || haystack.includes(query);
        const goalMatch = goal === "all" || method.researchGoals.includes(goal);
        return queryMatch && goalMatch;
      });

      fillGrid(methodGrid, filtered, methodCard);
    }

    searchInput.addEventListener("input", filterMethods);
    goalSelect.addEventListener("change", filterMethods);
  }

  const form = document.querySelector("[data-finder-form]");
  if (form) {
    const stepNode = document.querySelector("[data-finder-step]");
    const backButton = document.querySelector("[data-finder-back]");
    const nextButton = document.querySelector("[data-finder-next]");
    const resultsPanel = document.querySelector("[data-finder-results]");
    const resultsList = document.querySelector("[data-finder-results-list]");
    const resetButton = document.querySelector("[data-finder-reset]");
    const progressBar = document.querySelector("[data-progress-bar]");
    const progressText = document.querySelector("[data-progress-text]");

    const state = {
      step: 0,
      answers: {}
    };

    function renderStep() {
      const current = data.questions[state.step];
      const selected = state.answers[current.key];

      stepNode.innerHTML = `
        <div class="finder-question">
          <p class="eyebrow">Step ${state.step + 1}</p>
          <h3>${current.prompt}</h3>
        </div>
        <div class="finder-options">
          ${current.options
            .map(
              (option) => `
                <label class="finder-option ${selected === option.value ? "selected" : ""}">
                  <input type="radio" name="${current.key}" value="${option.value}" ${selected === option.value ? "checked" : ""} hidden />
                  <strong>${option.label}</strong>
                  <span>${option.hint}</span>
                </label>
              `
            )
            .join("")}
        </div>
      `;

      stepNode.querySelectorAll("input").forEach((input) => {
        input.addEventListener("change", () => {
          state.answers[current.key] = input.value;
          renderStep();
        });
      });

      backButton.disabled = state.step === 0;
      nextButton.textContent = state.step === data.questions.length - 1 ? "See results" : "Next";
      progressBar.style.width = `${((state.step + 1) / data.questions.length) * 100}%`;
      progressText.textContent = `Step ${state.step + 1} of ${data.questions.length}`;
    }

    function scoreMethod(method) {
      let score = 0;
      const { goal, outcomeType, structure, design } = state.answers;

      if (goal && method.researchGoals.includes(goal)) score += 4;
      if (outcomeType && method.outcomeTypes.includes(outcomeType)) score += 3;
      if (structure && method.structures.includes(structure)) score += 5;
      if (design && method.designs.includes(design)) score += 2;

      if (goal === "compare-groups" && structure === "same-participants-twice" && method.slug === "paired-t-test") score += 3;
      if (goal === "compare-groups" && structure === "two-independent-groups" && method.slug === "independent-t-test") score += 3;
      if (goal === "compare-groups" && structure === "three-plus-groups" && method.slug === "one-way-anova") score += 3;
      if (goal === "relationship" && structure === "two-continuous-variables" && method.slug === "correlation") score += 3;
      if (goal === "predict" && outcomeType === "continuous" && method.slug === "linear-regression") score += 3;
      if (goal === "predict" && (outcomeType === "binary" || outcomeType === "categorical") && method.slug === "logistic-regression") score += 3;

      return score;
    }

    function renderResults() {
      const ranked = data.methods
        .map((method) => ({ method, score: scoreMethod(method) }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 3)
        .filter((entry) => entry.score > 0);

      resultsList.innerHTML = "";

      if (!ranked.length) {
        resultsList.innerHTML = `
          <article class="result-card">
            <h3>We need a little more detail</h3>
            <p>Your answers do not point strongly to one method yet. That usually means the research question or variable roles still need clarification.</p>
          </article>
        `;
      } else {
        ranked.forEach(({ method }) => {
          const card = document.createElement("article");
          card.className = "result-card";
          card.innerHTML = `
            <p class="card-kicker">Suggested method</p>
            <h3>${method.title}</h3>
            <p>${method.summary}</p>
            <div class="result-meta">
              <span class="tag">${method.category}</span>
              <span class="tag">${method.difficulty}</span>
            </div>
            <p><strong>Why it may fit:</strong> ${method.useWhen}</p>
            <p><strong>What to check next:</strong> ${method.checkNext}</p>
            <p><strong>Common confusion:</strong> ${method.confusion}</p>
          `;
          resultsList.appendChild(card);
        });
      }

      form.classList.add("hidden");
      resultsPanel.classList.remove("hidden");
    }

    nextButton.addEventListener("click", () => {
      const current = data.questions[state.step];
      if (!state.answers[current.key]) return;
      if (state.step < data.questions.length - 1) {
        state.step += 1;
        renderStep();
      } else {
        renderResults();
      }
    });

    backButton.addEventListener("click", () => {
      if (state.step > 0) {
        state.step -= 1;
        renderStep();
      }
    });

    resetButton.addEventListener("click", () => {
      state.step = 0;
      state.answers = {};
      form.classList.remove("hidden");
      resultsPanel.classList.add("hidden");
      renderStep();
    });

    document.querySelectorAll("[data-prefill-goal]").forEach((link) => {
      link.addEventListener("click", () => {
        state.step = 0;
        state.answers = { goal: link.dataset.prefillGoal };
        form.classList.remove("hidden");
        resultsPanel.classList.add("hidden");
        renderStep();
      });
    });

    renderStep();
  }

  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector(".site-nav");
  if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
      const open = siteNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
  }
})();
