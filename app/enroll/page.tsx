import { EnrollHero } from "@/components/enroll/enroll-hero"
import { ProgramSelector } from "@/components/enroll/program-selector"
import { EnrollmentForm } from "@/components/enroll/enrollment-form"
import { ProcessTimeline } from "@/components/enroll/process-timeline"
import { PricingComparison } from "@/components/enroll/pricing-comparison"
import { TestimonialSlider } from "@/components/enroll/testimonial-slider"
import { FAQAccordion } from "@/components/enroll/faq-accordion"

export default function EnrollPage() {
  return (
    <div className="min-h-screen">
      <EnrollHero />
      <ProgramSelector />
      <EnrollmentForm />
      <ProcessTimeline />
      <PricingComparison />
      <TestimonialSlider />
      <FAQAccordion />
    </div>
  )
}
