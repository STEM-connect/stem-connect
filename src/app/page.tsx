import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { Industries } from '@/components/Industries'
import { About } from '@/components/About'
import { Services } from '@/components/Services'
import { Portfolio } from '@/components/Portfolio'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { siteContent } from '@/data/content'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero data={siteContent.header} />
      <Industries data={siteContent.industries} />
      <About data={siteContent.about} />
      <Services data={siteContent.services} />
      <Portfolio data={siteContent.portfolio} />
      <Contact data={siteContent.contact} />
      <Footer />
    </main>
  )
}
