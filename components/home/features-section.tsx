"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Waves, Users, Trophy, Clock, Shield, Heart, Droplets } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export function FeaturesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  const features = [
    {
      icon: <Waves className="h-12 w-12" />,
      title: "Olympic-Standard Pools",
      description:
        "State-of-the-art swimming facilities with temperature-controlled water and advanced filtration systems for the ultimate swimming experience. Our pools meet international competition standards.",
      color: "from-blue-500 to-cyan-500",
      details: ["50m Olympic pool", "25m training pool", "Kids' splash zone", "Therapy pool"],
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Expert Instructors",
      description:
        "Certified professionals with international coaching experience, dedicated to helping you achieve your swimming goals safely and effectively. All instructors hold current certifications.",
      color: "from-cyan-500 to-teal-500",
      details: ["Olympic coaches", "Safety certified", "Multilingual staff", "Specialized training"],
    },
    {
      icon: <Trophy className="h-12 w-12" />,
      title: "Competitive Training",
      description:
        "Comprehensive programs for all skill levels, from beginner lessons to elite competitive training with proven track records of success in regional and national competitions.",
      color: "from-teal-500 to-blue-500",
      details: ["Elite programs", "Competition prep", "Performance analysis", "Mental coaching"],
    },
    {
      icon: <Clock className="h-12 w-12" />,
      title: "Flexible Scheduling",
      description:
        "Convenient class times throughout the week, including early morning, evening, and weekend sessions to fit your busy lifestyle. Online booking available 24/7.",
      color: "from-blue-500 to-indigo-500",
      details: ["6 AM - 10 PM daily", "Weekend classes", "Holiday programs", "Make-up sessions"],
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Safety First",
      description:
        "Comprehensive safety protocols, certified lifeguards on duty, and emergency response systems ensure a secure environment for all swimmers and their families.",
      color: "from-indigo-500 to-purple-500",
      details: ["24/7 lifeguards", "Emergency protocols", "First aid stations", "Safety equipment"],
    },
    {
      icon: <Heart className="h-12 w-12" />,
      title: "Community Focus",
      description:
        "Building lasting relationships and fostering a supportive community where swimmers of all ages can thrive and grow together through shared aquatic experiences.",
      color: "from-purple-500 to-blue-500",
      details: ["Family events", "Social programs", "Volunteer opportunities", "Alumni network"],
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = sectionRef.current?.querySelectorAll("[data-index]")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Animated Water Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <pattern id="water-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="currentColor" className="animate-pulse" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#water-pattern)" />
        </svg>
      </div>

      {/* Floating Water Droplets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <Droplets
            key={i}
            className="absolute text-blue-200 animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <Waves className="h-8 w-8 text-blue-600 animate-wave" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Why Choose AquaCenter?</h2>
            <Waves className="h-8 w-8 text-blue-600 animate-wave" style={{ animationDelay: "0.5s" }} />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the finest aquatic facilities with professional instruction, state-of-the-art equipment, and a
            commitment to excellence that sets us apart from the rest. Join our community of passionate swimmers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              data-index={index}
              className={`group hover:shadow-2xl transition-all duration-700 border-0 bg-white/80 backdrop-blur-sm overflow-hidden interactive-card ${
                visibleCards.includes(index) ? "animate-fade-in-up hover:-translate-y-3" : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8 text-center relative">
                {/* Animated Water Ripple Background */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-lg">
                  <div
                    className={`absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r ${feature.color} rounded-full opacity-10 group-hover:scale-150 group-hover:opacity-20 transition-all duration-700`}
                  />
                  <div
                    className={`absolute -bottom-10 -right-10 w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full opacity-10 group-hover:scale-150 group-hover:opacity-20 transition-all duration-700`}
                  />
                </div>

                {/* Background Gradient */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.color}`}></div>

                {/* Icon with Water Effect */}
                <div className="relative mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${feature.color} text-white group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}
                  >
                    {feature.icon}
                    <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                  </div>
                  {/* Ripple effect */}
                  <div
                    className={`absolute inset-0 w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${feature.color} opacity-20 scale-100 group-hover:scale-150 transition-transform duration-700`}
                  />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>

                {/* Feature Details */}
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {feature.details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-gray-500 group-hover:text-gray-700 transition-colors duration-300"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.color}`} />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <Waves className="h-6 w-6 text-blue-600 animate-wave" />
            <p className="text-lg text-gray-700">Ready to experience the difference?</p>
            <a
              href="/enroll"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 hover:scale-105"
            >
              Start Today
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
