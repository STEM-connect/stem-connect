import type { Metadata } from 'next'
import {
  ArrowRight,
  ArrowUpRight,
  Zap,
  Target,
  Gem,
  ShieldCheck,
  Check,
} from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { ButtonLink } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Stat } from '@/components/ui/stat'
import { Label } from '@/components/ui/label'
import { Reveal } from '@/components/ui/reveal'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import {
  employerServices,
  employerProcess,
  employerFaqs,
  getTestimonialsByType,
  siteConfig,
} from '@/content'

export const metadata: Metadata = {
  title: 'For Employers — A shortlist in 5–7 days, not weeks',
  description:
    'Boutique tech recruiting for Canadian startups and scale-ups. A curated shortlist of people who can do the job — usually in 5–7 days — backed by a 90-day guarantee.',
}

const whyUs = [
  {
    icon: Zap,
    title: 'Shortlist in 5–7 days',
    description:
      'We activate a live network the day we kick off. You see qualified people in a week, not a month of empty updates.',
  },
  {
    icon: Target,
    title: 'Signal, not volume',
    description:
      'Every candidate is personally interviewed and assessed against the actual role. We send three you should meet — not thirty to sort.',
  },
  {
    icon: Gem,
    title: 'Boutique by design',
    description:
      'A small book of clients means senior attention on your search — not a junior working twelve reqs at once.',
  },
  {
    icon: ShieldCheck,
    title: 'Backed by a guarantee',
    description:
      'Permanent placements carry a 90-day replacement guarantee. If the fit isn’t right, we make it right.',
  },
]

// Retained Search is the boutique core — the single emphasised tier.
const FEATURED_TIER = 'Retained Search'

