export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-[#1e293b]/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-5xl font-bold mb-8">
              <span className="text-[#f59e0b]">About</span> Me
            </h2>

            <div className="text-xl space-y-6 text-[#f8fafc]/80 leading-relaxed">
              <p>
                I am Claire Niyigena, a Level 3 Applied Mathematics student at the University of Rwanda, with a strong
                passion for coding and modern software development.
              </p>

              <p>
                I'm currently focused on front-end development, building clean, responsive, and user-friendly web
                interfaces. I combine creativity with technical expertise to deliver solutions that are both visually
                appealing and effective.
              </p>

              <p>
                I'm committed to continuous learning and have been expanding my skills through practical development
                experience, working with modern frameworks and best practices.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-[#0f172a]/50 border border-[#334155] rounded-lg p-6">
              <h3 className="text-2xl font-bold text-[#f59e0b] mb-4">Education</h3>
              <p className="text-xl font-semibold mb-1">Applied Mathematics (Level 3)</p>
              <p className="text-[#f8fafc]/60 text-xl">University of London</p>
            </div>

            <div className="bg-[#0f172a]/50 border border-[#334155] rounded-lg p-6">
              <h3 className="text-2xl font-bold text-[#f59e0b] mb-4">Passion</h3>
              <p className="text-xl text-[#f8fafc]/80">
                Creating user-friendly interfaces and seamless experiences that make a difference. I love the
                intersection of design and development.
              </p>
            </div>

            <div className="bg-[#0f172a]/50 border border-[#334155] rounded-lg p-6">
              <h3 className="text-2xl font-bold text-[#f59e0b] mb-4">Commitment</h3>
              <p className="text-xl text-[#f8fafc]/80">
                Continuous learning and growth in the ever-evolving tech landscape. Always exploring new technologies
                and best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
