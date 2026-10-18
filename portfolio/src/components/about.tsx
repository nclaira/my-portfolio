import AnimateIn from "@/components/AnimateIn"

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-[#1e293b]/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <AnimateIn direction="left">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-[#f59e0b]">About</span> Me
              </h2>
              <div className="space-y-4 text-[#f8fafc]/70 leading-relaxed text-base">
                <p>I am Claire Niyigena, an Applied Mathematics student at the University of Rwanda and 
                  a passionate Full-Stack Web Developer. I bridge the gap between logical 
                  problem-solving and modern web engineering to build scalable, user-centric applications.</p>

                <p>My technical focus centers on crafting end-to-end web architectures using Next.js, React, TypeScript, and Tailwind CSS on the frontend, combined 
                  with server-side API routes, database schemas, and third-party API integrations on the backend.</p>

                <p>With a strong background in mathematical logic, I bring a structured, analytical mindset to both software engineering and data 
                  analytics—building interactive dashboards with Power BI and Excel to turn complex datasets into actionable insights.</p>
              </div>
            </div>
          </AnimateIn>

          <div className="space-y-4">
            <AnimateIn delay={0.1}>
              <div className="bg-[#0f172a]/50 border border-[#334155] rounded-lg p-5">
                <h3 className="text-base font-bold text-[#f59e0b] mb-2">Education</h3>
                <p className="text-sm font-semibold mb-1">Applied Mathematics (Level 3)</p>
                <p className="text-[#f8fafc]/60 text-sm">University of Rwanda
                <br />Focusing on computational logic, analytical problem-solving, and quantitative analysis.</p>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <div className="bg-[#0f172a]/50 border border-[#334155] rounded-lg p-5">
                <h3 className="text-base font-bold text-[#f59e0b] mb-2">Passion</h3>
                <p className="text-sm text-[#f8fafc]/70">Building seamless, end-to-end digital experiences that solve real-world problems. I thrive at
                 the intersection of logical backend architecture, interactive UI design, and data-driven insights.</p>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.3}>
              <div className="bg-[#0f172a]/50 border border-[#334155] rounded-lg p-5">
                <h3 className="text-base font-bold text-[#f59e0b] mb-2">Commitment</h3>
                <p className="text-sm text-[#f8fafc]/70">Continuous learning and adaptation in the fast-moving software ecosystem.
                 Dedicated to writing clean, maintainable code, adopting industry best practices, and constantly mastering new technologies.</p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  )
}
