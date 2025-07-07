"use client";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Waves,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with: ${email}`);
      setEmail("");
    } else {
      alert("Please enter your email.");
    }
  };

  return (
    <footer className="bg-blue-950 text-white pt-16 pb-10 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
      {/* Background Dot Pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Brand + Newsletter */}
        <div className="lg:col-span-2 space-y-6">
          <Link href="/" className="flex items-center gap-3 no-underline">
            <div className="relative">
              <Waves className="h-8 w-8 text-blue-400" />
              <div className="absolute inset-0 bg-blue-400 rounded-full opacity-20 scale-0 group-hover:scale-150 transition-transform duration-300" />
            </div>
            <span className="text-2xl font-bold whitespace-nowrap">
              Oasis Aquatic Center
            </span>
          </Link>
          <p className="text-blue-200 text-sm leading-relaxed">
            Oasis Aquatic Center offers fitness, swimming, and wellness programs
            for all ages in Salem. Dive in for world-class experiences.
          </p>
          <div>
            <h4 className="font-semibold text-white mb-2">
              Subscribe to Newsletter
            </h4>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="bg-white/10 border-blue-600 text-white placeholder:text-blue-300"
              />
              <Button
                onClick={handleSubscribe}
                className="bg-blue-600 hover:bg-blue-500"
              >
                Subscribe
              </Button>
            </div>
          </div>
          <div className="flex space-x-4 pt-4">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
              <Link
                key={i}
                href="#"
                className="p-2 bg-blue-800 hover:bg-blue-700 rounded-full transition-all"
              >
                <Icon className="w-5 h-5 text-white" />
              </Link>
            ))}
          </div>
        </div>

        {/* Navigation Links */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Courses", href: "/courses" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-blue-200 hover:text-white no-underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white">Popular Services</h4>
            <ul className="space-y-2">
              {[
                "Aqua Yoga",
                "Strength Training",
                "Weight Loss Programs",
                "Swimming Classes",
                "Personal Coaching",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-blue-200 hover:text-white no-underline"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white">Contact</h4>
            <div className="text-blue-200 space-y-2">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <Link
                  href="https://www.google.com/maps/place/Aura+Fitness+Studio/@11.6668878,78.170566,994m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3babf15db672f29d:0xcd6aef5dc0538236!8m2!3d11.6668826!4d78.1731463!16s%2Fg%2F11y98tmsrb?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white no-underline"
                >
                  Arthanari Bakkiam Complex,
                  <br />
                  39/7 Vasagasalai St, Ponnammapet,
                  <br />
                  Salem, Tamil Nadu 636001
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>+91 99437 99969</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>aurafitness@email.com</span>
              </div>
              <div className="pt-3">
                <h5 className="font-medium text-white">Hours</h5>
                <p>Mon–Sun: 5:00 AM – 7:30 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-700 mt-12 pt-6 text-sm text-blue-300 text-center sm:text-left sm:flex sm:justify-between sm:items-center">
        <p>
          © {new Date().getFullYear()} Aura Fitness Studio. All rights reserved.
        </p>
        <div className="flex gap-4 justify-center sm:justify-end mt-4 sm:mt-0">
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
            (text) => (
              <Link
                key={text}
                href="#"
                className="hover:text-white no-underline"
              >
                {text}
              </Link>
            )
          )}
        </div>
      </div>
    </footer>
  );
}
