import { Droplets, MapPin, Phone, Mail } from "lucide-react"

export function ContactHero() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-cyan-500 text-white relative overflow-hidden">
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
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(12)].map((_, i) => (
          <Droplets
            key={i}
            className="absolute text-white animate-float"
            style={{
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * 100}vh`,
              animationDuration: `${Math.random() * 5 + 2}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Contact Information */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg mb-10">We'd love to hear from you!</p>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="tel:+919943799969"
            className="flex items-center px-6 py-3 bg-white/20 rounded-lg hover:bg-white/30 transition duration-300"
          >
            <Phone className="w-5 h-5 mr-2" />
            <span className="font-medium">+91 99437 99969</span>
          </a>

          <a
            href="mailto:aurafitness@email.com"
            className="flex items-center px-6 py-3 bg-white/20 rounded-lg hover:bg-white/30 transition duration-300"
          >
            <Mail className="w-5 h-5 mr-2" />
            <span className="font-medium">aurafitness@email.com</span>
          </a>

          <a
            href="https://www.google.com/maps/place/Aura+Fitness+Studio/@11.6668878,78.170566,994m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3babf15db672f29d:0xcd6aef5dc0538236!8m2!3d11.6668826!4d78.1731463"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 bg-white/20 rounded-lg hover:bg-white/30 transition duration-300"
          >
            <MapPin className="w-5 h-5 mr-2" />
            <span className="font-medium">Visit Us</span>
          </a>
        </div>
      </div>
    </section>
  )
}
