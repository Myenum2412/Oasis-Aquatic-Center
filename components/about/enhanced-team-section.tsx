"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Award, Calendar, Users, Star, Trophy, Heart } from "lucide-react"

export function EnhancedTeamSection() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null)

  const team = [
    {
      name: "MOHAMMED THABREZ KHAN B.E , N.I.S (Swimming)",
      role: "Head Coach",
      image: "/Images/Trainer/Coaches.jpeg",
      bio: "Head Coach with extensive training from N.I.S and ASCA Level 3 credentials. Passionate about cultivating top-tier swimmers through discipline and science-backed coaching.",
      specialties: ["Competitive Training", "Stroke Correction", "Professional Development", "Olympic-Level Coaching"],
      achievements: [
        "ASCA Level 3 Certified",
        "B.E. Graduate with N.I.S (Swimming)",
        "Trained multiple state and national-level swimmers"
      ],
      experience: "15+ years",
      certifications: ["ASCA Level 3", "N.I.S (Swimming)", "B.E in Engineering"],
      contact: { email: "thabrez@oasisaquaticcenter.com", phone: "+91 98765 43210" },
      stats: { studentsCoached: "1,500+", nationalMedalists: "30+", yearsExperience: "15" },
      philosophy:
        "Every swimmer is unique. My job is to bring out their best through strategic training, technical refinement, and constant motivation.",
      color: "from-blue-600 to-cyan-600",
    },
    {
      name: "MADAN KUMAR . B",
      role: "Junior Coach",
      image: "/Images/Trainer/Coachs.jpeg",
      bio: "Certified Instructor with a commitment to developing beginner and intermediate swimmers. Specializes in building water confidence and foundational techniques.",
      specialties: ["Beginner Training", "Water Confidence", "Basic Stroke Technique", "Child Development"],
      achievements: [
        "Certified Swim Instructor",
        "Mentored under ASCA Level 3 Coach",
        "Consistently high parent and student feedback"
      ],
      experience: "5+ years",
      certifications: ["Certified Swim Instructor", "Assistant Coach Certification"],
      contact: { email: "madan@oasisaquaticcenter.com", phone: "+91 98765 43211" },
      stats: { childrenTaught: "800+", parentSatisfaction: "95%", yearsExperience: "5" },
      philosophy:
        "The foundation of great swimming starts with patience, clear instruction, and making every student feel safe and capable in the water.",
      color: "from-green-500 to-teal-500",
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <pattern id="team-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="3" fill="currentColor" className="animate-pulse" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#team-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg mb-6">
            <Users className="h-6 w-6 text-blue-500" />
            <span className="font-semibold text-gray-700">Meet Our Experts</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            World-Class Team of Professionals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our certified professionals bring decades of combined experience and passion for aquatic education. Each
            team member is dedicated to helping you achieve your swimming goals safely and effectively.
          </p>
        </div>

        <div className="w-full px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
            {team.map((member, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm overflow-hidden cursor-pointer ${
                  selectedMember === index ? "ring-2 ring-blue-500 shadow-2xl scale-105" : "hover:-translate-y-2"
                }`}
                onClick={() => setSelectedMember(selectedMember === index ? null : index)}
              >
                {/* ✅ Fixed Image Sizing */}
                <div className="relative w-full h-72 sm:h-80 md:h-[22rem] overflow-hidden flex justify-center items-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-auto max-w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-blue-200 font-medium">{member.role}</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className={`bg-gradient-to-r ${member.color} text-white border-0`}>
                      {member.experience}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Specialties</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.slice(0, 3).map((specialty, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                      {member.specialties.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{member.specialties.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {Object.entries(member.stats).slice(0, 3).map(([key, value], idx) => (
                      <div key={idx} className="text-center bg-gray-50 rounded-lg p-2">
                        <div className="text-sm font-bold text-blue-600">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </div>
                      </div>
                    ))}
                  </div>

                  {selectedMember === index && (
                    <div className="mt-6 pt-6 border-t border-gray-200 space-y-4 animate-fade-in">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          <Heart className="h-4 w-4 text-red-500" />
                          Philosophy
                        </h4>
                        <p className="text-gray-600 text-sm italic">"{member.philosophy}"</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          <Trophy className="h-4 w-4 text-yellow-500" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-1">
                          {member.achievements.slice(0, 3).map((achievement, idx) => (
                            <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                              <Star className="h-3 w-3 text-yellow-400 mt-1 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          <Award className="h-4 w-4 text-blue-500" />
                          Certifications
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {member.certifications.map((cert, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {cert}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1 text-xs bg-transparent">
                          <Mail className="h-3 w-3 mr-1" />
                          Contact
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1 text-xs bg-transparent">
                          <Calendar className="h-3 w-3 mr-1" />
                          Schedule
                        </Button>
                      </div>
                    </div>
                  )}

                  {selectedMember !== index && (
                    <Button variant="outline" size="sm" className="w-full mt-2 bg-transparent">
                      View Full Profile
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="w-full max-w-5xl bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Team's Combined Impact</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">6+</div>
                <div className="text-gray-600">Years Combined Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
                <div className="text-gray-600">Students Taught</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
                <div className="text-gray-600">Certifications Held</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">99.9%</div>
                <div className="text-gray-600">Safety Record</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
