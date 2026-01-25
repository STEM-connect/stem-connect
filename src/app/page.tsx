'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, MapPin, Briefcase, DollarSign, Clock } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Button, ButtonLink } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Divider } from '@/components/ui/divider'
import { siteConfig, roles, specialties, testimonials } from '@/content'
import { cn, formatSalary } from '@/lib/utils'

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const featuredRoles = roles.filter((role) => role.featured).slice(0, 4)

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="blob w-96 h-96 bg-accent/30 top-1/4 -left-48"
            style={{ y }}
          />
          <motion.div
            className="blob w-80 h-80 bg-accent/20 bottom-1/4 -right-40"
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
          />
        </div>

        <Container className="relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl"
          >
            <motion.div variants={fadeIn} className="mb-6">
              <Badge variant="accent" size="lg">
                Canada&apos;s Premier Tech Recruiting Partner
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="text-display-2xl md:text-display-3xl lg:text-[5rem] font-display font-bold leading-[0.95] tracking-tight mb-8"
            >
              We connect{' '}
              <span className="text-accent">exceptional talent</span>{' '}
              with companies building the future
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-body-lg md:text-body-xl text-muted max-w-2xl mb-10"
            >
              {siteConfig.description}
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4"
            >
              <ButtonLink href="/roles" size="lg">
                Browse Open Roles
                <ArrowRight className="w-5 h-5" />
              </ButtonLink>
              <ButtonLink href="/employers" variant="outline" size="lg">
                For Employers
              </ButtonLink>
            </motion.div>

            {/* Metrics */}
            <motion.div
              variants={fadeIn}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border"
            >
              {siteConfig.metrics.map((metric) => (
                <div key={metric.label}>
                  <p className="text-display-lg md:text-display-xl font-display font-bold text-accent">
                    {metric.value}
                  </p>
                  <p className="text-body-sm text-muted mt-1">{metric.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Container>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          style={{ opacity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted/30 flex items-start justify-center p-1.5">
            <motion.div
              className="w-1.5 h-2.5 bg-accent rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Roles Section */}
      <Section className="bg-surface">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <Badge variant="secondary" className="mb-4">Featured Opportunities</Badge>
              <h2 className="text-display-lg md:text-display-xl font-display font-bold">
                Hot roles right now
              </h2>
            </div>
            <ButtonLink href="/roles" variant="ghost">
              View all roles
              <ArrowRight className="w-4 h-4" />
            </ButtonLink>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredRoles.map((role, index) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/roles/${role.slug}`}>
                  <Card hover className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div>
                          <p className="text-body-sm text-accent font-medium mb-1">
                            {role.company}
                          </p>
                          <h3 className="text-display-sm font-display font-semibold">
                            {role.title}
                          </h3>
                        </div>
                        {role.featured && (
                          <Badge variant="accent" size="sm">Featured</Badge>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-4 text-body-sm text-muted mb-4">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          {role.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Briefcase className="w-4 h-4" />
                          {role.employmentType}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <DollarSign className="w-4 h-4" />
                          {formatSalary(role.salaryMin, role.salaryMax)}
                        </span>
                      </div>

                      <p className="text-body-md text-muted line-clamp-2 mb-4">
                        {role.overview}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {role.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="secondary" size="sm">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <span className="flex items-center gap-1 text-body-sm text-muted">
                          <Clock className="w-4 h-4" />
                          {role.postedDate}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Specialties Section */}
      <Section>
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4">Our Focus</Badge>
            <h2 className="text-display-lg md:text-display-xl font-display font-bold mb-4">
              Deep expertise where it matters
            </h2>
            <p className="text-body-lg text-muted">
              We specialize in placing talent across the core functions that drive growth at
              Canada&apos;s most ambitious tech companies.
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
                  <Card hover className="h-full group">
                    <CardContent className="p-8">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                        <span className="text-2xl">{specialty.icon}</span>
                      </div>
                      <h3 className="text-display-sm font-display font-semibold mb-3">
                        {specialty.name}
                      </h3>
                      <p className="text-body-md text-muted mb-4">
                        {specialty.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {specialty.roles.slice(0, 3).map((role) => (
                          <Badge key={role} variant="secondary" size="sm">
                            {role}
                          </Badge>
                        ))}
                        {specialty.roles.length > 3 && (
                          <Badge variant="secondary" size="sm">
                            +{specialty.roles.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section className="bg-surface overflow-hidden">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4">Testimonials</Badge>
            <h2 className="text-display-lg md:text-display-xl font-display font-bold mb-4">
              Trusted by Canada&apos;s best
            </h2>
            <p className="text-body-lg text-muted">
              Don&apos;t just take our word for it. Here&apos;s what the people we&apos;ve worked
              with have to say.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <Badge
                      variant={testimonial.type === 'employer' ? 'accent' : 'secondary'}
                      size="sm"
                      className="mb-4"
                    >
                      {testimonial.type === 'employer' ? 'Employer' : 'Candidate'}
                    </Badge>
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

      {/* CTA Section */}
      <Section>
        <Container>
          <div className="relative rounded-2xl bg-gradient-to-br from-accent/10 via-surface to-surface border border-border overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
            <div className="relative px-8 py-16 md:px-16 md:py-24">
              <div className="max-w-2xl">
                <h2 className="text-display-lg md:text-display-xl font-display font-bold mb-4">
                  Ready to make your next move?
                </h2>
                <p className="text-body-lg text-muted mb-8">
                  Whether you&apos;re looking for your next great hire or your next great role,
                  we&apos;re here to help. Let&apos;s start a conversation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <ButtonLink href="/contact" size="lg">
                    Get in Touch
                    <ArrowRight className="w-5 h-5" />
                  </ButtonLink>
                  <ButtonLink href="/roles" variant="outline" size="lg">
                    Browse Roles
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
