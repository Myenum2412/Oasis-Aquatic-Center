"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar, User, MapPin, CreditCard, Shield } from "lucide-react"

export function EnrollmentForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    personalInfo: {},
    programSelection: {},
    preferences: {},
    payment: {},
  })

  const steps = [
    { number: 1, title: "Personal Information", icon: <User className="h-5 w-5" /> },
    { number: 2, title: "Program Selection", icon: <Calendar className="h-5 w-5" /> },
    { number: 3, title: "Preferences", icon: <MapPin className="h-5 w-5" /> },
    { number: 4, title: "Payment", icon: <CreditCard className="h-5 w-5" /> },
  ]

  const programs = [
    { id: "learn-to-swim", name: "Learn to Swim", price: "$120", duration: "8 weeks" },
    { id: "kids-swimming", name: "Kids Swimming (3-6)", price: "$95", duration: "6 weeks" },
    { id: "competitive-coaching", name: "Competitive Coaching", price: "$200/month", duration: "Ongoing" },
    { id: "ladies-only", name: "Ladies Only Sessions", price: "$25/session", duration: "Ongoing" },
  ]

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  return (
    <section id="enrollment-form" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Complete Your Enrollment</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Follow our simple 4-step process to join AquaCenter and start your swimming journey today.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                    currentStep >= step.number
                      ? "bg-blue-600 border-blue-600 text-white"
                      : "border-gray-300 text-gray-400"
                  }`}
                >
                  {step.icon}
                </div>
                <div className="ml-3 hidden md:block">
                  <p
                    className={`text-sm font-medium ${currentStep >= step.number ? "text-blue-600" : "text-gray-400"}`}
                  >
                    Step {step.number}
                  </p>
                  <p className={`text-xs ${currentStep >= step.number ? "text-gray-900" : "text-gray-400"}`}>
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${currentStep > step.number ? "bg-blue-600" : "bg-gray-300"}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <Card className="shadow-2xl border-0 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
            <CardTitle className="text-2xl flex items-center gap-3">
              {steps[currentStep - 1].icon}
              {steps[currentStep - 1].title}
            </CardTitle>
          </CardHeader>

          <CardContent className="p-8">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fade-in-up">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                      First Name *
                    </Label>
                    <Input id="firstName" placeholder="John" className="mt-1" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                      Last Name *
                    </Label>
                    <Input id="lastName" placeholder="Doe" className="mt-1" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address *
                    </Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="mt-1" required />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Phone Number *
                    </Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="mt-1" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="dateOfBirth" className="text-sm font-medium text-gray-700">
                    Date of Birth *
                  </Label>
                  <Input id="dateOfBirth" type="date" className="mt-1" required />
                </div>

                <div>
                  <Label htmlFor="address" className="text-sm font-medium text-gray-700">
                    Address
                  </Label>
                  <Textarea id="address" placeholder="123 Main Street, City, State, ZIP" className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="emergencyContact" className="text-sm font-medium text-gray-700">
                    Emergency Contact Name & Phone *
                  </Label>
                  <Input id="emergencyContact" placeholder="Jane Doe - (555) 987-6543" className="mt-1" required />
                </div>
              </div>
            )}

            {/* Step 2: Program Selection */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-fade-in-up">
                <div>
                  <Label className="text-lg font-semibold text-gray-900 mb-4 block">Select Your Program *</Label>
                  <RadioGroup defaultValue="" className="space-y-4">
                    {programs.map((program) => (
                      <div
                        key={program.id}
                        className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-blue-50 transition-colors duration-200"
                      >
                        <RadioGroupItem value={program.id} id={program.id} />
                        <div className="flex-1">
                          <Label htmlFor={program.id} className="font-medium text-gray-900 cursor-pointer">
                            {program.name}
                          </Label>
                          <p className="text-sm text-gray-600">{program.duration}</p>
                        </div>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="startDate" className="text-sm font-medium text-gray-700">
                    Preferred Start Date *
                  </Label>
                  <Input id="startDate" type="date" className="mt-1" required />
                </div>

                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-3 block">
                    Preferred Schedule (Select all that apply)
                  </Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {["Morning", "Afternoon", "Evening", "Weekend"].map((time) => (
                      <div key={time} className="flex items-center space-x-2">
                        <Checkbox id={time} />
                        <Label htmlFor={time} className="text-sm cursor-pointer">
                          {time}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="experience" className="text-sm font-medium text-gray-700">
                    Swimming Experience Level
                  </Label>
                  <select
                    id="experience"
                    className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background"
                  >
                    <option value="">Select your level</option>
                    <option value="complete-beginner">Complete Beginner</option>
                    <option value="some-experience">Some Experience</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                    <option value="competitive">Competitive</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 3: Preferences */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-fade-in-up">
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-3 block">
                    Special Requirements or Medical Conditions
                  </Label>
                  <Textarea
                    placeholder="Please describe any medical conditions, injuries, or special requirements we should be aware of..."
                    className="min-h-[100px]"
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-3 block">Goals & Objectives</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Learn basic swimming",
                      "Improve technique",
                      "Fitness & exercise",
                      "Competitive training",
                      "Water safety",
                      "Overcome fear of water",
                      "Triathlon preparation",
                      "Social activity",
                    ].map((goal) => (
                      <div key={goal} className="flex items-center space-x-2">
                        <Checkbox id={goal} />
                        <Label htmlFor={goal} className="text-sm cursor-pointer">
                          {goal}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="instructor-preference" className="text-sm font-medium text-gray-700">
                    Instructor Preference
                  </Label>
                  <select
                    id="instructor-preference"
                    className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background"
                  >
                    <option value="">No preference</option>
                    <option value="male">Male instructor</option>
                    <option value="female">Female instructor</option>
                  </select>
                </div>

                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-3 block">Communication Preferences</Label>
                  <div className="space-y-2">
                    {[
                      "Email updates about classes",
                      "SMS reminders",
                      "Newsletter subscription",
                      "Event notifications",
                    ].map((pref) => (
                      <div key={pref} className="flex items-center space-x-2">
                        <Checkbox id={pref} defaultChecked />
                        <Label htmlFor={pref} className="text-sm cursor-pointer">
                          {pref}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Payment */}
            {currentStep === 4 && (
              <div className="space-y-6 animate-fade-in-up">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Enrollment Summary</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Program: Learn to Swim</span>
                      <span className="font-semibold">$120.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Registration Fee</span>
                      <span className="font-semibold">$25.00</span>
                    </div>
                    <div className="flex justify-between text-red-600">
                      <span>New Member Discount</span>
                      <span className="font-semibold">-$20.00</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>$125.00</span>
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-3 block">Payment Method</Label>
                  <RadioGroup defaultValue="card" className="space-y-3">
                    <div className="flex items-center space-x-3 p-4 border rounded-lg">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer">
                        <CreditCard className="h-4 w-4" />
                        Credit/Debit Card
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-4 border rounded-lg">
                      <RadioGroupItem value="bank" id="bank" />
                      <Label htmlFor="bank" className="cursor-pointer">
                        Bank Transfer
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="cardNumber" className="text-sm font-medium text-gray-700">
                      Card Number
                    </Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="expiryDate" className="text-sm font-medium text-gray-700">
                      Expiry Date
                    </Label>
                    <Input id="expiryDate" placeholder="MM/YY" className="mt-1" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="cvv" className="text-sm font-medium text-gray-700">
                      CVV
                    </Label>
                    <Input id="cvv" placeholder="123" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="cardName" className="text-sm font-medium text-gray-700">
                      Name on Card
                    </Label>
                    <Input id="cardName" placeholder="John Doe" className="mt-1" />
                  </div>
                </div>

                <div className="flex items-center space-x-2 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <Shield className="h-5 w-5 text-green-600" />
                  <p className="text-sm text-green-800">
                    Your payment information is secure and encrypted. We use industry-standard security measures.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" required />
                    <Label htmlFor="terms" className="text-sm cursor-pointer">
                      I agree to the{" "}
                      <a href="#" className="text-blue-600 hover:underline">
                        Terms and Conditions
                      </a>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="waiver" required />
                    <Label htmlFor="waiver" className="text-sm cursor-pointer">
                      I acknowledge the{" "}
                      <a href="#" className="text-blue-600 hover:underline">
                        Liability Waiver
                      </a>
                    </Label>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t">
              <Button variant="outline" onClick={prevStep} disabled={currentStep === 1} className="px-6 bg-transparent">
                Previous
              </Button>

              {currentStep < 4 ? (
                <Button onClick={nextStep} className="px-6 bg-blue-600 hover:bg-blue-700">
                  Next Step
                </Button>
              ) : (
                <Button className="px-8 bg-green-600 hover:bg-green-700">Complete Enrollment</Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
