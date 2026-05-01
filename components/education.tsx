"use client"

export function EducationSection() {
  const achievements = [
    { label: "LeetCode Problems Solved", value: "300+" },
    { label: "Certifications Earned", value: "3" },
    { label: "CGPA", value: "7.78" },
  ]

  const certifications = [
    { name: "Oracle Certified Professional – Java SE 17 Developer", issuer: "Oracle" },
    { name: "Programming in Java", issuer: "NPTEL (National Programme on Technology Enhanced Learning)" },
    { name: "LLM Engineering: Master AI, Large Language Models & Agentic AI", issuer: "Udemy" },
  ]

  return (
    <section id="education" className="py-20 px-4 md:px-6 max-w-6xl mx-auto border-t border-border">
      <div className="space-y-12">
        <div className="space-y-4 animate-fadeInUp">
          <h2 className="text-4xl font-bold text-primary">Education & Achievements</h2>
        </div>

        {/* Education Timeline */}
        <div className="animate-fadeInUp">
          <h3 className="text-2xl font-bold text-primary mb-6">Education</h3>
          <div className="glass border-2 border-accent/40 rounded-lg p-8 hover:bg-white/25 hover:border-accent/80 transition-all duration-300 premium-card hover:shadow-2xl">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-xl font-bold text-foreground">B.E. Computer Science Engineering</h4>
                <p className="text-muted-foreground text-lg">Bannari Amman Institute of Technology</p>
              </div>
              <span className="text-sm font-bold text-accent bg-accent/20 px-4 py-2 rounded-full border border-accent/40">Expected 2027</span>
            </div>
            <div className="pt-4 mt-4 border-t border-accent/20">
              <p className="text-muted-foreground">
                <span className="font-bold text-foreground">CGPA:</span> <span className="text-accent font-bold">7.78</span> (Ongoing)
              </p>
            </div>
          </div>
        </div>

        {/* Achievements Stats */}
        <div className="grid grid-cols-3 gap-4">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.label}
              className="glass border-2 border-accent/30 rounded-lg p-6 text-center hover:border-accent/80 hover:bg-white/25 transition-all duration-300 animate-fadeInUp premium-card hover:shadow-2xl hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="text-4xl font-bold bg-gradient-to-r from-accent to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">{achievement.value}</p>
              <p className="text-sm md:text-base text-muted-foreground font-semibold">{achievement.label}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="animate-fadeInUp">
          <h3 className="text-2xl font-bold text-primary mb-6">Certifications & Achievements</h3>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                className="glass border-2 border-accent/30 rounded-lg p-6 hover:border-accent/80 hover:bg-white/25 transition-all duration-300 premium-card hover:shadow-xl group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-accent to-cyan-400 rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground group-hover:text-accent transition-colors text-lg">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
