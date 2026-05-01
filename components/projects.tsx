"use client"

import { Github, Sparkles } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ProjectsSection() {
  const projects = [
    {
      title: "TN Smart Bus – Intelligent Bus Booking & Tracking Platform",
      description:
        "A real-world smart mobility solution for intelligent bus booking and tracking. Features scalable backend services with JWT authentication, dynamic bus discovery, and interactive React-based frontend for seamless booking experience.",
      problemStatement:
        "How do we build efficient bus booking systems that solve real-world transport challenges with scalable architecture and real-time tracking capabilities?",
      architecture:
        "Spring Boot backend with JWT authentication + MySQL relational database + React frontend with modern UI components",
      technologies: ["Spring Boot", "JWT Authentication", "MySQL", "React", "Java", "RESTful APIs"],
      impact: ["Scalable backend services", "Dynamic bus discovery with filtering", "Improved user travel planning", "Real-time booking experience", "Extensible architecture for GPS tracking"],
      github: "https://github.com/MONISH-VELLLIYANGIRI",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Agri AI Intelligence System using Adaptive Hybrid RAG",
      description:
        "An AI-powered agriculture intelligence system using Retrieval-Augmented Generation with adaptive hybrid retrieval strategy. Combines semantic vector search and keyword-based retrieval for accurate, context-aware responses with confidence scoring.",
      problemStatement:
        "How do we build agriculture AI systems that provide accurate, contextual responses using both semantic and keyword-based retrieval with confidence indicators?",
      architecture:
        "FastAPI backend with Adaptive Hybrid RAG pipeline (ChromaDB + TF-IDF) + Sentence Transformers embeddings + LLM integration + responsive HTML/CSS/JavaScript frontend",
      technologies: ["FastAPI", "RAG", "ChromaDB", "Sentence Transformers", "TF-IDF", "LangChain", "LLMs", "Python", "HTML/CSS/JavaScript"],
      impact: ["Adaptive retrieval strategy", "Context-aware responses", "Confidence scoring for reliability", "Efficient knowledge retrieval", "Scalable AgriTech architecture"],
      github: "https://github.com/MONISH-VELLLIYANGIRI",
      gradient: "from-purple-500 to-pink-500",
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
