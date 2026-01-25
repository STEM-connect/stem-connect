'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Clock, ArrowRight, User } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { insights } from '@/content'
import { formatDate } from '@/lib/utils'

export default function InsightsPage() {
  const featuredPost = insights[0]
  const otherPosts = insights.slice(1)

  return (
    <>
      {/* Hero */}
      <Section className="pt-32 pb-16 bg-surface">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Badge variant="accent" className="mb-4">
              Insights
            </Badge>
            <h1 className="text-display-xl md:text-display-2xl font-display font-bold mb-6">
              Thoughts on Toronto&apos;s tech landscape
            </h1>
            <p className="text-body-lg text-muted">
              Market trends, career advice, and insights from the front lines of Toronto&apos;s
              tech recruiting scene.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Featured Post */}
      <Section className="py-8">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Link href={`/insights/${featuredPost.slug}`}>
              <Card hover className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2">
                    {/* Image placeholder */}
                    <div className="aspect-video md:aspect-auto md:h-full bg-surface-elevated flex items-center justify-center">
                      <span className="text-6xl">{featuredPost.category === 'Market Insights' ? '📊' : featuredPost.category === 'Career Advice' ? '💡' : '🚀'}</span>
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-10">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge variant="accent">{featuredPost.category}</Badge>
                        <Badge variant="secondary">Featured</Badge>
                      </div>

                      <h2 className="text-display-md md:text-display-lg font-display font-bold mb-4 group-hover:text-accent transition-colors">
                        {featuredPost.title}
                      </h2>

                      <p className="text-body-md text-muted mb-6 line-clamp-3">
                        {featuredPost.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                            <User className="w-5 h-5 text-accent" />
                          </div>
                          <div>
                            <p className="text-body-sm font-medium text-foreground">
                              {featuredPost.author}
                            </p>
                            <p className="text-body-xs text-muted">
                              {formatDate(featuredPost.publishedAt)}
                            </p>
                          </div>
                        </div>
                        <span className="flex items-center gap-1 text-body-sm text-muted">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        </Container>
      </Section>

      {/* Other Posts */}
      <Section>
        <Container>
          <h2 className="text-display-sm font-display font-semibold mb-8">
            Latest Articles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/insights/${post.slug}`}>
                  <Card hover className="h-full">
                    <CardContent className="p-0">
                      {/* Image placeholder */}
                      <div className="aspect-video bg-surface-elevated flex items-center justify-center">
                        <span className="text-4xl">{post.category === 'Market Insights' ? '📊' : post.category === 'Career Advice' ? '💡' : '🚀'}</span>
                      </div>

                      <div className="p-6">
                        <Badge variant="secondary" size="sm" className="mb-3">
                          {post.category}
                        </Badge>

                        <h3 className="text-display-xs font-display font-semibold mb-2 line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-body-sm text-muted mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between text-body-xs text-muted">
                          <span>{post.author}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Newsletter CTA */}
      <Section className="bg-surface">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-display-lg font-display font-bold mb-4">
              Stay in the loop
            </h2>
            <p className="text-body-lg text-muted mb-8">
              Get the latest insights on Toronto&apos;s tech job market delivered to your inbox.
              No spam, just useful stuff.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-accent text-background font-medium rounded-lg hover:bg-accent/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </Container>
      </Section>
    </>
  )
}
