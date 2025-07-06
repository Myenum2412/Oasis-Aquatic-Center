import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { LocationMap } from "@/components/contact/location-map"
import { FAQSection } from "@/components/contact/faq-section"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactHero />
      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto px-4 py-16">
        <ContactForm />
        <ContactInfo />
      </div>
      <LocationMap />
      <FAQSection />
    </div>
  )
}
