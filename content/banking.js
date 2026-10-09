/* Topic: Banking */
WP.addTopic({
  id: "bank",
  name: "Banking",
  code: "BANK",
  blurb: "How banks really make money, create money, fail, and get rescued — with a Canadian lens.",
  lessons: [
    {
      id: "bank-01",
      title: "How Banks Make Money",
      level: "Foundation",
      hook: "A bank borrows your money at 1%, lends it to your neighbour at 6%, and keeps the difference. That's the simple version — and it's still the engine behind most bank profits.",
      bluf: "Banks earn most of their money from the gap between what they pay on deposits and what they charge on loans (net interest margin), plus fees. Their business is taking short-term money and lending it long-term, which is profitable but risky.",
      story: [
        "## The spread",
        "Your chequing account might pay almost nothing. Your mortgage might cost 5%. The bank sits in the middle, and the difference between the interest it earns on loans and pays on deposits is net interest income. Expressed as a percentage of its lending and investments, it's the net interest margin (NIM). For big Canadian banks it has typically been around 1.5% to 2.5%. That sounds small, but on hundreds of billions of dollars of loans it's billions in profit.",
        "## Fees and everything else",
        "The rest comes from non-interest income: account fees, card interchange (a small cut of each purchase), wealth management, insurance, investment banking advice, and trading. Canada's big banks are diversified — much of their profit comes from wealth management and capital markets, not just loans.",
        "## The core trick: maturity transformation",
        "Depositors want their money available any time. Borrowers want 25-year mortgages. Banks bridge the gap: they fund long-term loans with short-term deposits. This is incredibly useful to the economy — it turns idle savings into homes and businesses — but it means a bank can never repay all depositors at once. Everything works as long as confidence holds.",
        "## When interest rates move",
        "Rising rates often widen margins at first, because loan rates reset faster than deposit rates. But they can also raise loan losses (borrowers struggle) and reduce the value of bonds the bank holds. Falling rates squeeze margins. That's why bank shares are so sensitive to central bank decisions.",
        "## Losses are part of the business",
        "Every lending book has some defaults. Banks price that into interest rates and set aside provisions for expected losses. A good bank isn't one with zero losses; it's one whose losses are smaller than the margin it charges for taking them."
      ],
      points: [
        { h: "Net interest income", t: "Interest earned on loans and investments minus interest paid on deposits and borrowing." },
        { h: "Net interest margin", t: "That income as a percentage of interest-earning assets — the bank's core 'spread'." },
        { h: "Non-interest income", t: "Fees, card interchange, wealth management and capital markets revenue." },
        { h: "Maturity transformation", t: "Funding long-term loans with short-term deposits: useful, profitable and inherently fragile." },
        { h: "Provisions", t: "Money set aside for expected loan losses, built into pricing." }
      ],
      example: "Suppose a bank pays an average 2% on $100 billion of deposits and earns 4.5% on $100 billion of loans. Net interest income is $2.5 billion a year before costs and loan losses. Raise loan rates by 0.25% faster than deposit rates and profit jumps by $250 million.",
      pitfall: "Thinking banks simply 'lend out deposits' like a warehouse. In practice, lending is limited by capital rules, demand and risk appetite — and new loans create new deposits (next lesson).",
      terms: [
        ["Net interest margin (NIM)", "Interest income minus interest expense, as a percentage of interest-earning assets."],
        ["Non-interest income", "Bank revenue from fees, commissions, wealth management and trading."],
        ["Maturity transformation", "Funding long-term loans with short-term deposits."],
        ["Interchange fee", "A small fee paid by the merchant's side to the card issuer on each card purchase."],
        ["Loan loss provision", "An amount set aside to cover expected loan defaults."]
      ],
      mcq: [
        { q: "What is the main source of income for a traditional bank?", a: ["Net interest income", "Selling branches", "Government grants", "Printing money"], c: 0, why: "The spread between loan and deposit rates." },
        { q: "Why can't a bank repay every depositor at once?", a: ["Most deposits are lent out long-term", "It stores money abroad", "Deposits are insured", "It is illegal"], c: 0, why: "Maturity transformation ties money up in long loans." },
        { q: "Interchange fees come from…", a: ["Card purchases", "Mortgage payments", "ATM rentals", "Stock trading only"], c: 0, why: "A small cut of each card transaction." },
        { q: "Rising rates can hurt banks by…", a: ["Increasing loan defaults and lowering bond values", "Making deposits disappear overnight", "Removing all fees", "Banning lending"], c: 0, why: "Higher rates strain borrowers and reprice bonds." }
      ],
      tf: [
        { s: "A small net interest margin can still produce large profits for a big bank.", v: true, why: "It applies to enormous balances." },
        { s: "Canada's big banks earn all of their profit from mortgages.", v: false, why: "Wealth management and capital markets are major contributors." },
        { s: "Loan losses are an expected part of banking.", v: true, why: "They're priced in and provisioned for." }
      ],
      think: [
        "Look at your own accounts: how much is the bank paying you, and what is it charging you?",
        "Why do you think banks are so keen to sell you credit cards and investment products?",
        "If you ran a bank, would you rather have lots of small depositors or a few huge ones? Why?"
      ],
      talk: "A bank's core business is borrowing short-term and lending long-term. Your deposit can leave tomorrow, but your neighbour's mortgage runs 25 years. That makes banks very useful, and also means they depend entirely on people's confidence."
    },
    {
      id: "bank-02",
      title: "Where Money Comes From",
      level: "Foundation",
      hook: "Most of the money in Canada isn't notes or coins. It's numbers in bank accounts — and most of those numbers were created by banks, at the moment they made a loan.",
      bluf: "Commercial banks create most money by lending: when a bank approves a loan, it credits the borrower's account with a new deposit. Central banks influence how much is created through interest rates and rules, rather than directly controlling it.",
      story: [
        "## The textbook story",
        "Older textbooks describe a 'money multiplier': people deposit cash, banks keep a fraction in reserve and lend the rest, which gets deposited and lent again. It's a tidy story, but the Bank of England called it misleading in a widely cited 2014 paper, 'Money creation in the modern economy'.",
        "## What actually happens",
        "When your bank approves a $400,000 mortgage, it doesn't hand over someone else's savings. It simply adds $400,000 to the seller's account (via your account) and records a $400,000 loan as an asset. New money now exists. When you repay the loan, that money is effectively destroyed. Lending creates deposits, not the other way round.",
        "## So what limits banks?",
        "If banks can create money by lending, why don't they lend infinitely? Several brakes: they need willing, creditworthy borrowers; they must hold enough capital (their own money) to absorb losses; they must manage liquidity so they can settle payments with other banks; and the interest rate set by the central bank affects how attractive borrowing is. Canada actually eliminated reserve requirements back in 1994 — the limits are capital, liquidity and demand.",
        "## Cash and central bank money",
        "Physical cash is issued by the Bank of Canada and is a small fraction of all money. Banks also hold accounts at the central bank ('reserves') to settle payments with each other. The central bank creates those reserves, for example through quantitative easing.",
        "## Why it matters",
        "If banks create money when they lend, then credit booms can drive asset prices (like housing) and economic cycles. That's why regulators watch lending growth closely and why mortgage rules — like Canada's stress test for borrowers — matter for the whole economy."
      ],
      points: [
        { h: "Loans create deposits", t: "A new loan credits a new deposit; repayment destroys money." },
        { h: "The money multiplier is outdated", t: "Banks aren't mechanically limited by reserves; Canada has no reserve requirement." },
        { h: "Real limits", t: "Borrower demand, capital rules, liquidity needs and interest rates." },
        { h: "Cash is a small slice", t: "Most money is bank deposits, not notes and coins." },
        { h: "Reserves", t: "Central bank money that banks use to settle payments with each other." }
      ],
      example: "In the housing boom of the 2010s and early 2020s, mortgage lending grew rapidly in Canada. Each new mortgage created new deposits in the economy, which helped fuel spending and higher home prices — one reason regulators tightened mortgage stress tests.",
      pitfall: "Picturing a bank vault of depositors' money that gets lent out. Most money is created by lending itself, and limited by capital and demand rather than a pile of savings.",
      terms: [
        ["Broad money", "All money in the economy, mostly bank deposits, plus cash."],
        ["Reserves", "Money banks hold at the central bank to settle payments."],
        ["Money multiplier", "An outdated model where reserves mechanically limit bank lending."],
        ["Credit creation", "Banks creating new money by making loans."],
        ["Reserve requirement", "A rule forcing banks to hold a share of deposits as reserves; Canada removed it in 1994."]
      ],
      mcq: [
        { q: "When a bank makes a new loan, it…", a: ["Creates a new deposit", "Moves gold to the borrower", "Must borrow from the central bank first", "Takes money from savers' accounts"], c: 0, why: "Lending creates deposits." },
        { q: "Which central bank published the 2014 paper on modern money creation?", a: ["Bank of England", "Bank of Canada", "European Central Bank", "Bank of Japan"], c: 0, why: "'Money creation in the modern economy'." },
        { q: "What happens to money when a loan is repaid?", a: ["It is effectively destroyed", "It goes to the government", "It doubles", "It becomes cash"], c: 0, why: "The deposit and the loan cancel out." },
        { q: "Which is NOT a real limit on bank lending in Canada?", a: ["A reserve requirement", "Capital rules", "Borrower demand", "Liquidity needs"], c: 0, why: "Canada eliminated reserve requirements in 1994." }
      ],
      tf: [
        { s: "Most money in Canada exists as bank deposits rather than cash.", v: true, why: "Cash is a small fraction." },
        { s: "Banks can lend unlimited amounts with no constraints.", v: false, why: "Capital, liquidity and demand constrain them." },
        { s: "Credit booms can push up asset prices like housing.", v: true, why: "New money flows into those assets." }
      ],
      think: [
        "If loans create money, what happens to the money supply in a recession when people repay debt and borrow less?",
        "Does knowing this change how you think about housing prices?",
        "Why might a government want to control how much banks lend for mortgages versus business investment?"
      ],
      talk: "When a bank approves your mortgage, it doesn't hand you someone else's savings. It creates brand-new money by adding a deposit. The Bank of England has said most money in a modern economy is created this way."
    },
    {
      id: "bank-03",
      title: "Capital: The Bank's Safety Cushion",
      level: "Intermediate",
      hook: "A typical household puts down 20% on a house. A typical big bank funds its lending with only a few percent of its own money. That thin cushion is why bank regulation exists.",
      bluf: "Bank capital is the owners' money that absorbs losses before depositors are hurt. Global Basel rules set minimum capital ratios, weighted by how risky each asset is. More capital means a safer bank, but lower returns for shareholders.",
      story: [
        "## Leverage is built in",
        "Banks are highly leveraged: they fund most of their assets with deposits and borrowing, and only a small slice with shareholders' equity. If a bank has $100 of loans funded by $95 of deposits and $5 of equity, a 5% loss wipes out the owners. Any more and depositors are at risk.",
        "## Capital absorbs losses",
        "Capital isn't cash sitting in a vault; it's the owners' stake on the funding side of the balance sheet. Losses eat into it first. The thicker the cushion, the bigger the shock a bank can survive while still paying depositors.",
        "## Risk-weighted assets",
        "Not all assets are equally risky. Under the international Basel framework, each asset gets a risk weight: government bonds might be 0%, residential mortgages often much lower than 100%, unsecured business loans 100% or more. Capital requirements are set as a percentage of these risk-weighted assets (RWA).",
        "## The key ratio: CET1",
        "Common Equity Tier 1 (CET1) is the highest-quality capital — mostly shareholders' equity and retained earnings. Basel III sets a minimum CET1 of 4.5% of RWA plus buffers. In Canada, OSFI (the federal bank regulator) requires the largest banks — designated domestically systemically important — to hold more; their CET1 ratios typically sit in the 12–14% range.",
        "## The trade-off",
        "Shareholders like leverage because it boosts return on equity. Regulators like capital because it prevents bailouts. After 2008, rules tightened across the world. Canada's banks came through 2008 without government bailouts, which many credit partly to conservative capital and mortgage rules — though they did use central bank liquidity programs."
      ],
      points: [
        { h: "Capital = owners' stake", t: "It sits on the funding side and absorbs losses before depositors." },
        { h: "Leverage", t: "Banks fund most assets with deposits and debt, so small losses matter." },
        { h: "Risk-weighted assets", t: "Assets are weighted by riskiness to set capital requirements." },
        { h: "CET1 ratio", t: "Top-quality capital divided by risk-weighted assets — the headline safety number." },
        { h: "Basel framework", t: "International standards (Basel III) that national regulators like OSFI apply and often exceed." }
      ],
      example: "A bank with $500 billion of risk-weighted assets and a 13% CET1 ratio holds $65 billion of top-quality capital. It could absorb $65 billion of losses before hitting zero — far more than the 4.5% Basel minimum alone would require.",
      pitfall: "Thinking capital is a pile of cash the bank keeps aside. Capital is about how assets are funded (owners vs depositors), not about holding cash. Cash on hand is liquidity, a separate concept.",
      terms: [
        ["Bank capital", "The owners' equity that absorbs losses before creditors and depositors."],
        ["Leverage", "Using borrowed funds so assets are much larger than equity."],
        ["Risk-weighted assets (RWA)", "Assets adjusted for risk, used to set capital requirements."],
        ["CET1 ratio", "Common Equity Tier 1 capital as a percentage of risk-weighted assets."],
        ["OSFI", "Canada's federal regulator of banks, insurers and federally regulated pension plans."]
      ],
      mcq: [
        { q: "What does bank capital mainly do?", a: ["Absorb losses before depositors are hurt", "Pay staff salaries", "Fund ATMs", "Earn interest for depositors"], c: 0, why: "It's the loss-absorbing cushion." },
        { q: "Basel III's minimum CET1 ratio (before buffers) is…", a: ["4.5%", "45%", "0.5%", "20%"], c: 0, why: "Plus buffers on top." },
        { q: "Who regulates Canada's federally chartered banks?", a: ["OSFI", "The TSX", "CIRO", "The provinces only"], c: 0, why: "The Office of the Superintendent of Financial Institutions." },
        { q: "Why do shareholders often prefer less capital?", a: ["It boosts return on equity", "It's safer", "Regulators reward it", "It lowers taxes"], c: 0, why: "Leverage magnifies returns (and risks)." }
      ],
      tf: [
        { s: "Capital is the same thing as cash in the vault.", v: false, why: "Capital is about funding; cash is liquidity." },
        { s: "Government bonds typically carry a lower risk weight than unsecured business loans.", v: true, why: "They're considered lower credit risk." },
        { s: "Canada's big banks did not need government bailouts in 2008.", v: true, why: "Though they used central bank liquidity support." }
      ],
      think: [
        "Would you rather own shares in a highly capitalised bank or a thinly capitalised one? Why?",
        "Why might regulators require extra capital from the very largest banks?",
        "If risk weights are wrong (say, mortgages are riskier than assumed), what could happen?"
      ],
      talk: "Canada's big banks came through the 2008 financial crisis without government bailouts. Many people credit stricter capital and mortgage rules. Banks run on thin cushions of their own money, so how thick that cushion is matters a great deal."
    },
    {
      id: "bank-04",
      title: "Bank Runs and Deposit Insurance",
      level: "Foundation",
      hook: "In March 2023, customers tried to withdraw $42 billion from Silicon Valley Bank in a single day, mostly by tapping phone screens. The bank was closed the next morning. A modern bank run took hours, not weeks.",
      bluf: "Because banks lend out most deposits long-term, a rush of withdrawals can sink even a solvent bank. Deposit insurance and central bank lending exist to stop panics. Liquidity (cash available now) and solvency (assets exceed debts) are different problems.",
      story: [
        "## Why runs happen",
        "If everyone believes a bank is fine, nobody rushes to withdraw. If people start to doubt it, the rational move is to get your money out first — before the cash runs out. Each withdrawal makes the bank weaker, which makes others more worried. It's a self-fulfilling panic.",
        "## Liquidity versus solvency",
        "A solvent bank has more assets than debts but might not have them in cash today; selling long-term loans quickly means taking losses. That's a liquidity problem. An insolvent bank owes more than it owns. A run can turn a liquidity problem into a solvency problem as the bank sells assets at fire-sale prices.",
        "## SVB and Northern Rock",
        "Silicon Valley Bank had grown fast on deposits from tech companies, many far above the US insurance limit. It invested heavily in long-term bonds that lost value when rates rose. When it announced a loss and capital raise, venture capitalists told their companies to move money, and word spread instantly on social media. In 2007, the UK's Northern Rock suffered the first British bank run in over a century, with queues outside branches, after its short-term funding dried up.",
        "## Deposit insurance",
        "Deposit insurance promises ordinary depositors they'll be repaid even if a bank fails, which removes the reason to panic. In Canada, the Canada Deposit Insurance Corporation (CDIC) covers eligible deposits up to $100,000 per insured category per member institution — for example, separately for deposits in your own name, joint deposits, and TFSAs. In the US, the FDIC limit is $250,000.",
        "## Lender of last resort",
        "Central banks lend to solvent banks against good collateral during panics, so they don't have to dump assets. The 19th-century writer Walter Bagehot summed it up: lend freely, at a high rate, against good collateral."
      ],
      points: [
        { h: "Runs are self-fulfilling", t: "Fear of others withdrawing makes everyone withdraw, which weakens the bank." },
        { h: "Liquidity vs solvency", t: "Not having cash now differs from owing more than you own — but runs can turn one into the other." },
        { h: "Uninsured deposits flee first", t: "Large depositors above insurance limits have the most reason to run." },
        { h: "Deposit insurance", t: "CDIC covers up to $100,000 per insured category per member institution in Canada." },
        { h: "Lender of last resort", t: "Central banks lend to solvent banks in a panic, against good collateral." }
      ],
      example: "SVB's depositors were concentrated in one industry, connected through the same investors and group chats, and mostly uninsured. That made the run unusually fast. US authorities ultimately guaranteed all SVB deposits to stop contagion to other banks.",
      pitfall: "Assuming all your money at a bank is insured. Coverage has limits per category and institution; very large balances, and some products like stocks or mutual funds, aren't covered by deposit insurance.",
      terms: [
        ["Bank run", "Many depositors withdrawing at once out of fear the bank will fail."],
        ["Liquidity", "Having enough cash or easily sold assets to meet obligations now."],
        ["Solvency", "Having assets worth more than liabilities."],
        ["CDIC", "Canada Deposit Insurance Corporation, which insures eligible deposits at member institutions."],
        ["Lender of last resort", "A central bank lending to solvent banks during a panic."]
      ],
      mcq: [
        { q: "CDIC's basic coverage limit is…", a: ["$100,000 per insured category per member institution", "$1 million per person", "$250,000 per account", "Unlimited"], c: 0, why: "Coverage applies separately to eligible categories." },
        { q: "SVB's depositors were especially likely to run because…", a: ["Most were uninsured and closely connected", "They were retirees", "The bank had no website", "They were all overseas"], c: 0, why: "Concentrated, uninsured, networked depositors." },
        { q: "A bank with enough assets but not enough cash today has a…", a: ["Liquidity problem", "Solvency problem", "Capital surplus", "Fraud problem"], c: 0, why: "It's about timing, not total value." },
        { q: "Bagehot's rule for central banks in a panic:", a: ["Lend freely, at a high rate, against good collateral", "Never lend", "Lend only to insolvent banks", "Print cash for everyone"], c: 0, why: "Support solvent banks without subsidising them." }
      ],
      tf: [
        { s: "A bank run can force a solvent bank into insolvency.", v: true, why: "Fire-sale losses can wipe out capital." },
        { s: "Deposit insurance makes bank runs more likely.", v: false, why: "It removes the reason for small depositors to panic." },
        { s: "Northern Rock suffered a bank run in 2007.", v: true, why: "The first UK run in over a century." }
      ],
      think: [
        "How much of your own money sits above deposit insurance limits at one institution?",
        "How has social media changed the speed of panics, in banking and elsewhere?",
        "Is it fair for governments to protect uninsured depositors in a crisis? What does it encourage?"
      ],
      talk: "Silicon Valley Bank's customers tried to pull out $42 billion in one day in 2023, mostly by tapping their phones. Bank runs used to take weeks of queues outside branches. Now they can happen in a few hours."
    },
    {
      id: "bank-05",
      title: "Central Banks and Interest Rates",
      level: "Foundation",
      hook: "Eight times a year, a handful of people at the Bank of Canada announce one number. That number ripples into your mortgage, your savings rate, the Canadian dollar, house prices and job openings.",
      bluf: "The Bank of Canada sets a policy interest rate to keep inflation near its 2% target. Raising it cools borrowing and spending; cutting it does the opposite. Its tools work through banks and markets, with a delay of a year or more.",
      story: [
        "## The mandate",
        "The Bank of Canada, created in 1934, has an inflation target agreed with the federal government: 2%, the midpoint of a 1–3% range. Low, stable inflation helps people and businesses plan. The Bank is independent day-to-day, so politicians can't easily juice the economy before an election.",
        "## The policy rate",
        "The main tool is the target for the overnight rate — the rate at which big banks lend to each other overnight. Banks' prime rates move with it, and so do variable-rate mortgages and lines of credit. Fixed mortgage rates follow bond yields, which react to where markets expect the policy rate to go.",
        "## How it slows inflation",
        "Higher rates make borrowing more expensive and saving more attractive. People buy fewer homes and cars; businesses delay expansions. Demand cools, and with it price pressure. Higher rates also tend to lift the Canadian dollar, making imports cheaper. The catch: it works slowly, often taking 18 to 24 months to fully reach inflation, so the Bank has to act on forecasts.",
        "## When rates hit zero",
        "In 2020, the Bank cut rates to 0.25% and, for the first time, used quantitative easing: creating central bank money to buy government bonds, pushing down longer-term rates. In 2022–2023, as inflation surged past 8%, it raised rates at one of the fastest paces in its history, to 5%.",
        "## Settlement and payments",
        "Central banks also run the plumbing. Payments between Canadian banks settle through Lynx, Payments Canada's high-value system, using accounts at the Bank of Canada. Day-to-day, this is invisible — which is the point."
      ],
      points: [
        { h: "2% inflation target", t: "Midpoint of a 1–3% range, renewed with the federal government every five years." },
        { h: "Overnight rate", t: "The policy rate that drives prime, variable mortgages and lines of credit." },
        { h: "Transmission", t: "Rates affect borrowing, spending, the dollar and asset prices — slowly." },
        { h: "Quantitative easing", t: "Buying bonds with new central bank money to lower long-term rates." },
        { h: "Independence", t: "Operational independence keeps short-term politics out of rate decisions." }
      ],
      example: "Between March 2022 and July 2023, the Bank of Canada raised its policy rate from 0.25% to 5%. Payments on many variable-rate mortgages jumped, home sales fell sharply, and inflation dropped from a peak of 8.1% in June 2022 back toward target over the following two years.",
      pitfall: "Expecting rate changes to fix inflation immediately. Monetary policy works with long, variable lags, so central banks risk overdoing it or acting too late.",
      terms: [
        ["Policy interest rate", "The central bank's key rate; in Canada, the target for the overnight rate."],
        ["Inflation target", "The inflation rate a central bank aims for — 2% in Canada."],
        ["Prime rate", "A bank's base lending rate, which moves with the policy rate."],
        ["Quantitative easing (QE)", "Central bank purchases of bonds using newly created reserves."],
        ["Transmission lag", "The delay between a rate change and its full effect on the economy."]
      ],
      mcq: [
        { q: "The Bank of Canada's inflation target is…", a: ["2%", "0%", "5%", "10%"], c: 0, why: "The midpoint of a 1–3% band." },
        { q: "Raising the policy rate tends to…", a: ["Cool borrowing and spending", "Increase house prices", "Weaken the dollar", "Boost inflation"], c: 0, why: "Borrowing becomes more expensive." },
        { q: "Which mortgage moves most directly with the policy rate?", a: ["Variable-rate", "5-year fixed", "Interest-free", "Reverse mortgage"], c: 0, why: "It's tied to prime." },
        { q: "How long can it take for rate changes to fully affect inflation?", a: ["About 18–24 months", "One day", "A week", "Ten years"], c: 0, why: "Monetary policy works with long lags." }
      ],
      tf: [
        { s: "The Bank of Canada was founded in 1934.", v: true, why: "It began operations in 1935." },
        { s: "Fixed mortgage rates are set directly by the Bank of Canada.", v: false, why: "They follow bond markets." },
        { s: "Quantitative easing was first used by the Bank of Canada in 2020.", v: true, why: "During the pandemic." }
      ],
      think: [
        "How did the 2022–2023 rate hikes affect you or people you know?",
        "Why might it be better for an independent central bank, rather than politicians, to set interest rates?",
        "If rates take two years to work, how would you decide when to stop raising them?"
      ],
      talk: "The Bank of Canada raised its key interest rate from 0.25% to 5% in about 16 months in 2022–23, one of the fastest increases in its history. Rate changes take about 18 to 24 months to fully reach inflation, so the Bank is always partly steering by forecast."
    },
    {
      id: "bank-06",
      title: "Payments: How Money Moves",
      level: "Foundation",
      hook: "When you tap your card for a coffee, at least four organisations get involved in under two seconds — and the coffee shop may not get the money for a couple of days.",
      bluf: "Payments move through networks that pass messages first and settle money later. Card networks, Interac, wires and new real-time rails each balance speed, cost and risk. Settlement between banks ultimately happens on the central bank's books.",
      story: [
        "## Messages versus money",
        "Most payments have two steps. First, a message: 'Customer A wants to pay merchant B $5 — approved?' Second, settlement: the actual movement of money between banks, often later and in batches. Your card purchase is approved instantly, but the banks settle up afterwards.",
        "## Cards: four parties",
        "A credit card payment involves you (cardholder), your bank (the issuer), the merchant, and the merchant's payment provider (the acquirer), connected by a network like Visa or Mastercard. The merchant pays a fee — typically somewhere around 1.5% to 2.5% for credit cards — much of which goes to the issuer as interchange. That's partly how card rewards are funded.",
        "## Interac and debit",
        "In Canada, debit purchases usually run on Interac, which is much cheaper for merchants than credit. Interac e-Transfer, launched in 2003, became the default way Canadians send money to each other.",
        "## Wires, SWIFT and Lynx",
        "Large and international payments travel as wires. SWIFT is a messaging network banks use worldwide to send payment instructions; it moves messages, not money. Settlement happens through correspondent banks and central bank systems. In Canada, high-value payments settle in real time on Lynx, launched by Payments Canada in 2021.",
        "## The real-time future",
        "Many countries now have instant account-to-account payments: the UK's Faster Payments, India's UPI (handling billions of transactions a month), Brazil's Pix. Canada has been building its own Real-Time Rail. The trade-off is clear: instant, irrevocable payments are convenient but make fraud harder to reverse."
      ],
      points: [
        { h: "Authorise, then settle", t: "Payments are approved via messages first; money moves between banks later." },
        { h: "Four-party card model", t: "Cardholder, issuer, merchant, acquirer — connected by a card network." },
        { h: "Interchange funds rewards", t: "Merchants pay fees, much going to the card issuer." },
        { h: "SWIFT moves messages", t: "It carries payment instructions; settlement happens elsewhere." },
        { h: "Real-time payments", t: "Instant and irrevocable: convenient, but fraud is harder to undo." }
      ],
      example: "India's UPI lets people pay by scanning QR codes from almost any bank app, instantly and usually free for consumers. It grew from launch in 2016 to handling well over ten billion transactions a month, transforming small-merchant payments.",
      pitfall: "Thinking SWIFT holds or moves money. It's a secure messaging network; the money moves through bank accounts and central bank settlement systems.",
      terms: [
        ["Settlement", "The final transfer of money between banks to complete a payment."],
        ["Issuer", "The bank that gives the customer their card."],
        ["Acquirer", "The bank or provider that processes card payments for a merchant."],
        ["SWIFT", "A global messaging network for sending payment instructions between banks."],
        ["Lynx", "Canada's high-value, real-time payment settlement system, launched in 2021."]
      ],
      mcq: [
        { q: "What does SWIFT actually do?", a: ["Sends payment messages between banks", "Stores customers' money", "Sets exchange rates", "Prints currency"], c: 0, why: "It's a messaging network." },
        { q: "In card payments, who usually pays the interchange fee?", a: ["The merchant's side", "The cardholder directly", "The central bank", "The government"], c: 0, why: "It's built into merchant fees." },
        { q: "Canada's most common debit network is…", a: ["Interac", "UPI", "Pix", "SEPA"], c: 0, why: "Interac handles most Canadian debit." },
        { q: "A risk of instant, irrevocable payments is…", a: ["Fraud is harder to reverse", "They are too slow", "They need cheques", "They can't be used online"], c: 0, why: "Money moves before anyone can stop it." }
      ],
      tf: [
        { s: "Card purchases are often approved instantly but settled later.", v: true, why: "Authorisation and settlement are separate." },
        { s: "Credit card rewards are funded partly by merchant fees.", v: true, why: "Interchange flows to issuers." },
        { s: "Lynx is Canada's high-value payment system.", v: true, why: "Launched by Payments Canada in 2021." }
      ],
      think: [
        "Who really pays for your credit card points?",
        "Would you give up the ability to reverse a payment in exchange for instant transfers?",
        "Why do you think Canada was slower than countries like India or Brazil to build instant payments?"
      ],
      talk: "Your credit card rewards are largely paid for by merchants' card fees, which are built into prices everyone pays, including people paying cash. In a way, cash and debit users help fund the points that credit card users earn."
    }
  ]
});
