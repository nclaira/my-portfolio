import AnimateIn from "@/components/AnimateIn"

export default function Skills() {
  const skillCategories = [
    { title: "Frontend", skills: ["HTML", "Next.js", "React", "TypeScript", "Tailwind CSS", "JavaScript"] },
    { title: "Backend", skills: ["Node.js", "MongoDB", "PostgreSQL", "Prisma"] },
    { title: "Tools & Others", skills: ["Git", "Responsive Design", "UI/UX", "DALL-E", "Web Design"] },
  ]

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimateIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Technical <span className="text-[#f59e0b]">Skills</span></h2>
            <p className="text-sm text-[#f8fafc]/60 max-w-xl mx-auto">A comprehensive toolkit for modern web development</p>
          </div>
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <AnimateIn key={category.title} delay={index * 0.15}>
              <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-6 h-full">
                <h3 className="text-base font-bold text-[#f59e0b] mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="bg-[#0f172a]/80 border border-[#f59e0b]/30 text-[#f8fafc] px-3 py-1.5 rounded-full text-xs font-medium hover:border-[#f59e0b]/60 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
