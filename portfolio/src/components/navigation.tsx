"use client"

import { useState } from "react"
import Link from "next/link"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-[#0f172a]/95 backdrop-blur-sm border-b border-[#334155] z-50 text-2xl">
      <div className="max-w-9xl mx-auto px-[5cm] py-5 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold text-[#f59e0b]">
          Claire
        </Link>

        {/* Mobile menu button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden flex flex-col gap-1.5" aria-label="Toggle menu">
          <span className={`h-0.5 w-6 bg-[#f8fafc] transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`h-0.5 w-6 bg-[#f8fafc] transition-all ${isOpen ? "opacity-0" : ""}`}></span>
          <span
            className={`h-0.5 w-6 bg-[#f8fafc] transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>

        {/* Desktop menu */}

        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-[#f8fafc]/80 hover:text-[#f59e0b] transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#0f172a] border-b border-[#334155] md:hidden">
            <div className="flex flex-col gap-4 px-6 py-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#f8fafc]/80 hover:text-[#f59e0b] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
