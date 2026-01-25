import { notFound } from 'next/navigation'
import { roles } from '@/content'
import RoleDetailClient from './role-detail-client'

export function generateStaticParams() {
  return roles.map((role) => ({
    slug: role.slug,
  }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function RoleDetailPage({ params }: PageProps) {
  const { slug } = await params
  const role = roles.find((r) => r.slug === slug)

  if (!role) {
    notFound()
  }

  const relatedRoles = roles
    .filter((r) => r.specialty === role.specialty && r.id !== role.id)
    .slice(0, 3)

  return <RoleDetailClient role={role} relatedRoles={relatedRoles} />
}
