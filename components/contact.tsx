"use client"

import { Mail, Linkedin, Github, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 md:px-6 max-w-6xl mx-auto border-t border-border">
      <div className="space-y-12">
        <div className="space-y-4 animate-fadeInUp max-w-2xl">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm always interested in hearing about new projects and opportunities. Whether you have a question or just
            want to say hello, feel free to reach out.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-6">
          <Link
            href="mailto:v.monesh906@gmail.com"
            className="group glass p-8 rounded-lg hover:bg-white/25 hover:border-accent/80 transition-all duration-300 hover:shadow-2xl premium-card border-2 hover:scale-105 animate-slideInLeft"
          >
            <Mail className="w-10 h-10 text-accent mb-4 group-hover:scale-125 group-hover:rotate-12 transition-transform" />
            <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">Email</h3>
            <p className="text-sm text-muted-foreground mb-4">Get in touch directly via email</p>
            <div className="flex items-center text-accent text-sm font-semibold group-hover:gap-2 transition-all">
              v.monesh906@gmail.com <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          <Link
            href="https://www.linkedin.com/in/monish-v-570a242b1/"
            target="_blank"
            rel="noopener noreferrer"
            className="group glass p-8 rounded-lg hover:bg-white/25 hover:border-accent/80 transition-all duration-300 hover:shadow-2xl premium-card border-2 hover:scale-105 animate-fadeInUp"
            style={{ animationDelay: "100ms" }}
          >
            <Linkedin className="w-10 h-10 text-accent mb-4 group-hover:scale-125 group-hover:rotate-12 transition-transform" />
            <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">LinkedIn</h3>
            <p className="text-sm text-muted-foreground mb-4">Connect on LinkedIn</p>
            <div className="flex items-center text-accent text-sm font-semibold group-hover:gap-2 transition-all">
              Monish V <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          <Link
            href="https://github.com/MONISH-VELLLIYANGIRI"
            target="_blank"
            rel="noopener noreferrer"
            className="group glass p-8 rounded-lg hover:bg-white/25 hover:border-accent/80 transition-all duration-300 hover:shadow-2xl premium-card border-2 hover:scale-105 animate-slideInRight"
            style={{ animationDelay: "200ms" }}
          >
            <Github className="w-10 h-10 text-accent mb-4 group-hover:scale-125 group-hover:rotate-12 transition-transform" />
            <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">GitHub</h3>
            <p className="text-sm text-muted-foreground mb-4">Check out my projects</p>
            <div className="flex items-center text-accent text-sm font-semibold group-hover:gap-2 transition-all">
              monish-v <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

        {/* CTA */}
        <div className="text-center animate-fadeInUp">
          <Link href="mailto:v.monesh906@gmail.com">
            <Button className="gap-2 bg-gradient-to-r from-accent to-cyan-400 hover:from-accent/90 hover:to-cyan-400/90 text-primary-foreground px-8 py-6 font-bold text-base btn-ripple shadow-lg hover:shadow-2xl transition-all duration-300">
              Start a Conversation
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
