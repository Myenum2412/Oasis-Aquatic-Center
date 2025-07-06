import { Waves, Droplets, Star, Users, Trophy } from "lucide-react"

export function ServicesHero() {
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

      {/* Floating Elements */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(15)].map((_, i) => (
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

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-3 mb-6">
          <Waves className="h-8 w-8 text-blue-200 animate-wave" />
          <h1 className="text-5xl md:text-6xl font-bold animate-fade-in-up">Our Services</h1>
          <Waves className="h-8 w-8 text-blue-200 animate-wave" style={{ animationDelay: "0.5s" }} />
        </div>
        <p className="text-xl md:text-2xl opacity-90 leading-relaxed animate-fade-in-up-delay max-w-3xl mx-auto">
          Discover our comprehensive range of aquatic services designed to meet every need, from recreational swimming
          to specialized water activities and fitness programs. Experience excellence in every splash with our
          world-class facilities and expert instruction.
        </p>

        {/* Service Highlights */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up-delay-2">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
            <Star className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
            <h3 className="font-semibold mb-1">Premium Quality</h3>
            <p className="text-sm text-blue-100">Top-rated facilities and services</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
            <Users className="h-8 w-8 text-blue-200 mx-auto mb-2" />
            <h3 className="font-semibold mb-1">Expert Staff</h3>
            <p className="text-sm text-blue-100">Certified professionals at your service</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
            <Trophy className="h-8 w-8 text-blue-200 mx-auto mb-2" />
            <h3 className="font-semibold mb-1">Proven Results</h3>
            <p className="text-sm text-blue-100">Track record of success and satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  )
}
