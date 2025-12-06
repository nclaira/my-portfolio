import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
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

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <p className="text-primary text-sm font-semibold tracking-wide uppercase mb-2">Welcome</p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Hello, I'm <span className="text-primary">Claire</span>
              </h1>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed max-w-lg">
              I'm a passionate front-end developer specializing in creating clean, responsive web interfaces. Currently
              pursuing my Applied Mathematics degree while building modern web solutions with Next.js and React.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#projects"
                className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                View My Work
              </Link>
              <Link
                href="#contact"
                className="inline-block border border-primary text-primary font-semibold px-8 py-3 rounded-lg hover:bg-primary/10 transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Glowing circle background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-3xl"></div>

              {/* Image container */}
              <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-primary/50">
                <Image src="/images/image.png" alt="Claire Niyigena" fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
