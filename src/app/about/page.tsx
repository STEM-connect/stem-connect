'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Mail, Phone } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { ButtonLink } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Divider } from '@/components/ui/divider'
import { siteConfig } from '@/content'

const values = [
  {
    title: 'Quality Over Quantity',
    description:
      "We don't blast resumes. Every candidate we present has been thoroughly vetted and personally interviewed.",
  },
  {
    title: 'Long-term Relationships',
    description:
      "We're not here for quick placements. We build careers and help companies grow for years to come.",
  },
  {
    title: 'Market Expertise',
    description:
      'We live and breathe the Canadian tech ecosystem. We know the companies, the people, and the opportunities.',
  },
  {
    title: 'Transparent Communication',
    description:
      'No games, no ghosting. We keep candidates and clients informed every step of the way.',
  },
]

const timeline = [
  {
    year: '2019',
    title: 'Founded',
    description:
      'Started in a WeWork in downtown Toronto with a laptop and a mission to do recruiting differently.',
  },
  {
    year: '2020',
    title: 'Survived & Thrived',
    description:
      'Navigated the pandemic while helping companies build remote-first teams across Canada.',
  },
  {
    year: '2021',
    title: 'Hit Our Stride',
    description:
      'Placed our 100th candidate and expanded our team to cover all major tech functions.',
  },
  {
    year: '2022',
    title: 'Industry Recognition',
    description:
      'Named one of the top boutique recruiting firms in the GTA by Toronto Business Journal.',
  },
  {
    year: '2023',
    title: 'Expanding Horizons',
    description:
      'Launched our executive search practice and started working with scale-ups across North America.',
  },
  {
    year: '2024',
    title: 'Today',
    description:
      "200+ successful placements, 50+ partner companies, and expanding across Canada. We're just getting started.",
  },
]

export default function AboutPage() {
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
              Our Story
            </Badge>
            <h1 className="text-display-xl md:text-display-2xl font-display font-bold mb-6">
              Built by recruiters who actually get tech
            </h1>
            <p className="text-body-lg text-muted">
              We started Stem Connect because we were tired of the transactional nature of
              traditional recruiting. We wanted to build something different—a firm that
              genuinely cares about matching the right people with the right opportunities.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Values */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge variant="secondary" className="mb-4">
                What We Believe
              </Badge>
              <h2 className="text-display-lg md:text-display-xl font-display font-bold mb-6">
                Our values guide everything we do
              </h2>
              <p className="text-body-lg text-muted">
                In an industry known for volume and churn, we take a different approach.
                We believe great recruiting is about relationships, expertise, and genuine care
                for the outcome.
              </p>
            </motion.div>

            <div className="grid gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-display-xs font-display font-semibold mb-2">
                        {value.title}
                      </h3>
                      <p className="text-body-md text-muted">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Timeline */}
      <Section className="bg-surface">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4">
              Our Journey
            </Badge>
            <h2 className="text-display-lg md:text-display-xl font-display font-bold">
              From startup to industry leader
            </h2>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-start gap-8 pb-12 last:pb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 -translate-x-1.5 md:-translate-x-2 rounded-full bg-accent border-4 border-background z-10" />

                {/* Content */}
                <div
                  className={`flex-1 pl-8 md:pl-0 ${
                    index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'
                  }`}
                >
                  <Badge variant="accent" size="sm" className="mb-2">
                    {item.year}
                  </Badge>
                  <h3 className="text-display-xs font-display font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-body-md text-muted">{item.description}</p>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Stats */}
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            {siteConfig.metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <p className="text-display-xl md:text-display-2xl font-display font-bold text-accent mb-2">
                  {metric.value}
                </p>
                <p className="text-body-md text-muted">{metric.label}</p>
              </div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Location & Contact */}
      <Section className="bg-surface">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge variant="secondary" className="mb-4">
                Find Us
              </Badge>
              <h2 className="text-display-lg font-display font-bold mb-6">
                Based in Toronto, serving globally
              </h2>
              <p className="text-body-lg text-muted mb-8">
                Our office is in the heart of Toronto&apos;s tech corridor, but we work with
                companies and candidates across North America. Drop by for a coffee, or let&apos;s
                connect virtually.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-body-md font-medium text-foreground">Address</p>
                    <p className="text-body-md text-muted">{siteConfig.contact.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-body-md font-medium text-foreground">Email</p>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-body-md text-accent hover:text-accent/80 transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-body-md font-medium text-foreground">Phone</p>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-body-md text-accent hover:text-accent/80 transition-colors"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="aspect-video lg:aspect-auto lg:h-full min-h-[300px] rounded-lg overflow-hidden bg-surface-elevated"
            >
              {/* Map placeholder - in production, replace with actual map */}
              <div className="w-full h-full flex items-center justify-center text-muted">
                <div className="text-center">
                  <MapPin className="w-12 h-12 mx-auto mb-4 text-accent/50" />
                  <p className="text-body-md">Toronto, Ontario</p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-display-lg md:text-display-xl font-display font-bold mb-4">
              Ready to work together?
            </h2>
            <p className="text-body-lg text-muted mb-8">
              Whether you&apos;re hiring or job hunting, we&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ButtonLink href="/employers" size="lg">
                I&apos;m Hiring
                <ArrowRight className="w-5 h-5" />
              </ButtonLink>
              <ButtonLink href="/candidates" variant="outline" size="lg">
                I&apos;m Looking for a Role
              </ButtonLink>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  )
}
