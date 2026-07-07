import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { ButtonLink } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

const paths = [
  { href: '/', label: 'Home', hint: 'Back to the start' },
  { href: '/roles', label: 'Open roles', hint: 'See what we’re placing now' },
  { href: '/contact', label: 'Contact', hint: 'Talk to a real person' },
]

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden py-24">
      <div className="bg-grid mask-fade-b pointer-events-none absolute inset-0 opacity-50" aria-hidden />
      <Container className="relative">
        <div className="max-w-2xl">
          <Label tick>Error 404</Label>
          <p className="mt-6 font-mono text-display-2xl leading-none text-accent">
            404
          </p>
          <h1 className="mt-6 text-display-xl text-ink text-balance">
            This page isn&apos;t in the pipeline.
          </h1>
          <p className="mt-5 max-w-lg text-body-lg text-muted text-pretty">
            The link is broken or the page has moved. No dead ends here — pick up
            one of the paths below.
          </p>

          <div className="mt-10">
            <ButtonLink href="/" size="lg">
              Back to home
            </ButtonLink>
          </div>

          <ul className="mt-12 divide-y divide-border border-y border-border">
            {paths.map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="group flex items-center justify-between gap-4 py-5"
                >
                  <span className="flex flex-col">
                    <span className="text-display-sm font-semibold text-ink transition-colors group-hover:text-accent">
                      {p.label}
                    </span>
                    <span className="text-body-sm text-muted">{p.hint}</span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
