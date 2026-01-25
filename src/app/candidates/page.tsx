'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Briefcase, TrendingUp, Users, Shield } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { ButtonLink } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { services, faqs, testimonials, specialties } from '@/content'

const whyUs = [
  {
    icon: Briefcase,
    title: 'Exclusive Opportunities',
    description:
      "Many of our roles aren't posted publicly. Working with us gives you access to hidden opportunities.",
  },
  {
    icon: TrendingUp,
    title: 'Career Advocacy',
    description:
      "We don't just send resumes—we advocate for you, highlighting your strengths and negotiating on your behalf.",
  },
  {
    icon: Users,
    title: 'Personal Connection',
    description:
      "You're not a number. We take the time to understand your goals, preferences, and what makes you tick.",
  },
  {
    icon: Shield,
    title: 'Confidential Search',
    description:
      'Looking while employed? We respect your privacy and only share your profile with your explicit permission.',
  },
]

export default function CandidatesPage() {
  const candidateServices = services.candidate
  const candidateFaqs = faqs.candidates
  const candidateTestimonials = testimonials.filter((t) => t.type === 'candidate')

  return (
    <>
      {/* Hero */}
      <Section className="pt-32 pb-16 bg-surface">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Badge variant="accent" className="mb-4">
              For Candidates
            </Badge>
            <h1 className="text-display-xl md:text-display-2xl font-display font-bold mb-6">
              Find your next career-defining opportunity
            </h1>
            <p className="text-body-lg text-muted mb-8">
              Stop scrolling through job boards and let us connect you with opportunities that
              match your skills, experience, and career goals. We&apos;re your partner in
              navigating Canada&apos;s tech landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonLink href="/roles" size="lg">
                Browse Open Roles
                <ArrowRight className="w-5 h-5" />
              </ButtonLink>
              <ButtonLink href="/contact" variant="outline" size="lg">
                Submit Your Resume
              </ButtonLink>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Why Us */}
      <Section>
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4">
              Why Work With Us
            </Badge>
            <h2 className="text-display-lg md:text-display-xl font-display font-bold">
              Your career, our priority
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-display-xs font-display font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-body-md text-muted">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Services */}
      <Section className="bg-surface">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge variant="secondary" className="mb-4">
                How We Help
              </Badge>
              <h2 className="text-display-lg md:text-display-xl font-display font-bold mb-6">
                More than just job matching
              </h2>
              <p className="text-body-lg text-muted">
                We&apos;re invested in your success. From resume advice to interview prep to
                offer negotiation, we&apos;re with you every step of the way.
              </p>
            </motion.div>

            <div className="space-y-4">
              {candidateServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                          <span className="text-xl">{service.icon}</span>
                        </div>
                        <div>
                          <h3 className="text-display-xs font-display font-semibold mb-2">
                            {service.title}
                          </h3>
                          <p className="text-body-md text-muted">{service.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Specialties */}
      <Section>
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4">
              Our Specialties
            </Badge>
            <h2 className="text-display-lg md:text-display-xl font-display font-bold mb-4">
              Roles we place
            </h2>
            <p className="text-body-lg text-muted">
              We focus on high-impact roles across the core functions that drive growth at
              tech companies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((specialty, index) => (
              <motion.div
                key={specialty.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/specialties#${specialty.slug}`}>
                  <Card hover className="h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                        <span className="text-2xl">{specialty.icon}</span>
                      </div>
                      <h3 className="text-display-xs font-display font-semibold mb-3">
                        {specialty.name}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {specialty.roles.slice(0, 4).map((role) => (
                          <Badge key={role} variant="secondary" size="sm">
                            {role}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section className="bg-surface">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4">
              Success Stories
            </Badge>
            <h2 className="text-display-lg md:text-display-xl font-display font-bold">
              Hear from candidates we&apos;ve placed
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {candidateTestimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <blockquote className="text-body-md text-foreground mb-6">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                        <span className="text-body-sm font-medium text-accent">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="text-body-sm font-medium text-foreground">
                          {testimonial.author}
                        </p>
                        <p className="text-body-xs text-muted">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge variant="secondary" className="mb-4">
                FAQ
              </Badge>
              <h2 className="text-display-lg font-display font-bold mb-6">
                Common questions from candidates
              </h2>
              <p className="text-body-lg text-muted mb-8">
                Have a question we haven&apos;t answered? Reach out and we&apos;ll get back to you.
              </p>
              <ButtonLink href="/contact" variant="outline">
                Contact Us
              </ButtonLink>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Accordion type="single" collapsible>
                {candidateFaqs.map((faq) => (
                  <AccordionItem key={faq.question} value={faq.question}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-surface">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl bg-gradient-to-br from-accent/10 via-background to-background border border-border overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
            <div className="relative px-8 py-16 md:px-16 md:py-24 text-center">
              <h2 className="text-display-lg md:text-display-xl font-display font-bold mb-4">
                Ready to take the next step?
              </h2>
              <p className="text-body-lg text-muted mb-8 max-w-2xl mx-auto">
                Browse our current openings or submit your resume to be considered for future
                opportunities that match your background.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ButtonLink href="/roles" size="lg">
                  Browse Open Roles
                  <ArrowRight className="w-5 h-5" />
                </ButtonLink>
                <ButtonLink href="/contact" variant="outline" size="lg">
                  Submit Your Resume
                </ButtonLink>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  )
}
