export interface Insight {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  publishedAt: string
  readTime: string
  tags: string[]
  featured: boolean
}

export const insights: Insight[] = [
  {
    id: '1',
    slug: 'toronto-tech-salary-guide-2025',
    title: 'Toronto Tech Salary Guide 2025',
    excerpt: 'Comprehensive compensation data for Product, Design, Engineering, and Data roles across Toronto\'s tech ecosystem.',
    category: 'Market Insights',
    author: 'Stem Connect Research',
    publishedAt: '2025-01-15',
    readTime: '8 min read',
    tags: ['Salaries', 'Compensation', 'Toronto', 'Tech Market'],
    featured: true,
    content: `
# Toronto Tech Salary Guide 2025

Toronto's tech market continues to mature, with compensation becoming increasingly competitive with US markets—especially for senior roles. Here's what we're seeing across key disciplines.

## Engineering

**Software Engineer (3-5 years)**
- Toronto: $130,000 - $170,000 CAD
- Remote (US company): $150,000 - $200,000 USD

**Senior/Staff Engineer**
- Toronto: $170,000 - $220,000 CAD
- Remote (US company): $200,000 - $280,000 USD

**Engineering Manager**
- Toronto: $180,000 - $230,000 CAD

## Product

**Product Manager**
- Toronto: $120,000 - $160,000 CAD

**Senior PM**
- Toronto: $150,000 - $190,000 CAD

**Director/VP Product**
- Toronto: $200,000 - $280,000 CAD

## Design

**Product Designer**
- Toronto: $100,000 - $140,000 CAD

**Senior Product Designer**
- Toronto: $130,000 - $165,000 CAD

**Head of Design**
- Toronto: $180,000 - $240,000 CAD

## Data

**Data Scientist**
- Toronto: $120,000 - $160,000 CAD

**Senior Data Scientist**
- Toronto: $150,000 - $190,000 CAD

**ML Engineer**
- Toronto: $140,000 - $200,000 CAD

## Key Trends

1. **Remote premiums persist**: Engineers at US companies with remote flexibility often earn 30-50% more than Toronto-based equivalents.

2. **Equity matters more**: Early-stage startups are offering larger equity packages to compete on total compensation.

3. **Specialization pays**: Deep expertise in AI/ML, platform engineering, or growth design commands premium salaries.

4. **Experience inflation**: The bar for "senior" roles has risen. Many companies now expect 5-7 years for senior titles.

*Data based on Stem Connect placements and market research, January 2025.*
    `,
  },
  {
    id: '2',
    slug: 'hiring-your-first-product-manager',
    title: 'Hiring Your First Product Manager: A Founder\'s Guide',
    excerpt: 'When to make the hire, what to look for, and how to set them up for success at your Toronto startup.',
    category: 'Hiring Tips',
    author: 'Stem Connect Team',
    publishedAt: '2025-01-10',
    readTime: '6 min read',
    tags: ['Hiring', 'Product Management', 'Startups', 'Leadership'],
    featured: true,
    content: `
# Hiring Your First Product Manager

You've been doing product yourself—talking to customers, writing specs, prioritizing the backlog. But as your Toronto startup grows, you're stretched thin. Here's how to know when it's time and how to hire right.

## When to Hire

- You have product-market fit and are scaling
- Engineering is waiting on decisions you don't have time to make
- Customer feedback is piling up unprocessed
- You're spending >40% of your time on product work

## What to Look For

**Execution over strategy**: Your first PM needs to ship, not philosophize. Look for candidates who can point to specific features they've shipped and the impact they had.

**Technical fluency**: They don't need to code, but they need to have credible conversations with engineers about tradeoffs and feasibility.

**Customer obsession**: Can they tell you about a time they changed their mind based on customer feedback?

**Startup tolerance**: Big company PMs often struggle with ambiguity. Prioritize candidates who've operated in resource-constrained environments.

## The Interview Process

1. **Portfolio review**: Walk through a product they've shipped. Dig into their decision-making.
2. **Case study**: Give them a real problem from your business. See how they think.
3. **Engineering pairing**: Have them meet your tech lead. Chemistry matters.
4. **Founder deep-dive**: Ensure alignment on product philosophy and working style.

## Setting Them Up for Success

- Give them a clear first project with measurable outcomes
- Introduce them to customers in the first week
- Establish decision rights early
- Protect them from organizational noise while they ramp

The right first PM can transform how your company builds product. Take the time to get it right.
    `,
  },
  {
    id: '3',
    slug: 'why-candidates-ghost-and-how-to-prevent-it',
    title: 'Why Candidates Ghost (And How to Prevent It)',
    excerpt: 'The top reasons Toronto tech talent disappears mid-process and practical steps to keep them engaged.',
    category: 'Hiring Tips',
    author: 'Stem Connect Team',
    publishedAt: '2025-01-05',
    readTime: '5 min read',
    tags: ['Hiring', 'Recruiting', 'Candidate Experience'],
    featured: false,
    content: `
# Why Candidates Ghost

Candidate ghosting is at an all-time high. Here's what's actually happening and how to fix it.

## The Real Reasons

**1. Your process is too slow**
Top candidates have multiple options. If your process stretches beyond 3 weeks, you'll lose people to faster-moving companies.

**2. Competing offers**
They received another offer and didn't want to have an awkward conversation. Most ghosting happens at the offer stage.

**3. They didn't feel valued**
Generic outreach, unprepared interviewers, or slow response times signal you're not serious about them.

**4. Internal change of heart**
Maybe their boss offered a raise, or they decided they're not ready to move. Personal circumstances change.

## How to Prevent It

**Move fast**: Compress your process. Can you do 3 interviews in one week instead of spreading them over three?

**Communicate proactively**: Update candidates within 24 hours of each interview. Silence creates doubt.

**Make it personal**: Reference specific things from their background. Show you've done your homework.

**Set expectations**: Be clear about timeline and next steps at every stage. Uncertainty drives people away.

**Ask directly**: "Are you considering other opportunities? Where are they in their process?" Information helps you move strategically.

**Sell throughout**: Every interview should leave the candidate more excited, not just more evaluated.

Ghosting is often a symptom of a broken process. Fix the process, and engagement follows.
    `,
  },
  {
    id: '4',
    slug: 'negotiating-your-tech-offer-in-toronto',
    title: 'Negotiating Your Tech Offer in Toronto',
    excerpt: 'A practical framework for evaluating and negotiating compensation packages at Toronto tech companies.',
    category: 'Career Advice',
    author: 'Stem Connect Team',
    publishedAt: '2024-12-28',
    readTime: '7 min read',
    tags: ['Negotiation', 'Compensation', 'Career', 'Toronto'],
    featured: false,
    content: `
# Negotiating Your Tech Offer

You've got the offer. Now what? Here's how to approach negotiation with confidence.

## Evaluate the Full Package

Don't fixate on base salary alone. Consider:

- **Equity**: Stock options or RSUs? What's the vesting schedule? What's the strike price or grant value?
- **Bonus**: Guaranteed or discretionary? What's typical payout?
- **Benefits**: Health/dental coverage, RRSP matching, parental leave
- **Perks**: Learning budget, equipment, remote flexibility
- **Growth**: What does the next role look like? Timeline?

## Know Your Numbers

Before negotiating, know:
- Your current total compensation
- Market rate for the role (use our salary guide)
- Your BATNA (best alternative)
- Your target and walk-away numbers

## The Conversation

**Don't negotiate over email**: Ask for a call to discuss the offer. Tone matters.

**Lead with enthusiasm**: "I'm excited about this opportunity and want to make this work."

**Be specific**: "Based on my research and experience, I was expecting base salary closer to $X."

**Focus on one or two things**: Don't negotiate every line item. Choose what matters most.

**Give reasons**: Justify your ask with market data or specific experience.

## What's Negotiable

Almost always:
- Base salary
- Signing bonus
- Start date
- Equipment/setup

Sometimes:
- Equity (especially at startups)
- Title
- Remote flexibility

Rarely:
- Benefits (company-wide policies)
- Vacation (standardized)

## If They Say No

Ask what would need to change for them to revisit compensation in 6 months. Get it in writing if possible.

Remember: They want you to accept. Negotiation is expected. A reasonable ask delivered professionally will never cost you the offer.
    `,
  },
  {
    id: '5',
    slug: 'building-engineering-culture-toronto-startup',
    title: 'Building Engineering Culture at a Toronto Startup',
    excerpt: 'Lessons from CTOs on creating an engineering environment that attracts and retains top talent.',
    category: 'Company Culture',
    author: 'Stem Connect Team',
    publishedAt: '2024-12-20',
    readTime: '6 min read',
    tags: ['Engineering', 'Culture', 'Retention', 'Startups'],
    featured: false,
    content: `
# Building Engineering Culture

Toronto's engineering talent has options. Here's what CTOs tell us matters most for retention.

## Technical Excellence

**Code review matters**: Engineers want to learn from peers. Thoughtful, constructive code review is a retention tool.

**Modern stack**: You don't need bleeding edge, but working with outdated technology drives people away.

**Technical debt budget**: Allocate time for engineers to improve what exists, not just ship new features.

## Autonomy and Ownership

**Clear ownership**: Engineers should own outcomes, not just tasks. "You own user authentication" beats "implement this feature."

**Decision authority**: Let engineers make technical decisions within their domain. Micromanagement kills engagement.

**Direct customer contact**: Connecting engineers to user feedback creates meaning and better products.

## Career Growth

**Dual track**: Support both IC and management paths. Not everyone wants to manage.

**Learning investment**: Conference budget, course access, and learning time signal investment in growth.

**Internal mobility**: Let people move between teams and explore different problems.

## Work Environment

**Flexible by default**: Hybrid or remote should be standard, not a perk.

**Reasonable hours**: Consistent crunch is a management failure, not a badge of honor.

**Psychological safety**: Create an environment where it's safe to disagree, ask questions, and admit mistakes.

## What Engineers Actually Want

When we ask candidates what they're looking for, the top answers are:
1. Interesting technical problems
2. Talented colleagues they can learn from
3. Work-life balance and flexibility
4. Competitive compensation
5. Company mission and impact

Notice that ping pong tables didn't make the list. Focus on fundamentals.
    `,
  },
  {
    id: '6',
    slug: 'state-of-toronto-tech-hiring-2025',
    title: 'State of Toronto Tech Hiring: 2025 Outlook',
    excerpt: 'Market trends, hiring velocity, and what to expect in Toronto\'s tech ecosystem this year.',
    category: 'Market Insights',
    author: 'Stem Connect Research',
    publishedAt: '2024-12-15',
    readTime: '5 min read',
    tags: ['Market Trends', 'Toronto', 'Tech Hiring', '2025'],
    featured: true,
    content: `
# State of Toronto Tech Hiring: 2025

After the corrections of 2023-2024, Toronto's tech hiring market has found its footing. Here's what we're seeing.

## Market Temperature

**Hiring velocity**: Up 15% from Q4 2024. Companies are hiring again, particularly for revenue-generating and product roles.

**Layoff frequency**: Down significantly. The correction phase is largely complete.

**Time to fill**: Averaging 6 weeks for senior roles, down from 10 weeks in early 2024.

## Hot Areas

**AI/ML Engineering**: Demand far exceeds supply. Companies are paying premium rates for applied ML talent.

**Growth Marketing**: As companies refocus on efficient growth, experienced growth marketers are in demand.

**Staff+ Engineering**: Companies want senior ICs who can drive technical direction without management overhead.

## Cooling Areas

**Junior Engineering**: Entry-level hiring remains constrained. Companies prefer experienced hires.

**Recruiting/HR**: After layoffs, many teams remain lean and aren't rebuilding TA functions.

## Salary Movement

Compensation is stabilizing after the pandemic inflation spike. We're seeing:
- 3-5% increases for standard merit raises
- 15-25% increases for job changes (down from 30-40% in 2021-2022)
- Flat or declining total comp at levels where equity has lost value

## 2025 Predictions

1. **Hybrid solidifies as default**: Fully remote roles will become rarer outside of specific companies/functions.

2. **Equity scrutiny increases**: Candidates will ask harder questions about cap tables and liquidation preferences.

3. **AI augmentation becomes table stakes**: Every function will be expected to leverage AI tools for productivity.

4. **Toronto-US gap narrows further**: More US companies will build Toronto engineering centers, pushing up local comp.

5. **Quality over quantity**: Companies will hire fewer, more senior people rather than building large junior teams.

*Based on Stem Connect data and conversations with 50+ Toronto tech leaders.*
    `,
  },
]

export function getInsightBySlug(slug: string): Insight | undefined {
  return insights.find(i => i.slug === slug)
}

export function getFeaturedInsights(): Insight[] {
  return insights.filter(i => i.featured)
}

export function getInsightsByCategory(category: Insight['category']): Insight[] {
  return insights.filter(i => i.category === category)
}
