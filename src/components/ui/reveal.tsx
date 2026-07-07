import { cn } from '@/lib/utils'

/**
 * Reveal — scroll-driven fade + rise via CSS `animation-timeline: view()`
 * (see .reveal in globals.css). Content is visible by default and only
 * enhanced where supported, so it never ships blank in headless renderers,
 * no-JS, or reduced-motion. No IntersectionObserver, no client boundary.
 */
export function Reveal({
  children,
  className,
  style,
  delay,
}: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  /** kept for API compatibility; nudges the animation start slightly */
  delay?: number
  y?: number
}) {
  return (
    <div
      className={cn('reveal', className)}
      style={delay ? { animationDelay: `${delay}s`, ...style } : style}
    >
      {children}
    </div>
  )
}

/** Stagger container — children reveal as they cross the viewport in turn. */
export function Stagger({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
  stagger?: number
}) {
  return <div className={className}>{children}</div>
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={cn('reveal', className)}>{children}</div>
}
