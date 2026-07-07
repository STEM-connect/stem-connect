import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'accent' | 'outline' | 'secondary'
  size?: 'default' | 'sm' | 'lg'
  className?: string
}

export function Badge({
  children,
  variant = 'default',
  size = 'default',
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full whitespace-nowrap',
        {
          'bg-surface-2 text-ink': variant === 'default',
          'bg-accent/12 text-accent ring-1 ring-inset ring-accent/25':
            variant === 'accent',
          'border border-border text-muted': variant === 'outline',
          'bg-surface text-muted': variant === 'secondary',
        },
        {
          'px-3 py-1 text-body-xs': size === 'default',
          'px-2 py-0.5 text-body-xs': size === 'sm',
          'px-4 py-1.5 text-body-sm': size === 'lg',
        },
        className
      )}
    >
      {children}
    </span>
  )
}
