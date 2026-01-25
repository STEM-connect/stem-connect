'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { ButtonLink } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Divider } from '@/components/ui/divider'
import { specialties, roles } from '@/content'

export default function SpecialtiesPage() {
  const getRoleCountBySpecialty = (specialtyName: string) =>
    roles.filter((role) => role.specialty === specialtyName).length

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
              Our Specialties
            </Badge>
            <h1 className="text-display-xl md:text-display-2xl font-display font-bold mb-6">
              Deep expertise across tech&apos;s core functions
            </h1>
            <p className="text-body-lg text-muted">
              We don&apos;t try to be everything to everyone. Instead, we&apos;ve built deep
              expertise in the roles that matter most at growth-stage tech companies.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Specialties Grid */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((specialty, index) => {
              const roleCount = getRoleCountBySpecialty(specialty.name)
              const specialtyRoles = roles
                .filter((role) => role.specialty === specialty.name)
                .slice(0, 2)

              return (
                <motion.div
                  key={specialty.id}
                  id={specialty.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="scroll-mt-32"
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                          <span className="text-2xl">{specialty.icon}</span>
                        </div>
                        <div>
                          <h2 className="text-display-sm font-display font-bold">
                            {specialty.name}
                          </h2>
                          {roleCount > 0 && (
                            <p className="text-body-sm text-accent font-medium">
                              {roleCount} open position{roleCount !== 1 ? 's' : ''}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-body-md text-muted mb-6">
                        {specialty.shortDescription}
                      </p>

                      {/* Roles We Place */}
                      <div className="mb-6">
                        <h3 className="text-body-sm font-semibold text-foreground mb-3">
                          Roles We Place
                        </h3>
                        <div className="flex flex-wrap gap-1.5">
                          {specialty.roles.slice(0, 5).map((role) => (
                            <Badge key={role} variant="secondary" size="sm">
                              {role}
                            </Badge>
                          ))}
                          {specialty.roles.length > 5 && (
                            <Badge variant="secondary" size="sm">
                              +{specialty.roles.length - 5}
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex gap-6 py-4 border-t border-border mb-6">
                        <div>
                          <p className="text-display-xs font-display font-bold text-accent">
                            {specialty.stats.avgPlacementTime}
                          </p>
                          <p className="text-body-xs text-muted">Avg. placement</p>
                        </div>
                        <div>
                          <p className="text-display-xs font-display font-bold text-accent">
                            {specialty.stats.rolesPlaced}
                          </p>
                          <p className="text-body-xs text-muted">Roles placed</p>
                        </div>
                      </div>

                      {/* Featured Roles or CTA */}
                      {specialtyRoles.length > 0 ? (
                        <div className="space-y-3 mb-4">
                          {specialtyRoles.map((role) => (
                            <Link key={role.id} href={`/roles/${role.slug}`}>
                              <div className="p-3 rounded-lg bg-surface hover:bg-surface-elevated transition-colors">
                                <p className="text-body-sm font-medium text-foreground">
                                  {role.title}
                                </p>
                                <p className="text-body-xs text-muted">
                                  {role.company} • {role.location}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <div className="p-4 rounded-lg bg-surface text-center mb-4">
                          <p className="text-body-sm text-muted">
                            No open roles currently—check back soon!
                          </p>
                        </div>
                      )}

                      <ButtonLink
                        href={`/roles?specialty=${encodeURIComponent(specialty.name)}`}
                        variant="outline"
                        className="w-full justify-center"
                      >
                        View All {specialty.name} Roles
                        <ArrowRight className="w-4 h-4" />
                      </ButtonLink>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
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
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-display-lg md:text-display-xl font-display font-bold mb-4">
              Don&apos;t see your specialty?
            </h2>
            <p className="text-body-lg text-muted mb-8">
              We&apos;re always expanding our network. If you&apos;re looking for talent or
              opportunities outside these areas, let&apos;s talk.
            </p>
            <ButtonLink href="/contact" size="lg">
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </ButtonLink>
          </motion.div>
        </Container>
      </Section>
    </>
  )
}
