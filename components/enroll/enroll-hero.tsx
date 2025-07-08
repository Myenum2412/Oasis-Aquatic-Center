"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Users, Trophy, Clock } from "lucide-react"

export function EnrollHero() {
  const [currentStat, setCurrentStat] = useState(0)

  const stats = [
    { icon: <Users className="h-6 w-6" />, value: "1000+", label: "Happy Students" },
    { icon: <Trophy className="h-6 w-6" />, value: "95%", label: "Success Rate" },
    { icon: <Star className="h-6 w-6" />, value: "4.9/5", label: "Average Rating" },
    { icon: <Clock className="h-6 w-6" />, value: "6+", label: "Years Experience" },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [stats.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-white/10 rounded-full animate-pulse delay-1500"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 transition-all duration-300">
            🏊‍♂️ Start Your Swimming Journey Today
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Enroll Now
          </h1>

          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied swimmers who have transformed their lives through our expert instruction and
            world-class facilities. Your aquatic journey begins with a single splash.
          </p>

          {/* Dynamic Stats Display */}
          <div className="mb-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-3 transition-all duration-500">
              <div className="text-blue-200">{stats[currentStat].icon}</div>
              <div className="text-3xl font-bold">{stats[currentStat].value}</div>
              <div className="text-blue-200">{stats[currentStat].label}</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 transition-all duration-300 hover:scale-105 px-8 py-4 text-lg font-semibold group"
              onClick={() => document.getElementById("enrollment-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Start Enrollment
              <div className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</div>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent transition-all duration-300 hover:scale-105 px-8 py-4 text-lg font-semibold"
              onClick={() => document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Programs
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
