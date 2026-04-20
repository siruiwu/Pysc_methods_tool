window.siteData = {
  methods: [
    {
      slug: "descriptive-statistics",
      title: "Descriptive Statistics",
      category: "Foundations",
      difficulty: "Beginner",
      summary: "Summarize what your sample or variables look like before moving to deeper analysis.",
      bestUseCase: "Describing averages, spread, frequencies, or overall patterns in a dataset.",
      researchGoals: ["describe", "unsure"],
      outcomeTypes: ["continuous", "categorical", "count", "unsure"],
      structures: ["sample-summary", "not-sure"],
      designs: ["cross-sectional", "experimental", "pre-post", "repeated", "unsure"],
      useWhen: "Use this when your goal is to describe scores, frequencies, or distributions.",
      checkNext: "Make sure you are not treating a descriptive summary as if it were a hypothesis test.",
      confusion: "Describing a variable is not the same as testing a relationship or effect."
    },
    {
      slug: "independent-t-test",
      title: "Independent Samples t-test",
      category: "Group comparison",
      difficulty: "Beginner",
      summary: "Compare the average score of two separate groups on a continuous outcome.",
      bestUseCase: "Two independent groups, one continuous outcome.",
      researchGoals: ["compare-groups", "unsure"],
      outcomeTypes: ["continuous", "unsure"],
      structures: ["two-independent-groups", "not-sure"],
      designs: ["experimental", "cross-sectional", "unsure"],
      useWhen: "Use this when you have two different groups and a continuous outcome.",
      checkNext: "Confirm that the same participants were not measured twice.",
      confusion: "Often confused with the paired t-test when students forget the data are independent."
    },
    {
      slug: "paired-t-test",
      title: "Paired Samples t-test",
      category: "Repeated measures",
      difficulty: "Beginner",
      summary: "Compare two measurements taken from the same participants or matched pairs.",
      bestUseCase: "Pre-post designs or matched observations with one continuous outcome.",
      researchGoals: ["compare-groups", "unsure"],
      outcomeTypes: ["continuous", "unsure"],
      structures: ["same-participants-twice", "matched-pairs", "not-sure"],
      designs: ["pre-post", "repeated", "unsure"],
      useWhen: "Use this when observations are linked, such as before and after scores for the same people.",
      checkNext: "Make sure each score in one column has a clear partner in the other column.",
      confusion: "Often confused with the independent t-test because both compare two sets of scores."
    },
    {
      slug: "one-way-anova",
      title: "One-way ANOVA",
      category: "Group comparison",
      difficulty: "Beginner-Intermediate",
      summary: "Compare the average outcome across three or more groups.",
      bestUseCase: "One grouping variable with three or more categories and one continuous outcome.",
      researchGoals: ["compare-groups", "unsure"],
      outcomeTypes: ["continuous", "unsure"],
      structures: ["three-plus-groups", "not-sure"],
      designs: ["experimental", "cross-sectional", "unsure"],
      useWhen: "Use this when you want to compare means across three or more groups.",
      checkNext: "Remember that the overall ANOVA does not by itself tell you which groups differ.",
      confusion: "Often confused with a t-test when students focus on means but ignore the number of groups."
    },
    {
      slug: "correlation",
      title: "Correlation",
      category: "Relationships",
      difficulty: "Beginner",
      summary: "Study whether two continuous variables tend to vary together.",
      bestUseCase: "Association between two continuous variables.",
      researchGoals: ["relationship", "unsure"],
      outcomeTypes: ["continuous", "unsure"],
      structures: ["two-continuous-variables", "not-sure"],
      designs: ["cross-sectional", "experimental", "unsure"],
      useWhen: "Use this when your main question is about association rather than prediction.",
      checkNext: "Keep in mind that correlation does not establish causation.",
      confusion: "Often confused with regression because both can involve the same pair of variables."
    },
    {
      slug: "linear-regression",
      title: "Linear Regression",
      category: "Prediction",
      difficulty: "Intermediate",
      summary: "Model how one or more predictors relate to a continuous outcome.",
      bestUseCase: "Prediction or explanation when the outcome is continuous.",
      researchGoals: ["predict", "relationship", "unsure"],
      outcomeTypes: ["continuous", "unsure"],
      structures: ["predictors-to-outcome", "two-continuous-variables", "not-sure"],
      designs: ["cross-sectional", "experimental", "unsure"],
      useWhen: "Use this when you want one variable to play the role of outcome and the others to be predictors.",
      checkNext: "Make sure the outcome is really continuous enough for a linear model.",
      confusion: "Often confused with correlation, even though regression gives the variables different roles."
    },
    {
      slug: "chi-square",
      title: "Chi-square Test",
      category: "Categorical outcomes",
      difficulty: "Beginner",
      summary: "Examine whether two categorical variables are associated.",
      bestUseCase: "Association between categories or counts in a table.",
      researchGoals: ["relationship", "compare-groups", "unsure"],
      outcomeTypes: ["categorical", "binary", "unsure"],
      structures: ["two-categorical-variables", "not-sure"],
      designs: ["cross-sectional", "experimental", "unsure"],
      useWhen: "Use this when your data are category counts and your question is about association.",
      checkNext: "Think in terms of counts in categories, not mean scores.",
      confusion: "Often confused with logistic regression when the outcome is categorical."
    },
    {
      slug: "logistic-regression",
      title: "Logistic Regression",
      category: "Categorical outcomes",
      difficulty: "Intermediate",
      summary: "Predict a binary or categorical outcome from one or more predictors.",
      bestUseCase: "Modeling a yes-or-no or other categorical outcome.",
      researchGoals: ["predict", "unsure"],
      outcomeTypes: ["binary", "categorical", "unsure"],
      structures: ["predictors-to-categorical-outcome", "not-sure"],
      designs: ["cross-sectional", "experimental", "unsure"],
      useWhen: "Use this when the outcome is binary or categorical and prediction is the goal.",
      checkNext: "Check whether you really need a predictive model rather than a simpler categorical association test.",
      confusion: "Often confused with chi-square because both may involve categorical outcomes."
    }
  ],
  comparisons: [
    {
      title: "Independent t-test vs Paired t-test",
      summary: "The key difference is whether the observations are separate or linked."
    },
    {
      title: "t-test vs ANOVA",
      summary: "Both compare means, but the number of groups matters."
    },
    {
      title: "Correlation vs Regression",
      summary: "Correlation studies association. Regression models an outcome from predictors."
    },
    {
      title: "Chi-square vs Logistic Regression",
      summary: "Chi-square checks categorical association. Logistic regression predicts a categorical outcome."
    },
    {
      title: "Mediation vs Moderation",
      summary: "Mediation asks how or why. Moderation asks when or for whom."
    }
  ],
  scenarios: [
    {
      title: "Survey-based Thesis Project",
      description: "A common starting point for psychology and social science students using questionnaires and cross-sectional data.",
      methods: "Correlation, linear regression, chi-square, descriptive statistics",
      question: "I gave people a survey and now I am not sure which analysis fits the data."
    },
    {
      title: "Experimental Study with Two Groups",
      description: "A practical walkthrough for studies involving a treatment group and a comparison group.",
      methods: "Independent t-test, descriptive statistics",
      question: "I assigned participants to two conditions. How do I compare their outcomes?"
    },
    {
      title: "Pre-post Intervention Study",
      description: "A guide for studies where the same participants are measured before and after an intervention.",
      methods: "Paired t-test, descriptive statistics",
      question: "I measured the same people before and after a program. What should I use?"
    },
    {
      title: "Questionnaire-based Social Science Project",
      description: "A project type that often mixes scales, categories, and applied research questions.",
      methods: "Chi-square, logistic regression, linear regression",
      question: "I have questionnaire data, but some variables are categories and some are scores."
    }
  ],
  paths: [
    {
      title: "Absolute Beginner Path",
      audience: "Students who feel unsure about method terms and want a calm starting point.",
      modules: "Research questions, variable types, Method Finder, correlation, t-test vs ANOVA"
    },
    {
      title: "Thesis Project Starter Path",
      audience: "Students planning a survey, proposal, or undergraduate thesis.",
      modules: "Survey scenario, research questions, variable types, correlation vs regression"
    },
    {
      title: "Group Comparison Path",
      audience: "Students asking whether groups or conditions differ.",
      modules: "Design basics, independent vs paired, t-test vs ANOVA, method cards"
    },
    {
      title: "Relationship and Prediction Path",
      audience: "Students working with surveys, scale scores, and explanatory questions.",
      modules: "Research questions, correlation vs regression, correlation, regression"
    }
  ],
  resources: [
    {
      title: "What Is a Research Question?",
      summary: "Learn to distinguish questions about differences, relationships, prediction, and mechanisms."
    },
    {
      title: "How to Identify Variable Types",
      summary: "Recognize the difference between continuous, categorical, binary, and count variables."
    },
    {
      title: "Research Design Basics",
      summary: "Understand the difference between independent groups, repeated measures, and cross-sectional designs."
    },
    {
      title: "Common Statistical Assumptions",
      summary: "A plain-language introduction to the checks beginners should know before using a method."
    }
  ],
  clarifier: {
    examples: [
      "I want to know whether students with more social support report lower anxiety, and whether this differs between first-year and senior students.",
      "Do students who attend a mindfulness workshop show lower stress after the program than before it starts?",
      "Is sleep quality related to academic performance among undergraduate psychology students?"
    ],
    goalKeywords: {
      "compare-groups": ["difference", "differences", "compare", "comparison", "versus", "vs", "higher than", "lower than", "across groups", "between groups"],
      relationship: ["relationship", "related", "association", "associated", "correlat", "link", "linked", "connected"],
      predict: ["predict", "prediction", "predictor", "explain", "explains", "influence", "impact", "likelihood", "odds", "account for"],
      describe: ["describe", "frequency", "prevalence", "rate", "how common", "what proportion"]
    },
    structureKeywords: {
      "same-participants-twice": ["before and after", "pre post", "pre-post", "over time", "same participants", "same students", "measured twice", "time 1", "time 2"],
      "two-independent-groups": ["between", "compared with", "compared to", "treatment and control", "two groups", "first-year and senior", "men and women"],
      "three-plus-groups": ["three groups", "several groups", "across majors", "across conditions", "different groups"],
      "two-continuous-variables": ["relationship between", "related to", "association between", "correlation between"],
      "predictors-to-outcome": ["predict", "explains", "influence", "effect of"],
      "predictors-to-categorical-outcome": ["likelihood", "odds", "whether students", "yes or no", "binary"],
      "two-categorical-variables": ["proportion", "category", "categories", "group by", "yes or no across groups"]
    },
    outcomeHints: {
      continuous: ["score", "anxiety", "stress", "depression", "support", "performance", "grade", "sleep", "motivation", "attitude"],
      binary: ["whether", "did", "yes or no", "pass", "fail", "attend", "drop out", "sought help"],
      categorical: ["major", "gender", "category", "type", "group"],
      count: ["number of", "count", "times", "visits", "events"]
    },
    rewriteTemplates: {
      "compare-groups": "Among [population], do [group or condition A] and [group or condition B] differ on [measurable outcome]?",
      relationship: "Among [population], is [variable X] associated with [variable Y]?",
      predict: "Among [population], does [predictor or predictors] predict [measurable outcome]?",
      describe: "Among [population], what is the level, frequency, or distribution of [measurable variable]?",
      unsure: "Among [population], what is the relationship between [key variable or group] and [measurable outcome]?"
    }
  },
  game: {
    rounds: [
      {
        stage: "Spot a strong question",
        prompt: "Which question is stronger for a small undergraduate project on sleep and academic performance?",
        options: [
          {
            label: "How does sleep affect students?",
            detail: "Broad topic, but still too vague to study directly."
          },
          {
            label: "Among first-year university students, is average nightly sleep duration associated with first-term GPA?",
            detail: "Clear population, measurable variables, and one focused relationship."
          },
          {
            label: "Why is sleep important?",
            detail: "Interesting idea, but not a research question with measurable variables."
          }
        ],
        correctIndex: 1,
        explanation: "The strongest question names a population, a measurable variable, and a clear relationship."
      },
      {
        stage: "Spot a strong question",
        prompt: "Which question is better if you want to study group differences in stress?",
        options: [
          {
            label: "Do commuter and non-commuter students differ in average perceived stress scores during midterm season?",
            detail: "Focused comparison with a clear grouping variable and measurable outcome."
          },
          {
            label: "Is commuting bad for students?",
            detail: "Too broad and value-laden."
          },
          {
            label: "What happens to stress in university?",
            detail: "Too open and not clearly measurable."
          }
        ],
        correctIndex: 0,
        explanation: "A good group-comparison question makes the groups and the outcome explicit."
      },
      {
        stage: "Narrow a broad topic",
        prompt: "A student starts with: 'I want to study social media and wellbeing.' What is the best narrowing move?",
        options: [
          {
            label: "Keep the topic broad so there are more possible methods later.",
            detail: "Broadness usually makes the project harder, not easier."
          },
          {
            label: "Specify a population, one measurable wellbeing outcome, and one clear social media variable.",
            detail: "This turns a topic into a study-ready question."
          },
          {
            label: "Replace wellbeing with another abstract word like lifestyle.",
            detail: "That changes the wording but does not narrow the question."
          }
        ],
        correctIndex: 1,
        explanation: "Narrowing usually means choosing a population, clarifying one or two variables, and deciding what relationship you want to test."
      },
      {
        stage: "Narrow a broad topic",
        prompt: "A student asks: 'Does a workshop help students?' What revision narrows the question best?",
        options: [
          {
            label: "Among first-year psychology students, do anxiety scores decrease after a four-week mindfulness workshop?",
            detail: "This adds population, intervention, outcome, and timing."
          },
          {
            label: "Does a workshop help students a lot?",
            detail: "Still vague and hard to measure."
          },
          {
            label: "Why are workshops useful?",
            detail: "Interesting, but not a clear quantitative question."
          }
        ],
        correctIndex: 0,
        explanation: "A narrowed question usually names who, what changed, and how the change will be measured."
      },
      {
        stage: "Self-evaluate a question",
        prompt: "A student writes: 'Is mental health important for students?' What is the best self-evaluation?",
        options: [
          {
            label: "It is a good question because mental health is an important topic.",
            detail: "Importance alone does not make the question research-ready."
          },
          {
            label: "It needs work because the population, variables, and measurable outcome are still unclear.",
            detail: "This is the strongest evaluation."
          },
          {
            label: "It is good enough because an instructor can help later.",
            detail: "Feedback helps, but the question still needs to be narrowed."
          }
        ],
        correctIndex: 1,
        explanation: "A useful self-check asks whether the question is specific, measurable, focused, and feasible for one study."
      }
    ]
  },
  questions: [
    {
      key: "goal",
      prompt: "What are you mainly trying to do?",
      options: [
        { value: "describe", label: "Describe a sample or variable", hint: "Summaries, frequencies, averages, and what the data look like." },
        { value: "compare-groups", label: "Compare groups", hint: "Differences between groups, conditions, or time points." },
        { value: "relationship", label: "Examine a relationship", hint: "Whether variables move together or are associated." },
        { value: "predict", label: "Predict an outcome", hint: "Use one or more predictors to model an outcome." },
        { value: "unsure", label: "Not sure", hint: "Choose this if you are still narrowing down the question." }
      ]
    },
    {
      key: "outcomeType",
      prompt: "What kind of outcome or main variable are you working with?",
      options: [
        { value: "continuous", label: "A continuous score", hint: "Examples: anxiety score, test score, sleep hours." },
        { value: "categorical", label: "A categorical variable", hint: "Examples: major, group membership, category level." },
        { value: "binary", label: "A yes-or-no outcome", hint: "Examples: passed or failed, attended or did not attend." },
        { value: "count", label: "A count", hint: "Examples: number of visits or number of events." },
        { value: "unsure", label: "Not sure", hint: "Use this if you are still figuring out the variable type." }
      ]
    },
    {
      key: "structure",
      prompt: "Which study structure sounds closest to yours?",
      options: [
        { value: "two-independent-groups", label: "Two separate groups", hint: "Different people in each group." },
        { value: "same-participants-twice", label: "The same participants measured twice", hint: "A pre-post or repeated design." },
        { value: "three-plus-groups", label: "Three or more groups", hint: "Several conditions or categories to compare." },
        { value: "two-continuous-variables", label: "Two continuous variables", hint: "You want to study how two scores vary together." },
        { value: "predictors-to-outcome", label: "One or more predictors for a continuous outcome", hint: "A modeling or prediction question." },
        { value: "predictors-to-categorical-outcome", label: "Predictors for a categorical outcome", hint: "The outcome is yes or no or another category." },
        { value: "two-categorical-variables", label: "Two categorical variables", hint: "A contingency table or category count question." },
        { value: "sample-summary", label: "Just summarizing the sample", hint: "Describing scores or counts rather than testing a relationship." },
        { value: "not-sure", label: "Not sure", hint: "The structure is still unclear." }
      ]
    },
    {
      key: "design",
      prompt: "What design sounds closest to your project?",
      options: [
        { value: "cross-sectional", label: "Cross-sectional", hint: "One main measurement point." },
        { value: "experimental", label: "Experimental or between-groups", hint: "Conditions or groups are being compared." },
        { value: "pre-post", label: "Pre-post", hint: "Before and after with the same people." },
        { value: "repeated", label: "Repeated measures", hint: "Linked observations over time or across conditions." },
        { value: "unsure", label: "Not sure", hint: "You need a more general starting point." }
      ]
    }
  ]
};
