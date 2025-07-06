import { Users, Award, Heart, Shield, Zap, Target } from "lucide-react"

export function CoreValues() {
  const values = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community",
      description: "Building strong relationships and fostering a supportive environment for all members",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "Maintaining the highest standards in facilities, instruction, and customer service",
      color: "from-cyan-500 to-teal-500",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Safety",
      description: "Prioritizing the safety and well-being of every individual in our facility",
      color: "from-teal-500 to-blue-500",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Integrity",
      description: "Operating with honesty, transparency, and ethical practices in all our interactions",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Innovation",
      description: "Continuously improving our programs and facilities with the latest aquatic technologies",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Achievement",
      description: "Helping every swimmer reach their goals through personalized training and support",
      color: "from-purple-500 to-blue-500",
    },
  ]

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These fundamental principles guide everything we do and shape the culture of excellence at Oasis Aquatic Center.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${value.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {value.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
