import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function PricingSection() {
  const plans = [
    {
      name: "Day Pass",
      price: "$15",
      period: "per day",
      description: "Perfect for occasional visits",
      features: ["Pool access", "Basic facilities", "Locker rental", "Towel service"],
      popular: false,
    },
    {
      name: "Monthly",
      price: "$89",
      period: "per month",
      description: "Great for regular swimmers",
      features: [
        "Unlimited pool access",
        "All group classes included",
        "Guest passes (2/month)",
        "Equipment rental",
        "Member events",
      ],
      popular: true,
    },
    {
      name: "Annual",
      price: "$899",
      period: "per year",
      description: "Best value for committed members",
      features: [
        "Everything in Monthly",
        "Personal training session",
        "Priority class booking",
        "Guest passes (5/month)",
        "Exclusive workshops",
        "Freeze membership option",
      ],
      popular: false,
    },
  ]

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Choose Your Plan</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the membership option that best fits your swimming goals and lifestyle. All plans include access to
            our world-class facilities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                plan.popular ? "border-2 border-blue-500 scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-600 hover:bg-gray-700"
                  } transition-colors duration-300`}
                >
                  Choose Plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
