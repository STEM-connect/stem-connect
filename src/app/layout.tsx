import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stem Connect | Digital Solution Catalysts',
  description: 'Stem Connect is a Toronto-based company that delivers innovative custom software development and quality assurance services that provide clients with world-class software solutions.',
  keywords: 'Mobile Development, Quality Assurance, QA, Cloud Strategy, Robotic Process Automation, RPA, IT Consulting, AWS, Toronto, Canada',
  icons: {
    icon: '/img/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
