'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  MapPin,
  Briefcase,
  DollarSign,
  Clock,
  Share2,
  Check,
} from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Button, ButtonLink } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { siteConfig } from '@/content'
import { formatSalary, copyToClipboard } from '@/lib/utils'
import type { Role } from '@/content'

interface RoleDetailClientProps {
  role: Role
  relatedRoles: Role[]
}

export default function RoleDetailClient({ role, relatedRoles }: RoleDetailClientProps) {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false)
  const [isShareCopied, setIsShareCopied] = useState(false)

  const handleShare = async () => {
    const url = `${siteConfig.url}/roles/${role.slug}`
    await copyToClipboard(url)
    setIsShareCopied(true)
    setTimeout(() => setIsShareCopied(false), 2000)
  }

  return (
    <>
      {/* Header */}
      <Section className="pt-32 pb-8 bg-surface">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              href="/roles"
              className="inline-flex items-center gap-2 text-body-sm text-muted hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all roles
            </Link>

            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <p className="text-body-md text-accent font-medium">{role.company}</p>
                  {role.featured && <Badge variant="accent">Featured</Badge>}
                </div>
                <h1 className="text-display-lg md:text-display-xl font-display font-bold mb-4">
                  {role.title}
                </h1>
                <div className="flex flex-wrap gap-4 text-body-md text-muted">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    {role.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5" />
                    {role.employmentType}
                  </span>
                  <span className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    {formatSalary(role.salaryMin, role.salaryMax)}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Posted {role.postedDate}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={() => setIsApplyModalOpen(true)} size="lg">
                  Apply Now
                </Button>
                <Button variant="outline" size="lg" onClick={handleShare}>
                  {isShareCopied ? (
                    <>
                      <Check className="w-5 h-5" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Share2 className="w-5 h-5" />
                      Share
                    </>
                  )}
                </Button>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Content */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="text-display-sm font-display font-semibold mb-4">
                  About This Role
                </h2>
                <p className="text-body-lg text-muted leading-relaxed">
                  {role.overview}
                </p>
              </motion.div>

              {/* Responsibilities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-display-sm font-display font-semibold mb-4">
                  What You&apos;ll Do
                </h2>
                <ul className="space-y-3">
                  {role.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-body-md text-muted">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Requirements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-display-sm font-display font-semibold mb-4">
                  What We&apos;re Looking For
                </h2>
                <ul className="space-y-3">
                  {role.requirements.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-body-md text-muted">
                      <Check className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-display-sm font-display font-semibold mb-4">
                  What&apos;s In It For You
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {role.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-surface rounded-lg border border-border"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                      <span className="text-body-md text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Hiring Process */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="text-display-sm font-display font-semibold mb-4">
                  Hiring Process
                </h2>
                <div className="relative">
                  {role.process.map((processStep, index) => (
                    <div key={index} className="flex gap-4 pb-8 last:pb-0">
                      <div className="relative flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center text-body-sm font-medium text-accent">
                          {index + 1}
                        </div>
                        {index < role.process.length - 1 && (
                          <div className="w-px h-full bg-border absolute top-8" />
                        )}
                      </div>
                      <div className="pt-1">
                        <p className="text-body-sm font-medium text-foreground">{processStep.step}</p>
                        <p className="text-body-sm text-muted">{processStep.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Company Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-display-xs font-display font-semibold mb-4">
                      About {role.company}
                    </h3>
                    <p className="text-body-sm text-muted mb-4">
                      {role.companyDescription}
                    </p>
                    <div className="space-y-3 text-body-sm text-muted">
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5" />
                        <span>{role.location}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Briefcase className="w-5 h-5" />
                        <span>{role.workModel} • {role.employmentType}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Skills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-display-xs font-display font-semibold mb-4">
                      Skills & Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {role.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Apply CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card className="border-accent/50 bg-accent/5">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-display-xs font-display font-semibold mb-2">
                      Interested?
                    </h3>
                    <p className="text-body-sm text-muted mb-4">
                      Apply now and we&apos;ll be in touch within 48 hours.
                    </p>
                    <Button
                      onClick={() => setIsApplyModalOpen(true)}
                      className="w-full"
                    >
                      Apply for This Role
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Related Roles */}
          {relatedRoles.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-16 pt-16 border-t border-border"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-display-sm font-display font-semibold">
                  Similar Roles
                </h2>
                <ButtonLink href="/roles" variant="ghost">
                  View all roles
                </ButtonLink>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedRoles.map((relatedRole) => (
                  <Link key={relatedRole.id} href={`/roles/${relatedRole.slug}`}>
                    <Card hover className="h-full">
                      <CardContent className="p-6">
                        <p className="text-body-sm text-accent font-medium mb-1">
                          {relatedRole.company}
                        </p>
                        <h3 className="text-display-xs font-display font-semibold mb-3">
                          {relatedRole.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 text-body-sm text-muted">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {relatedRole.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4" />
                            {formatSalary(relatedRole.salaryMin, relatedRole.salaryMax)}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </Container>
      </Section>

      {/* Apply Modal */}
      <Dialog open={isApplyModalOpen} onOpenChange={setIsApplyModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Apply for {role.title}</DialogTitle>
            <DialogDescription>
              Fill out the form below and we&apos;ll get back to you within 48 hours.
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input label="First Name" name="firstName" required />
              <Input label="Last Name" name="lastName" required />
            </div>
            <Input label="Email" name="email" type="email" required />
            <Input label="Phone" name="phone" type="tel" />
            <Input
              label="LinkedIn Profile"
              name="linkedin"
              placeholder="https://linkedin.com/in/..."
            />
            <Textarea
              label="Why are you interested in this role?"
              name="message"
              rows={4}
            />
            <div className="pt-4">
              <Button type="submit" className="w-full">
                Submit Application
              </Button>
              <p className="text-body-xs text-muted text-center mt-3">
                By submitting, you agree to our privacy policy.
              </p>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
