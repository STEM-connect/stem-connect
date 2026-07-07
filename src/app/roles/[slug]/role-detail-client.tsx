'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Check,
  Share2,
} from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Button, ButtonLink } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'
import { Reveal } from '@/components/ui/reveal'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  siteConfig,
  getWorkModelLabel,
  getEmploymentTypeLabel,
} from '@/content'
import { formatSalary, formatDate, copyToClipboard } from '@/lib/utils'
import type { Role, SpecialtyType } from '@/content'

const specialtyLabels: Record<SpecialtyType, string> = {
  product: 'Product',
  design: 'Design',
  engineering: 'Engineering',
  data: 'Data',
  'go-to-market': 'Go-to-Market',
}

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

  const openApply = () => setIsApplyModalOpen(true)

  const facts = [
    { label: 'Compensation', value: formatSalary(role.salaryMin, role.salaryMax), accent: true },
    { label: 'Location', value: role.location },
    { label: 'Employment', value: getEmploymentTypeLabel(role.employmentType) },
    { label: 'Arrangement', value: getWorkModelLabel(role.workModel) },
  ]

  return (
    <>
      {/* ---------------------------------------------------------------- Header */}
      <section className="relative overflow-hidden border-b border-border bg-surface pt-32 pb-14 md:pt-36 md:pb-16">
        <div className="bg-grid mask-fade-b pointer-events-none absolute inset-0 opacity-50" aria-hidden />
        <div
          className="pointer-events-none absolute -right-32 -top-20 h-[30rem] w-[30rem] rounded-full opacity-[0.10] blur-[120px]"
          style={{ background: 'radial-gradient(circle, var(--color-accent), transparent 65%)' }}
          aria-hidden
        />
        <Container className="relative">
          <div className="rise-in">
            <Link
              href="/roles"
              className="group inline-flex items-center gap-2 text-body-sm font-medium text-muted transition-colors hover:text-ink"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              All open roles
            </Link>
          </div>

          <div className="mt-10 grid gap-y-8 lg:grid-cols-12 lg:gap-x-12">
            <div
              className="rise-in rise-in-d1 lg:col-span-8"
            >
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="label-mono text-accent">{role.company}</span>
                <span className="label-mono text-faint">
                  {specialtyLabels[role.specialty]} &middot; Posted {formatDate(role.postedDate)}
                </span>
                {role.featured && (
                  <Badge variant="outline" size="sm">
                    Featured search
                  </Badge>
                )}
              </div>

              <h1 className="mt-5 text-display-lg md:text-display-xl text-ink text-balance">
                {role.title}
              </h1>

              <p className="mt-6 max-w-2xl text-body-lg text-muted text-pretty">
                {role.overview}
              </p>
            </div>

            {/* Action rail */}
            <div
              className="rise-in rise-in-d2 flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-stretch"
            >
              <Button onClick={openApply} size="lg" className="sm:flex-1 lg:flex-none">
                Apply for this role
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="secondary" size="lg" onClick={handleShare} className="sm:flex-1 lg:flex-none">
                {isShareCopied ? (
                  <>
                    <Check className="h-5 w-5 text-accent" />
                    Link copied
                  </>
                ) : (
                  <>
                    <Share2 className="h-5 w-5" />
                    Share role
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Key facts */}
          <dl
            className="rise-in rise-in-d3 mt-12 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-border pt-8 sm:grid-cols-4"
          >
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="label-mono">{f.label}</dt>
                <dd
                  className={
                    f.accent
                      ? 'mt-2 font-mono text-body-md text-accent'
                      : 'mt-2 text-body-md text-ink'
                  }
                >
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- Body */}
      <Section padding="default">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Main column */}
            <div className="lg:col-span-8">
              <div className="divide-y divide-border">
                {/* Responsibilities */}
                <Reveal className="pb-12">
                  <h2 className="text-display-sm text-ink">What you&apos;ll own</h2>
                  <ul className="mt-6 space-y-4">
                    {role.responsibilities.map((item) => (
                      <li key={item} className="flex gap-4">
                        <span className="mt-3 h-px w-4 shrink-0 bg-border-strong" aria-hidden />
                        <span className="text-body-md text-muted text-pretty">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>

                {/* Requirements */}
                <Reveal className="py-12">
                  <h2 className="text-display-sm text-ink">What we&apos;re looking for</h2>
                  <ul className="mt-6 space-y-4">
                    {role.requirements.map((item) => (
                      <li key={item} className="flex gap-4">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-muted" aria-hidden />
                        <span className="text-body-md text-muted text-pretty">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>

                {/* Nice to have */}
                {role.niceToHave.length > 0 && (
                  <Reveal className="py-12">
                    <h2 className="text-display-sm text-ink">Bonus points</h2>
                    <p className="mt-2 text-body-sm text-faint">
                      Not required &mdash; but they&apos;ll help you stand out.
                    </p>
                    <ul className="mt-6 space-y-4">
                      {role.niceToHave.map((item) => (
                        <li key={item} className="flex gap-4">
                          <span className="mt-3 h-px w-4 shrink-0 bg-border" aria-hidden />
                          <span className="text-body-md text-muted text-pretty">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                )}

                {/* Benefits */}
                <Reveal className="py-12">
                  <h2 className="text-display-sm text-ink">What&apos;s on offer</h2>
                  <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                    {role.benefits.map((benefit) => (
                      <li key={benefit} className="flex gap-4">
                        <span className="mt-3 h-px w-4 shrink-0 bg-border-strong" aria-hidden />
                        <span className="text-body-md text-ink text-pretty">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>

                {/* Interview process — a genuine ordered sequence */}
                <Reveal className="pt-12">
                  <div className="flex items-baseline justify-between gap-4">
                    <h2 className="text-display-sm text-ink">The interview process</h2>
                    <span className="label-mono shrink-0">{role.process.length} steps</span>
                  </div>
                  <ol className="mt-8">
                    {role.process.map((step, index) => (
                      <li key={step.step} className="relative flex gap-5 pb-8 last:pb-0">
                        <div className="relative flex flex-col items-center">
                          <span className="z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-bg font-mono text-body-sm text-accent">
                            {index + 1}
                          </span>
                          {index < role.process.length - 1 && (
                            <span
                              className="absolute top-9 bottom-0 w-px bg-border"
                              aria-hidden
                            />
                          )}
                        </div>
                        <div className="pt-1 pb-1">
                          <p className="text-body-md font-medium text-ink">{step.step}</p>
                          <p className="mt-1 text-body-sm text-muted text-pretty">
                            {step.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </Reveal>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="flex flex-col gap-8 lg:sticky lg:top-28">
                {/* Company */}
                <Reveal>
                  <Label className="mb-4">About the company</Label>
                  <h3 className="text-display-sm text-ink">{role.company}</h3>
                  <p className="mt-4 text-body-sm text-muted text-pretty">
                    {role.companyDescription}
                  </p>
                  <dl className="mt-6 space-y-3 border-t border-border pt-6 text-body-sm">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-faint" aria-hidden />
                      <dd className="text-muted">{role.location}</dd>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="label-mono mt-0.5 shrink-0 text-faint">/</span>
                      <dd className="text-muted">
                        {getWorkModelLabel(role.workModel)} &middot;{' '}
                        {getEmploymentTypeLabel(role.employmentType)}
                      </dd>
                    </div>
                  </dl>
                </Reveal>

                {/* Skills */}
                <Reveal>
                  <Label className="mb-4">Skills &amp; focus</Label>
                  <div className="flex flex-wrap gap-2">
                    {role.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Reveal>

                {/* Apply CTA */}
                <Reveal>
                  <div className="rounded-card border border-border bg-surface-2 p-6">
                    <h3 className="text-display-sm text-ink text-balance">
                      Think this is you?
                    </h3>
                    <p className="mt-3 text-body-sm text-muted text-pretty">
                      We represent you on craft, keep the search confidential, and reply
                      to every serious applicant within one business day.
                    </p>
                    <Button onClick={openApply} size="lg" className="mt-6 w-full">
                      Apply now
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                    <p className="mt-4 text-center text-body-xs text-faint">
                      Prefer to talk first?{' '}
                      <Link href="/contact" className="link-underline text-muted hover:text-ink">
                        Start a conversation
                      </Link>
                    </p>
                  </div>
                </Reveal>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      {/* ---------------------------------------------------------------- Related roles */}
      {relatedRoles.length > 0 && (
        <Section background="surface" padding="default">
          <Container>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-xl">
                <Label tick>More in {specialtyLabels[role.specialty]}</Label>
                <h2 className="mt-4 text-display-md text-ink text-balance">
                  Other roles worth a look.
                </h2>
              </div>
              <ButtonLink href="/roles" variant="secondary" size="sm">
                View all roles
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>

            <div className="mt-12 divide-y divide-border border-y border-border">
              {relatedRoles.map((related) => (
                <Reveal key={related.id}>
                  <Link
                    href={`/roles/${related.slug}`}
                    className="group grid grid-cols-1 items-center gap-3 py-6 md:grid-cols-12 md:gap-6"
                  >
                    <div className="md:col-span-5">
                      <div className="label-mono text-accent">{related.company}</div>
                      <h3 className="mt-1.5 text-display-sm font-semibold text-ink transition-colors group-hover:text-accent">
                        {related.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-body-sm text-muted md:col-span-4">
                      <MapPin className="h-4 w-4 text-faint" aria-hidden />
                      {related.location}
                    </div>
                    <div className="flex items-center justify-between gap-4 md:col-span-3 md:justify-end">
                      <span className="font-mono text-body-sm text-ink">
                        {formatSalary(related.salaryMin, related.salaryMax)}
                      </span>
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-faint transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* ---------------------------------------------------------------- Apply modal */}
      <Dialog open={isApplyModalOpen} onOpenChange={setIsApplyModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Apply for {role.title}</DialogTitle>
            <DialogDescription>
              A real person reads every application. We&apos;ll reply within one business day.
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input label="First name" name="firstName" required />
              <Input label="Last name" name="lastName" required />
            </div>
            <Input label="Email" name="email" type="email" required />
            <Input label="Phone" name="phone" type="tel" />
            <Input
              label="LinkedIn profile"
              name="linkedin"
              placeholder="https://linkedin.com/in/..."
            />
            <Textarea
              label="Why this role?"
              name="message"
              rows={4}
              placeholder="A few lines on why this one caught your eye."
            />
            <div className="pt-2">
              <Button type="submit" className="w-full">
                Submit application
                <ArrowRight className="h-4 w-4" />
              </Button>
              <p className="mt-3 text-center text-body-xs text-faint">
                By submitting, you agree to our privacy policy.
              </p>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
