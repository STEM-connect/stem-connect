import { Layers, Palette, Code, BarChart3, TrendingUp, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

const map: Record<string, LucideIcon> = {
  Layers,
  Palette,
  Code,
  BarChart3,
  TrendingUp,
}

export function SpecialtyIcon({
  name,
  className,
}: {
  name: string
  className?: string
}) {
  const Icon = map[name] ?? Layers
  return <Icon className={cn('h-5 w-5', className)} strokeWidth={1.75} aria-hidden />
}
