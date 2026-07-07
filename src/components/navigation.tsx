'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Container } from './ui/container'
import { ButtonLink } from './ui/button'
import { Logo } from './ui/logo'
import { navigation } from '@/content'
import { cn } from '@/lib/utils'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Mount-gate for pathname-dependent UI + scroll state. Setting state on
    // mount here is intentional (hydration-safe active nav + initial scroll).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
    const handleScroll = () => setIsScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Guard pathname-dependent active state until after mount. In static export,
  // usePathname() differs between prerender and client, so gating avoids a
  // hydration mismatch; the active marker settles in on the first client tick.
  const isActive = (href: string) =>
    mounted && (pathname === href || pathname.startsWith(href + '/'))

  const closeMenu = () => setIsMobileMenuOpen(false)

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300',
          isScrolled
            ? 'border-b border-border bg-bg/80 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        )}
      >
        <Container>
          <nav className="flex h-18 items-center justify-between">
            <Link href="/" aria-label="Stem Connect — home" className="shrink-0">
              <Logo />
            </Link>

            <div className="hidden items-center gap-1 lg:flex">
              {navigation.main.map((item) => {
                const active = isActive(item.href)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'relative rounded-full px-3.5 py-2 text-body-sm font-medium transition-colors',
                      active ? 'text-ink' : 'text-muted hover:text-ink'
                    )}
                  >
                    {item.label}
                    {active && (
                      <span className="absolute inset-x-3 -bottom-px h-px bg-accent" />
                    )}
                  </Link>
                )
              })}
            </div>

            <div className="hidden lg:block">
              <ButtonLink href={navigation.cta.href} variant="primary" size="sm">
                {navigation.cta.label}
              </ButtonLink>
            </div>

            <button
              className="-mr-2 p-2 text-ink lg:hidden"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </nav>
        </Container>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-bg pt-18 lg:hidden"
          >
            <Container className="flex h-full flex-col py-10">
              <nav className="flex flex-col">
                {navigation.main.map((item, i) => {
                  const active = isActive(item.href)
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className={cn(
                          'flex items-baseline gap-3 border-b border-border py-4 text-display-sm font-semibold transition-colors',
                          active ? 'text-accent' : 'text-ink hover:text-accent'
                        )}
                      >
                        <span className="label-mono w-6 shrink-0">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        {item.label}
                      </Link>
                    </motion.div>
                  )
                })}
              </nav>
              <div className="mt-auto pt-8">
                <ButtonLink
                  href={navigation.cta.href}
                  variant="primary"
                  size="lg"
                  className="w-full"
                  onClick={closeMenu}
                >
                  {navigation.cta.label}
                </ButtonLink>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
