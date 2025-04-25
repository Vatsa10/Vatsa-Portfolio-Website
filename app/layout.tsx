import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import SocialSidebar from "@/components/social-sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vatsa Joshi | Portfolio",
  description: "A clean and modern portfolio website",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  icons: {
    icon: [
      { url: "/V.svg", type: "image/svg+xml" },
      { url: "/V.svg", type: "image/svg+xml", sizes: "any" },
    ],
    apple: { url: "/V.svg", type: "image/svg+xml" },
    shortcut: { url: "/V.svg" },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/V.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/V.svg" />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <Navigation />
        <SocialSidebar />
        <div className="pb-24 md:pb-0 md:pl-16">{children}</div>
      </body>
    </html>
  )
}
