"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

export function FAQAccordion() {
  const [openItems, setOpenItems] = useState<number[]>([0])

  const faqs = [
    {
      category: "Enrollment",
      questions: [
        {
          question: "How do I enroll in a swimming program?",
          answer:
            "Enrollment is simple! Complete our online enrollment form, schedule a skill assessment, and choose your preferred program. Our team will guide you through each step and help you select the best program for your goals and experience level.",
        },
        {
          question: "What documents do I need to bring for enrollment?",
          answer:
            "Please bring a valid ID, emergency contact information, and any relevant medical documentation. For minors, a parent or guardian must sign the enrollment forms and liability waivers.",
        },
        {
          question: "Can I change my program after enrollment?",
          answer:
            "Yes! We understand that your needs may change. You can switch programs with 48 hours notice, subject to availability. Our staff will help you find the best fit for your evolving goals.",
        },
      ],
    },
    {
      category: "Programs & Scheduling",
      questions: [
        {
          question: "What if I miss a class?",
          answer:
            "We offer makeup classes for missed sessions with 24-hour advance notice. You can also join equivalent classes at different times, subject to availability. Our flexible scheduling ensures you get the most value from your program.",
        },
        {
          question: "How are skill levels determined?",
          answer:
            "We conduct a complimentary skill assessment for all new students. This 30-minute evaluation helps us understand your current abilities, comfort level, and goals to place you in the most appropriate program.",
        },
        {
          question: "Can adults join kids' programs or vice versa?",
          answer:
            "Our programs are age-specific for safety and optimal learning. However, we offer family programs and can create custom arrangements for special circumstances. Contact us to discuss your specific needs.",
        },
      ],
    },
    {
      category: "Facilities & Safety",
      questions: [
        {
          question: "What safety measures are in place?",
          answer:
            "Safety is our top priority. We maintain certified lifeguards on duty at all times, conduct regular water quality testing, have comprehensive emergency response procedures, and all instructors are CPR and first aid certified. Our facilities exceed all safety standards.",
        },
        {
          question: "What should I bring to my first class?",
          answer:
            "Bring a swimsuit, towel, and goggles if you have them. We provide all training equipment including kickboards, pool noodles, and flotation devices. Lockers and basic toiletries are available on-site.",
        },
        {
          question: "Are the facilities accessible for people with disabilities?",
          answer:
            "Our facility is fully ADA compliant with wheelchair accessible entrances, pool lifts, accessible changing rooms, and specially trained staff to assist swimmers with disabilities.",
        },
      ],
    },
    {
      category: "Payment & Policies",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept all major credit cards, debit cards, bank transfers, and cash payments. We also offer flexible payment plans and family discounts. Corporate and group rates are available upon request.",
        },
        {
          question: "What is your cancellation policy?",
          answer:
            "Individual classes can be cancelled with 24-hour notice for a full credit. Program cancellations require 48-hour notice. Membership cancellations require 30 days written notice. Medical emergencies are handled case-by-case.",
        },
        {
          question: "Do you offer refunds?",
          answer:
            "We offer a 30-day money-back guarantee for new members. Refunds for medical reasons or relocations are considered on a case-by-case basis. Unused class credits can be transferred to family members.",
        },
      ],
    },
  ]

  const toggleItem = (categoryIndex: number, questionIndex: number) => {
    const itemId = categoryIndex * 100 + questionIndex
    setOpenItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <HelpCircle className="h-8 w-8 text-blue-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <p className="text-xl text-gray-600">
            Find answers to common questions about enrollment, programs, and our facilities.
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
                {category.category}
              </h3>

              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const itemId = categoryIndex * 100 + questionIndex
                  const isOpen = openItems.includes(itemId)

                  return (
                    <Card key={questionIndex} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-0">
                        <button
                          onClick={() => toggleItem(categoryIndex, questionIndex)}
                          className="w-full p-6 text-left flex items-center justify-between hover:bg-blue-50 transition-colors duration-200"
                        >
                          <h4 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h4>
                          <div className="flex-shrink-0">
                            {isOpen ? (
                              <ChevronUp className="h-5 w-5 text-blue-600" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-gray-400" />
                            )}
                          </div>
                        </button>

                        <div
                          className={`transition-all duration-300 overflow-hidden ${
                            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="px-6 pb-6 pt-0">
                            <div className="border-t border-gray-100 pt-4">
                              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 p-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            Our friendly team is here to help you with any additional questions about our programs or facilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15551237946"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Call us: +1 (555) 123-SWIM
            </a>
            <a
              href="mailto:info@aquacenter.com"
              className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300"
            >
              Email: info@aquacenter.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
