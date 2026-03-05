"use client"

import { useCallback } from "react"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { FadeIn } from "./fade-in"

export function Hero() {
  const handleSmoothScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        const navHeight = 80
        const top =
          target.getBoundingClientRect().top + window.scrollY - navHeight
        window.scrollTo({ top, behavior: "smooth" })
      }
    },
    []
  )

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Premium physiotherapy treatment in a modern clinic"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-40 text-center lg:px-8 lg:py-48">
        <FadeIn delay={150} direction="up" duration={1000}>
          <h1 className="text-balance text-5xl font-extrabold leading-[1.05] tracking-tight text-heading sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            Your body deserves
            <br />
            <span className="text-primary">expert care.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={450} direction="up" duration={1000}>
          <p className="mx-auto mt-10 max-w-2xl text-pretty text-lg font-medium leading-relaxed text-foreground/80 sm:text-xl md:text-2xl md:leading-relaxed">
            World-class physiotherapy backed by science, delivered with
            precision. Recover faster. Move better. Live without limits.
          </p>
        </FadeIn>

        <FadeIn delay={650} direction="up" duration={1000}>
          <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className="group inline-flex items-center gap-2.5 rounded-full bg-primary px-10 py-5 text-lg font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-500 hover:shadow-xl hover:shadow-primary/30 hover:brightness-110"
            >
              Book Appointment
              <ArrowRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              onClick={(e) => handleSmoothScroll(e, "#services")}
              className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-10 py-5 text-lg font-medium text-foreground shadow-sm transition-all duration-500 hover:border-primary/30 hover:shadow-md"
            >
              Explore Services
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <FadeIn delay={1000} direction="none" duration={1200}>
          <div className="flex h-12 w-7 items-start justify-center rounded-full border-2 border-primary/30 p-2">
            <div className="h-2.5 w-1.5 animate-bounce rounded-full bg-primary" />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
