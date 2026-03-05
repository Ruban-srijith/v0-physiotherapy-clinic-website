"use client"

import { Star } from "lucide-react"
import { FadeIn } from "./fade-in"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Marathon Runner",
    quote:
      "After my knee surgery, I thought my running days were over. The team at Apex Physio didn't just restore my mobility, they helped me set a new personal best.",
    stars: 5,
  },
  {
    name: "James Carter",
    role: "Software Engineer",
    quote:
      "Years of desk work destroyed my back. Three months at Apex Physio and I'm pain-free for the first time in a decade. Their approach is genuinely different.",
    stars: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Professional Dancer",
    quote:
      "The sports rehab program is world-class. They understood my body's unique demands and crafted a recovery plan that got me back on stage ahead of schedule.",
    stars: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-36 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-24 text-center">
          <FadeIn>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Testimonials
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-heading sm:text-5xl md:text-6xl">
              Trusted by thousands.
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl md:leading-relaxed">
              Real stories from real people who transformed their lives through
              expert physiotherapy care.
            </p>
          </FadeIn>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 150} direction="up">
              <div className="group h-full rounded-3xl border border-border bg-card p-10 shadow-sm transition-all duration-700 hover:shadow-xl hover:border-primary/20">
                {/* Stars */}
                <div className="mb-7 flex gap-1.5">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-5 w-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-pretty text-lg leading-relaxed text-foreground md:text-xl md:leading-relaxed">
                  {`"${t.quote}"`}
                </blockquote>

                {/* Author */}
                <div className="mt-10 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-lg font-bold text-primary">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-base font-semibold text-foreground md:text-lg">
                      {t.name}
                    </p>
                    <p className="text-sm text-muted-foreground md:text-base">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
