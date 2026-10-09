/* Topic: Regulation & Compliance */
WP.addTopic({
  id: "reg",
  name: "Regulation & Compliance",
  code: "REG",
  blurb: "Why rules exist, who writes them, and how finance, data and AI are regulated — with Canada front and centre.",
  lessons: [
    {
      id: "reg-01",
      title: "Why Regulate at All?",
      level: "Foundation",
      hook: "Nobody loves red tape. Yet almost nobody wants to fly on an uninspected plane, eat untested food or put savings in a bank with no rules. Regulation lives in the tension between those two feelings.",
      bluf: "Governments regulate mainly to fix market failures: harms to outsiders, information gaps, monopoly power and risks to the whole system. Good regulation weighs costs against benefits. Badly designed rules can protect incumbents or be captured by the industry they oversee.",
      story: [
        "## Markets fail in predictable ways",
        "Externalities: a business imposes costs on others (pollution, systemic risk). Information asymmetry: one side knows much more than the other — think used cars, insurance, complex financial products, or the safety of a drug. Market power: a monopoly can overcharge and underinvest. Public goods: things like clean air that markets underprovide. Each gives a reason for rules.",
        "## Types of regulation",
        "Economic regulation sets prices or entry (utilities, telecom). Prudential regulation keeps institutions safe and sound (bank capital rules). Conduct regulation governs how firms treat customers (fair disclosure, suitability). Safety regulation sets standards (aviation, food, buildings).",
        "## Rules versus principles",
        "Rules-based regulation spells out exactly what to do ('disclose these 12 items'). It's clear but can be gamed and goes stale. Principles-based regulation states outcomes ('treat customers fairly') and leaves firms to work out how. It's flexible but less certain. Most regimes mix both.",
        "## Regulatory capture",
        "Economist George Stigler argued in 1971 that regulators often end up serving the industries they regulate — through lobbying, revolving doors between jobs, and the fact that industry experts know more than overstretched officials. Capture can also show up as rules so complex that only large incumbents can afford to comply, keeping start-ups out.",
        "## Cost-benefit and unintended consequences",
        "Every rule has compliance costs, and some push activity into less-regulated corners (after 2008, some lending moved from banks to 'shadow banks'). Good regulators consult publicly, analyse costs and benefits, and review rules after they're in place. The goal isn't more or less regulation, but smarter regulation."
      ],
      points: [
        { h: "Market failures", t: "Externalities, information gaps, market power and public goods justify regulation." },
        { h: "Prudential vs conduct", t: "Safety of institutions vs fair treatment of customers." },
        { h: "Rules vs principles", t: "Precise but rigid vs flexible but less certain." },
        { h: "Regulatory capture", t: "Regulators drifting toward serving the industry they oversee." },
        { h: "Unintended consequences", t: "Rules can push activity into less-regulated areas." }
      ],
      example: "After the 2008 crisis, banks faced much tougher capital and liquidity rules. Some riskier lending moved to private credit funds and other non-banks that face lighter regulation — the risk didn't vanish, it moved. Regulators now watch this 'non-bank' sector closely.",
      pitfall: "Judging regulation as simply 'good' or 'bad'. The useful questions are: what failure does it fix, what does it cost, who bears that cost, and what might it push elsewhere?",
      terms: [
        ["Market failure", "When free markets produce an inefficient or harmful outcome."],
        ["Information asymmetry", "When one party in a transaction knows much more than the other."],
        ["Prudential regulation", "Rules keeping financial institutions safe and sound."],
        ["Conduct regulation", "Rules governing how firms treat customers and markets."],
        ["Regulatory capture", "When a regulator ends up serving the interests of the industry it regulates."]
      ],
      mcq: [
        { q: "Bank capital requirements are an example of…", a: ["Prudential regulation", "Conduct regulation", "Price regulation", "Tax policy"], c: 0, why: "They keep banks safe and sound." },
        { q: "A used-car buyer not knowing the car's history illustrates…", a: ["Information asymmetry", "Externality", "Monopoly", "Public good"], c: 0, why: "The seller knows more." },
        { q: "Who is associated with the theory of regulatory capture?", a: ["George Stigler", "Adam Smith", "John Rawls", "David Ricardo"], c: 0, why: "His 1971 paper." },
        { q: "A risk of very complex rules is that they…", a: ["Favour large incumbents who can afford compliance", "Always lower prices", "Eliminate all risk", "Help start-ups most"], c: 0, why: "Compliance costs are a barrier to entry." }
      ],
      tf: [
        { s: "Principles-based regulation specifies exact steps firms must take.", v: false, why: "That's rules-based regulation." },
        { s: "Tighter rules on banks can push risky activity to non-banks.", v: true, why: "Risk often migrates." },
        { s: "Good regulation considers costs as well as benefits.", v: true, why: "Every rule has compliance costs." }
      ],
      think: [
        "Which regulation in your industry do people complain about most? What failure was it meant to fix?",
        "Where might your industry's regulators be at risk of capture?",
        "Would you prefer to be regulated by clear rules or broad principles? Why?"
      ],
      talk: "Regulation often moves risk around rather than removing it. After 2008, tougher bank rules pushed a lot of risky lending to private credit funds, which face lighter oversight. A good question about any new rule is 'Where does the risk go next?'"
    },
    {
      id: "reg-02",
      title: "Who Regulates Finance in Canada",
      level: "Foundation",
      hook: "Canada is one of the very few major economies without a single national securities regulator. Instead, there are 13 provincial and territorial regulators — plus a whole alphabet of federal bodies for banks.",
      bluf: "Banks are federally regulated (OSFI for safety, FCAC for consumer protection), with the Bank of Canada overseeing the system and CDIC insuring deposits. Securities markets are regulated provincially (like the OSC), coordinated through the CSA, with CIRO overseeing dealers. FINTRAC fights money laundering.",
      story: [
        "## The federal side: banks",
        "OSFI (Office of the Superintendent of Financial Institutions) supervises federally regulated banks, insurers and pension plans for safety and soundness — capital, liquidity, risk management. It also sets the mortgage 'stress test' (Guideline B-20) for federally regulated lenders.",
        "The Financial Consumer Agency of Canada (FCAC) enforces consumer protection rules for banks: fees, disclosures, complaint handling. The Bank of Canada sets monetary policy and oversees key payment systems. CDIC insures eligible deposits and can resolve a failing bank. The Department of Finance writes the laws (like the Bank Act, reviewed periodically).",
        "## The provincial side: securities",
        "Securities — stocks, bonds, funds — are regulated by provinces and territories: the Ontario Securities Commission (OSC), Quebec's Autorité des marchés financiers (AMF), the BC Securities Commission, and others. They coordinate through the Canadian Securities Administrators (CSA), and a 'passport' system lets firms approved in one province operate in others. Attempts to create a single national regulator have stalled for decades; a 2011 Supreme Court ruling found a fully federal regulator went beyond federal powers, though a 2018 ruling upheld a cooperative model.",
        "## The self-regulatory layer",
        "The Canadian Investment Regulatory Organization (CIRO) oversees investment dealers, mutual fund dealers and trading on Canadian marketplaces. It was formed in 2023 by merging IIROC and the MFDA.",
        "## Fighting financial crime",
        "FINTRAC (Financial Transactions and Reports Analysis Centre of Canada) is the financial intelligence unit. Banks, casinos, real estate agents, money services businesses and others must report suspicious transactions and large cash transactions, which FINTRAC analyses and passes to police when warranted.",
        "## Twin peaks, Canadian-style",
        "Many countries split regulation into prudential safety and market conduct. Canada does this partially (OSFI vs FCAC for banks), but the federal–provincial divide adds a third dimension — which is why financial firms often deal with several regulators at once."
      ],
      points: [
        { h: "OSFI", t: "Federal prudential regulator of banks, insurers and pensions; sets the mortgage stress test." },
        { h: "FCAC", t: "Federal consumer protection for bank customers." },
        { h: "Provincial securities regulators", t: "The OSC, AMF and others, coordinated by the CSA." },
        { h: "CIRO", t: "Self-regulatory body for investment and mutual fund dealers, formed in 2023." },
        { h: "FINTRAC", t: "Canada's financial intelligence unit for money laundering and terrorist financing." }
      ],
      example: "A Toronto bank launching a new investment product might deal with OSFI (capital and risk), FCAC (customer disclosure), the OSC and other provincial regulators (the securities offering), CIRO (its dealer arm's conduct), and FINTRAC (anti-money-laundering controls) — all for one product.",
      pitfall: "Assuming one regulator covers everything a financial firm does. In Canada, banking, securities, insurance (partly provincial) and anti-money-laundering rules sit with different bodies at different levels.",
      terms: [
        ["OSFI", "Office of the Superintendent of Financial Institutions: federal prudential regulator."],
        ["FCAC", "Financial Consumer Agency of Canada: protects consumers of federally regulated financial institutions."],
        ["CSA", "Canadian Securities Administrators: umbrella group of provincial and territorial securities regulators."],
        ["CIRO", "Canadian Investment Regulatory Organization: self-regulator of dealers, formed in 2023."],
        ["FINTRAC", "Canada's financial intelligence unit for anti-money-laundering reporting."]
      ],
      mcq: [
        { q: "Who sets the mortgage stress test for federally regulated lenders?", a: ["OSFI", "The OSC", "CIRO", "FINTRAC"], c: 0, why: "Through Guideline B-20." },
        { q: "Securities in Canada are primarily regulated…", a: ["Provincially", "Federally only", "By the Bank of Canada", "By the TSX alone"], c: 0, why: "Coordinated through the CSA." },
        { q: "CIRO was formed in 2023 by merging…", a: ["IIROC and the MFDA", "OSFI and FCAC", "The OSC and AMF", "CDIC and FINTRAC"], c: 0, why: "Creating one dealer self-regulator." },
        { q: "Which body receives suspicious transaction reports?", a: ["FINTRAC", "FCAC", "OSFI", "CSA"], c: 0, why: "Canada's financial intelligence unit." }
      ],
      tf: [
        { s: "Canada has one national securities regulator.", v: false, why: "It has 13 provincial and territorial regulators." },
        { s: "FCAC focuses on consumer protection for bank customers.", v: true, why: "Fees, disclosures and complaints." },
        { s: "Real estate agents in Canada have anti-money-laundering reporting duties.", v: true, why: "They're FINTRAC reporting entities." }
      ],
      think: [
        "Would Canada benefit from a single national securities regulator? Who might resist it?",
        "Which of these regulators would you call if your bank charged you an unfair fee?",
        "Why might money launderers target real estate?"
      ],
      talk: "Canada is one of the few big economies with no single national securities regulator. Instead there are 13 provincial and territorial ones, coordinated by an umbrella group. Proposals to merge them have stalled for decades over federal–provincial jurisdiction."
    },
    {
      id: "reg-03",
      title: "Anti-Money Laundering and KYC",
      level: "Intermediate",
      hook: "In 2024, TD Bank pleaded guilty in the United States to failures in its anti-money-laundering program and agreed to pay about US$3 billion — one of the largest anti-money-laundering penalties ever imposed on a bank. Regulators also capped the growth of its US business.",
      bluf: "Money laundering disguises criminal money as legitimate. Banks fight it by knowing their customers (KYC), monitoring transactions, and reporting suspicious activity to authorities. Weak controls lead to massive fines and reputational damage.",
      story: [
        "## Three stages of laundering",
        "Placement: getting dirty cash into the financial system — deposits, cash-heavy businesses, casinos. Layering: moving it through complex transfers, shell companies and jurisdictions to hide its origin. Integration: bringing it back as apparently legitimate wealth — property, businesses, luxury goods.",
        "## Know your customer (KYC)",
        "Banks must verify who customers are, understand the purpose of the relationship and, for businesses, identify the beneficial owners — the real people who ultimately own or control them. Higher-risk customers, such as politically exposed persons (PEPs), get enhanced due diligence.",
        "## Monitoring and reporting",
        "Banks run systems that flag unusual patterns: rapid movement of funds, many deposits just under reporting thresholds ('structuring'), transfers to high-risk countries. Investigators review alerts and file suspicious transaction reports. In Canada, large cash transactions of $10,000 or more must also be reported to FINTRAC.",
        "## The TD case",
        "US authorities found that TD's US operations had allowed hundreds of millions of dollars connected to criminal networks to pass through, partly because monitoring wasn't keeping up and controls were underfunded. Beyond the fine, US regulators imposed an asset cap on its US retail banks — limiting growth — and appointed a monitor. Canadian regulator FINTRAC separately fined TD.",
        "## Canada's challenge",
        "The 2022 Cullen Commission in British Columbia examined money laundering in BC's casinos, real estate and luxury goods. It found the problem was serious and that enforcement had been weak. Canada has since tightened beneficial ownership transparency, including a federal registry for federally incorporated companies launched in 2024.",
        "## Risk-based approach",
        "Banks can't check every transaction equally. Regulators expect a risk-based approach: spend more effort on higher-risk customers, products and geographies."
      ],
      points: [
        { h: "Placement, layering, integration", t: "The three stages of turning dirty money clean." },
        { h: "KYC and beneficial ownership", t: "Verify customers and the real people behind companies." },
        { h: "Transaction monitoring", t: "Systems flag unusual patterns for investigation." },
        { h: "Reporting", t: "Suspicious transactions and large cash deals ($10,000+) go to FINTRAC in Canada." },
        { h: "Risk-based approach", t: "Focus effort on the highest-risk customers and activities." }
      ],
      example: "A launderer deposits $9,500 in cash at five branches in one day to avoid the $10,000 reporting threshold. That pattern — structuring — is itself a red flag that monitoring systems are designed to catch.",
      pitfall: "Treating AML as a box-ticking exercise. Regulators judge whether controls actually work; underfunded monitoring and backlogs of unreviewed alerts are exactly what led to record fines.",
      terms: [
        ["Money laundering", "Disguising the criminal origin of money so it appears legitimate."],
        ["KYC", "Know Your Customer: verifying identity and understanding customer activity."],
        ["Beneficial owner", "The real person who ultimately owns or controls a company or account."],
        ["Structuring", "Splitting transactions to stay under reporting thresholds."],
        ["Politically exposed person (PEP)", "Someone with a prominent public role, considered higher risk for corruption."]
      ],
      mcq: [
        { q: "Moving funds through shell companies in several countries is which stage?", a: ["Layering", "Placement", "Integration", "Reporting"], c: 0, why: "Hiding the trail." },
        { q: "Large cash transactions must be reported to FINTRAC at…", a: ["$10,000 or more", "$1,000 or more", "$100,000 or more", "Any amount"], c: 0, why: "The large cash transaction threshold." },
        { q: "Depositing $9,500 several times to avoid reporting is called…", a: ["Structuring", "Integration", "Hedging", "Netting"], c: 0, why: "A classic red flag." },
        { q: "Besides the fine, US regulators imposed on TD's US retail banks…", a: ["An asset cap limiting growth", "A ban on all lending", "Nationalisation", "Nothing else"], c: 0, why: "Limiting the size of its US business." }
      ],
      tf: [
        { s: "KYC includes identifying the beneficial owners of business customers.", v: true, why: "The real people behind the entity." },
        { s: "The Cullen Commission examined money laundering in British Columbia.", v: true, why: "Reported in 2022." },
        { s: "Regulators expect banks to check every transaction with equal effort.", v: false, why: "They expect a risk-based approach." }
      ],
      think: [
        "Why might criminals prefer real estate for laundering money?",
        "How would you balance customer convenience with KYC checks when opening an account?",
        "Who should pay for anti-money-laundering systems — banks, customers or governments?"
      ],
      talk: "In 2024 TD Bank pleaded guilty in the US to anti-money-laundering failures and agreed to pay about US$3 billion. US regulators also capped the size of its US business. Weak compliance can directly limit how much a bank is allowed to grow."
    },
    {
      id: "reg-04",
      title: "Privacy and Data Protection",
      level: "Foundation",
      hook: "In 2023, Meta was fined €1.2 billion by Ireland's data protection regulator for transferring European users' data to the United States. It's the largest fine under Europe's privacy law so far — and a sign of how seriously data rules are now enforced.",
      bluf: "Privacy laws control how organisations collect, use and share personal information. Canada's main private-sector law is PIPEDA, with stricter provincial rules like Quebec's Law 25. Europe's GDPR is the global benchmark, with fines up to 4% of worldwide revenue.",
      story: [
        "## What counts as personal information",
        "Anything about an identifiable individual: name, email, location, purchase history, IP address in many contexts, health data, biometrics. Some categories — health, financial, biometric, children's data — get extra protection.",
        "## The core principles",
        "Most privacy laws share similar ideas: collect only what you need, for a stated purpose; get meaningful consent; use data only for that purpose; keep it accurate and secure; let people access and correct their data; and don't keep it longer than necessary. Organisations must also be accountable — appointing someone responsible and being able to show compliance.",
        "## Canada",
        "PIPEDA (Personal Information Protection and Electronic Documents Act, 2000) governs private-sector privacy in most of Canada, overseen by the federal Privacy Commissioner. Quebec's Law 25, phased in from 2022 to 2024, is much stricter, with GDPR-style penalties, mandatory breach reporting, and privacy impact assessments. Alberta and BC have their own private-sector laws. A federal overhaul (Bill C-27, which also included AI rules) died when Parliament was prorogued in early 2025.",
        "## Europe's GDPR",
        "The General Data Protection Regulation took effect in May 2018. It applies to any organisation processing data of people in the EU, wherever the organisation is. It gives people strong rights (access, deletion — 'the right to be forgotten', portability, objecting to automated decisions) and allows fines up to €20 million or 4% of global annual turnover, whichever is higher.",
        "## Breaches",
        "When data is lost or stolen, many laws require organisations to notify regulators and affected people if there's a real risk of significant harm. Breach costs include fines, lawsuits, remediation and lost trust."
      ],
      points: [
        { h: "Personal information", t: "Any information about an identifiable person; some types are especially sensitive." },
        { h: "Purpose and consent", t: "Collect only what's needed for a stated purpose, with meaningful consent." },
        { h: "PIPEDA and Law 25", t: "Canada's federal private-sector law, and Quebec's stricter regime." },
        { h: "GDPR", t: "EU law with global reach and fines up to 4% of worldwide turnover." },
        { h: "Breach notification", t: "Report significant breaches to regulators and affected individuals." }
      ],
      example: "A Toronto retailer selling online to customers in France must comply with GDPR for those customers, PIPEDA for Canadian customers, and Quebec's Law 25 for customers in Quebec — often leading companies to adopt the strictest standard everywhere for simplicity.",
      pitfall: "Collecting data 'because it might be useful later'. Privacy laws generally require a specific purpose, and unnecessary data is extra liability if you're breached.",
      terms: [
        ["Personal information", "Information about an identifiable individual."],
        ["PIPEDA", "Canada's federal private-sector privacy law."],
        ["Law 25", "Quebec's modernised privacy law with strict obligations and penalties."],
        ["GDPR", "The EU's General Data Protection Regulation, in force since 2018."],
        ["Data minimisation", "Collecting only the personal data needed for a specific purpose."]
      ],
      mcq: [
        { q: "GDPR's maximum fine is the higher of €20 million or…", a: ["4% of global annual turnover", "1% of profit", "10% of revenue in the EU", "€1 million"], c: 0, why: "Whichever is higher." },
        { q: "Which Canadian province has the strictest private-sector privacy law?", a: ["Quebec", "Ontario", "Manitoba", "Nova Scotia"], c: 0, why: "Law 25." },
        { q: "GDPR applies to…", a: ["Organisations processing data of people in the EU, wherever based", "Only EU companies", "Only governments", "Only banks"], c: 0, why: "It has extraterritorial reach." },
        { q: "'Data minimisation' means…", a: ["Collecting only what you need", "Compressing files", "Deleting all data yearly", "Encrypting everything"], c: 0, why: "Less data, less risk." }
      ],
      tf: [
        { s: "Meta was fined €1.2 billion under GDPR in 2023.", v: true, why: "For EU–US data transfers." },
        { s: "PIPEDA was fully replaced by a new federal law in 2024.", v: false, why: "The replacement bill died in 2025." },
        { s: "Health and biometric data are usually treated as more sensitive.", v: true, why: "They carry higher risk of harm." }
      ],
      think: [
        "How much personal data does your workplace collect that it doesn't really need?",
        "Would you trade more privacy for free services? Where's your line?",
        "If your organisation had a breach tomorrow, who would you need to notify?"
      ],
      talk: "Europe's privacy law, GDPR, applies to any company handling data about people in the EU, wherever the company is based. Fines can reach 4% of global revenue, which is why many companies apply its rules everywhere."
    },
    {
      id: "reg-05",
      title: "Regulating AI",
      level: "Intermediate",
      hook: "How do you write rules for a technology that changes every few months? The EU decided to try, with the world's first comprehensive AI law. Other countries are watching to see whether it protects people or just slows innovation.",
      bluf: "AI regulation is taking shape around risk: the riskier the use, the stricter the rules. The EU AI Act bans some uses, tightly regulates high-risk ones, and adds transparency duties. Canada's proposed AI law died in 2025, so existing laws on privacy, discrimination and consumer protection still apply.",
      story: [
        "## The EU AI Act",
        "The EU AI Act entered into force in August 2024 and phases in over several years. It sorts AI by risk. Unacceptable risk is banned — for example, government social scoring and certain manipulative or exploitative systems. High-risk uses — AI in hiring, credit scoring, education, critical infrastructure, medical devices, law enforcement — must meet requirements for risk management, data quality, documentation, human oversight and accuracy. Limited-risk systems like chatbots carry transparency duties (people should know they're talking to AI, and deepfakes must be labelled). Minimal-risk uses, like spam filters, are largely free.",
        "## General-purpose AI models",
        "The Act also covers general-purpose models like large language models, requiring technical documentation and copyright-related policies, with extra obligations for the most capable models deemed to pose systemic risk.",
        "## Canada",
        "Canada proposed the Artificial Intelligence and Data Act (AIDA) as part of Bill C-27 in 2022, but it died when Parliament was prorogued in January 2025. In the meantime, Canada relies on existing laws, voluntary codes, and sector guidance — for example, OSFI's guidance on model risk management (E-23) for banks and insurers.",
        "## The US and others",
        "The US has no single federal AI law; it relies on executive actions (which have shifted between administrations), sector regulators and a growing patchwork of state laws. The UK has favoured a lighter, regulator-by-regulator approach. China has specific rules for recommendation algorithms and generative AI.",
        "## The hard problems",
        "Defining 'AI' precisely, keeping rules current, assigning responsibility when a model built by one company is used by another, and balancing safety against innovation. Many experts argue for focusing on uses and outcomes — discrimination, deception, safety — rather than the technology itself."
      ],
      points: [
        { h: "Risk-based approach", t: "Stricter rules for higher-risk uses; bans for unacceptable ones." },
        { h: "EU AI Act", t: "In force since August 2024, phasing in over several years." },
        { h: "High-risk examples", t: "Hiring, credit scoring, education, critical infrastructure, law enforcement." },
        { h: "Transparency duties", t: "People should know when they're dealing with AI; deepfakes must be labelled." },
        { h: "Canada", t: "AIDA died in 2025; existing laws and sector guidance like OSFI E-23 apply." }
      ],
      example: "A bank using an AI model to approve credit cards in Europe would fall under the 'high-risk' category: it must document training data, test for bias, keep logs, allow human review, and explain decisions to customers in many cases. A bank in Canada using the same model would face OSFI model-risk expectations and human rights and privacy laws.",
      pitfall: "Assuming 'no AI law' means 'no rules'. Discrimination, privacy, consumer protection and sector rules already apply to AI decisions in Canada and elsewhere.",
      terms: [
        ["EU AI Act", "The European Union's comprehensive, risk-based AI law."],
        ["High-risk AI", "Uses with significant impact on safety or rights, subject to strict requirements."],
        ["General-purpose AI model", "A model, like an LLM, usable for many different tasks."],
        ["AIDA", "Canada's proposed Artificial Intelligence and Data Act, which died in 2025."],
        ["Model risk management", "Governing how models are built, validated and monitored to limit errors."]
      ],
      mcq: [
        { q: "Under the EU AI Act, AI used for hiring decisions is…", a: ["High-risk", "Banned", "Minimal risk", "Unregulated"], c: 0, why: "Employment decisions affect people's rights." },
        { q: "Government 'social scoring' under the EU AI Act is…", a: ["Banned", "High-risk", "Minimal risk", "Encouraged"], c: 0, why: "An unacceptable risk." },
        { q: "What happened to Canada's AIDA?", a: ["It died when Parliament was prorogued in 2025", "It became law in 2023", "It was copied by the EU", "It applies only to banks"], c: 0, why: "Part of Bill C-27." },
        { q: "Which OSFI guideline covers model risk?", a: ["E-23", "B-20", "A-1", "Z-99"], c: 0, why: "B-20 is the mortgage guideline." }
      ],
      tf: [
        { s: "The EU AI Act entered into force in August 2024.", v: true, why: "With phased application." },
        { s: "Chatbots under the EU AI Act must let people know they're interacting with AI.", v: true, why: "A transparency duty." },
        { s: "Without a specific AI law, AI decisions in Canada are unregulated.", v: false, why: "Existing laws still apply." }
      ],
      think: [
        "Which AI uses in your work would count as 'high-risk' under the EU approach?",
        "Should AI rules focus on the technology or on outcomes like discrimination?",
        "Who should be responsible when a company uses another firm's AI model and it causes harm?"
      ],
      talk: "Europe's AI Act regulates AI by how risky the use is, not by how advanced the technology is. A spam filter is barely regulated, a hiring tool faces strict rules, and government 'social scoring' is banned outright."
    }
  ]
});
