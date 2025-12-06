import Image from "next/image"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "Developer Dashboard",
      description:
        "A modern, responsive Developer Dashboard built with React that displays real-time data from GitHub and weather APIs. Features a beautiful Light/Dark mode toggle for enhanced user experience.",
      image: "/images/developer-dashboard.png",
      link: "https://developer-dashboard-qwu8.vercel.app/",
    },
    {
      title: "Medium Clone",
      description:
        "A full-stack web application inspired by Medium, built with Next.js, React, TypeScript, and MongoDB. This platform allows users to create accounts, publish articles, interact with content, and discover stories through tags and search.",
      image: "/images/medium-clone.png",
      link: "https://phase-two-capstone-project-fg2d.vercel.app/",
    },
    {
      title: "Movie Explorer",
      description:
        "A modern React-based movie explorer application built with Vite, React Router, and Tailwind CSS. This app allows users to browse movies, search by title, filter by genre, view detailed information, and manage their favorite movies.",
      image: "/images/movie-explorer.png",
      link: "https://movie-explorer-web-yzgh.vercel.app/",
    },
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-[#1e293b]/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            My <span className="text-[#f59e0b]">Projects</span>
          </h2>
          <p className="text-xl text-[#f8fafc]/60 max-w-2xl mx-auto">Showcasing my latest work and technical expertise</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-[#0f172a] border border-[#334155] rounded-lg overflow-hidden hover:border-[#f59e0b]/50 transition-colors"
            >
              <div className="relative h-48 overflow-hidden bg-[#0f172a]/50">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-xl text-[#f8fafc]/70 mb-6 text-sm leading-relaxed">{project.description}</p>
                <Link
                  href={project.link}
                  className="text-xl inline-block text-[#f59e0b] font-semibold hover:opacity-70 transition-opacity flex items-center gap-2"
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
