"use client"

import { Code2, Database, Brain, Zap, GitBranch, Cloud } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: Code2,
      skills: ["Java", "Python", "C", "C++", "SQL", "JavaScript", "TypeScript"],
      color: "from-blue-400 to-cyan-400",
    },
    {
      category: "Frontend Development",
      icon: Cloud,
      skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
      color: "from-purple-400 to-pink-400",
    },
    {
      category: "AI & Machine Learning",
      icon: Brain,
      skills: ["LLMs", "Prompt Engineering", "RAG", "LangChain", "OpenAI API", "Hugging Face"],
      color: "from-orange-400 to-red-400",
    },
    {
      category: "Backend & Databases",
      icon: Database,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Node.js", "Express", "REST APIs"],
      color: "from-green-400 to-emerald-400",
    },
    {
      category: "Tools & DevOps",
      icon: GitBranch,
      skills: ["Git", "GitHub", "Postman", "Vercel", "Docker", "VS Code"],
      color: "from-cyan-400 to-blue-400",
    },
    {
      category: "System Design",
      icon: Zap,
      skills: ["Scalability", "Performance Optimization", "Architecture Patterns", "Cloud Deployment"],
      color: "from-yellow-400 to-orange-400",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 md:px-6 max-w-6xl mx-auto">
      <div className="space-y-12">
        <div className="space-y-4 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            A comprehensive toolkit built through hands-on experience with modern technologies and AI frameworks,
            optimized for building production-grade systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={category.category}
                className="group glass p-6 rounded-lg hover:bg-white/20 transition-all duration-300 hover:shadow-lg hover:border-accent/50 animate-fadeInUp cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div
                  className={`bg-gradient-to-r ${category.color} p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-4 group-hover:text-accent transition-colors">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-accent/10 text-accent border border-accent/20 rounded-full text-xs font-medium hover:bg-accent/20 hover:border-accent/40 transition-all duration-200 group-hover:scale-105 origin-center"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
