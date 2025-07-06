import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactForm() {
  return (
    <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="px-0 pt-0">
        <CardTitle className="text-3xl text-gray-900">Send us a Message</CardTitle>
        <p className="text-gray-600 text-lg">Fill out the form below and we'll get back to you within 24 hours.</p>
      </CardHeader>
      <CardContent className="px-0">
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                First Name
              </Label>
              <Input id="firstName" placeholder="John" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                Last Name
              </Label>
              <Input id="lastName" placeholder="Doe" className="mt-1" />
            </div>
          </div>

          <div>
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email Address
            </Label>
            <Input id="email" type="email" placeholder="john@example.com" className="mt-1" />
          </div>

          <div>
            <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
              Phone Number
            </Label>
            <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="mt-1" />
          </div>

          <div>
            <Label htmlFor="interest" className="text-sm font-medium text-gray-700">
              Area of Interest
            </Label>
            <select id="interest" className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background">
              <option value="">Select an option</option>
              <option value="learn-to-swim">Learn to Swim</option>
              <option value="competitive-coaching">Competitive Coaching</option>
              <option value="aqua-fitness">Aqua Fitness Classes</option>
              <option value="kids-programs">Kids Programs</option>
              <option value="adult-programs">Adult Programs</option>
              <option value="facility-rental">Facility Rental</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <Label htmlFor="message" className="text-sm font-medium text-gray-700">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Tell us about your swimming goals or any questions you have..."
              className="mt-1 min-h-[120px]"
            />
          </div>

          <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
