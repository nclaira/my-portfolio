import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: "GitHub", href: "#", icon: "⚡" },
    { name: "LinkedIn", href: "#", icon: "💼" },
    { name: "Twitter", href: "#", icon: "𝕏" },
  ]

  return (
    <footer className="border-t border-[#334155] py-12 px-6 bg-[#1e293b]/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/" className="text-3xl font-bold text-[#f59e0b]">
              Claire
            </Link>
            <p className="text-[#f8fafc]/60 mt-2 text-xl">Front-End Developer & Web Designer</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-[#f8fafc]/70 text-xl">
              <li>
                <Link href="#about" className="hover:text-[#f59e0b] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-[#f59e0b] transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-[#f59e0b] transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#f59e0b] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  aria-label={link.name}
                  className="text-3xl text-[#f8fafc]/60 hover:text-[#f59e0b] transition-colors"
                  title={link.name}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[#334155] pt-8 text-center text-[#f8fafc]/60 text-xl">
          <p>&copy; {currentYear} Claire Niyigena. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
