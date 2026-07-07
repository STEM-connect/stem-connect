import { cn } from '@/lib/utils'
import Link from 'next/link'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  animate?: boolean
}

export function Card({ children, className, hover = false, animate = true }: CardProps) {
  return (
    <div
      className={cn(
        'bg-surface border border-border rounded-card p-6',
        animate && 'reveal',
        hover &&
          'transition-[border-color,background-color] duration-300 hover:border-border-strong hover:bg-surface-2',
        className
      )}
    >
      {children}
    </div>
  )
}

interface CardLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function CardLink({ href, children, className }: CardLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'reveal group block rounded-card border border-border bg-surface p-6 transition-[border-color,background-color] duration-300 hover:border-border-strong hover:bg-surface-2 focus:outline-none focus-visible:border-accent/60',
        className
      )}
    >
      {children}
    </Link>
  )
}

interface CardContentProps {
  children: React.ReactNode
  className?: string
}

export function CardContent({ children, className }: CardContentProps) {
  return <div className={className}>{children}</div>
}
