"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, Heart, Lightbulb, Globe, Star, Zap } from "lucide-react"
import { useState } from "react"

export function EnhancedMissionVision() {
  const [activeTab, setActiveTab] = useState("mission")

  const tabs = [
    {
      id: "mission",
      label: "Our Mission",
      icon: <Target className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500",
      content: {
        title: "Empowering Lives Through Aquatic Excellence",
        description:
          "To provide world-class aquatic facilities and programs that promote health, fitness, and competitive excellence while fostering a love for swimming in our community.",
        points: [
          "Deliver exceptional aquatic education and training programs",
          "Create a safe, inclusive environment for swimmers of all levels",
          "Promote physical fitness and mental well-being through swimming",
          "Build confidence and life skills through water-based activities",
          "Support competitive swimmers in achieving their personal best",
          "Serve as a community hub for aquatic recreation and education",
        ],
      },
    },
    {
      id: "vision",
      label: "Our Vision",
      icon: <Heart className="h-6 w-6" />,
      color: "from-purple-500 to-pink-500",
      content: {
        title: "The Premier Destination for Aquatic Excellence",
        description:
          "To be the leading aquatic center that inspires individuals to achieve their personal best while building a stronger, healthier community through the transformative power of swimming.",
        points: [
          "Recognized as the region's premier aquatic education facility",
          "Setting the standard for safety and innovation in aquatic programs",
          "Developing the next generation of swimming champions",
          "Creating lasting positive impact in our community",
          "Expanding access to quality aquatic education for all",
          "Leading research and development in aquatic training methods",
        ],
      },
    },
    {
      id: "values",
      label: "Core Values",
      icon: <Star className="h-6 w-6" />,
      color: "from-green-500 to-teal-500",
      content: {
        title: "The Principles That Guide Us",
        description:
          "Our core values shape every decision we make and every interaction we have with our community members.",
        points: [
          "Safety First: Uncompromising commitment to swimmer safety",
          "Excellence: Maintaining the highest standards in everything we do",
          "Integrity: Operating with honesty and transparency",
          "Innovation: Embracing new technologies and methods",
          "Community: Building strong relationships and inclusive environment",
          "Achievement: Helping every individual reach their potential",
        ],
      },
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <pattern id="mission-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="2" fill="currentColor" className="animate-pulse" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mission-pattern)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg mb-6">
            <Lightbulb className="h-6 w-6 text-yellow-500" />
            <span className="font-semibold text-gray-700">What Drives Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Foundation of Excellence</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Built on decades of experience and unwavering commitment to aquatic excellence, our mission, vision, and
            values guide everything we do.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg inline-flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? `bg-gradient-to-r ${tab.color} text-white shadow-lg scale-105`
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`transition-all duration-500 ${
                activeTab === tab.id
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8 absolute inset-0 pointer-events-none"
              }`}
            >
              <Card className="overflow-hidden shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
                <div className={`h-2 bg-gradient-to-r ${tab.color}`}></div>
                <CardContent className="p-12">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <div
                          className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${tab.color} text-white mb-4`}
                        >
                          {tab.icon}
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900">{tab.content.title}</h3>
                        <p className="text-lg text-gray-600 leading-relaxed">{tab.content.description}</p>
                      </div>

                      {/* Visual Element */}
                      <div className="relative">
                        <div
                          className={`w-full h-64 bg-gradient-to-br ${tab.color} rounded-2xl flex items-center justify-center relative overflow-hidden`}
                        >
                          <div className="absolute inset-0 bg-black/10"></div>
                          <div className="relative z-10 text-center text-white">
                            <div className="text-6xl font-bold mb-2">
                              {tab.id === "mission" && "6+"}
                              {tab.id === "vision" && "2025"}
                              {tab.id === "values" && "6"}
                            </div>
                            <div className="text-lg">
                              {tab.id === "mission" && "Years of Excellence"}
                              {tab.id === "vision" && "Vision Goal"}
                              {tab.id === "values" && "Core Values"}
                            </div>
                          </div>
                          {/* Decorative Elements */}
                          <div className="absolute top-4 right-4 opacity-20">
                            <Globe className="h-12 w-12" />
                          </div>
                          <div className="absolute bottom-4 left-4 opacity-20">
                            <Zap className="h-8 w-8" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Content - Points */}
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-gray-900 mb-6">Key Focus Areas</h4>
                      <div className="space-y-4">
                        {tab.content.points.map((point, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                          >
                            <div
                              className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r ${tab.color} flex items-center justify-center text-white font-bold text-sm`}
                            >
                              {index + 1}
                            </div>
                            <p className="text-gray-700 leading-relaxed">{point}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
