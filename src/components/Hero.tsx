import Link from 'next/link'

interface HeroProps {
  data: {
    title: string
    paragraph: string
  }
}

export function Hero({ data }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/img/intro-bg.jpg)' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-raleway leading-tight">
          {data.title}
        </h1>
        <p className="text-lg md:text-xl mb-10 text-white/90 max-w-2xl mx-auto">
          {data.paragraph}
        </p>
        <Link
          href="#services"
          className="inline-block bg-white text-primary px-10 py-4 rounded-full font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:scale-105"
        >
          Learn More
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Link href="#industries" className="text-white/80 hover:text-white">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
