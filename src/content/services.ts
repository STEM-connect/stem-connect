export interface Service {
  title: string
  description: string
  features: string[]
}

export const employerServices: Service[] = [
  {
    title: 'Executive Search',
    description: 'Find transformative leaders for VP, C-level, and board positions. We leverage our deep network to identify exceptional executives who align with your vision.',
    features: [
      'Confidential search process',
      'Comprehensive candidate assessment',
      'Cultural fit evaluation',
      'Market compensation analysis',
    ],
  },
  {
    title: 'Retained Search',
    description: 'Dedicated partnership for critical hires. We become an extension of your team, fully committed to finding the right person for high-impact roles.',
    features: [
      'Dedicated search consultant',
      'Exclusive candidate pipeline',
      'Thorough market mapping',
      'Ongoing candidate engagement',
    ],
  },
  {
    title: 'Contingent Search',
    description: 'Performance-based recruiting for volume hiring. We move fast to fill multiple positions with qualified candidates.',
    features: [
      'Pay-on-placement model',
      'Quick turnaround',
      'Scalable for growth',
      'Quality guarantee',
    ],
  },
  {
    title: 'Contract Staffing',
    description: 'Access top talent for project-based work. Whether you need specialized skills or flexible capacity, we have the network.',
    features: [
      'Vetted contractors',
      'Flexible engagement terms',
      'Compliance handled',
      'Contract-to-hire options',
    ],
  },
]

export const candidateServices: Service[] = [
  {
    title: 'Career Consultation',
    description: 'Get personalized guidance on your career trajectory. We help you understand your market value and identify opportunities aligned with your goals.',
    features: [
      'Market positioning advice',
      'Salary benchmarking',
      'Career path planning',
      'Interview preparation',
    ],
  },
  {
    title: 'Exclusive Opportunities',
    description: 'Access roles that aren\'t publicly posted. Many of our best opportunities come from trusted partnerships with hiring leaders.',
    features: [
      'Confidential searches',
      'Pre-market opportunities',
      'Direct hiring manager access',
      'Curated matches',
    ],
  },
  {
    title: 'Offer Negotiation',
    description: 'Maximize your compensation package. We advocate on your behalf to ensure you receive fair and competitive offers.',
    features: [
      'Compensation analysis',
      'Equity evaluation',
      'Benefits negotiation',
      'Counteroffer support',
    ],
  },
]

export interface ProcessStep {
  step: number
  title: string
  description: string
}

export const employerProcess: ProcessStep[] = [
  {
    step: 1,
    title: 'Discovery',
    description: 'We learn your business, culture, and exactly what success looks like for this role.',
  },
  {
    step: 2,
    title: 'Search',
    description: 'Our team activates our network, sources passive candidates, and screens for fit.',
  },
  {
    step: 3,
    title: 'Present',
    description: 'You receive a curated shortlist of qualified candidates with detailed profiles.',
  },
  {
    step: 4,
    title: 'Interview',
    description: 'We coordinate interviews, gather feedback, and keep the process moving.',
  },
  {
    step: 5,
    title: 'Close',
    description: 'We help craft the offer, navigate negotiations, and ensure a smooth start.',
  },
]

export const candidateProcess: ProcessStep[] = [
  {
    step: 1,
    title: 'Connect',
    description: 'Share your background, goals, and what you\'re looking for in your next role.',
  },
  {
    step: 2,
    title: 'Match',
    description: 'We identify opportunities that align with your skills, experience, and preferences.',
  },
  {
    step: 3,
    title: 'Prepare',
    description: 'Get insider insights on the company, role, and interview process.',
  },
  {
    step: 4,
    title: 'Interview',
    description: 'We support you through each stage with feedback and coaching.',
  },
  {
    step: 5,
    title: 'Land',
    description: 'We help you evaluate offers and negotiate the best possible package.',
  },
]

// Combined services export for page components
export const services = {
  employer: employerServices.map((s) => ({
    ...s,
    icon: s.title === 'Executive Search' ? '👔' : s.title === 'Retained Search' ? '🎯' : s.title === 'Contingent Search' ? '⚡' : '📋',
  })),
  candidate: candidateServices.map((s) => ({
    ...s,
    icon: s.title === 'Career Consultation' ? '💡' : s.title === 'Exclusive Opportunities' ? '🔑' : '💰',
  })),
  process: employerProcess.map((s) => ({
    title: s.title,
    description: s.description,
  })),
}
