'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import { ChevronDown, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

interface SelectProps {
  value?: string
  onValueChange?: (value: string) => void
  placeholder?: string
  label?: string
  children: React.ReactNode
  className?: string
}

export function Select({
  value,
  onValueChange,
  placeholder = 'Select...',
  label,
  children,
  className,
}: SelectProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-body-sm font-medium text-foreground">
          {label}
        </label>
      )}
      <SelectPrimitive.Root value={value} onValueChange={onValueChange}>
        <SelectPrimitive.Trigger
          className={cn(
            'flex items-center justify-between w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground transition-colors',
            'focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50',
            'data-[placeholder]:text-muted/50',
            className
          )}
        >
          <SelectPrimitive.Value placeholder={placeholder} />
          <SelectPrimitive.Icon>
            <ChevronDown className="w-4 h-4 text-muted" />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>

        <SelectPrimitive.Portal>
          <SelectPrimitive.Content
            className="bg-surface border border-border rounded-lg shadow-xl overflow-hidden z-50"
            position="popper"
            sideOffset={4}
          >
            <SelectPrimitive.Viewport className="p-1">
              {children}
            </SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    </div>
  )
}

interface SelectItemProps {
  value: string
  children: React.ReactNode
  className?: string
}

export const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
  ({ value, children, className }, ref) => {
    return (
      <SelectPrimitive.Item
        ref={ref}
        value={value}
        className={cn(
          'flex items-center justify-between px-3 py-2 rounded cursor-pointer text-body-sm text-foreground transition-colors',
          'focus:outline-none focus:bg-surface-elevated',
          'data-[highlighted]:bg-surface-elevated',
          className
        )}
      >
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
        <SelectPrimitive.ItemIndicator>
          <Check className="w-4 h-4 text-accent" />
        </SelectPrimitive.ItemIndicator>
      </SelectPrimitive.Item>
    )
  }
)
SelectItem.displayName = 'SelectItem'
