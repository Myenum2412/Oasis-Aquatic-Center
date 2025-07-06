"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Circle, Clock, User, Calendar, CreditCard } from "lucide-react"

export function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      icon: <User className="h-6 w-6" />,
      title: "Submit Application",
      description: "Complete our comprehensive enrollment form with your personal details and program preferences.",
      duration: "5 minutes",
      details: ["Personal information", "Emergency contacts", "Medical history", "Swimming experience"],
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Skill Assessment",
      description: "Schedule a complimentary skill assessment to ensure proper program placement.",
      duration: "30 minutes",
      details: ["Water comfort evaluation", "Basic skill testing", "Goal discussion", "Program recommendation"],
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Payment & Confirmation",
      description: "Complete payment and receive your welcome package with all necessary information.",
      duration: "2 minutes",
      details: ["Secure payment processing", "Welcome package", "Class schedule", "Facility orientation"],
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Start Swimming",
      description: "Begin your aquatic journey with expert instruction and world-class facilities.",
      duration: "Ongoing",
      details: ["First class orientation", "Meet your instructor", "Facility tour", "Begin training"],
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [steps.length])

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Simple Enrollment Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting started is easy! Follow our streamlined 4-step process to begin your swimming journey.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2 hidden lg:block">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-1000 ease-in-out"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            />
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card
                key={index}
                className={`relative transition-all duration-500 hover:shadow-xl ${
                  index <= activeStep ? "shadow-lg scale-105" : "hover:scale-102"
                }`}
              >
                {/* Step Number Circle */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:left-auto lg:right-0 lg:translate-x-1/2">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-4 transition-all duration-500 ${
                      index <= activeStep
                        ? "bg-blue-600 border-blue-600 text-white scale-110"
                        : "bg-white border-gray-300 text-gray-400"
                    }`}
                  >
                    {index < activeStep ? (
                      <CheckCircle className="h-6 w-6" />
                    ) : index === activeStep ? (
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                    ) : (
                      <Circle className="h-6 w-6" />
                    )}
                  </div>
                </div>

                <CardContent className="p-6 pt-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`p-2 rounded-lg transition-colors duration-300 ${
                        index <= activeStep ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {step.icon}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      {step.duration}
                    </div>
                  </div>

                  <h3
                    className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                      index <= activeStep ? "text-gray-900" : "text-gray-600"
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>

                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className={`flex items-center gap-2 text-sm transition-colors duration-300 ${
                          index <= activeStep ? "text-gray-700" : "text-gray-500"
                        }`}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${index <= activeStep ? "bg-blue-600" : "bg-gray-400"}`}
                        />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-12 lg:hidden">
          <div className="flex space-x-2">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index <= activeStep ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
