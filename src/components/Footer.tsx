import Link from 'next/link'
import { Container } from './ui/container'
import { Logo } from './ui/logo'
import { siteConfig, navigation } from '@/content'
import { ArrowUpRight, Mail } from 'lucide-react'
import { Linkedin, Twitter } from './ui/social-icons'

const socials = [
  { label: 'LinkedIn', href: siteConfig.social.linkedin, Icon: Linkedin },
  { label: 'X', href: siteConfig.social.twitter, Icon: Twitter },
  { label: 'Email', href: `mailto:${siteConfig.contact.email}`, Icon: Mail },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-bg">
      <Container className="py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Link href="/" aria-label="Stem Connect — home">
              <Logo />
            </Link>
            <p className="mt-6 max-w-sm text-body-md text-muted text-pretty">
              {siteConfig.tagline}
            </p>
            <div className="mt-8 flex items-center gap-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted transition-colors hover:border-border-strong hover:text-accent"
                  aria-label={label}
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-7">
            {navigation.footer.map((section) => (
              <div key={section.title}>
                <h4 className="label-mono">{section.title}</h4>
                <ul className="mt-5 space-y-3">
                  {section.links.map((link, index) => (
                    <li key={`${section.title}-${link.label}-${index}`}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-1 text-body-sm text-muted transition-colors hover:text-ink"
                      >
                        {link.label}
                        {link.href.startsWith('http') && (
                          <ArrowUpRight className="h-3 w-3 -translate-y-px opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 md:flex-row md:items-center">
          <p className="text-body-sm text-faint">
            &copy; {currentYear} {siteConfig.name}. Toronto · Canada.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-body-sm text-faint transition-colors hover:text-ink"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-body-sm text-faint transition-colors hover:text-ink"
            >
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
