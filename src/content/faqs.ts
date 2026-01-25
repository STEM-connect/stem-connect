export interface FAQ {
  question: string
  answer: string
}

export const employerFaqs: FAQ[] = [
  {
    question: 'What roles do you specialize in?',
    answer: 'We focus on Product, Design, Engineering, Data, and Go-to-Market roles across Canada\'s tech ecosystem. From individual contributors to executives, we cover the full spectrum of digital talent.',
  },
  {
    question: 'How do you charge for your services?',
    answer: 'We offer both retained and contingent search models. Retained searches involve an upfront commitment for dedicated resources, while contingent searches are pay-on-placement. We\'ll recommend the best approach based on your needs.',
  },
  {
    question: 'What\'s your typical time to fill a role?',
    answer: 'On average, we present qualified candidates within 14 days and close roles in 4-6 weeks. Timeline varies by seniority and specialization. We prioritize quality over speed, but we move fast.',
  },
  {
    question: 'Do you offer any guarantees?',
    answer: 'Yes. For permanent placements, we offer a replacement guarantee. If a candidate doesn\'t work out within the first 90 days, we\'ll find a replacement at no additional cost.',
  },
  {
    question: 'What makes Stem Connect different?',
    answer: 'We\'re Canada-focused and tech-specialized. Unlike generalist agencies, we understand the nuances of hiring product designers versus frontend engineers, or the difference between a seed-stage PM and one at a public company. Our consultants have worked in tech themselves.',
  },
  {
    question: 'How do you source candidates?',
    answer: 'We combine our proprietary network of 15,000+ vetted professionals with active sourcing across LinkedIn, GitHub, Dribbble, and niche communities. Many of our best placements come from referrals within our network.',
  },
]

export const candidateFaqs: FAQ[] = [
  {
    question: 'Do I pay anything to work with Stem Connect?',
    answer: 'Never. Our services are completely free for candidates. We\'re compensated by the companies we help hire.',
  },
  {
    question: 'How do I know you\'ll find me the right role?',
    answer: 'We only reach out when we have opportunities that genuinely match your background and goals. We\'re not volume recruiters—we focus on quality matches that make sense for your career.',
  },
  {
    question: 'What if I\'m not actively looking?',
    answer: 'Many of our best placements start as conversations with passive candidates. We\'re happy to have a no-pressure chat about your career and keep you informed of relevant opportunities.',
  },
  {
    question: 'Will my current employer find out?',
    answer: 'Absolutely not. We treat all candidate information as strictly confidential. We\'ll never share your details without your explicit permission, and we\'ll never contact your current employer.',
  },
  {
    question: 'How long does the process typically take?',
    answer: 'From first conversation to offer, most searches take 3-6 weeks depending on the company\'s process. We keep you informed at every stage and advocate for efficient timelines.',
  },
  {
    question: 'Can you help with salary negotiation?',
    answer: 'Yes, this is a core part of what we do. We have detailed compensation data for Canada\'s tech market and will help you understand your market value and negotiate the best possible offer.',
  },
]

// Combined faqs export for page components
export const faqs = {
  employers: employerFaqs,
  candidates: candidateFaqs,
}
