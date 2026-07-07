'use client'

import Link from 'next/link'
import { ArrowRight, ArrowUpRight, MapPin, Clock } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { ButtonLink } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'
import { Stat } from '@/components/ui/stat'
import { Reveal, Stagger, StaggerItem } from '@/components/ui/reveal'
import { Marquee } from '@/components/ui/marquee'
import { SpecialtyIcon } from '@/components/ui/specialty-icon'
import { siteConfig, roles, specialties, testimonials } from '@/content'
import { formatSalary } from '@/lib/utils'

const placing = [
  'Staff Software Engineer', 'Product Lead', 'Design Systems Lead', 'ML Engineer',
  'Head of Growth', 'Engineering Manager', 'Senior Product Designer', 'Data Scientist',
  'VP Engineering', 'Revenue Operations', 'Frontend Architect', 'Head of Product',
]

const paths = [
  {
    href: '/candidates',
    label: 'For candidates',
    title: 'Find the role you’d actually say yes to.',
    body: 'Vetted, senior opportunities from teams worth your time. We represent you on craft — and keep the search confidential.',
    cta: 'Explore candidates',
  },
  {
    href: '/employers',
    label: 'For employers',
    title: 'Hire the person, not the résumé keyword.',
    body: 'A shortlist of people who can actually do the job — usually inside a week. Boutique attention, backed by a real Canadian network.',
    cta: 'Explore employers',
  },
]

