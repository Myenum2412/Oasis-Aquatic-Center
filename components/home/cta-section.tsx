"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Phone,
  Calendar,
  Waves,
  Droplets,
  Star,
} from "lucide-react";
import Link from "next/link";

export function CTASection() {
  const handleCallNow = () => {
    window.location.href = "tel:+919943799969";
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Animated Water Background */}
      <div className="absolute inset-0">
        <svg
          className="absolute bottom-0 w-full h-32"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z"
            fill="rgba(255,255,255,0.1)"
            className="animate-wave-slow"
          />
          <path
            d="M0,80 C300,20 600,100 900,40 C1050,10 1150,70 1200,40 L1200,120 L0,120 Z"
            fill="rgba(255,255,255,0.05)"
            className="animate-wave-slower"
          />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <Droplets
            key={i}
            className="absolute text-white animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
        <div className="inline-flex items-center gap-3 mb-6">
          <Waves className="h-8 w-8 text-blue-200 animate-wave" />
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready to Make a Splash?
          </h2>
          <Waves
            className="h-8 w-8 text-blue-200 animate-wave"
            style={{ animationDelay: "0.5s" }}
          />
        </div>

        <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
          Join our community of swimmers and discover the joy of aquatic
          fitness, professional training, and lifelong friendships in the water.
          Your swimming journey starts with a single decision.
        </p>

        {/* Trust Indicators */}
        <div className="flex justify-center items-center gap-6 mb-8 text-blue-100">
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span>4.9/5 Rating</span>
          </div>
          <div className="w-1 h-6 bg-blue-400"></div>
          <div>100+ Happy Students</div>
          <div className="w-1 h-6 bg-blue-400"></div>
          <div>6+ Years Experience</div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          {/* Enroll Button */}
          <Button
            asChild
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 transition-all duration-300 hover:scale-105 px-8 py-4 text-lg font-semibold group animate-pulse-glow ripple-effect"
          >
            <Link href="/enroll" className="flex items-center">
              Get Started Today
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>

          {/* View Schedule Button */}
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent transition-all duration-300 hover:scale-105 px-8 py-4 text-lg font-semibold group"
          >
            <Link href="/courses" className="flex items-center">
              <Calendar className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              View Schedule
            </Link>
          </Button>

          {/* Call Now Button */}
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent transition-all duration-300 hover:scale-105 px-8 py-4 text-lg font-semibold group"
          >
            <Link href="tel:+919943799969" className="flex items-center">
              <Phone className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Call Now
            </Link>
          </Button>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <Waves className="h-8 w-8 text-blue-200 mx-auto mb-3 animate-wave" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Trial Class
            </h3>
            <p className="text-blue-100 text-sm">
              Experience our facilities and instruction quality with no
              commitment
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <Calendar className="h-8 w-8 text-blue-200 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Flexible Membership
            </h3>
            <p className="text-blue-100 text-sm">
              Choose from various membership options that fit your lifestyle
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <Star className="h-8 w-8 text-blue-200 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Expert Support
            </h3>
            <p className="text-blue-100 text-sm">
              Professional guidance every step of your swimming journey
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
