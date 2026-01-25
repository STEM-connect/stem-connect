import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: 'default' | 'narrow' | 'wide'
}

export function Container({ children, className, size = 'default' }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto px-4 sm:px-6 lg:px-8',
        {
          'max-w-container': size === 'default',
          'max-w-narrow': size === 'narrow',
          'max-w-wide': size === 'wide',
        },
        className
      )}
    >
      {children}
    </div>
  )
}
