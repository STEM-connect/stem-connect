'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Users, Clock, Target, Award } from 'lucide-react'
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
import { services, faqs, testimonials, siteConfig } from '@/content'

const whyUs = [
  {
    icon: Users,
    title: 'Deep Network',
    description:
      'Access our curated network of pre-vetted candidates across Product, Design, Engineering, and Go-to-Market.',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description:
      'We present qualified candidates within 5-7 business days, not weeks. Your time-to-hire matters.',
  },
  {
    icon: Target,
    title: 'Quality Matches',
    description:
      "We don't spray and pray. Every candidate we present has been personally interviewed and assessed.",
  },
  {
    icon: Award,
    title: 'Guarantee',
    description:
      "We stand behind our placements with a 90-day guarantee. If it doesn't work out, we'll find a replacement.",
  },
]

export default function EmployersPage() {
  const employerServices = services.employer
  const processSteps = services.process
  const employerFaqs = faqs.employers
  const employerTestimonials = testimonials.filter((t) => t.type === 'employer')

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
              For Employers
            </Badge>
            <h1 className="text-display-xl md:text-display-2xl font-display font-bold mb-6">
              Build your dream team with Canada&apos;s best talent
            </h1>
            <p className="text-body-lg text-muted mb-8">
              Stop wasting time on unqualified candidates and endless interviews. We connect
              you with pre-vetted professionals who are ready to make an impact from day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonLink href="/contact" size="lg">
                Start Hiring
                <ArrowRight className="w-5 h-5" />
              </ButtonLink>
              <ButtonLink href="/roles" variant="outline" size="lg">
                View Our Placements
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
              Why Stem Connect
            </Badge>
            <h2 className="text-display-lg md:text-display-xl font-display font-bold">
              Recruiting done right
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
                Our Services
              </Badge>
              <h2 className="text-display-lg md:text-display-xl font-display font-bold mb-6">
                Flexible solutions for every hiring need
              </h2>
              <p className="text-body-lg text-muted">
                Whether you need to fill a single critical role or build out an entire team,
                we have the expertise and network to deliver.
              </p>
            </motion.div>

            <div className="space-y-4">
              {employerServices.map((service, index) => (
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

      {/* Process */}
      <Section>
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4">
              How It Works
            </Badge>
            <h2 className="text-display-lg md:text-display-xl font-display font-bold mb-4">
              Simple, transparent process
            </h2>
            <p className="text-body-lg text-muted">
              From initial call to signed offer letter, we keep you informed every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border -translate-x-4" />
                )}

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center mb-6">
                    <span className="text-display-sm font-display font-bold text-accent">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-display-xs font-display font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-body-md text-muted">{step.description}</p>
                </div>
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
              Client Stories
            </Badge>
            <h2 className="text-display-lg md:text-display-xl font-display font-bold">
              Trusted by Canada&apos;s best companies
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {employerTestimonials.slice(0, 3).map((testimonial, index) => (
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
                Common questions from employers
              </h2>
              <p className="text-body-lg text-muted mb-8">
                Can&apos;t find what you&apos;re looking for? Reach out and we&apos;ll be happy to help.
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
                {employerFaqs.map((faq) => (
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
                Ready to find your next great hire?
              </h2>
              <p className="text-body-lg text-muted mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss your hiring needs. No obligation, no pressure—just a conversation
                about how we can help you build the team you need.
              </p>
              <ButtonLink href="/contact" size="lg">
                Schedule a Call
                <ArrowRight className="w-5 h-5" />
              </ButtonLink>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  )
}
