import {
  Landmark,
  Megaphone,
  Users,
  Star,
  Building2,
  Plane,
  CreditCard
} from 'lucide-react'

interface Industry {
  icon: string
  title: string
}

interface IndustriesProps {
  data: Industry[]
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  landmark: Landmark,
  megaphone: Megaphone,
  users: Users,
  star: Star,
  building: Building2,
  plane: Plane,
  'credit-card': CreditCard,
}

export function Industries({ data }: IndustriesProps) {
  return (
    <section id="industries" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="section-title">
          <h2>Industries We Serve</h2>
          <p>We bring expertise across multiple sectors to deliver tailored solutions</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {data.map((industry, index) => {
            const IconComponent = iconMap[industry.icon] || Star
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-sm font-semibold text-gray-800">{industry.title}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
