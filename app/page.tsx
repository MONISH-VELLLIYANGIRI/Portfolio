"use client"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero"
import { AboutSection } from "@/components/about"
import { SkillsSection } from "@/components/skills"
import { ProjectsSection } from "@/components/projects"
import { EducationSection } from "@/components/education"
import { ContactSection } from "@/components/contact"
import { Footer } from "@/components/footer"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    const isDark = savedTheme === "dark" || (!savedTheme && prefersDark)
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
