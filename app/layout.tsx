import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import SocialSidebar from "@/components/social-sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vatsa Joshi | Portfolio",
  description: "A modern portfolio website with wavy background animations",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} overflow-x-hidden`}>
        <Navigation />
        <SocialSidebar />
        <div className="pb-24 md:pb-0 md:pl-16">{children}</div>
      </body>
    </html>
  )
}



import './globals.css'