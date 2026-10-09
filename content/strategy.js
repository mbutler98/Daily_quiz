/* Topic: Strategy & Consulting */
WP.addTopic({
  id: "strat",
  name: "Strategy & Consulting",
  code: "STRAT",
  blurb: "The toolkit strategy consultants use to structure problems, analyse industries, communicate clearly and lead change.",
  lessons: [
    {
      id: "strat-01",
      title: "Porter's Five Forces",
      level: "Foundation",
      hook: "Why do airlines struggle to make money while software companies print it? Harvard professor Michael Porter's answer, first published in 1979, is still taught in nearly every business school: look at the forces shaping the industry, not just the company.",
      bluf: "An industry's profitability depends on five forces: rivalry among competitors, the threat of new entrants, the power of buyers, the power of suppliers, and the threat of substitutes. The stronger the forces, the harder it is for anyone to earn high profits.",
      story: [
        "## Look beyond your competitors",
        "Most people think of competition as rival companies. Porter widened the lens. Profits can also be squeezed by powerful customers, powerful suppliers, new players entering, and alternative products that do the same job.",
        "## The five forces",
        "Rivalry: many similar competitors, slow growth and high fixed costs lead to price wars. Threat of new entrants: if it's easy to start up, newcomers compete profits away. Barriers like scale, brand, regulation and network effects protect incumbents. Buyer power: concentrated or price-sensitive customers can push prices down. Supplier power: if a few suppliers control critical inputs, they capture profits. Substitutes: products from other industries that meet the same need cap what you can charge — video calls are a substitute for business travel.",
        "## Airlines versus software",
        "Airlines face intense rivalry, high fixed costs, powerful suppliers (two dominant aircraft makers, unionised labour, airports), price-comparing customers and substitutes (trains, video calls). Warren Buffett once joked that a far-sighted capitalist at Kitty Hawk should have shot down Orville Wright. Successful software platforms often enjoy high switching costs, network effects and near-zero cost to serve one more customer.",
        "## Using it well",
        "The framework helps you understand why an industry is attractive or not, where profits flow in a value chain, and how to position a company — for example, by raising switching costs or reducing dependence on a powerful supplier. It's a snapshot; industries change as technology and regulation shift the forces.",
        "## Canadian examples",
        "Canadian banking and telecom have long been described as concentrated industries with high barriers to entry, which helps explain their profitability — and why policymakers debate competition in both."
      ],
      points: [
        { h: "Industry rivalry", t: "Many similar competitors and high fixed costs drive price wars." },
        { h: "Threat of new entrants", t: "Low barriers invite competitors; scale, brand and regulation deter them." },
        { h: "Buyer power", t: "Concentrated, price-sensitive customers squeeze margins." },
        { h: "Supplier power", t: "Few suppliers of critical inputs can capture profits." },
        { h: "Substitutes", t: "Alternatives from other industries cap prices." }
      ],
      example: "Ride-hailing changed the taxi industry's five forces overnight: the threat of new entrants exploded (anyone with a car), buyers gained power through price transparency, and taxi medallion values collapsed in many cities.",
      pitfall: "Using the Five Forces to describe a single company. It's about the industry structure; you then decide how a company should position itself within it.",
      terms: [
        ["Five Forces", "Porter's framework for analysing industry profitability."],
        ["Barrier to entry", "An obstacle that makes it hard for new competitors to enter a market."],
        ["Switching cost", "The cost or hassle for a customer to change suppliers."],
        ["Substitute", "A product from another industry that meets the same need."],
        ["Network effect", "When a product becomes more valuable as more people use it."]
      ],
      mcq: [
        { q: "Video calls replacing business trips are an example of…", a: ["Threat of substitutes", "Supplier power", "Rivalry", "Buyer power"], c: 0, why: "Another industry meets the same need." },
        { q: "Airlines facing two dominant aircraft makers illustrates…", a: ["Supplier power", "Buyer power", "Low barriers", "Substitutes"], c: 0, why: "Few suppliers of critical inputs." },
        { q: "Which raises barriers to entry?", a: ["Strong network effects", "Low start-up costs", "No regulation", "Commodity products"], c: 0, why: "Newcomers can't match the network." },
        { q: "Who created the Five Forces framework?", a: ["Michael Porter", "Peter Drucker", "Clayton Christensen", "Jim Collins"], c: 0, why: "Published in 1979." }
      ],
      tf: [
        { s: "The Five Forces analyse industries, not just individual companies.", v: true, why: "It's about industry structure." },
        { s: "Strong forces make it easier for firms to earn high profits.", v: false, why: "Strong forces squeeze profits." },
        { s: "High switching costs reduce buyer power.", v: true, why: "Customers find it harder to leave." }
      ],
      think: [
        "Which of the five forces is strongest in your industry?",
        "How could your organisation raise switching costs without annoying customers?",
        "What substitute could quietly replace what you sell in ten years?"
      ],
      talk: "Warren Buffett joked that a far-sighted capitalist at Kitty Hawk would have shot down Orville Wright. Airlines face fierce rivals, powerful suppliers, price-shopping customers and high fixed costs, so the industry's structure keeps squeezing out profits."
    },
    {
      id: "strat-02",
      title: "MECE and Issue Trees",
      level: "Foundation",
      hook: "Hand a messy problem to a good consultant and the first thing they'll do isn't research. It's drawing a tree. Structuring the problem before solving it is the habit that separates crisp thinking from busy work.",
      bluf: "Break problems into parts that are MECE — mutually exclusive (no overlaps) and collectively exhaustive (nothing missing). An issue tree splits a big question into smaller ones, and a hypothesis-driven approach focuses analysis on what could change the answer.",
      story: [
        "## MECE",
        "Pronounced 'mee-see', it's a principle McKinsey made famous. Mutually exclusive: categories don't overlap, so you don't double-count. Collectively exhaustive: together they cover everything, so nothing falls through the cracks. Splitting customers into 'under 35' and 'over 35' is MECE. 'Students' and 'young people' is not — they overlap, and older non-students are missing.",
        "## Issue trees",
        "Start with the key question at the left: 'Why are profits falling?' Split it MECE: profit = revenue − costs. Revenue = volume × price; costs = fixed + variable. Keep splitting until each branch is specific enough to analyse. This turns a vague worry into a map of testable questions and makes it obvious where to look.",
        "## Hypothesis-driven problem solving",
        "Rather than analysing everything, form an early hypothesis — 'Profits are falling because our biggest customers are demanding discounts' — and design analysis to prove or disprove it quickly. You'll often be wrong, and that's fine: being wrong fast redirects effort. It's the scientific method applied to business.",
        "## The 80/20 of analysis",
        "Ask, 'What would we need to believe for this to be true?' and 'What analysis would change our decision?' Skip analysis that wouldn't change the answer, however interesting. Good consultants are ruthless about this.",
        "## Beyond consulting",
        "MECE thinking helps everywhere: structuring a budget, planning a project, writing a report, even diagnosing why your car won't start (fuel, spark or air?)."
      ],
      points: [
        { h: "Mutually exclusive", t: "No overlaps between categories, so nothing is double-counted." },
        { h: "Collectively exhaustive", t: "Categories cover every possibility, so nothing is missed." },
        { h: "Issue tree", t: "Break a key question into smaller, testable sub-questions." },
        { h: "Hypothesis-driven", t: "Start with a likely answer and test it quickly." },
        { h: "Decision-relevant analysis", t: "Only do analysis that could change the decision." }
      ],
      example: "A retailer asks why online sales dropped 15%. The team's issue tree splits sales into traffic × conversion × average order value. Data shows traffic and order value are flat but conversion fell — pointing straight to the checkout page, where a recent update had broken a payment option on some phones.",
      pitfall: "Boiling the ocean: gathering all possible data before forming a view. Without a hypothesis, analysis sprawls and the deadline arrives with no answer.",
      terms: [
        ["MECE", "Mutually Exclusive, Collectively Exhaustive: a principle for clean categories."],
        ["Issue tree", "A diagram breaking a key question into smaller component questions."],
        ["Hypothesis-driven", "Starting with a likely answer and testing it, rather than exploring blindly."],
        ["Boiling the ocean", "Trying to analyse everything instead of focusing on what matters."],
        ["Driver tree", "An issue tree that breaks a metric into its mathematical components."]
      ],
      mcq: [
        { q: "Which split is MECE?", a: ["Domestic vs international customers", "Students vs young people", "Big customers vs important customers", "Online vs new customers"], c: 0, why: "No overlap, nothing missing." },
        { q: "'Collectively exhaustive' means…", a: ["Nothing is left out", "Nothing overlaps", "Everything is equal", "Only one option exists"], c: 0, why: "Full coverage." },
        { q: "A hypothesis-driven approach starts by…", a: ["Proposing a likely answer to test", "Collecting all available data", "Writing the final report", "Asking the client to decide"], c: 0, why: "Then you test it quickly." },
        { q: "Sales = traffic × conversion × order value is an example of…", a: ["A driver tree", "A Five Forces analysis", "A SWOT", "A Gantt chart"], c: 0, why: "Breaking a metric into components." }
      ],
      tf: [
        { s: "Being wrong quickly about a hypothesis can be valuable.", v: true, why: "It redirects effort early." },
        { s: "MECE categories may overlap if it's convenient.", v: false, why: "Mutually exclusive means no overlap." },
        { s: "Good analysts skip work that wouldn't change the decision.", v: true, why: "Focus on decision-relevant analysis." }
      ],
      think: [
        "Pick a problem at work. What's your first-guess hypothesis, and what would prove it wrong?",
        "Draw a three-level issue tree for 'Why am I always short of time?'",
        "Which recent report you saw 'boiled the ocean'?"
      ],
      talk: "Good consultants usually start a messy problem by drawing a tree, not by researching. Breaking the question into parts with no overlaps and no gaps (they call it 'MECE') tells them which few pieces to dig into first."
    },
    {
      id: "strat-03",
      title: "The Pyramid Principle",
      level: "Foundation",
      hook: "Busy executives often read the first few lines of a memo and stop. Barbara Minto, McKinsey's first female consultant, built a whole method around that fact — and her book still shapes how consultants write decades later.",
      bluf: "Start with the answer. Then give the few key arguments that support it, grouped logically. Then the evidence for each. This 'pyramid' lets readers get the main point instantly and dig deeper only if they need to.",
      story: [
        "## Answer first",
        "Most people write the way they think: background, then analysis, then — finally — the conclusion. Readers have to wade through everything to find the point. Minto flipped it: lead with the governing thought, your answer or recommendation. The military calls this BLUF: bottom line up front.",
        "## The pyramid structure",
        "At the top: the main point. Below it: three or so key supporting arguments, each a full sentence that makes a claim. Below each: the data and facts that support it. Ideas at each level should summarise the ideas grouped beneath them, and groups should be MECE.",
        "## SCQA: the introduction",
        "Minto suggests opening with a short story: Situation (what's stable and agreed), Complication (what's changed or gone wrong), Question (what the reader now wonders), Answer (your main point). For example: 'We've grown 20% a year in Ontario (S). But growth has stalled since a new competitor entered (C). How should we respond (Q)? We recommend targeting small businesses, where the competitor is weak (A).'",
        "## Action titles",
        "Consulting slides apply the same idea. Each title is a full sentence stating the takeaway — 'Small-business customers are twice as profitable as enterprise customers' — not a topic label like 'Customer profitability'. Read only the titles and you should get the whole story.",
        "## Why it works",
        "It respects the reader's time, makes your logic easy to check, and forces you to know what you actually think before writing. If you can't state your main point in one sentence, you're not ready to write."
      ],
      points: [
        { h: "Lead with the answer", t: "State your main point or recommendation first." },
        { h: "Group supporting arguments", t: "Three or so key reasons, each a clear claim." },
        { h: "Evidence underneath", t: "Facts and data support each argument." },
        { h: "SCQA introduction", t: "Situation, Complication, Question, Answer." },
        { h: "Action titles", t: "Slide titles state the takeaway, so the titles alone tell the story." }
      ],
      example: "Weak email: 'I've been reviewing vendor options, looking at pricing, support and features…' Strong email: 'I recommend we choose Vendor B. It's 15% cheaper over three years, has 24/7 support, and covers all our must-have features. Details below.'",
      pitfall: "Building suspense. Business writing isn't a mystery novel; making the reader hunt for your conclusion wastes their time and weakens your case.",
      terms: [
        ["Pyramid Principle", "Barbara Minto's method: main point first, then grouped supporting arguments and evidence."],
        ["Governing thought", "The single main point a document communicates."],
        ["SCQA", "Situation, Complication, Question, Answer: a structure for introductions."],
        ["Action title", "A slide title that states the conclusion as a full sentence."],
        ["BLUF", "Bottom Line Up Front: stating the conclusion at the start."]
      ],
      mcq: [
        { q: "In the Pyramid Principle, what comes first?", a: ["The main answer or recommendation", "Background", "Methodology", "Appendix"], c: 0, why: "Answer first." },
        { q: "What does the 'C' in SCQA stand for?", a: ["Complication", "Conclusion", "Context", "Cost"], c: 0, why: "What changed or went wrong." },
        { q: "Which is an action title?", a: ["Costs rose 12% due to freight", "Cost analysis", "Q3 numbers", "Overview"], c: 0, why: "It states the takeaway." },
        { q: "Who developed the Pyramid Principle?", a: ["Barbara Minto", "Michael Porter", "Peter Drucker", "John Kotter"], c: 0, why: "At McKinsey." }
      ],
      tf: [
        { s: "Business writing should build suspense toward the conclusion.", v: false, why: "Lead with the answer." },
        { s: "Reading only the slide titles should tell the whole story.", v: true, why: "That's the test of good action titles." },
        { s: "If you can't state your main point in one sentence, you may not be ready to write.", v: true, why: "Clarity of thought comes first." }
      ],
      think: [
        "Look at the last email you sent. Where was your main point?",
        "Rewrite a recent update using SCQA in four sentences.",
        "What's your one-sentence governing thought for your current project?"
      ],
      talk: "Try this with your next email: put your recommendation in the first line and the reasons after it. Barbara Minto, McKinsey's first female consultant, built a whole writing method on that idea, the 'Pyramid Principle', and consultants still learn it."
    },
    {
      id: "strat-04",
      title: "Unit Economics",
      level: "Intermediate",
      hook: "Plenty of fast-growing companies lost more money with every sale. Growth just made the losses bigger. Unit economics is the simple check that would have spotted it.",
      bluf: "Unit economics asks whether you make money on each customer or each sale. Key measures: contribution margin, customer acquisition cost (CAC), and customer lifetime value (LTV). If LTV doesn't comfortably exceed CAC, growth destroys value.",
      story: [
        "## Zoom in on one unit",
        "Instead of the whole income statement, look at a single unit — one order, one subscription, one customer. What revenue does it bring, and what does it directly cost? If each unit loses money, scaling up won't fix it.",
        "## Contribution margin",
        "Revenue per unit minus variable costs per unit (materials, delivery, payment fees, commissions). What's left 'contributes' to fixed costs like rent and head office. A meal-kit company charging $60 with $50 of ingredients, packaging and delivery has a $10 contribution margin per box.",
        "## CAC: what it costs to win a customer",
        "Customer acquisition cost = total sales and marketing spend ÷ new customers won. If you spend $100,000 on ads and gain 1,000 customers, CAC is $100.",
        "## LTV: what a customer is worth",
        "Lifetime value estimates total contribution margin a customer generates before leaving. Roughly: margin per period × expected number of periods (often adjusted for churn and discounting). A subscriber paying $20 a month with a $12 margin who stays 30 months on average has an LTV around $360.",
        "## The ratio and payback",
        "A common rule of thumb for subscription businesses: LTV should be at least three times CAC, and CAC should be paid back within about 12 months. Churn (the rate customers leave) is often the hidden killer: double churn and LTV roughly halves.",
        "## The cautionary tales",
        "Many venture-funded companies in delivery and other on-demand sectors grew rapidly with negative unit economics, subsidised by investors. When funding tightened, many had to raise prices, cut costs or shut down. Growth is only valuable if the units are profitable — or have a credible path to be."
      ],
      points: [
        { h: "Unit economics", t: "Profitability measured per order, subscription or customer." },
        { h: "Contribution margin", t: "Revenue per unit minus variable costs per unit." },
        { h: "CAC", t: "Sales and marketing spend divided by new customers acquired." },
        { h: "LTV", t: "Total margin a customer generates over their relationship." },
        { h: "LTV:CAC and payback", t: "A common target is LTV ≥ 3× CAC with payback within about a year." }
      ],
      example: "A gym spends $150 in ads to win each new member (CAC). Members pay $50/month; variable costs are $10, giving $40 margin. Average membership lasts 10 months, so LTV is about $400 — a healthy 2.7× CAC with payback under 4 months. If churn doubled so members left after 5 months, LTV would fall to $200.",
      pitfall: "Calculating LTV with optimistic retention assumptions from your best early customers. Later customers often churn faster, so LTV shrinks as you scale.",
      terms: [
        ["Unit economics", "Revenue and costs measured per single unit of business."],
        ["Contribution margin", "Revenue minus variable costs, per unit."],
        ["CAC", "Customer Acquisition Cost: cost to win one new customer."],
        ["LTV", "Customer Lifetime Value: total margin earned from a customer over time."],
        ["Churn", "The rate at which customers stop buying or cancel."]
      ],
      mcq: [
        { q: "$200,000 marketing spend wins 4,000 customers. CAC?", a: ["$50", "$500", "$5", "$800"], c: 0, why: "200,000 ÷ 4,000." },
        { q: "Margin $15/month, average customer stays 24 months. LTV ≈", a: ["$360", "$39", "$24", "$1,500"], c: 0, why: "15 × 24." },
        { q: "If churn doubles, LTV roughly…", a: ["Halves", "Doubles", "Stays the same", "Triples"], c: 0, why: "Customers stay half as long." },
        { q: "A common rule of thumb for subscription businesses is LTV of at least…", a: ["3× CAC", "0.5× CAC", "Equal to CAC", "10× revenue"], c: 0, why: "To cover overhead and risk." }
      ],
      tf: [
        { s: "Growing faster fixes negative unit economics.", v: false, why: "It magnifies losses." },
        { s: "Contribution margin excludes fixed costs like head office rent.", v: true, why: "Only variable costs are subtracted." },
        { s: "Early customers may have better retention than later ones.", v: true, why: "Early adopters are often the most enthusiastic." }
      ],
      think: [
        "What's the 'unit' in your business, and is it profitable?",
        "Which subscription have you cancelled recently, and what would have kept you?",
        "Which fast-growing company do you suspect has weak unit economics?"
      ],
      talk: "Plenty of fast-growing start-ups lost money on every order, so growing faster only made the losses bigger. Before getting excited about growth, check one sale: does it make money once you include what it cost to win the customer?"
    },
    {
      id: "strat-05",
      title: "Leading Change",
      level: "Foundation",
      hook: "It's often said that around 70% of change programmes fail. That number turns out to be poorly supported — but almost everyone who has lived through a 'transformation' recognises why it sticks.",
      bluf: "Organisational change fails less from bad plans than from people: lack of urgency, unclear vision, weak sponsorship and change fatigue. Frameworks like Kotter's eight steps help, but the core is simple: make the case, involve people, show early wins, and anchor new habits.",
      story: [
        "## Kotter's eight steps",
        "Harvard's John Kotter, in a 1995 article and his book 'Leading Change', set out eight steps: 1) create a sense of urgency, 2) build a guiding coalition, 3) form a strategic vision, 4) communicate it widely, 5) remove barriers so people can act, 6) generate short-term wins, 7) sustain acceleration rather than declaring victory too soon, 8) anchor the change in culture.",
        "## Why change stalls",
        "People resist change they don't understand or that threatens their status, skills or workload. Leaders often under-communicate by a factor of ten, Kotter argued — announcing once and assuming everyone heard. Middle managers, who translate strategy into daily work, are often skipped. And when every quarter brings a new initiative, change fatigue sets in.",
        "## The human side",
        "The ADKAR model (Prosci) frames change at the individual level: Awareness of the need, Desire to participate, Knowledge of how, Ability to do it, Reinforcement to sustain it. Training gives knowledge, but without desire and reinforcement, people slip back to old ways.",
        "## About that 70% statistic",
        "The claim that 70% of change efforts fail is widely repeated, but researchers who have looked for its source have found little rigorous evidence behind a single figure. The more useful lesson: change is hard, success is often partial, and it's worth defining what success means upfront.",
        "## Practical moves",
        "Tell a clear story of why now. Recruit respected informal leaders, not just executives. Pick a visible early win within 90 days. Measure adoption, not just delivery — a new system 'live' but unused is a failure. And stop doing something old for every new thing you start."
      ],
      points: [
        { h: "Urgency first", t: "People need a compelling reason why the status quo won't work." },
        { h: "Guiding coalition", t: "A credible group, including informal influencers, must lead the change." },
        { h: "Communicate relentlessly", t: "Leaders typically under-communicate the vision by a wide margin." },
        { h: "Short-term wins", t: "Visible early successes build momentum and silence sceptics." },
        { h: "Anchor in culture", t: "New behaviours must become 'how we do things here'." }
      ],
      example: "A bank rolls out a new CRM. Version A: an executive email, a training video, go-live. Six months later, half the sales team still uses spreadsheets. Version B: top-performing advisers co-design it, a pilot branch shows faster client follow-ups, managers review pipeline only in the CRM, and old spreadsheets are retired. Adoption follows.",
      pitfall: "Declaring victory at go-live. Launch is the start of adoption, not the end of change; without reinforcement, people drift back to old habits.",
      terms: [
        ["Kotter's 8 steps", "A sequence for leading organisational change, from urgency to culture."],
        ["Guiding coalition", "A group with enough power and credibility to lead a change."],
        ["ADKAR", "Awareness, Desire, Knowledge, Ability, Reinforcement: individual change stages."],
        ["Change fatigue", "Exhaustion and cynicism from too many simultaneous initiatives."],
        ["Adoption", "The degree to which people actually use a new process or system."]
      ],
      mcq: [
        { q: "Kotter's first step is to…", a: ["Create a sense of urgency", "Anchor in culture", "Generate short-term wins", "Hire consultants"], c: 0, why: "Without urgency, change stalls." },
        { q: "What does the 'D' in ADKAR stand for?", a: ["Desire", "Data", "Delivery", "Decision"], c: 0, why: "Wanting to participate." },
        { q: "The best measure of a new system's success is often…", a: ["Adoption and use", "Go-live date", "Budget spent", "Number of emails sent"], c: 0, why: "Unused systems deliver nothing." },
        { q: "The '70% of changes fail' statistic is…", a: ["Widely repeated but poorly supported", "Proven by a large study", "Exactly 70% every year", "Made up by Kotter in 2020"], c: 0, why: "Researchers have found little rigorous evidence for it." }
      ],
      tf: [
        { s: "Leaders often under-communicate change.", v: true, why: "Kotter estimated by a large factor." },
        { s: "Going live with a new system means the change is complete.", v: false, why: "Adoption is the real test." },
        { s: "Informal leaders can be as important as executives in driving change.", v: true, why: "They shape peers' behaviour." }
      ],
      think: [
        "Which change at your workplace stalled? Which of Kotter's steps was skipped?",
        "Who are the informal leaders on your team whom others follow?",
        "What could you stop doing to make room for the next change?"
      ],
      talk: "The often-quoted claim that '70% of change programmes fail' has surprisingly little evidence behind it. Still, most failures follow a familiar pattern: leaders declare victory at go-live, before people have actually changed how they work."
    }
  ]
});
