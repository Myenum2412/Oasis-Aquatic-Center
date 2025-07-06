"use client"

import React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Waves, Users, Trophy, Clock, Shield, Heart, Droplets, Star, CheckCircle, Award } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"

export function EnhancedFeaturesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const [activeFeature, setActiveFeature] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  const features = [
    {
      icon: <Waves className="h-12 w-12" />,
      title: "Mini Olympic-Standard Pools",
      description:
        "State-of-the-art swimming facilities with temperature-controlled water and advanced filtration systems for the ultimate swimming experience. Our pools meet international competition standards and are maintained to the highest quality.",
      color: "from-blue-500 to-cyan-500",
      details: [
        "Mini Olympic pool with 8 lanes",
        "training pool for lessons",
        "Kids' splash zone with water features",
        "Therapeutic pool with jets",
        "Diving pool with 1m & 3m boards",
      ],
      image: "/Images/Home/OlympicStandardPools.jpeg?height=300&width=400",
      certifications: ["FINA Approved", "USA Swimming Certified", "ADA Compliant"],
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Expert Instructors",
      description:
        "Certified professionals with international coaching experience, dedicated to helping you achieve your swimming goals safely and effectively. Our team includes Olympic coaches, certified lifeguards, and specialized therapists.",
      color: "from-cyan-500 to-teal-500",
      details: [
        "Mini Olympic-level coaches",
        "Water safety certified",
        "Multilingual instruction",
        "Specialized therapy training",
        "Youth development experts",
      ],
      image: "/Images/Home/ExpertInstructors.jpeg?height=300&width=400",
      certifications: ["Red Cross Certified", "World Swimming Instructors", "CPR/AED Certified"],
    },
    {
      icon: <Trophy className="h-12 w-12" />,
      title: "Competitive Training",
      description:
        "Comprehensive programs for all skill levels, from beginner lessons to elite competitive training with proven track records of success in regional and national competitions. Our athletes have qualified for state and national championships.",
      color: "from-teal-500 to-blue-500",
      details: [
        "Elite training programs",
        "Competition preparation",
        "Video analysis technology",
        "Mental performance coaching",
        "Nutrition guidance",
      ],
      image: "/Images/Home/CompetitiveTraining.jpeg?height=300&width=400",
      certifications: ["USA Swimming Club", "Masters Swimming", "Paralympic Training"],
    },
    {
      icon: <Clock className="h-12 w-12" />,
      title: "Flexible Scheduling",
      description:
        "Convenient class times throughout the week, including early morning, evening, and weekend sessions to fit your busy lifestyle. Online booking system available 24/7 with easy rescheduling options.",
      color: "from-blue-500 to-indigo-500",
      details: [
        "Weekend & holiday programs",
        "Make-up session policy",
        "Online booking system",
        "Mobile app scheduling",
      ],
      image: "/Images/Home/FlexibleScheduling.jpeg?height=300&width=400",
      certifications: ["Flexible Membership", "No Long-term Contracts", "Family Packages"],
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Safety First",
      description:
        "Comprehensive safety protocols, certified lifeguards on duty, and emergency response systems ensure a secure environment for all swimmers and their families. We maintain the highest safety standards in the industry.",
      color: "from-indigo-500 to-purple-500",
      details: [
        "Emergency response protocols",
        "First aid stations",
        "Safety equipment",
        "Regular safety drills",
      ],
      image: "/Images/Home/SafetyFirst.jpeg?height=300&width=400",
      certifications: ["Red Cross Safety", "Emergency Response", "Health Department Approved"],
    },
    {
      icon: <Heart className="h-12 w-12" />,
      title: "Community Focus",
      description:
        "Building lasting relationships and fostering a supportive community where swimmers of all ages can thrive and grow together through shared aquatic experiences. We host regular events and social gatherings.",
      color: "from-purple-500 to-blue-500",
      details: [
        "Family swim events",
        "Social programs",
        "Volunteer opportunities",
        "Alumni network",
        "Community partnerships",
      ],
      image: "/Images/Home/CommunityFocus.jpeg?height=300&width=400",
      certifications: ["Community Partner", "Youth Development", "Family Friendly"],
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

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [features.length])

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Enhanced Animated Water Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <pattern id="water-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="currentColor" className="animate-pulse" />
              <circle
                cx="25"
                cy="75"
                r="1.5"
                fill="currentColor"
                className="animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
              <circle
                cx="75"
                cy="25"
                r="1"
                fill="currentColor"
                className="animate-pulse"
                style={{ animationDelay: "1s" }}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#water-pattern)" />
        </svg>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <Waves className="h-8 w-8 text-blue-600 animate-wave" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Why Choose Oasis Aquatic Center?</h2>
            <Waves className="h-8 w-8 text-blue-600 animate-wave" style={{ animationDelay: "0.5s" }} />
          </div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Experience the finest aquatic facilities with professional instruction, state-of-the-art equipment, and a
            commitment to excellence that sets us apart from the rest. Join our community of passionate swimmers and
            discover what makes us the premier choice for aquatic education and recreation.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="font-semibold">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="font-semibold">Certified Safe</span>
            </div>
          </div>
        </div>

        {/* Featured Highlight */}
        <div className="mb-16">
          <Card className="overflow-hidden border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative">
                <img
                  src={features[activeFeature].image || "/placeholder.svg"}
                  alt={features[activeFeature].title}
                  className="w-full h-full object-cover min-h-[400px]"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${features[activeFeature].color} opacity-20`}></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-gray-900">Featured</Badge>
                </div>
              </div>

              <CardContent className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${features[activeFeature].color} text-white`}>
                    {features[activeFeature].icon}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{features[activeFeature].title}</h3>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed text-lg">{features[activeFeature].description}</p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {features[activeFeature].details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Certifications</h4>
                    <div className="space-y-2">
                      {features[activeFeature].certifications.map((cert, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <Award className="h-4 w-4 text-blue-500 flex-shrink-0" />
                          <span>{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/about">Learn More About Our Facilities</Link>
                </Button>
              </CardContent>
            </div>
          </Card>

          {/* Feature Navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeFeature ? "bg-blue-600 scale-125" : "bg-blue-200 hover:bg-blue-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              data-index={index}
              className={`group hover:shadow-2xl transition-all duration-700 border-0 bg-white/80 backdrop-blur-sm overflow-hidden interactive-card ${
                visibleCards.includes(index) ? "animate-fade-in-up hover:-translate-y-3" : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                ></div>
                <div className="absolute top-4 right-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center text-white`}
                  >
                    {React.cloneElement(feature.icon, { className: "h-6 w-6" })}
                  </div>
                </div>
              </div>

              <CardContent className="p-6 relative">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.color}`}></div>

                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-sm">{feature.description}</p>

                <div className="space-y-2 mb-4">
                  {feature.details.slice(0, 3).map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.color}`} />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-blue-50 transition-colors duration-300 bg-transparent"
                  onClick={() => setActiveFeature(index)}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <Waves className="h-8 w-8 text-blue-600 animate-wave" />
            <div className="text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to experience the difference?</h3>
              <p className="text-gray-600 mb-4">
                Join thousands of satisfied swimmers who have made Oasis Aquatic Center their aquatic home.
              </p>
              <div className="flex gap-3">
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/enroll">Start Today</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Schedule Tour</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}