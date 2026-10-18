import Image from "next/image"
import Link from "next/link"
import AnimateIn from "@/components/AnimateIn"

export default function Projects() {
  const projects = [
    {
      title: "Mucamanza Crypto Hub",
      description: "A full-stack crypto hub built with Next.js, TypeScript, Tailwind CSS, and MongoDB. Features live YouTube video syncing, an e-commerce book store, and an admin dashboard.",
      image: "/images/crypto-img.png",
      link: "https://www.mucamanzacryptohub.com/",
    },
    {
      title: "Umurunga Family – NGO Website",
      description: "Modern frontend website for a Rwanda-based peace and youth empowerment organization. Built with Next.js 16, Tailwind CSS, and TypeScript.",
      image: "/images/umurunga-website.png",
      link: "https://umurunga-website.vercel.app/",
    },
    {
      title: "Developer Dashboard",
      description: "A responsive Developer Dashboard built with React displaying real-time data from GitHub and weather APIs. Features Light/Dark mode toggle.",
      image: "/images/developer-dashboard.png",
      link: "https://developer-dashboard-qwu8.vercel.app/",
    },
    {
      title: "Medium Clone",
      description: "A full-stack web application inspired by Medium, built with Next.js, React, TypeScript, and MongoDB. Users can publish articles and discover stories.",
      image: "/images/medium-clone.png",
      link: "https://phase-two-capstone-project-fg2d.vercel.app/",
    },
    {
      title: "Movie Explorer",
      description: "A React-based movie explorer built with Vite, React Router, and Tailwind CSS. Browse movies, search by title, filter by genre, and manage favorites.",
      image: "/images/movie-explorer.png",
      link: "https://movie-explorer-web-yzgh.vercel.app/",
    },
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-[#1e293b]/20">
      <div className="max-w-6xl mx-auto">
        <AnimateIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">My <span className="text-[#f59e0b]">Projects</span></h2>
            <p className="text-sm text-[#f8fafc]/60 max-w-xl mx-auto">Showcasing my latest work and technical expertise</p>
          </div>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <AnimateIn key={index} delay={index * 0.1}>
              <div className="group bg-[#0f172a] border border-[#334155] rounded-xl overflow-hidden hover:border-[#f59e0b]/50 hover:shadow-lg hover:shadow-[#f59e0b]/5 transition-all duration-300 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 to-transparent" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-base font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-[#f8fafc]/60 mb-4 leading-relaxed flex-1">{project.description}</p>
                  <Link href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[#f59e0b] text-sm font-semibold hover:gap-3 transition-all duration-200">
                    View Project <span>→</span>
                  </Link>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
