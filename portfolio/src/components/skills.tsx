export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["Html","Next.js", "React", "TypeScript", "Tailwind CSS", "JavaScript"],
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
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Technical <span className="text-[#f59e0b]">Skills</span>
          </h2>
          <p className="text-xl text-[#f8fafc]/60 max-w-2xl mx-auto">A comprehensive toolkit for modern web development</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-[#1e293b] border border-[#334155] rounded-lg p-8">
              <h3 className="text-3xl font-bold text-[#f59e0b] mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-[#0f172a]/80 border border-[#f59e0b]/30 text-[#f8fafc] px-4 py-2 rounded-full text-xl font-medium hover:border-[#f59e0b]/60 transition-colors"
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
