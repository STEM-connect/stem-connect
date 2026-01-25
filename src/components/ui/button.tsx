import { cn } from '@/lib/utils'
import Link from 'next/link'
import { forwardRef } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg'
  asChild?: boolean
}

const variantStyles = {
  primary: 'bg-accent hover:bg-accent/90 font-semibold',
  secondary: 'bg-surface text-foreground hover:bg-surface-elevated border border-border',
  outline: 'border border-border text-foreground hover:bg-surface',
  ghost: 'text-foreground hover:text-accent',
}

const sizeStyles = {
  default: 'px-6 py-3 text-body-sm rounded-full gap-2',
  sm: 'px-4 py-2 text-body-xs rounded-full gap-1.5',
  lg: 'px-8 py-4 text-body-md rounded-full gap-2',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', style, ...props }, ref) => {
    const isPrimary = variant === 'primary'
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        style={isPrimary ? { color: '#0a0a0a', ...style } : style}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg'
}

const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, href, variant = 'primary', size = 'default', style, ...props }, ref) => {
    const isPrimary = variant === 'primary'
    return (
      <Link
        href={href}
        className={cn(
          'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-background',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        style={isPrimary ? { color: '#0a0a0a', ...style } : style}
        ref={ref}
        {...props}
      />
    )
  }
)
ButtonLink.displayName = 'ButtonLink'

export { Button, ButtonLink }
