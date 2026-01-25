export interface Specialty {
  id: string
  slug: string
  name: string
  shortDescription: string
  description: string
  icon: string
  roles: string[]
  stats: {
    avgPlacementTime: string
    rolesPlaced: string
  }
}

export const specialties: Specialty[] = [
  {
    id: '1',
    slug: 'product',
    name: 'Product',
    shortDescription: 'Product managers, owners, and strategists who drive innovation.',
    description: 'We connect visionary product leaders with companies building the next generation of digital products. From early-stage startups defining their MVP to enterprises transforming their product organization, we understand what makes great product talent.',
    icon: 'Layers',
    roles: ['Product Manager', 'Senior Product Manager', 'Director of Product', 'VP Product', 'Chief Product Officer', 'Product Owner', 'Product Analyst', 'Product Operations'],
    stats: {
      avgPlacementTime: '18 days',
      rolesPlaced: '120+',
    },
  },
  {
    id: '2',
    slug: 'design',
    name: 'Design',
    shortDescription: 'UX, UI, and brand designers shaping exceptional experiences.',
    description: 'Design talent is at the heart of every successful digital product. We partner with Canada\'s most design-forward companies to find UX researchers, product designers, and creative leaders who elevate user experiences.',
    icon: 'Palette',
    roles: ['UX Designer', 'UI Designer', 'Product Designer', 'Senior Product Designer', 'Design Lead', 'Head of Design', 'UX Researcher', 'Design Systems Designer', 'Brand Designer'],
    stats: {
      avgPlacementTime: '16 days',
      rolesPlaced: '85+',
    },
  },
  {
    id: '3',
    slug: 'engineering',
    name: 'Engineering',
    shortDescription: 'Software engineers and technical leaders building at scale.',
    description: 'From full-stack developers to engineering managers, we help Canada\'s tech ecosystem find the builders who turn ideas into reality. Our deep network spans frontend, backend, mobile, DevOps, and platform engineering.',
    icon: 'Code',
    roles: ['Software Engineer', 'Senior Software Engineer', 'Staff Engineer', 'Principal Engineer', 'Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'Mobile Developer', 'DevOps Engineer', 'Engineering Manager', 'VP Engineering', 'CTO'],
    stats: {
      avgPlacementTime: '21 days',
      rolesPlaced: '200+',
    },
  },
  {
    id: '4',
    slug: 'data',
    name: 'Data',
    shortDescription: 'Data scientists, engineers, and analysts driving decisions.',
    description: 'Data is the foundation of modern business. We specialize in placing data scientists, ML engineers, and analytics leaders who transform raw data into competitive advantage for Canada\'s fastest-growing companies.',
    icon: 'BarChart3',
    roles: ['Data Analyst', 'Senior Data Analyst', 'Data Scientist', 'Senior Data Scientist', 'ML Engineer', 'Data Engineer', 'Analytics Engineer', 'Head of Data', 'VP Data Science'],
    stats: {
      avgPlacementTime: '19 days',
      rolesPlaced: '75+',
    },
  },
  {
    id: '5',
    slug: 'go-to-market',
    name: 'Go-to-Market',
    shortDescription: 'Sales, marketing, and revenue leaders scaling growth.',
    description: 'Growth requires the right go-to-market talent. We place sales leaders, marketing executives, and revenue operations professionals who understand the unique dynamics of Canadian B2B and B2C markets.',
    icon: 'TrendingUp',
    roles: ['Account Executive', 'Sales Development Rep', 'Sales Manager', 'VP Sales', 'Marketing Manager', 'Growth Marketing Manager', 'Head of Marketing', 'CMO', 'Revenue Operations', 'Customer Success Manager'],
    stats: {
      avgPlacementTime: '15 days',
      rolesPlaced: '90+',
    },
  },
]

export function getSpecialtyBySlug(slug: string): Specialty | undefined {
  return specialties.find(s => s.slug === slug)
}
