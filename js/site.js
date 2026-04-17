(function () {
  const data = window.siteData;
  if (!data) return;

  const methodGrid = document.querySelector("[data-method-grid]");
  const comparisonGrid = document.querySelector("[data-comparison-grid]");
  const scenarioGrid = document.querySelector("[data-scenario-grid]");
  const pathGrid = document.querySelector("[data-path-grid]");
  const resourceGrid = document.querySelector("[data-resource-grid]");
  const featuredComparisons = document.querySelector("[data-featured-comparisons]");
  let setFinderState = null;

  function fillGrid(container, items, renderer) {
    if (!container) return;
    container.innerHTML = "";
    items.forEach((item) => container.appendChild(renderer(item)));
  }

  function escapeHtml(text) {
    return String(text)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
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

    setFinderState = function (answers) {
      state.step = 0;
      state.answers = { ...answers };
      form.classList.remove("hidden");
      resultsPanel.classList.add("hidden");
      renderStep();
    };

    renderStep();
  }

  const questionInput = document.querySelector("[data-question-input]");
  const questionResults = document.querySelector("[data-question-results]");
  const questionSummary = document.querySelector("[data-question-summary]");
  const questionShape = document.querySelector("[data-question-shape]");
  const questionGaps = document.querySelector("[data-question-gaps]");
  const questionRewrite = document.querySelector("[data-question-rewrite]");
  const analyzeButton = document.querySelector("[data-question-analyze]");
  const exampleButton = document.querySelector("[data-question-example]");
  const toFinderButton = document.querySelector("[data-question-to-finder]");

  let lastClarifierResult = null;

  function countKeywordMatches(text, keywords) {
    return keywords.reduce((count, keyword) => count + (text.includes(keyword) ? 1 : 0), 0);
  }

  function detectBestKey(text, groups, fallback = "unsure") {
    let bestKey = fallback;
    let bestScore = 0;
    Object.entries(groups).forEach(([key, keywords]) => {
      const score = countKeywordMatches(text, keywords);
      if (score > bestScore) {
        bestScore = score;
        bestKey = key;
      }
    });
    return { key: bestKey, score: bestScore };
  }

  function detectOutcomeType(text) {
    const hints = data.clarifier.outcomeHints;
    const binaryScore = countKeywordMatches(text, hints.binary);
    const countScore = countKeywordMatches(text, hints.count);
    const categoricalScore = countKeywordMatches(text, hints.categorical);
    const continuousScore = countKeywordMatches(text, hints.continuous);

    if (binaryScore > 0 && binaryScore >= continuousScore) return "binary";
    if (countScore > 0 && countScore >= continuousScore) return "count";
    if (categoricalScore > 0 && categoricalScore > continuousScore) return "categorical";
    if (continuousScore > 0) return "continuous";
    return "unsure";
  }

  function inferDesign(text, structureKey) {
    if (structureKey === "same-participants-twice") return "pre-post";
    if (text.includes("experiment") || text.includes("condition") || text.includes("treatment") || text.includes("control")) {
      return "experimental";
    }
    if (text.includes("over time") || text.includes("longitudinal")) return "repeated";
    return "cross-sectional";
  }

  function inferPopulation(text) {
    const populationPatterns = [
      /among ([^?.!,]+)/,
      /in ([^?.!,]+ students)/,
      /for ([^?.!,]+ students)/,
      /with ([^?.!,]+ students)/
    ];

    for (const pattern of populationPatterns) {
      const match = text.match(pattern);
      if (match && match[1]) return match[1].trim();
    }

    if (text.includes("students")) return "students";
    if (text.includes("undergraduate")) return "undergraduate students";
    return "your target population";
  }

  function inferVariableHints(text, goalKey) {
    const hints = [];
    if (goalKey === "compare-groups") {
      hints.push("A grouping variable or condition needs to be clearly named.");
      hints.push("You also need one measurable outcome to compare across groups.");
    } else if (goalKey === "relationship") {
      hints.push("You likely need two clearly defined measurable variables.");
    } else if (goalKey === "predict") {
      hints.push("You need a clear outcome variable and one or more predictors.");
    } else if (goalKey === "describe") {
      hints.push("You need one clearly defined variable or characteristic to summarize.");
    } else {
      hints.push("You likely still need to decide whether this is about differences, relationships, prediction, or description.");
    }

    if (text.includes("before") || text.includes("after")) {
      hints.push("The wording suggests repeated measurement over time.");
    }
    if (text.includes("whether")) {
      hints.push("The wording may point to a binary outcome or a yes-or-no framing that needs clarification.");
    }
    return hints;
  }

  function buildMissingPieces(text, goalKey, structureKey, outcomeType) {
    const gaps = [];
    if (goalKey === "unsure") gaps.push("Decide whether the question is mainly about differences, relationships, prediction, or description.");
    if (structureKey === "not-sure") gaps.push("Clarify whether you have groups, repeated measures, or predictor variables.");
    if (outcomeType === "unsure") gaps.push("Name one measurable outcome and decide whether it is continuous, categorical, binary, or a count.");
    if (!text.includes("student") && !text.includes("participants") && !text.includes("people") && !text.includes("adults")) {
      gaps.push("Specify the population you want to study.");
    }
    if (!text.includes("score") && !text.includes("measure") && !text.includes("scale") && !text.includes("survey")) {
      gaps.push("State how the main concept will be measured, not just what broad topic interests you.");
    }
    if (!gaps.length) {
      gaps.push("The main next step is to define your variables in measurable terms and confirm the study design.");
    }
    return gaps;
  }

  function analyzeNarrativeQuestion(rawQuestion) {
    const normalized = rawQuestion.trim().toLowerCase();
    if (!normalized) return null;

    const goalResult = detectBestKey(normalized, data.clarifier.goalKeywords, "unsure");
    const structureResult = detectBestKey(normalized, data.clarifier.structureKeywords, "not-sure");
    const goal = goalResult.key;
    const structure = structureResult.key;
    const outcomeType = detectOutcomeType(normalized);
    const design = inferDesign(normalized, structure);
    const population = inferPopulation(normalized);
    const variableHints = inferVariableHints(normalized, goal);
    const missingPieces = buildMissingPieces(normalized, goal, structure, outcomeType);
    const rewrite = data.clarifier.rewriteTemplates[goal] || data.clarifier.rewriteTemplates.unsure;

    return {
      goal,
      structure,
      outcomeType,
      design,
      population,
      variableHints,
      missingPieces,
      rewrite
    };
  }

  function prettyLabel(value) {
    const labels = {
      "compare-groups": "Compare groups",
      relationship: "Study a relationship",
      predict: "Predict an outcome",
      describe: "Describe a variable or sample",
      unsure: "Still unclear",
      "two-independent-groups": "Two separate groups",
      "same-participants-twice": "Same participants measured twice",
      "three-plus-groups": "Three or more groups",
      "two-continuous-variables": "Two continuous variables",
      "predictors-to-outcome": "Predictors for a continuous outcome",
      "predictors-to-categorical-outcome": "Predictors for a categorical outcome",
      "two-categorical-variables": "Two categorical variables",
      "sample-summary": "Descriptive summary",
      "not-sure": "Not yet clear",
      continuous: "Continuous outcome",
      categorical: "Categorical outcome",
      binary: "Binary outcome",
      count: "Count outcome",
      "cross-sectional": "Cross-sectional design",
      experimental: "Experimental or between-groups design",
      "pre-post": "Pre-post design",
      repeated: "Repeated-measures design"
    };
    return labels[value] || value;
  }

  function renderClarifierResult(result) {
    if (!questionResults || !questionSummary || !questionShape || !questionGaps || !questionRewrite) return;

    questionSummary.innerHTML = `
      <p>This question currently looks most like a <strong>${escapeHtml(prettyLabel(result.goal).toLowerCase())}</strong> question for <strong>${escapeHtml(result.population)}</strong>.</p>
      <p>The likely next move is to turn the broad idea into a measurable outcome and a clearer design statement.</p>
    `;

    questionShape.innerHTML = `
      <p><strong>Question family:</strong> ${prettyLabel(result.goal)}</p>
      <p><strong>Likely structure:</strong> ${prettyLabel(result.structure)}</p>
      <p><strong>Possible outcome type:</strong> ${prettyLabel(result.outcomeType)}</p>
      <p><strong>Likely design:</strong> ${prettyLabel(result.design)}</p>
      <ul class="plain-list">${result.variableHints.map((hint) => `<li>${hint}</li>`).join("")}</ul>
    `;

    questionGaps.innerHTML = `
      <ul class="plain-list">${result.missingPieces.map((gap) => `<li>${gap}</li>`).join("")}</ul>
    `;

    questionRewrite.innerHTML = `
      <p>${result.rewrite}</p>
      <p><strong>Tip:</strong> Replace the bracketed parts with your actual population, variables, and conditions.</p>
    `;

    questionResults.classList.remove("hidden");
  }

  if (questionInput && analyzeButton) {
    analyzeButton.addEventListener("click", () => {
      const result = analyzeNarrativeQuestion(questionInput.value);
      if (!result) return;
      lastClarifierResult = result;
      renderClarifierResult(result);
    });
  }

  if (questionInput && exampleButton) {
    exampleButton.addEventListener("click", () => {
      questionInput.value = data.clarifier.examples[0];
      const result = analyzeNarrativeQuestion(questionInput.value);
      lastClarifierResult = result;
      renderClarifierResult(result);
    });
  }

  if (toFinderButton) {
    toFinderButton.addEventListener("click", () => {
      if (!lastClarifierResult || !setFinderState) return;
      setFinderState({
        goal: lastClarifierResult.goal === "unsure" ? "unsure" : lastClarifierResult.goal,
        outcomeType: lastClarifierResult.outcomeType,
        structure: lastClarifierResult.structure,
        design: lastClarifierResult.design
      });
      window.location.hash = "finder";
    });
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
