import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { insights } from '@/content'
import InsightDetailClient from './insight-detail-client'

export function generateStaticParams() {
  return insights.map((insight) => ({
    slug: insight.slug,
  }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = insights.find((p) => p.slug === slug)
  if (!post) return {}
  const url = `/insights/${post.slug}`
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: { title: post.title, description: post.excerpt, url, type: 'article' },
    twitter: { title: post.title, description: post.excerpt },
  }
}

export default async function InsightDetailPage({ params }: PageProps) {
  const { slug } = await params
  const post = insights.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = insights
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3)

  return <InsightDetailClient post={post} relatedPosts={relatedPosts} />
}
