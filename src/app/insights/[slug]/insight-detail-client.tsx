'use client'

import Link from 'next/link'
import { useState, type ReactNode } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, Share2, Check } from 'lucide-react'
import { Linkedin, Twitter } from '@/components/ui/social-icons'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Button, ButtonLink } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'
import { Reveal } from '@/components/ui/reveal'
import { siteConfig } from '@/content'
import { formatDate, copyToClipboard } from '@/lib/utils'
import type { Insight } from '@/content'

interface InsightDetailClientProps {
  post: Insight
  relatedPosts: Insight[]
}

export default function InsightDetailClient({ post, relatedPosts }: InsightDetailClientProps) {
  const [isShareCopied, setIsShareCopied] = useState(false)
  const url = `${siteConfig.url}/insights/${post.slug}`

  const handleShare = async () => {
    await copyToClipboard(url)
    setIsShareCopied(true)
    setTimeout(() => setIsShareCopied(false), 2000)
  }

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
        <Container size="narrow" className="relative">
          <div className="rise-in">
            <Link
              href="/insights"
              className="group inline-flex items-center gap-2 text-body-sm font-medium text-muted transition-colors hover:text-ink"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              All insights
            </Link>
          </div>

          <div className="rise-in rise-in-d1">
            <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="label-mono text-accent">{post.category}</span>
              <span className="label-mono text-faint">
                {formatDate(post.publishedAt)} &middot; {post.readTime}
              </span>
            </div>

            <h1 className="mt-5 text-display-lg md:text-display-xl text-ink text-balance">
              {post.title}
            </h1>

            <p className="mt-6 text-body-lg text-muted text-pretty">{post.excerpt}</p>
          </div>

          {/* Byline + share rail */}
          <div
            className="rise-in rise-in-d2 mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border bg-bg font-mono text-body-sm text-muted">
                {post.author.charAt(0)}
              </span>
              <span>
                <span className="block text-body-sm font-medium text-ink">{post.author}</span>
                <span className="block text-body-xs text-faint">Stem Connect</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="secondary" size="sm" onClick={handleShare}>
                {isShareCopied ? (
                  <>
                    <Check className="h-4 w-4 text-accent" />
                    Link copied
                  </>
                ) : (
                  <>
                    <Share2 className="h-4 w-4" />
                    Share
                  </>
                )}
              </Button>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted transition-colors hover:border-border-strong hover:text-ink"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted transition-colors hover:border-border-strong hover:text-ink"
                aria-label="Share on X"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- Body */}
      <Section padding="default">
        <Container size="narrow">
          <Reveal>
            <article
              className="prose prose-invert prose-lg max-w-none
                prose-headings:font-display prose-headings:text-ink prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-balance
                prose-h2:text-display-sm prose-h2:mt-14 prose-h2:mb-5
                prose-h3:mt-10 prose-h3:mb-3 prose-h3:text-body-xl
                prose-p:text-muted prose-p:text-pretty
                prose-strong:text-ink prose-strong:font-semibold
                prose-a:text-accent prose-a:font-medium prose-a:no-underline hover:prose-a:underline
                prose-li:text-muted prose-li:my-1 prose-li:marker:text-faint
                prose-ul:my-6 prose-ol:my-6
                prose-hr:border-border
                prose-blockquote:border-l-accent prose-blockquote:text-ink prose-blockquote:font-normal prose-blockquote:not-italic"
            >
              <ArticleBody content={post.content} />
            </article>
          </Reveal>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-12 flex flex-wrap gap-2 border-t border-border pt-8">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </Container>
      </Section>

      {/* ---------------------------------------------------------------- Related */}
      {relatedPosts.length > 0 && (
        <Section background="surface" padding="default">
          <Container>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-xl">
                <Label tick>More in {post.category}</Label>
                <h2 className="mt-4 text-display-md text-ink text-balance">
                  Keep reading.
                </h2>
              </div>
              <ButtonLink href="/insights" variant="secondary" size="sm">
                All insights
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>

            <div className="mt-12 divide-y divide-border border-y border-border">
              {relatedPosts.map((related) => (
                <Reveal key={related.id}>
                  <Link
                    href={`/insights/${related.slug}`}
                    className="group grid grid-cols-1 items-baseline gap-x-8 gap-y-2 py-6 md:grid-cols-12"
                  >
                    <div className="md:col-span-3">
                      <div className="label-mono text-faint">{related.readTime}</div>
                    </div>
                    <div className="md:col-span-8">
                      <h3 className="text-display-sm font-semibold text-ink transition-colors group-hover:text-accent">
                        {related.title}
                      </h3>
                      <p className="mt-2 max-w-2xl text-body-md text-muted text-pretty">
                        {related.excerpt}
                      </p>
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
      )}

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
                Ready to make a move?
              </h2>
              <p className="mt-5 text-body-lg text-muted text-pretty">
                Whether you&apos;re hiring or looking, start with a call &mdash; not a
                form letter. A real person replies within one business day.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/roles" size="lg">
                  Browse open roles
                  <ArrowRight className="h-5 w-5" />
                </ButtonLink>
                <ButtonLink href="/contact" variant="secondary" size="lg">
                  Get in touch
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Lightweight markdown renderer — no runtime deps. Handles the subset */
/* used by the insights content: h1–h3, bold/italic, and ordered /     */
/* unordered lists. The article's leading H1 (a duplicate of the page  */
/* title) is dropped so the header isn't repeated.                     */
/* ------------------------------------------------------------------ */

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = []
  const regex = /\*\*([^*]+)\*\*|\*([^*]+)\*/g
  let lastIndex = 0
  let match: RegExpExecArray | null
  let i = 0

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index))
    }
    if (match[1] !== undefined) {
      nodes.push(<strong key={`${keyPrefix}-b${i}`}>{match[1]}</strong>)
    } else if (match[2] !== undefined) {
      nodes.push(<em key={`${keyPrefix}-i${i}`}>{match[2]}</em>)
    }
    lastIndex = regex.lastIndex
    i++
  }
  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex))
  }
  return nodes
}

