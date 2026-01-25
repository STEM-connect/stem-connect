export type WorkModel = 'remote' | 'hybrid' | 'onsite'
export type EmploymentType = 'full-time' | 'contract' | 'contract-to-hire'
export type SpecialtyType = 'product' | 'design' | 'engineering' | 'data' | 'go-to-market'

export interface Role {
  id: string
  slug: string
  title: string
  company: string
  companyDescription: string
  location: string
  workModel: WorkModel
  employmentType: EmploymentType
  specialty: SpecialtyType
  salaryMin: number
  salaryMax: number
  postedDate: string
  featured: boolean
  overview: string
  responsibilities: string[]
  requirements: string[]
  niceToHave: string[]
  benefits: string[]
  tags: string[]
  process: {
    step: string
    description: string
  }[]
}

export const roles: Role[] = [
  {
    id: '1',
    slug: 'senior-product-manager-fintech',
    title: 'Senior Product Manager',
    company: 'Series B Fintech',
    companyDescription: 'A rapidly growing Toronto fintech company transforming how Canadians manage their finances. Recently raised $45M Series B.',
    location: 'Toronto, ON',
    workModel: 'hybrid',
    employmentType: 'full-time',
    specialty: 'product',
    salaryMin: 140000,
    salaryMax: 175000,
    postedDate: '2025-01-20',
    featured: true,
    overview: 'Lead product strategy for our core consumer banking platform, working closely with engineering and design to ship features that impact millions of Canadian users.',
    responsibilities: [
      'Own the product roadmap for consumer banking features',
      'Partner with engineering leads to scope and prioritize initiatives',
      'Conduct user research and synthesize insights into actionable product decisions',
      'Define and track key metrics, presenting progress to leadership',
      'Collaborate cross-functionally with marketing, compliance, and customer success',
    ],
    requirements: [
      '5+ years of product management experience, preferably in fintech or banking',
      'Track record of shipping consumer-facing products at scale',
      'Strong analytical skills with experience in data-driven decision making',
      'Excellent communication skills for technical and non-technical stakeholders',
      'Experience with agile methodologies and product discovery frameworks',
    ],
    niceToHave: [
      'Experience with Canadian financial regulations',
      'Background in payments or lending products',
      'MBA or relevant advanced degree',
    ],
    benefits: [
      'Competitive equity package',
      'Comprehensive health and dental benefits',
      'Flexible hybrid work (2 days/week in downtown Toronto office)',
      '$2,000 annual learning budget',
      'Generous parental leave policy',
    ],
    tags: ['Product Management', 'Fintech', 'B2C', 'Series B', 'Hybrid'],
    process: [
      { step: 'Initial Screen', description: '30-minute call with our recruiting team' },
      { step: 'Hiring Manager Interview', description: '45-minute deep dive with the VP Product' },
      { step: 'Case Study', description: 'Take-home product exercise (2-3 hours)' },
      { step: 'Team Interviews', description: 'Meet engineering, design, and stakeholder partners' },
      { step: 'Final Interview', description: 'Conversation with the CEO' },
    ],
  },
  {
    id: '2',
    slug: 'staff-software-engineer-platform',
    title: 'Staff Software Engineer, Platform',
    company: 'Enterprise SaaS',
    companyDescription: 'A Toronto-headquartered enterprise software company serving Fortune 500 clients. Public company with strong growth trajectory.',
    location: 'Toronto, ON',
    workModel: 'hybrid',
    employmentType: 'full-time',
    specialty: 'engineering',
    salaryMin: 180000,
    salaryMax: 220000,
    postedDate: '2025-01-18',
    featured: true,
    overview: 'Shape the technical direction of our platform engineering team, building the infrastructure that powers our SaaS platform serving thousands of enterprise customers.',
    responsibilities: [
      'Lead architectural decisions for platform scalability and reliability',
      'Mentor senior engineers and establish engineering best practices',
      'Partner with product to translate business requirements into technical solutions',
      'Drive initiatives to improve developer experience and platform performance',
      'Contribute to technical strategy and roadmap planning',
    ],
    requirements: [
      '8+ years of software engineering experience',
      'Deep expertise in distributed systems and cloud architecture (AWS/GCP)',
      'Strong proficiency in Go, Python, or Java',
      'Experience with Kubernetes, Terraform, and modern DevOps practices',
      'Track record of leading technical projects with significant business impact',
    ],
    niceToHave: [
      'Experience with multi-tenant SaaS architectures',
      'Background in data platform engineering',
      'Open source contributions',
    ],
    benefits: [
      'RSU grants with competitive vesting',
      'Premium health benefits with family coverage',
      'Flexible work arrangements (2-3 days in office)',
      '$5,000 annual professional development budget',
      'Sabbatical program after 5 years',
    ],
    tags: ['Platform', 'Golang', 'Distributed Systems', 'Enterprise', 'Staff+'],
    process: [
      { step: 'Recruiter Screen', description: '30-minute introductory call' },
      { step: 'Technical Screen', description: '60-minute coding and system design discussion' },
      { step: 'Deep Dive', description: 'Architecture and past project discussion' },
      { step: 'Team Loop', description: 'Cross-functional interviews with engineers and partners' },
      { step: 'Executive Interview', description: 'Final conversation with VP Engineering' },
    ],
  },
  {
    id: '3',
    slug: 'senior-product-designer',
    title: 'Senior Product Designer',
    company: 'Health Tech Startup',
    companyDescription: 'A mission-driven health tech startup making healthcare more accessible for Canadians. Series A with backing from top Toronto VCs.',
    location: 'Toronto, ON',
    workModel: 'hybrid',
    employmentType: 'full-time',
    specialty: 'design',
    salaryMin: 120000,
    salaryMax: 150000,
    postedDate: '2025-01-22',
    featured: true,
    overview: 'Design intuitive, accessible experiences that help Canadians navigate their healthcare journey. You\'ll be the second designer, working directly with the Head of Design.',
    responsibilities: [
      'Lead end-to-end design for patient-facing mobile and web experiences',
      'Conduct user research with patients and healthcare providers',
      'Build and maintain our design system',
      'Collaborate closely with engineering to ensure design quality in implementation',
      'Present design work to leadership and incorporate feedback',
    ],
    requirements: [
      '4+ years of product design experience',
      'Strong portfolio demonstrating user-centered design process',
      'Proficiency in Figma and prototyping tools',
      'Experience with design systems and component libraries',
      'Excellent communication and collaboration skills',
    ],
    niceToHave: [
      'Experience in healthcare or regulated industries',
      'Background in accessibility and inclusive design',
      'Motion design skills',
    ],
    benefits: [
      'Meaningful equity stake in early-stage company',
      'Full health and dental coverage',
      'Flexible hybrid schedule',
      '$1,500 home office setup budget',
      'Mental health support and wellness programs',
    ],
    tags: ['Product Design', 'UX', 'Health Tech', 'Series A', 'Figma'],
    process: [
      { step: 'Portfolio Review', description: 'Submit portfolio for initial review' },
      { step: 'Design Lead Interview', description: '45-minute conversation about your work' },
      { step: 'Design Exercise', description: 'Short take-home exercise (3-4 hours)' },
      { step: 'Team Interviews', description: 'Meet product, engineering, and founders' },
    ],
  },
  {
    id: '4',
    slug: 'data-scientist-ml',
    title: 'Data Scientist, Machine Learning',
    company: 'AI-First Startup',
    companyDescription: 'A Toronto AI startup building next-generation document intelligence. Backed by top-tier Silicon Valley and Canadian investors.',
    location: 'Toronto, ON',
    workModel: 'remote',
    employmentType: 'full-time',
    specialty: 'data',
    salaryMin: 150000,
    salaryMax: 185000,
    postedDate: '2025-01-19',
    featured: true,
    overview: 'Build and deploy ML models that power our core document understanding platform, working with cutting-edge NLP and computer vision technologies.',
    responsibilities: [
      'Develop and optimize ML models for document classification and extraction',
      'Work with large-scale datasets and build robust data pipelines',
      'Collaborate with product to translate business needs into ML solutions',
      'Deploy models to production and monitor performance',
      'Stay current with ML research and evaluate new approaches',
    ],
    requirements: [
      '3+ years of experience in applied machine learning',
      'Strong foundation in NLP and/or computer vision',
      'Proficiency in Python and ML frameworks (PyTorch, TensorFlow)',
      'Experience with cloud ML platforms (AWS SageMaker, GCP Vertex AI)',
      'MS or PhD in Computer Science, Statistics, or related field',
    ],
    niceToHave: [
      'Experience with LLMs and transformer architectures',
      'Publications in top ML conferences',
      'Experience in document processing or OCR',
    ],
    benefits: [
      'Competitive equity package',
      'Fully remote with quarterly team gatherings in Toronto',
      'Top-tier health benefits',
      'Unlimited PTO policy',
      'Conference and learning budget',
    ],
    tags: ['Machine Learning', 'Python', 'NLP', 'AI', 'Remote'],
    process: [
      { step: 'Initial Call', description: '30-minute chat with recruiting' },
      { step: 'Technical Screen', description: 'ML fundamentals and coding assessment' },
      { step: 'ML Deep Dive', description: 'Present a past project and discuss approach' },
      { step: 'System Design', description: 'ML system design exercise' },
      { step: 'Team Fit', description: 'Meet the data science team and founders' },
    ],
  },
  {
    id: '5',
    slug: 'account-executive-enterprise',
    title: 'Enterprise Account Executive',
    company: 'B2B SaaS Scale-up',
    companyDescription: 'A fast-growing Toronto SaaS company disrupting the construction tech space. Series C with rapid enterprise expansion.',
    location: 'Toronto, ON',
    workModel: 'hybrid',
    employmentType: 'full-time',
    specialty: 'go-to-market',
    salaryMin: 100000,
    salaryMax: 130000,
    postedDate: '2025-01-21',
    featured: false,
    overview: 'Drive enterprise sales across Canada, managing complex deals with construction and real estate companies. OTE of $200-260K.',
    responsibilities: [
      'Own full sales cycle from prospecting to close for enterprise accounts',
      'Build relationships with C-level and VP-level decision makers',
      'Partner with solutions engineers on technical demonstrations',
      'Negotiate contracts and manage procurement processes',
      'Achieve and exceed quarterly revenue targets',
    ],
    requirements: [
      '5+ years of enterprise software sales experience',
      'Track record of consistent quota attainment ($1M+ annual)',
      'Experience with complex, multi-stakeholder sales cycles',
      'Strong presentation and negotiation skills',
      'CRM proficiency (Salesforce preferred)',
    ],
    niceToHave: [
      'Experience in construction, real estate, or infrastructure',
      'Existing relationships with Canadian enterprise accounts',
      'MEDDIC or similar sales methodology certification',
    ],
    benefits: [
      'Uncapped commission structure',
      'Equity participation',
      'President\'s Club trips',
      'Full benefits package',
      'Sales enablement and training programs',
    ],
    tags: ['Sales', 'Enterprise', 'SaaS', 'B2B', 'Construction Tech'],
    process: [
      { step: 'Recruiter Call', description: 'Initial qualification call' },
      { step: 'Sales Leader Interview', description: 'Deep dive on sales experience' },
      { step: 'Mock Pitch', description: 'Present our product to the team' },
      { step: 'Cross-functional', description: 'Meet marketing and customer success' },
      { step: 'Final Interview', description: 'Conversation with CRO' },
    ],
  },
  {
    id: '6',
    slug: 'engineering-manager-frontend',
    title: 'Engineering Manager, Frontend',
    company: 'E-commerce Platform',
    companyDescription: 'A Canadian e-commerce platform powering thousands of online retailers. Profitable and growing rapidly.',
    location: 'Mississauga, ON',
    workModel: 'hybrid',
    employmentType: 'full-time',
    specialty: 'engineering',
    salaryMin: 160000,
    salaryMax: 190000,
    postedDate: '2025-01-17',
    featured: false,
    overview: 'Lead a team of 6-8 frontend engineers building merchant-facing tools that help retailers succeed online.',
    responsibilities: [
      'Manage and develop a high-performing frontend engineering team',
      'Partner with product management to plan and execute roadmap',
      'Drive technical excellence and maintain code quality standards',
      'Participate in hiring and build team capabilities',
      'Balance technical debt with feature development',
    ],
    requirements: [
      '2+ years of engineering management experience',
      'Strong background in frontend development (React, TypeScript)',
      'Experience scaling frontend applications',
      'Proven ability to recruit and develop engineers',
      'Excellent communication and stakeholder management',
    ],
    niceToHave: [
      'Experience in e-commerce or merchant tools',
      'Background in design systems',
      'Experience with performance optimization at scale',
    ],
    benefits: [
      'Competitive salary and bonus',
      'Stock options',
      'Hybrid work (3 days in Mississauga office)',
      'Comprehensive benefits',
      'Professional development budget',
    ],
    tags: ['Engineering Management', 'Frontend', 'React', 'Leadership', 'E-commerce'],
    process: [
      { step: 'HR Screen', description: 'Initial conversation' },
      { step: 'Hiring Manager', description: 'Technical and leadership discussion' },
      { step: 'Technical Assessment', description: 'System design and architecture' },
      { step: 'Team Interviews', description: 'Meet direct reports and peers' },
      { step: 'VP Interview', description: 'Final leadership conversation' },
    ],
  },
  {
    id: '7',
    slug: 'product-designer-growth',
    title: 'Product Designer, Growth',
    company: 'Consumer Marketplace',
    companyDescription: 'Canada\'s leading online marketplace for services. Millions of monthly users and expanding across North America.',
    location: 'Toronto, ON',
    workModel: 'hybrid',
    employmentType: 'full-time',
    specialty: 'design',
    salaryMin: 110000,
    salaryMax: 140000,
    postedDate: '2025-01-23',
    featured: false,
    overview: 'Design experiments and features that drive user acquisition, activation, and retention across our marketplace platform.',
    responsibilities: [
      'Design growth-focused features and experiments',
      'Partner with data science to analyze experiment results',
      'Create user flows, wireframes, and high-fidelity mockups',
      'Contribute to and evolve our design system',
      'Advocate for user needs in growth-focused work',
    ],
    requirements: [
      '3+ years of product design experience',
      'Experience with growth design and experimentation',
      'Data-informed design approach',
      'Strong visual and interaction design skills',
      'Experience with A/B testing and analytics tools',
    ],
    niceToHave: [
      'Marketplace or two-sided platform experience',
      'Background in conversion optimization',
      'Motion design capabilities',
    ],
    benefits: [
      'Competitive salary and equity',
      'Flexible hybrid work',
      'Health and wellness benefits',
      'Learning and development budget',
      'Team events and offsites',
    ],
    tags: ['Growth Design', 'Experimentation', 'A/B Testing', 'Consumer', 'Marketplace'],
    process: [
      { step: 'Portfolio Review', description: 'Design team reviews your work' },
      { step: 'Design Manager Call', description: '45-minute interview' },
      { step: 'Design Challenge', description: 'Growth-focused design exercise' },
      { step: 'Team Day', description: 'Meet the team and present your work' },
    ],
  },
  {
    id: '8',
    slug: 'senior-data-engineer',
    title: 'Senior Data Engineer',
    company: 'Retail Analytics',
    companyDescription: 'A Toronto-based analytics company helping retailers understand their customers. Serving major Canadian and US brands.',
    location: 'Toronto, ON',
    workModel: 'remote',
    employmentType: 'full-time',
    specialty: 'data',
    salaryMin: 140000,
    salaryMax: 170000,
    postedDate: '2025-01-16',
    featured: false,
    overview: 'Build and scale data infrastructure processing billions of retail transactions daily for insights and analytics.',
    responsibilities: [
      'Design and implement data pipelines at scale',
      'Build and maintain data warehouse architecture',
      'Optimize query performance and data processing costs',
      'Collaborate with data scientists on ML feature pipelines',
      'Establish data quality and monitoring practices',
    ],
    requirements: [
      '5+ years of data engineering experience',
      'Expert in SQL and Python',
      'Experience with modern data stack (Snowflake, dbt, Airflow)',
      'Strong background in distributed systems',
      'Experience with cloud platforms (AWS preferred)',
    ],
    niceToHave: [
      'Experience with real-time streaming (Kafka, Kinesis)',
      'Background in retail or e-commerce data',
      'Experience with data mesh architectures',
    ],
    benefits: [
      'Fully remote position',
      'Competitive compensation',
      'Equity participation',
      'Health and dental benefits',
      'Flexible PTO policy',
    ],
    tags: ['Data Engineering', 'Spark', 'AWS', 'Analytics', 'Remote'],
    process: [
      { step: 'Recruiter Screen', description: '30-minute introduction' },
      { step: 'Technical Interview', description: 'SQL and data modeling assessment' },
      { step: 'System Design', description: 'Data architecture discussion' },
      { step: 'Team Interviews', description: 'Meet the data platform team' },
    ],
  },
  {
    id: '9',
    slug: 'vp-marketing',
    title: 'VP of Marketing',
    company: 'HR Tech Platform',
    companyDescription: 'A venture-backed HR tech startup modernizing how companies manage their workforce. Growing rapidly across North America.',
    location: 'Toronto, ON',
    workModel: 'hybrid',
    employmentType: 'full-time',
    specialty: 'go-to-market',
    salaryMin: 180000,
    salaryMax: 220000,
    postedDate: '2025-01-15',
    featured: false,
    overview: 'Lead marketing strategy and execution for our rapidly growing HR tech platform. Build and scale the marketing team.',
    responsibilities: [
      'Develop and execute comprehensive marketing strategy',
      'Build and lead a high-performing marketing team',
      'Drive demand generation and brand awareness',
      'Partner with sales on go-to-market initiatives',
      'Manage marketing budget and measure ROI',
    ],
    requirements: [
      '10+ years of B2B marketing experience',
      '5+ years of marketing leadership',
      'Track record of scaling marketing at growth-stage companies',
      'Experience with demand gen, content, and brand marketing',
      'Strong analytical and strategic thinking skills',
    ],
    niceToHave: [
      'HR tech or enterprise software experience',
      'Experience marketing in Canadian market',
      'Background in product-led growth',
    ],
    benefits: [
      'Significant equity stake',
      'Executive benefits package',
      'Flexible work arrangements',
      'Professional development budget',
      'Leadership team involvement',
    ],
    tags: ['Marketing', 'Leadership', 'B2B SaaS', 'HR Tech', 'Executive'],
    process: [
      { step: 'CEO Call', description: 'Initial conversation with founder' },
      { step: 'Deep Dive', description: 'Marketing strategy discussion' },
      { step: 'Presentation', description: '90-day plan presentation' },
      { step: 'Board Member', description: 'Conversation with board advisor' },
      { step: 'Reference Checks', description: 'Final due diligence' },
    ],
  },
  {
    id: '10',
    slug: 'product-manager-platform',
    title: 'Product Manager, Platform',
    company: 'Developer Tools',
    companyDescription: 'A Toronto-born developer tools company making software development faster. Used by thousands of engineering teams globally.',
    location: 'Remote (Canada)',
    workModel: 'remote',
    employmentType: 'full-time',
    specialty: 'product',
    salaryMin: 130000,
    salaryMax: 160000,
    postedDate: '2025-01-14',
    featured: false,
    overview: 'Own the developer platform experience, ensuring our APIs, SDKs, and integrations delight engineering teams worldwide.',
    responsibilities: [
      'Define product strategy for developer platform',
      'Partner with engineering on API design and SDK development',
      'Gather feedback from developer community',
      'Create documentation and developer education content',
      'Monitor platform metrics and developer experience KPIs',
    ],
    requirements: [
      '4+ years of product management experience',
      'Technical background (previous engineering role preferred)',
      'Experience with developer tools or platform products',
      'Strong understanding of APIs and developer workflows',
      'Excellent written communication skills',
    ],
    niceToHave: [
      'Experience building developer communities',
      'Open source contribution history',
      'Background in DevOps or CI/CD tools',
    ],
    benefits: [
      'Remote-first culture',
      'Competitive equity',
      'Home office setup budget',
      'Unlimited PTO',
      'Annual team retreats',
    ],
    tags: ['Product Management', 'Developer Tools', 'API', 'Platform', 'Remote'],
    process: [
      { step: 'Recruiter Call', description: 'Initial screen' },
      { step: 'PM Interview', description: 'Product thinking discussion' },
      { step: 'Technical Interview', description: 'API/platform design exercise' },
      { step: 'Cross-functional', description: 'Meet engineering and design' },
      { step: 'Founder Interview', description: 'Final conversation' },
    ],
  },
  {
    id: '11',
    slug: 'ux-researcher',
    title: 'UX Researcher',
    company: 'Financial Services',
    companyDescription: 'A major Canadian financial institution investing heavily in digital transformation and customer experience.',
    location: 'Toronto, ON',
    workModel: 'hybrid',
    employmentType: 'contract',
    specialty: 'design',
    salaryMin: 85000,
    salaryMax: 110000,
    postedDate: '2025-01-24',
    featured: false,
    overview: '12-month contract to lead user research initiatives across mobile banking and wealth management products.',
    responsibilities: [
      'Plan and conduct user research studies',
      'Synthesize research findings into actionable insights',
      'Present findings to product and design teams',
      'Build and maintain research repository',
      'Advocate for customer needs across the organization',
    ],
    requirements: [
      '3+ years of UX research experience',
      'Experience with various research methodologies',
      'Strong analytical and synthesis skills',
      'Excellent presentation and communication abilities',
      'Experience with research tools (UserTesting, Dovetail, etc.)',
    ],
    niceToHave: [
      'Financial services or banking experience',
      'Experience with accessibility research',
      'Quantitative research skills',
    ],
    benefits: [
      'Competitive contract rate',
      'Hybrid work flexibility',
      'Potential for extension or conversion',
      'Enterprise-level projects',
    ],
    tags: ['UX Research', 'Qualitative', 'Financial Services', 'Contract', 'Enterprise'],
    process: [
      { step: 'Screening', description: 'Initial qualification' },
      { step: 'Research Lead', description: 'Methodology discussion' },
      { step: 'Case Study', description: 'Present past research project' },
      { step: 'Team Meet', description: 'Meet design and product partners' },
    ],
  },
  {
    id: '12',
    slug: 'senior-frontend-engineer',
    title: 'Senior Frontend Engineer',
    company: 'Media Tech',
    companyDescription: 'A Canadian media technology company building next-generation content platforms for publishers.',
    location: 'Toronto, ON',
    workModel: 'hybrid',
    employmentType: 'full-time',
    specialty: 'engineering',
    salaryMin: 140000,
    salaryMax: 170000,
    postedDate: '2025-01-22',
    featured: false,
    overview: 'Build performant, accessible web experiences that serve millions of readers across Canada\'s top media properties.',
    responsibilities: [
      'Develop frontend features using React and Next.js',
      'Optimize performance for high-traffic media sites',
      'Collaborate with design on component implementation',
      'Mentor junior engineers and review code',
      'Contribute to frontend architecture decisions',
    ],
    requirements: [
      '5+ years of frontend development experience',
      'Expert in React, TypeScript, and Next.js',
      'Strong understanding of web performance optimization',
      'Experience with accessibility standards (WCAG)',
      'Excellent problem-solving skills',
    ],
    niceToHave: [
      'Media or publishing industry experience',
      'Experience with headless CMS platforms',
      'Background in design systems',
    ],
    benefits: [
      'Competitive salary and equity',
      'Hybrid work (2 days downtown)',
      'Full health benefits',
      'Conference budget',
      'Parental leave policy',
    ],
    tags: ['Frontend', 'React', 'TypeScript', 'Media Tech', 'Next.js'],
    process: [
      { step: 'Technical Screen', description: 'Coding assessment' },
      { step: 'System Design', description: 'Frontend architecture discussion' },
      { step: 'Team Interviews', description: 'Meet engineering team' },
      { step: 'Culture Fit', description: 'Final conversation' },
    ],
  },
]

export function getRoleBySlug(slug: string): Role | undefined {
  return roles.find(r => r.slug === slug)
}

export function getFeaturedRoles(): Role[] {
  return roles.filter(r => r.featured)
}

export function getRolesBySpecialty(specialty: SpecialtyType): Role[] {
  return roles.filter(r => r.specialty === specialty)
}

export function formatSalary(min: number, max: number): string {
  const formatNum = (n: number) => {
    if (n >= 1000) {
      return `$${(n / 1000).toFixed(0)}K`
    }
    return `$${n.toLocaleString()}`
  }
  return `${formatNum(min)} - ${formatNum(max)} CAD`
}

export function getWorkModelLabel(model: WorkModel): string {
  const labels: Record<WorkModel, string> = {
    remote: 'Remote',
    hybrid: 'Hybrid',
    onsite: 'On-site',
  }
  return labels[model]
}

export function getEmploymentTypeLabel(type: EmploymentType): string {
  const labels: Record<EmploymentType, string> = {
    'full-time': 'Full-time',
    'contract': 'Contract',
    'contract-to-hire': 'Contract-to-Hire',
  }
  return labels[type]
}
