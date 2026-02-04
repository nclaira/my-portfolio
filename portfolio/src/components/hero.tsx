import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="w-full bg-cover bg-center bg-[url('hero-background.jpg">
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(245, 158, 11, 0.1) 35px, rgba(245, 158, 11, 0.1) 70px)",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <p className="text-[#f59e0b] text-lg font-semibold tracking-wide uppercase mb-2">Welcome</p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Hello, I'm <span className="text-[#f59e0b]">Claire</span>
              </h1>
            </div>

            <p className="text-2xl text-[#f8fafc]/80 leading-relaxed max-w-2xl">
              I'm a passionate front-end developer specializing in creating clean, responsive web interfaces. Currently
              pursuing my Applied Mathematics degree while building modern web solutions with Next.js and React.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#projects"
                className="text-xl inline-block bg-[#f59e0b] text-[#0f172a] font-bold px-10 py-4 rounded-xl hover:opacity-90 transition-opacity"
              >
                View My Work
              </Link>
              <Link
                href="#contact"
                className="text-xl inline-block border border-[#f59e0b] text-[#f59e0b] font-bold px-10 py-4 rounded-xl hover:bg-[#f59e0b]/10 transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Glowing circle background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f59e0b]/30 to-[#fbbf24]/20 rounded-full blur-3xl"></div>

              {/* Image container */}  

              <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-[#f59e0b]/50  mt-10 shadow-[0_0_95px_white] md:mt-0">
                <Image src="/images/me.jpeg" alt="Claire Niyigena" fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
