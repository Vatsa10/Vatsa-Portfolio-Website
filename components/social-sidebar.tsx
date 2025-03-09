"use client"

import { Github, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function SocialSidebar() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Vatsa10",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/vatsa-joshi",
    },
  ]

  return (
    <>
      {/* Left Sidebar */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed left-6 bottom-0 hidden md:flex flex-col items-center gap-6 after:h-32 after:w-[1px] after:bg-border after:content-['']"
      >
        {socialLinks.slice(0, 2).map((social) => {
          const Icon = social.icon
          return (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={social.name}
            >
              <Icon className="h-5 w-5" />
            </Link>
          )
        })}
      </motion.div>

      {/* Mobile Footer Social Links */}
      <div className="fixed bottom-24 left-0 right-0 flex justify-center gap-4 md:hidden z-40">
        {socialLinks.map((social) => {
          const Icon = social.icon
          return (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors bg-background/80 backdrop-blur-sm p-2 rounded-full"
              aria-label={social.name}
            >
              <Icon className="h-5 w-5" />
            </Link>
          )
        })}
      </div>
    </>
  )
}

