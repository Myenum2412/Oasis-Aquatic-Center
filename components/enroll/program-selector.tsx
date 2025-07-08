"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Clock, Trophy, Heart, Target, Waves, Baby, Medal } from "lucide-react"

export function ProgramSelector() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null)

  const categories = [
    { id: "all", name: "All Programs", count: 12 },
    { id: "beginner", name: "Beginner", count: 4 },
    { id: "intermediate", name: "Intermediate", count: 3 },
    { id: "advanced", name: "Advanced", count: 3 },
    { id: "kids", name: "Kids", count: 2 },
  ]

  const programs = [
    {
      id: "learn-to-swim",
      title: "Learn to Swim",
      category: "beginner",
      icon: <Waves className="h-8 w-8" />,
      duration: "8 weeks",
      schedule: "3x per week",
      level: "Beginner",
      ageGroup: "All ages",
      price: "$120",
      description: "Master the fundamentals of swimming with our comprehensive beginner program.",
      features: ["Water safety basics", "Floating techniques", "Basic strokes", "Breathing control"],
      badge: "Most Popular",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "kids-swimming",
      title: "Kids Swimming (3-6)",
      category: "kids",
      icon: <Baby className="h-8 w-8" />,
      duration: "6 weeks",
      schedule: "2x per week",
      level: "Beginner",
      ageGroup: "3-6 years",
      price: "$95",
      description: "Fun-focused swimming lessons designed specifically for young children.",
      features: ["Play-based learning", "Water confidence", "Basic safety", "Parent viewing area"],
      badge: "Kids Favorite",
      color: "from-green-500 to-teal-500",
    },
    {
      id: "competitive-coaching",
      title: "Competitive Coaching",
      category: "advanced",
      icon: <Trophy className="h-8 w-8" />,
      duration: "Ongoing",
      schedule: "5x per week",
      level: "Advanced",
      ageGroup: "12+ years",
      price: "$200/month",
      description: "Elite training for competitive swimmers aiming for regional and national competitions.",
      features: ["Advanced technique", "Race preparation", "Performance analysis", "Mental coaching"],
      badge: "Elite Program",
      color: "from-purple-500 to-indigo-500",
    },
    {
      id: "ladies-only",
      title: "Ladies Only Sessions",
      category: "intermediate",
      icon: <Heart className="h-8 w-8" />,
      duration: "Ongoing",
      schedule: "2x per week",
      level: "All levels",
      ageGroup: "Adults",
      price: "$25/session",
      description: "Comfortable, supportive environment exclusively for women swimmers.",
      features: ["Female instructors", "Private sessions", "Supportive community", "Flexible levels"],
      badge: "Exclusive",
      color: "from-pink-500 to-rose-500",
    },
    {
      id: "water-polo",
      title: "Water Polo Training",
      category: "intermediate",
      icon: <Target className="h-8 w-8" />,
      duration: "12 weeks",
      schedule: "3x per week",
      level: "Intermediate",
      ageGroup: "14+ years",
      price: "$150/month",
      description: "Learn the exciting team sport that combines swimming, strategy, and skill.",
      features: ["Team tactics", "Ball handling", "Swimming endurance", "Game strategy"],
      badge: "Team Sport",
      color: "from-orange-500 to-red-500",
    },
    {
      id: "triathlon",
      title: "Triathlon Swimming",
      category: "advanced",
      icon: <Medal className="h-8 w-8" />,
      duration: "16 weeks",
      schedule: "3x per week",
      level: "Advanced",
      ageGroup: "16+ years",
      price: "$180/month",
      description: "Specialized training for triathlon athletes focusing on open water techniques.",
      features: ["Open water simulation", "Drafting techniques", "Endurance building", "Race strategy"],
      badge: "Specialized",
      color: "from-teal-500 to-blue-500",
    },
  ]

  const filteredPrograms =
    selectedCategory === "all" ? programs : programs.filter((program) => program.category === selectedCategory)

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case "Most Popular":
        return "default"
      case "Exclusive":
        return "secondary"
      case "Kids Favorite":
        return "outline"
      case "Elite Program":
        return "destructive"
      default:
        return "secondary"
    }
  }

  return (
    <section id="programs" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Choose Your Program</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Select from our comprehensive range of swimming programs designed to meet your specific goals, skill level,
            and schedule preferences.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`transition-all duration-300 hover:scale-105 ${
                selectedCategory === category.id ? "bg-blue-600 text-white shadow-lg" : "hover:bg-blue-50"
              }`}
            >
              {category.name}
              <Badge variant="secondary" className="ml-2">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program, index) => (
            <Card
              key={program.id}
              className={`group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                selectedProgram === program.id ? "ring-2 ring-blue-500 shadow-xl" : ""
              }`}
              onClick={() => setSelectedProgram(selectedProgram === program.id ? null : program.id)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`h-2 bg-gradient-to-r ${program.color} rounded-t-lg`}></div>

              <CardContent className="p-6 relative">
                {program.badge && (
                  <Badge className="absolute top-4 right-4" variant={getBadgeVariant(program.badge)}>
                    {program.badge}
                  </Badge>
                )}

                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${program.color} text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    {program.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{program.ageGroup}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>

                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>
                      {program.duration} • {program.schedule}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{program.level}</span>
                  </div>
                </div>

                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    selectedProgram === program.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="border-t pt-4 mt-4">
                    <h4 className="font-semibold mb-2">Program Features:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <Button
                    size="sm"
                    className="group-hover:scale-105 transition-transform duration-300"
                    onClick={(e) => {
                      e.stopPropagation()
                      document.getElementById("enrollment-form")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    Select Program
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
