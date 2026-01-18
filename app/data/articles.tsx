import React from 'react';

// ╔══════════════════════════════════════════════════════════════════════════════╗
// ║                    KRUSE & CRAWFORD BLOG ARTICLE DATA                         ║
// ║                                                                                ║
// ║  HOW TO ADD A NEW BLOG POST:                                                   ║
// ║  1. Copy the template below (between the dashed lines)                         ║
// ║  2. Paste it at the TOP of the articlesData array (line ~80)                   ║
// ║  3. Fill in your article details                                               ║
// ║  4. Add your blog image to /public/images/ (recommended: 1200x675px)           ║
// ║  5. Articles are automatically sorted by date (newest first)                   ║
// ╚══════════════════════════════════════════════════════════════════════════════╝

export interface Article {
  slug: string;         // URL-friendly name (e.g., 'my-article-title')
  title: string;        // Display title
  category: string;     // See CATEGORIES below
  date: string;         // Format: 'Month DD, YYYY' (e.g., 'January 20, 2025')
  readTime: string;     // Format: 'X min read'
  excerpt: string;      // Brief description for cards (1-2 sentences)
  image: string;        // Path: '/images/blog-your-image.jpg'
  color: string;        // Gradient for hero overlay - see COLORS below
  youtubeId?: string;   // Optional: YouTube video ID for embedding
  content: React.ReactNode;  // Article body - see CONTENT FORMAT below
}

/*
┌─────────────────────────────────────────────────────────────────────────────────┐
│ CATEGORIES (use these exact strings):                                            │
│   - 'Tax Strategy'      - Tax planning tips, credits, deductions                 │
│   - 'Tax Planning'      - Year-end planning, strategic decisions                 │
│   - 'Accounting'        - Financial statements, bookkeeping, cash flow           │
│   - 'Business Advisory' - CFO services, strategic guidance, growth              │
│   - 'Industry News'     - Tax law changes, regulatory updates                    │
└─────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────────┐
│ GRADIENT COLORS for hero overlay (copy one):                                     │
│   - 'from-violet-500 to-purple-600'   (purple - good for tax strategy)          │
│   - 'from-blue-500 to-blue-600'       (blue - professional, default)            │
│   - 'from-emerald-500 to-teal-600'    (green - good for accounting/money)       │
│   - 'from-amber-500 to-orange-600'    (orange - eye-catching)                   │
│   - 'from-rose-500 to-pink-600'       (pink - stands out)                       │
│   - 'from-cyan-500 to-blue-600'       (cyan - modern feel)                      │
│   - 'from-indigo-500 to-violet-600'   (indigo - business advisory)              │
│   - 'from-amber-500 to-yellow-600'    (yellow - attention-grabbing)             │
└─────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────────┐
│ YOUTUBE EMBEDDING:                                                               │
│   - Find your video URL: https://www.youtube.com/watch?v=ABC123xyz              │
│   - Copy ONLY the ID after 'v=' → 'ABC123xyz'                                   │
│   - Add: youtubeId: 'ABC123xyz',                                                │
│   - Video appears at the top of the article, before content                      │
└─────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────────┐
│ CONTENT FORMAT - Available HTML elements:                                        │
│                                                                                   │
│   <p className="lead">First paragraph - larger, emphasized text</p>              │
│   <p>Regular paragraph</p>                                                       │
│   <h2>Main Section Header</h2>                                                   │
│   <h3>Subsection Header</h3>                                                     │
│   <ul><li>Bullet point</li></ul>                                                │
│   <ol><li>Numbered item</li></ol>                                               │
│   <strong>Bold text</strong>                                                     │
│                                                                                   │
│   For highlighted boxes:                                                         │
│   <div className="bg-gray-100 p-6 rounded-xl my-6">                             │
│     <p>Content inside a gray box</p>                                            │
│   </div>                                                                         │
└─────────────────────────────────────────────────────────────────────────────────┘

──────────────────────────── COPY TEMPLATE BELOW ────────────────────────────────

  {
    slug: 'your-article-url-slug',
    title: 'Your Article Title Here',
    category: 'Tax Strategy',
    date: 'January 20, 2025',
    readTime: '5 min read',
    excerpt: 'A compelling 1-2 sentence summary that appears on article cards.',
    image: '/images/blog-your-image.jpg',
    color: 'from-blue-500 to-blue-600',
    // youtubeId: 'ABC123xyz',  // Uncomment and add video ID if embedding YouTube
    content: (
      <>
        <p className="lead">Your compelling opening paragraph that hooks readers.</p>

        <p>Continue with your article content here...</p>

        <h2>First Major Section</h2>
        <p>Section content goes here.</p>

        <h3>Subsection If Needed</h3>
        <ul>
          <li>Bullet point one</li>
          <li>Bullet point two</li>
        </ul>

        <h2>Another Section</h2>
        <p>More content...</p>

        <div className="bg-gray-100 p-6 rounded-xl my-6">
          <p><strong>Key Takeaway:</strong> Important point highlighted in a box.</p>
        </div>

        <h2>Conclusion</h2>
        <p>Wrap up your article here.</p>
      </>
    ),
  },

─────────────────────────── END TEMPLATE ────────────────────────────────────────
*/

// Helper to parse date strings for sorting
const parseDate = (dateStr: string): Date => {
  return new Date(dateStr);
};

