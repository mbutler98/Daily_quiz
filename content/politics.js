/* Topic: Politics & Government (neutral, Canada-focused with comparisons) */
WP.addTopic({
  id: "politics",
  name: "Politics & Government",
  code: "GOV",
  blurb: "How power is organised and shared — in Canada and elsewhere — explained without the spin.",
  lessons: [
    {
      id: "pol-01",
      title: "How Canada's Parliament Works",
      level: "Foundation",
      hook: "Canadians don't vote for their prime minister. Not directly, anyway. The PM is whoever can win the confidence of the House of Commons — and can lose the job the same way.",
      bluf: "Canada is a constitutional monarchy with a Westminster parliamentary system. Voters elect MPs; the party that can hold the confidence of the House forms government, and its leader becomes prime minister. The government must keep that confidence to stay in power.",
      story: [
        "## Three parts of Parliament",
        "Canada's Parliament has three parts: the Sovereign (the King, represented by the Governor General), the appointed Senate, and the elected House of Commons. A bill becomes law only when all three have approved it. In practice, the House of Commons holds the real power, and the Governor General acts on the government's advice.",
        "## Confidence is everything",
        "There are 343 seats in the House of Commons (after the 2023 redistribution). After an election, the Governor General invites the leader most likely to command the confidence of the House to form a government. Usually that's the party with the most seats. If one party has more than half the seats, it's a majority government. If not, it's a minority, and it must win support from other parties to pass budgets and survive confidence votes.",
        "## Fusion of powers",
        "Unlike the US, where the president is separate from Congress, Canada's prime minister and cabinet ministers sit in Parliament and are accountable to it. Question Period each sitting day is where opposition MPs grill ministers. This fusion lets a majority government act quickly — and concentrates a lot of power in the prime minister's office.",
        "## How a bill becomes law",
        "A bill is introduced, debated and voted on at first, second and third reading in the House, studied in committee, then goes through the same process in the Senate, and finally receives Royal Assent. The Senate rarely blocks bills outright but often amends them.",
        "## Party discipline",
        "MPs usually vote with their party. Leaders control who gets cabinet posts, committee roles and even who can run under the party banner. Critics say this makes backbench MPs weaker than in many other democracies."
      ],
      points: [
        { h: "Westminster system", t: "A parliamentary democracy inherited from Britain, under a constitutional monarch." },
        { h: "Responsible government", t: "The government must keep the confidence of the elected House." },
        { h: "Majority vs minority", t: "A majority holds over half the seats; a minority needs other parties' support." },
        { h: "Three readings + Royal Assent", t: "Bills pass the House and Senate and are signed into law by the Governor General." },
        { h: "Party discipline", t: "MPs usually vote with their party, giving leaders strong control." }
      ],
      example: "Canada has had many minority governments, including 2004, 2006, 2008, 2019 and 2021. In 2022, the governing Liberals and the NDP signed a 'supply and confidence' agreement: the NDP would support the government on key votes in exchange for policies like a national dental care program. It ended in 2024.",
      pitfall: "Assuming Canada works like the US. There's no separately elected executive; the prime minister's power depends on the House, and there are no fixed four-year terms guaranteed — a government can fall on a confidence vote.",
      terms: [
        ["Westminster system", "A parliamentary system modelled on the British Parliament."],
        ["Confidence", "The support of a majority in the House needed for a government to stay in office."],
        ["Minority government", "A government whose party holds fewer than half the seats."],
        ["Royal Assent", "The final approval that turns a bill into law, given by the Governor General."],
        ["Question Period", "Daily time when opposition MPs question the government in the House."]
      ],
      mcq: [
        { q: "How does someone become Canada's prime minister?", a: ["By leading the group with the confidence of the House", "By direct national vote", "By Senate appointment", "By winning the most provinces"], c: 0, why: "Confidence of the Commons decides." },
        { q: "Who represents the King in federal Canada?", a: ["The Governor General", "The Speaker", "The Prime Minister", "The Chief Justice"], c: 0, why: "Lieutenant Governors do so provincially." },
        { q: "A government that loses a confidence vote typically…", a: ["Resigns or asks for an election", "Continues unchanged", "Dissolves the Senate", "Appoints new MPs"], c: 0, why: "It no longer has the House's support." },
        { q: "What is the final step for a bill to become law?", a: ["Royal Assent", "A referendum", "Supreme Court approval", "A provincial vote"], c: 0, why: "Given by the Governor General." }
      ],
      tf: [
        { s: "Senators in Canada are elected.", v: false, why: "They're appointed on the PM's recommendation." },
        { s: "Cabinet ministers in Canada sit in Parliament.", v: true, why: "Unlike US cabinet secretaries." },
        { s: "A minority government needs support from other parties to pass budgets.", v: true, why: "It lacks a majority on its own." }
      ],
      think: [
        "Do you prefer minority governments (more compromise) or majority governments (more decisive)? Why?",
        "Should MPs vote with their party or their constituents when they conflict?",
        "Who is your MP, and what committee do they sit on?"
      ],
      talk: "Canadians don't vote for their prime minister directly. You elect your local MP, and the PM is whoever can keep the support of most of the House of Commons. If they lose a confidence vote, the government can fall without waiting for a scheduled election."
    },
    {
      id: "pol-02",
      title: "Federalism: Who Does What",
      level: "Foundation",
      hook: "Your hospital, your kid's school and your driver's licence are provincial. Your passport, your EI cheque and the Canadian dollar are federal. Your garbage pickup is municipal. Why the split — and why do they fight so much?",
      bluf: "Canada is a federation: power is divided between the federal government and the provinces by the Constitution. Ottawa handles national matters like defence and currency; provinces run health, education and natural resources. Money and responsibilities don't line up neatly, which causes constant negotiation.",
      story: [
        "## Two levels, written down",
        "The Constitution Act, 1867 (originally the British North America Act) created Canada and split powers. Section 91 lists federal powers: defence, criminal law, banking, currency, trade and commerce, Indigenous affairs, immigration (shared), and more. Section 92 lists provincial powers: hospitals, education (section 93), property and civil rights, municipal institutions, and later natural resources.",
        "## Municipalities are 'creatures of the province'",
        "Cities aren't mentioned as a separate order of government. Legally they're created by provinces, which can change their powers, boundaries — or merge them. That's how Ontario amalgamated Toronto in 1998, despite most residents voting against it in local referendums.",
        "## The money mismatch",
        "Provinces carry the most expensive, fastest-growing services — especially health care — while the federal government has broad taxing power. So Ottawa transfers money: the Canada Health Transfer, the Canada Social Transfer, and equalization, which helps provinces with lower revenue-raising capacity provide reasonably comparable services. Ottawa often attaches conditions, which provinces resent as intrusion into their jurisdiction.",
        "## The Charter and the courts",
        "In 1982, the Constitution was patriated (brought home from Britain) with a Charter of Rights and Freedoms. Courts can strike down laws that violate it — but section 33, the 'notwithstanding clause', lets Parliament or a legislature override some rights for five-year renewable periods. Its use, particularly by Quebec and recently Ontario and Saskatchewan, is politically contentious.",
        "## Quebec and asymmetry",
        "Quebec has distinct civil law (based on the French civil code), its own pension plan, a larger role in immigration selection, and two referendums on sovereignty (1980 and 1995 — the second lost by about 50.6% to 49.4%). Canadian federalism has long accommodated differences between provinces."
      ],
      points: [
        { h: "Sections 91 and 92", t: "The Constitution divides federal and provincial powers." },
        { h: "Provinces run health and education", t: "The biggest public services are provincial." },
        { h: "Municipalities are provincial creations", t: "Provinces set cities' powers and boundaries." },
        { h: "Transfers and equalization", t: "Federal money flows to provinces to balance revenues and responsibilities." },
        { h: "Notwithstanding clause", t: "Section 33 lets governments override certain Charter rights temporarily." }
      ],
      example: "Health care shows federalism in action: provinces run hospitals and pay doctors, but the federal Canada Health Act sets conditions (like no extra-billing) tied to federal transfer money. Every few years, Ottawa and the provinces negotiate funding deals that shape wait times across the country.",
      pitfall: "Blaming the federal government for problems provinces control (like hospital wait times or school curriculum), or vice versa. Knowing who's responsible is the first step to holding them accountable.",
      terms: [
        ["Federalism", "A system where power is constitutionally divided between national and regional governments."],
        ["Equalization", "Federal payments helping less wealthy provinces provide comparable public services."],
        ["Charter of Rights and Freedoms", "The part of Canada's Constitution, since 1982, protecting fundamental rights."],
        ["Notwithstanding clause", "Section 33 of the Charter, allowing temporary override of certain rights."],
        ["Patriation", "Bringing Canada's Constitution under full Canadian control in 1982."]
      ],
      mcq: [
        { q: "Which level of government runs hospitals in Canada?", a: ["Provincial", "Federal", "Municipal", "None"], c: 0, why: "Health care delivery is provincial." },
        { q: "Which is federal?", a: ["Currency and banking", "Primary schools", "Driver's licences", "Garbage collection"], c: 0, why: "Listed in section 91." },
        { q: "What happened to Canada's Constitution in 1982?", a: ["It was patriated with a Charter of Rights", "It was abolished", "It was replaced by the US model", "Quebec left Canada"], c: 0, why: "The Constitution Act, 1982." },
        { q: "Quebec's 1995 sovereignty referendum result was…", a: ["About 50.6% No, 49.4% Yes", "70% Yes", "90% No", "It was cancelled"], c: 0, why: "Extremely close." }
      ],
      tf: [
        { s: "Cities in Canada have constitutionally protected independent powers.", v: false, why: "They're created by provinces." },
        { s: "The notwithstanding clause can override some Charter rights for five years at a time.", v: true, why: "Renewable." },
        { s: "Equalization aims to let provinces provide reasonably comparable services.", v: true, why: "That's its constitutional purpose." }
      ],
      think: [
        "Which services in your daily life do you know the responsible level of government for?",
        "Should cities have more constitutional power, given how much of the population lives in them?",
        "Is the notwithstanding clause a useful safety valve or a threat to rights?"
      ],
      talk: "Toronto was merged into one city in 1998 even though most residents voted against it in local referendums. Canadian cities are legally creations of their province, which can redraw them whenever it likes."
    },
    {
      id: "pol-03",
      title: "Electoral Systems",
      level: "Foundation",
      hook: "In the 2015 federal election, the Liberals won about 39.5% of the vote and 54% of the seats — a majority. Under a different voting system, the same ballots could have produced a completely different government.",
      bluf: "How votes become seats shapes politics. Canada uses first-past-the-post: the top vote-getter in each riding wins. It tends to produce majority governments from minority vote shares. Proportional systems match seats to vote share but usually produce coalitions.",
      story: [
        "## First-past-the-post (FPTP)",
        "Canada, the US and the UK use single-member plurality voting. The country is split into ridings; whoever gets the most votes in each wins, even without a majority. It's simple, links each MP to a local area, and usually yields stable single-party governments.",
        "## The distortions",
        "FPTP rewards parties whose votes are concentrated geographically and punishes those spread thinly. A party winning 20% everywhere might win almost no seats; a regional party with 40% in one province can win many. In 1993, the Progressive Conservatives — the governing party — won 16% of the vote but just 2 seats, while the Bloc Québécois won 13.5% and 54 seats, becoming the official opposition.",
        "## Vote splitting and strategic voting",
        "When two parties share similar voters, they can split the vote and let a third party win. That encourages strategic voting — voting for your second choice to stop your last choice — and pushes systems toward two big parties (Duverger's law, after French political scientist Maurice Duverger).",
        "## Proportional representation (PR)",
        "PR systems give parties seats in proportion to their votes. Germany and New Zealand use mixed-member proportional (MMP): you vote for a local MP and a party, and party lists top up the totals to be proportional. PR usually means more parties and coalition governments — more representative, but sometimes slower to form and less decisive.",
        "## Ranked ballots",
        "Ranked-choice voting (used for Australia's House of Representatives and in some party leadership races) lets voters rank candidates; the last-place candidate is eliminated and their votes redistributed until someone has a majority. It reduces vote-splitting but isn't proportional.",
        "## Canada's debate",
        "Electoral reform referendums in British Columbia (2005, 2009, 2018), Ontario (2007) and PEI (2005, 2016, 2019) mostly failed or weren't implemented. The federal government promised to replace FPTP in 2015 but dropped the plan in 2017."
      ],
      points: [
        { h: "First-past-the-post", t: "Most votes in a riding wins; tends to produce majorities from minority vote shares." },
        { h: "Geography matters", t: "Concentrated support wins seats; spread-out support often doesn't." },
        { h: "Strategic voting", t: "Voters back their second choice to block a disliked candidate." },
        { h: "Proportional representation", t: "Seats match vote share; usually leads to coalitions." },
        { h: "Ranked ballots", t: "Voters rank candidates; reduces vote-splitting." }
      ],
      example: "In New Zealand, which switched from FPTP to mixed-member proportional in 1996, governments are almost always coalitions or minority arrangements. In 2020, Labour became the first party to win an outright majority under MMP, with about 50% of the party vote.",
      pitfall: "Believing any voting system is perfectly 'fair'. Each balances different values — local representation, proportionality, stability, simplicity — and economist Kenneth Arrow proved no ranked system satisfies all reasonable fairness criteria at once.",
      terms: [
        ["First-past-the-post", "A system where the candidate with the most votes in a district wins."],
        ["Proportional representation", "A system where parties win seats in proportion to their vote share."],
        ["Mixed-member proportional", "Local MPs plus party-list seats that make overall results proportional."],
        ["Ranked-choice voting", "Voters rank candidates; lowest are eliminated until one has a majority."],
        ["Strategic voting", "Voting for a less-preferred candidate to block a disliked one."]
      ],
      mcq: [
        { q: "In 1993, the governing PCs won about 16% of the vote and how many seats?", a: ["2", "54", "100", "0"], c: 0, why: "A famous FPTP collapse." },
        { q: "Which system makes seat share closely match vote share?", a: ["Proportional representation", "First-past-the-post", "Appointment", "Ranked ballots alone"], c: 0, why: "That's its goal." },
        { q: "Duverger's law says FPTP tends toward…", a: ["Two dominant parties", "Many small parties", "No parties", "One-party rule"], c: 0, why: "Vote-splitting punishes third parties." },
        { q: "Which country switched to MMP in 1996?", a: ["New Zealand", "Canada", "United States", "France"], c: 0, why: "After a referendum." }
      ],
      tf: [
        { s: "Under FPTP, a party can win a majority of seats with under 40% of the vote.", v: true, why: "It happened in 2015 (39.5%)." },
        { s: "Canada switched to proportional representation in 2017.", v: false, why: "The reform promise was dropped in 2017." },
        { s: "Regional parties can do well under FPTP.", v: true, why: "Concentrated support wins seats." }
      ],
      think: [
        "Have you ever voted strategically? How did it feel?",
        "Which matters more to you: a local MP, or a Parliament that mirrors the national vote?",
        "Why do you think electoral reform referendums usually fail?"
      ],
      talk: "In 1993, Canada's governing party won about 16% of the national vote but only 2 seats. The Bloc Québécois won less of the vote and 54 seats. Under first-past-the-post, where your votes are matters as much as how many you get."
    },
    {
      id: "pol-04",
      title: "The Political Spectrum",
      level: "Foundation",
      hook: "'Left' and 'right' come from where people sat in the French National Assembly in 1789: supporters of the king on the right, revolutionaries on the left. More than two centuries later, we're still sorting ideas by seating chart.",
      bluf: "Left and right broadly describe views on equality, the role of government, tradition and markets. But one line can't capture everything; a second axis (personal freedom vs authority) and issue-by-issue views often matter more. Understanding each side's core values makes disagreement more productive.",
      story: [
        "## The classic economic axis",
        "Broadly, the left emphasises equality and sees a larger role for government in reducing inequality, providing services and regulating markets. The right emphasises individual responsibility, free markets, lower taxes and limited government. Most real parties mix positions.",
        "## A second axis: freedom vs order",
        "Many political scientists add a social axis: libertarian (maximum personal freedom, minimal state interference in private life) versus authoritarian or communitarian (more emphasis on order, tradition, security and shared norms). A person can be economically right and socially liberal (a classic libertarian), or economically left and socially conservative.",
        "## Moral foundations",
        "Psychologist Jonathan Haidt's research suggests people weigh different moral concerns: care, fairness, loyalty, authority, sanctity and liberty. In his studies, progressives tended to emphasise care and fairness most, while conservatives drew more evenly across all of them. His point wasn't that one side is right, but that each side often fails to hear the other's moral language.",
        "## Canada's parties, roughly",
        "In broad strokes: the Conservative Party sits centre-right; the Liberal Party centre to centre-left; the New Democratic Party (NDP) left; the Bloc Québécois advocates for Quebec's interests and sovereignty; the Green Party focuses on the environment. Positions shift over time and between leaders.",
        "## Polarisation",
        "Research suggests many democracies have become more 'affectively' polarised — people increasingly dislike and distrust the other side, not just disagree on policy. Social media, news sorting and geographic clustering are among suspected causes. One practical antidote: steelmanning — stating the other side's best argument before replying."
      ],
      points: [
        { h: "Origin", t: "Left and right come from seating in the French Assembly of 1789." },
        { h: "Economic axis", t: "Equality and state role (left) vs markets and individual responsibility (right)." },
        { h: "Social axis", t: "Personal freedom vs order, tradition and authority." },
        { h: "Moral foundations", t: "Different weightings of care, fairness, loyalty, authority, sanctity and liberty." },
        { h: "Steelmanning", t: "Restate the other side's best case before arguing — it improves debate." }
      ],
      example: "Debates over a carbon tax show the axes at work: supporters may stress care for future generations and fixing a market failure; opponents may stress cost of living, fairness to rural drivers and limits on government. Both sides are reasoning from real values.",
      pitfall: "Assuming people who disagree with you are uninformed or bad. Most political disagreement comes from weighting values differently, not from one side lacking facts.",
      terms: [
        ["Left wing", "Political views emphasising equality and an active role for government."],
        ["Right wing", "Political views emphasising markets, tradition and limited government."],
        ["Libertarian", "Favouring maximum individual liberty and minimal state intervention."],
        ["Affective polarisation", "Growing dislike and distrust between partisans of opposing sides."],
        ["Steelmanning", "Presenting the strongest version of an opposing argument."]
      ],
      mcq: [
        { q: "Where do the terms 'left' and 'right' come from?", a: ["Seating in the French National Assembly, 1789", "The US Constitution", "British Parliament's benches in 1900", "Roman Senate"], c: 0, why: "Revolutionaries sat on the left." },
        { q: "Someone who wants low taxes and maximum personal freedom is often called…", a: ["Libertarian", "Socialist", "Authoritarian", "Communitarian"], c: 0, why: "Economically right, socially liberal." },
        { q: "Which researcher developed moral foundations theory?", a: ["Jonathan Haidt", "John Rawls", "Karl Popper", "Thomas Hobbes"], c: 0, why: "Haidt and colleagues." },
        { q: "'Steelmanning' means…", a: ["Stating your opponent's strongest argument", "Attacking a weak version of it", "Refusing to debate", "Voting strategically"], c: 0, why: "The opposite of a straw man." }
      ],
      tf: [
        { s: "A single left-right line captures all political views well.", v: false, why: "A social axis and issue views matter too." },
        { s: "Affective polarisation is about disliking the other side, not just disagreeing.", v: true, why: "It's emotional distance." },
        { s: "The Bloc Québécois runs candidates only in Quebec.", v: true, why: "It focuses on Quebec's interests." }
      ],
      think: [
        "Where would you place yourself on the economic axis and the social axis? Are they the same?",
        "Can you state the strongest argument for a political view you disagree with?",
        "Which moral foundation do you think you weigh most heavily?"
      ],
      talk: "'Left' and 'right' in politics come from where people sat in France's National Assembly in 1789. Supporters of the king sat on the right and revolutionaries on the left. We still sort ideas by that seating chart."
    },
    {
      id: "pol-05",
      title: "Canada vs the US System",
      level: "Foundation",
      hook: "A US president can serve a full four-year term even if Congress opposes almost everything they do. A Canadian prime minister who loses a key vote in the House can be out of office within weeks. Same continent, very different machinery.",
      bluf: "The US separates powers: the president, Congress and the courts are independent and check each other. Canada fuses executive and legislature: the prime minister governs from within Parliament. The US design makes big changes harder; Canada's lets a majority government act fast.",
      story: [
        "## Separation of powers (US)",
        "The US Constitution of 1787 deliberately divided power to prevent tyranny. The president is elected separately (via the Electoral College), can't be removed by a simple no-confidence vote, and cabinet secretaries can't sit in Congress. Congress has two powerful elected chambers, the House and the Senate. The Supreme Court can strike down laws as unconstitutional.",
        "## Checks and balances",
        "Each branch can block the others: the president can veto bills; Congress can override with two-thirds; the Senate confirms judges and cabinet appointments; Congress controls the budget. When different parties control the presidency and Congress ('divided government'), gridlock is common. The Senate filibuster effectively requires 60 of 100 votes for most legislation.",
        "## Fusion of powers (Canada)",
        "In Canada, the prime minister and cabinet are MPs, and the government survives only with the confidence of the House. With a majority, a Canadian PM arguably has more domestic power than a US president, because party discipline means their bills usually pass. The Senate is appointed and rarely blocks government legislation outright.",
        "## Elections",
        "US federal elections are on fixed dates: every two years for the House, every four for president, and senators serve six-year terms. Canada has a fixed-date election law, but elections can come earlier if a government falls or the PM asks the Governor General to dissolve Parliament.",
        "## Courts",
        "Both countries have powerful supreme courts. US justices serve for life after Senate confirmation, making appointments intensely political. Canadian Supreme Court justices are appointed by the PM, face no confirmation vote, and must retire at 75."
      ],
      points: [
        { h: "Separation vs fusion", t: "US branches are independent; Canada's executive sits in Parliament." },
        { h: "Checks and balances", t: "US vetoes, overrides and confirmations let branches block each other." },
        { h: "Divided government", t: "US gridlock is common when different parties control different branches." },
        { h: "Majority power in Canada", t: "Party discipline lets a Canadian majority pass most of its agenda." },
        { h: "Court appointments", t: "US justices serve for life; Canadian justices retire at 75." }
      ],
      example: "A Canadian majority government can pass a budget in weeks. In the US, disputes over spending and the debt ceiling have led to repeated government shutdowns, including a 35-day shutdown in 2018–2019 and an even longer one in 2025.",
      pitfall: "Importing US political terms into Canadian debates — like 'impeachment', 'the administration' or assuming judges must be confirmed. Canada's system works on different rules.",
      terms: [
        ["Separation of powers", "Dividing government into independent legislative, executive and judicial branches."],
        ["Checks and balances", "Mechanisms letting each branch limit the others."],
        ["Veto", "The power of an executive to reject legislation."],
        ["Filibuster", "Prolonged debate used to block a vote; in the US Senate it effectively requires 60 votes to end."],
        ["Electoral College", "The system by which US states choose the president."]
      ],
      mcq: [
        { q: "In which country do cabinet ministers sit in the legislature?", a: ["Canada", "United States", "Both", "Neither"], c: 0, why: "Fusion of powers." },
        { q: "How many US Senate votes usually end a filibuster?", a: ["60", "51", "67", "100"], c: 0, why: "A three-fifths supermajority." },
        { q: "Canadian Supreme Court justices must retire at…", a: ["75", "65", "70", "They serve for life"], c: 0, why: "Mandatory retirement age." },
        { q: "Which system makes major change harder by design?", a: ["The US separation of powers", "Canada's fused system", "Both equally", "Neither"], c: 0, why: "Multiple veto points." }
      ],
      tf: [
        { s: "A US president can be removed by a simple no-confidence vote.", v: false, why: "Only by impeachment and conviction." },
        { s: "Canada's Senate is appointed, not elected.", v: true, why: "On the PM's recommendation." },
        { s: "Divided government often leads to gridlock in the US.", v: true, why: "Branches can block each other." }
      ],
      think: [
        "Which system would you rather live under during a crisis? During a period of bad leadership?",
        "Is it good or bad that a Canadian majority PM can pass most of their agenda?",
        "What US political idea do you hear Canadians use incorrectly?"
      ],
      talk: "With a majority in Parliament, a Canadian prime minister can arguably pass more of their agenda than a US president. The US system was deliberately built so its branches can block each other, while Canada's puts the government inside Parliament."
    }
  ]
});
