import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { ButtonLink } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Stat } from '@/components/ui/stat'
import { Reveal } from '@/components/ui/reveal'
import { siteConfig } from '@/content'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Stem Connect is a boutique Canadian tech recruiting firm built on signal, not volume. Founded in Toronto in 2019, we place senior Product, Design, Engineering, Data, and Go-to-Market talent across Canada.',
}

const values = [
  {
    name: 'Quality over quantity',
    body: "We don't blast résumés. Every person we present has been interviewed by us and matched on craft — a short list you can actually read, not a stack you have to sort.",
  },
  {
    name: 'Long-term relationships',
    body: "We're not optimizing for a single fee. We build careers and teams that hold up over years, which means telling you when a role — or a candidate — isn't the right one.",
  },
  {
    name: 'Market expertise',
    body: 'We work Canadian tech every day and we know it cold: the companies, the comp, the difference between a seed-stage PM and one at a public company. Fluency you can feel in the first call.',
  },
  {
    name: 'Transparent communication',
    body: 'No games, no ghosting, no keyword theatre. Candidates and clients hear where things actually stand at every stage — including the parts that are inconvenient to say.',
  },
]

const timeline = [
  {
    year: '2019',
    title: 'Founded in Toronto',
    body: 'Started with a simple bet: senior tech people would rather work with a recruiter who understands the craft than one who understands the keyword.',
  },
  {
    year: '2020',
    title: 'Built for remote',
    body: 'When hiring went distributed overnight, we helped Canadian teams staff remote-first without lowering the bar.',
  },
  {
    year: '2021',
    title: '100th placement',
    body: 'Crossed a hundred hires and deepened coverage across all five disciplines — Product, Design, Engineering, Data, and Go-to-Market.',
  },
  {
    year: '2023',
    title: 'Executive search',
    body: 'Added a dedicated leadership practice, placing directors, VPs, and founding hires at startups and scale-ups.',
  },
  {
    year: '2024',
    title: 'Recognized in the GTA',
    body: 'Named among the top boutique tech recruiting firms in the Greater Toronto Area — boutique by design, not by default.',
  },
  {
    year: 'Now',
    title: '200+ placed, expanding nationwide',
    body: '200+ placements and 50+ partner companies, rooted in the GTA and hiring across Canada. Still boutique. Still just getting started.',
    current: true,
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="bg-grid mask-fade-b pointer-events-none absolute inset-0 opacity-50" aria-hidden />
        <Container className="relative">
          <div className="max-w-4xl">
            <Reveal>
              <Label tick>Est. 2019 · Toronto → Canada</Label>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 text-display-2xl text-ink text-balance">
                Recruiting built on{' '}
                <span className="text-accent">signal</span>, not volume.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-2xl text-body-lg text-muted text-pretty md:text-body-xl">
                We started Stem Connect because tech deserved better than the
                spray-and-pray agency model. Not another pipeline of keyword
                matches — a boutique partner that reads the work, knows the
                market, and represents senior people on craft.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- Values */}
      <Section padding="default">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <Label>What we hold to</Label>
                <h2 className="mt-4 text-display-md md:text-display-lg text-ink text-balance">
                  Four things we refuse to compromise.
                </h2>
                <p className="mt-5 max-w-md text-body-md text-muted text-pretty">
                  In an industry known for churn, these are the standards that
                  decide who we work with and how.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <div className="divide-y divide-border border-y border-border">
                {values.map((v) => (
                  <Reveal
                    key={v.name}
                    className="grid gap-3 py-8 md:grid-cols-12 md:gap-8"
                  >
                    <h3 className="text-display-sm font-semibold text-ink md:col-span-5 text-balance">
                      {v.name}
                    </h3>
                    <p className="text-body-md text-muted text-pretty md:col-span-7">
                      {v.body}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ---------------------------------------------------------------- Timeline */}
      <Section background="surface" padding="default">
        <Container>
          <div className="max-w-xl">
            <Reveal>
              <Label tick>The short history</Label>
              <h2 className="mt-4 text-display-md md:text-display-lg text-ink text-balance">
                From a Toronto bet to 200+ placements.
              </h2>
            </Reveal>
          </div>

          <ol className="mt-14 border-t border-border">
            {timeline.map((item) => (
              <Reveal key={item.year}>
                <li className="group grid grid-cols-1 gap-4 border-b border-border py-8 md:grid-cols-12 md:gap-8">
                  <div className="flex items-center gap-3 md:col-span-3">
                    <span
                      className={
                        item.current
                          ? 'h-2.5 w-2.5 shrink-0 rounded-full bg-accent'
                          : 'h-2.5 w-2.5 shrink-0 rounded-full border border-border-strong bg-bg'
                      }
                      aria-hidden
                    />
                    <span
                      className={
                        item.current
                          ? 'font-mono text-body-md font-medium text-accent'
                          : 'font-mono text-body-md text-ink'
                      }
                    >
                      {item.year}
                    </span>
                  </div>
                  <h3 className="text-display-sm font-semibold text-ink md:col-span-4 text-balance">
                    {item.title}
                  </h3>
                  <p className="text-body-md text-muted text-pretty md:col-span-5">
                    {item.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      {/* ---------------------------------------------------------------- Metrics */}
      <Section padding="default">
        <Container>
          <Reveal>
            <Label>By the numbers</Label>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-border pt-10 md:grid-cols-4">
            {siteConfig.metrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.05}>
                <Stat value={m.value} label={m.label} accent={i === 0} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------------------------------------------------------------- Coverage */}
      <Section background="surface" padding="default">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <Label tick>Where we work</Label>
                <h2 className="mt-4 text-display-md md:text-display-lg text-ink text-balance">
                  Rooted in the GTA. Hiring across Canada.
                </h2>
                <p className="mt-5 max-w-md text-body-md text-muted text-pretty">
                  Our home base is Toronto&apos;s tech corridor, but the network
                  runs national — from Vancouver to Halifax, remote-first or
                  on-site. If the talent is here, we know how to find it.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal>
                <ul className="flex flex-wrap gap-2.5">
                  {siteConfig.serviceAreas.map((area) => (
                    <li
                      key={area}
                      className="rounded-full border border-border bg-bg px-3.5 py-1.5 font-mono text-body-xs text-muted"
                    >
                      {area}
                    </li>
                  ))}
                </ul>
              </Reveal>
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
                Let&apos;s make your next hire — or next move — count.
              </h2>
              <p className="mt-5 text-body-lg text-muted text-pretty">
                Hiring or looking, it starts with a real conversation. We reply
                to every serious inquiry within one business day.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/employers" size="lg">
                  I&apos;m hiring
                  <ArrowRight className="h-5 w-5" />
                </ButtonLink>
                <ButtonLink href="/candidates" variant="secondary" size="lg">
                  I&apos;m looking
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
