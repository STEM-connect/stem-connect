'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, User, Share2, Linkedin, Twitter, Check } from 'lucide-react'
import { useState } from 'react'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Button, ButtonLink } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { siteConfig } from '@/content'
import { formatDate, copyToClipboard } from '@/lib/utils'
import type { Insight } from '@/content'

interface InsightDetailClientProps {
  post: Insight
  relatedPosts: Insight[]
}

export default function InsightDetailClient({ post, relatedPosts }: InsightDetailClientProps) {
  const [isShareCopied, setIsShareCopied] = useState(false)

  const handleShare = async () => {
    const url = `${siteConfig.url}/insights/${post.slug}`
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
            className="max-w-3xl mx-auto"
          >
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-body-sm text-muted hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Insights
            </Link>

            <Badge variant="accent" className="mb-4">
              {post.category}
            </Badge>

            <h1 className="text-display-lg md:text-display-xl font-display font-bold mb-6">
              {post.title}
            </h1>

            <p className="text-body-lg text-muted mb-8">{post.excerpt}</p>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <User className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-body-md font-medium text-foreground">{post.author}</p>
                  <p className="text-body-sm text-muted">
                    {formatDate(post.publishedAt)} • {post.readTime}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={handleShare}>
                  {isShareCopied ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Share2 className="w-4 h-4" />
                      Share
                    </>
                  )}
                </Button>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${siteConfig.url}/insights/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted hover:text-accent transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`${siteConfig.url}/insights/${post.slug}`)}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted hover:text-accent transition-colors"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Content */}
      <Section>
        <Container>
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl mx-auto"
          >
            <div className="prose prose-invert prose-lg max-w-none">
              <div className="space-y-6 text-body-lg text-muted leading-relaxed">
                {post.content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-border">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.article>
        </Container>
      </Section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <Section className="bg-surface">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-display-sm font-display font-semibold mb-8">
                Related Articles
              </h2>

              <div className="grid gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/insights/${relatedPost.slug}`}>
                    <Card hover>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <Badge variant="secondary" size="sm" className="mb-2">
                              {relatedPost.category}
                            </Badge>
                            <h3 className="text-display-xs font-display font-semibold mb-2">
                              {relatedPost.title}
                            </h3>
                            <p className="text-body-sm text-muted line-clamp-2">
                              {relatedPost.excerpt}
                            </p>
                          </div>
                          <span className="flex items-center gap-1 text-body-xs text-muted shrink-0">
                            <Clock className="w-4 h-4" />
                            {relatedPost.readTime}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* CTA */}
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-display-lg font-display font-bold mb-4">
              Ready to make a move?
            </h2>
            <p className="text-body-lg text-muted mb-8">
              Whether you&apos;re hiring or job hunting, we&apos;re here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ButtonLink href="/roles" size="lg">
                Browse Open Roles
              </ButtonLink>
              <ButtonLink href="/contact" variant="outline" size="lg">
                Get in Touch
              </ButtonLink>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  )
}
