"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Waves,
  Home,
  Info,
  Book,
  GraduationCap,
  Phone,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Services", href: "/services", icon: Book },
  { name: "Courses", href: "/courses", icon: GraduationCap },
  { name: "Contact", href: "/contact", icon: Phone },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-100"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="relative group w-8 h-8">
            <img
              src="/Images/Logo/Logos.png"
              alt="Oasis Logo"
              className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-blue-600 rounded-full opacity-20 scale-0 group-hover:scale-150 transition-transform duration-300" />
          </div>

          <span
            className={cn(
              "text-2xl font-bold transition-colors duration-300 text-black"
            )}
          >
            Oasis Aquatic Center
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map(({ name, href, icon: Icon }) => (
            <Link
              key={name}
              href={href}
              className="relative group flex items-center space-x-2 text-blue-600 text-sm font-medium transition-all duration-300"
            >
              <Icon className="h-4 w-4" />
              <span>{name}</span>
              <span
                className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-blue-600 w-0 group-hover:w-full transition-all duration-300",
                  pathname === href && "w-full"
                )}
              />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-105"
          >
            <Link href="/enroll">Enroll Now</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="relative">
              <Menu
                className={cn(
                  "h-6 w-6 transition-all duration-300",
                  isScrolled ? "text-gray-900" : "text-white"
                )}
              />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <div className="flex items-center justify-between mb-8">
              <Link
                href="/"
                className="flex items-center space-x-2"
                onClick={() => setIsOpen(false)}
              >
                <Waves className="h-6 w-6 text-blue-600" />
                <span className="text-xl font-bold text-blue-600">
                  AquaCenter
                </span>
              </Link>
            </div>
            <nav className="flex flex-col space-y-6">
              {navigation.map(({ name, href, icon: Icon }, index) => (
                <Link
                  key={name}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "relative group flex items-center space-x-2 text-lg font-medium text-blue-600 transition-all duration-300 py-2 border-b border-gray-100 hover:border-blue-200"
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="h-5 w-5" />
                  <span>{name}</span>
                  <span
                    className={cn(
                      "absolute left-0 -bottom-1 h-0.5 bg-blue-600 transition-all duration-300 w-0 group-hover:w-full",
                      pathname === href && "w-full"
                    )}
                  />
                </Link>
              ))}
              <div className="pt-4">
                <Button
                  asChild
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  <Link href="/enroll" onClick={() => setIsOpen(false)}>
                    Enroll Now
                  </Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
