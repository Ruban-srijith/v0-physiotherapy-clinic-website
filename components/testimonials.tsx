import { Star } from "lucide-react"

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
    <section id="testimonials" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-20 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Testimonials
          </p>
          <h2 className="text-balance text-4xl font-bold leading-tight tracking-tight text-heading md:text-5xl">
            Trusted by thousands.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Real stories from real people who transformed their lives through
            expert physiotherapy care.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-500 hover:shadow-xl hover:border-primary/20"
            >
              {/* Stars */}
              <div className="mb-6 flex gap-1">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-pretty text-lg leading-relaxed text-foreground">
                {`"${t.quote}"`}
              </blockquote>

              {/* Author */}
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-lg font-bold text-primary">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
