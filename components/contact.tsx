"use client"

import { Mail, Linkedin, Github, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 md:px-6 max-w-6xl mx-auto border-t border-border">
      <div className="space-y-12">
        <div className="space-y-4 animate-fadeInUp max-w-2xl">
          <h2 className="text-4xl font-bold text-primary">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm always interested in hearing about new projects and opportunities. Whether you have a question or just
            want to say hello, feel free to reach out.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-6">
          <Link
            href="mailto:v.monesh906@gmail.com"
            className="group bg-card border border-border rounded-lg p-6 hover:border-accent/50 hover:shadow-lg transition-all duration-300 animate-fadeInUp"
          >
            <Mail className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
            <p className="text-sm text-muted-foreground mb-4">Get in touch directly via email</p>
            <div className="flex items-center text-accent text-sm font-medium group-hover:gap-2 transition-all">
              v.monesh906@gmail.com <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          <Link
            href="https://www.linkedin.com/in/monish-v-570a242b1/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card border border-border rounded-lg p-6 hover:border-accent/50 hover:shadow-lg transition-all duration-300 animate-fadeInUp"
            style={{ animationDelay: "100ms" }}
          >
            <Linkedin className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold text-foreground mb-2">LinkedIn</h3>
            <p className="text-sm text-muted-foreground mb-4">Connect on LinkedIn</p>
            <div className="flex items-center text-accent text-sm font-medium group-hover:gap-2 transition-all">
              Monish V <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          <Link
            href="https://github.com/MONISH-VELLLIYANGIRI"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card border border-border rounded-lg p-6 hover:border-accent/50 hover:shadow-lg transition-all duration-300 animate-fadeInUp"
            style={{ animationDelay: "200ms" }}
          >
            <Github className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold text-foreground mb-2">GitHub</h3>
            <p className="text-sm text-muted-foreground mb-4">Check out my projects</p>
            <div className="flex items-center text-accent text-sm font-medium group-hover:gap-2 transition-all">
              monish-v <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

        {/* CTA */}
        <div className="text-center animate-fadeInUp">
          <Link href="mailto:v.monesh906@gmail.com">
            <Button className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              Start a Conversation
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
