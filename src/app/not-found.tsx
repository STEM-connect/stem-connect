'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, Search, ArrowLeft } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { ButtonLink } from '@/components/ui/button'

export default function NotFound() {
  return (
    <Section className="min-h-[80vh] flex items-center">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="text-display-3xl md:text-[10rem] font-display font-bold text-accent/20 leading-none mb-4">
            404
          </div>

          <h1 className="text-display-lg md:text-display-xl font-display font-bold mb-4">
            Page not found
          </h1>

          <p className="text-body-lg text-muted mb-8">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been
            moved or doesn&apos;t exist.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonLink href="/" size="lg">
              <Home className="w-5 h-5" />
              Back to Home
            </ButtonLink>
            <ButtonLink href="/roles" variant="outline" size="lg">
              <Search className="w-5 h-5" />
              Browse Roles
            </ButtonLink>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
