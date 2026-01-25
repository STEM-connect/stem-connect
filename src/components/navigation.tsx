'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Container } from './ui/container'
import { ButtonLink } from './ui/button'
import { siteConfig, navigation } from '@/content'
import { cn } from '@/lib/utils'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-background/95 backdrop-blur-md border-b border-border'
            : 'bg-transparent'
        )}
      >
        <Container>
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="text-xl font-display font-bold text-foreground hover:text-accent transition-colors"
            >
              {siteConfig.name}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.main.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-body-sm font-medium transition-colors',
                    pathname === item.href
                      ? 'text-accent'
                      : 'text-muted hover:text-foreground'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <ButtonLink href={navigation.cta.href} variant="outline" size="sm">
                {navigation.cta.label}
              </ButtonLink>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </nav>
        </Container>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background pt-20 lg:hidden"
          >
            <Container className="py-8">
              <nav className="flex flex-col gap-6">
                {navigation.main.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'text-display-sm font-display font-medium transition-colors',
                      pathname === item.href
                        ? 'text-accent'
                        : 'text-muted hover:text-foreground'
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-6 border-t border-border">
                  <ButtonLink href={navigation.cta.href} variant="primary" size="lg" className="w-full justify-center">
                    {navigation.cta.label}
                  </ButtonLink>
                </div>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
