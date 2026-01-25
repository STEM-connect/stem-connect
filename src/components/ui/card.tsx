'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4 }}
      className={cn(
        'bg-surface border border-border rounded-card p-6',
        hover && 'transition-all duration-300 hover:border-accent/30 hover:bg-surface-elevated',
        className
      )}
    >
      {children}
    </motion.div>
  )
}

interface CardLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function CardLink({ href, children, className }: CardLinkProps) {
  return (
    <Link href={href} className="block group">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.4 }}
        className={cn(
          'bg-surface border border-border rounded-card p-6 transition-all duration-300 hover:border-accent/30 hover:bg-surface-elevated',
          className
        )}
      >
        {children}
      </motion.div>
    </Link>
  )
}

interface CardContentProps {
  children: React.ReactNode
  className?: string
}

export function CardContent({ children, className }: CardContentProps) {
  return <div className={cn('', className)}>{children}</div>
}
