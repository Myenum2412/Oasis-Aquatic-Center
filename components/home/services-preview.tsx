"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Waves,
  Dumbbell,
  Users,
  Star,
  Clock,
  MapPin,
} from "lucide-react"
import Link from "next/link"

export function ServicesPreview() {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      icon: <Waves className="h-8 w-8" />,
      title: "Aquatic Services",
      description:
        "From pool access to specialized water activities including aqua yoga, water balloon games, and mini boat rentals for all ages. Experience the joy of water in a safe, supervised environment.",
      features: ["Pool Area Access", "Water Activities", "Equipment Rental", "Safety Supervision"],
      color: "from-blue-500 to-cyan-500",
      image: "bg-[url('/images/home/aquaticservices.jpeg')]",
      rating: 4.9,
      popular: true,
      details: {
        facilities: ["Olympic pool", "Kids pool", "Therapy pool", "Hot tub"],
        activities: ["Free swimming", "Water aerobics", "Pool games", "Relaxation"],
        included: ["Towel service", "Locker rental", "Basic equipment", "Shower facilities"],
      },
    },
    {
      icon: <Dumbbell className="h-8 w-8" />,
      title: "Fitness Programs",
      description:
        "High-intensity aqua fitness classes including Aqua Bike sessions and Aqua Yoga Max for optimal health and wellness. Low-impact workouts that deliver maximum results.",
      features: ["Aqua Bike Sessions", "Aqua Yoga Max", "Group Classes", "Personal Training"],
      color: "from-cyan-500 to-teal-500",
      image: "bg-[url('/images/home/fitnessprograms.jpeg')]",
      rating: 4.8,
      popular: false,
      details: {
        facilities: ["Fitness pool", "Equipment room", "Changing areas", "Relaxation zone"],
        activities: ["Aqua cycling", "Water yoga", "Resistance training", "Cardio workouts"],
        included: ["Equipment use", "Towels", "Water bottles", "Progress tracking"],
      },
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Swimming Education",
      description:
        "Comprehensive swimming courses from beginner lessons to competitive coaching, tailored for every age and skill level. Expert instruction with proven teaching methodologies.",
      features: ["Learn to Swim", "Competitive Coaching", "Kids Programs", "Adult Classes"],
      color: "from-teal-500 to-blue-500",
      image: "bg-[url('/images/home/swimmingeducation.jpeg')]",
      rating: 4.9,
      popular: false,
      details: {
        facilities: ["Teaching pools", "Video analysis", "Classroom", "Parent viewing"],
        activities: ["Stroke technique", "Water safety", "Competition prep", "Skill assessment"],
        included: ["Certified instruction", "Progress reports", "Equipment", "Certificates"],
      },
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [services.length])

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <radialGradient id="ripple" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
              </radialGradient>
            </defs>
            {[...Array(8)].map((_, i) => (
              <circle
                key={i}
                cx={`${20 + i * 15}%`}
                cy={`${30 + (i % 3) * 20}%`}
                r="50"
                fill="url(#ripple)"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.5}s` }}
              />
            ))}
          </svg>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <Waves className="h-8 w-8 text-blue-600 animate-wave" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Explore Our Offerings</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of aquatic services, fitness programs, and educational courses designed to
            meet every swimmer's needs and goals. From recreational swimming to competitive training.
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white rounded-2xl p-2 shadow-lg border">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeService === index
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                {service.icon}
                <span className="font-medium hidden sm:inline">{service.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Service Display */}
        <div className="mb-12">
          <Card className="overflow-hidden border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div
                className={`${services[activeService].image} bg-cover bg-center relative min-h-[400px] flex items-center justify-center bg-gradient-to-br from-blue-100 to-cyan-100`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${services[activeService].color} opacity-20`}></div>
                <div className="relative z-10 text-center p-8">
                  <div
                    className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r ${services[activeService].color} text-white mb-6 animate-pulse-glow`}
                  >
                    {services[activeService].icon}
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="text-lg font-semibold text-gray-700">{services[activeService].rating}</span>
                    <span className="text-gray-500">(500+ reviews)</span>
                  </div>
                  {services[activeService].popular && <Badge className="bg-orange-500 text-white">Most Popular</Badge>}
                </div>
              </div>

              {/* Content Section */}
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-3xl font-bold text-gray-900">{services[activeService].title}</h3>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed text-lg">{services[activeService].description}</p>

                {/* Detailed Features */}
                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-blue-600" />
                      Facilities
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {services[activeService].details.facilities.map((facility, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${services[activeService].color}`} />
                          {facility}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Waves className="h-4 w-4 text-blue-600" />
                      Activities
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {services[activeService].details.activities.map((activity, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${services[activeService].color}`} />
                          {activity}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-600" />
                      Included
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {services[activeService].details.included.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${services[activeService].color}`} />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    asChild
                    className="flex-1 bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105"
                  >
                    <Link href="/enroll" className="flex items-center justify-center">
                      Enroll Now
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="flex-1 bg-transparent">
                    <Link href="/services">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group hover:shadow-2xl transition-all duration-500 border-0 cursor-pointer ${
                activeService === index ? "ring-2 ring-blue-500 shadow-xl scale-105" : "hover:-translate-y-1"
              }`}
              onClick={() => setActiveService(index)}
            >
              <div className={`h-48 ${service.image} bg-cover bg-center relative overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100`}>
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                ></div>
                <div className="absolute top-4 right-4">
                  {service.popular && <Badge className="bg-orange-500 text-white">Popular</Badge>}
                </div>
                <div className="absolute bottom-4 left-4">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${service.color} text-white`}
                  >
                    {service.icon}
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold">{service.rating}</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">{service.description}</p>
                <ul className="space-y-1 mb-4">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full group-hover:bg-blue-600 transition-colors duration-300" size="sm">
                  Select Service
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg animate-pulse-glow">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
