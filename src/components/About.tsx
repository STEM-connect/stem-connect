/* eslint-disable @next/next/no-img-element */
import { Check } from 'lucide-react'

interface AboutProps {
  data: {
    paragraph: string
    whyChooseUs: string
    reasons: string[]
  }
}

export function About({ data }: AboutProps) {
  const firstHalf = data.reasons.slice(0, 4)
  const secondHalf = data.reasons.slice(4)

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="/img/about.jpg"
              alt="About Stem Connect"
              className="rounded-2xl shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-raleway">
              About Us
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {data.paragraph}
            </p>

            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Why Choose Us?
            </h3>
            <p className="text-gray-600 mb-6">
              {data.whyChooseUs}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <ul className="space-y-3">
                {firstHalf.map((reason, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </span>
                    <span className="text-gray-700">{reason}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {secondHalf.map((reason, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </span>
                    <span className="text-gray-700">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
