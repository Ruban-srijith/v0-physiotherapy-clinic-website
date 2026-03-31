"use client";

import { useState, type FormEvent, useRef } from "react";
import { MapPin, Phone, Mail, Clock, Send, Check, AlertCircle } from "lucide-react";
import { FadeIn } from "./fade-in";

// ✅ Paste your Google Apps Script Web App URL here
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyzUdeM72Qc6O59xRdUPEKGn949ayUqHdQTIR-BthNKloA_cZiukiL0DW2y-1Q5vqKVWQ/exec";

const info = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: "123 Wellness Blvd, Suite 400",
  },
  { icon: Phone, label: "Call Us", value: "+1 (555) 234-5678" },
  { icon: Mail, label: "Email Us", value: "hello@apexphysio.com" },
  { icon: Clock, label: "Hours", value: "Mon - Sat, 7 AM - 8 PM" },
];

type SubmitState = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitState("loading");

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      // Google Apps Script requires no-cors mode — response will be opaque
      // We treat the fetch completing without a network error as success
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Required for Apps Script cross-origin requests
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setSubmitState("success");
      formRef.current?.reset();

      // Reset back to idle after 4 seconds
      setTimeout(() => setSubmitState("idle"), 4000);
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitState("error");
      setTimeout(() => setSubmitState("idle"), 4000);
    }
  }

  return (
    <section id="contact" className="relative py-36 bg-card lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-24 text-center">
          <FadeIn>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Contact
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-heading sm:text-5xl md:text-6xl">
              Start your recovery.
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl md:leading-relaxed">
              Book your first appointment today. Our team will reach out within
              24 hours to confirm your visit.
            </p>
          </FadeIn>
        </div>

        <div className="grid gap-20 lg:grid-cols-2 lg:gap-24">
          {/* Form */}
          <FadeIn delay={100} direction="left">
            <div className="rounded-3xl border border-border bg-background p-10 shadow-lg md:p-12">
              <h3 className="mb-10 text-2xl font-bold text-heading md:text-3xl">
                Book an Appointment
              </h3>

              {/* Success state */}
              {submitState === "success" && (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-10 w-10 text-primary" />
                  </div>
                  <p className="text-2xl font-semibold text-foreground">
                    Appointment Requested
                  </p>
                  <p className="mt-3 text-lg text-muted-foreground">
                    {"We'll contact you within 24 hours to confirm."}
                  </p>
                </div>
              )}

              {/* Error state */}
              {submitState === "error" && (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10">
                    <AlertCircle className="h-10 w-10 text-destructive" />
                  </div>
                  <p className="text-2xl font-semibold text-foreground">
                    Something went wrong
                  </p>
                  <p className="mt-3 text-lg text-muted-foreground">
                    Please try again or contact us directly by phone.
                  </p>
                </div>
              )}

              {/* Form — hidden during success/error, visible otherwise */}
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className={`flex flex-col gap-7 ${submitState === "success" || submitState === "error" ? "hidden" : ""}`}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2.5 block text-sm font-medium text-foreground md:text-base"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-border bg-card px-5 py-4 text-base text-foreground placeholder:text-muted-foreground/60 transition-all duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="grid gap-7 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2.5 block text-sm font-medium text-foreground md:text-base"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      className="w-full rounded-xl border border-border bg-card px-5 py-4 text-base text-foreground placeholder:text-muted-foreground/60 transition-all duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2.5 block text-sm font-medium text-foreground md:text-base"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full rounded-xl border border-border bg-card px-5 py-4 text-base text-foreground placeholder:text-muted-foreground/60 transition-all duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2.5 block text-sm font-medium text-foreground md:text-base"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us about your condition or goals..."
                    className="w-full resize-none rounded-xl border border-border bg-card px-5 py-4 text-base text-foreground placeholder:text-muted-foreground/60 transition-all duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitState === "loading"}
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-10 py-5 text-lg font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-500 hover:shadow-xl hover:shadow-primary/30 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitState === "loading" ? (
                    <>
                      <svg
                        className="h-5 w-5 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Request Appointment
                      <Send className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </FadeIn>

          {/* Info */}
          <FadeIn delay={250} direction="right">
            <div className="flex flex-col justify-center">
              <div className="flex flex-col gap-10">
                {info.map((item) => (
                  <div key={item.label} className="flex items-start gap-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-secondary shadow-sm transition-all duration-500 hover:shadow-md">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground md:text-base">
                        {item.label}
                      </p>
                      <p className="mt-1.5 text-lg font-medium text-foreground md:text-xl">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust badge */}
              <div className="mt-14 rounded-2xl border border-border bg-background p-8 shadow-sm">
                <p className="text-sm font-medium text-muted-foreground md:text-base">
                  Accepted Insurance Partners
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {["Aetna", "Blue Cross", "Cigna", "United"].map((partner) => (
                    <span
                      key={partner}
                      className="rounded-full border border-border bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground md:text-base"
                    >
                      {partner}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}