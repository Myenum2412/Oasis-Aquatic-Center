import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ScheduleSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Dive In?</h2>
        <p className="text-xl mb-8 opacity-90 leading-relaxed">
          Join thousands of satisfied students who have improved their swimming skills with our expert instruction.
          Start your aquatic journey today and discover the joy of swimming.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
          >
            <Link href="/contact">Get Started Today</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent px-8 py-4 text-lg font-semibold"
          >
            <Link href="/services">View Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
