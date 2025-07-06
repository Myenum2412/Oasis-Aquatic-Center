"use client"

import Link from "next/link"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, ChevronLeft, ChevronRight, Play, Award, MapPin } from "lucide-react"

export function EnhancedTestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Working Professional & Mother",
      age: "32",
      location: "Downtown Seattle",
      image: "/placeholder.svg?height=120&width=120",
      rating: 5,
      text: "I was terrified of water my entire life. At 32, I decided to face my fear and enrolled in the adult beginner program. The instructors were incredibly patient and understanding. Maria, my instructor, created a safe space where I could learn at my own pace. Now, six months later, I'm swimming laps confidently and even considering joining the triathlon training program! My 8-year-old daughter is so proud of me, and we now swim together every weekend.",
      program: "Learn to Swim - Adult Program",
      achievement: "From water phobia to confident swimmer",
      duration: "6 months",
      videoThumbnail: "/placeholder.svg?height=200&width=300",
      beforeAfter: {
        before: "Couldn't put face in water",
        after: "Swimming 500m continuously",
      },
      additionalInfo: {
        frequency: "3 times per week",
        favoriteStroke: "Freestyle",
        nextGoal: "Open water swimming",
      },
    },
    {
      name: "Marcus Johnson",
      role: "Competitive Swimmer & Student",
      age: "16",
      location: "Bellevue High School",
      image: "/placeholder.svg?height=120&width=120",
      rating: 5,
      text: "The competitive coaching program here is world-class. Coach Maria helped me shave 3 seconds off my 100m freestyle, and I qualified for state championships for the first time. The technique analysis and personalized training plans made all the difference. The underwater video analysis showed me exactly what I needed to fix. The mental performance coaching also helped me stay focused during competitions. I've made lifelong friends here and learned discipline that helps me in school too.",
      program: "Elite Competitive Coaching",
      achievement: "State Championship Qualifier",
      duration: "2 years",
      videoThumbnail: "/placeholder.svg?height=200&width=300",
      beforeAfter: {
        before: "Regional competitor",
        after: "State championship qualifier",
      },
      additionalInfo: {
        frequency: "6 times per week",
        favoriteStroke: "Freestyle & Butterfly",
        nextGoal: "National Junior Olympics",
      },
    },
    {
      name: "Emma Chen",
      role: "Mother of Two & PTA President",
      age: "38",
      location: "Mercer Island",
      image: "/placeholder.svg?height=120&width=120",
      rating: 5,
      text: "Both my kids (ages 4 and 7) learned to swim here. The kids' program is fantastic - they make learning fun while maintaining the highest safety standards. My youngest went from being afraid to put her face in water to diving off the board in just 8 weeks! The instructors are amazing with children, and the small class sizes mean each child gets individual attention. The facility is always clean, and the staff genuinely cares about each child's progress. We've been members for 3 years now.",
      program: "Kids Swimming Program",
      achievement: "Two confident young swimmers",
      duration: "3 years",
      videoThumbnail: "/placeholder.svg?height=200&width=300",
      beforeAfter: {
        before: "Both kids afraid of water",
        after: "Swimming independently & diving",
      },
      additionalInfo: {
        frequency: "2 times per week each child",
        favoriteActivity: "Pool games & diving",
        nextGoal: "Join swim team",
      },
    },
    {
      name: "David Rodriguez",
      role: "Triathlete & Engineer",
      age: "29",
      location: "Capitol Hill",
      image: "/placeholder.svg?height=120&width=120",
      rating: 5,
      text: "The triathlon swimming program transformed my performance. The open water simulation training and drafting techniques I learned here helped me complete my first Ironman. The nutrition guidance was an unexpected bonus that really enhanced my overall performance. Coach Tom's expertise in open water swimming gave me the confidence to tackle the 2.4-mile swim portion. The video analysis helped me improve my stroke efficiency by 20%. I've recommended this program to all my triathlon buddies.",
      program: "Triathlon Swimming",
      achievement: "Completed First Ironman",
      duration: "1 year",
      videoThumbnail: "/placeholder.svg?height=200&width=300",
      beforeAfter: {
        before: "Pool swimmer only",
        after: "Ironman finisher",
      },
      additionalInfo: {
        frequency: "4 times per week",
        favoriteTraining: "Open water simulation",
        nextGoal: "Sub 1-hour Ironman swim",
      },
    },
    {
      name: "Lisa Park",
      role: "Retired Teacher & Grandmother",
      age: "65",
      location: "Queen Anne",
      image: "/placeholder.svg?height=120&width=120",
      rating: 5,
      text: "At 65, I thought it was too late to learn swimming. The senior-friendly classes and patient instructors proved me wrong. Swimming has become my favorite form of exercise - it's gentle on my joints but gives me a full-body workout. I feel 20 years younger! The warm therapy pool is perfect for my arthritis, and the aqua aerobics classes are so much fun. I've made wonderful friends here, and we often go for coffee after our sessions. The staff treats us like family.",
      program: "Senior Swimming Program",
      achievement: "Improved health and vitality",
      duration: "18 months",
      videoThumbnail: "/placeholder.svg?height=200&width=300",
      beforeAfter: {
        before: "Joint pain & limited mobility",
        after: "Swimming 30 minutes daily",
      },
      additionalInfo: {
        frequency: "5 times per week",
        favoriteActivity: "Aqua aerobics & therapy pool",
        nextGoal: "Swimming with grandchildren",
      },
    },
    {
      name: "James Thompson",
      role: "Physical Therapist & Swimmer",
      age: "34",
      location: "Fremont",
      image: "/placeholder.svg?height=120&width=120",
      rating: 5,
      text: "As a physical therapist, I appreciate the therapeutic benefits of swimming. After a back injury ended my running career, I discovered aqua therapy here. The heated therapy pool and specialized equipment helped me recover faster than traditional PT alone. Now I'm training for Masters competitions and feel stronger than ever. The staff's knowledge of injury prevention and rehabilitation is impressive. I often refer my patients here for aquatic therapy.",
      program: "Aquatic Therapy & Masters",
      achievement: "Full recovery & competitive return",
      duration: "2 years",
      videoThumbnail: "/placeholder.svg?height=200&width=300",
      beforeAfter: {
        before: "Chronic back pain",
        after: "Pain-free & competing",
      },
      additionalInfo: {
        frequency: "4 times per week",
        favoriteStroke: "Backstroke",
        nextGoal: "Masters national championships",
      },
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 10000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <radialGradient id="testimonial-ripple" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
            </radialGradient>
          </defs>
          {[...Array(12)].map((_, i) => (
            <circle
              key={i}
              cx={`${15 + i * 8}%`}
              cy={`${20 + (i % 4) * 20}%`}
              r="30"
              fill="url(#testimonial-ripple)"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.8}s` }}
            />
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Success Stories That Inspire</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our amazing community of swimmers has to say about their
            transformative experiences at AquaCenter. Every story represents a journey of growth, achievement, and
            personal triumph.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-6xl mx-auto mb-12">
          <Card className="overflow-hidden border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Video/Image Section */}
                <div className="relative bg-gradient-to-br from-blue-100 to-cyan-100 min-h-[500px] flex flex-col">
                  <div className="relative flex-1 group cursor-pointer">
                    <img
                      src={testimonials[currentTestimonial].videoThumbnail || "/placeholder.svg"}
                      alt="Video thumbnail"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-colors duration-300">
                      <Button
                        size="lg"
                        className="bg-white/90 text-blue-600 hover:bg-white rounded-full w-16 h-16 p-0 group-hover:scale-110 transition-transform duration-300"
                      >
                        <Play className="h-6 w-6 ml-1" />
                      </Button>
                    </div>
                  </div>

                  {/* Achievement Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-yellow-500" />
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          {testimonials[currentTestimonial].achievement}
                        </p>
                        <p className="text-xs text-gray-600">{testimonials[currentTestimonial].duration}</p>
                      </div>
                    </div>
                  </div>

                  {/* Before/After Stats */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Transformation</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500">Before</p>
                          <p className="font-medium text-gray-900">
                            {testimonials[currentTestimonial].beforeAfter.before}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-500">After</p>
                          <p className="font-medium text-gray-900">
                            {testimonials[currentTestimonial].beforeAfter.after}
                          </p>
                        </div>
                      </div>
                    </div>
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

                  {/* Member Profile */}
                  <div className="flex items-start space-x-4 mb-6">
                    <img
                      src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-blue-200"
                    />
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900">{testimonials[currentTestimonial].name}</h4>
                      <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                        <span>Age {testimonials[currentTestimonial].age}</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {testimonials[currentTestimonial].location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Program Details */}
                  <div className="space-y-3 mb-6">
                    <Badge className="bg-blue-100 text-blue-800">{testimonials[currentTestimonial].program}</Badge>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Training Frequency</p>
                        <p className="font-medium text-gray-900">
                          {testimonials[currentTestimonial].additionalInfo.frequency}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500">Next Goal</p>
                        <p className="font-medium text-gray-900">
                          {testimonials[currentTestimonial].additionalInfo.nextGoal}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button asChild className="flex-1 bg-blue-600 hover:bg-blue-700">
                      <Link href="/enroll">Start Your Journey</Link>
                    </Button>
                    <Button asChild variant="outline" className="flex-1 bg-transparent">
                      <Link href="/contact">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Controls */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white border-blue-200 hover:border-blue-300 shadow-lg"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white border-blue-200 hover:border-blue-300 shadow-lg"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                index === currentTestimonial ? "ring-2 ring-blue-500 shadow-xl" : ""
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-sm text-gray-600 line-clamp-3 mb-3">{testimonial.text.substring(0, 120)}...</p>

                <Badge variant="secondary" className="text-xs">
                  {testimonial.program}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mb-8">
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

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-gray-600 mb-6">
              Join our community of swimmers and start your own transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/enroll">Start Your Journey</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Schedule a Tour</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
