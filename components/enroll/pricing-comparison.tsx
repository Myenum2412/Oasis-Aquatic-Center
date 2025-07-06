"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, X, Star } from "lucide-react"

export function PricingComparison() {
  const plans = [
    {
      name: "Basic",
      price: "$89",
      period: "per month",
      description: "Perfect for casual swimmers",
      popular: false,
      features: [
        { name: "Pool access during off-peak hours", included: true },
        { name: "Basic locker rental", included: true },
        { name: "Group classes (2 per month)", included: true },
        { name: "Guest passes", included: false },
        { name: "Personal training sessions", included: false },
        { name: "Priority booking", included: false },
        { name: "Nutrition consultation", included: false },
        { name: "Competition training", included: false },
      ],
      color: "from-gray-500 to-gray-600",
    },
    {
      name: "Premium",
      price: "$149",
      period: "per month",
      description: "Most popular choice for serious swimmers",
      popular: true,
      features: [
        { name: "Unlimited pool access", included: true },
        { name: "Premium locker rental", included: true },
        { name: "All group classes included", included: true },
        { name: "Guest passes (4 per month)", included: true },
        { name: "Personal training sessions (2 per month)", included: true },
        { name: "Priority booking", included: true },
        { name: "Nutrition consultation", included: false },
        { name: "Competition training", included: false },
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Elite",
      price: "$249",
      period: "per month",
      description: "Complete package for competitive athletes",
      popular: false,
      features: [
        { name: "24/7 pool access", included: true },
        { name: "Private locker with amenities", included: true },
        { name: "All classes + specialized training", included: true },
        { name: "Unlimited guest passes", included: true },
        { name: "Weekly personal training", included: true },
        { name: "Priority booking + reserved lanes", included: true },
        { name: "Monthly nutrition consultation", included: true },
        { name: "Competition training & coaching", included: true },
      ],
      color: "from-purple-500 to-indigo-500",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Choose Your Membership</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the membership plan that best fits your swimming goals and lifestyle. All plans include access to our
            world-class facilities and expert instruction.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                plan.popular ? "border-2 border-blue-500 scale-105 shadow-xl" : "hover:scale-102"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 text-sm font-semibold flex items-center gap-1">
                    <Star className="h-4 w-4 fill-current" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className={`h-2 bg-gradient-to-r ${plan.color} rounded-t-lg`}></div>

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className={`mt-0.5 ${feature.included ? "text-green-500" : "text-gray-300"}`}>
                        {feature.included ? <Check className="h-5 w-5" /> : <X className="h-5 w-5" />}
                      </div>
                      <span className={`text-sm ${feature.included ? "text-gray-700" : "text-gray-400"}`}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                      : "bg-gray-600 hover:bg-gray-700"
                  }`}
                  onClick={() => document.getElementById("enrollment-form")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Choose {plan.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All memberships include a 7-day free trial and 30-day money-back guarantee
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>✓ No setup fees</span>
            <span>✓ Cancel anytime</span>
            <span>✓ Family discounts available</span>
            <span>✓ Corporate rates available</span>
          </div>
        </div>
      </div>
    </section>
  )
}