// ╔══════════════════════════════════════════════════════════════════════════════╗
// ║                         ADD NEW ARTICLES BELOW                                ║
// ║                    (paste your new article at the TOP)                        ║
// ╚══════════════════════════════════════════════════════════════════════════════╝
const articlesData: Article[] = [

  {
    slug: 'rd-tax-credits-guide-2025',
    title: 'The Complete Guide to R&D Tax Credits in 2025',
    category: 'Tax Strategy',
    date: 'January 8, 2025',
    readTime: '12 min read',
    excerpt: 'Many businesses miss out on R&D tax credits because they assume their work does not qualify. This comprehensive guide breaks down who qualifies, how to document activities, and how much you can save.',
    image: '/images/blog-rd-tax-credits.jpg',
    color: 'from-violet-500 to-purple-600',
    content: (
      <>
        <p className="lead">Many business owners assume R&D tax credits are only for pharmaceutical companies or tech giants with massive research labs. That assumption costs them thousands in missed tax savings every year.</p>

        <p>The reality? If your business develops new products, improves processes, or solves technical problems, you likely qualify for the Research and Development Tax Credit under IRC Section 41.</p>

        <h2>What Qualifies as R&D?</h2>
        <p>The IRS uses a four-part test to determine if your activities qualify:</p>

        <h3>1. Section 174 Test</h3>
        <p>Your work must involve expenditures to resolve uncertainty related to developing or improving a product or process within your trade or business.</p>

        <h3>2. Technological in Nature</h3>
        <p>The research must rely on hard sciences: engineering, computer science, biological science, or physical science.</p>

        <h3>3. Business Component Test</h3>
        <p>Your activities must aim to develop or improve a product, process, software, technique, formula, or invention used in your business or held for sale.</p>

        <h3>4. Process of Experimentation</h3>
        <p>You must conduct research to discover technological information and intend to apply it in developing new or improved business components.</p>

        <p>Here's the good news: you don't need to succeed. Failed experiments still count as qualified research.</p>

        <h2>What Expenses Qualify?</h2>
        <p>Three categories of expenses can be claimed:</p>

        <ul>
          <li><strong>Wages:</strong> Payments to employees for "qualified services" performed during research activities.</li>
          <li><strong>Supplies:</strong> Tangible property used in research (excluding land, improvements to land, or depreciable property).</li>
          <li><strong>Contract Research:</strong> 65% of amounts paid to outside contractors for qualified research.</li>
        </ul>

        <h2>What Doesn't Qualify?</h2>
        <p>The IRS explicitly excludes:</p>
        <ul>
          <li>Research conducted after commercial production begins</li>
          <li>Adapting existing products for specific customers</li>
          <li>Reverse engineering from physical examination</li>
          <li>Routine quality control testing</li>
          <li>Efficiency surveys and data collection</li>
        </ul>

        <h2>Major 2025 Updates</h2>

        <h3>100% Bonus Depreciation Restored</h3>
        <p>The One Big Beautiful Bill Act (OBBBA), signed July 4, 2025, reinstated and made permanent immediate expensing for domestic R&E expenditures. This reverses the TCJA requirement to capitalize and amortize these costs over 60 months.</p>

        <h3>Form 6765 Section G</h3>
        <p>Section G detailed reporting requirements are now optional for tax year 2025. Beginning in 2026, it becomes mandatory for most filers. Exceptions exist for:</p>
        <ul>
          <li>Qualified small business taxpayers electing the reduced payroll tax credit</li>
          <li>Taxpayers with total QREs under $1.5 million and gross receipts under $50 million</li>
        </ul>

        <h3>Small Business Payroll Tax Credit</h3>
        <p>Qualified small businesses can apply up to $500,000 of the R&D credit against payroll tax liability instead of income tax.</p>

        <h2>Calculating Your Credit</h2>
        <p>The credit equals a percentage of your current-year qualified research expenses that exceed a base amount. Most businesses use the Alternative Simplified Credit (ASC) method:</p>

        <div className="bg-gray-100 p-6 rounded-xl my-6">
          <p className="font-mono text-center text-lg"><strong>ASC = 14% x (Current Year QREs - 50% of Average QREs for Prior 3 Years)</strong></p>
        </div>

        <h2>Documentation Requirements</h2>
        <p>The IRS has increased scrutiny on R&D claims. Maintain these records:</p>
        <ul>
          <li>Project descriptions and objectives</li>
          <li>Time tracking for employees on research activities</li>
          <li>Supply receipts and allocation methods</li>
          <li>Contractor agreements and invoices</li>
          <li>Documentation of technical uncertainty and experimentation</li>
        </ul>

        <h2>Industries That Often Overlook R&D Credits</h2>
        <ul>
          <li>Manufacturing (process improvements, new product development)</li>
          <li>Construction (new building techniques, material testing)</li>
          <li>Food and beverage (recipe development, packaging innovation)</li>
          <li>Software development (new features, architecture improvements)</li>
          <li>Agriculture (crop yield optimization, equipment modifications)</li>
        </ul>

        <h2>Next Steps</h2>
        <p>If your business spends money solving technical problems or improving products, you should evaluate your R&D credit eligibility. The analysis often pays for itself many times over.</p>
      </>
    ),
  },
  {
    slug: 's-corporation-conversion',
    title: 'When to Convert to an S-Corporation',
    category: 'Tax Strategy',
    date: 'January 5, 2025',
    readTime: '8 min read',
    excerpt: 'The S-Corp election can save significant self-employment taxes, but timing matters. Here is how to know when the switch makes sense.',
    image: '/images/blog-s-corp-conversion.jpg',
    color: 'from-blue-500 to-blue-600',
    content: (
      <>
        <p className="lead">Every year, business owners leave thousands of dollars on the table by not making the S-Corporation election at the right time. Others jump in too early and waste money on unnecessary administrative costs.</p>

        <p>The S-Corp election can save significant self-employment taxes, but timing matters. Here's how to know when the switch makes sense for your business.</p>

        <h2>The Self-Employment Tax Problem</h2>
        <p>If you operate as a sole proprietor or single-member LLC, all your net profit is subject to self-employment tax at 15.3% (12.4% Social Security plus 2.9% Medicare). On $100,000 of profit, that's $15,300 before you even get to income tax.</p>
        <p>An S-Corporation changes this equation.</p>

        <h2>How S-Corps Create Tax Savings</h2>
        <p>With an S-Corp election, you become an employee of your own business. You pay yourself a "reasonable salary" and take remaining profits as distributions.</p>
        <p>Only the salary portion is subject to payroll taxes. Distributions are not.</p>

        <div className="bg-gray-100 p-6 rounded-xl my-6">
          <h4 className="font-bold mb-3">Example:</h4>
          <ul className="space-y-2">
            <li>$100,000 in business profit</li>
            <li>$40,000 reasonable salary (subject to 15.3% payroll tax)</li>
            <li>$60,000 distribution (not subject to payroll tax)</li>
            <li><strong>Savings: 15.3% x $60,000 = $9,180</strong></li>
          </ul>
        </div>

        <h2>The Income Threshold Question</h2>
        <p>So when does the switch make sense? The answer depends on your net profit and the additional costs of S-Corp administration.</p>

        <h3>General Guidelines:</h3>
        <ul>
          <li>Most CPAs recommend switching when taxable income exceeds <strong>$50,000</strong> - at this level, self-employment tax burden typically exceeds $7,500, which usually outweighs administrative costs</li>
          <li>Businesses earning less than <strong>$40,000</strong> in net profit rarely benefit enough to justify the added complexity</li>
          <li>California business owners often see benefits once profit exceeds <strong>$70,000</strong> due to higher state taxes</li>
        </ul>

        <h2>The Hidden Costs</h2>
        <p>S-Corp status adds administrative burden:</p>

        <h3>Annual costs typically include:</h3>
        <ul>
          <li>Payroll processing: $500-$1,500/year</li>
          <li>Additional accounting and bookkeeping: $500-$1,000/year</li>
          <li>Quarterly Form 941 filings</li>
          <li>Annual W-2 and W-3 preparation</li>
          <li>State compliance requirements (varies by state)</li>
        </ul>
        <p>Total administrative costs usually run <strong>$1,000-$3,000 annually</strong>. Your tax savings need to exceed this amount to make the election worthwhile.</p>

        <h2>The Reasonable Salary Trap</h2>
        <p>The IRS watches S-Corp owners who try to minimize salary to maximize tax-free distributions.</p>

        <h3>Red flags that invite audit scrutiny:</h3>
        <ul>
          <li>Paying yourself $20,000 while taking $80,000 in distributions</li>
          <li>Salary significantly below industry standards for your role</li>
          <li>Large disproportion between salary and distributions</li>
        </ul>
        <p>The IRS has disallowed S-Corp elections entirely when owners abused the salary/distribution split. Pay yourself what you would pay someone else to do your job.</p>

        <h2>How to Make the Election</h2>
        <p>To elect S-Corp status, file IRS Form 2553. Key deadlines:</p>
        <ul>
          <li><strong>New businesses:</strong> File within 75 days of formation</li>
          <li><strong>Existing businesses:</strong> File by March 15 to have the election apply for the full tax year</li>
          <li><strong>Late elections:</strong> The IRS may grant relief for late filings if you had reasonable cause</li>
        </ul>
        <p>For LLCs, you don't need to change your legal structure. You simply elect to be taxed as an S-Corp while remaining an LLC under state law.</p>

        <h2>When to Wait</h2>
        <p>Don't rush into S-Corp status if:</p>
        <ul>
          <li>Your income fluctuates significantly year to year</li>
          <li>You're still building the business and reinvesting all profits</li>
          <li>You plan to take on investors soon (S-Corps have ownership restrictions)</li>
          <li>Your state imposes heavy S-Corp taxes</li>
        </ul>

        <h2>The Bottom Line</h2>
        <p>Run the numbers before making the switch. Calculate your expected self-employment tax savings, subtract the administrative costs, and make sure the net benefit justifies the added complexity.</p>
        <p>For most service businesses earning $50,000 or more in consistent annual profit, the S-Corp election makes sense. Below that threshold, the juice usually isn't worth the squeeze.</p>
      </>
    ),
  },
  {
    slug: 'cash-flow-forecast-guide',
    title: 'Building a 13-Week Cash Flow Forecast',
    category: 'Accounting',
    date: 'December 28, 2024',
    readTime: '10 min read',
    excerpt: 'Stop being surprised by cash crunches. This step-by-step guide shows you how to build and maintain a rolling cash flow forecast.',
    image: '/images/blog-cash-flow-forecast.jpg',
    color: 'from-emerald-500 to-teal-600',
    content: (
      <>
        <p className="lead">Stop being surprised by cash crunches. A 13-week cash flow forecast transforms reactive cash management into proactive financial planning.</p>

        <p>This step-by-step guide shows you how to build and maintain a rolling forecast that keeps you ahead of cash flow problems before they become crises.</p>

        <h2>Why 13 Weeks?</h2>
        <p>The 13-week timeframe represents a full quarter. It offers the right balance: short enough to produce reliable projections, long enough to spot problems and take corrective action.</p>
        <p>Longer forecasts become increasingly unreliable. Shorter ones don't give you enough runway to respond to issues.</p>

        <h2>The Three Essential Components</h2>
        <p>Every 13-week cash flow forecast needs three elements:</p>

        <h3>1. Beginning Cash</h3>
        <p>Your current funds in checking, money market, and savings accounts. This is your starting point for week one.</p>

        <h3>2. Cash Inflows</h3>
        <p>All sources of cash entering the business:</p>
        <ul>
          <li>Customer payments on invoices</li>
          <li>Cash sales</li>
          <li>Loan proceeds</li>
          <li>Owner investments</li>
          <li>Other income</li>
        </ul>
        <p>List inflows in order of certainty. Known payments (like confirmed customer deposits) come first. Estimated collections (like expected A/R payments) come later.</p>

        <h3>3. Cash Outflows</h3>
        <p>All uses of cash leaving the business:</p>
        <ul>
          <li>Payroll and benefits</li>
          <li>Rent and utilities</li>
          <li>Inventory purchases</li>
          <li>Loan payments</li>
          <li>Vendor payments</li>
          <li>Tax payments</li>
        </ul>
        <p>List outflows by size and importance. This helps you prioritize if cash gets tight.</p>

        <h2>Step-by-Step Building Process</h2>

        <h3>Step 1: Start with Your Current Position</h3>
        <p>Pull your exact cash balance as of today. This is your week one opening balance.</p>

        <h3>Step 2: Use Cash Basis, Not Accrual</h3>
        <p>This is critical. The forecast tracks when money actually enters and leaves your bank account, not when transactions are recorded.</p>
        <p>An invoice you send this week doesn't become a cash inflow until the customer pays. A bill you receive this week doesn't become a cash outflow until you write the check.</p>

        <h3>Step 3: Forecast Your Receivables</h3>
        <p>Review each customer and their payment habits:</p>
        <ul>
          <li>What are their payment terms?</li>
          <li>How quickly do they actually pay?</li>
          <li>Are any payments confirmed or scheduled?</li>
        </ul>
        <p>If a customer has net-30 terms but typically pays in 45 days, use 45 days in your forecast. Accuracy matters more than optimism.</p>

        <h3>Step 4: Map Your Disbursements</h3>
        <p>Work through each expense category:</p>
        <ul>
          <li>When is payroll? Which weeks?</li>
          <li>When are rent and utilities due?</li>
          <li>What vendor payments are scheduled?</li>
          <li>When are loan payments due?</li>
          <li>What tax deposits are required?</li>
        </ul>
        <p>Pull 6-12 months of transaction history to identify patterns you might forget.</p>

        <h3>Step 5: Calculate Weekly Ending Cash</h3>
        <p>For each week:</p>
        <div className="bg-gray-100 p-6 rounded-xl my-6">
          <p className="font-mono text-center"><strong>Beginning Cash + Inflows - Outflows = Ending Cash</strong></p>
          <p className="text-center mt-2">That ending cash becomes next week's beginning cash.</p>
        </div>
        <p>Repeat for all 13 weeks.</p>

        <h2>Maintaining Your Forecast</h2>
        <p>A 13-week forecast requires weekly updates:</p>

        <h3>Every Monday (or your chosen day):</h3>
        <ol>
          <li>Record actual results from the prior week</li>
          <li>Compare actual vs. forecast - where were you off?</li>
          <li>Roll the forecast forward (drop week 1, add week 14)</li>
          <li>Adjust future weeks based on new information</li>
        </ol>

        <h2>Warning Signs to Watch</h2>
        <p>Your forecast should alert you to:</p>
        <ul>
          <li>Any week where ending cash drops below your minimum threshold</li>
          <li>Consecutive weeks of declining cash</li>
          <li>Large single-week outflows that need advance planning</li>
          <li>Seasonal patterns that require building reserves</li>
        </ul>
        <p>Set a minimum cash threshold (often 2-4 weeks of operating expenses) and highlight any week that falls below it.</p>

        <h2>The Payoff</h2>
        <p>A well-maintained 13-week forecast provides:</p>
        <ul>
          <li>Early warning of cash shortfalls (weeks in advance, not days)</li>
          <li>Time to arrange financing before you desperately need it</li>
          <li>Confidence to make investment decisions</li>
          <li>Better vendor relationships (you pay on time, consistently)</li>
          <li>Reduced stress during tight periods</li>
        </ul>
        <p>The few hours per week required to maintain this forecast pay dividends many times over.</p>
      </>
    ),
  },
  {
    slug: 'cost-segregation-guide',
    title: 'Cost Segregation: Is It Right for Your Property?',
    category: 'Tax Strategy',
    date: 'December 20, 2024',
    readTime: '7 min read',
    excerpt: 'Cost segregation can dramatically accelerate depreciation on commercial real estate. Here is how to evaluate if it makes sense for you.',
    image: '/images/blog-cost-segregation.jpg',
    color: 'from-amber-500 to-orange-600',
    content: (
      <>
        <p className="lead">If you own commercial or investment real estate, you may be leaving significant tax deductions on the table. Cost segregation can dramatically accelerate depreciation and reduce your current tax bill.</p>

        <p>Here's how to evaluate whether a cost segregation study makes sense for your property.</p>

        <h2>What is Cost Segregation?</h2>
        <p>Standard depreciation spreads the cost of a building over 27.5 years (residential) or 39 years (commercial). That's a long time to wait for tax benefits.</p>
        <p>Cost segregation is an engineering-based strategy that breaks down building components into different asset classes. Instead of depreciating everything over decades, a study identifies portions that can be written off over 5, 7, or 15 years.</p>

        <h2>What Gets Reclassified?</h2>
        <p>A cost segregation study examines every component of your building:</p>

        <h3>5-Year Property:</h3>
        <ul>
          <li>Carpeting and vinyl flooring</li>
          <li>Decorative lighting</li>
          <li>Certain electrical outlets</li>
          <li>Signage</li>
          <li>Security systems</li>
        </ul>

        <h3>7-Year Property:</h3>
        <ul>
          <li>Office furniture built into the space</li>
          <li>Specialty equipment</li>
          <li>Certain fixtures</li>
        </ul>

        <h3>15-Year Property:</h3>
        <ul>
          <li>Parking lots and sidewalks</li>
          <li>Landscaping</li>
          <li>Fencing</li>
          <li>Outdoor lighting</li>
          <li>Site drainage</li>
        </ul>
        <p>On average, 20% to 40% of building components can be reclassified into these shorter-lived categories.</p>

        <h2>The 2025 Game-Changer: 100% Bonus Depreciation Returns</h2>
        <p>The One Big Beautiful Bill Act (OBBBA), signed July 4, 2025, permanently restored 100% bonus depreciation for qualified property acquired and placed in service after January 19, 2025.</p>
        <p>This means the components identified in your cost segregation study can be fully written off in the year the property is placed in service.</p>

        <h2>A Real Example</h2>
        <p>Consider a rental property purchased after January 19, 2025, with $500,000 allocated to the building structure:</p>

        <div className="bg-gray-100 p-6 rounded-xl my-6">
          <h4 className="font-bold mb-3">Without Cost Segregation:</h4>
          <p>Standard depreciation: $17,425 in year one</p>

          <h4 className="font-bold mb-3 mt-4">With Cost Segregation (assuming 20% reclassification):</h4>
          <ul className="space-y-1">
            <li>Shorter-lived assets: $100,000 x 100% bonus = $100,000 deduction</li>
            <li>Remaining structure: $400,000 / 27.5 years = $14,545 deduction</li>
            <li><strong>Total year one depreciation: $114,545</strong></li>
          </ul>
          <p className="mt-3 font-bold">That's a 550% increase in first-year depreciation.</p>
        </div>

        <h2>Who Should Consider a Study?</h2>
        <p>Cost segregation typically makes sense for:</p>
        <ul>
          <li>Commercial properties (office, retail, industrial)</li>
          <li>Apartment buildings and multifamily</li>
          <li>Hotels and hospitality</li>
          <li>Medical facilities</li>
          <li>Warehouses and distribution centers</li>
          <li>Properties with a depreciable basis of $1,000,000 or more</li>
        </ul>
        <p>The larger the property and the more complex the build-out, the greater the potential benefit.</p>

        <h2>When to Do the Study</h2>
        <p><strong>Ideal Timing:</strong> The year you acquire, construct, or substantially renovate the property.</p>
        <p><strong>Missed the Window?</strong> You can still benefit. A "look-back" study allows you to claim missed depreciation from prior years without amending previous tax returns. The IRS allows this through a change in accounting method.</p>

        <h2>Study Costs</h2>
        <p>A quality cost segregation study typically runs $5,000 to $15,000, depending on property size and complexity.</p>
        <p>For a property where the study yields $100,000+ in accelerated deductions, the return on that investment is substantial.</p>
        <p>Be wary of "desktop" studies done without a site visit. The IRS has challenged studies that lack engineering rigor.</p>

        <h2>The Bottom Line</h2>
        <p>For owners of commercial or investment property with significant depreciable basis, cost segregation has become even more attractive with the return of 100% bonus depreciation.</p>
        <p>The upfront study cost is almost always dwarfed by the tax savings, especially for properties valued at $1 million or more.</p>
      </>
    ),
  },
  {
    slug: 'year-end-tax-planning',
    title: 'Year-End Tax Planning Checklist',
    category: 'Tax Strategy',
    date: 'December 15, 2024',
    readTime: '6 min read',
    excerpt: 'Do not wait until January to think about taxes. This checklist covers the key moves to make before December 31st.',
    image: '/images/blog-year-end-tax.jpg',
    color: 'from-rose-500 to-pink-600',
    content: (
      <>
        <p className="lead">Don't wait until January to think about taxes. The moves you make before December 31st can significantly reduce your tax bill.</p>

        <p>This checklist covers the key strategies to consider before the year ends.</p>

        <h2>Major 2025 Tax Law Changes</h2>
        <p>The One Big Beautiful Bill Act (OBBBA) made significant changes that affect year-end planning:</p>

        <h3>Section 179 Expansion</h3>
        <p>The deduction limit permanently increased to $2.5 million with a phase-out threshold of $4 million. Future years will be indexed for inflation.</p>

        <h3>100% Bonus Depreciation Restored</h3>
        <p>Property acquired and placed in service after January 19, 2025, qualifies for full first-year expensing. This is now permanent.</p>

        <h3>R&E Immediate Deduction</h3>
        <p>Domestic research and experimentation expenditures can now be immediately deducted instead of capitalized over 60 months.</p>

        <h3>SALT Deduction Increase</h3>
        <p>The state and local tax deduction cap increased from $10,000 to $40,000 and will continue rising 1% annually through 2029.</p>

        <h2>Income Timing Strategies</h2>

        <h3>If You Expect Similar Tax Rates Next Year</h3>
        <p>Consider deferring income and accelerating deductions:</p>
        <ul>
          <li>Delay invoicing until January</li>
          <li>Prepay deductible expenses (up to 12 months)</li>
          <li>Make fourth quarter estimated tax payments before December 31</li>
        </ul>

        <h3>If Tax Rates Will Change</h3>
        <p>The opposite strategy may apply. If you expect higher rates next year:</p>
        <ul>
          <li>Accelerate income into the current year</li>
          <li>Defer deductions to next year when they'll save more</li>
        </ul>

        <h2>Equipment and Asset Purchases</h2>
        <p>With 100% bonus depreciation restored, equipment purchases made and placed in service by December 31 can be fully deducted this year.</p>
        <p>Consider accelerating planned purchases if:</p>
        <ul>
          <li>You have sufficient taxable income to absorb the deduction</li>
          <li>The equipment will be used in your business</li>
          <li>You were planning to buy it anyway</li>
        </ul>
        <p>Don't buy equipment you don't need just for the tax deduction. The deduction saves you 20-37 cents per dollar spent, meaning you still spend 63-80 cents net.</p>

        <h2>Retirement Plan Contributions</h2>

        <h3>Establish New Plans</h3>
        <p>To claim a deduction for 2025, most retirement plans must be established by December 31:</p>
        <ul>
          <li>401(k) plans</li>
          <li>SIMPLE IRAs</li>
          <li>Defined benefit plans</li>
        </ul>
        <p>SEP IRAs are an exception. They can be established and funded up to your extended filing deadline.</p>

        <h3>Maximize Contributions</h3>
        <p>Review contribution limits and ensure you're maximizing tax-advantaged retirement savings:</p>
        <ul>
          <li>401(k) employee deferrals: $23,500 (plus $7,500 catch-up if 50+)</li>
          <li>SEP IRA: Up to 25% of compensation, max $70,000</li>
          <li>SIMPLE IRA: $16,500 (plus $3,500 catch-up if 50+)</li>
        </ul>

        <h2>Employee Bonuses</h2>
        <p>If you're on the accrual method, bonuses declared by December 31 and paid within 2.5 months of year-end are deductible in the current year.</p>
        <p>Cash-basis taxpayers must actually pay bonuses by December 31 to claim the deduction.</p>

        <h2>Bad Debt Write-offs</h2>
        <p>Review your accounts receivable for uncollectible amounts. Write off bad debts before year-end to claim the deduction.</p>
        <p>Document your collection efforts to support the write-off if questioned.</p>

        <h2>Pass-Through Entity Tax Elections</h2>
        <p>If your state offers a pass-through entity tax (PTET) election, review whether it makes sense for your situation. Most states require elections before year-end.</p>
        <p>PTET allows the business to pay state tax at the entity level, creating a federal deduction that bypasses the SALT cap.</p>

        <h2>The Key to Effective Planning</h2>
        <p>Year-end tax planning works best when you have current-year financials and reasonable estimates of next year's income. Work with your CPA in November or early December while there's still time to act.</p>
      </>
    ),
  },
  {
    slug: 'understanding-financial-statements',
    title: 'Understanding Your Financial Statements',
    category: 'Accounting',
    date: 'December 10, 2024',
    readTime: '9 min read',
    excerpt: 'Income statement, balance sheet, cash flow statement. What do they mean and how should you use them to make decisions?',
    image: '/images/blog-financial-statements.jpg',
    color: 'from-cyan-500 to-blue-600',
    content: (
      <>
        <p className="lead">Income statement, balance sheet, cash flow statement. What do they mean and how should you use them to make decisions?</p>

        <p>Many business owners receive these reports monthly and file them away without really understanding what they reveal. That's a missed opportunity.</p>
        <p>This guide breaks down the three core financial statements and shows you how to use them together.</p>

        <h2>The Three Essential Statements</h2>
        <p>Think of your financial statements as three different views of the same business:</p>
        <ul>
          <li><strong>Income Statement:</strong> How profitable were you over a period of time?</li>
          <li><strong>Balance Sheet:</strong> What do you own and owe at a specific point in time?</li>
          <li><strong>Cash Flow Statement:</strong> Where did your cash come from and where did it go?</li>
        </ul>
        <p>Each tells part of the story. Together, they provide a complete picture of financial health.</p>

        <h2>The Income Statement (Profit & Loss)</h2>
        <p>The income statement shows revenues minus expenses over a specific period, typically monthly, quarterly, or annually.</p>

        <h3>Key Components:</h3>
        <ul>
          <li><strong>Revenue (Top Line):</strong> All income from sales of products or services.</li>
          <li><strong>Cost of Goods Sold (COGS):</strong> Direct costs to produce what you sold: materials, direct labor, manufacturing overhead.</li>
          <li><strong>Gross Profit:</strong> Revenue minus COGS. This shows how efficiently you produce your product or service.</li>
          <li><strong>Operating Expenses:</strong> Costs to run the business: rent, utilities, salaries, marketing, insurance.</li>
          <li><strong>Operating Income:</strong> Gross profit minus operating expenses. This is profit from core business operations.</li>
          <li><strong>Net Income (Bottom Line):</strong> What's left after all expenses, interest, and taxes.</li>
        </ul>

        <h3>What to Watch:</h3>
        <ul>
          <li>Gross margin percentage: Is it stable or declining?</li>
          <li>Operating expenses as a percentage of revenue: Are you spending efficiently?</li>
          <li>Net profit margin: What percentage of revenue becomes actual profit?</li>
        </ul>

        <h2>The Balance Sheet</h2>
        <p>The balance sheet shows what you own (assets), what you owe (liabilities), and the difference (equity) at a specific point in time.</p>

        <div className="bg-gray-100 p-6 rounded-xl my-6">
          <p className="font-mono text-center text-lg"><strong>Assets = Liabilities + Equity</strong></p>
        </div>

        <h3>Assets (What You Own)</h3>
        <p><strong>Current Assets:</strong> Items that will convert to cash within one year</p>
        <ul>
          <li>Cash and bank accounts</li>
          <li>Accounts receivable (money customers owe you)</li>
          <li>Inventory</li>
          <li>Prepaid expenses</li>
        </ul>

        <p><strong>Non-Current Assets:</strong> Long-term holdings</p>
        <ul>
          <li>Equipment and machinery</li>
          <li>Buildings and land</li>
          <li>Vehicles</li>
          <li>Intangible assets (patents, trademarks)</li>
        </ul>

        <h3>Liabilities (What You Owe)</h3>
        <p><strong>Current Liabilities:</strong> Due within one year</p>
        <ul>
          <li>Accounts payable (money you owe vendors)</li>
          <li>Short-term loans</li>
          <li>Accrued expenses</li>
          <li>Current portion of long-term debt</li>
        </ul>

        <p><strong>Long-Term Liabilities:</strong> Due beyond one year</p>
        <ul>
          <li>Bank loans</li>
          <li>Equipment financing</li>
          <li>Mortgages</li>
        </ul>

        <h3>Equity (Net Worth)</h3>
        <p>What remains if you paid off all debts:</p>
        <ul>
          <li>Owner's capital contributions</li>
          <li>Retained earnings (accumulated profits not distributed)</li>
        </ul>

        <h2>The Cash Flow Statement</h2>
        <p>The cash flow statement tracks actual cash movement, organized into three categories.</p>

        <h3>Operating Activities</h3>
        <p>Cash generated from core business operations:</p>
        <ul>
          <li>Collections from customers</li>
          <li>Payments to suppliers and employees</li>
          <li>Interest and tax payments</li>
        </ul>

        <h3>Investing Activities</h3>
        <p>Cash used for long-term investments:</p>
        <ul>
          <li>Purchasing equipment</li>
          <li>Selling assets</li>
          <li>Acquisitions</li>
        </ul>

        <h3>Financing Activities</h3>
        <p>Cash from funding sources:</p>
        <ul>
          <li>Loan proceeds and repayments</li>
          <li>Owner contributions and distributions</li>
          <li>Dividend payments</li>
        </ul>

        <h3>Why It Matters:</h3>
        <p>A profitable company can still run out of cash. The income statement includes non-cash items like depreciation. The cash flow statement shows what actually happened to your bank balance.</p>
        <p>Ideally, cash from operating activities should exceed net income. That indicates your profits are real and collectible.</p>

        <h2>Common Mistakes Business Owners Make</h2>
        <ul>
          <li><strong>Focusing Only on the Income Statement:</strong> Profit looks great, but cash is tight. Why? Check the cash flow statement. You might have money tied up in receivables or inventory.</li>
          <li><strong>Ignoring the Balance Sheet:</strong> The income statement shows one month's results. The balance sheet reveals accumulated financial health or stress.</li>
          <li><strong>Confusing Profit with Cash:</strong> A $50,000 sale doesn't put $50,000 in your bank account until the customer pays. Many profitable companies fail because they run out of cash.</li>
        </ul>

        <h2>The Bottom Line</h2>
        <p>Financial statements aren't just compliance documents for your accountant. They're management tools that reveal what's really happening in your business.</p>
        <p>Review them monthly. Ask questions when something looks off. Over time, you'll develop intuition for what the numbers mean and how to use them.</p>
      </>
    ),
  },
  {
    slug: 'cfo-hiring-decision',
    title: 'Hiring Your First CFO vs. Outsourced CFO Services',
    category: 'Business Advisory',
    date: 'December 5, 2024',
    readTime: '7 min read',
    excerpt: 'When does it make sense to hire a full-time CFO versus using fractional CFO services? Here is how to decide.',
    image: '/images/blog-cfo-decision.jpg',
    color: 'from-indigo-500 to-violet-600',
    content: (
      <>
        <p className="lead">Your business is growing. Financial complexity is increasing. You need CFO-level strategic guidance, but does that mean hiring a full-time executive?</p>

        <p>For most growing businesses, the answer is no. At least not yet.</p>
        <p>Here's how to decide between a full-time CFO and outsourced (fractional) CFO services.</p>

        <h2>The Cost Reality</h2>
        <p>Let's start with the numbers.</p>

        <h3>Full-Time CFO Costs (2025)</h3>
        <ul>
          <li>Base salary: $200,000 - $350,000</li>
          <li>Benefits, equity, and bonuses: Add 30-50%</li>
          <li>Total compensation packages: $350,000 - $500,000 annually</li>
        </ul>
        <p>That doesn't include recruiting costs (often 20-30% of first-year salary), onboarding time, or the risk of a bad hire.</p>

        <h3>Fractional CFO Costs (2025)</h3>
        <ul>
          <li>Hourly rates: $175 - $350/hour</li>
          <li>Monthly retainers: $3,000 - $10,000</li>
          <li>Annual cost: $16,800 - $120,000 depending on engagement level</li>
        </ul>
        <p>Most early-stage companies need 8-10 hours of CFO support monthly. That's $1,400 - $3,500 per month, or roughly $20,000 - $40,000 annually.</p>
        <p><strong>The savings: 80-90% compared to a full-time hire.</strong></p>

        <h2>When Each Option Makes Sense</h2>

        <h3>Fractional CFO is Right When:</h3>
        <ul>
          <li><strong>Revenue Under $15 Million:</strong> Most businesses at this stage don't have enough financial complexity to keep a full-time CFO occupied. You need strategic guidance, not 40+ hours per week of CFO time.</li>
          <li><strong>Specific Project Needs:</strong> Fundraising, financial restructuring, system implementations, or preparing for an acquisition benefit from experienced guidance without permanent overhead.</li>
          <li><strong>Scaling Operations:</strong> You're growing but not ready for the commitment of a C-suite hire. A fractional CFO can build the financial infrastructure you'll need.</li>
          <li><strong>Testing the Role:</strong> Not sure exactly what you need? Working with a fractional CFO helps you define the role before committing to a full-time search.</li>
        </ul>

        <h3>Full-Time CFO is Right When:</h3>
        <ul>
          <li><strong>Revenue Exceeds $25 Million:</strong> At this level, financial complexity typically justifies dedicated leadership.</li>
          <li><strong>Daily Strategic Decisions:</strong> If major financial decisions happen multiple times per day and require immediate input, you need someone in the building.</li>
          <li><strong>Investor or Board Requirements:</strong> Some funding sources require a full-time CFO as part of the deal terms.</li>
          <li><strong>Building a Leadership Team:</strong> If you're assembling a complete executive team, a full-time CFO plays a different role than an outside advisor.</li>
        </ul>

        <h2>Beyond the Cost Savings</h2>
        <p>Fractional CFOs offer advantages beyond price:</p>
        <ul>
          <li><strong>Immediate Value:</strong> Full-time hires need 3-6 months to fully onboard and understand your business. Experienced fractional CFOs bring proven frameworks and deliver value from day one.</li>
          <li><strong>Diverse Experience:</strong> A fractional CFO works with multiple businesses across industries. They bring best practices from a variety of situations. A full-time CFO may only have deep experience in one or two companies.</li>
          <li><strong>No Overhead Burden:</strong> Fractional CFOs provide their own tools, software, and professional development. No equipment costs, no office space requirements.</li>
          <li><strong>Flexibility:</strong> Scale up during busy periods (fundraising, audits, year-end). Scale down when things are stable. Try restructuring that with an employee.</li>
          <li><strong>Reduced Risk:</strong> If the relationship isn't working, changing fractional providers is far simpler than terminating an executive.</li>
        </ul>

        <h2>What a Good Fractional CFO Provides</h2>
        <p>Expect more than number-crunching:</p>
        <ul>
          <li><strong>Strategic Financial Planning:</strong> Long-term financial modeling, scenario analysis, and growth planning.</li>
          <li><strong>Cash Flow Management:</strong> Forecasting, working capital optimization, and treasury management.</li>
          <li><strong>Fundraising Support:</strong> Pitch deck financials, investor materials, due diligence preparation.</li>
          <li><strong>Financial Systems:</strong> Implementing accounting software, establishing KPIs, building dashboards.</li>
          <li><strong>Team Development:</strong> Mentoring your bookkeeper or controller to grow into more responsibility.</li>
          <li><strong>Board and Investor Relations:</strong> Preparing materials and attending meetings as your financial expert.</li>
        </ul>

        <h2>Making the Transition</h2>
        <p>Many companies start with fractional CFO services and eventually hire full-time.</p>
        <p>A good fractional CFO will:</p>
        <ul>
          <li>Help you define the full-time role when you're ready</li>
          <li>Build systems that a full-time CFO can inherit</li>
          <li>Assist with the hiring process</li>
          <li>Support the transition period</li>
        </ul>
        <p>Some even convert from fractional to full-time if both parties want to continue the relationship.</p>

        <h2>The Bottom Line</h2>
        <p>For businesses under $25 million in revenue, a fractional CFO almost always makes more financial sense than a full-time hire.</p>
        <p>You get experienced strategic guidance at a fraction of the cost, with flexibility to scale as your needs evolve.</p>
        <p>Save the full-time CFO hire for when your business truly demands dedicated executive leadership. Until then, fractional services deliver better value.</p>
      </>
    ),
  },
  {
    slug: 'rent-to-corporation',
    title: 'Consider Renting Your House to Your Corporation',
    category: 'Tax Planning',
    date: 'November 15, 2024',
    readTime: '5 min read',
    excerpt: 'A legitimate tax strategy allows S-Corp owners to rent their home to their corporation for business meetings, creating tax-free income.',
    image: '/images/blog-renting-house.jpg',
    color: 'from-amber-500 to-yellow-600',
    content: (
      <>
        <p className="lead">Under the Augusta Rule (Section 280A(g)), you can rent your home to your S-Corporation for up to 14 days per year and receive the rental income completely tax-free.</p>

        <p>This legitimate tax strategy allows business owners to create additional income while generating a deduction for the corporation.</p>

        <h2>How It Works</h2>
        <p>Section 280A(g) of the tax code allows homeowners to rent their residence for up to 14 days per year without reporting the rental income. When your S-Corporation holds legitimate business meetings or events at your home, it can pay you fair market rent.</p>
        <p>The result:</p>
        <ul>
          <li>You receive tax-free rental income (up to 14 days)</li>
          <li>Your corporation gets a business expense deduction</li>
          <li>The net effect reduces overall tax burden</li>
        </ul>

        <h2>Requirements for Compliance</h2>
        <p>To withstand IRS scrutiny, you must:</p>

        <h3>1. Have Legitimate Business Purpose</h3>
        <p>The rental must be for actual business activities:</p>
        <ul>
          <li>Board meetings</li>
          <li>Strategic planning sessions</li>
          <li>Employee training</li>
          <li>Client meetings</li>
          <li>Company retreats</li>
        </ul>

        <h3>2. Charge Fair Market Rent</h3>
        <p>The rental rate must be reasonable. Research comparable venues in your area:</p>
        <ul>
          <li>Hotel conference room rates</li>
          <li>Executive meeting space rentals</li>
          <li>Event venue pricing</li>
        </ul>
        <p>Document how you determined the rate.</p>

        <h3>3. Maintain Proper Documentation</h3>
        <p>Keep records of:</p>
        <ul>
          <li>Meeting dates and duration</li>
          <li>Business purpose of each meeting</li>
          <li>Attendees</li>
          <li>Meeting agendas and minutes</li>
          <li>Rental agreements</li>
          <li>Payment records</li>
        </ul>

        <h3>4. Follow Corporate Formalities</h3>
        <p>The corporation should:</p>
        <ul>
          <li>Have a written rental agreement</li>
          <li>Issue payment by check (create paper trail)</li>
          <li>Document the arrangement in board minutes</li>
        </ul>

        <h2>Example Scenario</h2>
        <p>Your S-Corporation holds monthly board meetings at your home (12 meetings per year). Local executive meeting space rents for $500 per day.</p>
        <ul>
          <li>Annual rent: 12 days x $500 = $6,000</li>
          <li>Corporation deducts $6,000 as business expense</li>
          <li>You receive $6,000 tax-free (under 14-day limit)</li>
        </ul>
        <p>If your effective tax rate is 30%, you've saved $1,800 in taxes.</p>

        <h2>Common Mistakes to Avoid</h2>
        <ul>
          <li><strong>Exceeding 14 Days:</strong> Once you pass 14 days, ALL rental income becomes taxable</li>
          <li><strong>Inflated Rent:</strong> Unreasonable rates invite IRS challenge</li>
          <li><strong>Poor Documentation:</strong> Without records, the deduction may be disallowed</li>
          <li><strong>No Business Purpose:</strong> Personal use disguised as business use is tax fraud</li>
        </ul>

        <h2>Is This Right for You?</h2>
        <p>This strategy works best for S-Corporation owners who:</p>
        <ul>
          <li>Regularly hold business meetings</li>
          <li>Have adequate space at home for meetings</li>
          <li>Are willing to maintain proper documentation</li>
          <li>Want to maximize legitimate tax deductions</li>
        </ul>

        <h2>The Bottom Line</h2>
        <p>The Augusta Rule provides a legitimate way to shift income from taxable to tax-free while creating a business deduction. Like all tax strategies, proper execution and documentation are essential.</p>
        <p>Consult with your CPA before implementing to ensure compliance with current tax law.</p>
      </>
    ),
  },
];

