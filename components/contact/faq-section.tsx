import { Card, CardContent } from "@/components/ui/card"

export function FAQSection() {
  const faqs = [
    {
      question: "Do I need to bring my own equipment?",
      answer:
        "We provide all necessary equipment for our classes including kickboards, pool noodles, and training aids. However, you're welcome to bring your own goggles and swimwear for comfort and hygiene. We also have equipment available for purchase at our pro shop.",
    },
    {
      question: "What are your cancellation policies?",
      answer:
        "We require 24-hour notice for individual class cancellations to receive a full credit. For membership cancellations, we require 30 days written notice. Emergency cancellations due to illness or injury are handled on a case-by-case basis.",
    },
    {
      question: "Do you offer trial sessions?",
      answer:
        "Yes! We offer complimentary trial sessions for new members to experience our facilities and instruction quality before committing to a program. This includes a facility tour, skill assessment, and participation in an appropriate class.",
    },
    {
      question: "Is parking available?",
      answer:
        "We provide free parking for all members and visitors with over 100 spaces available in our dedicated parking lot. We also have accessible parking spaces and covered parking areas for convenience during inclement weather.",
    },
    {
      question: "What safety measures do you have in place?",
      answer:
        "Safety is our top priority. We have certified lifeguards on duty at all times, maintain strict water quality standards, conduct regular safety drills, and have comprehensive emergency response procedures. All our instructors are CPR and first aid certified.",
    },
    {
      question: "Can I freeze my membership?",
      answer:
        "Yes, annual members can freeze their membership for up to 3 months per year for medical reasons, extended travel, or other qualifying circumstances. A small administrative fee applies, and advance notice is required.",
    },
  ]

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our facilities, programs, and policies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-0">
                <h4 className="font-semibold text-lg text-gray-900 mb-3">{faq.question}</h4>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
        </div>
      </div>
    </section>
  )
}
