import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Oasis Aquatic Center - Premier Swimming Facility | Professional Training & Aquatic Programs",
  description:
    "Professional swimming facility offering world-class training, recreational activities, and aquatic programs for all ages. Learn to swim, compete, and enjoy water sports in our state-of-the-art facility with expert instructors.",
  keywords:
    "swimming, pool, lessons, training, aquatic, fitness, water sports, swimming courses, competitive coaching, learn to swim, aqua fitness, water activities",
  authors: [{ name: "Oasis Aquatic Center" }],
  openGraph: {
    title: "Oasis Aquatic Center - Premier Swimming Facility",
    description: "Professional swimming training and aquatic programs for all ages",
    type: "website",
    locale: "en_US",
    siteName: "Oasis Aquatic Center",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oasis Aquatic Center - Premier Swimming Facility",
    description: "Professional swimming training and aquatic programs for all ages",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#3b82f6" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <main className="pt-16 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
