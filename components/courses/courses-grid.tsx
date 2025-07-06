import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users } from "lucide-react"

interface Course {
  icon: React.ReactNode
  title: string
  description: string
  schedule: string
  level: string
  ageGroup: string
  features: string[]
  badge?: string
}

interface CoursesGridProps {
  courses: Course[]
  getBadgeVariant: (badge: string) => "default" | "secondary" | "outline" | "destructive"
}

export function CoursesGrid({ courses, getBadgeVariant }: CoursesGridProps) {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative"
            >
              {course.badge && (
                <Badge className="absolute top-4 right-4 z-10" variant={getBadgeVariant(course.badge)}>
                  {course.badge}
                </Badge>
              )}
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-blue-600 bg-blue-100 p-2 rounded-lg">{course.icon}</div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                </div>
                <p className="text-gray-600">{course.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span>
                      {course.level} • {course.ageGroup}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {course.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
