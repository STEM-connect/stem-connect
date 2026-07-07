import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { ButtonLink } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Reveal } from '@/components/ui/reveal'
import { insights } from '@/content'
import { formatDate } from '@/lib/utils'

export const metadata = {
  title: 'Insights — Stem Connect',
  description:
    'Field notes on Canadian tech hiring: compensation data, market outlooks, and practical advice for candidates and hiring teams.',
}

export default function InsightsPage() {
  const [lead, ...rest] = insights

  return (
    <>
      {/* ---------------------------------------------------------------- Header */}
      <section className="relative overflow-hidden border-b border-border bg-surface pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="bg-grid mask-fade-b pointer-events-none absolute inset-0 opacity-50" aria-hidden />
        <Container className="relative">
          <Reveal className="max-w-3xl">
            <Label tick>Field notes · Canadian tech hiring</Label>
            <h1 className="mt-6 text-display-xl md:text-display-2xl text-ink text-balance">
              What we&apos;re seeing in the market.
            </h1>
            <p className="mt-6 max-w-2xl text-body-lg text-muted text-pretty md:text-body-xl">
              Compensation data, hiring outlooks, and hard-won advice &mdash;
              written by the people running the searches, not a content team.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- Featured lead */}
      <Section padding="default">
        <Container>
          <Reveal>
            <Link
              href={`/insights/${lead.slug}`}
              className="group block rounded-card border border-border bg-surface p-8 transition-[border-color,background-color] duration-300 hover:border-border-strong hover:bg-surface-2 md:p-12"
            >
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="label-mono text-accent">{lead.category}</span>
                <span className="label-mono text-faint">
                  Latest &middot; {lead.readTime}
                </span>
              </div>

              <h2 className="mt-6 max-w-3xl text-display-lg text-ink text-balance transition-colors group-hover:text-accent">
                {lead.title}
              </h2>

              <p className="mt-5 max-w-2xl text-body-lg text-muted text-pretty">
                {lead.excerpt}
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
                <span className="text-body-sm text-muted">
                  {lead.author}
                  <span className="text-faint"> &middot; {formatDate(lead.publishedAt)}</span>
                </span>
                <span className="inline-flex items-center gap-2 text-body-sm font-semibold text-ink transition-colors group-hover:text-accent">
                  Read article
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </Reveal>
        </Container>
      </Section>

      {/* ---------------------------------------------------------------- The rest */}
      <Section background="surface" padding="default">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <Label tick>More reading</Label>
              <h2 className="mt-4 text-display-md md:text-display-lg text-ink text-balance">
                Everything else worth your time.
              </h2>
            </div>
            <ButtonLink href="/contact" variant="secondary" size="sm">
              Talk to us
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>

          <div className="mt-12 divide-y divide-border border-y border-border">
            {rest.map((post) => (
              <Reveal key={post.id}>
                <Link
                  href={`/insights/${post.slug}`}
                  className="group grid grid-cols-1 items-baseline gap-x-8 gap-y-3 py-8 md:grid-cols-12"
                >
                  <div className="md:col-span-3">
                    <div className="label-mono text-faint">{post.category}</div>
                    <div className="mt-2 hidden font-mono text-body-xs text-faint md:block">
                      {formatDate(post.publishedAt)} · {post.readTime}
                    </div>
                  </div>

                  <div className="md:col-span-8">
                    <h3 className="text-display-sm font-semibold text-ink transition-colors group-hover:text-accent">
                      {post.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-body-md text-muted text-pretty">
                      {post.excerpt}
                    </p>
                    <div className="mt-3 text-body-xs text-faint md:hidden">
                      {post.author} · {post.readTime}
                    </div>
                    <div className="mt-3 hidden text-body-xs text-faint md:block">
                      {post.author}
                    </div>
                  </div>

                  <div className="flex justify-end md:col-span-1">
                    <ArrowUpRight className="h-5 w-5 text-faint transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------------------------------------------------------------- CTA */}
      <Section padding="default">
        <Container>
          <Reveal className="relative overflow-hidden rounded-card border border-border bg-surface px-6 py-16 md:px-16 md:py-20">
            <div className="bg-grid mask-fade-b pointer-events-none absolute inset-0 opacity-40" aria-hidden />
            <div
              className="pointer-events-none absolute -bottom-32 -right-16 h-96 w-96 rounded-full opacity-[0.14] blur-[110px]"
              style={{ background: 'radial-gradient(circle, var(--color-accent), transparent 65%)' }}
              aria-hidden
            />
            <div className="relative max-w-2xl">
              <h2 className="text-display-lg text-ink text-balance">
                Reading the market is one thing. Moving in it is another.
              </h2>
              <p className="mt-5 text-body-lg text-muted text-pretty">
                Hiring or looking &mdash; start with a real conversation. We reply
                to every serious inquiry within one business day.
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
