import { cn } from '@/lib/utils'

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
          'bg-bg': background === 'default',
          'bg-surface': background === 'surface',
          'bg-surface-2': background === 'elevated',
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
  title: React.ReactNode
  subtitle?: string
  kicker?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  title,
  subtitle,
  kicker,
  align = 'left',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'reveal max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {kicker && (
        <div
          className={cn(
            'label-mono mb-4 flex items-center gap-2',
            align === 'center' && 'justify-center'
          )}
        >
          <span className="h-px w-6 bg-accent" aria-hidden />
          {kicker}
        </div>
      )}
      <h2 className="text-display-md md:text-display-lg text-ink text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-body-lg text-muted text-pretty">{subtitle}</p>
      )}
    </div>
  )
}
