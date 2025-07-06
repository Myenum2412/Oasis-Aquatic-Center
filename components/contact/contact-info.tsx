"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactInfo() {
  const handleTourClick = () => {
    alert("Schedule Tour feature coming soon!") // Replace with modal or form
  }

  const handleMembershipClick = () => {
    window.location.href = "mailto:aurafitness@email.com?subject=Membership Inquiry"
  }

  const handleCallClick = () => {
    window.location.href = "tel:+919943799969"
  }

  return (
    <div className="space-y-8">
      {/* Contact Details */}
      <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
        <CardContent className="pt-0">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">Get in Touch</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Address</p>
                <p className="text-gray-600 leading-relaxed">
                  Arthanari Bakkiam Complex,<br />
                  39/7, Vasagasalai St, near Ponganapathi Temple,<br />
                  Ponnammapet, Salem, Tamil Nadu 636001
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Phone</p>
                <p className="text-gray-600">+91 99437 99969</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Email</p>
                <p className="text-gray-600">aurafitness@email.com</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Operating Hours */}
      <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
        <CardContent className="pt-0">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Operating Hours</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Monday – Sunday</span>
              <span className="font-semibold text-gray-900">6 : 00 AM – 8 : 00 PM</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      
    </div>
  )
}
