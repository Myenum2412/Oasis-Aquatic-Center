import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Users, Medal } from "lucide-react"

export function InstructorInfo() {
  const features = [
    {
      icon: <Trophy className="h-12 w-12" />,
      title: "Certified Instructors",
      description:
        "All our instructors are certified professionals with extensive experience in swimming education and safety.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Small Class Sizes",
      description:
        "We maintain small class sizes to ensure personalized attention and faster skill development for every student.",
      color: "from-cyan-500 to-teal-500",
    },
    {
      icon: <Medal className="h-12 w-12" />,
      title: "Progress Tracking",
      description:
        "Regular assessments and progress reports help track improvement and celebrate achievements along the way.",
      color: "from-teal-500 to-blue-500",
    },
  ]

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Our Courses Excel</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence in instruction and personalized attention sets our courses apart from the rest.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${feature.color} text-white mb-6`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
