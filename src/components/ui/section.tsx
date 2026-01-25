'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  background?: 'default' | 'surface' | 'elevated'
  padding?: 'default' | 'small' | 'large' | 'none'
}

export function Section({
  children,
  className,
  id,
  background = 'default',
  padding = 'default',
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        {
          'bg-background': background === 'default',
          'bg-surface': background === 'surface',
          'bg-surface-elevated': background === 'elevated',
        },
        {
          'py-section': padding === 'default',
          'py-section-sm': padding === 'small',
          'py-section-lg': padding === 'large',
          'py-0': padding === 'none',
        },
        className
      )}
    >
      {children}
    </section>
  )
}

interface SectionHeaderProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  title,
  subtitle,
  align = 'left',
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className={cn(
        'mb-12 md:mb-16',
        { 'text-center': align === 'center' },
        className
      )}
    >
      <h2 className="text-display-md md:text-display-lg font-display font-bold text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-body-lg text-muted max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
