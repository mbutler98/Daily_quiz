/* Topic: Risk Modelling */
WP.addTopic({
  id: "risk",
  name: "Risk Modelling",
  code: "RISK",
  blurb: "How banks, insurers and investors put numbers on uncertainty — and where those numbers break.",
  lessons: [
    {
      id: "risk-01",
      title: "Thinking in Distributions",
      level: "Foundation",
      hook: "Ask 'what will happen?' and you'll get one answer, usually wrong. Ask 'what could happen, and how likely is each outcome?' and you're thinking like a risk modeller.",
      bluf: "Risk modelling replaces single forecasts with ranges of outcomes and their probabilities — a distribution. The mean tells you the centre, the standard deviation tells you the spread, and the tails tell you about rare, extreme events, which matter most.",
      story: [
        "## From a number to a shape",
        "A single forecast ('sales will be $10 million') hides uncertainty. A distribution shows all plausible outcomes and how likely each is: maybe sales land between $8 and $12 million most of the time, with a small chance of $5 million or $15 million. Decisions improve when you can see the whole shape.",
        "## Mean and standard deviation",
        "The mean (average) is the centre of the distribution. The standard deviation measures spread: how far outcomes typically land from the mean. In finance, the standard deviation of returns is called volatility. A stock with 30% volatility swings much more than a bond fund with 5%.",
        "## The bell curve and its limits",
        "The normal distribution — the bell curve — is mathematically convenient: about 68% of outcomes fall within one standard deviation of the mean, 95% within two, and 99.7% within three. Many models assume it. The problem: real financial returns have 'fat tails'. Extreme moves happen far more often than the bell curve predicts.",
        "On 19 October 1987 ('Black Monday'), the Dow Jones fell about 22.6% in one day. Under a normal distribution with typical volatility, a move that large should essentially never happen in the lifetime of the universe. Yet it did — and big moves keep happening.",
        "## Fat tails and black swans",
        "Nassim Taleb popularised the term 'black swan' for rare, high-impact events that seem obvious only in hindsight. His point: in many domains, the extremes drive the outcomes, so models that underweight them create false confidence.",
        "## Correlation",
        "Risk also depends on how things move together. Two risks that are each manageable can become dangerous if they tend to go wrong at the same time — like house prices falling and unemployment rising together."
      ],
      points: [
        { h: "Distribution", t: "The full range of possible outcomes with their probabilities." },
        { h: "Standard deviation", t: "A measure of spread; called volatility for financial returns." },
        { h: "Normal distribution", t: "The bell curve: 68–95–99.7% within 1, 2 and 3 standard deviations." },
        { h: "Fat tails", t: "Extreme events happen more often than the bell curve predicts." },
        { h: "Correlation", t: "How risks move together; crucial for combined exposures." }
      ],
      example: "An insurer pricing home policies in a flood-prone city can't just use the average annual claims. One major flood can produce more claims than a decade of normal years. Its pricing and capital must reflect the tail, not the average.",
      pitfall: "Treating the average as 'what will happen'. If you cross a river that is on average one metre deep, you can still drown in the deep part.",
      terms: [
        ["Probability distribution", "A description of all possible outcomes and how likely each is."],
        ["Standard deviation", "A measure of how spread out outcomes are around the mean."],
        ["Volatility", "The standard deviation of an asset's returns."],
        ["Fat tails", "When extreme outcomes are more likely than a normal distribution suggests."],
        ["Black swan", "A rare, unpredictable event with major impact."]
      ],
      mcq: [
        { q: "Under a normal distribution, about what share of outcomes fall within two standard deviations?", a: ["95%", "68%", "50%", "99.99%"], c: 0, why: "The 68–95–99.7 rule." },
        { q: "'Fat tails' means…", a: ["Extreme events are more common than the bell curve predicts", "The average is high", "Volatility is zero", "Returns are always positive"], c: 0, why: "Tails hold more probability." },
        { q: "How much did the Dow fall on Black Monday, 1987?", a: ["About 22.6%", "About 2%", "About 50%", "About 5%"], c: 0, why: "The largest one-day percentage drop in its history." },
        { q: "Who popularised the 'black swan' idea?", a: ["Nassim Taleb", "Warren Buffett", "Daniel Kahneman", "Harry Markowitz"], c: 0, why: "In his 2007 book." }
      ],
      tf: [
        { s: "Financial returns closely follow the normal distribution, including in the tails.", v: false, why: "They have fat tails." },
        { s: "Volatility is the standard deviation of returns.", v: true, why: "That's the definition." },
        { s: "Risks that are fine individually can be dangerous if they're correlated.", v: true, why: "They can hit at the same time." }
      ],
      think: [
        "What decision in your life are you treating as a single forecast instead of a range?",
        "What's a 'fat-tail' risk in your job — rare but devastating?",
        "Which of your risks would all go wrong at once in a recession?"
      ],
      talk: "Under a standard bell curve, the 22.6% one-day crash on Black Monday in 1987 should basically never have happened. Real markets have 'fat tails': extreme days come far more often than the neat models predict."
    },
    {
      id: "risk-02",
      title: "Value at Risk (VaR)",
      level: "Intermediate",
      hook: "In the early 1990s, JPMorgan's chairman reportedly asked for a single number, delivered at 4:15 each afternoon, showing how much the bank could lose the next day. That request helped create Value at Risk — the most famous, and most criticised, number in risk management.",
      bluf: "Value at Risk (VaR) estimates the loss you shouldn't exceed over a period with a given confidence — for example, 'a 1-day 99% VaR of $10 million'. It's simple to communicate, but it says nothing about how bad losses get beyond that line. Expected Shortfall fixes that.",
      story: [
        "## Reading a VaR number",
        "A 1-day 99% VaR of $10 million means: on 99 days out of 100, we expect to lose less than $10 million. On the remaining 1 day in 100, losses will be bigger — but VaR doesn't say how much bigger. Over a year of about 250 trading days, you'd expect two or three days worse than VaR.",
        "## Three ways to calculate it",
        "Historical simulation: take today's portfolio, apply the actual market moves from, say, the past 500 days, and look at the 1% worst outcome. Simple and uses real data, but assumes the past represents the future. Parametric (variance–covariance): assume returns are normally distributed and use volatilities and correlations to compute the loss. Fast, but fat tails break it. Monte Carlo: simulate thousands of random scenarios from a chosen model. Flexible, but only as good as the model.",
        "## Why it became popular",
        "VaR boils complex portfolios into one number executives and regulators can track. JPMorgan published its RiskMetrics methodology in 1994, and regulators adopted VaR for bank capital rules on market risk.",
        "## What it misses",
        "VaR is silent on the size of losses beyond the cut-off. Two portfolios can have the same VaR while one loses $11 million on bad days and the other loses $500 million. Critics argued VaR gave false comfort before 2008, especially since it was often based on calm recent history.",
        "## Expected Shortfall",
        "Expected Shortfall (ES), also called conditional VaR, answers the missing question: when losses exceed the VaR line, how big are they on average? The Basel Committee's revised market risk rules (the 'Fundamental Review of the Trading Book') moved from 99% VaR to 97.5% Expected Shortfall for this reason."
      ],
      points: [
        { h: "VaR definition", t: "A loss threshold not exceeded with a given confidence over a given period." },
        { h: "Expect breaches", t: "A 99% daily VaR should be exceeded about 2–3 days a year." },
        { h: "Three methods", t: "Historical simulation, parametric (variance–covariance) and Monte Carlo." },
        { h: "Tail blindness", t: "VaR says nothing about how large losses get beyond the threshold." },
        { h: "Expected Shortfall", t: "The average loss beyond VaR; now used in Basel market-risk rules." }
      ],
      example: "In 2012, JPMorgan's 'London Whale' trades lost over $6 billion. Shortly before, a change to the VaR model used for the unit had roughly halved its reported VaR, making the positions look less risky — a reminder that a risk number is only as good as the model behind it.",
      pitfall: "Reading 99% VaR as 'the most we can lose'. It's the line exceeded 1% of the time; the losses beyond it can be catastrophically larger.",
      terms: [
        ["Value at Risk (VaR)", "The loss level not expected to be exceeded at a given confidence over a given period."],
        ["Confidence level", "The probability (e.g. 99%) that losses stay within the VaR."],
        ["Historical simulation", "Estimating VaR by applying past market moves to today's portfolio."],
        ["Expected Shortfall", "The average loss in the worst cases beyond the VaR threshold."],
        ["Backtesting", "Comparing actual losses with VaR predictions to check a model."]
      ],
      mcq: [
        { q: "A 1-day 99% VaR of $5m means…", a: ["Losses should exceed $5m on about 1 day in 100", "Maximum possible loss is $5m", "Average daily loss is $5m", "Profit is guaranteed 99% of days"], c: 0, why: "It's a threshold, not a maximum." },
        { q: "What does Expected Shortfall measure?", a: ["Average loss beyond the VaR level", "The best-case gain", "Daily volatility", "Capital ratio"], c: 0, why: "It looks into the tail." },
        { q: "Which VaR method uses actual past market moves?", a: ["Historical simulation", "Parametric", "Monte Carlo", "Gordon growth"], c: 0, why: "It replays history." },
        { q: "Over 250 trading days, how many breaches of a 99% daily VaR are expected?", a: ["About 2–3", "Zero", "About 25", "About 99"], c: 0, why: "1% of 250 ≈ 2.5." }
      ],
      tf: [
        { s: "VaR tells you how large losses are beyond the threshold.", v: false, why: "That's Expected Shortfall's job." },
        { s: "JPMorgan published RiskMetrics in 1994.", v: true, why: "Popularising VaR." },
        { s: "Basel's revised market risk rules moved toward Expected Shortfall.", v: true, why: "97.5% ES." }
      ],
      think: [
        "What would be your personal 'VaR' — the most you'd expect to lose in a bad month?",
        "Why might a single number be dangerous even when it's accurate?",
        "If you were a regulator, how would you stop banks tweaking models to look safer?"
      ],
      talk: "A 99% Value at Risk isn't 'the most we can lose'. It's the line you expect to cross about one day in a hundred, and it says nothing about how bad those days get. That gap is why regulators now also look at Expected Shortfall."
    },
    {
      id: "risk-03",
      title: "Monte Carlo Simulation",
      level: "Intermediate",
      hook: "During the Manhattan Project, mathematician Stanisław Ulam, recovering from an illness, wondered about the chances of winning at solitaire. Instead of calculating, he imagined just playing hundreds of games and counting. That idea — named after the Monte Carlo casino — became one of the most useful tools in science and finance.",
      bluf: "Monte Carlo simulation answers 'what might happen?' by running thousands of random scenarios through a model and studying the spread of results. It handles complex, messy problems that formulas can't, but its answers are only as good as its assumptions.",
      story: [
        "## The idea",
        "Some problems are too complicated to solve with a neat equation: retirement savings with uncertain returns, inflation and spending; a project with dozens of uncertain tasks; a portfolio of hundreds of loans. Monte Carlo sidesteps the maths. You describe each uncertain input as a distribution, draw random values for all of them, compute the result, and repeat — 10,000 times or more. The results form a distribution you can study.",
        "## A retirement example",
        "Suppose you have $500,000 and plan to withdraw $30,000 a year. Returns vary year to year. A single average-return projection might say your money lasts forever. A Monte Carlo simulation might show that in 15% of scenarios — especially those with bad markets early in retirement — you run out before age 90. That 'sequence of returns' risk is invisible in an average.",
        "## Where it's used",
        "Finance (pricing complex derivatives, portfolio risk, credit losses), engineering (reliability), project management (schedule risk), insurance (catastrophe losses), physics and climate science. The original Monte Carlo work at Los Alamos in the 1940s modelled neutron behaviour for nuclear weapons.",
        "## Getting it right",
        "Three things matter. Inputs: the distributions you choose (fat-tailed or normal? correlated or independent?) drive the results. Number of runs: more runs reduce random noise. Correlations: if inputs move together in real life — rates and defaults, say — the model must capture that, or it will understate risk.",
        "## Garbage in, garbage out",
        "Monte Carlo produces impressive-looking charts with precise percentages, which can give false confidence. The precision of the output says nothing about whether the assumptions are right."
      ],
      points: [
        { h: "Simulate, don't solve", t: "Run thousands of random scenarios instead of finding a formula." },
        { h: "Inputs as distributions", t: "Each uncertain input is described by a range and its probabilities." },
        { h: "Outputs as distributions", t: "Study percentiles and probabilities of bad outcomes, not just the average." },
        { h: "Correlation matters", t: "Inputs that move together must be modelled together." },
        { h: "Assumptions drive results", t: "Precise-looking outputs can hide poor assumptions." }
      ],
      example: "Financial planners often show clients a 'probability of success' from a Monte Carlo simulation — say, 85% chance their savings last to age 95. Adjusting spending, retirement age or asset mix shows how each choice changes the odds.",
      pitfall: "Trusting the decimals. A '92.4% probability of success' sounds scientific, but if the return assumptions are optimistic, the real figure could be far lower.",
      terms: [
        ["Monte Carlo simulation", "Estimating outcomes by running many random scenarios through a model."],
        ["Random sampling", "Drawing input values randomly according to their distributions."],
        ["Sequence-of-returns risk", "The danger that poor returns early in withdrawals deplete savings."],
        ["Percentile", "The value below which a given percentage of outcomes fall."],
        ["Model assumption", "A chosen input or relationship that the simulation depends on."]
      ],
      mcq: [
        { q: "Monte Carlo simulation is named after…", a: ["A casino in Monaco", "A mathematician", "A computer", "A Wall Street firm"], c: 0, why: "Randomness, like gambling." },
        { q: "What does a Monte Carlo simulation produce?", a: ["A distribution of possible outcomes", "One exact answer", "A legal opinion", "A tax return"], c: 0, why: "Many runs give a spread." },
        { q: "Bad markets early in retirement hurt more than late. This is…", a: ["Sequence-of-returns risk", "Inflation risk", "Liquidity risk", "Currency risk"], c: 0, why: "Withdrawals lock in early losses." },
        { q: "Running more simulations mainly reduces…", a: ["Random noise in the results", "Bad assumptions", "Fat tails", "Correlation"], c: 0, why: "It doesn't fix wrong inputs." }
      ],
      tf: [
        { s: "Monte Carlo methods were developed partly at Los Alamos in the 1940s.", v: true, why: "Ulam and von Neumann." },
        { s: "A precise-looking output proves the model's assumptions are right.", v: false, why: "Garbage in, garbage out." },
        { s: "Ignoring correlation between inputs can understate risk.", v: true, why: "Bad things often happen together." }
      ],
      think: [
        "What decision in your life would look different if you saw a range of outcomes instead of an average?",
        "Which of your plans depends most on things going right early?",
        "How would you explain an 85% 'probability of success' to someone who thinks it's a guarantee?"
      ],
      talk: "Monte Carlo simulation started with mathematician Stanisław Ulam wondering about his odds of winning solitaire. Instead of doing the maths, he imagined playing hundreds of games and counting. Running many random 'what ifs' now powers retirement planning, derivatives pricing and engineering."
    },
    {
      id: "risk-04",
      title: "Credit Risk: PD, LGD, EAD",
      level: "Intermediate",
      hook: "Every bank loan is a small bet that the borrower will pay you back. Credit risk modelling breaks that bet into three questions — and multiplies the answers.",
      bluf: "Expected loss on a loan = probability of default (PD) × loss given default (LGD) × exposure at default (EAD). Banks use these to price loans, set provisions and calculate capital. Unexpected losses — the bad years — are what capital is for.",
      story: [
        "## Three questions",
        "Probability of default (PD): how likely is the borrower to stop paying within a year? Loss given default (LGD): if they do, what share of the money do we lose after recoveries like selling collateral? Exposure at default (EAD): how much will they owe at the moment of default — including undrawn credit lines they may max out on the way down?",
        "## Expected loss",
        "Multiply them: EL = PD × LGD × EAD. A $1 million business loan with a 2% PD and 40% LGD has an expected loss of $8,000 a year. That's a cost of doing business, priced into the interest rate and covered by provisions.",
        "## Where the numbers come from",
        "PD comes from credit scores, financial ratios, payment history and credit ratings. In Canada, consumer credit scores from Equifax and TransUnion range roughly from 300 to 900. LGD depends on collateral and seniority: a mortgage on a house typically has low LGD; an unsecured credit card has high LGD. EAD matters most for revolving credit, where borrowers often draw down limits as trouble builds.",
        "## Unexpected loss and capital",
        "Averages aren't the danger; bad years are. In a recession, defaults rise across many borrowers at once (correlation again). Under the Basel framework's internal ratings-based approach, banks use their PD, LGD and EAD estimates in a regulatory formula to calculate how much capital they need for these unexpected losses.",
        "## Accounting provisions",
        "Under IFRS 9 (used in Canada), banks book 'expected credit losses' up front: 12 months of expected losses for healthy loans, and lifetime expected losses once credit risk has increased significantly. That's why bank provisions jump when economists forecast a recession, even before defaults rise."
      ],
      points: [
        { h: "PD", t: "The chance a borrower defaults within a period, usually one year." },
        { h: "LGD", t: "The share of exposure lost after recoveries, if default happens." },
        { h: "EAD", t: "The amount owed at the time of default, including drawn-down credit lines." },
        { h: "Expected loss = PD × LGD × EAD", t: "The average cost of credit risk, priced and provisioned." },
        { h: "IFRS 9", t: "Banks provision for expected credit losses before defaults occur." }
      ],
      example: "A bank has a $200,000 unsecured line of credit with a customer, currently drawn to $50,000. Its models estimate that if the customer defaults, they'll have drawn about $160,000 (EAD), with a 3% PD and 70% LGD. Expected loss: 0.03 × 0.70 × $160,000 = $3,360 a year.",
      pitfall: "Using today's balance as the exposure for credit lines. Struggling borrowers often draw down their available credit before defaulting, so EAD is usually higher than the current balance.",
      terms: [
        ["Probability of default (PD)", "The likelihood a borrower defaults within a given time."],
        ["Loss given default (LGD)", "The fraction of exposure lost if default occurs."],
        ["Exposure at default (EAD)", "The amount owed when a borrower defaults."],
        ["Expected loss", "PD × LGD × EAD: the average anticipated credit loss."],
        ["IFRS 9", "The accounting standard requiring provisions for expected credit losses."]
      ],
      mcq: [
        { q: "PD 1%, LGD 50%, EAD $400,000. Expected loss?", a: ["$2,000", "$200,000", "$4,000", "$20,000"], c: 0, why: "0.01 × 0.5 × 400,000 = 2,000." },
        { q: "Which loan typically has the lowest LGD?", a: ["A mortgage secured by a house", "An unsecured credit card", "A payday loan", "An unsecured personal loan"], c: 0, why: "Collateral reduces losses." },
        { q: "Why can EAD exceed the current balance on a credit line?", a: ["Borrowers draw down limits before defaulting", "Interest is negative", "Collateral increases", "It can't"], c: 0, why: "Distressed borrowers tap available credit." },
        { q: "What covers unexpected credit losses?", a: ["Bank capital", "Provisions only", "Deposit insurance", "Interest rates"], c: 0, why: "Provisions cover expected losses; capital covers unexpected." }
      ],
      tf: [
        { s: "Expected loss is a normal cost of lending priced into interest rates.", v: true, why: "And covered by provisions." },
        { s: "Under IFRS 9, banks wait until defaults happen before provisioning.", v: false, why: "They provision for expected losses in advance." },
        { s: "Defaults tend to rise together in a recession.", v: true, why: "Correlation drives unexpected losses." }
      ],
      think: [
        "If you lent $1,000 to a friend, what would your PD, LGD and EAD estimates be?",
        "Why might bank share prices fall when economists forecast a recession, before any loans go bad?",
        "What information would most improve a lender's estimate of your default risk?"
      ],
      talk: "Bank loan losses boil down to one formula: probability of default × loss given default × exposure at default. Under current accounting rules, banks set money aside for expected losses before defaults happen. That's why their profits drop when a recession is forecast."
    },
    {
      id: "risk-05",
      title: "Stress Testing and Scenarios",
      level: "Intermediate",
      hook: "Statistical models answer, 'How bad does a normal bad day get?' Stress tests ask something harder: 'What if the 2008 crisis, a housing crash and a pandemic all happened again — next year?'",
      bluf: "Stress testing applies severe but plausible scenarios to a firm's balance sheet to see whether it survives. Unlike VaR, it doesn't rely on recent history or probabilities. Regulators use stress tests to set capital; companies use scenario analysis to plan.",
      story: [
        "## Why models aren't enough",
        "Probability-based models are calibrated on history, and history may not contain the next crisis. Stress tests deliberately imagine extreme but plausible events and trace their effects: unemployment rising to 10%, house prices falling 30%, stock markets dropping 40%, interest rates spiking.",
        "## Types of stress tests",
        "Sensitivity analysis changes one factor at a time (what if rates rise 3%?). Scenario analysis changes many factors together in a coherent story (a recession with falling house prices and rising unemployment). Reverse stress testing works backwards: what would have to happen to make us fail? That question often reveals vulnerabilities nobody had considered.",
        "## Regulators and stress tests",
        "After 2008, regulators made stress tests central to bank supervision. The US Federal Reserve runs annual stress tests for large banks and uses results to set capital buffers. In Canada, OSFI and the Bank of Canada run stress tests and scenario exercises, and banks run their own as part of their internal capital assessment.",
        "## Stress testing people, too",
        "Canada's mortgage stress test is a simpler cousin: federally regulated lenders must check that borrowers could afford payments at a higher rate — the greater of the contract rate plus two percentage points or a 5.25% floor. It's designed so that households can survive rate rises.",
        "## Beyond banks",
        "Companies use scenario planning for strategy. Shell famously developed scenario planning in the 1970s and was better prepared than many rivals for the 1973 oil shock. Climate scenario analysis — how a business fares under different warming and policy paths — is now increasingly expected by regulators and investors."
      ],
      points: [
        { h: "Stress test", t: "Apply a severe but plausible scenario to see if you survive." },
        { h: "Sensitivity vs scenario", t: "One factor at a time vs many factors in a coherent story." },
        { h: "Reverse stress testing", t: "Start from failure and ask what would cause it." },
        { h: "Regulatory use", t: "Results inform capital buffers for banks." },
        { h: "Mortgage stress test", t: "Canadian borrowers must qualify at the higher of contract rate + 2% or 5.25%." }
      ],
      example: "A 2020 reverse stress test at an airline might have asked: what would bankrupt us? Answer: revenue falling 90% for six months. Few airlines considered it plausible — until the pandemic grounded fleets worldwide.",
      pitfall: "Choosing scenarios that are severe enough to look serious but mild enough to pass comfortably. A stress test that never challenges the business is just theatre.",
      terms: [
        ["Stress test", "An analysis of how a firm would fare under severe but plausible conditions."],
        ["Scenario analysis", "Assessing outcomes under coherent combinations of changes."],
        ["Reverse stress test", "Identifying scenarios that would cause a firm to fail."],
        ["Sensitivity analysis", "Changing one input at a time to see its effect."],
        ["Qualifying rate", "The higher interest rate used in Canada's mortgage stress test."]
      ],
      mcq: [
        { q: "A reverse stress test asks…", a: ["What scenario would cause us to fail?", "What is our best case?", "What was last year's profit?", "What is our VaR?"], c: 0, why: "It starts from failure." },
        { q: "Canada's mortgage stress test uses the higher of contract rate + 2% or…", a: ["5.25%", "2%", "10%", "The prime rate"], c: 0, why: "The minimum qualifying rate floor." },
        { q: "Which company is famous for pioneering scenario planning?", a: ["Shell", "Apple", "Walmart", "Toyota"], c: 0, why: "In the 1970s." },
        { q: "How do stress tests differ from VaR?", a: ["They use chosen extreme scenarios rather than historical probabilities", "They are always milder", "They ignore balance sheets", "They're only for insurers"], c: 0, why: "They don't depend on recent history." }
      ],
      tf: [
        { s: "Sensitivity analysis changes many factors together in a story.", v: false, why: "That's scenario analysis." },
        { s: "Regulators use stress test results to help set bank capital.", v: true, why: "E.g. the US Fed's stress capital buffer." },
        { s: "A stress test that always passes easily may be poorly designed.", v: true, why: "It may not be severe enough." }
      ],
      think: [
        "What would have to happen to make your household or business fail? How plausible is it?",
        "If you ran your team's stress test, what three scenarios would you choose?",
        "Why might managers resist truly severe scenarios?"
      ],
      talk: "A 'reverse stress test' flips the usual risk question. Instead of asking 'How bad could next year be?', it asks 'What would it take to put us out of business?' Before 2020, few airlines had seriously planned for revenue falling 90% for months."
    },
    {
      id: "risk-06",
      title: "Model Risk: When the Maths Is Wrong",
      level: "Advanced",
      hook: "Statistician George Box wrote: 'All models are wrong, but some are useful.' In 2008, one widely used formula for pricing mortgage-linked securities proved wrong in exactly the way that mattered most.",
      bluf: "Model risk is the danger of losses from models that are badly built, misused or used outside their limits. Every model simplifies reality. Good governance — independent validation, monitoring and humility about assumptions — keeps useful models from becoming dangerous.",
      story: [
        "## Every model simplifies",
        "Models are maps, not territory. They leave out details on purpose. That's fine until the details they left out become important. A credit model trained on a decade of rising house prices may never have 'seen' a national housing decline.",
        "## The 2008 example",
        "Banks and rating agencies used models, including the Gaussian copula approach popularised by David X. Li around 2000, to estimate how likely mortgages in a pool were to default together. Inputs were often based on a period when house prices mostly rose, and correlations between defaults were assumed to be relatively low and stable. When US house prices fell nationwide, defaults rose together far more than expected. Securities rated AAA suffered heavy losses, and the models' widespread use magnified the crisis.",
        "## Sources of model risk",
        "Wrong assumptions (normal distributions where tails are fat). Bad or unrepresentative data. Coding or implementation errors — in 2012, a spreadsheet error in the London Whale case reportedly understated risk. Using a model beyond its purpose. And over-reliance: treating outputs as truth rather than estimates.",
        "## Managing it",
        "Regulators require model risk management. In the US, the Fed's SR 11-7 guidance (2011) set the template; in Canada, OSFI's Guideline E-23 applies to banks and insurers and has been expanded to cover AI and machine-learning models. Key practices: keep an inventory of models, validate independently (by people who didn't build them), test against outcomes (backtesting), document limitations, and monitor performance over time.",
        "## AI raises the stakes",
        "Machine-learning models can be more accurate but harder to explain, may learn biases from data, and can quietly degrade as the world changes ('drift'). The old principles apply with more force: understand what the model does, know where it fails, and keep a human accountable."
      ],
      points: [
        { h: "All models are wrong", t: "They simplify; the question is whether they're useful and where they break." },
        { h: "2008 lesson", t: "Default correlation models built on rising-price data failed when prices fell nationally." },
        { h: "Sources of model risk", t: "Assumptions, data, implementation errors, misuse and over-reliance." },
        { h: "Independent validation", t: "People who didn't build a model should test it." },
        { h: "Model drift", t: "Performance degrades as the world changes; monitor continuously." }
      ],
      example: "Economists Reinhart and Rogoff's influential 2010 paper on public debt and growth was found in 2013, by a graduate student, to contain a spreadsheet error that excluded some countries. The corrected results weakened the paper's headline finding — after it had already been cited in policy debates.",
      pitfall: "Confusing precision with accuracy. A model output to four decimal places can be precisely wrong. Ask what assumptions drive it and what would make it fail.",
      terms: [
        ["Model risk", "The potential for loss from errors in a model's design, data or use."],
        ["Model validation", "Independent testing of a model's soundness and performance."],
        ["Backtesting", "Comparing model predictions with actual outcomes."],
        ["Model drift", "Declining model performance as conditions change."],
        ["Gaussian copula", "A statistical technique once widely used to model joint defaults in credit securities."]
      ],
      mcq: [
        { q: "Who said 'All models are wrong, but some are useful'?", a: ["George Box", "Albert Einstein", "Warren Buffett", "John Keynes"], c: 0, why: "Statistician George E. P. Box." },
        { q: "A key failure of credit models before 2008 was assuming…", a: ["Mortgage defaults would not rise together much", "House prices would fall", "Rates would rise", "Banks would fail"], c: 0, why: "Correlations were underestimated." },
        { q: "Which Canadian guideline covers model risk?", a: ["OSFI E-23", "OSFI B-20", "IFRS 9", "Basel I"], c: 0, why: "Model risk management." },
        { q: "Who should validate a model?", a: ["Independent people who didn't build it", "Only the builders", "Customers", "Nobody"], c: 0, why: "Independence catches blind spots." }
      ],
      tf: [
        { s: "A model with very precise outputs must be accurate.", v: false, why: "Precision isn't accuracy." },
        { s: "Spreadsheet errors have affected influential financial and economic analyses.", v: true, why: "Reinhart-Rogoff and the London Whale." },
        { s: "Machine-learning models can degrade as the world changes.", v: true, why: "That's model drift." }
      ],
      think: [
        "Which spreadsheet or model at your work does everyone trust but nobody has checked recently?",
        "What assumption in your industry's models would hurt most if it turned out wrong?",
        "How would you explain a model's limitations to a senior executive who just wants 'the number'?"
      ],
      talk: "In 2013 a graduate student found a spreadsheet error in an influential Harvard paper on government debt, a paper that had already been cited in austerity debates. Even famous models deserve an independent check."
    }
  ]
});
