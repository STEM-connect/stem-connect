export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
  type: 'employer' | 'candidate'
  featured: boolean
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'Stem Connect understood exactly what we needed. They found us a VP of Engineering who transformed our team in six months. The quality of candidates was exceptional.',
    author: 'Sarah Chen',
    role: 'CEO',
    company: 'Series B Fintech',
    type: 'employer',
    featured: true,
  },
  {
    id: '2',
    quote: 'After years of generic recruiter outreach, Stem Connect was refreshingly different. They took time to understand my career goals and connected me with a role I genuinely love.',
    author: 'Marcus Williams',
    role: 'Staff Engineer',
    company: 'Enterprise SaaS',
    type: 'candidate',
    featured: true,
  },
  {
    id: '3',
    quote: 'We\'ve hired 12 people through Stem Connect in the past year. Their understanding of Toronto\'s tech market and what makes candidates tick is unmatched.',
    author: 'Jennifer Park',
    role: 'VP People',
    company: 'E-commerce Platform',
    type: 'employer',
    featured: true,
  },
  {
    id: '4',
    quote: 'The team at Stem Connect made my job search feel collaborative, not transactional. They advocated for me throughout the process and helped me negotiate a strong offer.',
    author: 'David Okonkwo',
    role: 'Senior Product Manager',
    company: 'Health Tech Startup',
    type: 'candidate',
    featured: false,
  },
  {
    id: '5',
    quote: 'As a scaling startup, we needed senior design talent fast. Stem Connect delivered three exceptional candidates within two weeks. We hired two of them.',
    author: 'Amanda Liu',
    role: 'Head of Design',
    company: 'Consumer Marketplace',
    type: 'employer',
    featured: false,
  },
  {
    id: '6',
    quote: 'I\'d been passively looking for months. Stem Connect reached out with a role that was exactly what I wanted but didn\'t know existed. Seamless experience from start to finish.',
    author: 'Ryan Mitchell',
    role: 'Data Scientist',
    company: 'AI Startup',
    type: 'candidate',
    featured: false,
  },
]

export function getFeaturedTestimonials(): Testimonial[] {
  return testimonials.filter(t => t.featured)
}

export function getTestimonialsByType(type: 'employer' | 'candidate'): Testimonial[] {
  return testimonials.filter(t => t.type === type)
}
