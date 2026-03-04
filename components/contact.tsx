"use client"

import { useState, type FormEvent } from "react"
import { MapPin, Phone, Mail, Clock, Send, Check } from "lucide-react"

const info = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: "123 Wellness Blvd, Suite 400",
  },
  { icon: Phone, label: "Call Us", value: "+1 (555) 234-5678" },
  { icon: Mail, label: "Email Us", value: "hello@apexphysio.com" },
  { icon: Clock, label: "Hours", value: "Mon - Sat, 7 AM - 8 PM" },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="relative py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-20 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Contact
          </p>
          <h2 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
            Start your recovery.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Book your first appointment today. Our team will reach out within 24
            hours to confirm your visit.
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Form */}
          <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
            <h3 className="mb-8 text-2xl font-bold text-foreground">
              Book an Appointment
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-8 w-8 text-primary" />
                </div>
                <p className="text-xl font-semibold text-foreground">
                  Appointment Requested
                </p>
                <p className="mt-2 text-muted-foreground">
                  {"We'll contact you within 24 hours to confirm."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-border bg-secondary px-4 py-3.5 text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      className="w-full rounded-xl border border-border bg-secondary px-4 py-3.5 text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full rounded-xl border border-border bg-secondary px-4 py-3.5 text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Tell us about your condition or goals..."
                    className="w-full resize-none rounded-xl border border-border bg-secondary px-4 py-3.5 text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-[0_0_32px_rgba(10,132,255,0.3)] transition-all hover:shadow-[0_0_48px_rgba(10,132,255,0.5)] hover:brightness-110"
                >
                  Request Appointment
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <div className="flex flex-col gap-8">
              {info.map((item) => (
                <div key={item.label} className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="mt-1 text-lg text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust badge */}
            <div className="mt-12 rounded-2xl border border-border bg-card p-6">
              <p className="text-sm font-medium text-muted-foreground">
                Accepted Insurance Partners
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                {["Aetna", "Blue Cross", "Cigna", "United"].map(
                  (partner) => (
                    <span
                      key={partner}
                      className="rounded-full border border-border bg-secondary px-4 py-2 text-sm text-muted-foreground"
                    >
                      {partner}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
