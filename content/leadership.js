/* Topic: Leadership & Decision-Making */
WP.addTopic({
  id: "lead",
  name: "Leadership & Decisions",
  code: "LDR",
  blurb: "Military-proven tools for thinking clearly, deciding fast and leading teams under pressure.",
  lessons: [
    {
      id: "lead-01",
      title: "The OODA Loop",
      level: "Foundation",
      minutes: 5,
      bluf: "Observe, Orient, Decide, Act. Developed by US Air Force Colonel John Boyd, the OODA loop says the side that cycles through decisions faster and more accurately than its opponent gains the advantage.",
      points: [
        { h: "Observe", t: "Gather information about what's actually happening — not what you expect to be happening." },
        { h: "Orient", t: "Make sense of it using experience, culture and analysis. Boyd saw this as the most important step: your mental model shapes everything that follows." },
        { h: "Decide", t: "Choose a course of action from the options your orientation reveals." },
        { h: "Act", t: "Carry it out, then observe the results — the loop restarts immediately." },
        { h: "Tempo wins", t: "Operating 'inside' a competitor's loop — acting before they've finished orienting — leaves them reacting to outdated information." }
      ],
      example: "A start-up ships small product updates weekly, watches user data, and adjusts. A large competitor plans annual releases. The start-up runs many OODA loops for each one of the competitor's.",
      pitfall: "Treating OODA as 'decide fast'. Speed without good orientation just means making wrong decisions faster.",
      terms: [
        ["OODA loop", "Observe, Orient, Decide, Act — a decision cycle developed by John Boyd."],
        ["Orient", "The OODA step of interpreting information through your mental models."],
        ["Tempo", "The speed and rhythm at which you can complete decision cycles relative to others."],
        ["John Boyd", "US Air Force colonel and strategist who developed the OODA loop."],
        ["Getting inside the loop", "Acting faster than an opponent can process and respond."]
      ],
      mcq: [
        { q: "Which OODA step did Boyd consider most critical?", a: ["Orient", "Observe", "Decide", "Act"], c: 0, why: "Orientation shapes how you see and choose." },
        { q: "'Getting inside the opponent's loop' means…", a: ["Cycling faster than they can respond", "Copying their strategy", "Stopping all action", "Joining their team"], c: 0, why: "They end up reacting to an outdated situation." },
        { q: "After Act, what happens?", a: ["You observe the results and loop again", "The process ends", "You wait for orders", "You skip to Decide"], c: 0, why: "It's a continuous cycle." },
        { q: "The main danger of focusing only on speed is…", a: ["Making poor decisions faster", "Being too accurate", "Gathering too little data", "Nothing"], c: 0, why: "Good orientation still matters." }
      ],
      tf: [
        { s: "The OODA loop was developed by a US Air Force colonel.", v: true, why: "Col. John Boyd, a fighter pilot and strategist." },
        { s: "OODA stands for Organise, Operate, Deliver, Assess.", v: false, why: "Observe, Orient, Decide, Act." },
        { s: "The OODA loop applies to business as well as combat.", v: true, why: "It's widely used in competitive strategy." },
        { s: "In OODA, you should only observe once at the start.", v: false, why: "Observation is continuous." }
      ]
    },
    {
      id: "lead-02",
      title: "Mission Command and Commander's Intent",
      level: "Foundation",
      minutes: 5,
      bluf: "Tell people what needs to be achieved and why — not exactly how. When plans break (and they will), a team that understands the intent can adapt without waiting for orders.",
      points: [
        { h: "Commander's intent", t: "A short statement of the purpose and the desired end state. It's what lets people act sensibly when the detailed plan no longer fits reality." },
        { h: "Decentralised execution", t: "Push decisions down to the people closest to the problem. They see things leaders can't." },
        { h: "Trust and competence", t: "Mission command works only when leaders trust their teams and teams are trained to use initiative." },
        { h: "Brief clearly", t: "A good brief covers: situation, mission (task + purpose), how it fits the bigger picture, constraints, and what 'done' looks like." },
        { h: "'No plan survives contact'", t: "Adapted from the 19th-century Prussian commander Helmuth von Moltke: plans are useful for preparation, but intent is what guides action when things change." }
      ],
      example: "Instead of \"Email these 50 customers by Friday\", say \"We need our top customers to feel valued before the price change on Monday, so none of them churn.\" Now your team can call the biggest ones, or spot a better idea.",
      pitfall: "Giving intent but then micromanaging the method. It signals distrust and kills the initiative mission command depends on.",
      terms: [
        ["Mission command", "Leading by giving intent and freedom of action rather than detailed orders."],
        ["Commander's intent", "A concise statement of purpose and desired end state."],
        ["End state", "The conditions that define success when the mission is complete."],
        ["Decentralised execution", "Delegating decisions to those closest to the action."],
        ["Initiative", "Acting independently within intent when circumstances change."]
      ],
      mcq: [
        { q: "Commander's intent mainly describes…", a: ["The purpose and desired end state", "Every step of the plan", "The budget", "Who sits where"], c: 0, why: "It explains why and what success looks like." },
        { q: "Mission command depends most on…", a: ["Mutual trust and trained initiative", "Detailed checklists", "Constant supervision", "Large teams"], c: 0, why: "Without trust, delegation fails." },
        { q: "When the plan no longer fits reality, team members should…", a: ["Act to achieve the intent", "Stop and wait", "Follow the old plan anyway", "Abandon the mission"], c: 0, why: "Intent guides adaptation." },
        { q: "Who is often credited with the idea that no plan survives contact?", a: ["Helmuth von Moltke", "Napoleon", "Sun Tzu", "Julius Caesar"], c: 0, why: "The Prussian Chief of Staff in the 1800s." }
      ],
      tf: [
        { s: "Mission command means telling people exactly how to do each step.", v: false, why: "It focuses on what and why, not how." },
        { s: "Clear intent allows teams to adapt when plans fail.", v: true, why: "That's its main purpose." },
        { s: "Micromanaging after giving intent undermines initiative.", v: true, why: "It signals distrust." },
        { s: "The end state describes what success looks like.", v: true, why: "It defines the finish line." }
      ]
    },
    {
      id: "lead-03",
      title: "Cognitive Biases",
      level: "Foundation",
      minutes: 6,
      bluf: "Our brains take shortcuts that usually help but sometimes lead us astray. Knowing the most common biases — and building simple checks against them — leads to noticeably better decisions.",
      points: [
        { h: "Confirmation bias", t: "We look for and believe evidence that supports what we already think. Check: actively seek the strongest opposing argument." },
        { h: "Anchoring", t: "The first number we hear sways our estimates. Check: make your own estimate before seeing anyone else's." },
        { h: "Sunk cost fallacy", t: "Continuing because of what's already spent. Check: ask, 'Knowing what I know now, would I start this today?'" },
        { h: "Overconfidence", t: "We overrate how much we know and how accurate our forecasts are. Check: use ranges and track your predictions." },
        { h: "Groupthink", t: "Teams suppress doubts to keep harmony. Check: assign a 'red team' or devil's advocate, and have the most senior person speak last." }
      ],
      example: "A firm has spent $5m on a failing software project. Leaders want to spend $2m more 'so the first $5m isn't wasted'. The $5m is gone either way — the only question is whether the next $2m is a good investment.",
      pitfall: "Believing that knowing about biases makes you immune. Everyone is affected. Rely on processes and checklists, not willpower.",
      terms: [
        ["Confirmation bias", "Favouring information that confirms existing beliefs."],
        ["Anchoring", "Over-relying on the first piece of information received."],
        ["Sunk cost fallacy", "Continuing an effort because of past investment rather than future value."],
        ["Groupthink", "A group's desire for agreement overriding realistic assessment."],
        ["Red team", "A group tasked with challenging a plan by thinking like an adversary."]
      ],
      mcq: [
        { q: "\"We've come too far to stop now\" is a sign of…", a: ["Sunk cost fallacy", "Anchoring", "Groupthink", "Hindsight bias"], c: 0, why: "Past costs shouldn't drive future choices." },
        { q: "A seller lists a car high to make later offers seem reasonable. This exploits…", a: ["Anchoring", "Confirmation bias", "Sunk cost", "Recency"], c: 0, why: "The first number anchors expectations." },
        { q: "Best simple check against groupthink?", a: ["Senior person speaks last; assign a devil's advocate", "Vote quickly", "Only invite agreeing people", "Skip meetings"], c: 0, why: "It surfaces dissent before views converge." },
        { q: "Only reading news that matches your view is…", a: ["Confirmation bias", "Anchoring", "Overconfidence", "Survivorship bias"], c: 0, why: "Seeking confirming evidence." }
      ],
      tf: [
        { s: "Knowing about a bias makes you immune to it.", v: false, why: "Process checks work better than awareness alone." },
        { s: "Sunk costs should be ignored when deciding what to do next.", v: true, why: "Only future costs and benefits matter." },
        { s: "Red teams help challenge a plan's assumptions.", v: true, why: "They think like adversaries." },
        { s: "Experts are free from overconfidence.", v: false, why: "Experts are often overconfident too." }
      ]
    },
    {
      id: "lead-04",
      title: "Deciding Under Uncertainty",
      level: "Intermediate",
      minutes: 6,
      bluf: "Good decisions and good outcomes aren't the same thing. Under uncertainty, judge choices by expected value and the size of the downside, decide at the right speed, and separate reversible from irreversible calls.",
      points: [
        { h: "Expected value", t: "EV = Σ (probability × outcome). A bet paying $100 at 30% and $0 otherwise has EV = $30. Compare options on EV, then check the risk." },
        { h: "Avoid ruin", t: "Never take a bet where the worst case wipes you out, however good the EV. Survival comes first." },
        { h: "One-way vs two-way doors", t: "Reversible decisions (two-way doors) should be made fast. Irreversible ones (one-way doors) deserve slow, careful analysis." },
        { h: "The 70% rule", t: "A popular rule of thumb: decide when you have about 70% of the information you'd like. Waiting for 90% is often too slow." },
        { h: "Judge the process, not the result", t: "A good decision can turn out badly through bad luck (and vice versa). Review the reasoning and information, not just the outcome." }
      ],
      example: "Option A: certain $40k. Option B: 50% chance of $100k, 50% of $0 (EV $50k). B has higher EV — but if losing the $40k would sink your company, A is the right call.",
      pitfall: "'Resulting': judging a decision purely by how it turned out. A poker player who wins with a terrible hand still made a bad decision.",
      terms: [
        ["Expected value", "The probability-weighted average of all possible outcomes."],
        ["Risk of ruin", "The chance of a loss so large you cannot recover."],
        ["Two-way door", "A reversible decision that can be made quickly."],
        ["One-way door", "An irreversible decision that deserves careful analysis."],
        ["Resulting", "Judging a decision's quality only by its outcome."]
      ],
      mcq: [
        { q: "60% chance of $50, 40% chance of −$20. EV?", a: ["$22", "$30", "$15", "$70"], c: 0, why: "0.6×50 + 0.4×(−20) = 30 − 8 = 22." },
        { q: "Which deserves the slowest, most careful process?", a: ["An irreversible decision", "Choosing a meeting time", "A reversible pilot test", "Picking a slide colour"], c: 0, why: "One-way doors can't be undone." },
        { q: "A positive-EV bet should be avoided when…", a: ["The worst case would ruin you", "It's reversible", "The EV is high", "It's small"], c: 0, why: "Survival beats expected value." },
        { q: "Judging a choice only by its outcome is called…", a: ["Resulting", "Anchoring", "Hedging", "Framing"], c: 0, why: "Outcomes include luck." }
      ],
      tf: [
        { s: "A good decision always leads to a good outcome.", v: false, why: "Luck plays a part." },
        { s: "Reversible decisions should usually be made quickly.", v: true, why: "Mistakes can be undone cheaply." },
        { s: "Expected value weights each outcome by its probability.", v: true, why: "That's the definition." },
        { s: "You should always wait for complete information before deciding.", v: false, why: "Waiting has costs; ~70% is often enough." }
      ]
    },
    {
      id: "lead-05",
      title: "Prioritisation: Pareto and Eisenhower",
      level: "Foundation",
      minutes: 5,
      bluf: "A small share of effort produces most of the results. Find that vital few (Pareto), then sort the rest by importance and urgency (Eisenhower) so the important work isn't crowded out by the merely urgent.",
      points: [
        { h: "The Pareto principle", t: "Roughly 80% of effects come from 20% of causes: most sales from a few customers, most bugs from a few modules. The split varies — the lesson is the imbalance." },
        { h: "The Eisenhower matrix", t: "Four boxes: Important & urgent → do now. Important, not urgent → schedule. Urgent, not important → delegate. Neither → drop." },
        { h: "Protect the 'schedule' box", t: "Important but not urgent work — planning, learning, relationships, prevention — creates the most long-term value and is the first to be squeezed out." },
        { h: "Say no to say yes", t: "Every yes to something low-value is a no to something important. Limit work in progress." },
        { h: "Daily 'one thing'", t: "Pick the single task that would make today a success and do it first, before the inbox." }
      ],
      example: "This app uses the Pareto idea: each lesson aims to give you the 20% of a topic that gets you 80% of the way to useful understanding, in a few minutes a day.",
      pitfall: "Living in the 'urgent' boxes. Constant firefighting feels productive but usually means the important, preventive work isn't getting done.",
      terms: [
        ["Pareto principle", "The observation that roughly 80% of effects come from 20% of causes."],
        ["Eisenhower matrix", "A 2×2 grid sorting tasks by urgency and importance."],
        ["Important, not urgent", "Tasks to schedule — high long-term value but no immediate deadline."],
        ["Delegate", "Hand off urgent but less important tasks to others."],
        ["Work in progress (WIP) limit", "A cap on how many tasks are active at once, to improve focus and flow."]
      ],
      mcq: [
        { q: "In the Eisenhower matrix, important but not urgent tasks should be…", a: ["Scheduled", "Done immediately", "Delegated", "Dropped"], c: 0, why: "Protect time for them." },
        { q: "The Pareto principle suggests you should…", a: ["Focus on the vital few causes", "Treat every task equally", "Do the easiest tasks first", "Avoid measuring results"], c: 0, why: "A minority of inputs drive most outputs." },
        { q: "Urgent but unimportant tasks should usually be…", a: ["Delegated", "Scheduled for later", "Done first always", "Ignored forever"], c: 0, why: "Someone else can handle them." },
        { q: "Which is a classic 'important, not urgent' activity?", a: ["Training and planning", "Answering a ringing phone", "A fire alarm", "A colleague's minor request"], c: 0, why: "High value, no deadline pressure." }
      ],
      tf: [
        { s: "The Pareto split is always exactly 80/20.", v: false, why: "It's a rule of thumb about imbalance." },
        { s: "Important but not urgent work is often crowded out.", v: true, why: "Urgency grabs attention first." },
        { s: "Tasks that are neither urgent nor important should be dropped.", v: true, why: "They're the bottom-right box." },
        { s: "Limiting work in progress usually reduces focus.", v: false, why: "It improves focus and flow." }
      ]
    },
    {
      id: "lead-06",
      title: "The After Action Review",
      level: "Foundation",
      minutes: 5,
      bluf: "Teams that improve fastest learn from every mission. The After Action Review (AAR), developed by the US Army, does it with four simple questions, asked soon after the event, without blame.",
      points: [
        { h: "Q1: What was supposed to happen?", t: "Restate the plan and intent. Misaligned expectations often show up right here." },
        { h: "Q2: What actually happened?", t: "Establish the facts from multiple viewpoints — timeline first, opinions later." },
        { h: "Q3: Why was there a difference?", t: "Find root causes, not culprits. Ask 'why' several times to go below the surface." },
        { h: "Q4: What will we sustain or improve?", t: "Agree specific actions, owners and dates. An AAR without actions is just a discussion." },
        { h: "Make it safe", t: "Rank and blame stay outside the room. People must feel safe admitting mistakes, or the real lessons stay hidden." }
      ],
      example: "After a product launch slipped by two weeks, a 30-minute AAR found the cause wasn't engineering speed but a late legal review. Next launch, legal joined at kickoff — and it shipped on time.",
      pitfall: "Only running reviews when things fail. Successes hide lessons too — and luck that won't repeat.",
      terms: [
        ["After Action Review (AAR)", "A structured, blame-free debrief to learn from an event."],
        ["Root cause", "The underlying reason a problem occurred, not just its symptom."],
        ["Five whys", "Asking 'why' repeatedly to dig down to a root cause."],
        ["Sustain / improve", "The AAR outputs: what to keep doing and what to change."],
        ["Psychological safety", "A shared belief that it's safe to speak up and admit mistakes."]
      ],
      mcq: [
        { q: "The first AAR question is…", a: ["What was supposed to happen?", "Who is to blame?", "What did it cost?", "When is the next mission?"], c: 0, why: "Start by restating the plan." },
        { q: "The main purpose of an AAR is…", a: ["Learning and improvement", "Assigning blame", "Performance ratings", "Reducing meetings"], c: 0, why: "It's about getting better next time." },
        { q: "Which organisation developed the AAR?", a: ["US Army", "NASA", "Toyota", "The Royal Navy"], c: 0, why: "It became standard US Army practice in the 1970s–80s." },
        { q: "An AAR should end with…", a: ["Specific actions with owners", "A vote on who did worst", "No conclusions", "A long report nobody reads"], c: 0, why: "Actions turn lessons into change." }
      ],
      tf: [
        { s: "AARs should only be held after failures.", v: false, why: "Successes contain lessons too." },
        { s: "Psychological safety helps surface real lessons.", v: true, why: "People share mistakes when it's safe to." },
        { s: "AARs focus on finding who to blame.", v: false, why: "They focus on causes, not culprits." },
        { s: "It's best to hold an AAR soon after the event.", v: true, why: "Memories are fresh and accurate." }
      ]
    }
  ]
});
