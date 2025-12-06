import Image from "next/image"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio showcasing web development projects and technical skills. Built with Next.js and Tailwind CSS for optimal performance.",
      image: "/images/image.png",
      link: "#",
    },
    {
      title: "Web Application",
      description:
        "A full-stack web application demonstrating modern development practices. Features responsive design, clean UI, and seamless user experience.",
      image: "/web-application-dashboard.png",
      link: "#",
    },
    {
      title: "Design System",
      description:
        "Comprehensive design system with reusable components and consistent styling. Built to streamline development and maintain brand consistency.",
      image: "/design-system-components.png",
      link: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">Showcasing my latest work and technical expertise</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-background border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
            >
              <div className="relative h-48 overflow-hidden bg-background/50">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-foreground/70 mb-6 text-sm leading-relaxed">{project.description}</p>
                <Link
                  href={project.link}
                  className="inline-block text-primary font-semibold hover:opacity-70 transition-opacity flex items-center gap-2"
                >
                  Explore
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
