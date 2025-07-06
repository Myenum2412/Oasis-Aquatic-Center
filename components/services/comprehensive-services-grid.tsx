"use client"

import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Star,
  Clock,
  Users,
  CheckCircle,
  Waves,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Heart,
  Shield,
  Trophy,
  Target,
  ThermometerSun,
  Dumbbell,
  Baby,
  PartyPopper,
  Activity,
  Timer,
  UserCheck,
} from "lucide-react"
import { useState } from "react"
import Link from "next/link"

interface Service {
  id: string
  icon: React.ReactNode
  title: string
  subtitle: string
  description: string
  detailedDescription: string
  features: string[]
  benefits: string[]
  rating: number
  reviews: number
  capacity: string
  ageGroup: string
  difficulty: string
  equipment: string[]
  schedule: {
    weekdays: string[]
    weekends: string[]
    holidays: string
  }
  instructor: {
    name: string
    credentials: string
    experience: string
    image: string
  }
  facility: {
    poolType: string
    temperature: string
    depth: string
    features: string[]
  }
  images: string[]
  testimonials: {
    name: string
    review: string
    rating: number
    image: string
  }[]
  faqs: {
    question: string
    answer: string
  }[]
  prerequisites: string[]
  whatToExpect: string[]
  afterCompletion: string[]
  popular?: boolean
  new?: boolean
  category: string
}

