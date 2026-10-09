/* Deeper material for the original Finance (CFA) lessons. */
WP.enrich({
  "cfa-01": {
    hook: "Would you rather have $10,000 today or $11,000 in two years? Most people answer with their gut. Finance answers with one simple formula — and it's the foundation of nearly every valuation on Bay Street.",
    story: [
      "## Why money has a time stamp",
      "A dollar today beats a dollar later for three reasons. You could invest it and earn a return. Prices tend to rise, so later dollars buy less. And the future is uncertain — a promised payment might not arrive. So every amount of money needs a date attached to compare it fairly.",
      "## Growing money forward",
      "Put $1,000 in an account paying 5% a year. After one year: $1,050. After two: not $1,100 but $1,102.50, because in year two you earn interest on last year's interest too. That's compounding. The formula is future value = today's amount × (1 + rate) to the power of years. Over long periods, compounding is enormous: $1,000 at 7% roughly doubles every 10 years, becoming about $7,600 in 30 years.",
      "## Bringing money back",
      "Discounting runs the same maths in reverse: present value = future amount ÷ (1 + rate)^years. It answers, \"What is that future payment worth to me today?\" The rate you use — the discount rate — reflects what you could earn elsewhere with similar risk. Higher rate or longer wait means a smaller present value.",
      "## The decision rule",
      "Net Present Value (NPV) adds up the present values of all money coming in and subtracts what you pay out. If NPV is positive, the project earns more than your required return — do it. If negative, it destroys value. Companies use NPV to decide on factories, acquisitions and software projects; investors use the same logic to value shares and bonds.",
      "A handy shortcut, the Rule of 72: divide 72 by the interest rate to estimate how many years it takes money to double. At 6%, about 12 years; at 9%, about 8."
    ],
    think: [
      "What discount rate do you implicitly use when deciding between spending now and saving?",
      "Using the Rule of 72, how long would it take your savings to double at today's savings-account rate?",
      "Why might two companies value the same project differently, even with the same cash flow forecast?"
    ],
    talk: "The Rule of 72 is a quick money shortcut: divide 72 by the interest rate to get roughly how many years it takes money to double. At 6% it's about 12 years, and at 9% about 8. It also works in reverse for inflation eating your savings."
  },
  "cfa-02": {
    hook: "CFA Institute uses an 'ethics adjustment': if your score lands right on the pass line, strong ethics answers can lift you over it, and weak ones can hold you back. Ethics isn't the soft part of the exam. It's the tiebreaker.",
    story: [
      "## The big idea: a hierarchy of loyalty",
      "The CFA Code and Standards boil down to an order of priorities: the integrity of markets first, then clients, then your employer, and yourself last. When in doubt, ask whose interests you're serving and whether they're in the right order.",
      "## The seven Standards",
      "I. Professionalism — know and follow the law (and the stricter rule when the CFA Standards go further), stay independent, don't misrepresent, avoid misconduct. II. Integrity of Capital Markets — no trading on inside information, no market manipulation. III. Duties to Clients — loyalty, fair dealing, suitability, fair performance reporting, confidentiality. IV. Duties to Employers — loyalty, rules on extra pay, supervising others. V. Investment Analysis — diligence, a reasonable basis, clear communication, keeping records. VI. Conflicts of Interest — disclose them, put client trades first, disclose referral fees. VII. Responsibilities as a Member or Candidate — exam conduct and how you refer to the designation.",
      "## The ones that come up most",
      "Material non-public information: if you know something not yet public that would move a price, you can't trade on it or tip anyone off — however you learned it. The 'mosaic theory' allows you to combine public information with non-material private details to reach a conclusion; that's just good analysis.",
      "Priority of transactions: clients first, employer second, your own account last. Suitability: recommendations must fit the client's objectives, constraints and risk tolerance — not just be 'good investments'.",
      "## How to think through a case",
      "Exam questions are usually stories. Ask: Is there a duty here? Who is owed it? Was anything material and non-public? Was there a conflict, and was it disclosed? Is the stricter of law or Standard being followed? Most answers fall out of those five questions."
    ],
    think: [
      "Have you ever seen a situation at work where your employer's interests and a client's interests pulled apart? What did people do?",
      "Where is the line between 'great research' and 'inside information'?",
      "Why does trust in markets matter even to people who never invest directly?"
    ],
    talk: "The CFA ethics rules boil down to one order of loyalty: protect the market first, then the client, then your employer, and yourself last. If a work decision puts those in a different order, that's usually the warning sign."
  },
  "cfa-03": {
    hook: "A company can report record profits and still go bankrupt the same year. Understanding why is the single most useful thing you can learn about reading a business.",
    story: [
      "## Three statements, three questions",
      "The income statement asks: did we make money over this period? Revenue minus costs equals profit (net income). The balance sheet asks: what do we own and owe right now? Assets equal liabilities plus shareholders' equity — always, which is why it 'balances'. The cash flow statement asks: where did the actual cash come from and go?",
      "## Profit is an opinion, cash is a fact",
      "Accounting uses accruals: revenue is recorded when it's earned, not when the cash arrives, and costs when they're incurred, not when they're paid. That gives a truer picture of performance — but it means profit and cash can drift far apart.",
      "Example: a firm ships $1 million of goods on 90-day terms. Revenue and profit jump today, but no cash has come in. Instead, 'accounts receivable' on the balance sheet goes up. A fast-growing business that sells on credit and builds inventory can be very profitable on paper while its bank account drains. Many small firms fail exactly this way.",
      "## How they connect",
      "Net income flows into retained earnings on the balance sheet. The cash flow statement usually starts with net income and adjusts it: add back non-cash costs like depreciation, then account for changes in working capital (receivables, inventory, payables). The ending cash figure matches cash on the balance sheet. Everything ties together, which is why analysts build three-statement models.",
      "## The cash flow statement's three sections",
      "Operating: cash from running the business. Investing: buying or selling long-term assets like equipment or companies. Financing: borrowing, repaying debt, issuing shares, paying dividends. A healthy mature company generates cash from operations and uses it to invest or reward shareholders."
    ],
    think: [
      "If you ran a small business that offered customers 60 days to pay, what would happen to your cash as sales grew quickly?",
      "Why might a company's managers prefer to talk about profit rather than cash flow?",
      "Pick a company you know. Would you expect its operating cash flow to be higher or lower than its profit? Why?"
    ],
    talk: "Profit is partly an opinion, but cash is a fact. A company can book record profits and still run out of money, for example if customers pay late or stock sits unsold. Always look at operating cash flow, not just earnings."
  },
  "cfa-04": {
    hook: "In March 2023, Silicon Valley Bank collapsed — not because it made risky loans, but because it bought very safe government bonds. When interest rates rose, those 'safe' bonds lost billions in value.",
    story: [
      "## What a bond is",
      "A bond is a loan you can trade. You lend, say, $1,000 to a government or company. In return you get regular interest payments (coupons) and your $1,000 back at the end (maturity). A 5% coupon pays $50 a year.",
      "## Why prices fall when rates rise",
      "Imagine you hold a bond paying 3%, and new bonds now pay 5%. Nobody will pay full price for your 3% bond when they can get 5% elsewhere. Its price has to drop until its overall return (yield) matches the market. So bond prices and interest rates move in opposite directions — a see-saw.",
      "If a bond's coupon is above current market yields, it trades above $1,000 (at a premium). Below market yields, it trades at a discount. Equal, and it trades at par.",
      "## Duration: the sensitivity dial",
      "Duration tells you how much a bond's price will move when rates change. A bond with a duration of 7 will fall about 7% if rates rise by 1 percentage point, and rise about 7% if rates fall by 1 point. Longer maturities and smaller coupons mean higher duration — you're waiting longer for your money, so changes in rates matter more.",
      "SVB held lots of long-term bonds bought when rates were near zero. When rates jumped in 2022, their value fell sharply. When depositors rushed to withdraw, the bank had to sell bonds at a loss, revealing the hole. Safe from default isn't the same as safe from interest-rate risk.",
      "## Convexity, briefly",
      "The price–yield relationship is curved, not a straight line. For big rate moves, duration alone slightly overstates losses and understates gains. Convexity is the correction — a nice feature to have as a bondholder."
    ],
    think: [
      "If you expect interest rates to fall, would you want long or short bonds? Why?",
      "How does the bond see-saw affect people with variable-rate mortgages versus people buying bonds for retirement?",
      "What lesson does SVB teach about the difference between 'safe' and 'risk-free'?"
    ],
    talk: "Silicon Valley Bank failed in 2023 holding mostly very safe US government bonds. When interest rates rose, those long-dated bonds lost billions in market value. 'Safe from default' isn't the same as 'safe from interest-rate risk'."
  },
  "cfa-05": {
    hook: "What is a share of a company actually worth? Not what it trades at today — that's just its price. Its value is all the cash it will ever hand back to its owners, discounted to today.",
    story: [
      "## Price is what you pay, value is what you get",
      "That line is from Warren Buffett, and it's the heart of valuation. The market price is set by buyers and sellers right now. Intrinsic value is your own estimate based on the business. When value is well above price, you may have found a bargain; when it's well below, the stock may be overhyped.",
      "## Valuing a steady dividend payer",
      "For a mature company whose dividend grows steadily, the Gordon growth model gives a quick answer: value = next year's dividend ÷ (required return − growth rate). A $2 dividend, an 8% required return and 3% growth gives $2 ÷ 0.05 = $40. It's simple, but very sensitive: change growth from 3% to 4% and value jumps to $50.",
      "## Discounted cash flow (DCF)",
      "For most businesses, analysts forecast free cash flow — cash left after running the business and investing in it — for five or ten years, discount each year back to today, then add a 'terminal value' for everything after. The terminal value often makes up more than half the total, so the long-run growth assumption matters enormously. A sensible check: no company can grow faster than the economy forever.",
      "## Multiples: the quick comparison",
      "Price-to-earnings (P/E), price-to-book and EV/EBITDA compare a company with similar ones. If peers trade at 15 times earnings and your company at 10, it might be cheap — or the market might know something you don't. Multiples are fast and widely used, but they only tell you whether something is cheap relative to others, not whether the whole group is overpriced.",
      "## Required return",
      "Your discount rate reflects risk, often estimated with CAPM. Riskier businesses need higher returns, which lowers what you'd pay today."
    ],
    think: [
      "Pick a company you admire. What would need to be true about its future cash flows to justify today's share price?",
      "Why might a tech company with no profits still be valued in the billions?",
      "If the terminal value is most of a DCF, how confident can anyone really be in a precise valuation?"
    ],
    talk: "In most company valuations, more than half the estimated value comes from cash expected after the next 5–10 years, the so-called terminal value. Valuation is mostly a bet on the long-term future, not on this year's numbers."
  },
  "cfa-06": {
    hook: "If you buy one stock, you might lose 80% when that company stumbles. Buy 30 different ones and that single disaster barely dents you. But no amount of diversifying saves you from a market crash. That gap is the core of modern portfolio theory.",
    story: [
      "## Two kinds of risk",
      "Some risk is specific to one company: a failed product, a fraud, a lost lawsuit. Spread your money across many companies and these hits mostly cancel out. That's unsystematic risk, and you can diversify it away almost for free.",
      "Other risk hits everything at once: recessions, interest-rate shocks, pandemics. That's systematic or market risk, and diversification can't remove it.",
      "## Why you're only paid for one",
      "Since anyone can diversify away company-specific risk, the market won't reward you for carrying it. The extra return you can expect comes only from bearing market risk. That's the central idea of the Capital Asset Pricing Model (CAPM).",
      "## Beta and CAPM",
      "Beta measures how much a stock tends to move with the market. Beta of 1: moves with the market. 1.5: swings 50% more (many tech stocks). 0.5: half as much (utilities, consumer staples). CAPM says expected return = risk-free rate + beta × (market return − risk-free rate). With a 3% risk-free rate, an 8% market return and a beta of 1.2, you'd expect 3% + 1.2 × 5% = 9%.",
      "## Correlation is the secret ingredient",
      "Diversification works because assets don't all move together. Two investments with low correlation can combine into a portfolio less volatile than either one. The catch: in a crisis, correlations often jump toward 1 — things that usually move independently suddenly fall together.",
      "## Measuring risk-adjusted performance",
      "The Sharpe ratio divides the return above the risk-free rate by volatility. It answers: how much reward did I get per unit of bumpiness? It's a fairer way to compare a calm fund with a wild one."
    ],
    think: [
      "Is your own wealth diversified, if you count your job, your home and your pension, not just your investments?",
      "Why might working at a company and also owning lots of its shares be a double risk?",
      "Why do you think correlations rise in a crisis?"
    ],
    talk: "Diversification is the only free lunch in investing. Spreading money across about 20–30 stocks removes most company-specific risk, but nothing removes market risk. That's the only risk investors are actually paid to take."
  },
  "cfa-07": {
    hook: "Farmers in Chicago started using futures contracts in the 1800s to lock in grain prices before harvest. Today, the notional value of derivatives outstanding worldwide runs to hundreds of trillions of dollars. The idea is still the same: move risk to someone willing to carry it.",
    story: [
      "## A contract about something else",
      "A derivative is a contract whose value depends on something else: a share, a currency, oil, wheat, an interest rate. Derivatives let people hedge (reduce a risk they already have) or speculate (take on a risk to profit).",
      "## Forwards and futures: locking in a price",
      "A forward is a private agreement to buy or sell something at a set price on a future date. An airline might agree today to buy jet fuel in six months at a fixed price, protecting itself from a spike. Both sides must go through with it. The risk: the other party might not pay.",
      "Futures are standardised forwards traded on an exchange. A clearing house sits in the middle, and gains and losses are settled every day through margin accounts. That daily settlement massively reduces the risk of someone defaulting.",
      "## Options: the right, not the obligation",
      "A call option gives you the right to buy at a set 'strike' price. A put gives you the right to sell at the strike. You pay a premium for that right. If the market moves your way, you use it; if not, you let it expire and lose only the premium.",
      "Example: buy a call with a $100 strike for $5. If the stock ends at $115, you buy at $100 and sell at $115 — a $15 payoff, $10 profit. If it ends at $90, you walk away, losing $5. Buying a put on shares you own works like insurance: it caps your losses.",
      "The other side of every option is the seller (writer), who collects the premium but takes on the risk. Selling calls on a stock you don't own can mean unlimited losses.",
      "## Swaps",
      "A swap exchanges one stream of payments for another. The classic: a company with a floating-rate loan swaps to fixed payments to make its interest costs predictable."
    ],
    think: [
      "What risks in your own life would you pay a premium to insure against, the way a put option insures a portfolio?",
      "Why might an airline hedge its fuel costs, and what happens if prices fall instead?",
      "Derivatives were blamed for parts of the 2008 crisis. Is the tool the problem, or how it's used?"
    ],
    talk: "Futures contracts weren't invented on Wall Street. Chicago grain farmers and merchants used them in the 1800s to lock in prices before the harvest. Derivatives at their core are just a way to hand a risk to someone willing to carry it."
  },
  "cfa-08": {
    hook: "Two companies both earn a 15% return on equity. One is a well-run business with great margins. The other is barely profitable and borrowed heavily to get there. A three-part formula from DuPont in the 1920s tells them apart.",
    story: [
      "## Ratios turn statements into signals",
      "Raw numbers don't compare well — Apple's profit dwarfs a corner shop's. Ratios fix that by asking proportional questions. Profitability: how much of each sales dollar is kept? Efficiency: how hard are the assets working? Liquidity: can bills be paid this year? Leverage: how much is borrowed?",
      "## The key ones",
      "Net profit margin = net income ÷ revenue. Return on assets (ROA) = net income ÷ total assets. Return on equity (ROE) = net income ÷ shareholders' equity — the return on the owners' money. Current ratio = current assets ÷ current liabilities; below 1 can mean short-term strain. Debt-to-equity shows how much the business leans on borrowing.",
      "## DuPont: why ROE is what it is",
      "ROE = profit margin × asset turnover × equity multiplier. In words: how much profit you make per sale, times how many sales your assets generate, times how much of those assets are funded by debt rather than owners.",
      "Company A: 10% margin × 1.0 turnover × 1.5 leverage = 15% ROE. Company B: 3% margin × 1.25 turnover × 4.0 leverage = 15% ROE. Same headline. But B gets there mainly by borrowing, so a small dip in sales could wipe out its equity. Leverage magnifies both gains and losses.",
      "## Context is everything",
      "A grocery chain with a 3% margin can be excellent — groceries are low-margin, high-turnover. A software firm with 3% margins is probably in trouble. Always compare a company with its own history and its direct peers, and look at the trend, not just one year."
    ],
    think: [
      "Which kind of business would you expect to have high margins but low turnover? Low margins but high turnover?",
      "If a company's ROE jumps, what three questions would you ask?",
      "Why might banks naturally have a high equity multiplier compared with other businesses?"
    ],
    talk: "Two companies can both show a 15% return on equity for very different reasons. One has good margins, the other borrowed heavily. The DuPont formula (margin × asset turnover × leverage) shows which is which in about a minute."
  }
});
