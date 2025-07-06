import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, AlertTriangle } from "lucide-react"

export function SafetyGuidelines() {
  const guidelines = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Professional Supervision",
      description: "Certified lifeguards and instructors on duty at all times",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Capacity Management",
      description: "Controlled facility capacity for optimal safety and comfort",
      color: "from-teal-500 to-blue-500",
    },
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      title: "Emergency Preparedness",
      description: "Comprehensive emergency response systems and trained staff",
      color: "from-blue-500 to-indigo-500",
    },
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Safety & Guidelines</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your safety is our top priority. We maintain the highest standards of safety and cleanliness to ensure a
            secure environment for all our members and guests.
          </p>
        </div>

        {/* Scrollable row on mobile, centered on larger screens */}
        <div className="flex flex-nowrap justify-start md:justify-center gap-6 overflow-x-auto scrollbar-hide px-1">
          {guidelines.map((guideline, index) => (
            <Card
              key={index}
              className="min-w-[260px] sm:min-w-[280px] md:w-80 flex-shrink-0 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${guideline.color} text-white mb-6`}
                >
                  {guideline.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{guideline.title}</h3>
                <p className="text-gray-600">{guideline.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
