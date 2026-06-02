"use client"
import { useState, useEffect, useCallback } from "react"
import { Menu, X, Phone } from "lucide-react"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleSmoothScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault()
      setMobileOpen(false)
      if (href === "#") { window.scrollTo({ top: 0, behavior: "smooth" }); return }
      const target = document.querySelector(href)
      if (target) window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" })
    }, []
  )

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]" : "bg-transparent"
    }`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#" onClick={(e) => handleSmoothScroll(e, "#")}
          className="flex items-center gap-2 text-2xl font-bold tracking-tight text-heading">
          <img src="/logo.png" alt="Therapy at Home Logo" className="h-10 w-auto" />
          Therapy at <span className="text-primary">Home</span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}
              onClick={(e) => { if (link.href.startsWith("#")) handleSmoothScroll(e, link.href) }}
              className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground">
              {link.label}
            </a>
          ))}
          <a href="tel:+919342705088"
            className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-white shadow-md shadow-primary/25 transition-all hover:shadow-lg hover:shadow-primary/30 hover:brightness-105">
            <Phone className="h-4 w-4" />
            Book Now
          </a>
        </div>

        <button className="text-foreground md:hidden p-1" onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div className={`overflow-hidden bg-white/98 backdrop-blur-md md:hidden border-t border-border/50 transition-all duration-300 ${
        mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}>
        <div className="flex flex-col gap-1 px-5 py-4">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}
              onClick={(e) => { if (link.href.startsWith("#")) handleSmoothScroll(e, link.href) }}
              className="rounded-lg px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
              {link.label}
            </a>
          ))}
          <a href="tel:+919342705088"
            className="mt-2 rounded-full bg-primary px-6 py-3.5 text-center text-base font-semibold text-white transition-all hover:brightness-105">
            Book Appointment
          </a>
        </div>
      </div>
    </nav>
  )
}
