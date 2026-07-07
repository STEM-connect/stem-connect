import { cn } from '@/lib/utils'

/**
 * Label — high-signal monospace kicker. Deliberate brand system element,
 * not scaffolding on every section. Optional leading tick for emphasis.
 */
export function Label({
  children,
  className,
  tick = false,
}: {
  children: React.ReactNode
  className?: string
  tick?: boolean
}) {
  return (
    <span className={cn('label-mono inline-flex items-center gap-2', className)}>
      {tick && <span className="h-px w-6 bg-accent" aria-hidden />}
      {children}
    </span>
  )
}
