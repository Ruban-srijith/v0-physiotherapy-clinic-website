"use client"
import { useState, type FormEvent, useRef } from "react"
import { MapPin, Phone, Mail, Clock, Send, Check, AlertCircle } from "lucide-react"

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyzUdeM72Qc6O59xRdUPEKGn949ayUqHdQTIR-BthNKloA_cZiukiL0DW2y-1Q5vqKVWQ/exec"
const WA_NUMBER = "919342705088"
const WA_MESSAGE = "Hi! I'd like to book a home physiotherapy session in Theni."

const info = [
  { icon: MapPin, label: "Address", value: "126/ Eadamal Street, Near Hema Dental Clinic, Theni – 625531" },
  { icon: Phone, label: "Phone", value: "+91 93427 05088", href: "tel:+919342705088" },
  { icon: Mail, label: "Email", value: "theraphyathome888@gmail.com", href: "mailto:theraphyathome888@gmail.com" },
  { icon: Clock, label: "Hours", value: "Mon – Sat, 7 AM – 9 PM" },
]

const socials = [
  {
    label: "WhatsApp",
    href: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`,
    color: "bg-[#25D366] hover:bg-[#20c05c]",
    icon: (
      <svg viewBox="0 0 32 32" className="h-5 w-5 fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2C8.28 2 2 8.28 2 16c0 2.48.68 4.9 1.96 7.02L2 30l7.18-1.88A13.92 13.92 0 0016 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.5a11.43 11.43 0 01-5.82-1.59l-.42-.25-4.26 1.12 1.13-4.14-.27-.44A11.47 11.47 0 014.5 16C4.5 9.6 9.6 4.5 16 4.5S27.5 9.6 27.5 16 22.4 27.5 16 27.5zm6.29-8.56c-.34-.17-2.02-1-2.34-1.11-.31-.11-.54-.17-.77.17-.23.34-.88 1.11-1.08 1.34-.2.23-.4.26-.74.09-.34-.17-1.44-.53-2.74-1.69-1.01-.9-1.7-2.02-1.9-2.36-.2-.34-.02-.52.15-.69.15-.15.34-.39.51-.59.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.77-1.86-1.06-2.55-.28-.67-.56-.58-.77-.59h-.66c-.23 0-.6.09-.91.43-.31.34-1.2 1.17-1.2 2.86 0 1.69 1.23 3.32 1.4 3.55.17.23 2.42 3.7 5.87 5.19.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.14.66-.1 2.02-.83 2.31-1.63.28-.8.28-1.49.2-1.63-.09-.14-.31-.23-.66-.4z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/therapy_at_home.in/",
    color: "bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] hover:opacity-90",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/therapyathome",
    color: "bg-[#0A66C2] hover:bg-[#0958a8]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
]

type SubmitState = "idle" | "loading" | "success" | "error"

export function Contact() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle")
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitState("loading")
    const formData = new FormData(e.currentTarget)
    const payload = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    }
    try {
      await fetch(APPS_SCRIPT_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) })
      setSubmitState("success")
      formRef.current?.reset()
      setTimeout(() => setSubmitState("idle"), 5000)
    } catch (err) {
      console.error("Submission error:", err)
      setSubmitState("error")
      setTimeout(() => setSubmitState("idle"), 5000)
    }
  }

  return (
    <section id="contact" className="relative py-28 bg-[#F7FAFE] lg:py-36">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">

        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">Contact</p>
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-heading sm:text-5xl md:text-6xl">
            Book a home visit in Theni.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Fill the form and we will confirm your home session within 24 hours.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-start">

          {/* Form */}
          <div className="rounded-2xl border border-border bg-white p-8 shadow-sm md:p-10">
            <h3 className="mb-8 text-2xl font-bold text-heading">Book an Appointment</h3>

            {submitState === "success" && (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-8 w-8 text-primary" />
                </div>
                <p className="text-2xl font-semibold text-foreground">Appointment Requested</p>
                <p className="mt-2 text-base text-muted-foreground">{"We'll contact you within 24 hours to confirm."}</p>
              </div>
            )}

            {submitState === "error" && (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
                  <AlertCircle className="h-8 w-8 text-destructive" />
                </div>
                <p className="text-2xl font-semibold text-foreground">Something went wrong</p>
                <p className="mt-2 text-base text-muted-foreground">Please try again or call us on +91 93427 05088.</p>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit}
              className={`flex flex-col gap-6 ${submitState === "success" || submitState === "error" ? "hidden" : ""}`}>
              <div>
                <label htmlFor="name" className="mb-2 block text-base font-medium text-foreground">Full Name</label>
                <input id="name" name="name" type="text" required placeholder="Murugan K"
                  className="w-full rounded-xl border border-border bg-[#F7FAFE] px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15" />
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="mb-2 block text-base font-medium text-foreground">Phone</label>
                  <input id="phone" name="phone" type="tel" required placeholder="+91 98765 43210"
                    className="w-full rounded-xl border border-border bg-[#F7FAFE] px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-base font-medium text-foreground">Email</label>
                  <input id="email" name="email" type="email" required placeholder="example@gmail.com"
                    className="w-full rounded-xl border border-border bg-[#F7FAFE] px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-base font-medium text-foreground">Message</label>
                <textarea id="message" name="message" rows={4} required placeholder="Tell us about your pain or condition..."
                  className="w-full resize-none rounded-xl border border-border bg-[#F7FAFE] px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15" />
              </div>
              <button type="submit" disabled={submitState === "loading"}
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-9 py-4 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70">
                {submitState === "loading" ? (
                  <>
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>Request Appointment <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></>
                )}
              </button>
            </form>
          </div>

          {/* Info + Socials */}
          <div className="flex flex-col gap-8 lg:pt-2">
            {/* Contact details */}
            {info.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="mt-0.5 text-base font-medium text-foreground hover:text-primary transition-colors md:text-lg">{item.value}</a>
                  ) : (
                    <p className="mt-0.5 text-base font-medium text-foreground md:text-lg">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Connect With Us</p>
              <div className="flex flex-col gap-3">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-base font-semibold text-white transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm ${s.color}`}>
                    {s.icon}
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Why choose us */}
            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3">Why Choose Us</p>
              <div className="flex flex-wrap gap-2">
                {["Home Visits", "Trained Therapists", "Flexible Timing", "Theni & Coimbatore"].map((item) => (
                  <span key={item} className="rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground md:text-base">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
