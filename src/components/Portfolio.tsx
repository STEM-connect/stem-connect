/* eslint-disable @next/next/no-img-element */
import { ExternalLink } from 'lucide-react'

interface PortfolioItem {
  title: string
  image: string
  link: string
}

interface PortfolioProps {
  data: PortfolioItem[]
}

export function Portfolio({ data }: PortfolioProps) {
  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="section-title">
          <h2>Our Portfolio</h2>
          <p>Several recent projects our company has worked on are featured here</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={`/img/portfolio/${item.image}-small.jpg`}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    {item.title}
                    <ExternalLink className="w-4 h-4" />
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
