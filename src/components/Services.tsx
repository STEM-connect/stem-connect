import {
  Code,
  Database,
  Search,
  Cloud,
  Cpu,
  Users
} from 'lucide-react'

interface Service {
  icon: string
  name: string
  text: string
}

interface ServicesProps {
  data: Service[]
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  code: Code,
  database: Database,
  search: Search,
  cloud: Cloud,
  cpu: Cpu,
  users: Users,
}

export function Services({ data }: ServicesProps) {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            Through our services we improve outdated and antiquated systems and convert them into highly efficient, simple-to-use ones. It is our goal to help your stagnant development projects be ignited and completed quickly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Code
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 mb-6 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {service.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
