import { cn } from '@/lib/utils'

/**
 * Marquee — seamless horizontal ticker. Duplicates children once and slides
 * -50% (see --animate-marquee). Pauses on hover; static under reduced-motion.
 */
export function Marquee({
  children,
  className,
  gap = 'gap-12',
}: {
  children: React.ReactNode
  className?: string
  gap?: string
}) {
  return (
    <div className={cn('mask-fade-x group overflow-hidden', className)}>
      <div
        className={cn(
          'flex w-max animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused]',
          gap
        )}
      >
        <div className={cn('flex shrink-0 items-center', gap)} aria-hidden={false}>
          {children}
        </div>
        <div className={cn('flex shrink-0 items-center', gap)} aria-hidden>
          {children}
        </div>
      </div>
    </div>
  )
}
