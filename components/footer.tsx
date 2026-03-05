"use client"

import { FadeIn } from "./fade-in"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16">
      <FadeIn direction="none" duration={600}>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row lg:px-8">
          <a
            href="#"
            className="text-2xl font-bold tracking-tight text-heading"
          >
            Apex<span className="text-primary">Physio</span>
          </a>
          <div className="flex gap-10">
            {["About", "Services", "Testimonials", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground md:text-base"
              >
                {link}
              </a>
            ))}
          </div>
          <p className="text-sm text-muted-foreground md:text-base">
            {"© 2026 Apex Physio. All rights reserved."}
          </p>
        </div>
      </FadeIn>
    </footer>
  )
}
