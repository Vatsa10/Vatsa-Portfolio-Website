"use client"

import { Home, User, Briefcase, Mail, FileText } from "lucide-react"
import { NavBar } from "@/components/ui/tubelight-navbar"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function Navigation() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  const navItems = [
    { name: "Home", url: "/", icon: Home },
    { name: "About", url: "/about", icon: User },
    { name: "Experience", url: "/experience", icon: FileText },
    { name: "Projects", url: "/projects", icon: Briefcase },
    { name: "Contact", url: "/contact", icon: Mail },
  ]

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return <NavBar items={navItems} />
}

