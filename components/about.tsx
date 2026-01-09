"use client"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 md:px-6 max-w-6xl mx-auto">
      <div className="space-y-12">
        <div className="space-y-4 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Problem-Solving Engineer
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Building intelligent systems that solve complex problems at the intersection of AI and engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6 animate-fadeInUp">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a Computer Science Engineering student at Bannari Amman Institute of Technology with a deep passion
                for Generative AI, Large Language Models, and Full-Stack Development. My journey has been driven by a
                desire to understand how cutting-edge AI technologies can solve real-world problems at scale.
              </p>
              <p>
                I specialize in prompt engineering, Retrieval-Augmented Generation (RAG), and building production-grade
                full-stack applications. I've completed 250+ LeetCode problems and hold certifications in Java (NPTEL)
                and LLM Engineering (Udemy), demonstrating strong algorithmic foundations and practical AI expertise.
              </p>
              <p>
                Currently exploring opportunities to build AI-first products with teams pushing the boundaries of what's
                possible. Passionate about scalability, clean code, and making a real impact through technology.
              </p>
            </div>
          </div>

          <div className="space-y-4 animate-parallaxUp">
            <div className="glass p-6 rounded-lg hover:bg-white/20 transition-all duration-300 group">
              <div className="text-3xl font-bold text-accent group-hover:scale-110 transition-transform origin-left mb-2">
                250+
              </div>
              <h3 className="font-semibold text-foreground">LeetCode Problems</h3>
              <p className="text-sm text-muted-foreground">Rank 1500+, Strong DSA foundation</p>
            </div>
            <div className="glass p-6 rounded-lg hover:bg-white/20 transition-all duration-300 group">
              <div className="text-3xl font-bold text-accent group-hover:scale-110 transition-transform origin-left mb-2">
                7.77
              </div>
              <h3 className="font-semibold text-foreground">CGPA</h3>
              <p className="text-sm text-muted-foreground">B.E. CSE, Bannari Amman Institute of Technology</p>
            </div>
            <div className="glass p-6 rounded-lg hover:bg-white/20 transition-all duration-300 group">
              <div className="text-3xl font-bold text-accent group-hover:scale-110 transition-transform origin-left mb-2">
                3+
              </div>
              <h3 className="font-semibold text-foreground">Years Experience</h3>
              <p className="text-sm text-muted-foreground">Full-stack dev, AI, and system design</p>
            </div>
            <div className="glass p-6 rounded-lg hover:bg-white/20 transition-all duration-300 group">
              <div className="text-3xl font-bold text-accent group-hover:scale-110 transition-transform origin-left mb-2">
                2
              </div>
              <h3 className="font-semibold text-foreground">Certifications</h3>
              <p className="text-sm text-muted-foreground">NPTEL Java, Udemy LLM Engineering</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
