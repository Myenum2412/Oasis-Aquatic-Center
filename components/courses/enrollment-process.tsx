import { Card, CardContent } from "@/components/ui/card"

export function EnrollmentProcess() {
  const steps = [
    {
      number: "1",
      title: "Choose Course",
      description: "Select the course that matches your skill level and goals from our comprehensive offerings",
    },
    {
      number: "2",
      title: "Contact Us",
      description: "Reach out to discuss your needs, available schedules, and any specific requirements",
    },
    {
      number: "3",
      title: "Assessment",
      description: "Complete a brief skill assessment to ensure proper placement and maximize your learning",
    },
    {
      number: "4",
      title: "Start Learning",
      description: "Begin your swimming journey with expert guidance and personalized instruction",
    },
  ]

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
          <CardContent className="pt-0">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">How to Enroll</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                    <span className="text-blue-600 font-bold text-xl">{step.number}</span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
