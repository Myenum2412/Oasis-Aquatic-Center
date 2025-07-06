"use client"

import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Users, CheckCircle, Award, Waves } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

interface Service {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  price: string
  rating: number
  reviews: number
  duration: string
  capacity: string
  ageGroup: string
  difficulty: string
  equipment: string[]
  benefits: string[]
  schedule: string[]
  instructor: string
  image: string
  popular?: boolean
  new?: boolean
}

interface EnhancedServicesGridProps {
  services: Service[]
}

export function EnhancedServicesGrid({ services }: EnhancedServicesGridProps) {
  const [selectedService, setSelectedService] = useState<number | null>(null)
  const [filter, setFilter] = useState<string>("all")

  const filters = [
    { id: "all", name: "All Services", count: services.length },
    {
      id: "aquatic",
      name: "Aquatic Activities",
      count: services.filter((s) => s.title.includes("Pool") || s.title.includes("Water")).length,
    },
    {
      id: "fitness",
      name: "Fitness Programs",
      count: services.filter((s) => s.title.includes("Aqua") || s.title.includes("Bike")).length,
    },
    {
      id: "kids",
      name: "Kids Programs",
      count: services.filter((s) => s.ageGroup.includes("Kids") || s.ageGroup.includes("Children")).length,
    },
    {
      id: "therapy",
      name: "Therapeutic",
      count: services.filter((s) => s.title.includes("Therapy") || s.benefits.some((b) => b.includes("therapy")))
        .length,
    },
  ]

  const filteredServices =
    filter === "all"
      ? services
      : services.filter((service) => {
          switch (filter) {
            case "aquatic":
              return service.title.includes("Pool") || service.title.includes("Water")
            case "fitness":
              return service.title.includes("Aqua") || service.title.includes("Bike")
            case "kids":
              return service.ageGroup.includes("Kids") || service.ageGroup.includes("Children")
            case "therapy":
              return service.title.includes("Therapy") || service.benefits.some((b) => b.includes("therapy"))
            default:
              return true
          }
        })

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <pattern id="services-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="40" cy="40" r="2" fill="currentColor" className="animate-pulse" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#services-pattern)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <Waves className="h-8 w-8 text-blue-600 animate-wave" />
            <h2 className="text-4xl font-bold text-gray-900">Our Comprehensive Services</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our full range of aquatic services designed to meet every need, from recreational swimming to
            specialized therapeutic programs. Each service is delivered by certified professionals in world-class
            facilities.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filterOption) => (
            <Button
              key={filterOption.id}
              variant={filter === filterOption.id ? "default" : "outline"}
              onClick={() => setFilter(filterOption.id)}
              className={`transition-all duration-300 hover:scale-105 ${
                filter === filterOption.id ? "bg-blue-600 text-white shadow-lg" : "hover:bg-blue-50"
              }`}
            >
              {filterOption.name}
              <Badge variant="secondary" className="ml-2">
                {filterOption.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <Card
              key={index}
              className={`group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm overflow-hidden cursor-pointer ${
                selectedService === index ? "ring-2 ring-blue-500 shadow-xl scale-105" : "hover:-translate-y-2"
              }`}
              onClick={() => setSelectedService(selectedService === index ? null : index)}
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {service.popular && <Badge className="bg-orange-500 text-white">Popular</Badge>}
                  {service.new && <Badge className="bg-green-500 text-white">New</Badge>}
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold">{service.rating}</span>
                    <span className="text-xs text-gray-600">({service.reviews})</span>
                  </div>
                </div>

                {/* Price */}
                <div className="absolute bottom-4 right-4 bg-blue-600 text-white rounded-lg px-3 py-2">
                  <span className="font-bold">{service.price}</span>
                </div>

                {/* Icon */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3">
                  <div className="text-blue-600">{service.icon}</div>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Quick Info */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600">{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600">{service.capacity}</span>
                  </div>
                </div>

                {/* Age Group & Difficulty */}
                <div className="flex gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    {service.ageGroup}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {service.difficulty}
                  </Badge>
                </div>

                {/* Features Preview */}
                <div className="space-y-2 mb-4">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-xs text-gray-500">+{service.features.length - 3} more features</div>
                  )}
                </div>

                {/* Expanded Details */}
                {selectedService === index && (
                  <div className="mt-6 pt-6 border-t border-gray-200 space-y-4 animate-fade-in">
                    {/* Benefits */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Benefits</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <Award className="h-3 w-3 text-blue-500 flex-shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Equipment */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Equipment Provided</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.equipment.map((item, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Schedule */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Schedule</h4>
                      <div className="space-y-1">
                        {service.schedule.map((time, idx) => (
                          <div key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                            <Clock className="h-3 w-3 text-gray-400" />
                            {time}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Instructor */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Lead Instructor</h4>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <Users className="h-4 w-4 text-blue-600" />
                        </div>
                        <span className="text-sm text-gray-600">{service.instructor}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-2 mt-4">
                  <Button asChild className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <Link href="/enroll">Enroll Now</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/contact">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Can't Find What You're Looking For?</h3>
            <p className="text-gray-600 mb-6">
              We offer customized programs and private lessons tailored to your specific needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/courses">View All Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