const services: Service[] = [
  {
    id: "olympic-training",
    icon: <Trophy className="h-8 w-8" />,
    title: "Olympic Pool Training",
    subtitle: "Elite Performance Development",
    description:
      "Professional training in our 50-meter Olympic-standard pool with advanced coaching and performance analysis.",
    detailedDescription:
      "Our Olympic Pool Training program is designed for serious swimmers who want to take their performance to the next level. Using our state-of-the-art 50-meter pool with advanced timing systems and underwater cameras, swimmers receive world-class training that has produced 15 Olympic qualifiers. Our certified coaches use proven methodologies combined with cutting-edge technology to analyze technique, improve performance, and prepare athletes for competition at all levels.",
    features: [
      "50m Olympic-size pool with 8 lanes",
      "Temperature controlled at 78-80°F",
      "Advanced timing systems with touchpads",
      "Underwater cameras for technique analysis",
      "Professional coaching with video feedback",
      "Competition preparation programs",
      "Strength and conditioning integration",
      "Mental performance coaching",
      "Nutrition guidance included",
      "Access to elite training equipment",
    ],
    benefits: [
      "Improved cardiovascular fitness and endurance",
      "Enhanced swimming technique and efficiency",
      "Competition readiness and race strategy",
      "Professional coaching guidance and mentorship",
      "Video analysis for technique improvement",
      "Mental toughness and confidence building",
      "Injury prevention and recovery protocols",
      "Performance tracking and goal setting",
    ],
    rating: 4.9,
    reviews: 234,
    capacity: "8 swimmers per session",
    ageGroup: "Ages 12+",
    difficulty: "Intermediate to Advanced",
    equipment: ["Lane ropes", "Pace clocks", "Kickboards", "Pull buoys", "Fins", "Paddles", "Snorkels"],
    schedule: {
      weekdays: ["6:00 AM - 7:30 AM", "6:00 PM - 7:30 PM"],
      weekends: ["8:00 AM - 9:30 AM", "10:00 AM - 11:30 AM"],
      holidays: "Modified schedule available",
    },
    instructor: {
      name: "Maria Rodriguez",
      credentials: "Olympic Coach, USA Swimming Certified",
      experience: "25+ years coaching elite swimmers",
      image: "/placeholder.svg?height=200&width=200",
    },
    facility: {
      poolType: "50m Olympic Pool",
      temperature: "78-80°F",
      depth: "2m - 3m variable",
      features: ["Starting blocks", "Timing systems", "Underwater cameras", "Lane ropes"],
    },
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    testimonials: [
      {
        name: "Alex Chen",
        review:
          "The Olympic training program transformed my swimming. I dropped 5 seconds off my 100m freestyle in just 3 months!",
        rating: 5,
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Sarah Williams",
        review:
          "Coach Maria's expertise and the video analysis helped me perfect my technique. Now I'm competing at state level!",
        rating: 5,
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    faqs: [
      {
        question: "What level do I need to be to join Olympic training?",
        answer:
          "You should be able to swim all four strokes competently and swim 400m continuously. We offer assessment sessions to determine readiness.",
      },
      {
        question: "Is this program suitable for masters swimmers?",
        answer: "We have many masters swimmers who train with us and compete in masters competitions.",
      },
    ],
    prerequisites: [
      "Ability to swim 400m continuously",
      "Knowledge of all four competitive strokes",
      "Basic flip turn technique",
    ],
    whatToExpect: [
      "Intensive technique analysis",
      "Personalized training plans",
      "Video feedback sessions",
      "Competition preparation",
    ],
    afterCompletion: ["Improved race times", "Enhanced technique", "Competition readiness", "Ongoing coaching support"],
    popular: true,
    category: "competitive",
  },
  {
    id: "kids-lessons",
    icon: <Baby className="h-8 w-8" />,
    title: "Kids Swimming Lessons",
    subtitle: "Building Confidence in Water",
    description:
      "Fun and safe swimming lessons for children aged 3-12, focusing on water safety and fundamental swimming skills.",
    detailedDescription:
      "Our Kids Swimming Lessons program is carefully designed to introduce children to the joy of swimming while prioritizing safety and skill development. With small class sizes and certified pediatric instructors, we create a supportive environment where children can learn at their own pace. Our progressive curriculum covers water safety, basic strokes, and confidence building through fun games and activities. Parents love our observation area where they can watch their child's progress.",
    features: [
      "Small class sizes (maximum 6 children)",
      "Certified pediatric swim instructors",
      "Progressive skill development curriculum",
      "Comprehensive water safety education",
      "Fun games and engaging activities",
      "Parent observation area with seating",
      "Heated pool perfect for children",
      "Age-appropriate teaching methods",
      "Progress tracking and certificates",
      "Make-up lessons for missed classes",
    ],
    benefits: [
      "Essential water safety skills for life",
      "Confidence building in aquatic environments",
      "Physical fitness and coordination development",
      "Social interaction with peers",
      "Improved listening and following directions",
      "Stress relief and emotional well-being",
      "Foundation for future swimming excellence",
      "Overcoming fear of water",
    ],
    rating: 4.8,
    reviews: 456,
    capacity: "6 children maximum",
    ageGroup: "Ages 3-12",
    difficulty: "Beginner to Intermediate",
    equipment: ["Floatation devices", "Pool noodles", "Diving toys", "Kickboards", "Goggles"],
    schedule: {
      weekdays: ["4:00 PM - 4:45 PM", "5:00 PM - 5:45 PM", "6:00 PM - 6:45 PM"],
      weekends: ["9:00 AM - 9:45 AM", "10:00 AM - 10:45 AM", "11:00 AM - 11:45 AM"],
      holidays: "Special holiday camps available",
    },
    instructor: {
      name: "Sarah Johnson",
      credentials: "Pediatric Swim Specialist, WSI Certified",
      experience: "12+ years teaching children",
      image: "/placeholder.svg?height=200&width=200",
    },
    facility: {
      poolType: "Teaching Pool",
      temperature: "84-86°F",
      depth: "0.9m - 1.2m",
      features: ["Non-slip surfaces", "Colorful pool toys", "Parent viewing area", "Changing rooms"],
    },
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    testimonials: [
      {
        name: "Jennifer Martinez",
        review:
          "My 5-year-old went from being afraid of water to swimming across the pool in just 2 months. Sarah is amazing!",
        rating: 5,
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "David Park",
        review:
          "The small class sizes and patient instruction made all the difference. My twins both learned to swim here!",
        rating: 5,
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    faqs: [
      {
        question: "What should my child bring to lessons?",
        answer:
          "Just a swimsuit, towel, and goggles if they have them. We provide all other equipment needed for lessons.",
      },
      {
        question: "Can parents watch the lessons?",
        answer: "Yes! We have a comfortable observation area where parents can watch their child's progress.",
      },
    ],
    prerequisites: ["None - we welcome complete beginners", "Comfortable being in water with instructor support"],
    whatToExpect: [
      "Water familiarization activities",
      "Basic floating and kicking",
      "Introduction to swimming strokes",
      "Water safety skills",
    ],
    afterCompletion: [
      "Confident water entry and exit",
      "Basic swimming ability",
      "Water safety knowledge",
      "Ready for advanced lessons",
    ],
    popular: true,
    category: "youth",
  },
  {
    id: "aqua-fitness",
    icon: <Dumbbell className="h-8 w-8" />,
    title: "Aqua Fitness Classes",
    subtitle: "Low-Impact, High-Intensity Workouts",
    description:
      "Low-impact, high-intensity water workouts perfect for all fitness levels, combining cardio and strength training.",
    detailedDescription:
      "Our Aqua Fitness Classes offer the perfect combination of cardiovascular exercise and strength training in a joint-friendly environment. The natural resistance of water provides an excellent workout while reducing stress on joints, making it ideal for people of all ages and fitness levels. Our energetic instructors lead music-driven classes that are both challenging and fun, helping participants burn calories, build strength, and improve flexibility all while staying cool in the water.",
    features: [
      "Low-impact, joint-friendly exercise routines",
      "Full-body workout combining cardio and strength",
      "Water resistance training for muscle building",
      "High-energy, music-driven classes",
      "All fitness equipment provided",
      "Modifications for different fitness levels",
      "Heated pool for comfortable workouts",
      "Social and supportive group environment",
      "Calorie-burning cardiovascular exercise",
      "Flexibility and mobility improvement",
    ],
    benefits: [
      "Improved cardiovascular health and endurance",
      "Increased muscle strength and tone",
      "Enhanced flexibility and range of motion",
      "Reduced joint stress and impact",
      "Significant calorie burning (400-500 per class)",
      "Better balance and coordination",
      "Stress reduction and mood improvement",
      "Social interaction and community building",
    ],
    rating: 4.7,
    reviews: 189,
    capacity: "15 participants",
    ageGroup: "Adults 18+",
    difficulty: "All Levels Welcome",
    equipment: ["Water weights", "Resistance bands", "Pool noodles", "Aqua dumbbells", "Kickboards"],
    schedule: {
      weekdays: ["9:00 AM", "6:30 PM", "7:30 PM"],
      weekends: ["10:00 AM", "11:00 AM"],
      holidays: "Holiday schedule varies",
    },
    instructor: {
      name: "Mike Thompson",
      credentials: "Aqua Fitness Specialist, ACSM Certified",
      experience: "15+ years in aquatic fitness",
      image: "/placeholder.svg?height=200&width=200",
    },
    facility: {
      poolType: "Fitness Pool",
      temperature: "82-84°F",
      depth: "1.2m - 1.5m",
      features: ["Sound system", "Equipment storage", "Non-slip deck", "Shower facilities"],
    },
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    testimonials: [
      {
        name: "Linda Roberts",
        review: "I've lost 15 pounds and feel stronger than ever! The water workouts are challenging but so much fun.",
        rating: 5,
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Robert Kim",
        review:
          "Perfect for my arthritis. I get a great workout without the joint pain I experience with land exercises.",
        rating: 5,
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    faqs: [
      {
        question: "Do I need to know how to swim to participate?",
        answer:
          "No! Most exercises are done in chest-deep water where you can stand comfortably. Swimming ability is not required.",
      },
      {
        question: "What should I wear to class?",
        answer:
          "Wear a comfortable swimsuit and water shoes if you have them. We recommend avoiding loose clothing that creates drag.",
      },
    ],
    prerequisites: ["Comfortable standing in chest-deep water", "Basic mobility and movement ability"],
    whatToExpect: [
      "Warm-up and cool-down periods",
      "Cardio and strength intervals",
      "Use of water resistance equipment",
      "Motivating group atmosphere",
    ],
    afterCompletion: [
      "Improved fitness and strength",
      "Better cardiovascular health",
      "Enhanced flexibility",
      "Ongoing fitness motivation",
    ],
    category: "fitness",
  },
  {
    id: "aquatic-therapy",
    icon: <Heart className="h-8 w-8" />,
    title: "Aquatic Therapy",
    subtitle: "Healing and Rehabilitation in Water",
    description:
      "Therapeutic water exercises for rehabilitation, injury recovery, and chronic pain management with licensed therapists.",
    detailedDescription:
      "Our Aquatic Therapy program provides specialized rehabilitation services in our heated therapy pool under the guidance of licensed physical therapists. The buoyancy and warmth of water create an ideal environment for healing, reducing pain, and restoring mobility. Whether recovering from surgery, managing chronic conditions, or seeking pain relief, our individualized treatment plans are designed to help patients achieve their rehabilitation goals safely and effectively.",
    features: [
      "Heated therapy pool maintained at 92-94°F",
      "Licensed physical therapists on staff",
      "Individualized treatment plans and assessments",
      "Pain management and mobility techniques",
      "Post-surgical rehabilitation programs",
      "Chronic condition management support",
      "Insurance billing and coordination",
      "Private and semi-private sessions available",
      "Specialized therapeutic equipment",
      "Progress tracking and documentation",
    ],
    benefits: [
      "Significant pain reduction and management",
      "Improved mobility and range of motion",
      "Faster recovery from injuries and surgery",
      "Reduced inflammation and swelling",
      "Enhanced quality of life and independence",
      "Improved strength and endurance",
      "Better balance and coordination",
      "Reduced reliance on pain medications",
    ],
    rating: 4.9,
    reviews: 98,
    capacity: "1-on-1 or small groups (2-3)",
    ageGroup: "All Ages",
    difficulty: "Therapeutic/Adaptive",
    equipment: ["Therapy equipment", "Flotation aids", "Resistance tools", "Mobility aids", "Specialized supports"],
    schedule: {
      weekdays: ["8:00 AM - 5:00 PM by appointment"],
      weekends: ["Limited weekend availability"],
      holidays: "Emergency sessions available",
    },
    instructor: {
      name: "Dr. Lisa Chen",
      credentials: "Licensed Physical Therapist, Aquatic Therapy Certified",
      experience: "18+ years in rehabilitation",
      image: "/placeholder.svg?height=200&width=200",
    },
    facility: {
      poolType: "Therapy Pool",
      temperature: "92-94°F",
      depth: "0.9m - 1.8m variable",
      features: ["Wheelchair accessibility", "Therapy equipment", "Private changing rooms", "Lift chair"],
    },
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    testimonials: [
      {
        name: "Margaret Thompson",
        review: "After my knee replacement, aquatic therapy helped me walk again without pain. Dr. Chen is wonderful!",
        rating: 5,
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "James Wilson",
        review:
          "My chronic back pain is finally manageable thanks to the therapy program. I feel like I have my life back.",
        rating: 5,
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    faqs: [
      {
        question: "Is aquatic therapy covered by insurance?",
        answer:
          "Many insurance plans cover aquatic therapy when prescribed by a physician. We help with insurance verification and billing.",
      },
      {
        question: "What conditions can benefit from aquatic therapy?",
        answer:
          "Arthritis, back pain, post-surgical recovery, fibromyalgia, stroke recovery, and many other conditions can benefit.",
      },
    ],
    prerequisites: [
      "Physician referral recommended",
      "Ability to enter and exit pool safely",
      "Medical clearance if required",
    ],
    whatToExpect: [
      "Initial assessment and goal setting",
      "Gentle therapeutic exercises",
      "Pain management techniques",
      "Progress monitoring",
    ],
    afterCompletion: ["Reduced pain levels", "Improved mobility", "Enhanced quality of life", "Home exercise program"],
    category: "therapy",
  },
]

export function ComprehensiveServicesGrid() {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("overview")

  const categories = [
    { id: "all", name: "All Services", count: services.length },
    { id: "competitive", name: "Competitive", count: services.filter((s) => s.category === "competitive").length },
    { id: "youth", name: "Youth Programs", count: services.filter((s) => s.category === "youth").length },
    { id: "fitness", name: "Fitness", count: services.filter((s) => s.category === "fitness").length },
    { id: "therapy", name: "Therapy", count: services.filter((s) => s.category === "therapy").length },
  ]

  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredServices =
    selectedCategory === "all" ? services : services.filter((service) => service.category === selectedCategory)

  const selectedServiceData = services.find((s) => s.id === selectedService)

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-cyan-50">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <pattern id="comprehensive-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="40" cy="40" r="2" fill="currentColor" className="animate-pulse" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#comprehensive-pattern)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg mb-6">
            <Waves className="h-6 w-6 text-blue-600 animate-wave" />
            <span className="font-semibold text-gray-700">Premium Aquatic Services</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Comprehensive Swimming
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Programs & Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover our complete range of professional aquatic services, from beginner lessons to elite training,
            therapeutic programs to fitness classes. Each service is delivered by certified professionals in world-class
            facilities designed for your success.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`transition-all duration-300 hover:scale-105 ${
                selectedCategory === category.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "hover:bg-blue-50 hover:border-blue-300"
              }`}
            >
              {category.name}
              <Badge variant="secondary" className="ml-2">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredServices.map((service) => (
            <Card
              key={service.id}
              className={`group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm overflow-hidden cursor-pointer ${
                selectedService === service.id ? "ring-2 ring-blue-500 shadow-2xl scale-105" : "hover:-translate-y-2"
              }`}
              onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.images[0] || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {service.popular && <Badge className="bg-orange-500 text-white">Most Popular</Badge>}
                  {service.new && <Badge className="bg-green-500 text-white">New Program</Badge>}
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold">{service.rating}</span>
                    <span className="text-xs text-gray-600">({service.reviews})</span>
                  </div>
                </div>

                {/* Icon & Price */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                    <div className="text-blue-600">{service.icon}</div>
                  </div>
                  <div className="bg-blue-600 text-white rounded-lg px-3 py-2">
                  </div>
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <p className="text-blue-600 font-medium text-sm">{service.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Quick Info */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="h-4 w-4" />
                    <span>{service.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <UserCheck className="h-4 w-4" />
                    <span>{service.ageGroup}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Target className="h-4 w-4" />
                    <span>{service.difficulty}</span>
                  </div>
                </div>

                {/* Features Preview */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features</h4>
                  <div className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-sm text-blue-600 font-medium">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    {selectedService === service.id ? "View Details" : "Learn More"}
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <Link href="/enroll">Enroll Now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Service View */}
        {selectedServiceData && (
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 animate-fade-in">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-3xl mb-2">{selectedServiceData.title}</CardTitle>
                  <p className="text-blue-100 text-lg">{selectedServiceData.subtitle}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedService(null)}
                  className="text-white hover:bg-white/20"
                >
                  ✕
                </Button>
              </div>
            </CardHeader>

            <CardContent className="p-8">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-5 mb-8">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="instructor">Instructor</TabsTrigger>
                  <TabsTrigger value="schedule">Schedule</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Program Overview</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {selectedServiceData.detailedDescription}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">What You'll Experience</h4>
                        <div className="space-y-3">
                          {selectedServiceData.whatToExpect.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Program Benefits</h4>
                        <div className="space-y-3">
                          {selectedServiceData.benefits.slice(0, 6).map((benefit, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <Star className="h-4 w-4 text-yellow-500 mt-1 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-2xl p-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Pricing Options</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center py-2 border-b border-gray-100">
                            <span className="text-gray-600">Single Session</span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-gray-100">
                            <span className="text-gray-600">Package Deal</span>
                          </div>
                          <div className="flex justify-between items-center py-2">
                            <span className="text-gray-600">Monthly Unlimited</span>
                            <span className="font-bold text-purple-600">
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="details" className="space-y-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Program Features</h3>
                        <div className="space-y-3">
                          {selectedServiceData.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Prerequisites</h4>
                        <div className="space-y-2">
                          {selectedServiceData.prerequisites.map((req, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <Shield className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{req}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Facility Information</h4>
                        <div className="bg-blue-50 rounded-xl p-6 space-y-4">
                          <div className="flex items-center gap-3">
                            <MapPin className="h-5 w-5 text-blue-600" />
                            <div>
                              <span className="font-semibold">Pool Type:</span>
                              <span className="ml-2 text-gray-700">{selectedServiceData.facility.poolType}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <ThermometerSun className="h-5 w-5 text-orange-500" />
                            <div>
                              <span className="font-semibold">Temperature:</span>
                              <span className="ml-2 text-gray-700">{selectedServiceData.facility.temperature}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Activity className="h-5 w-5 text-green-600" />
                            <div>
                              <span className="font-semibold">Depth:</span>
                              <span className="ml-2 text-gray-700">{selectedServiceData.facility.depth}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Equipment Provided</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedServiceData.equipment.map((item, idx) => (
                            <Badge key={idx} variant="outline" className="text-sm">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">After Completion</h4>
                        <div className="space-y-2">
                          {selectedServiceData.afterCompletion.map((outcome, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <Trophy className="h-4 w-4 text-yellow-500 mt-1 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{outcome}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="instructor" className="space-y-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="flex items-center gap-6">
                        <img
                          src={selectedServiceData.instructor.image || "/placeholder.svg"}
                          alt={selectedServiceData.instructor.name}
                          className="w-24 h-24 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{selectedServiceData.instructor.name}</h3>
                          <p className="text-blue-600 font-medium">{selectedServiceData.instructor.credentials}</p>
                          <p className="text-gray-600">{selectedServiceData.instructor.experience}</p>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Instructor Expertise</h4>
                        <p className="text-gray-700 leading-relaxed">
                          Our lead instructor brings extensive experience and proven results to every session. With
                          specialized training and a passion for aquatic education, they ensure each participant
                          receives personalized attention and expert guidance.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h4>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                            <Mail className="h-5 w-5 text-blue-600" />
                            <span className="text-gray-700">Direct email available upon enrollment</span>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                            <Phone className="h-5 w-5 text-green-600" />
                            <span className="text-gray-700">Phone consultations available</span>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                            <Calendar className="h-5 w-5 text-purple-600" />
                            <span className="text-gray-700">Flexible scheduling options</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-xl p-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Teaching Philosophy</h4>
                        <p className="text-gray-700 leading-relaxed italic">
                          "Every student has unique potential. My role is to create a supportive environment where that
                          potential can flourish through personalized instruction, encouragement, and proven
                          techniques."
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="schedule" className="space-y-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Weekly Schedule</h3>

                      <div className="space-y-6">
                        <div className="bg-blue-50 rounded-xl p-6">
                          <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Calendar className="h-5 w-5 text-blue-600" />
                            Weekdays
                          </h4>
                          <div className="space-y-2">
                            {selectedServiceData.schedule.weekdays.map((time, idx) => (
                              <div key={idx} className="flex items-center gap-3 p-2 bg-white rounded-lg">
                                <Timer className="h-4 w-4 text-blue-600" />
                                <span className="font-medium">{time}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-green-50 rounded-xl p-6">
                          <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <PartyPopper className="h-5 w-5 text-green-600" />
                            Weekends
                          </h4>
                          <div className="space-y-2">
                            {selectedServiceData.schedule.weekends.map((time, idx) => (
                              <div key={idx} className="flex items-center gap-3 p-2 bg-white rounded-lg">
                                <Timer className="h-4 w-4 text-green-600" />
                                <span className="font-medium">{time}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-orange-50 rounded-xl p-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-4">Holiday Schedule</h4>
                        <p className="text-gray-700">{selectedServiceData.schedule.holidays}</p>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-xl p-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-4">Booking Information</h4>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-gray-700 text-sm">Online booking available 24/7</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-gray-700 text-sm">24-hour cancellation policy</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-gray-700 text-sm">Make-up sessions available</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-gray-700 text-sm">Flexible rescheduling options</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-center">
                        <Button size="lg" className="w-full" asChild>
                          <Link href="/enroll">Book Your Session Now</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Student Reviews & Testimonials</h3>

                    <div className="grid lg:grid-cols-2 gap-8">
                      {selectedServiceData.testimonials.map((testimonial, idx) => (
                        <Card key={idx} className="bg-gradient-to-br from-blue-50 to-cyan-50 border-0">
                          <CardContent className="p-6">
                            <div className="flex items-center gap-4 mb-4">
                              <img
                                src={testimonial.image || "/placeholder.svg"}
                                alt={testimonial.name}
                                className="w-12 h-12 rounded-full object-cover"
                              />
                              <div>
                                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                <div className="flex items-center gap-1">
                                  {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                  ))}
                                </div>
                              </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed italic">"{testimonial.review}"</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <div className="mt-8 bg-white border border-gray-200 rounded-xl p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-4">Frequently Asked Questions</h4>
                      <div className="space-y-4">
                        {selectedServiceData.faqs.map((faq, idx) => (
                          <div key={idx} className="border-b border-gray-100 pb-4 last:border-b-0">
                            <h5 className="font-semibold text-gray-900 mb-2">{faq.question}</h5>
                            <p className="text-gray-700 text-sm leading-relaxed">{faq.answer}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  )
}
