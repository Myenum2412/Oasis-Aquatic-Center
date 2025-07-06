import { MapPin } from "lucide-react"
import { Card } from "@/components/ui/card"

export function LocationMap() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
          <div className="flex justify-center items-center gap-2 text-xl text-gray-700">
            <MapPin className="text-red-600 h-6 w-6" />
            <span>Oasis Aquatic Center</span>
          </div>
        </div>

        {/* Embedded Google Map */}
        <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4329.670124046809!2d78.17052501100318!3d11.666935142088768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1b8156d76e3%3A0xf961d2d9e6d54d1e!2sOasis%20Aquatic%20center!5e1!3m2!1sen!2sin!4v1751818919127!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Oasis Aquatic Center Map"
          ></iframe>
        </Card>
      </div>
    </section>
  )
}