export default function HomePage() {
  const featuredRoles = roles.filter((r) => r.featured).slice(0, 4)
  const [leadQuote, ...restQuotes] = testimonials

  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="bg-grid mask-fade-b pointer-events-none absolute inset-0 opacity-60" aria-hidden />
        <div
          className="pointer-events-none absolute -right-40 -top-24 h-[36rem] w-[36rem] rounded-full opacity-[0.12] blur-[120px]"
          style={{ background: 'radial-gradient(circle, var(--color-accent), transparent 65%)' }}
          aria-hidden
        />
        <Container className="relative">
          <div className="max-w-4xl">
            <Reveal y={12}>
              <Label tick>Tech recruiting · Toronto → Canada</Label>
            </Reveal>
            <h1
              className="rise-in mt-6 text-display-2xl text-ink text-balance"
            >
              The recruiter that
              <br className="hidden sm:block" /> reads the{' '}
              <span className="text-accent">code review</span>.
            </h1>
            <p
              className="rise-in rise-in-d1 mt-7 max-w-xl text-body-lg text-muted text-pretty md:text-body-xl"
            >
              Boutique tech recruiting across Canada. We place senior Product,
              Design, Engineering, Data, and Go-to-Market talent &mdash; matched on
              craft, not keyword.
            </p>
            <div
              className="rise-in rise-in-d2 mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <ButtonLink href="/roles" size="lg">
                Browse open roles
                <ArrowRight className="h-5 w-5" />
              </ButtonLink>
              <ButtonLink href="/employers" variant="secondary" size="lg">
                Hire with us
              </ButtonLink>
            </div>
          </div>

          {/* Stat row */}
          <div
            className="rise-in rise-in-d3 mt-16 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-border pt-10 md:mt-24 md:grid-cols-4"
          >
            {siteConfig.metrics.map((m, i) => (
              <Stat key={m.label} value={m.value} label={m.label} accent={i === 0} />
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- Ticker */}
      <div className="border-y border-border bg-surface/50 py-5">
        <Marquee>
          {placing.map((role) => (
            <span
              key={role}
              className="flex items-center gap-3 text-body-sm text-muted"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              {role}
            </span>
          ))}
        </Marquee>
      </div>

      {/* ---------------------------------------------------------------- Two paths */}
      <Section padding="default">
        <Container>
          <div className="grid gap-px overflow-hidden rounded-card border border-border bg-border md:grid-cols-2">
            {paths.map((p, i) => (
              <Reveal
                key={p.href}
                delay={i * 0.08}
                className="group relative flex flex-col bg-surface p-8 transition-colors hover:bg-surface-2 md:p-12"
              >
                <Label className="mb-8">{p.label}</Label>
                <h2 className="text-display-md text-ink text-balance">{p.title}</h2>
                <p className="mt-4 max-w-md text-body-md text-muted text-pretty">
                  {p.body}
                </p>
                <Link
                  href={p.href}
                  className="mt-8 inline-flex items-center gap-2 text-body-sm font-semibold text-ink transition-colors group-hover:text-accent"
                >
                  {p.cta}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  <span className="absolute inset-0" aria-hidden />
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------------------------------------------------------------- Specialties */}
      <Section background="surface" padding="default">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <Label tick>Where we go deep</Label>
              <h2 className="mt-4 text-display-md md:text-display-lg text-ink text-balance">
                Five disciplines. One market we know cold.
              </h2>
            </div>
            <Link
              href="/specialties"
              className="link-underline shrink-0 text-body-sm font-semibold text-muted hover:text-ink"
            >
              All specialties &rarr;
            </Link>
          </div>

          <div className="mt-12 divide-y divide-border border-y border-border">
            {specialties.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.04}>
                <Link
                  href={`/specialties#${s.slug}`}
                  className="group grid grid-cols-1 items-center gap-4 py-7 transition-colors md:grid-cols-12 md:gap-6"
                >
                  <div className="flex items-center gap-4 md:col-span-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border bg-bg text-muted transition-colors group-hover:border-accent/50 group-hover:text-accent">
                      <SpecialtyIcon name={s.icon} />
                    </span>
                    <span className="text-display-sm font-semibold text-ink transition-colors group-hover:text-accent">
                      {s.name}
                    </span>
                  </div>
                  <p className="text-body-md text-muted text-pretty md:col-span-5">
                    {s.shortDescription}
                  </p>
                  <div className="flex items-center justify-between gap-6 md:col-span-3 md:justify-end">
                    <div className="text-right">
                      <div className="font-mono text-body-sm text-ink">
                        {s.stats.rolesPlaced}
                      </div>
                      <div className="label-mono">placed</div>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-faint transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------------------------------------------------------------- Featured roles */}
      <Section padding="default">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <Label tick>Live search</Label>
              <h2 className="mt-4 text-display-md md:text-display-lg text-ink text-balance">
                Roles open right now.
              </h2>
            </div>
            <ButtonLink href="/roles" variant="secondary" size="sm">
              View all roles
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>

          <Stagger className="mt-12 grid gap-4 md:grid-cols-2">
            {featuredRoles.map((role) => (
              <StaggerItem key={role.id}>
                <Link
                  href={`/roles/${role.slug}`}
                  className="group flex h-full flex-col rounded-card border border-border bg-surface p-6 transition-colors hover:border-border-strong hover:bg-surface-2"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="label-mono text-accent">{role.company}</div>
                      <h3 className="mt-2 text-display-sm font-semibold text-ink">
                        {role.title}
                      </h3>
                    </div>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-faint transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                  </div>
                  <p className="mt-4 line-clamp-2 text-body-md text-muted text-pretty">
                    {role.overview}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-body-sm text-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" /> {role.location}
                    </span>
                    <span className="font-mono text-ink">
                      {formatSalary(role.salaryMin, role.salaryMax)}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-faint">
                      <Clock className="h-4 w-4" /> {role.postedDate}
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* ---------------------------------------------------------------- Proof */}
      <Section background="surface" padding="default">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Label tick>Signal, not spray</Label>
              <blockquote className="mt-6 text-display-md font-semibold text-ink text-balance">
                &ldquo;{leadQuote.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-accent/12 font-mono text-body-sm text-accent ring-1 ring-inset ring-accent/25">
                  {leadQuote.author.charAt(0)}
                </span>
                <span>
                  <span className="block text-body-sm font-medium text-ink">
                    {leadQuote.author}
                  </span>
                  <span className="block text-body-xs text-muted">
                    {leadQuote.role}, {leadQuote.company}
                  </span>
                </span>
              </figcaption>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {restQuotes.slice(0, 4).map((t, i) => (
                <Reveal
                  key={t.id}
                  delay={i * 0.06}
                  className="flex flex-col rounded-card border border-border bg-bg p-6"
                >
                  <Badge variant={t.type === 'employer' ? 'accent' : 'secondary'} size="sm">
                    {t.type === 'employer' ? 'Employer' : 'Candidate'}
                  </Badge>
                  <p className="mt-4 text-body-sm text-muted text-pretty">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="mt-5 text-body-xs text-faint">
                    {t.author} &middot; {t.company}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ---------------------------------------------------------------- CTA */}
      <Section padding="default">
        <Container>
          <Reveal className="relative overflow-hidden rounded-card border border-border bg-surface px-6 py-16 md:px-16 md:py-24">
            <div className="bg-grid mask-fade-b pointer-events-none absolute inset-0 opacity-40" aria-hidden />
            <div
              className="pointer-events-none absolute -bottom-32 -right-16 h-96 w-96 rounded-full opacity-[0.14] blur-[110px]"
              style={{ background: 'radial-gradient(circle, var(--color-accent), transparent 65%)' }}
              aria-hidden
            />
            <div className="relative max-w-2xl">
              <h2 className="text-display-lg text-ink text-balance">
                Your next move deserves a real conversation.
              </h2>
              <p className="mt-5 text-body-lg text-muted text-pretty">
                Hiring or looking &mdash; start with a call, not a form letter. We
                reply to every serious inquiry within one business day.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact" size="lg">
                  Start a conversation
                  <ArrowRight className="h-5 w-5" />
                </ButtonLink>
                <ButtonLink href="/roles" variant="secondary" size="lg">
                  Browse roles
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
