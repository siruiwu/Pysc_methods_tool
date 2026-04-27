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
      confusion: "Describing a variable is not the same as testing a relationship or effect.",
      exampleSourceName: "UCLA OARC",
      exampleUrl: "https://stats.oarc.ucla.edu/annotatedoutput",
      exampleLabel: "Find annotated output"
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
      confusion: "Often confused with the paired t-test when students forget the data are independent.",
      exampleSourceName: "UCLA OARC",
      exampleUrl: "https://stats.oarc.ucla.edu/annotatedoutput",
      exampleLabel: "Find annotated output"
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
      confusion: "Often confused with the independent t-test because both compare two sets of scores.",
      exampleSourceName: "UCLA OARC",
      exampleUrl: "https://stats.oarc.ucla.edu/annotatedoutput",
      exampleLabel: "Find annotated output"
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
      confusion: "Often confused with a t-test when students focus on means but ignore the number of groups.",
      exampleSourceName: "UCLA OARC",
      exampleUrl: "https://stats.oarc.ucla.edu/annotatedoutput",
      exampleLabel: "Find annotated output"
    },
    {
      slug: "repeated-measures-anova",
      title: "Repeated Measures ANOVA",
      category: "Repeated measures",
      difficulty: "Intermediate",
      summary: "Compare a continuous outcome across three or more linked measurements from the same participants.",
      bestUseCase: "Three or more time points or conditions with the same participants.",
      researchGoals: ["compare-groups", "unsure"],
      outcomeTypes: ["continuous", "unsure"],
      structures: ["same-participants-three-plus", "not-sure"],
      designs: ["repeated", "pre-post", "unsure"],
      useWhen: "Use this when the same people are measured across more than two occasions or conditions.",
      checkNext: "Check whether your repeated measurements really come from the same participants across all time points or conditions.",
      confusion: "Often confused with the paired t-test, which is only for two linked measurements.",
      exampleSourceName: "UCLA OARC",
      exampleUrl: "https://stats.oarc.ucla.edu/annotatedoutput",
      exampleLabel: "Find annotated output"
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
      confusion: "Often confused with regression because both can involve the same pair of variables.",
      exampleSourceName: "UCLA OARC",
      exampleUrl: "https://stats.oarc.ucla.edu/annotatedoutput",
      exampleLabel: "Find annotated output"
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
      confusion: "Often confused with correlation, even though regression gives the variables different roles.",
      exampleSourceName: "UCLA OARC",
      exampleUrl: "https://stats.oarc.ucla.edu/annotatedoutput",
      exampleLabel: "Find annotated output"
    },
    {
      slug: "mediation-analysis",
      title: "Mediation Analysis",
      category: "Mechanisms",
      difficulty: "Intermediate-Advanced",
      summary: "Test whether the relationship between a predictor and an outcome may work through a third variable.",
      bestUseCase: "Questions about how or why one variable relates to another.",
      researchGoals: ["relationship", "predict", "unsure"],
      outcomeTypes: ["continuous", "binary", "unsure"],
      structures: ["predictors-to-outcome", "predictors-to-categorical-outcome", "not-sure"],
      designs: ["cross-sectional", "experimental", "unsure"],
      useWhen: "Use this when your question is about a possible pathway or mechanism rather than only whether two variables are related.",
      checkNext: "Make sure you can clearly justify the order of variables and explain why the mediator belongs between the predictor and the outcome.",
      confusion: "Often confused with moderation because both add a third variable, but mediation asks how or why while moderation asks when or for whom.",
      exampleSourceName: "JASP",
      exampleUrl: "https://jasp-stats.org/2020/03/12/mediation-and-moderation-analysis-in-jasp/",
      exampleLabel: "Read a guided tutorial"
    },
    {
      slug: "moderation-analysis",
      title: "Moderation Analysis",
      category: "Mechanisms",
      difficulty: "Intermediate-Advanced",
      summary: "Test whether the relationship between two variables changes across levels of a third variable.",
      bestUseCase: "Questions about when, for whom, or under what conditions an effect changes.",
      researchGoals: ["relationship", "predict", "compare-groups", "unsure"],
      outcomeTypes: ["continuous", "binary", "unsure"],
      structures: ["predictors-to-outcome", "predictors-to-categorical-outcome", "not-sure"],
      designs: ["cross-sectional", "experimental", "unsure"],
      useWhen: "Use this when you expect the size or direction of an effect to differ across people, contexts, or conditions.",
      checkNext: "Decide what variable plays the role of moderator and whether the moderation idea is theoretically justified before testing interactions.",
      confusion: "Often confused with mediation because both add a third variable, but moderation is about interaction rather than a pathway.",
      exampleSourceName: "JASP",
      exampleUrl: "https://jasp-stats.org/2020/03/12/mediation-and-moderation-analysis-in-jasp/",
      exampleLabel: "Read a guided tutorial"
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
      confusion: "Often confused with logistic regression when the outcome is categorical.",
      exampleSourceName: "UCLA OARC",
      exampleUrl: "https://stats.oarc.ucla.edu/annotatedoutput",
      exampleLabel: "Find annotated output"
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
      confusion: "Often confused with chi-square because both may involve categorical outcomes.",
      exampleSourceName: "UCLA OARC",
      exampleUrl: "https://stats.oarc.ucla.edu/annotatedoutput",
      exampleLabel: "Find annotated output"
    },
    {
      slug: "poisson-regression",
      title: "Poisson Regression",
      category: "Count outcomes",
      difficulty: "Intermediate",
      summary: "Model how predictors relate to an outcome that counts events, visits, or occurrences.",
      bestUseCase: "Prediction questions where the outcome is a count rather than a score or yes-or-no variable.",
      researchGoals: ["predict", "unsure"],
      outcomeTypes: ["count", "unsure"],
      structures: ["predictors-to-count-outcome", "not-sure"],
      designs: ["cross-sectional", "experimental", "repeated", "unsure"],
      useWhen: "Use this when the outcome is a count, such as number of visits, incidents, or symptoms.",
      checkNext: "Confirm that the outcome is really a count and consider whether the data may be too spread out for a simple Poisson model.",
      confusion: "Often confused with linear regression when students treat counts as if they were ordinary continuous scores.",
      exampleSourceName: "UCLA OARC",
      exampleUrl: "https://stats.oarc.ucla.edu/annotatedoutput",
      exampleLabel: "Find annotated output"
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
    },
    {
      title: "Paired t-test vs Repeated Measures ANOVA",
      summary: "Both use linked observations, but the paired t-test is for two measurements and repeated measures ANOVA handles three or more."
    },
    {
      title: "Chi-square vs Poisson Regression",
      summary: "Chi-square compares category counts in tables, while Poisson regression models a count outcome from predictors."
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
    },
    {
      title: "Three-Wave Stress Tracking Study",
      description: "A realistic project where the same students are measured several times across a term.",
      methods: "Repeated measures ANOVA, descriptive statistics",
      question: "I measured the same students at the start, middle, and end of the semester. How do I compare the pattern over time?"
    },
    {
      title: "Counting Campus Service Use",
      description: "A common applied question where the main outcome is the number of visits, appointments, or events.",
      methods: "Poisson regression, descriptive statistics",
      question: "Which student characteristics predict the number of counseling visits during the first term?"
    },
    {
      title: "Why Does the Effect Happen?",
      description: "A mechanism-focused project where a third variable may explain how one variable relates to another.",
      methods: "Mediation analysis, linear regression",
      question: "Does belonging explain why social support is linked to lower anxiety?"
    },
    {
      title: "For Whom Does the Effect Change?",
      description: "An interaction-focused project where the relationship may differ across subgroups or contexts.",
      methods: "Moderation analysis, linear regression",
      question: "Is the link between sleep and anxiety stronger for first-year students than for senior students?"
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
    },
    {
      title: "Measurement and Quality Path",
      audience: "Students who need help turning broad ideas into defensible variables and measures.",
      modules: "Research questions, variable types, reliability and validity, assumptions, effect sizes"
    },
    {
      title: "Reporting and Open Science Path",
      audience: "Students writing a paper, methods section, proposal, or thesis report.",
      modules: "Annotated outputs, APA reporting guidance, effect sizes, preregistration basics"
    }
  ],
  resources: [
    {
      slug: "research-question-basics",
      title: "What Is a Research Question?",
      summary: "Learn to distinguish questions about differences, relationships, prediction, and mechanisms."
    },
    {
      slug: "variable-types",
      title: "How to Identify Variable Types",
      summary: "Recognize the difference between continuous, categorical, binary, and count variables."
    },
    {
      slug: "research-design-basics",
      title: "Research Design Basics",
      summary: "Understand the difference between independent groups, repeated measures, and cross-sectional designs."
    },
    {
      slug: "measurement-reliability-validity",
      title: "Measurement, Reliability, and Validity",
      summary: "Learn how broad ideas become usable measures, and why a good measure needs both consistency and evidence that it captures the construct you care about.",
      audience: "Best when your question still uses broad concepts like stress, support, or wellbeing without a clear way to measure them.",
      url: "https://socialsci.libretexts.org/Bookshelves/Psychology/Research_Methods_and_Statistics/Research_Methods_in_Psychology_%28Jhangiani_Chiang_Cuttler_and_Leighton%29/04%3A_Psychological_Measurement/4.03%3A_Reliability_and_Validity_of_Measurement",
      sourceLabel: "Open LibreTexts chapter",
      sourceName: "LibreTexts"
    },
    {
      slug: "statistical-assumptions",
      title: "Common Statistical Assumptions",
      summary: "A plain-language introduction to the checks beginners should know before using a method."
    },
    {
      slug: "effect-sizes-power",
      title: "Effect Sizes and Power Analysis",
      summary: "Learn why statistical significance is not enough, how to think about effect size, and why power matters when planning a study.",
      audience: "Best for students planning sample size, interpreting practical importance, or writing up what their findings mean.",
      url: "https://stats.libretexts.org/Courses/Adler_University/Graduate-Level_Statistics_in_Psychology/09%3A_Effect_Sizes_and_Power_Analysis",
      sourceLabel: "Open effect size and power guide",
      sourceName: "Statistics LibreTexts"
    },
    {
      slug: "apa-reporting-standards",
      title: "APA Reporting Standards (JARS)",
      summary: "Use APA reporting guidance to see what quantitative studies should include in a methods or results write-up.",
      audience: "Best for students drafting papers, theses, or results sections in psychology and social science.",
      url: "https://www.apa.org/education-career/training/reporting-research-jars.html",
      sourceLabel: "Open APA reporting guide",
      sourceName: "American Psychological Association"
    },
    {
      slug: "annotated-output",
      title: "Annotated Outputs and Worked Examples",
      summary: "Read real output tables with footnotes and explanations so the jump from method choice to interpretation feels less intimidating.",
      audience: "Best for students who have a likely method but still do not know what the output means.",
      url: "https://stats.oarc.ucla.edu/annotatedoutput",
      sourceLabel: "Browse annotated outputs",
      sourceName: "UCLA OARC"
    },
    {
      slug: "mediation-moderation-guide",
      title: "Mediation and Moderation Guide",
      summary: "An introductory walkthrough for one of the most commonly confused advanced topics in social science methods.",
      audience: "Best for students who already understand basic regression and want help with third-variable questions.",
      url: "https://jasp-stats.org/2020/03/12/mediation-and-moderation-analysis-in-jasp/",
      sourceLabel: "Open guided tutorial",
      sourceName: "JASP"
    },
    {
      slug: "preregistration-open-science",
      title: "Preregistration and Open Science Basics",
      summary: "A beginner-friendly introduction to planning analyses in advance and being transparent about research decisions.",
      audience: "Best for thesis, honors, capstone, or instructor-reviewed student projects.",
      url: "https://www.cos.io/prereg/",
      sourceLabel: "Open preregistration guide",
      sourceName: "Center for Open Science"
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
      "same-participants-three-plus": ["three time points", "multiple time points", "repeatedly measured", "measured three times", "across sessions", "across waves"],
      "two-independent-groups": ["between", "compared with", "compared to", "treatment and control", "two groups", "first-year and senior", "men and women"],
      "three-plus-groups": ["three groups", "several groups", "across majors", "across conditions", "different groups"],
      "two-continuous-variables": ["relationship between", "related to", "association between", "correlation between"],
      "predictors-to-outcome": ["predict", "explains", "influence", "effect of"],
      "predictors-to-categorical-outcome": ["likelihood", "odds", "whether students", "yes or no", "binary"],
      "predictors-to-count-outcome": ["number of", "count of", "how many", "frequency of", "visits", "events"],
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
    intro:
      "Rescue each student's vague project idea before the proposal deadline. You have limited moves, so every narrowing decision matters.",
    moveLimit: 5,
    winThreshold: 4,
    cases: [
      {
        id: "social-media",
        student: "Maya",
        title: "Proposal Rescue 1",
        brief: "Maya says: 'I want to study social media and wellbeing.'",
        format: "generic",
        goalLabel: "Turn a broad topic into one focused relationship question.",
        starterQuestion: "How does social media affect wellbeing?",
        goodActions: [
          {
            id: "population",
            slot: "population",
            label: "Name a specific population",
            detail: "Choose who the study is actually about.",
            insert: "first-year university students",
            feedback: "Good move. A strong research question names a concrete population instead of just saying students or people."
          },
          {
            id: "focal",
            slot: "focalVariable",
            label: "Define the main predictor",
            detail: "Turn the broad topic into a measurable variable.",
            insert: "average daily social media use",
            feedback: "Good move. Narrowing works better when the topic becomes a variable that can actually be measured."
          },
          {
            id: "relation",
            slot: "relationPhrase",
            label: "Choose one question type",
            detail: "Decide what kind of link you are testing.",
            insert: "associated with",
            feedback: "Good move. Good questions usually make the type of relationship clearer: comparison, association, prediction, or change."
          },
          {
            id: "outcome",
            slot: "outcome",
            label: "Choose a measurable outcome",
            detail: "Pick one outcome rather than a broad idea.",
            insert: "self-reported loneliness scores",
            feedback: "Good move. A measurable outcome is a core part of a usable research question."
          },
          {
            id: "boundary",
            slot: "boundary",
            label: "Add a feasible boundary",
            detail: "Make the study manageable for one project.",
            insert: "during the first semester",
            feedback: "Good move. Feasible questions usually have a practical boundary in time, context, or scope."
          }
        ],
        trapActions: [
          {
            id: "bigger",
            label: "Add more big ideas",
            detail: "Expand the topic to social media, wellbeing, identity, and motivation.",
            feedback: "That makes the question broader, not sharper. A game-worthy move is to narrow, not pile on more abstract topics."
          },
          {
            id: "causal",
            label: "Use strong causal wording immediately",
            detail: "Rewrite it as social media causes loneliness.",
            feedback: "That jumps too quickly to causation before the design is clear. Start with a question you can realistically study."
          },
          {
            id: "moral",
            label: "Use evaluative wording",
            detail: "Ask whether social media is bad for students.",
            feedback: "Value words like good or bad usually make the question less measurable."
          }
        ]
      },
      {
        id: "workshop",
        student: "Owen",
        title: "Proposal Rescue 2",
        brief: "Owen says: 'Does a workshop help students?'",
        format: "generic",
        goalLabel: "Rescue a vague intervention question before the proposal meeting.",
        starterQuestion: "Does a workshop help students?",
        goodActions: [
          {
            id: "population",
            slot: "population",
            label: "Name a real student group",
            detail: "Specify who the workshop is meant for.",
            insert: "first-year psychology students",
            feedback: "Good move. The population is clearer, which makes the question easier to study and easier to recruit for."
          },
          {
            id: "focal",
            slot: "focalVariable",
            label: "Specify the intervention or comparison",
            detail: "State what is actually being tested.",
            insert: "participation in a four-week mindfulness workshop",
            feedback: "Good move. Vague words like workshop are much stronger when the intervention is concrete."
          },
          {
            id: "relation",
            slot: "relationPhrase",
            label: "Choose the relationship type",
            detail: "Decide how the intervention relates to the outcome.",
            insert: "associated with lower",
            feedback: "Good move. This keeps the wording measurable without claiming too much too early."
          },
          {
            id: "outcome",
            slot: "outcome",
            label: "Pick one measurable outcome",
            detail: "Choose what success will look like.",
            insert: "perceived stress scores",
            feedback: "Good move. A good research question usually names one main outcome instead of a vague idea like help."
          },
          {
            id: "boundary",
            slot: "boundary",
            label: "Add a study boundary",
            detail: "Clarify when or where the question applies.",
            insert: "by the end of the term",
            feedback: "Good move. A manageable boundary makes the question more feasible for one undergraduate study."
          }
        ],
        trapActions: [
          {
            id: "everything",
            label: "Ask about every possible benefit",
            detail: "Include stress, grades, friendships, and sleep in one question.",
            feedback: "That creates too many outcomes at once. Strong questions usually protect focus."
          },
          {
            id: "magic",
            label: "Assume the workshop works",
            detail: "Rewrite it as why the workshop improves students.",
            feedback: "That assumes the answer before the study. A better move is to frame a testable question."
          },
          {
            id: "vague-pop",
            label: "Keep the population broad",
            detail: "Leave it as students in general.",
            feedback: "That sounds fine at first, but it weakens feasibility and clarity."
          }
        ]
      },
      {
        id: "sleep-anxiety",
        student: "Leah",
        title: "Proposal Rescue 3",
        brief: "Leah says: 'I want to see whether sleep matters for anxiety.'",
        format: "generic",
        goalLabel: "Build a final question that is specific enough to survive a methods-class review.",
        starterQuestion: "Does sleep matter for anxiety?",
        goodActions: [
          {
            id: "population",
            slot: "population",
            label: "Name the population",
            detail: "Choose who the question is about.",
            insert: "undergraduate students living in residence",
            feedback: "Good move. Population helps a broad topic become a study."
          },
          {
            id: "focal",
            slot: "focalVariable",
            label: "Define sleep as a variable",
            detail: "Make the main concept measurable.",
            insert: "average nightly sleep duration",
            feedback: "Good move. Sleep becomes more research-ready when it is phrased as something measurable."
          },
          {
            id: "relation",
            slot: "relationPhrase",
            label: "Choose one relationship frame",
            detail: "Stay focused on one kind of answer.",
            insert: "associated with",
            feedback: "Good move. A clear relationship frame makes later method choice much easier."
          },
          {
            id: "outcome",
            slot: "outcome",
            label: "Make anxiety measurable",
            detail: "Choose one specific outcome variable.",
            insert: "weekly anxiety scale scores",
            feedback: "Good move. A broad idea becomes usable when you attach it to a concrete measure."
          },
          {
            id: "boundary",
            slot: "boundary",
            label: "Add a manageable boundary",
            detail: "Limit time or context so the study stays feasible.",
            insert: "during the month before final exams",
            feedback: "Good move. A focused boundary makes the project feel achievable."
          }
        ],
        trapActions: [
          {
            id: "double-question",
            label: "Ask two questions at once",
            detail: "Also ask whether exercise and diet matter at the same time.",
            feedback: "That weakens focus. A small study works better when one main question leads the design."
          },
          {
            id: "why",
            label: "Switch to a broad why question",
            detail: "Ask why students are anxious in general.",
            feedback: "That may be interesting, but it changes the project into something much broader and less measurable."
          },
          {
            id: "importance",
            label: "Use importance language",
            detail: "Ask whether sleep is important for students.",
            feedback: "Importance language sounds persuasive, but it does not make the question measurable."
          }
        ]
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
        { value: "same-participants-three-plus", label: "The same participants measured three or more times", hint: "Several linked time points or conditions." },
        { value: "three-plus-groups", label: "Three or more groups", hint: "Several conditions or categories to compare." },
        { value: "two-continuous-variables", label: "Two continuous variables", hint: "You want to study how two scores vary together." },
        { value: "predictors-to-outcome", label: "One or more predictors for a continuous outcome", hint: "A modeling or prediction question." },
        { value: "predictors-to-categorical-outcome", label: "Predictors for a categorical outcome", hint: "The outcome is yes or no or another category." },
        { value: "predictors-to-count-outcome", label: "Predictors for a count outcome", hint: "The outcome is a number of visits, events, or occurrences." },
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
