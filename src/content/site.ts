export const siteConfig = {
  name: 'Stem Connect',
  tagline: 'Boutique tech recruiting for Canada — built on signal, not volume.',
  description: 'Stem Connect is a boutique Canadian tech recruiting firm. We place senior Product, Design, Engineering, Data, and Go-to-Market talent with startups and scale-ups across Toronto, the GTA, and the rest of Canada — matched on craft, not keyword.',
  url: 'https://www.stemconnect.ca',

  contact: {
    email: 'info@stemconnect.ca',
    phone: '647-770-7137',
    address: 'Toronto, Ontario, Canada',
  },

  social: {
    linkedin: 'https://linkedin.com/company/stemconnect',
    twitter: 'https://twitter.com/stemconnect',
    instagram: 'https://instagram.com/stemconnect',
  },

  // Proof points / metrics
  metrics: [
    { value: '200+', label: 'Placements Made', description: 'Successful hires across Canada' },
    { value: '95%', label: 'Client Satisfaction', description: 'Based on client feedback' },
    { value: '18', label: 'Days Avg. Time-to-Hire', description: 'Fast, efficient placements' },
    { value: '50+', label: 'Partner Companies', description: 'Trusted by leading firms' },
  ],

  // Service areas - Canada-wide with GTA focus
  serviceAreas: [
    // GTA
    'Toronto', 'Mississauga', 'Vaughan', 'Markham', 'Oakville', 'Burlington', 'Brampton', 'Richmond Hill', 'Scarborough', 'North York', 'Etobicoke',
    // Ontario
    'Ottawa', 'Hamilton', 'Kitchener-Waterloo', 'London',
    // Canada-wide
    'Vancouver', 'Calgary', 'Montreal', 'Edmonton', 'Winnipeg', 'Halifax',
  ],

  // SEO keywords
  seoKeywords: [
    // Toronto/GTA specific
    'Toronto tech recruiting', 'GTA tech jobs', 'Toronto startup hiring', 'tech recruitment Toronto', 'IT staffing Toronto',
    'software developer jobs Toronto', 'product manager jobs GTA', 'tech talent Toronto', 'Toronto IT recruiters',
    // Canada-wide
    'Canada tech recruitment', 'Canadian tech jobs', 'tech staffing Canada', 'IT recruitment Canada',
    // Role-specific
    'product management recruiting', 'software engineering jobs Canada', 'UX design jobs Toronto',
    'data scientist recruiting', 'startup hiring Canada', 'scale-up recruiting',
  ],
}

export const navigation = {
  main: [
    { label: 'Roles', href: '/roles' },
    { label: 'Employers', href: '/employers' },
    { label: 'Candidates', href: '/candidates' },
    { label: 'Specialties', href: '/specialties' },
    { label: 'About', href: '/about' },
    { label: 'Insights', href: '/insights' },
  ],
  cta: { label: 'Contact', href: '/contact' },
  footer: [
    {
      title: 'Services',
      links: [
        { label: 'For Employers', href: '/employers' },
        { label: 'For Candidates', href: '/candidates' },
        { label: 'Our Specialties', href: '/specialties' },
        { label: 'Open Roles', href: '/roles' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Insights', href: '/insights' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Salary Guide', href: '/insights' },
        { label: 'Hiring Tips', href: '/insights' },
        { label: 'Market Insights', href: '/insights' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { label: 'LinkedIn', href: 'https://linkedin.com/company/stemconnect' },
        { label: 'Twitter', href: 'https://twitter.com/stemconnect' },
      ],
    },
  ],
}

export const footer = {
  columns: [
    {
      title: 'Services',
      links: [
        { label: 'For Employers', href: '/employers' },
        { label: 'For Candidates', href: '/candidates' },
        { label: 'Our Specialties', href: '/specialties' },
        { label: 'Open Roles', href: '/roles' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Insights', href: '/insights' },
        { label: 'Contact', href: '/contact' },
        { label: 'Careers', href: '/roles?internal=true' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Salary Guide', href: '/insights/toronto-tech-salary-guide-2025' },
        { label: 'Hiring Tips', href: '/insights' },
        { label: 'Market Insights', href: '/insights' },
      ],
    },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
}
