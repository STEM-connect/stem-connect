import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

// tailwind-merge doesn't know our custom Tailwind v4 theme scales, so it would
// mis-group e.g. `text-body-md` (font size) and `text-accent-ink` (color) as
// conflicting `text-*` classes and silently drop one. Register the custom
// font-size scale so size and color classes are kept independently.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        {
          text: [
            'display-2xl', 'display-xl', 'display-lg', 'display-md', 'display-sm',
            'body-xl', 'body-lg', 'body-md', 'body-sm', 'body-xs',
            'label',
          ],
        },
      ],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Deterministic, Intl-free date formatting. Using toLocaleDateString here
// caused hydration mismatches: Node's ICU (build) and the browser's ICU
// (client) render 'en-CA' short months differently ("Jan 20" vs "Jan. 20").
const MONTHS_LONG = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]
const MONTHS_SHORT = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
]

// Parse an ISO date (YYYY-MM-DD) in a timezone-stable way.
function parseISO(dateString: string): { y: number; m: number; d: number } | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(dateString)
  if (!match) return null
  return { y: Number(match[1]), m: Number(match[2]) - 1, d: Number(match[3]) }
}

export function formatDate(dateString: string): string {
  const p = parseISO(dateString)
  if (!p) return dateString
  return `${MONTHS_LONG[p.m]} ${p.d}, ${p.y}`
}

export function formatDateShort(dateString: string): string {
  const p = parseISO(dateString)
  if (!p) return dateString
  return `${MONTHS_SHORT[p.m]} ${p.d}`
}

// Relative "time ago" depends on the current time, which differs between
// build (SSG) and view. To stay hydration-safe in a static export, callers
// in prerendered output should prefer formatDate/formatDateShort. Kept for
// any client-only usage.
export function getTimeAgo(dateString: string): string {
  const p = parseISO(dateString)
  if (!p) return dateString
  const date = new Date(Date.UTC(p.y, p.m, p.d))
  const now = new Date()
  const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))

  if (diffInDays <= 0) return 'Today'
  if (diffInDays === 1) return 'Yesterday'
  if (diffInDays < 7) return `${diffInDays} days ago`
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`
  if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} months ago`
  return `${Math.floor(diffInDays / 365)} years ago`
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function copyToClipboard(text: string): Promise<void> {
  return navigator.clipboard.writeText(text)
}

export function formatSalary(min: number, max: number): string {
  const formatK = (n: number) => {
    if (n >= 1000) {
      return `$${Math.round(n / 1000)}K`
    }
    return `$${n}`
  }
  return `${formatK(min)} - ${formatK(max)} CAD`
}
