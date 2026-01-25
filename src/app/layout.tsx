import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/Footer'
import { siteConfig } from '@/content'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Tech Recruiting in Toronto, GTA & Across Canada`,
    template: `%s | ${siteConfig.name} - Canadian Tech Recruiters`,
  },
  description: 'Stem Connect is Canada\'s premier tech recruiting firm. We connect exceptional talent with innovative companies in Toronto, the GTA, and across Canada. Specializing in Product, Design, Engineering, Data & Go-to-Market roles.',
  keywords: [
    // Toronto/GTA focus
    'Toronto tech recruiting',
    'GTA tech jobs',
    'Toronto IT recruiters',
    'tech recruitment Toronto',
    'IT staffing Toronto',
    'Toronto startup hiring',
    'software developer jobs Toronto',
    'product manager jobs Toronto',
    'UX designer jobs GTA',
    'data scientist Toronto',
    // Canada-wide
    'Canada tech recruitment',
    'Canadian tech jobs',
    'tech staffing Canada',
    'IT recruitment Canada',
    'Canadian IT recruiters',
    // Role-specific
    'product management recruiting',
    'software engineering jobs Canada',
    'tech talent acquisition',
    'startup recruiting Canada',
    'scale-up hiring',
    'executive tech search',
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Tech Recruiting in Toronto, GTA & Across Canada`,
    description: 'Stem Connect is Canada\'s premier tech recruiting firm. We connect exceptional talent with innovative companies in Toronto, the GTA, and across Canada.',
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Stem Connect - Canadian Tech Recruiting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Tech Recruiting in Toronto & Canada`,
    description: 'Canada\'s premier tech recruiting firm. Connecting exceptional talent with innovative companies across Toronto, GTA, and nationwide.',
    images: [`${siteConfig.url}/og-image.jpg`],
    creator: '@stemconnect',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  category: 'business',
}

// JSON-LD structured data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EmploymentAgency',
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Toronto',
    addressRegion: 'Ontario',
    addressCountry: 'CA',
  },
  areaServed: [
    { '@type': 'City', name: 'Toronto' },
    { '@type': 'City', name: 'Mississauga' },
    { '@type': 'City', name: 'Vancouver' },
    { '@type': 'City', name: 'Calgary' },
    { '@type': 'City', name: 'Montreal' },
    { '@type': 'Country', name: 'Canada' },
  ],
  sameAs: [
    siteConfig.social.linkedin,
    siteConfig.social.twitter,
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
