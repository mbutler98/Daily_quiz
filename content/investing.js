/* Topic: Personal Investing (Canadian lens) */
WP.addTopic({
  id: "invest",
  name: "Investing",
  code: "INV",
  blurb: "Practical investing for real life: compounding, index funds, TFSAs and RRSPs, asset mix, and the mistakes that cost the most.",
  lessons: [
    {
      id: "inv-01",
      title: "Compounding and Index Funds",
      level: "Foundation",
      hook: "In 1976, John Bogle launched the first index fund for ordinary investors. Wall Street mocked it as 'Bogle's Folly' — why would anyone settle for average? Today, index funds hold trillions of dollars, and most professional stock pickers fail to beat them.",
      bluf: "Time and compounding do most of the work in investing. Low-cost index funds, which simply own the whole market, beat most actively managed funds over the long run, mainly because they cost less. Fees compound too — against you.",
      story: [
        "## Compounding: growth on growth",
        "Invest $10,000 at 7% a year and leave it alone. After 10 years it's about $19,700; after 30 years, about $76,000; after 40 years, about $150,000. Most of the growth comes late, because you're earning returns on your returns. Starting early matters more than almost anything else.",
        "## What an index fund is",
        "An index is a list that represents a market — the S&P/TSX Composite for Canadian stocks, the S&P 500 for large US companies. An index fund or ETF simply buys everything in the index in the same proportions. No star manager, no stock picking, very low fees.",
        "## Why 'average' wins",
        "Before costs, all investors together earn the market return — that's just arithmetic. After costs, the average actively managed dollar must earn less, because active funds charge more and trade more. S&P's SPIVA scorecards consistently find that, over 10–15 years, the large majority of active funds in Canada and the US underperform their benchmarks. And past winners rarely keep winning.",
        "## Fees matter enormously",
        "Canada has historically had some of the highest mutual fund fees in the developed world. A 2% annual fee versus 0.2% doesn't sound like much. But on $100,000 growing for 30 years at 6% before fees, you end up with roughly $540,000 at the low fee versus about $325,000 at the high fee — over $200,000 lost to fees. The fee is charged every year, on the whole balance, whether the fund does well or not.",
        "## All-in-one ETFs",
        "Canadian investors can now buy a single 'asset allocation' ETF that holds thousands of stocks and bonds worldwide, rebalances automatically and costs around 0.2–0.25% a year. Many people never need more than one."
      ],
      points: [
        { h: "Compounding", t: "Returns earn returns; time in the market is the biggest lever." },
        { h: "Index funds", t: "Own the whole market at very low cost instead of picking stocks." },
        { h: "Costs decide", t: "After fees, most active funds trail their index over the long run." },
        { h: "Fees compound against you", t: "A 1–2% annual fee can consume a large share of lifetime returns." },
        { h: "Keep it simple", t: "One diversified, low-cost ETF can be a complete portfolio." }
      ],
      example: "Warren Buffett made a 10-year, $1 million bet in 2007 that a simple S&P 500 index fund would beat a selection of hedge funds after fees. By the end of 2017 the index fund had returned about 126% versus roughly 36% for the hedge funds' average. The charity he backed collected the winnings.",
      pitfall: "Chasing last year's best-performing fund. Top performers rarely stay on top, and buying after a hot streak often means buying high.",
      terms: [
        ["Compounding", "Earning returns on previous returns, so growth accelerates over time."],
        ["Index fund / ETF", "A fund that tracks a market index by holding its components."],
        ["Active management", "Trying to beat the market by selecting investments."],
        ["MER", "Management Expense Ratio: a fund's annual cost as a percentage of assets."],
        ["Benchmark", "The index an investment's performance is compared against."]
      ],
      mcq: [
        { q: "Who launched the first retail index fund in 1976?", a: ["John Bogle", "Warren Buffett", "Peter Lynch", "Benjamin Graham"], c: 0, why: "At Vanguard." },
        { q: "Why do most active funds underperform index funds over time?", a: ["Higher costs", "They're illegal", "They own fewer bonds", "Index funds pay more tax"], c: 0, why: "Costs are a guaranteed drag." },
        { q: "Who won Buffett's 10-year bet?", a: ["The S&P 500 index fund", "The hedge funds", "It was a tie", "It was cancelled"], c: 0, why: "About 126% vs about 36%." },
        { q: "What does MER stand for?", a: ["Management Expense Ratio", "Market Exposure Rate", "Minimum Equity Requirement", "Monthly Earnings Return"], c: 0, why: "A fund's annual cost." }
      ],
      tf: [
        { s: "Most of compounding's growth happens in the later years.", v: true, why: "Returns build on a bigger base." },
        { s: "Last year's top fund is likely to be top again this year.", v: false, why: "Persistence of outperformance is weak." },
        { s: "A 2% annual fee can cost a large share of long-term growth.", v: true, why: "It compounds against you." }
      ],
      think: [
        "What are you paying in fees on your investments right now? Do you know?",
        "Why do you think people keep paying for active management despite the evidence?",
        "If you'd started investing 10 years earlier, what would be different today?"
      ],
      talk: "In 2007 Warren Buffett bet $1 million that a plain S&P 500 index fund would beat a group of hedge funds over 10 years. The index fund won easily, about 126% against roughly 36%, mostly because the hedge funds' fees ate their returns."
    },
    {
      id: "inv-02",
      title: "TFSA, RRSP and FHSA",
      level: "Foundation",
      hook: "Two Canadians invest the same amount in the same fund for 30 years. One ends up with tens of thousands of dollars more — not because of better picks, but because of which account the money sat in.",
      bluf: "TFSAs grow tax-free and withdrawals are tax-free. RRSPs give a tax deduction now and are taxed when withdrawn. FHSAs combine both benefits for first home buyers. The right choice depends mostly on your tax rate now versus later.",
      story: [
        "## TFSA: Tax-Free Savings Account",
        "Introduced in 2009. You contribute after-tax money; investments grow tax-free, and withdrawals are tax-free for any purpose. Contribution room accumulates every year from age 18 (the annual limit has been $7,000 in recent years and is indexed to inflation), and unused room carries forward. Withdrawals are added back to your room the following calendar year. Despite the name, it can hold stocks, bonds and ETFs — not just savings.",
        "## RRSP: Registered Retirement Savings Plan",
        "Contributions are deducted from your taxable income, so you get a tax refund now. Investments grow tax-deferred, and withdrawals are taxed as income. Room is 18% of the previous year's earned income up to an annual maximum, minus pension adjustments. By the end of the year you turn 71, it must be converted, usually to a RRIF, with minimum withdrawals.",
        "## The core comparison",
        "If your tax rate is the same now and in retirement, a TFSA and RRSP give the same result. If your tax rate is higher now (a high earner expecting a lower retirement income), the RRSP usually wins. If your rate is lower now (early career), the TFSA often wins. RRSP withdrawals can also reduce income-tested benefits like Old Age Security, which favours the TFSA for some.",
        "## FHSA: First Home Savings Account",
        "Launched in 2023 for first-time home buyers. Contributions are tax-deductible like an RRSP, and qualifying withdrawals to buy a first home are tax-free like a TFSA — the best of both. Limits: $8,000 a year, $40,000 lifetime. If you don't buy a home, the balance can be transferred to an RRSP without using RRSP room.",
        "## Common order of priorities",
        "Many advisers suggest: capture any employer RRSP or pension match first (it's free money), use the FHSA if you might buy a first home, then TFSA and RRSP depending on your tax rate. Always check current limits and rules with the CRA, as they change."
      ],
      points: [
        { h: "TFSA", t: "After-tax contributions, tax-free growth and withdrawals; room returns the next year." },
        { h: "RRSP", t: "Deduct now, taxed on withdrawal; best when your tax rate is higher now than later." },
        { h: "FHSA", t: "Deductible contributions and tax-free withdrawals for a first home; $8,000/yr, $40,000 lifetime." },
        { h: "Tax rate now vs later", t: "The key factor in choosing TFSA vs RRSP." },
        { h: "Employer match first", t: "Matched contributions are an instant, guaranteed return." }
      ],
      example: "Priya earns $120,000 and expects about $60,000 of income in retirement. Each $1,000 RRSP contribution saves her roughly $430 in tax now (in Ontario), and she might pay around 30% when withdrawing. Her brother, a student earning $25,000, saves little tax from an RRSP — a TFSA makes more sense for him now.",
      pitfall: "Over-contributing to a TFSA by re-depositing a withdrawal in the same year without enough room. The CRA charges a penalty of 1% per month on the excess.",
      terms: [
        ["TFSA", "Tax-Free Savings Account: tax-free growth and withdrawals."],
        ["RRSP", "Registered Retirement Savings Plan: tax-deductible contributions, taxed withdrawals."],
        ["FHSA", "First Home Savings Account: deductible contributions and tax-free withdrawals for a first home."],
        ["Contribution room", "The amount you're allowed to contribute to a registered account."],
        ["RRIF", "Registered Retirement Income Fund: what an RRSP usually becomes by age 71."]
      ],
      mcq: [
        { q: "Which account gives a tax deduction AND tax-free withdrawal for a first home?", a: ["FHSA", "TFSA", "RRSP", "Non-registered account"], c: 0, why: "The best of both." },
        { q: "TFSA withdrawals are…", a: ["Tax-free, with room restored next year", "Taxed as income", "Not allowed before 65", "Penalised 10%"], c: 0, why: "A key feature." },
        { q: "An RRSP tends to beat a TFSA when your tax rate is…", a: ["Higher now than in retirement", "Lower now than in retirement", "Zero", "Exactly the same"], c: 0, why: "You deduct at a high rate and withdraw at a low one." },
        { q: "The FHSA lifetime contribution limit is…", a: ["$40,000", "$8,000", "$100,000", "Unlimited"], c: 0, why: "With $8,000 per year." }
      ],
      tf: [
        { s: "A TFSA can hold stocks and ETFs, not just cash.", v: true, why: "Despite the name." },
        { s: "RRSP withdrawals are tax-free.", v: false, why: "They're taxed as income." },
        { s: "The TFSA was introduced in 2009.", v: true, why: "Announced in the 2008 budget." }
      ],
      think: [
        "Is your tax rate likely to be higher now or in retirement?",
        "Do you know your current TFSA and RRSP room? (It's in your CRA My Account.)",
        "Does your employer offer a matching program you're not fully using?"
      ],
      talk: "Choosing between a TFSA and an RRSP mostly comes down to one question: is your tax rate higher now or in retirement? If the rates are the same, the two give an identical result. The 'Savings Account' name is also misleading, since a TFSA can hold stocks and ETFs."
    },
    {
      id: "inv-03",
      title: "Asset Allocation and Rebalancing",
      level: "Foundation",
      hook: "Studies of pension funds have found that the split between stocks, bonds and cash explains most of the ups and downs in a portfolio's returns over time. Which individual stocks you pick matters far less than people think.",
      bluf: "Asset allocation — your mix of stocks, bonds and cash — is the biggest decision in investing. Stocks grow more but swing more; bonds are steadier. Choose a mix you can hold through a crash, diversify globally, and rebalance periodically.",
      story: [
        "## The main ingredients",
        "Stocks (equities): ownership in businesses. Historically the highest long-term returns, with big swings — falls of 30–50% happen a few times in a lifetime. Bonds (fixed income): loans to governments and companies. Lower returns, smaller swings, and they often (not always) hold up when stocks fall. Cash and GICs: stable, low return, protects short-term needs.",
        "## Your mix depends on you",
        "Time horizon: money needed in two years shouldn't be in stocks; money for 30 years from now can ride out crashes. Risk tolerance: how you'll actually behave in a 35% fall. A portfolio you abandon in a panic is worse than a more conservative one you stick with. Common mixes run from 40% stocks/60% bonds (conservative) to 80/20 or 100/0 (aggressive).",
        "## Diversify across the world",
        "Canada is roughly 3% of global stock market value, heavily tilted to banks, energy and materials. Yet many Canadians hold most of their stocks at home — 'home bias'. Global diversification spreads risk across technology, healthcare and consumer companies largely absent from the TSX.",
        "## Rebalancing",
        "Over time, winners grow and your mix drifts — a 60/40 portfolio might become 70/30 after a bull market, carrying more risk than you chose. Rebalancing means selling some of what's grown and buying what's lagged, either on a schedule (once a year) or when the mix drifts beyond a threshold (say 5 percentage points). It's a disciplined way to buy low and sell high.",
        "## Glide paths",
        "Target-date funds and many advisers shift gradually from stocks to bonds as a goal approaches. The idea is to reduce the risk that a crash hits just before you need the money."
      ],
      points: [
        { h: "Allocation is the big decision", t: "Your stock/bond/cash mix drives most of your portfolio's behaviour." },
        { h: "Match horizon and temperament", t: "Short-term money stays safe; long-term money can take more risk." },
        { h: "Global diversification", t: "Canada is about 3% of world markets; avoid excessive home bias." },
        { h: "Rebalance", t: "Periodically return to your target mix; it enforces buy-low, sell-high." },
        { h: "Glide path", t: "Reduce risk as you approach the date you'll need the money." }
      ],
      example: "In 2022, both stocks and bonds fell sharply as interest rates rose — a reminder that bonds don't always cushion stock losses. But investors who rebalanced in late 2022, buying beaten-down stocks, benefited from the strong rebound in 2023 and 2024.",
      pitfall: "Choosing an aggressive mix during a bull market, then selling in a panic when it crashes. Pick an allocation based on how you'll feel at the bottom, not at the top.",
      terms: [
        ["Asset allocation", "How a portfolio is divided among stocks, bonds, cash and other assets."],
        ["Equities", "Stocks: ownership shares in companies."],
        ["Fixed income", "Bonds and similar investments paying set interest."],
        ["Rebalancing", "Restoring a portfolio to its target mix."],
        ["Home bias", "Over-investing in your own country's markets."]
      ],
      mcq: [
        { q: "Roughly what share of global stock market value is Canadian?", a: ["About 3%", "About 25%", "About 50%", "About 0.1%"], c: 0, why: "Despite most Canadians holding mostly Canadian stocks." },
        { q: "Rebalancing after stocks surge means…", a: ["Selling some stocks and buying bonds", "Buying more stocks", "Selling all bonds", "Doing nothing"], c: 0, why: "Return to target mix." },
        { q: "Money needed for a home down payment in 18 months is best kept in…", a: ["Cash or GICs", "Small-cap stocks", "Crypto", "Emerging markets"], c: 0, why: "Short horizon, low risk." },
        { q: "What happened to stocks AND bonds in 2022?", a: ["Both fell", "Both rose", "Stocks fell, bonds rose", "Neither moved"], c: 0, why: "Rising rates hit both." }
      ],
      tf: [
        { s: "Asset allocation matters more than individual stock picks for most portfolios.", v: true, why: "It drives overall risk and return." },
        { s: "Bonds always rise when stocks fall.", v: false, why: "2022 proved otherwise." },
        { s: "Rebalancing helps you buy low and sell high.", v: true, why: "You trim winners and add to laggards." }
      ],
      think: [
        "How would you honestly react if your portfolio fell 35% next year?",
        "What share of your investments is in Canadian companies? Is that intentional?",
        "When did you last rebalance?"
      ],
      talk: "Canada makes up only about 3% of the world's stock market, yet many Canadians keep most of their stock investments at home. That 'home bias' leaves them heavy on banks and energy and light on global tech and healthcare."
    },
    {
      id: "inv-04",
      title: "The Behaviour Gap",
      level: "Foundation",
      hook: "Morningstar's 'Mind the Gap' research has repeatedly found that the average investor earns noticeably less than the funds they own — about a percentage point a year in recent studies. The funds didn't fail. The investors' timing did.",
      bluf: "Investors often lose money not from bad investments but from bad behaviour: buying after rises, selling after falls, trading too much, and reacting to fear and headlines. A plan, automation and doing less usually beat cleverness.",
      story: [
        "## The gap",
        "A fund might return 8% a year, but its investors, on average, earn less, because they pile in after strong performance and pull out after losses. Money flows chase returns, so the average dollar arrives late and leaves early.",
        "## Loss aversion",
        "Kahneman and Tversky found that losses feel roughly twice as painful as equal gains feel good. That makes market drops feel unbearable and pushes people to sell at exactly the wrong time — locking in losses and missing the recovery. Some of the market's best days come right after its worst ones; missing a handful of them dramatically cuts long-term returns.",
        "## Overconfidence and overtrading",
        "Studies of brokerage accounts by economists Brad Barber and Terrance Odean found that the most active traders earned substantially less than buy-and-hold investors, mainly due to costs and poorly timed trades. They also found men traded more than women and earned less as a result.",
        "## Recency and herding",
        "We assume recent trends will continue: the hot sector, the meme stock, the crypto boom. Fear of missing out and social proof pull people into bubbles near the top.",
        "## What actually helps",
        "Automate contributions (paying yourself first), so you invest regularly regardless of headlines — this also gives you dollar-cost averaging. Write a simple investment policy: your target mix and when you'll rebalance. Check less often. And when you feel the urge to act during turmoil, wait 48 hours. The best investors are often the ones who forget their password."
      ],
      points: [
        { h: "The behaviour gap", t: "Investors earn less than their funds because of poor timing." },
        { h: "Loss aversion", t: "Losses hurt about twice as much as gains please, prompting panic selling." },
        { h: "Overtrading", t: "More trading usually means lower returns after costs." },
        { h: "Recency bias", t: "Assuming recent trends will continue fuels buying high and selling low." },
        { h: "Automate and wait", t: "Regular automatic investing and a written plan beat reacting to news." }
      ],
      example: "In March 2020, global stocks fell over 30% in about a month. Many investors sold. By August, US stocks had recovered to new highs. Those who sold and waited for 'things to settle' often bought back in at higher prices — or not at all.",
      pitfall: "Believing you'll know when to get out and when to get back in. Timing the market requires being right twice, and most professionals can't do it consistently.",
      terms: [
        ["Behaviour gap", "The difference between a fund's return and its investors' actual return."],
        ["Loss aversion", "Feeling losses more intensely than equivalent gains."],
        ["Dollar-cost averaging", "Investing a fixed amount at regular intervals regardless of price."],
        ["Recency bias", "Overweighting recent events when predicting the future."],
        ["Market timing", "Trying to move in and out of markets ahead of rises and falls."]
      ],
      mcq: [
        { q: "Why do investors often earn less than the funds they hold?", a: ["They buy after rises and sell after falls", "Funds hide returns", "Taxes are always higher", "Brokers steal returns"], c: 0, why: "Poor timing of flows." },
        { q: "Loss aversion suggests losses feel about…", a: ["Twice as bad as equal gains feel good", "The same as gains", "Half as bad", "Ten times as bad"], c: 0, why: "Kahneman and Tversky's estimate." },
        { q: "Barber and Odean found the most active traders…", a: ["Earned less than buy-and-hold investors", "Earned the most", "Matched the market", "Paid no fees"], c: 0, why: "Costs and timing hurt them." },
        { q: "Automating monthly contributions helps by…", a: ["Removing emotional timing decisions", "Guaranteeing profits", "Avoiding all taxes", "Predicting crashes"], c: 0, why: "Consistency beats impulse." }
      ],
      tf: [
        { s: "Some of the market's best days come close to its worst days.", v: true, why: "Volatility clusters." },
        { s: "Market timing requires being right twice: when to exit and when to re-enter.", v: true, why: "That's what makes it so hard." },
        { s: "Checking your portfolio daily tends to improve returns.", v: false, why: "It increases the urge to react." }
      ],
      think: [
        "What did you do — or want to do — during the last big market drop?",
        "Which investment did you buy mainly because everyone was talking about it?",
        "What rule could you write today to stop yourself acting on panic later?"
      ],
      talk: "Research keeps finding that the average investor earns less than the very funds they own, because they buy after prices rise and sell after they fall. Often the best investing move is to automate your contributions and look at your account less often."
    },
    {
      id: "inv-05",
      title: "How Markets Price News",
      level: "Intermediate",
      hook: "A company reports record profits and its stock falls 10%. Another announces losses and its stock jumps. It looks irrational — until you understand that markets trade on surprises, not news.",
      bluf: "Stock prices reflect expectations about the future. When news arrives, prices move based on how it compares with what was already expected. Markets absorb public information quickly, which is why consistently beating them is so hard.",
      story: [
        "## Prices are forecasts",
        "A share price is the market's collective estimate of a company's future cash flows, discounted to today. It already includes what investors expect. So the question isn't 'Is this good news?' but 'Is this better or worse than expected?'",
        "## Earnings surprises",
        "Analysts publish forecasts for each company's quarterly earnings. If a company reports record profits but below the consensus forecast — or gives weaker guidance for next year — the price can fall. If losses are smaller than feared, it can rise. 'Buy the rumour, sell the news' captures this: by the time good news is official, it's often already priced in.",
        "## The efficient market hypothesis",
        "Economist Eugene Fama (Nobel Prize, 2013) argued that prices quickly reflect available information. In its strong form that's too extreme — insiders do know more, and bubbles happen. But in practice, public information gets priced fast, which is why most attempts to profit from reading the news fail. His co-laureate Robert Shiller, by contrast, emphasised how prices can swing far from fundamentals over longer periods.",
        "## What moves the whole market",
        "Interest rates matter enormously: higher rates mean future cash flows are worth less today, especially for growth companies whose profits lie far in the future. Inflation data, central bank statements, jobs reports and geopolitical events shift expectations for everything at once.",
        "## Sectors and cycles",
        "Different sectors respond differently. Banks and energy often benefit from rising rates and commodity prices; utilities and real estate often suffer from higher rates. Consumer staples tend to hold up in recessions; technology and consumer discretionary tend to lead in recoveries. Knowing which way a sector leans helps make sense of daily moves."
      ],
      points: [
        { h: "Prices reflect expectations", t: "A price already includes what investors expect to happen." },
        { h: "Surprises move prices", t: "Results versus consensus, and guidance, matter more than the headline." },
        { h: "Efficient markets (mostly)", t: "Public information is priced quickly, making news-trading hard." },
        { h: "Rates drive valuations", t: "Higher rates reduce the present value of future profits." },
        { h: "Sector sensitivities", t: "Sectors react differently to rates, commodities and the economic cycle." }
      ],
      example: "When the Bank of Canada signals rate cuts sooner than expected, interest-sensitive stocks like utilities and REITs often jump, the Canadian dollar may weaken, and bank stocks can move either way depending on what it means for loan growth and credit losses.",
      pitfall: "Buying a stock because of good news you just read. Thousands of professional investors read it first, and the price has probably already moved.",
      terms: [
        ["Consensus estimate", "The average analyst forecast for a company's results."],
        ["Earnings surprise", "The gap between reported results and consensus expectations."],
        ["Guidance", "A company's own forecast for future results."],
        ["Efficient market hypothesis", "The theory that prices quickly reflect available information."],
        ["Priced in", "Already reflected in the current price."]
      ],
      mcq: [
        { q: "A company reports record profits but its stock falls. The most likely reason?", a: ["Results or guidance missed expectations", "Record profits are bad", "The market is closed", "Profits don't matter"], c: 0, why: "Markets trade on surprises." },
        { q: "Who is most associated with the efficient market hypothesis?", a: ["Eugene Fama", "Warren Buffett", "John Bogle", "Adam Smith"], c: 0, why: "Nobel Prize 2013." },
        { q: "Rising interest rates tend to hurt which stocks most?", a: ["Long-duration growth stocks and utilities", "Banks always", "Cash", "None"], c: 0, why: "Distant cash flows are discounted more." },
        { q: "'Priced in' means…", a: ["Already reflected in the price", "Too expensive", "Not yet known", "Fixed by law"], c: 0, why: "Expectations are embedded." }
      ],
      tf: [
        { s: "Smaller-than-expected losses can make a stock rise.", v: true, why: "Better than feared." },
        { s: "Reading the news is a reliable way to beat the market.", v: false, why: "Public information is priced quickly." },
        { s: "Consumer staples tend to hold up relatively well in recessions.", v: true, why: "People still buy groceries and toothpaste." }
      ],
      think: [
        "When you hear 'good news' about a company, what do you think the market expected?",
        "Which sector does your job depend on? How does it react to interest rates?",
        "If markets are mostly efficient, what edge, if any, could an individual investor have?"
      ],
      talk: "A company can post record profits and still watch its stock drop 10%. Markets trade on surprises, not news. If investors expected even better results, the record profit counts as a disappointment."
    }
  ]
});