// Sort articles by date (newest first)
export const articles = articlesData.sort((a, b) => {
  return parseDate(b.date).getTime() - parseDate(a.date).getTime();
});

// Get article by slug
export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(article => article.slug === slug);
};

// Get featured article (most recent)
export const getFeaturedArticle = (): Article => {
  return articles[0];
};

// Get recent articles (excluding featured)
export const getRecentArticles = (count: number = 3): Article[] => {
  return articles.slice(1, count + 1);
};

// Get paginated articles
export const getPaginatedArticles = (page: number, perPage: number = 6): {
  articles: Article[];
  totalPages: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
} => {
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const totalPages = Math.ceil(articles.length / perPage);

  return {
    articles: articles.slice(start, end),
    totalPages,
    currentPage: page,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1,
  };
};

// Get all article slugs (for static generation)
export const getAllSlugs = (): string[] => {
  return articles.map(article => article.slug);
};

// Category color mapping
export const categoryColors: Record<string, string> = {
  'Tax Strategy': 'bg-violet-100 text-violet-700',
  'Accounting': 'bg-emerald-100 text-emerald-700',
  'Business Advisory': 'bg-amber-100 text-amber-700',
  'Industry News': 'bg-blue-100 text-blue-700',
  'Tax Planning': 'bg-rose-100 text-rose-700',
  'Tax & Accounting': 'bg-teal-100 text-teal-700',
  'Business': 'bg-slate-100 text-slate-700',
};
