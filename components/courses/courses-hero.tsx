import { Waves, Droplets, GraduationCap, Users, Clock } from "lucide-react"

export function CoursesHero() {
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
        {[...Array(18)].map((_, i) => (
          <Droplets
            key={i}
            className="absolute text-white animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.25}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-3 mb-6">
          <Waves className="h-8 w-8 text-blue-200 animate-wave" />
          <h1 className="text-5xl md:text-6xl font-bold animate-fade-in-up">Swimming Courses</h1>
          <Waves className="h-8 w-8 text-blue-200 animate-wave" style={{ animationDelay: "0.5s" }} />
        </div>
        <p className="text-xl md:text-2xl opacity-90 leading-relaxed animate-fade-in-up-delay max-w-3xl mx-auto">
          From beginner lessons to elite competitive training, our comprehensive course offerings cater to swimmers of
          all ages and skill levels with professional instruction and proven methodologies that deliver exceptional
          results and build confidence in the water.
        </p>

        {/* Course Features */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up-delay-2">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
            <GraduationCap className="h-8 w-8 text-blue-200 mx-auto mb-2" />
            <h3 className="font-semibold mb-1">Structured Learning</h3>
            <p className="text-sm text-blue-100">Progressive curriculum for all levels</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
            <Users className="h-8 w-8 text-blue-200 mx-auto mb-2" />
            <h3 className="font-semibold mb-1">Small Classes</h3>
            <p className="text-sm text-blue-100">Personalized attention for every student</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
            <Clock className="h-8 w-8 text-blue-200 mx-auto mb-2" />
            <h3 className="font-semibold mb-1">Flexible Schedule</h3>
            <p className="text-sm text-blue-100">Multiple time slots to fit your needs</p>
          </div>
        </div>
      </div>
    </section>
  )
}
