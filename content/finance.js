/* Topic: Finance (CFA curriculum foundations) */
WP.addTopic({
  id: "cfa",
  name: "Finance (CFA)",
  code: "CFA",
  blurb: "The core of the CFA body of knowledge: ethics, valuation, statements, fixed income, portfolios and derivatives.",
  lessons: [
    {
      id: "cfa-01",
      title: "Time Value of Money",
      level: "Foundation",
      minutes: 7,
      bluf: "A dollar today is worth more than a dollar tomorrow, because today's dollar can be invested to earn a return. Almost every valuation in finance is just future cash flows brought back to today at a suitable rate.",
      points: [
        { h: "Future value", t: "FV = PV × (1 + r)ⁿ. $1,000 at 5% for 2 years grows to $1,000 × 1.05² = $1,102.50." },
        { h: "Present value", t: "PV = FV ÷ (1 + r)ⁿ. Bringing money back to today is called discounting. Higher rates or longer waits mean lower present values." },
        { h: "Compounding frequency", t: "More frequent compounding gives more interest. Effective annual rate (EAR) = (1 + periodic rate)^m − 1 for m periods a year." },
        { h: "Annuities", t: "A series of equal payments. An ordinary annuity pays at the end of each period; an annuity due pays at the start (worth more, by one period of interest)." },
        { h: "NPV decides", t: "Net Present Value = PV of inflows − PV of outflows. Accept projects with NPV > 0; they add value." }
      ],
      example: "Would you take $10,000 now or $11,000 in 2 years if you can earn 6%? PV of $11,000 = 11,000 ÷ 1.06² ≈ $9,790. Take the $10,000 now.",
      pitfall: "Mismatching periods and rates. For monthly payments, use the monthly rate (annual ÷ 12) and the number of months, not years.",
      terms: [
        ["Present value (PV)", "The value today of a future cash flow, discounted at a required rate."],
        ["Future value (FV)", "What a sum invested today grows to at a given rate over time."],
        ["Discount rate", "The rate used to convert future cash flows into present value."],
        ["Annuity", "A series of equal cash flows at regular intervals."],
        ["NPV", "Net Present Value: PV of inflows minus PV of outflows."]
      ],
      mcq: [
        { q: "$500 invested at 10% for 2 years grows to…", a: ["$605", "$600", "$550", "$1,000"], c: 0, why: "500 × 1.1² = 605." },
        { q: "As the discount rate rises, the present value of a future cash flow…", a: ["Falls", "Rises", "Stays the same", "Becomes negative"], c: 0, why: "You divide by a larger number." },
        { q: "A project has NPV of −$2m. You should…", a: ["Reject it", "Accept it", "Double the investment", "Ignore NPV"], c: 0, why: "Negative NPV destroys value." },
        { q: "Which is worth more, all else equal?", a: ["Annuity due", "Ordinary annuity", "They are equal", "Depends on colour"], c: 0, why: "Payments arrive one period earlier." }
      ],
      tf: [
        { s: "A dollar today is worth more than a dollar received next year.", v: true, why: "It can be invested in the meantime." },
        { s: "Monthly compounding gives a lower EAR than annual compounding at the same stated rate.", v: false, why: "More frequent compounding gives a higher EAR." },
        { s: "Positive NPV projects add value.", v: true, why: "They return more than the required rate." },
        { s: "Discounting moves cash flows forward in time.", v: false, why: "Discounting brings them back to today." }
      ]
    },
    {
      id: "cfa-02",
      title: "Ethics and the Standards of Conduct",
      level: "Foundation",
      minutes: 7,
      bluf: "Ethics is a major weighting on the CFA exams and the foundation of the charter. The rule of thumb: put the integrity of markets first, clients second, your employer third, and yourself last.",
      points: [
        { h: "The seven Standards", t: "I Professionalism · II Integrity of Capital Markets · III Duties to Clients · IV Duties to Employers · V Investment Analysis, Recommendations and Actions · VI Conflicts of Interest · VII Responsibilities as a CFA Institute Member or Candidate." },
        { h: "Material non-public information", t: "Standard II(A): if you hold information that could move a price and isn't public, you must not act on it or cause others to act on it." },
        { h: "Loyalty, prudence and care", t: "Standard III(A): act for the benefit of clients and place their interests before your employer's and your own." },
        { h: "Disclose conflicts", t: "Standard VI(A): fully disclose anything that could impair your independence and objectivity — clearly and prominently." },
        { h: "Priority of transactions", t: "Standard VI(B): client and employer trades come before your personal trades in the same security." }
      ],
      example: "An analyst overhears a CEO at dinner say a merger will be announced Monday. Buying the stock — or telling a friend to — breaches Standard II(A). The right move: don't trade, and encourage the firm to make the information public.",
      pitfall: "Assuming following local law is enough. If the CFA Standards are stricter than the law, you must follow the stricter rule.",
      terms: [
        ["Material non-public information", "Information not yet public that would likely affect a security's price."],
        ["Standard III(A)", "Loyalty, Prudence and Care: act in clients' best interests."],
        ["Priority of transactions", "Client and employer trades must take priority over personal trades."],
        ["Mosaic theory", "Combining public and non-material non-public information to reach a conclusion is allowed."],
        ["Standard I(A)", "Knowledge of the Law: follow the stricter of applicable law or the CFA Standards."]
      ],
      mcq: [
        { q: "Law allows an action but the CFA Standards prohibit it. You should…", a: ["Follow the stricter CFA Standard", "Follow the law", "Ask a client to decide", "Do whatever is profitable"], c: 0, why: "Standard I(A): follow the stricter rule." },
        { q: "The order of priority when trading the same security is…", a: ["Clients, employer, then you", "You, employer, clients", "Employer, you, clients", "All at the same time"], c: 0, why: "Standard VI(B) puts clients and employer first." },
        { q: "Combining public data with your own non-material insight to form a view is…", a: ["Allowed under the mosaic theory", "Insider trading", "A conflict of interest", "Misrepresentation"], c: 0, why: "Mosaic theory permits this." },
        { q: "Which Standard covers duties to clients?", a: ["III", "I", "IV", "VII"], c: 0, why: "Standard III is Duties to Clients." }
      ],
      tf: [
        { s: "You may trade on material non-public information if you heard it accidentally.", v: false, why: "How you got it doesn't matter; you must not act on it." },
        { s: "Conflicts of interest must be disclosed clearly and prominently.", v: true, why: "Standard VI(A)." },
        { s: "Duties to your employer come before duties to clients.", v: false, why: "Clients come before employers." },
        { s: "There are seven Standards of Professional Conduct.", v: true, why: "Standards I through VII." }
      ]
    },
    {
      id: "cfa-03",
      title: "The Three Financial Statements",
      level: "Foundation",
      minutes: 7,
      bluf: "Three statements tell a company's financial story. The income statement shows profit over a period, the balance sheet shows what it owns and owes at a point in time, and the cash flow statement shows where cash actually came from and went.",
      points: [
        { h: "Income statement", t: "Revenue − expenses = net income, over a period. It uses accrual accounting: revenue is recorded when earned, not when cash arrives." },
        { h: "Balance sheet", t: "Assets = Liabilities + Equity, at a single date. It must always balance." },
        { h: "Cash flow statement", t: "Three sections: operating (running the business), investing (buying/selling long-term assets) and financing (debt, shares, dividends)." },
        { h: "How they link", t: "Net income flows into retained earnings (equity) on the balance sheet, and is the starting point of operating cash flow under the indirect method. Ending cash on the cash flow statement equals cash on the balance sheet." },
        { h: "Profit is not cash", t: "Non-cash items (like depreciation) and changes in working capital (receivables, inventory, payables) explain the gap between profit and cash." }
      ],
      example: "A firm sells $1m of goods on 90-day credit. Revenue and profit rise now, but cash hasn't arrived — accounts receivable rises instead. Fast-growing firms can be profitable and still run out of cash.",
      pitfall: "Judging a company only by net income. Always check operating cash flow; persistent profit with weak cash flow is a red flag.",
      terms: [
        ["Income statement", "Shows revenues, expenses and net income over a period."],
        ["Balance sheet", "Shows assets, liabilities and equity at a point in time."],
        ["Cash flow statement", "Shows cash from operating, investing and financing activities."],
        ["Accrual accounting", "Recording revenue when earned and expenses when incurred, not when cash moves."],
        ["Retained earnings", "Accumulated net income kept in the business rather than paid as dividends."]
      ],
      mcq: [
        { q: "Assets $800k, liabilities $500k. Equity = ?", a: ["$300k", "$1.3m", "$500k", "$800k"], c: 0, why: "Equity = Assets − Liabilities." },
        { q: "Buying a new factory appears in which cash flow section?", a: ["Investing", "Operating", "Financing", "None"], c: 0, why: "Long-term asset purchases are investing." },
        { q: "Paying a dividend appears in…", a: ["Financing (under IFRS may also be operating)", "Investing only", "Revenue", "Assets"], c: 0, why: "US GAAP requires financing; IFRS allows operating or financing." },
        { q: "Depreciation is added back to net income in operating cash flow because…", a: ["It is a non-cash expense", "It is extra revenue", "It is a tax refund", "It is a loan"], c: 0, why: "No cash leaves when depreciation is recorded." }
      ],
      tf: [
        { s: "The balance sheet covers a period of time.", v: false, why: "It is a snapshot at one date." },
        { s: "A profitable company can run out of cash.", v: true, why: "Profit and cash timing differ." },
        { s: "Net income links to retained earnings.", v: true, why: "Retained earnings grow by net income less dividends." },
        { s: "Issuing new shares is an investing cash flow.", v: false, why: "It is a financing cash flow." }
      ]
    },
    {
      id: "cfa-04",
      title: "Bonds: Price, Yield and Duration",
      level: "Intermediate",
      minutes: 7,
      bluf: "Bond prices move opposite to interest rates. Duration tells you how sensitive a bond's price is to a change in yield — the single most useful number in fixed income.",
      points: [
        { h: "A bond is a set of cash flows", t: "Regular coupon payments plus the face (par) value at maturity. Price = PV of those cash flows at the market yield." },
        { h: "Price and yield move inversely", t: "If market yields rise, existing bonds with lower coupons become less attractive, so their prices fall." },
        { h: "Premium, par, discount", t: "Coupon rate > yield → premium (price above par). Coupon = yield → par. Coupon < yield → discount." },
        { h: "Duration", t: "Modified duration estimates % price change for a 1% (100 bp) change in yield: %ΔP ≈ −ModDur × Δy. Longer maturity and lower coupons mean higher duration." },
        { h: "Convexity", t: "The price–yield curve is curved, not straight. Convexity improves the duration estimate, especially for big yield changes." }
      ],
      example: "A bond with modified duration of 7. Yields rise by 0.5%. Estimated price change ≈ −7 × 0.5% = −3.5%. A $1,000 bond falls to about $965.",
      pitfall: "Thinking a high-coupon bond is always safer. Credit risk, call features and duration still matter; a long-maturity bond can lose a lot when rates rise.",
      terms: [
        ["Coupon", "The periodic interest payment a bond makes, as a % of face value."],
        ["Yield to maturity", "The single discount rate that makes PV of a bond's cash flows equal its price."],
        ["Modified duration", "Approximate % price change of a bond for a 1% change in yield."],
        ["Convexity", "The curvature of the price–yield relationship."],
        ["Basis point", "One hundredth of a percent (0.01%)."]
      ],
      mcq: [
        { q: "Market interest rates rise. Existing bond prices…", a: ["Fall", "Rise", "Stay the same", "Go to zero"], c: 0, why: "Prices and yields move inversely." },
        { q: "Coupon 6%, market yield 4%. The bond trades at…", a: ["A premium", "A discount", "Par", "Zero"], c: 0, why: "Its coupon beats the market yield." },
        { q: "Modified duration 5, yields fall 1%. Price change ≈ ?", a: ["+5%", "−5%", "+1%", "−1%"], c: 0, why: "−5 × (−1%) = +5%." },
        { q: "Which bond has the highest duration?", a: ["30-year zero-coupon", "2-year 8% coupon", "5-year 5% coupon", "10-year 10% coupon"], c: 0, why: "Long maturity and no coupons maximise duration." }
      ],
      tf: [
        { s: "50 basis points equals 0.5%.", v: true, why: "1 bp = 0.01%." },
        { s: "Higher coupons increase duration, all else equal.", v: false, why: "Higher coupons lower duration." },
        { s: "Convexity matters more for large yield changes.", v: true, why: "Duration alone is a straight-line estimate." },
        { s: "A bond priced below par trades at a discount.", v: true, why: "That is the definition of a discount bond." }
      ]
    },
    {
      id: "cfa-05",
      title: "Equity Valuation",
      level: "Intermediate",
      minutes: 7,
      bluf: "A share is worth the present value of the cash it will produce for its owners. Analysts estimate that with discounted cash flow models, or compare it with similar companies using multiples.",
      points: [
        { h: "Intrinsic vs market value", t: "Intrinsic value is your estimate of what a share is truly worth. If it's above the market price, the share may be undervalued." },
        { h: "Gordon growth model", t: "For a company with steadily growing dividends: V₀ = D₁ ÷ (r − g), where D₁ is next year's dividend, r the required return and g the growth rate (g must be less than r)." },
        { h: "Free cash flow models (DCF)", t: "Forecast free cash flow, discount it at the required return, and add a terminal value for cash flows beyond the forecast period." },
        { h: "Multiples", t: "Price-to-earnings (P/E), price-to-book (P/B) and EV/EBITDA compare a firm with peers. Quick, but they assume the peers are fairly valued." },
        { h: "Required return", t: "Often estimated with CAPM. A small change in r or g can change a DCF value a lot — always test sensitivity." }
      ],
      example: "Next year's dividend is $2, required return 8%, growth 3%. V₀ = 2 ÷ (0.08 − 0.03) = $40. If the share trades at $32, it looks undervalued.",
      pitfall: "Letting the terminal value drive everything. In many DCFs it is over half the total value — check the growth assumption is realistic (no faster than the long-run economy).",
      terms: [
        ["Intrinsic value", "An analyst's estimate of a security's true worth based on fundamentals."],
        ["Gordon growth model", "V₀ = D₁ / (r − g): values a share with constantly growing dividends."],
        ["Free cash flow", "Cash a business generates after operating costs and capital investment."],
        ["P/E ratio", "Share price divided by earnings per share."],
        ["Terminal value", "The value of all cash flows beyond the explicit forecast period."]
      ],
      mcq: [
        { q: "D₁ = $3, r = 10%, g = 4%. Value per share?", a: ["$50", "$30", "$75", "$21.43"], c: 0, why: "3 ÷ (0.10 − 0.04) = 50." },
        { q: "Intrinsic value $60, price $45. The stock appears…", a: ["Undervalued", "Overvalued", "Fairly valued", "Worthless"], c: 0, why: "Value exceeds price." },
        { q: "The Gordon model requires that…", a: ["Growth is lower than the required return", "Growth exceeds required return", "Dividends are zero", "The firm has no debt"], c: 0, why: "Otherwise the formula breaks down." },
        { q: "A key weakness of valuing with peer multiples is…", a: ["Peers may themselves be mispriced", "It's too slow", "It ignores the share price", "It needs ten years of dividends"], c: 0, why: "Relative valuation inherits peer errors." }
      ],
      tf: [
        { s: "Raising the required return lowers the estimated value.", v: true, why: "Cash flows are discounted more heavily." },
        { s: "Terminal value is usually a tiny part of a DCF.", v: false, why: "It often exceeds half of total value." },
        { s: "P/E is price divided by earnings per share.", v: true, why: "That is the definition." },
        { s: "Market price always equals intrinsic value.", v: false, why: "Analysts look for gaps between them." }
      ]
    },
    {
      id: "cfa-06",
      title: "Portfolio Risk, Return and CAPM",
      level: "Intermediate",
      minutes: 7,
      bluf: "Diversification removes risk that is specific to one company, but not risk that hits the whole market. Investors are only rewarded for market risk, measured by beta — that's the core of CAPM.",
      points: [
        { h: "Two types of risk", t: "Unsystematic (company-specific) risk can be diversified away. Systematic (market) risk — recessions, rate changes — cannot." },
        { h: "Correlation drives diversification", t: "Combining assets that don't move perfectly together (correlation < 1) lowers portfolio risk without necessarily lowering return." },
        { h: "Beta", t: "Beta measures sensitivity to the market. β = 1 moves with the market; β = 1.5 tends to move 50% more; β = 0.5 half as much." },
        { h: "CAPM", t: "Expected return = risk-free rate + β × (market return − risk-free rate). The bracket is the market risk premium." },
        { h: "Sharpe ratio", t: "(Portfolio return − risk-free rate) ÷ standard deviation. It measures return per unit of total risk; higher is better." }
      ],
      example: "Risk-free 3%, market return 8%, stock beta 1.2. CAPM expected return = 3% + 1.2 × (8% − 3%) = 9%.",
      pitfall: "Assuming more stocks always means much less risk. Beyond roughly 20–30 well-chosen stocks, most diversifiable risk is gone; what remains is market risk.",
      terms: [
        ["Systematic risk", "Market-wide risk that cannot be diversified away."],
        ["Unsystematic risk", "Company-specific risk that diversification can remove."],
        ["Beta (β)", "A measure of an asset's sensitivity to market movements."],
        ["CAPM", "E(R) = Rf + β × (Rm − Rf): expected return based on market risk."],
        ["Sharpe ratio", "Excess return per unit of total risk (standard deviation)."]
      ],
      mcq: [
        { q: "Rf 2%, market 7%, β = 2. CAPM expected return?", a: ["12%", "14%", "9%", "7%"], c: 0, why: "2% + 2 × 5% = 12%." },
        { q: "Which risk does diversification remove?", a: ["Unsystematic risk", "Systematic risk", "Interest-rate risk on the whole market", "All risk"], c: 0, why: "Company-specific risk averages out." },
        { q: "A stock with β = 0.5 tends to…", a: ["Move half as much as the market", "Move twice as much", "Move opposite the market", "Never move"], c: 0, why: "Beta scales sensitivity." },
        { q: "Return 10%, Rf 2%, std dev 16%. Sharpe ratio?", a: ["0.5", "0.625", "8", "1.6"], c: 0, why: "(10 − 2) ÷ 16 = 0.5." }
      ],
      tf: [
        { s: "Investors are rewarded for bearing diversifiable risk under CAPM.", v: false, why: "Only systematic risk earns a premium." },
        { s: "Assets with correlation below 1 can reduce portfolio risk.", v: true, why: "Their movements partly offset." },
        { s: "A higher Sharpe ratio means better risk-adjusted return.", v: true, why: "More return per unit of risk." },
        { s: "The market portfolio has a beta of 1.", v: true, why: "By definition." }
      ]
    },
    {
      id: "cfa-07",
      title: "Derivatives Basics",
      level: "Intermediate",
      minutes: 7,
      bluf: "A derivative is a contract whose value comes from something else — a share, rate, currency or commodity. Forwards and futures lock in a price; options give the right, but not the obligation, to trade.",
      points: [
        { h: "Forwards", t: "A private agreement to buy or sell at a fixed price on a future date. Both sides are obligated. Customisable but carries counterparty risk." },
        { h: "Futures", t: "Standardised forwards traded on an exchange, with a clearing house and daily mark-to-market (margin). Lower counterparty risk." },
        { h: "Call options", t: "The right to BUY at the strike price. Buyer profits if the price rises above strike + premium paid. Maximum loss = premium." },
        { h: "Put options", t: "The right to SELL at the strike price. Buyer profits if the price falls below strike − premium. Often used as portfolio insurance." },
        { h: "Swaps", t: "Agreements to exchange cash flows, such as fixed for floating interest. Widely used by companies and banks to manage rate risk." }
      ],
      example: "You buy a call with strike $100 for a $5 premium. At expiry the stock is $115. Payoff = $15; profit = $15 − $5 = $10. If the stock ends at $90, you let it expire and lose only the $5.",
      pitfall: "Selling (writing) options thinking the premium is 'free money'. A written call has unlimited potential loss if the price soars.",
      terms: [
        ["Derivative", "A contract whose value depends on an underlying asset or rate."],
        ["Forward", "A private contract to trade an asset at a set price on a future date."],
        ["Futures", "A standardised, exchange-traded forward with daily settlement."],
        ["Call option", "The right, not obligation, to buy at the strike price."],
        ["Put option", "The right, not obligation, to sell at the strike price."]
      ],
      mcq: [
        { q: "Put strike $50, premium $3. Stock ends at $40. Buyer's profit?", a: ["$7", "$10", "$13", "−$3"], c: 0, why: "Payoff 10 − premium 3 = 7." },
        { q: "Maximum loss for a call option BUYER is…", a: ["The premium paid", "Unlimited", "The strike price", "Zero"], c: 0, why: "They can simply let it expire." },
        { q: "What reduces counterparty risk in futures?", a: ["Clearing house and daily margin", "Longer maturities", "Private negotiation", "Higher premiums"], c: 0, why: "Gains and losses settle daily via the clearing house." },
        { q: "A company swapping floating-rate payments for fixed wants to…", a: ["Lock in its interest cost", "Increase rate risk", "Buy shares", "Avoid paying interest"], c: 0, why: "Fixed payments remove rate uncertainty." }
      ],
      tf: [
        { s: "Both parties in a forward contract are obligated to transact.", v: true, why: "Unlike options, forwards are binding on both sides." },
        { s: "A put option buyer benefits when prices rise.", v: false, why: "Puts gain when prices fall." },
        { s: "Futures are standardised and exchange-traded.", v: true, why: "That distinguishes them from forwards." },
        { s: "Writing a call has limited downside risk.", v: false, why: "Losses can be unlimited." }
      ]
    },
    {
      id: "cfa-08",
      title: "Ratio Analysis and DuPont",
      level: "Intermediate",
      minutes: 6,
      bluf: "Ratios turn financial statements into comparable signals of profitability, efficiency, liquidity and leverage. The DuPont formula breaks return on equity into three drivers so you can see why ROE is high or low.",
      points: [
        { h: "Profitability", t: "Net profit margin = net income ÷ revenue. ROA = net income ÷ total assets. ROE = net income ÷ equity." },
        { h: "Liquidity", t: "Current ratio = current assets ÷ current liabilities. Quick ratio excludes inventory. Below 1 can signal short-term strain." },
        { h: "Leverage", t: "Debt-to-equity and the equity multiplier (assets ÷ equity) show how much the firm relies on borrowing." },
        { h: "DuPont formula", t: "ROE = Net margin × Asset turnover × Equity multiplier = (NI/Sales) × (Sales/Assets) × (Assets/Equity)." },
        { h: "Compare like with like", t: "Ratios matter in context: against the firm's own history and against peers in the same industry." }
      ],
      example: "Two firms each have 15% ROE. Firm A: 10% margin × 1.0 turnover × 1.5 leverage. Firm B: 3% margin × 1.25 turnover × 4.0 leverage. Same ROE — but B gets it from debt, which is far riskier.",
      pitfall: "Celebrating rising ROE without checking why. If it comes from more leverage rather than better margins or efficiency, risk has risen too.",
      terms: [
        ["ROE", "Return on Equity: net income divided by shareholders' equity."],
        ["Asset turnover", "Revenue divided by total assets — how efficiently assets generate sales."],
        ["Equity multiplier", "Total assets divided by equity — a measure of leverage."],
        ["Current ratio", "Current assets divided by current liabilities."],
        ["DuPont analysis", "Breaking ROE into margin, turnover and leverage."]
      ],
      mcq: [
        { q: "Margin 5%, turnover 2, equity multiplier 2. ROE?", a: ["20%", "9%", "10%", "5%"], c: 0, why: "0.05 × 2 × 2 = 0.20." },
        { q: "Which ratio best measures short-term liquidity?", a: ["Current ratio", "P/E ratio", "Equity multiplier", "Asset turnover"], c: 0, why: "It compares short-term assets with short-term obligations." },
        { q: "ROE rose only because debt increased. This means…", a: ["Higher financial risk", "Better margins", "Better efficiency", "Nothing changed"], c: 0, why: "Leverage magnifies both gains and losses." },
        { q: "The quick ratio differs from the current ratio by excluding…", a: ["Inventory", "Cash", "Receivables", "Liabilities"], c: 0, why: "Inventory can be slow to turn into cash." }
      ],
      tf: [
        { s: "DuPont splits ROE into margin, turnover and leverage.", v: true, why: "The three-step DuPont model." },
        { s: "Ratios are most useful with no comparison point.", v: false, why: "They need history and peer context." },
        { s: "The equity multiplier is assets divided by equity.", v: true, why: "Higher means more leverage." },
        { s: "A higher ROE always means a better company.", v: false, why: "It may come from risky leverage." }
      ]
    }
  ]
});
