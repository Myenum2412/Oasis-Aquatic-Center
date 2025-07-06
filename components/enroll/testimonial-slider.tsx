"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Quote, ChevronLeft, ChevronRight, Play } from "lucide-react"

export function TestimonialSlider() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Working Professional",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "I was terrified of water my entire life. At 32, I decided to face my fear and enrolled in the adult beginner program. The instructors were incredibly patient and understanding. Now, six months later, I'm swimming laps confidently and even considering joining the triathlon training program!",
      program: "Learn to Swim - Adult Program",
      achievement: "From water phobia to confident swimmer",
      videoThumbnail: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Marcus Johnson",
      role: "Competitive Swimmer",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "The competitive coaching program here is world-class. Coach Maria helped me shave 3 seconds off my 100m freestyle, and I qualified for state championships for the first time. The technique analysis and personalized training plans made all the difference.",
      program: "Elite Competitive Coaching",
      achievement: "State Championship Qualifier",
      videoThumbnail: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Emma Chen",
      role: "Mother of Two",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "Both my kids (ages 4 and 7) learned to swim here. The kids' program is fantastic - they make learning fun while maintaining the highest safety standards. My youngest went from being afraid to put her face in water to diving off the board in just 8 weeks!",
      program: "Kids Swimming Program",
      achievement: "Two confident young swimmers",
      videoThumbnail: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "David Rodriguez",
      role: "Triathlete",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "The triathlon swimming program transformed my performance. The open water simulation training and drafting techniques I learned here helped me complete my first Ironman. The nutrition guidance was an unexpected bonus that really enhanced my overall performance.",
      program: "Triathlon Swimming",
      achievement: "Completed First Ironman",
      videoThumbnail: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Lisa Park",
      role: "Senior Citizen",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "At 65, I thought it was too late to learn swimming. The senior-friendly classes and patient instructors proved me wrong. Swimming has become my favorite form of exercise - it's gentle on my joints but gives me a full-body workout. I feel 20 years younger!",
      program: "Senior Swimming Program",
      achievement: "Improved health and vitality",
      videoThumbnail: "/placeholder.svg?height=200&width=300",
    },
  ]

  useEffect(() => {
    if (!isPlaying) return

    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [isPlaying, testimonials.length])

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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our amazing community of swimmers who have transformed their lives through our programs.
          </p>
        </div>

        <div className="relative">
          <Card className="overflow-hidden border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Video/Image Section */}
                <div className="relative bg-gradient-to-br from-blue-100 to-cyan-100 min-h-[400px] flex items-center justify-center">
                  <div className="relative group cursor-pointer">
                    <img
                      src={testimonials[currentTestimonial].videoThumbnail || "/placeholder.svg"}
                      alt="Video thumbnail"
                      className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center group-hover:bg-black/20 transition-colors duration-300">
                      <Button
                        size="lg"
                        className="bg-white/90 text-blue-600 hover:bg-white rounded-full w-16 h-16 p-0 group-hover:scale-110 transition-transform duration-300"
                      >
                        <Play className="h-6 w-6 ml-1" />
                      </Button>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                    <p className="text-sm font-semibold text-gray-900">
                      {testimonials[currentTestimonial].achievement}
                    </p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Quote className="h-12 w-12 text-blue-200 mb-6" />

                  <div className="mb-6">
                    <div className="flex mb-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic mb-6">
                      "{testimonials[currentTestimonial].text}"
                    </p>
                  </div>

                  <div className="flex items-center space-x-4 mb-6">
                    <img
                      src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-blue-200"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{testimonials[currentTestimonial].name}</h4>
                      <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                      <p className="text-blue-600 text-sm font-medium">{testimonials[currentTestimonial].program}</p>
                    </div>
                  </div>

                  {/* Program Badge */}
                  <div className="inline-flex">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {testimonials[currentTestimonial].program}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="bg-white/80 hover:bg-white border-blue-200 hover:border-blue-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
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

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="bg-white/80 hover:bg-white border-blue-200 hover:border-blue-300"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Auto-play Control */}
          <div className="text-center mt-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isPlaying ? "Pause" : "Play"} Auto-advance
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
