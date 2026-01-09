"use client"

export function EducationSection() {
  const achievements = [
    { label: "LeetCode Problems Solved", value: "250+" },
    { label: "Current Rank", value: "1500+" },
    { label: "CGPA", value: "7.77" },
  ]

  const certifications = [
    { name: "NPTEL Java Programming", issuer: "NPTEL" },
    { name: "LLM Engineering Specialization", issuer: "Udemy" },
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
          <div className="bg-card border border-border rounded-lg p-6 md:p-8 space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-xl font-semibold text-foreground">B.E. Computer Science Engineering</h4>
                <p className="text-muted-foreground">Bannari Amman Institute of Technology</p>
              </div>
              <span className="text-sm font-medium text-accent">Expected 2025</span>
            </div>
            <div className="pt-2">
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">CGPA:</span> 7.77
              </p>
            </div>
          </div>
        </div>

        {/* Achievements Stats */}
        <div className="grid grid-cols-3 gap-4">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.label}
              className="bg-card border border-border rounded-lg p-4 md:p-6 text-center hover:border-accent/50 transition-colors animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="text-3xl md:text-4xl font-bold text-accent mb-2">{achievement.value}</p>
              <p className="text-sm md:text-base text-muted-foreground">{achievement.label}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="animate-fadeInUp">
          <h3 className="text-2xl font-bold text-primary mb-6">Certifications</h3>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h4 className="font-semibold text-foreground">{cert.name}</h4>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
