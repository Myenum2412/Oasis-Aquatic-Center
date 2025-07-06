import { Card, CardContent } from "@/components/ui/card"

export function TeamSection() {
  const team = [
    {
      name: "Maria Rodriguez",
      role: "Founder & Head Coach",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Olympic swimmer with 20+ years of coaching experience",
      specialties: ["Competitive Swimming", "Technique Analysis", "Performance Coaching"],
    },
    {
      name: "David Chen",
      role: "Aquatic Director",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Masters in Sports Science, certified in water safety",
      specialties: ["Program Development", "Safety Management", "Staff Training"],
    },
    {
      name: "Sarah Johnson",
      role: "Youth Program Coordinator",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Specialized in child development and aquatic education",
      specialties: ["Kids Programs", "Learn to Swim", "Parent-Child Classes"],
    },
    {
      name: "Michael Thompson",
      role: "Fitness Instructor",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Certified in aqua fitness and rehabilitation therapy",
      specialties: ["Aqua Yoga", "Aqua Bike", "Therapeutic Swimming"],
    },
  ]

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Expert Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our certified professionals bring years of experience and passion for aquatic education to help you achieve
            your swimming goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="space-y-1">
                  {member.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-1 mb-1"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
