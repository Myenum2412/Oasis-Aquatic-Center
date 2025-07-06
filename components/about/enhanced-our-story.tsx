import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Award, Users, MapPin, Waves } from "lucide-react"

export function EnhancedOurStory() {
  const milestones = [
    {
      year: "2001",
      title: "Foundation & Vision",
      description:
        "Oasis Aquatic Center was founded by Maria Rodriguez, an Mini Olympic swimmer who recognized the need for a comprehensive aquatic facility.",
      achievement: "First facility opened with single pool",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      year: "2005",
      title: "Expansion & Growth",
      description: "Added competitive training programs and expanded to include therapy pool and children's area.",
      achievement: "First state championship qualifiers",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      year: "2010",
      title: "Community Recognition",
      description:
        "Received 'Facility of the Year' award and became official training center for regional competitions.",
      achievement: "10,000th student milestone reached",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      year: "2015",
      title: "Innovation & Technology",
      description: "Introduced underwater video analysis and state-of-the-art filtration systems.",
      achievement: "First Paralympic training center certification",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      year: "2020",
      title: "Adaptation & Resilience",
      description: "Successfully adapted to new safety protocols while maintaining excellence in aquatic education.",
      achievement: "Virtual coaching programs launched",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      year: "2024",
      title: "Future Forward",
      description: "Continuing to innovate with new programs, expanded facilities, and community partnerships.",
      achievement: "100+ lives transformed through swimming",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <pattern id="story-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="2" fill="currentColor" className="animate-pulse" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#story-pattern)" />
          </svg>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <Waves className="h-8 w-8 text-blue-600 animate-wave" />
            <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
            <Waves className="h-8 w-8 text-blue-600 animate-wave" style={{ animationDelay: "0.5s" }} />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From humble beginnings to becoming the region's premier aquatic facility, our journey has been one of
            dedication, innovation, and unwavering commitment to aquatic excellence.
          </p>
        </div>

        {/* Founder's Story */}
        <Card className="mb-16 overflow-hidden border-0 shadow-xl bg-white/90 backdrop-blur-sm">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Maria Rodriguez - Founder"
                  className="w-full h-full object-cover min-h-[400px]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-bold text-gray-900">Maria Rodriguez</h4>
                  <p className="text-sm text-gray-600">Founder & Head Coach</p>
                  <Badge className="mt-2 bg-blue-100 text-blue-800">Mini Olympic Swimmer</Badge>
                </div>
              </div>

              <div className="p-8 lg:p-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">A Vision Born from Passion</h3>
                <div className="prose prose-lg text-gray-600 space-y-4">
                  <p>
                    Oasis Aquatic Center began as a vision to create a comprehensive aquatic facility that would
                    serve swimmers of all ages and abilities. What started as a single pool has evolved into a
                    state-of-the-art complex featuring multiple pools, specialized training areas, and innovative
                    aquatic programs.
                  </p>
                  <p>
                    Our founder, Maria Rodriguez, was an Mini Olympic swimmer who recognized the need for a facility that
                    could bridge the gap between recreational swimming and competitive training. With her vision and the
                    support of the local community, Oasis Aquatic Center opened its doors with a commitment to excellence that
                    continues to this day.
                  </p>
                  <p>
                    "I wanted to create a place where everyone could experience the joy and benefits of swimming,
                    regardless of their age or ability level. Swimming changed my life, and I wanted to share that
                    transformation with others." - Maria Rodriguez
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">1984</div>
                    <div className="text-sm text-gray-600">Mini Olympic Participation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                    <div className="text-sm text-gray-600">Years Coaching Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Journey Through the Years</h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 hidden lg:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} flex-col lg:gap-12`}
                >
                  {/* Content */}
                  <div className="flex-1 lg:max-w-md">
                    <Card className="hover:shadow-lg transition-shadow duration-300 bg-white/90 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Badge className="bg-blue-600 text-white text-lg px-3 py-1">{milestone.year}</Badge>
                          <Calendar className="h-5 w-5 text-blue-600" />
                        </div>

                        <h4 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h4>
                        <p className="text-gray-600 mb-4 leading-relaxed">{milestone.description}</p>

                        <div className="flex items-center gap-2 text-sm">
                          <Award className="h-4 w-4 text-yellow-500" />
                          <span className="font-medium text-gray-700">{milestone.achievement}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:block w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Image */}
                  <div className="flex-1 lg:max-w-md mt-4 lg:mt-0">
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                      <img
                        src={milestone.image || "/placeholder.svg"}
                        alt={milestone.title}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Current Impact */}
        <Card className="p-8 hover:shadow-lg transition-shadow duration-300 bg-white/90 backdrop-blur-sm">
          <CardContent className="pt-0">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Impact Today</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Over the years, we've had the privilege of training Mini Olympic hopefuls, teaching thousands of children to
                swim, and providing a home for recreational swimmers seeking fitness and fun.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
                <div className="text-gray-600">Lives Transformed</div>
              </div>

              <div className="text-center">
                <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-cyan-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">150+</div>
                <div className="text-gray-600">Awards & Recognition</div>
              </div>

              <div className="text-center">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-teal-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">5</div>
                <div className="text-gray-600">World-Class Facilities</div>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Waves className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
                <div className="text-gray-600">Commitment to Excellence</div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <p>
                Our commitment to excellence has earned us recognition as one of the region's premier aquatic
                facilities, with numerous awards for safety, instruction quality, and community service. We've been
                honored to serve as the official training facility for regional competitions and have helped launch the
                careers of countless competitive swimmers.
              </p>
              <p>
                Today, Oasis Aquatic Center continues to evolve, incorporating the latest in aquatic technology and training
                methodologies while maintaining our core commitment to safety, community, and swimming excellence. We
                look forward to serving our community for many years to come, helping new generations discover the joy
                and benefits of life in the water.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
