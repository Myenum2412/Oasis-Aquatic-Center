"use client"

import { Waves, Droplets, Award, Users, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function RedesignedAboutHero() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Waves */}
        <svg className="absolute bottom-0 w-full h-40" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z"
            fill="rgba(255,255,255,0.1)"
            className="animate-wave-slow"
          />
          <path
            d="M0,80 C300,140 600,20 900,80 C1050,110 1150,50 1200,80 L1200,120 L0,120 Z"
            fill="rgba(255,255,255,0.05)"
            className="animate-wave-slower"
          />
        </svg>

        {/* Floating Droplets */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <Droplets
              key={i}
              className="absolute text-white animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
                fontSize: `${12 + Math.random() * 8}px`,
              }}
            />
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                About
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Oasis Aquatic Center
                </span>
              </h1>

              <p className="text-xl md:text-2xl leading-relaxed text-blue-100 max-w-2xl">
                Where passion meets excellence in aquatic education. We've been transforming lives through the power of
                swimming for over two decades, creating champions both in and out of the water.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl font-bold mb-1">100+</div>
                <div className="text-sm text-blue-200">Lives Transformed</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl font-bold mb-1">10+</div>
                <div className="text-sm text-blue-200">Expert Instructors</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl font-bold mb-1">100%</div>
                <div className="text-sm text-blue-200">Safety Record</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold">
                <Link href="/enroll">Start Your Journey</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                <Link href="/contact">Schedule a Tour</Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Feature Highlights */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-yellow-400 rounded-full p-3">
                  <Award className="h-8 w-8 text-yellow-800" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Award-Winning Facility</h3>
                  <p className="text-blue-200">Recognized for excellence in aquatic education</p>
                </div>
              </div>
              <p className="text-blue-100 leading-relaxed">
                Our state-of-the-art facility has received numerous awards for safety, innovation, and community impact,
                making us the premier destination for aquatic excellence.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-400 rounded-full p-3">
                  <Users className="h-8 w-8 text-green-800" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Community Focused</h3>
                  <p className="text-blue-200">Building stronger communities through swimming</p>
                </div>
              </div>
              <p className="text-blue-100 leading-relaxed">
                We believe in the power of community and work tirelessly to make aquatic education accessible to
                everyone, regardless of age, ability, or background.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-purple-400 rounded-full p-3">
                  <Trophy className="h-8 w-8 text-purple-800" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Proven Results</h3>
                  <p className="text-blue-200">Track record of success and achievement</p>
                </div>
              </div>
              <p className="text-blue-100 leading-relaxed">
                From beginner swimmers to Olympic hopefuls, our proven methods and expert instruction deliver
                exceptional results that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
