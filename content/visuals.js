/* Figures for lessons: charts, animated scenes, images and videos.
   WP.addFigures({ lessonId: { story: [...], mcq: [...], tf: [...] } })
   - story entries place a figure inside the lesson text:
       { section: "Heading text", fig }  -> at the end of that section
       { after: "Start of a paragraph", fig } -> right after that paragraph
       { fig }                           -> at the end of the story
   - mcq / tf entries are extra quiz questions; add `fig` to show a visual
     with the question. They're appended to the lesson's own questions.
   Figure formats are documented at the top of js/visuals.js. */

(function () {
  // Shared shapes for the supply & demand scene.
  const D = (x) => 9 - 0.7 * x;
  const S = (x) => 1 + 0.7 * x;
  const S2 = (x) => 3 + 0.7 * x;
  const supplyScene = {
    type: "scene",
    title: "What a supply shock does to price",
    x: [0, 10], y: [0, 10], xlabel: "Quantity", ylabel: "Price",
    steps: [
      { say: "Demand slopes down: the higher the price, the less people want to buy.",
        add: [{ fn: D, id: "D", color: "blue", label: "Demand", labelX: 9.6 }] },
      { say: "Supply slopes up: higher prices tempt producers to offer more.",
        add: [{ fn: S, id: "S", color: "yellow", label: "Supply", labelX: 9.6 }] },
      { say: "Where they cross is the equilibrium: the price where buyers and sellers agree on how much changes hands.",
        add: [
          { line: [[0, 5], [5.71, 5]], id: "g1", color: "grey", dash: true },
          { line: [[5.71, 0], [5.71, 5]], id: "g2", color: "grey", dash: true },
          { pt: [5.71, 5], id: "E", color: "white", label: "Equilibrium" },
        ] },
      { say: "Now a drought cuts supply. The whole supply curve shifts left: at every price, less is offered.",
        add: [
          { dim: ["g1", "g2"] },
          { morph: "S", fn: S2 },
          { arrow: [[7.2, 6.2], [5.6, 7.6]], color: "red" },
          { text: "Supply falls", at: [8.2, 5.6], color: "red", size: 18 },
        ] },
      { say: "The new crossing sits higher and further left. Price rises from 5 to 6, and fewer units change hands. That's a shift of the curve, not a movement along it.",
        add: [
          { move: "E", to: [4.29, 6] },
          { line: [[0, 6], [4.29, 6]], color: "yellow", dash: true },
          { line: [[4.29, 0], [4.29, 6]], color: "yellow", dash: true },
          { text: "6", at: [-0.35, 6], color: "yellow", size: 18, anchor: "end" },
          { text: "5", at: [-0.35, 5], color: "grey", size: 18, anchor: "end" },
        ] },
    ],
  };

  const normal = (x) => Math.exp(-x * x / 2) / Math.sqrt(2 * Math.PI);
  const fat = (x) => 0.3676 * Math.pow(1 + x * x / 3, -2); // Student-t, 3 degrees of freedom
  const bellScene = {
    type: "scene",
    title: "The bell curve, and why tails matter",
    x: [-4, 4], y: [0, 0.45], xlabel: "Standard deviations from the average",
    ticks: { x: [-3, -2, -1, 0, 1, 2, 3] },
    steps: [
      { say: "A bell curve shows how likely each outcome is. Most results cluster near the average, in the middle.",
        add: [{ fn: normal, id: "N", color: "blue" }] },
      { say: "About 68% of outcomes land within one standard deviation either side of the average.",
        add: [
          { area: normal, from: -1, to: 1, color: "blue", id: "a1" },
          { text: "68%", at: [0, 0.17], color: "white", size: 24 },
        ] },
      { say: "Stretch to two standard deviations and you capture about 95%.",
        add: [
          { area: normal, from: -2, to: -1, color: "teal", id: "a2" },
          { area: normal, from: 1, to: 2, color: "teal", id: "a3" },
          { text: "95% within ±2", at: [2.6, 0.2], color: "teal", size: 18 },
        ] },
      { say: "That leaves about 2.5% in each tail. In a normal world, a 'three-sigma' day is a once-in-a-few-years event.",
        add: [
          { area: normal, from: -4, to: -2, color: "red", id: "t1" },
          { area: normal, from: 2, to: 4, color: "red", id: "t2" },
          { text: "2.5% each tail", at: [2.9, 0.07], color: "red", size: 17 },
        ] },
      { say: "Real markets have fatter tails. Extreme days happen far more often than the bell curve promises, which is exactly when models fail.",
        add: [
          { dim: ["a1", "a2", "a3", "t1", "t2"] },
          { fn: fat, id: "F", color: "gold", width: 3, label: "Fat-tailed", labelAt: [-1.2, 0.36] },
          { arrow: [[-3.4, 0.11], [-3.05, 0.035]], color: "gold" },
          { text: "More extreme days", at: [-2.6, 0.135], color: "gold", size: 17 },
        ] },
    ],
  };

  const loss = (x) => 0.28 * (x - 6.5) * (x - 6.5) + 1;
  const descentScene = {
    type: "scene",
    title: "Gradient descent: how a model learns",
    x: [0, 10], y: [0, 14], xlabel: "A model setting (one of billions)", ylabel: "Error",
    steps: [
      { say: "Imagine plotting the model's error against one of its settings. Training means finding the setting with the lowest error.",
        add: [{ fn: loss, id: "L", color: "blue", label: "Error", labelX: 9.6 }] },
      { say: "The model starts somewhere random. It can't see the whole curve, only the slope where it stands.",
        add: [{ pt: [0.6, loss(0.6)], id: "B", color: "yellow" }, { text: "Start", at: [1.5, loss(0.6) + 0.6], color: "yellow", size: 17, anchor: "start" }] },
      { say: "So it takes a step downhill. Steep slope, bigger step.",
        add: [
          { arrow: [[0.6, loss(0.6)], [2.9, loss(2.9)]], color: "yellow", dash: true },
          { move: "B", to: [2.9, loss(2.9)] },
        ] },
      { say: "And again. As the ground flattens, the steps get smaller.",
        add: [{ move: "B", to: [4.8, loss(4.8)] }] },
      { say: "Until it settles near the bottom. Repeat that for billions of settings at once, millions of times, and you have training.",
        add: [
          { move: "B", to: [6.3, loss(6.3)] },
          { text: "Lowest error", at: [6.5, 3.2], color: "green", size: 18 },
        ] },
    ],
  };

  const compScene = {
    type: "scene",
    title: "1% better every day",
    x: [0, 365], y: [0, 40], xlabel: "Days", ticks: { x: [0, 90, 180, 270, 365], y: [1, 10, 20, 30, 40] },
    steps: [
      { say: "Start at one: where you are today.",
        add: [{ fn: () => 1, id: "flat", color: "grey", width: 3, label: "Stay the same", labelX: 75 }] },
      { say: "Now get 1% better each day. For months, it barely seems to move.",
        add: [{ fn: (x) => Math.pow(1.01, x), id: "up", color: "yellow", label: "1% better daily", labelX: 300 }] },
      { say: "Then compounding takes over. After a year, 1.01 to the power of 365 is about 37.8. Nearly 38 times better.",
        add: [
          { pt: [365, 37.78], color: "yellow" },
          { text: "37.8×", at: [338, 37], color: "yellow", size: 22, anchor: "end" },
        ] },
      { say: "Slip 1% a day and you end the year at 0.03. Tiny daily differences become enormous gaps.",
        add: [
          { fn: (x) => Math.pow(0.99, x), id: "down", color: "red", width: 3 },
          { text: "1% worse daily → 0.03×", at: [120, 9], color: "red", size: 17 },
          { arrow: [[140, 7.4], [200, 0.9]], color: "red" },
        ] },
    ],
  };

  WP.addFigures({
    "econ-01": {
      story: [{ section: "Shifts move the price", fig: supplyScene }],
      mcq: [{
        q: "In this animation, supply shifts left while demand stays put. What happens?",
        fig: supplyScene,
        a: ["Price rises and quantity falls", "Price falls and quantity rises", "Both price and quantity rise", "Nothing changes until demand moves"],
        c: 0,
        why: "Less supply at every price moves the crossing point up and to the left.",
      }],
    },

    "econ-02": {
      story: [{
        section: "Measuring it",
        fig: {
          type: "chart", kind: "column",
          title: "Canadian inflation peaked in 2022 at more than three times the 2% target",
          sub: "Consumer Price Index, annual average change, %",
          data: [["2019", 1.9], ["2020", 0.7], ["2021", 3.4], ["2022", 6.8], ["2023", 3.9], ["2024", 2.4]],
          highlight: "2022", suffix: "%", decimals: 1, unit: "CPI change",
          source: "Statistics Canada, Consumer Price Index (annual averages)",
        },
      }],
      mcq: [{
        q: "Using the chart, roughly how far above the Bank of Canada's 2% target was inflation in 2022?",
        fig: {
          type: "chart", kind: "column",
          title: "Canadian CPI inflation, annual average",
          data: [["2019", 1.9], ["2020", 0.7], ["2021", 3.4], ["2022", 6.8], ["2023", 3.9], ["2024", 2.4]],
          highlight: "2022", suffix: "%", decimals: 1,
        },
        a: ["About 4.8 percentage points", "About 2 percentage points", "About 6.8 percentage points", "About 1 percentage point"],
        c: 0,
        why: "6.8% minus the 2% target is 4.8 points — more than three times the target.",
      }],
    },

    "inv-01": {
      story: [
        { section: "Compounding: growth on growth", fig: compScene },
        {
          section: "Compounding: growth on growth",
          fig: {
            type: "chart", kind: "line",
            title: "Three extra points of return more than doubles the ending balance after 30 years",
            sub: "Value of $10,000 invested, $ thousands",
            x: ["0", "5", "10", "15", "20", "25", "30 yrs"],
            series: [
              { name: "7% a year", values: [10, 14, 19.7, 27.6, 38.7, 54.3, 76.1], highlight: true },
              { name: "4% a year", values: [10, 12.2, 14.8, 18, 21.9, 26.7, 32.4] },
              { name: "Cash at 0%", values: [10, 10, 10, 10, 10, 10, 10] },
            ],
            prefix: "$", suffix: "k", decimals: 0,
            note: "Illustrative: one $10,000 lump sum, compounded yearly, before fees and taxes.",
          },
        },
      ],
      mcq: [{
        q: "In the chart, why does the 7% line pull away faster in later years?",
        fig: {
          type: "chart", kind: "line",
          title: "Value of $10,000, $ thousands",
          x: ["0", "10", "20", "30 yrs"],
          series: [
            { name: "7% a year", values: [10, 19.7, 38.7, 76.1], highlight: true },
            { name: "4% a year", values: [10, 14.8, 21.9, 32.4] },
          ],
          prefix: "$", suffix: "k", decimals: 0,
        },
        a: ["Each year's growth is earned on a bigger balance", "The rate of return increases over time", "Fees fall as the balance grows", "Inflation stops after 20 years"],
        c: 0,
        why: "Compounding: returns earn returns, so the yearly gain grows even at a constant rate.",
      }],
    },

    "risk-01": {
      story: [{ section: "The bell curve and its limits", fig: bellScene }],
      tf: [{
        s: "On a normal bell curve, about 95% of outcomes fall within two standard deviations of the average.",
        fig: bellScene,
        v: true,
        why: "Roughly 68% within one, 95% within two, 99.7% within three.",
      }],
    },

    "risk-04": {
      story: [{
        section: "Expected loss",
        fig: {
          type: "chart", kind: "bar",
          title: "The business loan carries most of the expected loss, though the mortgage is far bigger",
          sub: "Expected loss per loan (PD × LGD × EAD), $",
          data: [["Small-business loan", 2700], ["Mortgage", 400], ["Car loan", 300], ["Credit card", 240]],
          highlight: "Small-business loan", prefix: "$", unit: "Expected loss",
          note: "Illustrative. Mortgage: 0.5% × 20% × $400k. Business loan: 4% × 45% × $150k. Car: 2% × 50% × $30k. Card: 3% × 80% × $10k.",
        },
      }],
    },

    "cfa-03": {
      story: [{
        section: "Three statements, three questions",
        fig: {
          type: "chart", kind: "waterfall",
          title: "Of every $100 of sales, this company keeps $11 as profit",
          sub: "Income statement walk, $ per $100 of revenue",
          data: [["Revenue", 100, "total"], ["Cost of sales", -60], ["Operating costs", -22], ["Interest", -3], ["Tax", -4], ["Net income", 11, "total"]],
          prefix: "$", unit: "$ per $100",
          note: "Illustrative company.",
        },
      }],
      mcq: [{
        q: "In this income statement walk, which line takes the biggest bite out of revenue?",
        fig: {
          type: "chart", kind: "waterfall",
          title: "From $100 of revenue to net income",
          data: [["Revenue", 100, "total"], ["Cost of sales", -60], ["Operating", -22], ["Interest", -3], ["Tax", -4], ["Net income", 11, "total"]],
          prefix: "$",
        },
        a: ["Cost of sales", "Operating costs", "Tax", "Interest"],
        c: 0,
        why: "Cost of sales removes $60 of every $100 before any other cost.",
      }],
    },

    "ai-01": {
      story: [{
        fig: {
          type: "video", youtube: "wjZofJX0v4M", by: "3Blue1Brown", mins: 27,
          title: "But what is a GPT? Visual intro to transformers",
          why: "Optional deep dive: the best visual explanation of how a language model predicts the next word.",
        },
      }],
    },

    "ai-02": {
      story: [
        { section: "Stage 1: read everything", fig: descentScene },
        {
          fig: {
            type: "video", youtube: "IHZwWFHWa-w", by: "3Blue1Brown", mins: 21,
            title: "Gradient descent, how neural networks learn",
            why: "Optional deep dive into the idea in the animation above.",
          },
        },
      ],
    },

    "ai-03": {
      story: [{
        section: "Attention: let every word look at every other word",
        fig: {
          type: "video", youtube: "eMlx5fFNoYc", by: "3Blue1Brown", mins: 26,
          title: "Attention in transformers, visually explained",
          why: "Optional: watch attention happen, word by word.",
        },
      }],
    },
  });
})();