function ArticleBody({ content }: { content: string }) {
  const lines = content.replace(/\r\n/g, '\n').split('\n')
  const blocks: ReactNode[] = []
  let paragraph: string[] = []
  let skippedTitleH1 = false
  let key = 0

  const flushParagraph = () => {
    if (paragraph.length > 0) {
      const k = key++
      blocks.push(<p key={k}>{renderInline(paragraph.join(' '), `p${k}`)}</p>)
      paragraph = []
    }
  }

  for (let i = 0; i < lines.length; ) {
    const line = lines[i].trim()

    if (line === '') {
      flushParagraph()
      i++
      continue
    }

    const heading = /^(#{1,3})\s+(.*)$/.exec(line)
    if (heading) {
      flushParagraph()
      const level = heading[1].length
      const text = heading[2]
      if (level === 1 && !skippedTitleH1) {
        skippedTitleH1 = true
        i++
        continue
      }
      const k = key++
      if (level === 1) blocks.push(<h1 key={k}>{renderInline(text, `h${k}`)}</h1>)
      else if (level === 2) blocks.push(<h2 key={k}>{renderInline(text, `h${k}`)}</h2>)
      else blocks.push(<h3 key={k}>{renderInline(text, `h${k}`)}</h3>)
      i++
      continue
    }

    if (/^[-*]\s+/.test(line)) {
      flushParagraph()
      const items: string[] = []
      while (i < lines.length && /^[-*]\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^[-*]\s+/, ''))
        i++
      }
      const k = key++
      blocks.push(
        <ul key={k}>
          {items.map((item, idx) => (
            <li key={idx}>{renderInline(item, `ul${k}-${idx}`)}</li>
          ))}
        </ul>
      )
      continue
    }

    if (/^\d+\.\s+/.test(line)) {
      flushParagraph()
      const items: string[] = []
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s+/, ''))
        i++
      }
      const k = key++
      blocks.push(
        <ol key={k}>
          {items.map((item, idx) => (
            <li key={idx}>{renderInline(item, `ol${k}-${idx}`)}</li>
          ))}
        </ol>
      )
      continue
    }

    paragraph.push(line)
    i++
  }
  flushParagraph()

  return <>{blocks}</>
}
