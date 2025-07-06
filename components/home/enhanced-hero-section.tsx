"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, ChevronDown, Star, Users, Trophy, Award } from "lucide-react"
import Link from "next/link"

export function EnhancedHeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const slides = [
    {
      title: "Dive Into Excellence",
      subtitle: "Premier Swimming Facility",
      description:
        "Experience world-class aquatic training and recreational activities in our state-of-the-art facility designed for swimmers of all levels.",
      image: "from-blue-600 to-cyan-500",
      stats: { icon: <Users className="h-5 w-5" />, value: "10,000+", label: "Happy Students" },
    },
    {
      title: "Professional Training",
      subtitle: "Expert Coaching",
      description:
        "Learn from certified instructors with years of experience in competitive swimming and aquatic education.",
      image: "from-cyan-600 to-blue-500",
      stats: { icon: <Trophy className="h-5 w-5" />, value: "95%", label: "Success Rate" },
    },
    {
      title: "Family Fun Activities",
      subtitle: "For All Ages",
      description:
        "Enjoy our diverse range of water activities, from kids' programs to adult fitness classes in a safe environment.",
      image: "from-blue-500 to-teal-500",
      stats: { icon: <Award className="h-5 w-5" />, value: "25+", label: "Years Experience" },
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].image} transition-all duration-1000`}>
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Parallax Elements */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Animated Water Effect */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-900/50 to-transparent">
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-r from-blue-400/20 via-cyan-400/20 to-blue-400/20 animate-pulse"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <div className="animate-fade-in-up">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 transition-all duration-300 animate-pulse">
            <Star className="h-4 w-4 mr-2 fill-current" />
            Rated #1 Swimming Facility
          </Badge>

          <p className="text-lg md:text-xl mb-4 opacity-90 animate-slide-in-left">{slides[currentSlide].subtitle}</p>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-slide-in-right bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            {slides[currentSlide].title}
          </h1>

          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed animate-fade-in-up-delay">
            {slides[currentSlide].description}
          </p>

          {/* Dynamic Stats */}
          <div className="mb-8 inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 animate-fade-in-up-delay">
            <div className="text-blue-200">{slides[currentSlide].stats.icon}</div>
            <div className="text-2xl font-bold">{slides[currentSlide].stats.value}</div>
            <div className="text-blue-200">{slides[currentSlide].stats.label}</div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up-delay-2">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 transition-all duration-300 hover:scale-105 px-8 py-4 text-lg font-semibold group shadow-2xl"
            >
              <Link href="/enroll" className="flex items-center">
                Start Your Journey
                <div className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</div>
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent transition-all duration-300 hover:scale-105 px-8 py-4 text-lg font-semibold shadow-2xl"
            >
              <Link href="/services">Explore Services</Link>
            </Button>

            <Button
              variant="ghost"
              size="lg"
              className="text-white hover:bg-white/20 transition-all duration-300 group px-8 py-4 text-lg font-semibold"
            >
              <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Video
            </Button>
          </div>
        </div>

        {/* Enhanced Slide Indicators */}
        <div className="flex justify-center space-x-3 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`relative transition-all duration-300 ${
                index === currentSlide ? "scale-125" : "hover:scale-110"
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-white" : "bg-white/50 hover:bg-white/75"
                }`}
              />
              {index === currentSlide && (
                <div className="absolute inset-0 w-4 h-4 rounded-full bg-white animate-ping" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
          <ChevronDown className="h-6 w-6 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
