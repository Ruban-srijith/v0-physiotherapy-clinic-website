"use client"

import { useCallback } from "react"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const handleSmoothScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        const navHeight = 80
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight
        window.scrollTo({ top, behavior: "smooth" })
      }
    },
    []
  )

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Premium physiotherapy treatment in a modern clinic"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-32 text-center lg:px-8">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-primary">
          Premium Physiotherapy
        </p>
        <h1 className="text-balance text-5xl font-bold leading-[1.08] tracking-tight text-foreground md:text-7xl lg:text-8xl">
          Your body deserves
          <br />
          <span className="bg-gradient-to-r from-primary to-[#5AC8FA] bg-clip-text text-transparent">
            expert care.
          </span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          World-class physiotherapy backed by science, delivered with precision.
          Recover faster. Move better. Live without limits.
        </p>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-[0_0_32px_rgba(10,132,255,0.3)] transition-all hover:shadow-[0_0_48px_rgba(10,132,255,0.5)] hover:brightness-110"
          >
            Book Appointment
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#services"
            onClick={(e) => handleSmoothScroll(e, "#services")}
            className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-base font-medium text-foreground transition-all hover:border-muted-foreground hover:bg-secondary"
          >
            Explore Services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-muted-foreground/30 p-1.5">
          <div className="h-2 w-1 animate-bounce rounded-full bg-primary" />
        </div>
      </div>
    </section>
  )
}
