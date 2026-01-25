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
        'inline-flex items-center font-medium rounded-full',
        {
          'bg-surface text-foreground': variant === 'default',
          'bg-accent/10 text-accent': variant === 'accent',
          'border border-border text-muted': variant === 'outline',
          'bg-surface-elevated text-muted': variant === 'secondary',
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
