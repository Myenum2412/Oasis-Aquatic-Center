"use client"

import { useEffect, useState } from "react"

function CountUpAnimation({
  end,
  suffix,
  duration,
  delay,
}: { end: number; suffix: string; duration: number; delay: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      let start = 0
      const increment = end / (duration / 16)
      const counter = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(counter)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      return () => clearInterval(counter)
    }, delay)

    return () => clearTimeout(timer)
  }, [end, duration, delay])

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)

  const stats = [
    { number: 6, suffix: "+", label: "Years of Excellence", description: "Serving the community" },
    { number: 100, suffix: "+", label: "Happy Students", description: "Lives transformed" },
    { number: 10, suffix: "+", label: "Expert Instructors", description: "Certified professionals" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById("stats-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="stats-section"
      className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220 0 60 60%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg fill%3D%22none%22 fillRule%3D%22evenodd%22%3E%3Cg fill%3D%22%23ffffff%22 fillOpacity%3D%220.4%22%3E%3Cpath d%3D%22M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Our Impact in Numbers</h2>
          <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto">
            These numbers represent our commitment to excellence and the trust our community has placed in us over the
            years.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {isVisible && (
                    <CountUpAnimation end={stat.number} suffix={stat.suffix} duration={2000} delay={index * 200} />
                  )}
                </div>
                <h3 className="text-lg font-semibold text-blue-100 mb-1">{stat.label}</h3>
                <p className="text-blue-200 text-sm">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
