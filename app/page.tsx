import { HeroSection } from "@/components/home/hero-section"
import { EnhancedFeaturesSection } from "@/components/home/enhanced-features-section"
import { ServicesPreview } from "@/components/home/services-preview"
import { StatsSection } from "@/components/home/stats-section"
import { EnhancedTestimonialsSection } from "@/components/home/enhanced-testimonials-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <EnhancedFeaturesSection />
      <ServicesPreview />
      <StatsSection />
      <CTASection />
    </div>
  )
}
