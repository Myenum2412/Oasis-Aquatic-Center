import { Card, CardContent } from "@/components/ui/card"

export function OurStory() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
          <CardContent className="pt-0">
            <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p className="text-xl leading-relaxed">
                Oasis Aquatic Center began as a vision to create a comprehensive aquatic facility that would
                serve swimmers of all ages and abilities. What started as a single pool has evolved into a
                state-of-the-art complex featuring multiple pools, specialized training areas, and innovative aquatic
                programs.
              </p>
              <p className="text-lg leading-relaxed">
                Our founder, Maria Rodriguez, was an Olympic swimmer who recognized the need for a facility that could
                bridge the gap between recreational swimming and competitive training. With her vision and the support
                of the local community, Oasis Aquatic Center opened its doors with a commitment to excellence that continues to
                this day.
              </p>
              <p className="text-lg leading-relaxed">
                Over the years, we've had the privilege of training Olympic hopefuls, teaching thousands of children to
                swim, and providing a home for recreational swimmers seeking fitness and fun. Our commitment to
                excellence has earned us recognition as one of the region's premier aquatic facilities, with numerous
                awards for safety, instruction quality, and community service.
              </p>
              <p className="text-lg leading-relaxed">
                Today, Oasis Aquatic Center continues to evolve, incorporating the latest in aquatic technology and training
                methodologies while maintaining our core commitment to safety, community, and swimming excellence. We
                look forward to serving our community for many years to come, helping new generations discover the joy
                and benefits of life in the water.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
