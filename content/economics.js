/* Topic: Economics */
WP.addTopic({
  id: "econ",
  name: "Economics",
  code: "ECON",
  blurb: "The handful of ideas that explain prices, inflation, jobs, trade and why people do what they do.",
  lessons: [
    {
      id: "econ-01",
      title: "Supply, Demand and Prices",
      level: "Foundation",
      hook: "Why does a concert ticket cost $90 at the box office and $600 online a week later? Why did used cars get more expensive than new ones in 2021? One diagram explains most of it.",
      bluf: "Prices come from the tug of war between how much people want something (demand) and how much is available (supply). When demand rises or supply falls, prices go up. Prices act as signals that tell people what to make and what to save.",
      story: [
        "## Two simple tendencies",
        "Demand: the higher the price, the less people want to buy. Supply: the higher the price, the more producers want to sell. Plot both against price and they cross at the equilibrium — the price where the amount people want to buy matches the amount offered.",
        "## Shifts move the price",
        "If something makes people want more at every price — a heatwave for air conditioners, a viral trend for a sneaker — demand shifts out and the price rises. If something cuts supply — a drought, a factory fire, a chip shortage — the price also rises. In 2021, a global semiconductor shortage slashed new car production. Buyers turned to used cars, and used prices in North America jumped dramatically — at times some nearly-new used cars sold above sticker price.",
        "## Elasticity: how sensitive people are",
        "Some things people buy regardless of price — insulin, gasoline in the short run, electricity. Demand is inelastic: price rises barely reduce purchases. Others have many substitutes — a particular brand of cereal — so demand is elastic: raise the price and people switch. Elasticity explains why taxes on cigarettes raise lots of revenue and why airlines charge business travellers more than holidaymakers.",
        "## Prices as messages",
        "Economist Friedrich Hayek pointed out that prices carry information no planner could gather. When copper gets expensive, millions of people economise on it and miners dig more — without anyone needing to know why. That's the 'invisible hand' Adam Smith described in 1776.",
        "## When prices can't move",
        "Price caps (like rent control) can keep costs down for some, but may create shortages, queues and lower quality, because suppliers have less reason to supply. Price floors (like minimum wages) can create surpluses — though economists actively debate how large the effects on jobs really are."
      ],
      points: [
        { h: "Demand slopes down", t: "Higher prices mean people want less." },
        { h: "Supply slopes up", t: "Higher prices mean producers offer more." },
        { h: "Equilibrium", t: "The price where the amount demanded matches the amount supplied." },
        { h: "Elasticity", t: "How much quantity responds to price; depends on substitutes and necessity." },
        { h: "Prices are signals", t: "They coordinate millions of decisions without central planning." }
      ],
      example: "Ride-hailing 'surge pricing' is supply and demand in real time. When it rains on a Friday night, demand spikes, prices jump, more drivers log on and some riders decide to take transit. The price rations rides and summons supply.",
      pitfall: "Confusing a shift of the curve with a movement along it. 'Prices rose, so demand fell' is a movement along demand; 'people want more at every price' is a shift. Mixing them up leads to circular arguments.",
      terms: [
        ["Demand", "How much buyers want at each price."],
        ["Supply", "How much sellers offer at each price."],
        ["Equilibrium price", "The price where quantity demanded equals quantity supplied."],
        ["Price elasticity", "How strongly quantity demanded responds to a price change."],
        ["Price ceiling", "A legal maximum price, which can cause shortages if set below equilibrium."]
      ],
      mcq: [
        { q: "A drought destroys half the coffee crop. The price of coffee will likely…", a: ["Rise", "Fall", "Stay the same", "Go to zero"], c: 0, why: "Supply falls." },
        { q: "Which good likely has the most inelastic demand?", a: ["Insulin", "A brand of potato chips", "Concert tickets", "Restaurant meals"], c: 0, why: "Few substitutes and essential." },
        { q: "Rent control set below market rates can cause…", a: ["Shortages of rental housing", "Surpluses of apartments", "Higher quality buildings", "Lower demand"], c: 0, why: "Less incentive to supply at the capped price." },
        { q: "Who wrote 'The Wealth of Nations' in 1776?", a: ["Adam Smith", "Karl Marx", "John Maynard Keynes", "Milton Friedman"], c: 0, why: "Smith described the 'invisible hand'." }
      ],
      tf: [
        { s: "Surge pricing is an example of supply and demand in action.", v: true, why: "Prices respond to demand and draw in supply." },
        { s: "A shortage means the price is above equilibrium.", v: false, why: "Shortages arise when price is held below equilibrium." },
        { s: "Goods with many substitutes tend to have elastic demand.", v: true, why: "People switch easily." }
      ],
      think: [
        "What did you notice getting much more expensive recently? Was it demand rising or supply falling?",
        "Is surge pricing fair? Who wins and who loses?",
        "Which of your purchases would you keep buying even if the price doubled?"
      ],
      talk: "In 2021 some nearly-new used cars sold for more than new ones. A chip shortage cut new-car production, so buyers flooded the used market. Supply and demand can flip prices in ways that seem impossible."
    },
    {
      id: "econ-02",
      title: "Inflation",
      level: "Foundation",
      hook: "In 2022, Canadian inflation hit 8.1% — the highest in nearly 40 years. Groceries, rent and gas jumped. Why does it happen, why do central banks aim for 2% rather than zero, and who wins and loses?",
      bluf: "Inflation is a general rise in prices, measured in Canada by the Consumer Price Index. It comes from too much spending chasing too few goods, from supply shocks, and from expectations. Moderate inflation is normal; high or unpredictable inflation erodes savings and trust.",
      story: [
        "## Measuring it",
        "Statistics Canada tracks a 'basket' of goods and services a typical household buys — food, shelter, transport, clothing — and checks prices every month. The percentage change in that basket's cost from a year earlier is headline CPI inflation. Because food and energy swing wildly, the Bank of Canada also watches 'core' measures that strip out volatile items.",
        "## Three causes",
        "Demand-pull: the economy runs hot, people and governments spend more than the economy can produce, and sellers raise prices. Cost-push: a supply shock — an oil spike, a war, broken supply chains — raises costs for everyone. Expectations: if workers expect 5% inflation, they ask for 5% raises; firms expect higher costs and raise prices. Inflation can feed itself. 2021–2022 had all three: pandemic savings and stimulus, snarled supply chains, then energy and food shocks after Russia invaded Ukraine.",
        "## Why aim for 2%, not 0%?",
        "A little inflation gives central banks room to cut interest rates in a downturn, avoids the danger of deflation (falling prices that make people delay purchases and debts heavier), and lets real wages adjust without nominal pay cuts. Zero would leave too little margin for error.",
        "## Winners and losers",
        "Unexpected inflation hurts savers holding cash and people on fixed incomes. It helps borrowers with fixed-rate debt, whose debts shrink in real terms — including governments. Your real return or real wage is the nominal figure minus inflation: a 3% raise with 5% inflation is a 2% real pay cut.",
        "## Hyperinflation",
        "When governments print money to cover spending, inflation can spiral. Germany in 1923, Zimbabwe in 2008, and Venezuela in the late 2010s saw prices rise so fast that money became nearly worthless."
      ],
      points: [
        { h: "CPI", t: "The monthly price of a fixed basket of goods, compared with a year earlier." },
        { h: "Demand-pull", t: "Spending outruns what the economy can produce." },
        { h: "Cost-push", t: "Supply shocks raise costs, pushing prices up." },
        { h: "Expectations matter", t: "Expected inflation can become actual inflation through wages and pricing." },
        { h: "Real vs nominal", t: "Subtract inflation from a return or wage to see its true change in buying power." }
      ],
      example: "If your savings account pays 2% and inflation is 4%, your money buys about 2% less each year despite growing in dollars. That's why people moved money into GICs, bonds and stocks when inflation rose.",
      pitfall: "Assuming falling inflation means falling prices. When inflation drops from 8% to 3%, prices are still rising — just more slowly. Prices rarely go back down.",
      terms: [
        ["Inflation", "A general, sustained rise in the price level."],
        ["CPI", "Consumer Price Index: the cost of a typical basket of goods and services over time."],
        ["Core inflation", "Inflation measures that exclude or down-weight volatile items like food and energy."],
        ["Deflation", "A general fall in prices."],
        ["Real return", "A return after subtracting inflation."]
      ],
      mcq: [
        { q: "Your raise is 3% and inflation is 5%. Your real pay change is about…", a: ["−2%", "+8%", "+2%", "0%"], c: 0, why: "3% − 5% = −2%." },
        { q: "An oil price shock that raises costs across the economy causes…", a: ["Cost-push inflation", "Demand-pull inflation", "Deflation", "Stagnation only"], c: 0, why: "Higher input costs push prices up." },
        { q: "Who typically benefits from unexpected inflation?", a: ["Borrowers with fixed-rate debt", "Savers holding cash", "Retirees on fixed pensions", "Lenders"], c: 0, why: "Their debt shrinks in real terms." },
        { q: "Inflation falls from 8% to 3%. Prices are…", a: ["Still rising, but more slowly", "Falling", "Back to 2020 levels", "Unchanged"], c: 0, why: "Lower inflation isn't deflation." }
      ],
      tf: [
        { s: "Canada's inflation peaked at 8.1% in 2022.", v: true, why: "June 2022." },
        { s: "Central banks aim for 0% inflation.", v: false, why: "Most target around 2%." },
        { s: "Expectations of inflation can help cause inflation.", v: true, why: "Through wage and price setting." }
      ],
      think: [
        "Which prices in your life rose most since 2021? Have they come back down?",
        "If you expect high inflation next year, how would that change what you do today?",
        "Why might governments be tempted to tolerate higher inflation?"
      ],
      talk: "When inflation 'falls' from 8% to 3%, prices aren't going down. They're just rising more slowly. That's why groceries still feel expensive even after headlines say inflation is under control."
    },
    {
      id: "econ-03",
      title: "GDP and the Business Cycle",
      level: "Foundation",
      hook: "Every quarter, one number tells us whether the country is growing or shrinking. It's the most watched statistic in economics — and the economist who helped invent it warned it shouldn't be used to measure a nation's welfare.",
      bluf: "Gross Domestic Product (GDP) measures the value of everything produced in a country over a period. Economies move in cycles of expansion and recession. GDP is useful for tracking activity but misses a lot of what makes life good.",
      story: [
        "## What GDP counts",
        "GDP adds up the market value of all final goods and services produced within a country in a year (or quarter). One way to see it: consumption + business investment + government spending + exports − imports. Canada's GDP is roughly $3 trillion a year in Canadian dollars. Divide by population and you get GDP per capita, a rough measure of average living standards.",
        "## Real versus nominal",
        "If prices rise 5% and output doesn't change, nominal GDP still grows 5%. Real GDP strips out inflation to show whether the economy actually produced more. Growth headlines almost always refer to real GDP.",
        "## The business cycle",
        "Economies don't grow smoothly. They expand, overheat, slow, contract, then recover. A popular rule of thumb defines a recession as two consecutive quarters of falling real GDP, though official judges (like the C.D. Howe Institute's council in Canada or the NBER in the US) look at broader evidence, including jobs and income.",
        "## What GDP misses",
        "Simon Kuznets, who helped develop national accounts in the 1930s, warned that a nation's welfare can hardly be inferred from income alone. GDP counts a car crash's repair bills as positive. It ignores unpaid work like caring for children, the value of leisure, inequality, and environmental damage. A country can grow GDP while most people feel worse off.",
        "## Productivity: the long game",
        "Over decades, living standards depend mostly on productivity — output per hour worked. Canada's productivity growth has lagged the US for years, a gap economists and the Bank of Canada have repeatedly called a serious concern."
      ],
      points: [
        { h: "GDP", t: "The value of final goods and services produced in a country over a period." },
        { h: "C + I + G + (X − M)", t: "Consumption, investment, government spending, plus net exports." },
        { h: "Real GDP", t: "GDP adjusted for inflation; shows actual output growth." },
        { h: "Recession rule of thumb", t: "Two quarters of falling real GDP, though official calls use broader data." },
        { h: "Productivity", t: "Output per hour; the main long-run driver of living standards." }
      ],
      example: "Canada's population grew very rapidly in 2022–2024, mostly through immigration. Total GDP kept rising, but GDP per person fell for several quarters — the economy was bigger, but output per person shrank. Both numbers were 'true'; they answered different questions.",
      pitfall: "Treating GDP growth as the same as people being better off. Growth can come from more people working rather than each person producing more, and it ignores distribution and wellbeing.",
      terms: [
        ["GDP", "Gross Domestic Product: total value of final goods and services produced in a country."],
        ["Real GDP", "GDP adjusted for inflation."],
        ["GDP per capita", "GDP divided by population; a rough average living standard."],
        ["Recession", "A significant, widespread decline in economic activity lasting months."],
        ["Productivity", "Output produced per hour of work."]
      ],
      mcq: [
        { q: "Which of these is NOT part of the GDP formula?", a: ["Second-hand house sales between individuals", "Consumption", "Government spending", "Net exports"], c: 0, why: "Existing assets changing hands aren't new production." },
        { q: "Real GDP differs from nominal GDP because it…", a: ["Removes the effect of inflation", "Includes unpaid work", "Excludes government", "Counts only exports"], c: 0, why: "It measures actual output volume." },
        { q: "Total GDP rises but GDP per capita falls. This means…", a: ["Population grew faster than output", "Prices fell", "Exports collapsed", "It's impossible"], c: 0, why: "More people sharing slower-growing output." },
        { q: "What mainly drives long-run living standards?", a: ["Productivity growth", "Interest rate cuts", "Stock prices", "Currency strength"], c: 0, why: "More output per hour of work." }
      ],
      tf: [
        { s: "GDP includes the value of unpaid childcare at home.", v: false, why: "Unpaid household work isn't counted." },
        { s: "Two quarters of negative growth is a common rule of thumb for recession.", v: true, why: "Though official dating uses more evidence." },
        { s: "Simon Kuznets warned against using GDP alone to measure welfare.", v: true, why: "He said welfare can hardly be inferred from national income." }
      ],
      think: [
        "If you could add one thing to GDP to better measure how a country is doing, what would it be?",
        "Why do you think Canada's productivity has lagged the US?",
        "Does your own work show up in GDP? Does all of it?"
      ],
      talk: "Canada's economy grew in 2023–24, but output per person fell for several quarters. The population grew faster than the economy. Headlines about GDP growth and how people actually feel can tell completely different stories."
    },
    {
      id: "econ-04",
      title: "Monetary vs Fiscal Policy",
      level: "Foundation",
      hook: "When a recession hits, two different arms of the state can reach for the steering wheel: the central bank, with interest rates, and the government, with taxes and spending. They don't always pull in the same direction.",
      bluf: "Monetary policy (central bank) changes interest rates and money conditions. Fiscal policy (government) changes taxes and spending. Both can boost or cool the economy, but they work differently, on different timelines, with different trade-offs.",
      story: [
        "## Monetary policy",
        "Run by an independent central bank — the Bank of Canada, the US Federal Reserve. Its main lever is the policy interest rate. Cutting it makes borrowing cheaper, encouraging spending and investment; raising it cools things down. It can move quickly (a decision takes a day) but works slowly through the economy, and it's a blunt tool: it can't target a particular region or industry.",
        "## Fiscal policy",
        "Run by elected governments through budgets. Spending more (on infrastructure, benefits, defence) or taxing less puts money into the economy; the reverse takes it out. It can be targeted — help the unemployed, support a struggling sector — but it's slow to legislate and can be hard to reverse once programs exist.",
        "## Automatic stabilisers",
        "Some fiscal policy happens on autopilot. In a recession, Employment Insurance payments rise and tax revenue falls automatically, cushioning the blow without any new law. In booms, the reverse cools things a little.",
        "## Keynes and the deficit debate",
        "John Maynard Keynes argued in the 1930s that in a deep slump, governments should spend to replace missing private demand, even if it means borrowing. Critics worry about debt piling up, crowding out private investment, and politicians rarely saving in good years. Most economists today accept a role for fiscal support in severe downturns but argue about how much.",
        "## When they collide",
        "In 2020, both arms pushed together: near-zero rates plus massive support like Canada's CERB. In 2022–2023, central banks raised rates to fight inflation while some government spending continued — like one foot on the brake and one on the gas. Coordination, without the government controlling the central bank, is a constant balancing act."
      ],
      points: [
        { h: "Monetary policy", t: "Central bank interest rates and money conditions; fast to decide, slow to work, blunt." },
        { h: "Fiscal policy", t: "Government taxes and spending; targeted but slow to legislate." },
        { h: "Automatic stabilisers", t: "EI and tax revenues adjust automatically to cushion the cycle." },
        { h: "Keynesian stimulus", t: "Government spending to fill a shortfall in private demand during slumps." },
        { h: "Coordination", t: "The two can reinforce or fight each other." }
      ],
      example: "In spring 2020, the Bank of Canada cut its rate to 0.25% and began buying bonds, while Ottawa launched the Canada Emergency Response Benefit (CERB), paying $2,000 a month to millions of people who had lost income. Together, they prevented a much deeper collapse, though some economists argue they also contributed to later inflation.",
      pitfall: "Blaming or crediting the central bank for everything. Taxes, spending, regulation and global shocks often matter as much as interest rates.",
      terms: [
        ["Monetary policy", "Central bank actions on interest rates and money supply."],
        ["Fiscal policy", "Government decisions on taxes and spending."],
        ["Automatic stabilisers", "Taxes and benefits that automatically offset economic swings."],
        ["Deficit", "When government spending exceeds revenue in a year."],
        ["Crowding out", "Government borrowing pushing up rates and reducing private investment."]
      ],
      mcq: [
        { q: "Who controls fiscal policy in Canada?", a: ["Elected governments", "The Bank of Canada", "OSFI", "The TSX"], c: 0, why: "Through budgets set by Parliament and legislatures." },
        { q: "Which is an automatic stabiliser?", a: ["Employment Insurance payments rising in a recession", "A new highway law", "A central bank rate cut", "A trade deal"], c: 0, why: "It kicks in without new decisions." },
        { q: "Which economist argued for government spending to fight slumps?", a: ["John Maynard Keynes", "Adam Smith", "Friedrich Hayek", "David Ricardo"], c: 0, why: "Keynesian economics." },
        { q: "An advantage of fiscal over monetary policy is that it can be…", a: ["Targeted at specific groups", "Decided in one day", "Fully independent of politics", "Free of costs"], c: 0, why: "Spending can aim at particular needs." }
      ],
      tf: [
        { s: "Monetary and fiscal policy can work against each other.", v: true, why: "As in rate hikes alongside stimulus." },
        { s: "CERB was a monetary policy tool.", v: false, why: "It was government (fiscal) spending." },
        { s: "Interest rate changes can target a single region.", v: false, why: "They're economy-wide and blunt." }
      ],
      think: [
        "Should governments save more in good times to spend in bad times? Why is that politically hard?",
        "Was pandemic support too much, too little, or about right, looking back?",
        "Which tool would you use for a recession caused by one industry collapsing in one province?"
      ],
      talk: "In 2022–23, central banks were raising interest rates to slow the economy while some governments were still spending to support it, like pressing the brake and the gas at the same time. The two policy levers don't always point the same way."
    },
    {
      id: "econ-05",
      title: "Trade and Comparative Advantage",
      level: "Intermediate",
      hook: "Even if Canada could make everything more efficiently than another country, it would still gain from trading with it. That counter-intuitive idea, from 1817, is one of economics' most important — and most misunderstood.",
      bluf: "Countries gain by specialising in what they give up least to produce (comparative advantage) and trading for the rest. Trade raises overall wealth but creates winners and losers within countries, which drives the politics of tariffs.",
      story: [
        "## Absolute vs comparative advantage",
        "Absolute advantage is being better at making something. Comparative advantage is about opportunity cost: what you give up to make it. David Ricardo's 1817 example: Portugal was better than England at making both wine and cloth. But Portugal was relatively much better at wine. If Portugal specialised in wine and England in cloth, and they traded, both ended up with more of both goods.",
        "## An everyday version",
        "A top lawyer might type faster than her assistant. But every hour she spends typing is an hour not spent on $500-an-hour legal work. It makes sense for her to focus on law and let the assistant type, even though she's 'better' at both.",
        "## Canada's trade",
        "Trade is a large share of Canada's economy, and roughly three-quarters of its goods exports have gone to the United States in recent years, especially energy, vehicles and parts, metals and lumber. Free trade agreements — the original Canada–US agreement in 1989, NAFTA in 1994, and CUSMA (USMCA) in 2020 — knit supply chains together; car parts can cross the border several times before a vehicle is finished.",
        "## Tariffs",
        "A tariff is a tax on imports. It protects domestic producers from competition but raises prices for consumers and for businesses using imported inputs, and invites retaliation. Most economists see broad tariffs as costly overall, though there are debates about national security and strategic industries.",
        "## The losers are real",
        "Trade makes countries richer on average, but gains are spread thinly (cheaper goods for everyone) while losses are concentrated (a factory town whose plant moves). Economists' 'China shock' research found US regions most exposed to Chinese import competition after 2001 suffered lasting job and wage losses. That's why support for affected workers matters to keeping trade politically sustainable."
      ],
      points: [
        { h: "Comparative advantage", t: "Specialise in what you give up least to produce, then trade." },
        { h: "Opportunity cost", t: "The value of the next-best alternative you give up." },
        { h: "Gains from trade", t: "Specialisation and exchange raise total output and choice." },
        { h: "Tariffs", t: "Taxes on imports: protect some producers, raise prices for everyone else." },
        { h: "Concentrated losers", t: "Trade's costs fall heavily on specific workers and places." }
      ],
      example: "Auto parts in the Canada–US–Mexico supply chain can cross borders multiple times — a part machined in Ontario, assembled into a module in Michigan, installed in a vehicle in Ontario. Tariffs on each crossing can stack up, which is why trade disputes hit the auto sector so hard.",
      pitfall: "Thinking a trade deficit means a country is 'losing'. Deficits reflect savings, investment and capital flows; a country can run a deficit while its economy thrives.",
      terms: [
        ["Comparative advantage", "Producing a good at a lower opportunity cost than others."],
        ["Absolute advantage", "Producing more of a good with the same resources than others."],
        ["Opportunity cost", "The value of the best alternative given up."],
        ["Tariff", "A tax imposed on imported goods."],
        ["CUSMA", "The Canada–United States–Mexico Agreement, which replaced NAFTA in 2020."]
      ],
      mcq: [
        { q: "Who developed the theory of comparative advantage?", a: ["David Ricardo", "Adam Smith", "Karl Marx", "John Keynes"], c: 0, why: "In 1817, with the wine-and-cloth example." },
        { q: "Comparative advantage depends on…", a: ["Opportunity cost", "Absolute productivity only", "Population size", "Currency strength"], c: 0, why: "What you give up to produce something." },
        { q: "A tariff on imported steel will most likely…", a: ["Raise costs for car makers using steel", "Lower steel prices", "Have no effect", "Increase steel imports"], c: 0, why: "Input costs rise downstream." },
        { q: "CUSMA replaced which agreement?", a: ["NAFTA", "The Auto Pact", "GATT", "The EU treaty"], c: 0, why: "In 2020." }
      ],
      tf: [
        { s: "A country can gain from trade even if it is better at producing everything.", v: true, why: "That's comparative advantage." },
        { s: "The costs of trade fall evenly across all workers.", v: false, why: "They're concentrated in exposed industries and places." },
        { s: "Most of Canada's goods exports go to the United States.", v: true, why: "Roughly three-quarters in recent years." }
      ],
      think: [
        "What's your personal comparative advantage at work, the thing you should do more of and delegate less?",
        "Should a country make certain things itself (vaccines, chips) even if it's cheaper to import them?",
        "How should society help the people and towns that lose out from trade?"
      ],
      talk: "Even if a top lawyer types faster than her assistant, she should still let the assistant type. Every hour she spends typing costs her an hour of legal work. That's comparative advantage, the 200-year-old idea behind why trade makes both sides richer."
    },
    {
      id: "econ-06",
      title: "Incentives and Externalities",
      level: "Foundation",
      hook: "In colonial Delhi, British officials reportedly offered a bounty for dead cobras. People began breeding cobras to collect it. When the bounty was scrapped, breeders released their now-worthless snakes. There were more cobras than before.",
      bluf: "People respond to incentives — often in unexpected ways. Externalities are costs or benefits that fall on people outside a transaction, like pollution. Good policy works with incentives and makes people pay for the harms they cause.",
      story: [
        "## Incentives are everywhere",
        "An incentive is anything that changes the costs or rewards of a choice: prices, taxes, bonuses, fines, praise, status. Economics assumes people respond to them, not perfectly but predictably. Pay salespeople only on revenue and they may discount heavily or oversell. Pay doctors per procedure and procedures rise.",
        "## Unintended consequences",
        "The 'cobra effect' (the Delhi story may be partly legend, but similar episodes are well documented — such as a rat bounty in French-ruled Hanoi in 1902 where people cut off tails and released the rats to breed) shows how rewards can backfire. Economist Charles Goodhart gave his name to a related idea: when a measure becomes a target, it ceases to be a good measure. Target call-centre call length, and staff hang up on hard calls.",
        "## Externalities",
        "When a factory pollutes a river, the people downstream bear costs that the factory and its customers don't pay. That's a negative externality, and markets will produce too much of it. Positive externalities run the other way: vaccinations protect others, research spills over to other firms, a beautiful garden pleases neighbours. Markets produce too little of these.",
        "## Fixing externalities",
        "Options: regulations (ban or limit the activity), taxes that make polluters pay the cost they impose (Pigouvian taxes, after economist Arthur Pigou), cap-and-trade systems that limit total pollution and let companies trade permits, or subsidies for positive externalities. Canada has used carbon pricing in various forms; the consumer carbon charge was ended in 2025 while pricing for large industrial emitters continued.",
        "## Tragedy of the commons",
        "When a resource is shared and nobody owns it — fish stocks, clean air — everyone has an incentive to take more, and it gets depleted. The Grand Banks cod fishery off Newfoundland collapsed and was placed under a moratorium in 1992, putting tens of thousands out of work."
      ],
      points: [
        { h: "People respond to incentives", t: "Change rewards and costs, and behaviour changes — sometimes in surprising ways." },
        { h: "Goodhart's law", t: "When a measure becomes a target, it stops being a good measure." },
        { h: "Negative externality", t: "A cost borne by outsiders, like pollution; markets overproduce it." },
        { h: "Pigouvian tax", t: "A tax equal to the external harm, so prices reflect true costs." },
        { h: "Tragedy of the commons", t: "Shared resources get overused when no one owns them." }
      ],
      example: "Wells Fargo set aggressive targets for the number of products sold per customer. Employees opened millions of accounts customers never asked for to hit the numbers. The bank paid billions in fines and settlements — a textbook case of incentives gone wrong.",
      pitfall: "Designing a target or bonus without asking, 'How could someone hit this number without achieving what we actually want?' People will find that route.",
      terms: [
        ["Incentive", "Something that changes the costs or rewards of a choice."],
        ["Externality", "A cost or benefit that affects people not involved in a transaction."],
        ["Pigouvian tax", "A tax on an activity equal to the harm it causes others."],
        ["Goodhart's law", "When a measure becomes a target, it ceases to be a good measure."],
        ["Tragedy of the commons", "Overuse of a shared resource because no one bears the full cost."]
      ],
      mcq: [
        { q: "Second-hand smoke is an example of…", a: ["A negative externality", "A positive externality", "Comparative advantage", "Inflation"], c: 0, why: "Costs fall on bystanders." },
        { q: "Goodhart's law warns that…", a: ["Targets distort the measures they rely on", "Prices always fall", "Taxes never work", "Markets are always efficient"], c: 0, why: "People optimise the number, not the goal." },
        { q: "Which Canadian fishery collapsed in 1992?", a: ["Grand Banks cod", "Pacific salmon", "Lake Erie perch", "Arctic char"], c: 0, why: "A moratorium was imposed." },
        { q: "A cap-and-trade system…", a: ["Limits total emissions and lets firms trade permits", "Bans all pollution", "Subsidises polluters", "Taxes only consumers"], c: 0, why: "Market-based pollution control." }
      ],
      tf: [
        { s: "Markets tend to underproduce things with positive externalities.", v: true, why: "Producers don't capture the full benefit." },
        { s: "Incentives only affect behaviour through money.", v: false, why: "Status, fines and approval matter too." },
        { s: "Wells Fargo's fake accounts scandal is an example of incentives backfiring.", v: true, why: "Sales targets drove fraud." }
      ],
      think: [
        "What metric at your work could people game? How would you spot it?",
        "What's an externality of your commute, positive or negative?",
        "If you had to price one harm in society that currently goes unpriced, what would it be?"
      ],
      talk: "Wells Fargo staff opened millions of accounts customers never asked for, just to hit sales targets. That's Goodhart's law: when a measure becomes a target, people start gaming the measure instead of reaching the goal behind it."
    }
  ]
});
