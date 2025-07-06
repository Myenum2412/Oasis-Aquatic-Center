"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Competitive Swimmer",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "AquaCenter transformed my swimming technique completely. The coaches are incredibly knowledgeable and supportive. I've improved my times significantly and gained so much confidence in the water.",
      program: "Competitive Coaching",
    },
    {
      name: "Michael Chen",
      role: "Parent",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "My 5-year-old daughter loves her swimming lessons here. The instructors are patient and make learning fun. She's gone from being afraid of water to swimming confidently in just a few months.",
      program: "Kids Swimming Lessons",
    },
    {
      name: "Emma Rodriguez",
      role: "Fitness Enthusiast",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The Aqua Yoga Max classes are amazing! It's the perfect low-impact workout that helps with flexibility and strength. The instructors create such a peaceful and motivating environment.",
      program: "Aqua Yoga Max",
    },
    {
      name: "David Thompson",
      role: "Triathlete",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The triathlon swimming program here is top-notch. The open water simulation and technique coaching have been game-changers for my performance. Highly recommend to any serious athlete.",
      program: "Triathlon Swimming",
    },
    {
      name: "Lisa Park",
      role: "Adult Learner",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "I never thought I'd learn to swim at 35, but the adult beginner classes made it possible. The instructors are patient and understanding. Now I swim regularly for fitness and relaxation.",
      program: "Learn to Swim",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What Our Members Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our community of swimmers has to say about their experience at
            AquaCenter.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="overflow-hidden border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-12 text-center relative">
              <Quote className="h-12 w-12 text-blue-200 mx-auto mb-6" />

              <div className="mb-8">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                  "{testimonials[currentTestimonial].text}"
                </p>
              </div>

              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-blue-200"
                />
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-gray-900">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                  <p className="text-blue-600 text-sm font-medium">{testimonials[currentTestimonial].program}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white border-blue-200 hover:border-blue-300"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white border-blue-200 hover:border-blue-300"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? "bg-blue-600 scale-125" : "bg-blue-200 hover:bg-blue-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
