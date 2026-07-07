import { cn } from '@/lib/utils'

interface StatProps {
  value: string
  label: string
  className?: string
  accent?: boolean
}

/** Stat — big figure over a monospace caption. */
export function Stat({ value, label, className, accent = false }: StatProps) {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <span
        className={cn(
          'text-display-md md:text-display-lg font-bold tabular-nums tracking-tight',
          accent ? 'text-accent' : 'text-ink'
        )}
      >
        {value}
      </span>
      <span className="label-mono">{label}</span>
    </div>
  )
}