export default function EmployersPage() {
  const testimonials = getTestimonialsByType('employer').slice(0, 3)

  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <div
          className="bg-grid mask-fade-b pointer-events-none absolute inset-0 opacity-50"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-40 -top-24 h-[34rem] w-[34rem] rounded-full opacity-[0.12] blur-[120px]"
          style={{ background: 'radial-gradient(circle, var(--color-accent), transparent 65%)' }}
          aria-hidden
        />
        <Container className="relative">
          <div className="max-w-3xl">
            <Label tick>For employers · Toronto → Canada</Label>
            <h1 className="mt-6 text-display-2xl text-ink text-balance">
              A shortlist worth interviewing —{' '}
              <span className="text-accent">in 5–7 days</span>.
            </h1>
            <p className="mt-7 max-w-xl text-body-lg text-muted text-pretty md:text-body-xl">
              Boutique tech recruiting for Canadian startups and scale-ups. We
              move fast without spraying — a curated few who can actually do the
              job, backed by a real network and a 90-day guarantee.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" size="lg">
                Start a search
                <ArrowRight className="h-5 w-5" />
              </ButtonLink>
              <ButtonLink href="/roles" variant="secondary" size="lg">
                See who we place
              </ButtonLink>
            </div>
          </div>

          {/* Numeric proof band */}
          <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-border pt-10 md:mt-20 md:grid-cols-4">
            {siteConfig.metrics.map((m, i) => (
              <Stat key={m.label} value={m.value} label={m.label} accent={i === 2} />
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- Why us (benefit band) */}
      <Section background="surface" padding="default">
        <Container>
          <div className="max-w-2xl">
            <Label>Why teams pick a boutique</Label>
            <h2 className="mt-4 text-display-md md:text-display-lg text-ink text-balance">
              High-volume agencies optimise for reqs. We optimise for your hire.
            </h2>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-card border border-border bg-border sm:grid-cols-2">
            {whyUs.map(({ icon: Icon, title, description }, i) => (
              <Reveal
                key={title}
                delay={i * 0.05}
                className="flex flex-col gap-4 bg-surface p-8 md:p-10"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full border border-border bg-bg text-muted">
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="text-display-sm text-ink">{title}</h3>
                <p className="text-body-md text-muted text-pretty">{description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------------------------------------------------------------- Engagement models (service tiers) */}
      <Section padding="default">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <Label tick>Engagement models</Label>
              <h2 className="mt-4 text-display-md md:text-display-lg text-ink text-balance">
                Pick the model that fits the hire.
              </h2>
            </div>
            <p className="max-w-sm text-body-sm text-muted text-pretty md:text-right">
              From a single transformative leader to flexible project capacity —
              we scope the engagement to the stakes.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {employerServices.map((service, i) => {
              const featured = service.title === FEATURED_TIER
              return (
                <Reveal
                  key={service.title}
                  delay={i * 0.05}
                  className={
                    featured
                      ? 'relative flex h-full flex-col rounded-card border border-accent/40 bg-surface p-8 ring-1 ring-inset ring-accent/20'
                      : 'relative flex h-full flex-col rounded-card border border-border bg-surface p-8'
                  }
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-display-sm text-ink">{service.title}</h3>
                    {featured && (
                      <Badge variant="accent" size="sm">
                        Our core
                      </Badge>
                    )}
                  </div>
                  <p className="mt-4 text-body-md text-muted text-pretty">
                    {service.description}
                  </p>
                  <ul className="mt-6 grid gap-2.5 border-t border-border pt-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="inline-flex items-center gap-2.5 text-body-sm text-muted"
                      >
                        <Check
                          className="h-4 w-4 shrink-0 text-accent"
                          strokeWidth={2.25}
                          aria-hidden
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* ---------------------------------------------------------------- Process (fast rail) */}
      <Section background="surface" padding="default">
        <Container>
          <div className="max-w-2xl">
            <Label>How a search runs</Label>
            <h2 className="mt-4 text-display-md md:text-display-lg text-ink text-balance">
              Kickoff to signed offer, without the black box.
            </h2>
          </div>

          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {employerProcess.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.05} className="relative flex flex-col">
                {i < employerProcess.length - 1 && (
                  <span
                    className="pointer-events-none absolute left-11 top-4 hidden h-px w-full bg-border lg:block"
                    aria-hidden
                  />
                )}
                <span className="relative z-10 grid h-8 w-8 place-items-center rounded-full border border-border-strong bg-bg font-mono text-body-xs text-accent">
                  {String(step.step).padStart(2, '0')}
                </span>
                <h3 className="mt-5 text-display-sm text-ink">{step.title}</h3>
                <p className="mt-2 text-body-sm text-muted text-pretty">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      {/* ---------------------------------------------------------------- Testimonials */}
      <Section padding="default">
        <Container>
          <div className="max-w-2xl">
            <Label tick>What clients say</Label>
            <h2 className="mt-4 text-display-md md:text-display-lg text-ink text-balance">
              Teams that hire with us, hire again.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal
                key={t.id}
                delay={i * 0.06}
                className="flex h-full flex-col rounded-card border border-border bg-surface p-6"
              >
                <blockquote className="text-body-md text-ink text-pretty">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-6">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-accent/12 font-mono text-body-xs text-accent ring-1 ring-inset ring-accent/25">
                    {t.author.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-body-sm font-medium text-ink">
                      {t.author}
                    </span>
                    <span className="block text-body-xs text-muted">
                      {t.role}, {t.company}
                    </span>
                  </span>
                </figcaption>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------------------------------------------------------------- FAQ */}
      <Section background="surface" padding="default">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Label tick>Questions employers ask</Label>
              <h2 className="mt-4 text-display-md md:text-display-lg text-ink text-balance">
                The details, before you brief us.
              </h2>
              <p className="mt-5 text-body-md text-muted text-pretty">
                Have a specific role in mind? Tell us the shape of the hire and
                we&rsquo;ll tell you exactly how we&rsquo;d run it.
              </p>
              <ButtonLink href="/contact" variant="secondary" className="mt-8">
                Brief us on a role
                <ArrowUpRight className="h-4 w-4" />
              </ButtonLink>
            </div>

            <div className="lg:col-span-7">
              <Accordion type="single" collapsible>
                {employerFaqs.map((faq) => (
                  <AccordionItem key={faq.question} value={faq.question}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
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
                Your next critical hire, moving this week.
              </h2>
              <p className="mt-5 text-body-lg text-muted text-pretty">
                Tell us what you&rsquo;re building and who you need. No obligation
                — just a sharp conversation and, if it&rsquo;s a fit, a shortlist
                in days.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact" size="lg">
                  Start a search
                  <ArrowRight className="h-5 w-5" />
                </ButtonLink>
                <ButtonLink href="/roles" variant="secondary" size="lg">
                  See who we place
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
