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
                <p>I am Claire Niyigena, a Level 3 Applied Mathematics student at the University of Rwanda, with a strong passion for coding and modern software development.</p>
                <p>I'm currently focused on front-end development, building clean, responsive, and user-friendly web interfaces. I combine creativity with technical expertise to deliver solutions that are both visually appealing and effective.</p>
                <p>I'm committed to continuous learning and have been expanding my skills through practical development experience, working with modern frameworks and best practices.</p>
              </div>
            </div>
          </AnimateIn>

          <div className="space-y-4">
            <AnimateIn delay={0.1}>
              <div className="bg-[#0f172a]/50 border border-[#334155] rounded-lg p-5">
                <h3 className="text-base font-bold text-[#f59e0b] mb-2">Education</h3>
                <p className="text-sm font-semibold mb-1">Applied Mathematics (Level 3)</p>
                <p className="text-[#f8fafc]/60 text-sm">University of Rwanda</p>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <div className="bg-[#0f172a]/50 border border-[#334155] rounded-lg p-5">
                <h3 className="text-base font-bold text-[#f59e0b] mb-2">Passion</h3>
                <p className="text-sm text-[#f8fafc]/70">Creating user-friendly interfaces and seamless experiences that make a difference. I love the intersection of design and development.</p>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.3}>
              <div className="bg-[#0f172a]/50 border border-[#334155] rounded-lg p-5">
                <h3 className="text-base font-bold text-[#f59e0b] mb-2">Commitment</h3>
                <p className="text-sm text-[#f8fafc]/70">Continuous learning and growth in the ever-evolving tech landscape. Always exploring new technologies and best practices.</p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  )
}
