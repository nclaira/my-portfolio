import Image from "next/image"
import Link from "next/link"
import AnimateIn from "@/components/AnimateIn"

export default function Hero() {
  return (
    <section className="pt-28 pb-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(245, 158, 11, 0.1) 35px, rgba(245, 158, 11, 0.1) 70px)" }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 py-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimateIn direction="left" delay={0.1}>
            <div className="space-y-6">
              <div>
                <p className="text-[#f59e0b] text-sm font-semibold tracking-widest uppercase mb-3">Full-Stack Developer</p>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Hello, I'm <span className="text-[#f59e0b]">Claire</span>
                </h1>
              </div>
              <p> I am a Full-Stack Developer and Applied Mathematics student with hands-on experience building modern,
               production-ready web applications. I specialize in crafting end-to-end web solutions using Next.js, React, 
               TypeScript, and Node.js—combining responsive user interfaces with secure database architectures and API integrations. 
               Leveraged by a strong analytical background, I also build interactive dashboards and data reports using Power BI and
                Excel to turn complex data into clear, actionable insights.</p>
                
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link href="#projects" className="inline-block bg-[#f59e0b] text-[#0f172a] text-sm font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                  View My Work
                </Link>
                <Link href="#contact" className="inline-block border border-[#f59e0b] text-[#f59e0b] text-sm font-semibold px-6 py-3 rounded-lg hover:bg-[#f59e0b]/10 transition-colors">
                  Get In Touch
                </Link>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn direction="right" delay={0.3}>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-[#f59e0b]/20 to-[#fbbf24]/10 rounded-full blur-3xl"></div>
                <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-[#f59e0b]/40 shadow-xl">
                  <Image src="/images/me.jpeg" alt="Claire Niyigena" fill className="object-cover" priority />
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
