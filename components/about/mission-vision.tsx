import { Card, CardContent } from "@/components/ui/card"
import { Target, Heart } from "lucide-react"

export function MissionVision() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="pt-0">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                To provide world-class aquatic facilities and programs that promote health, fitness, and competitive
                excellence while fostering a love for swimming in our community. We strive to create an environment
                where every individual can achieve their personal best in and out of the water.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="pt-0">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                To be the premier destination for aquatic education, recreation, and competitive training, inspiring
                individuals to achieve their personal best while building a stronger, healthier community through the
                transformative power of swimming and water sports.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
