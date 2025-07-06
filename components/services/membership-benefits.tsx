import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

export function MembershipBenefits() {
  const benefits = [
    "Access to members-only events and workshops",
    "Free equipment for members",
    "Personal training consultations included",
    "Access to exclusive member areas",
  ]

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Membership Benefits</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join our community and enjoy exclusive benefits designed to enhance your aquatic experience while saving
              money on the services you love.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-1 rounded-full mt-1">
                    <Check className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="pt-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Join?</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Individual Monthly</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Family Monthly</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Annual Individual</span>
                </div>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Start Your Membership</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
