import { cn } from '@/lib/utils'

/**
 * Stem Connect mark — two nodes joined by a link (talent ↔ company). The
 * upper node is lime (the match). Structure inherits currentColor.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn('h-6 w-6', className)}
    >
      <path
        d="M6.5 17.5 17.5 6.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <circle cx="6.5" cy="17.5" r="3.5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="17.5" cy="6.5" r="3.5" fill="var(--color-accent)" />
    </svg>
  )
}

export function Logo({
  className,
  markClassName,
  showWordmark = true,
}: {
  className?: string
  markClassName?: string
  showWordmark?: boolean
}) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <LogoMark className={markClassName} />
      {showWordmark && (
        <span className="font-display text-lg font-bold tracking-tight text-ink">
          Stem&nbsp;Connect
        </span>
      )}
    </span>
  )
}
