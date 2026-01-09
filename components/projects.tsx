"use client"

import { ExternalLink, Github, Sparkles } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ProjectsSection() {
  const projects = [
    {
      title: "AI Story Plot Generator",
      description:
        "An intelligent story generation system powered by advanced LLMs and prompt engineering. Creates unique, coherent narratives based on user parameters with real-time streaming responses.",
      problemStatement: "How can we generate contextually-aware, creative stories at scale using generative AI?",
      architecture: "Next.js frontend + OpenAI API backend with streaming responses and prompt optimization",
      technologies: ["OpenAI API", "Prompt Engineering", "Next.js", "React", "TypeScript", "Vercel"],
      impact: ["Real-time story generation", "Custom parameters", "High-quality narratives"],
      github: "https://github.com/MONISH-VELLLIYANGIRI",
      demo: "https://story-vi8n.vercel.app/login",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "College Management Chatbot with RAG",
      description:
        "A RAG-based conversational system leveraging semantic search, embeddings, and SQL integration to provide intelligent responses to college-related queries with real-time knowledge updates.",
      problemStatement:
        "How do we build conversational AI that answers complex college queries with accurate, contextual information?",
      architecture:
        "LangChain + RAG pipeline with PostgreSQL backend and semantic embeddings for intelligent retrieval",
      technologies: ["LangChain", "RAG", "PostgreSQL", "OpenAI Embeddings", "Flask", "Python"],
      impact: ["Multi-turn conversations", "Semantic search accuracy", "Real-time knowledge updates"],
      github: "https://github.com/MONISH-VELLLIYANGIRI",
      demo: "https://college-management-chatbot.vercel.app/",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Cloud-Based Task Manager",
      description:
        "A production-grade full-stack task management application with real-time synchronization, collaborative features, and cloud storage integration for seamless team productivity.",
      problemStatement:
        "How do we build scalable task management systems with real-time collaboration and reliability?",
      architecture: "React frontend + Express backend + MongoDB database with WebSocket real-time sync on Vercel",
      technologies: ["React", "MongoDB", "Express", "Node.js", "Vercel", "WebSockets"],
      impact: ["Real-time sync", "Collaborative teams", "Cloud reliability"],
      github: "https://github.com/MONISH-VELLLIYANGIRI",
      demo: "https://demo.example.com",
      gradient: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 md:px-6 max-w-6xl mx-auto">
      <div className="space-y-12">
        <div className="space-y-4 animate-fadeInUp">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-accent" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            High-impact projects demonstrating expertise in AI, full-stack development, system design, and real-world
            problem-solving.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group glass rounded-xl p-8 hover:bg-white/20 hover:border-accent/50 transition-all duration-300 hover:shadow-2xl animate-fadeInUp overflow-hidden relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Animated gradient backdrop */}
              <div
                className={`absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br ${project.gradient} opacity-20 rounded-full blur-3xl group-hover:opacity-30 transition-opacity duration-500`}
              ></div>

              <div className="relative z-10 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} animate-pulse`}></div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">Problem Statement</h4>
                    <p className="text-sm text-muted-foreground italic">{project.problemStatement}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">Architecture</h4>
                    <p className="text-sm text-muted-foreground">{project.architecture}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground">Key Impact</h4>
                  <ul className="grid md:grid-cols-3 gap-2">
                    {project.impact.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-accent">▸</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium border border-accent/20 hover:bg-accent/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 glass hover:bg-white/30 border-white/30 bg-transparent"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </Button>
                  </Link>
                  <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="sm"
                      className={`gap-2 bg-gradient-to-r ${project.gradient} text-white hover:opacity-90`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
