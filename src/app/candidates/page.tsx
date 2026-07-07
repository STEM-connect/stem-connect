import type { Metadata } from 'next'
import {
  ArrowRight,
  ArrowUpRight,
  Lock,
  Compass,
  KeyRound,
  Scale,
  Check,
  DollarSign,
  MessageSquareOff,
} from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { ButtonLink } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Reveal } from '@/components/ui/reveal'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import {
  candidateServices,
  candidateProcess,
  candidateFaqs,
  getTestimonialsByType,
} from '@/content'

export const metadata: Metadata = {
  title: 'For Candidates — Confidential representation for senior tech talent',
  description:
    'Senior Product, Design, Engineering, Data, and Go-to-Market roles in Canada — represented on craft, kept confidential, and never spammed. Free for candidates.',
}

const serviceIcons = [Compass, KeyRound, Scale] as const

const assurances = [
  { icon: DollarSign, label: 'Always free for candidates' },
  { icon: Lock, label: 'Confidential by default' },
  { icon: MessageSquareOff, label: 'Senior roles only — no spray' },
]

export default function CandidatesPage() {
  const testimonials = getTestimonialsByType('candidate')
  const [lead, ...rest] = testimonials

  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <div
          className="bg-grid mask-fade-b pointer-events-none absolute inset-0 opacity-50"
          aria-hidden
        />
        <Container className="relative">
          <div className="max-w-3xl">
            <Label tick>For candidates · confidential by default</Label>
            <h1 className="mt-6 text-display-2xl text-ink text-balance">
              A recruiter who works for{' '}
              <span className="text-accent">you</span> — not the req.
            </h1>
            <p className="mt-7 max-w-xl text-body-lg text-muted text-pretty md:text-body-xl">
              Senior, vetted roles from teams worth your time. We represent you
              on your craft, keep the search quiet, and only reach out when
              something is genuinely worth a look.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/roles" size="lg">
                Browse open roles
                <ArrowRight className="h-5 w-5" />
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary" size="lg">
                Start a confidential chat
              </ButtonLink>
            </div>
          </div>

          {/* Assurance strip — human, not numeric */}
          <div className="mt-14 flex flex-col gap-x-10 gap-y-4 border-t border-border pt-8 sm:flex-row sm:flex-wrap md:mt-20">
            {assurances.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-3 text-body-sm text-muted"
              >
                <Icon className="h-4 w-4 shrink-0 text-accent" strokeWidth={2} aria-hidden />
                {label}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- Representation */}
      <Section background="surface" padding="default">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <Label>What representation means</Label>
                <h2 className="mt-4 text-display-md md:text-display-lg text-ink text-balance">
                  More than matching. We put weight behind you.
                </h2>
                <p className="mt-5 text-body-md text-muted text-pretty">
                  Most recruiters forward a résumé and hope. We take the time to
                  understand your work, then argue your case — on strengths,
                  trajectory, and comp — the whole way through.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <div className="divide-y divide-border border-t border-border">
                {candidateServices.map((service, i) => {
                  const Icon = serviceIcons[i] ?? Compass
                  return (
                    <Reveal key={service.title} delay={i * 0.05}>
                      <div className="grid gap-5 py-8 md:grid-cols-12 md:gap-8">
                        <div className="flex items-center gap-4 md:col-span-4 md:items-start">
                          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border bg-bg text-muted">
                            <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                          </span>
                          <h3 className="text-display-sm text-ink">
                            {service.title}
                          </h3>
                        </div>
                        <div className="md:col-span-8">
                          <p className="text-body-md text-muted text-pretty">
                            {service.description}
                          </p>
                          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                            {service.features.map((feature) => (
                              <li
                                key={feature}
                                className="inline-flex items-center gap-2 text-body-sm text-muted"
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
                        </div>
                      </div>
                    </Reveal>
                  )
                })}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ---------------------------------------------------------------- Confidentiality band */}
      <Section padding="small">
        <Container>
          <Reveal className="relative overflow-hidden rounded-card border border-border bg-surface px-6 py-12 md:px-14 md:py-16">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full opacity-[0.10] blur-[100px]"
              style={{ background: 'radial-gradient(circle, var(--color-accent), transparent 65%)' }}
              aria-hidden
            />
            <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-accent/12 text-accent ring-1 ring-inset ring-accent/25">
                <Lock className="h-6 w-6" strokeWidth={1.75} aria-hidden />
              </span>
              <div className="max-w-2xl">
                <h2 className="text-display-md text-ink text-balance">
                  Looking while employed? Nothing moves without your word.
                </h2>
                <p className="mt-4 text-body-md text-muted text-pretty">
                  Your profile is never shared without explicit permission, and
                  we never contact your current employer. A quiet conversation
                  today costs you nothing and commits you to nothing.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ---------------------------------------------------------------- Process (journey) */}
      <Section background="surface" padding="default">
        <Container>
          <div className="max-w-2xl">
            <Label tick>The journey, start to offer</Label>
            <h2 className="mt-4 text-display-md md:text-display-lg text-ink text-balance">
              Five steps. You always know where you stand.
            </h2>
          </div>

          <div className="mt-12 border-t border-border">
            {candidateProcess.map((step, i) => (
              <Reveal
                key={step.step}
                delay={i * 0.04}
                className="grid grid-cols-1 gap-3 border-b border-border py-8 md:grid-cols-12 md:gap-8"
              >
                <div className="md:col-span-2">
                  <span className="font-mono text-body-sm text-accent">
                    {String(step.step).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-display-sm text-ink md:col-span-4">
                  {step.title}
                </h3>
                <p className="text-body-md text-muted text-pretty md:col-span-6">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------------------------------------------------------------- Testimonials */}
      <Section padding="default">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Label>From people we&rsquo;ve placed</Label>
              <blockquote className="mt-6 text-display-md font-semibold text-ink text-balance">
                &ldquo;{lead.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-accent/12 font-mono text-body-sm text-accent ring-1 ring-inset ring-accent/25">
                  {lead.author.charAt(0)}
                </span>
                <span>
                  <span className="block text-body-sm font-medium text-ink">
                    {lead.author}
                  </span>
                  <span className="block text-body-xs text-muted">
                    {lead.role}, {lead.company}
                  </span>
                </span>
              </figcaption>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {rest.map((t, i) => (
                <Reveal
                  key={t.id}
                  delay={i * 0.06}
                  className="flex flex-col rounded-card border border-border bg-surface p-6"
                >
                  <p className="text-body-sm text-muted text-pretty">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="mt-5 text-body-xs text-faint">
                    {t.author} &middot; {t.role}, {t.company}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ---------------------------------------------------------------- FAQ */}
      <Section background="surface" padding="default">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Label tick>Questions candidates ask</Label>
              <h2 className="mt-4 text-display-md md:text-display-lg text-ink text-balance">
                Straight answers, before you commit anything.
              </h2>
              <p className="mt-5 text-body-md text-muted text-pretty">
                Still unsure? A no-pressure conversation is the fastest way to
                find out if we&rsquo;re worth your time.
              </p>
              <ButtonLink href="/contact" variant="secondary" className="mt-8">
                Ask us directly
                <ArrowUpRight className="h-4 w-4" />
              </ButtonLink>
            </div>

            <div className="lg:col-span-7">
              <Accordion type="single" collapsible>
                {candidateFaqs.map((faq) => (
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
                Your next move deserves an advocate.
              </h2>
              <p className="mt-5 text-body-lg text-muted text-pretty">
                Actively looking or just curious — start with a real
                conversation. Confidential, no obligation, and free for you.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact" size="lg">
                  Start a conversation
                  <ArrowRight className="h-5 w-5" />
                </ButtonLink>
                <ButtonLink href="/roles" variant="secondary" size="lg">
                  Browse open roles
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
