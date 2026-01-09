"use client"

import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-4 md:px-6 max-w-6xl mx-auto flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute -bottom-40 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="w-full space-y-8 animate-fadeInUp">
        <div className="space-y-6">
          <div className="inline-block">
            <div className="glass px-4 py-2 rounded-full text-sm font-medium text-accent mb-6">
              Generative AI Engineer & Full-Stack Developer
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-balance">
            Building intelligent AI systems{" "}
            <span className="bg-gradient-to-r from-accent via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradientShift">
              at scale
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed text-balance">
            I engineer production-grade generative AI systems, full-stack applications, and intelligent automation
            solutions. Specialized in LLMs, Prompt Engineering, RAG, and scalable architecture. Currently seeking
            opportunities to build AI-first products with teams pushing the boundaries of what's possible.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link href="#projects">
            <Button className="w-full sm:w-auto gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground btn-ripple shadow-lg hover:shadow-xl transition-all duration-300">
              View Projects
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="/" download>
            <Button
              variant="outline"
              className="w-full sm:w-auto gap-2 glass hover:bg-white/20 border-white/30 bg-transparent"
            >
              Download Resume
              <Download className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="#contact">
            <Button variant="ghost" className="w-full sm:w-auto gap-2 hover:bg-accent/20 hover:text-accent">
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="flex gap-3 pt-6 flex-wrap">
          <Link
            href="https://github.com/MONISH-VELLLIYANGIRI"
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-3 rounded-lg hover:bg-white/20 hover:border-accent/50 transition-all duration-300 text-foreground hover:text-accent group"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/monish-v-570a242b1/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-3 rounded-lg hover:bg-white/20 hover:border-accent/50 transition-all duration-300 text-foreground hover:text-accent group"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </Link>
          <Link
            href="mailto:v.monesh906@gmail.com"
            className="glass p-3 rounded-lg hover:bg-white/20 hover:border-accent/50 transition-all duration-300 text-foreground hover:text-accent group"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <div className="text-xs text-muted-foreground">Scroll to explore</div>
        </div>
      </div>
    </section>
  )
}
