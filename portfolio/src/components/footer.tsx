import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: "GitHub", href: "#", icon: "⚡" },
    { name: "LinkedIn", href: "#", icon: "💼" },
    { name: "Twitter", href: "#", icon: "𝕏" },
  ]

  return (
    <footer className="border-t border-border py-12 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/" className="text-2xl font-bold text-primary">
              Claire
            </Link>
            <p className="text-foreground/60 mt-2 text-sm">Front-End Developer & Web Designer</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-foreground/70 text-sm">
              <li>
                <Link href="#about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-primary transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  aria-label={link.name}
                  className="text-foreground/60 hover:text-primary transition-colors text-xl"
                  title={link.name}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-foreground/60 text-sm">
          <p>&copy; {currentYear} Claire Niyigena. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
