"use client"

import Image from "next/image"
import { FadeIn } from "./fade-in"

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "10K+", label: "Patients Treated" },
  { value: "98%", label: "Recovery Rate" },
  { value: "25+", label: "Expert Therapists" },
]

export function About() {
  return (
    <section id="about" className="relative py-36 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section label */}
        <FadeIn>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            About Us
          </p>
        </FadeIn>

        <div className="grid gap-20 lg:grid-cols-2 lg:gap-24">
          {/* Text column */}
          <div>
            <FadeIn delay={100}>
              <h2 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-heading sm:text-5xl md:text-6xl">
                Redefining recovery
                <br />
                through precision.
              </h2>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="mt-10 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl md:leading-relaxed">
                At Therapy at Home, we combine advanced clinical expertise with
                cutting-edge technology to deliver outcomes that redefine what
                recovery means. Every treatment plan is meticulously crafted for
                your unique anatomy and goals.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <p className="mt-7 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl md:leading-relaxed">
                Our team of certified specialists brings together decades of
                experience in musculoskeletal health, sports medicine, and
                post-operative rehabilitation, all within a space designed for
                healing.
              </p>
            </FadeIn>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-4">
              {stats.map((stat, i) => (
                <FadeIn key={stat.label} delay={350 + i * 100}>
                  <div className="rounded-2xl bg-card p-5 shadow-sm border border-border transition-all duration-500 hover:shadow-md hover:border-primary/20">
                    <p className="text-3xl font-extrabold text-heading md:text-4xl lg:text-5xl">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground md:text-base">
                      {stat.label}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Image column */}
          <FadeIn delay={200} direction="right">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src="/images/about.jpg"
                  alt="Interior of Apex Physio modern treatment facility"
                  width={640}
                  height={480}
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-8 -left-6 rounded-2xl border border-border bg-card p-7 shadow-xl md:-bottom-10 md:-left-10">
                <p className="text-4xl font-extrabold text-primary">{"#1"}</p>
                <p className="mt-1.5 text-sm text-muted-foreground md:text-base">
                  Rated Clinic in the Region
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
