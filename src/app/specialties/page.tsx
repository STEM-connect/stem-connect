'use client'

import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { ButtonLink } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Reveal } from '@/components/ui/reveal'
import { SpecialtyIcon } from '@/components/ui/specialty-icon'
import { specialties, roles } from '@/content'

export default function SpecialtiesPage() {
  const openBySlug = (slug: string) =>
    roles.filter((r) => r.specialty === slug).length

  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="bg-grid mask-fade-b pointer-events-none absolute inset-0 opacity-50" aria-hidden />
        <div
          className="pointer-events-none absolute -right-40 -top-24 h-[34rem] w-[34rem] rounded-full opacity-[0.10] blur-[120px]"
          style={{ background: 'radial-gradient(circle, var(--color-accent), transparent 65%)' }}
          aria-hidden
        />
        <Container className="relative">
          <div className="max-w-3xl">
            <Reveal y={12}>
              <Label tick>Where we go deep</Label>
            </Reveal>
            <h1
              className="rise-in mt-6 text-display-xl md:text-display-2xl text-ink text-balance"
            >
              Five disciplines. One market we
              <br className="hidden sm:block" /> know <span className="text-accent">cold</span>.
            </h1>
            <p
              className="rise-in rise-in-d1 mt-7 max-w-xl text-body-lg text-muted text-pretty md:text-body-xl"
            >
              We don&apos;t recruit for everything. We go deep on the five functions
              that decide whether a tech company ships &mdash; and we know the
              Canadian talent in each of them by name.
            </p>
          </div>

          {/* Jump nav — a real navigational sequence, not scaffolding */}
          <nav
            aria-label="Jump to a specialty"
            className="rise-in rise-in-d2 mt-12 flex flex-wrap gap-2 border-t border-border pt-8"
          >
            {specialties.map((s) => (
              <Link
                key={s.slug}
                href={`#${s.slug}`}
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-body-sm text-muted transition-colors hover:border-border-strong hover:bg-surface-2 hover:text-ink"
              >
                <SpecialtyIcon name={s.icon} className="h-4 w-4 text-faint transition-colors group-hover:text-accent" />
                {s.name}
              </Link>
            ))}
          </nav>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- Specialties */}
      {specialties.map((s, i) => {
        const open = openBySlug(s.slug)
        const flip = i % 2 === 1
        return (
          <Section
            key={s.id}
            id={s.slug}
            background={flip ? 'surface' : 'default'}
            padding="default"
            className="scroll-mt-24 border-t border-border"
          >
            <Container>
              <Reveal className="grid gap-x-12 gap-y-10 lg:grid-cols-12 lg:items-start">
                {/* Identity column */}
                <div className={flip ? 'lg:order-2 lg:col-span-5' : 'lg:col-span-5'}>
                  <div className="lg:sticky lg:top-28">
                    <span className="grid h-14 w-14 place-items-center rounded-card border border-border bg-surface-2 text-ink">
                      <SpecialtyIcon name={s.icon} className="h-6 w-6" />
                    </span>
                    <Label className="mt-6 block">{`Specialty ${i + 1} of ${specialties.length}`}</Label>
                    <h2 className="mt-3 text-display-lg text-ink text-balance">
                      {s.name}
                    </h2>

                    {/* Stats — roles placed is the single lime metric here */}
                    <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-8">
                      <div className="flex flex-col gap-1.5">
                        <dt className="label-mono order-2">Roles placed</dt>
                        <dd className="order-1 font-mono text-display-md font-bold tabular-nums text-accent">
                          {s.stats.rolesPlaced}
                        </dd>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <dt className="label-mono order-2">Avg. placement</dt>
                        <dd className="order-1 font-mono text-display-md font-bold tabular-nums text-ink">
                          {s.stats.avgPlacementTime}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>

                {/* Content column */}
                <div className={flip ? 'lg:order-1 lg:col-span-7' : 'lg:col-span-7'}>
                  <p className="max-w-prose text-body-lg text-muted text-pretty">
                    {s.description}
                  </p>

                  <div className="mt-10">
                    <div className="label-mono flex items-center gap-2">
                      <span className="h-px w-6 bg-border-strong" aria-hidden />
                      Roles we place
                    </div>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {s.roles.map((role) => (
                        <li
                          key={role}
                          className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-body-sm text-muted"
                        >
                          {role}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-8">
                    <Link
                      href="/roles"
                      className="group inline-flex items-center gap-2 text-body-sm font-semibold text-ink transition-colors hover:text-accent"
                    >
                      {open > 0
                        ? `${open} open ${s.name} ${open === 1 ? 'role' : 'roles'}`
                        : `Browse ${s.name} roles`}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                    <Link
                      href="/employers"
                      className="link-underline text-body-sm text-muted hover:text-ink"
                    >
                      Start a {s.name.toLowerCase()} search
                    </Link>
                  </div>
                </div>
              </Reveal>
            </Container>
          </Section>
        )
      })}

      {/* ---------------------------------------------------------------- CTA */}
      <Section padding="default" className="border-t border-border">
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
                Hiring across the lines? So are we.
              </h2>
              <p className="mt-5 text-body-lg text-muted text-pretty">
                The best hires rarely sit inside one box &mdash; a product-minded
                engineer, a data-fluent GTM lead. Tell us the shape of the role and
                we&apos;ll bring the shortlist.
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
