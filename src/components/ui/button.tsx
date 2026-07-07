import { cn } from '@/lib/utils'
import Link from 'next/link'
import { forwardRef } from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'
type Size = 'default' | 'sm' | 'lg'

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-accent text-accent-ink font-semibold hover:bg-accent-dim active:translate-y-px',
  secondary:
    'bg-surface text-ink border border-border hover:border-border-strong hover:bg-surface-2',
  outline:
    'border border-border-strong text-ink hover:bg-surface hover:border-ink/40',
  ghost: 'text-ink hover:text-accent',
}

const sizeStyles: Record<Size, string> = {
  default: 'h-11 px-6 text-body-sm rounded-full gap-2',
  sm: 'h-9 px-4 text-body-xs rounded-full gap-1.5',
  lg: 'h-14 px-8 text-body-md rounded-full gap-2.5',
}

const base =
  'inline-flex items-center justify-center font-medium whitespace-nowrap transition-[background-color,border-color,color,transform] duration-200 ease-[cubic-bezier(0.25,1,0.5,1)] disabled:opacity-50 disabled:pointer-events-none'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', ...props }, ref) => (
    <button
      className={cn(base, variantStyles[variant], sizeStyles[size], className)}
      ref={ref}
      {...props}
    />
  )
)
Button.displayName = 'Button'

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  variant?: Variant
  size?: Size
}

const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, href, variant = 'primary', size = 'default', ...props }, ref) => (
    <Link
      href={href}
      className={cn(base, variantStyles[variant], sizeStyles[size], className)}
      ref={ref}
      {...props}
    />
  )
)
ButtonLink.displayName = 'ButtonLink'

export { Button, ButtonLink }
