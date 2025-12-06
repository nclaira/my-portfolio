export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "JavaScript"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "MongoDB", "PostgreSQL", "Prisma"],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Responsive Design", "UI/UX", "DALL-E", "Web Design"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">A comprehensive toolkit for modern web development</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-bold text-primary mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-background/80 border border-primary/30 text-foreground px-4 py-2 rounded-full text-sm font-medium hover:border-primary/60 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
