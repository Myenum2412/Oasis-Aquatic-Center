import { Waves, Droplets } from "lucide-react"

export function AboutHero() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-cyan-500 text-white relative overflow-hidden">
      {/* Animated Water Background */}
      <div className="absolute inset-0">
        <svg className="absolute bottom-0 w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z"
            fill="rgba(255,255,255,0.1)"
            className="animate-wave-slow"
          />
        </svg>
      </div>

      {/* Floating Droplets */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(15)].map((_, i) => (
          <Droplets
            key={i}
            className="absolute text-white animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-3 mb-6">
          <Waves className="h-8 w-8 text-blue-200 animate-wave" />
          <h1 className="text-5xl md:text-6xl font-bold animate-fade-in-up">About Oasis Aquatic Center</h1>
          <Waves className="h-8 w-8 text-blue-200 animate-wave" style={{ animationDelay: "0.5s" }} />
        </div>
        <p className="text-xl md:text-2xl opacity-90 leading-relaxed animate-fade-in-up-delay max-w-3xl mx-auto">
          For over two decades, we've been dedicated to providing exceptional aquatic experiences, professional
          training, and a safe environment for swimmers of all levels. Our commitment to excellence has made us the
          premier destination for aquatic education and recreation in the region.
        </p>
        <div className="mt-8 grid grid-cols-3 gap-8 text-center animate-fade-in-up-delay-2">
          <div>
            <div className="text-3xl font-bold mb-2">25+</div>
            <div className="text-blue-200">Years of Excellence</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">10,000+</div>
            <div className="text-blue-200">Students Trained</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">50+</div>
            <div className="text-blue-200">Expert Instructors</div>
          </div>
        </div>
      </div>
    </section>
  )
}
