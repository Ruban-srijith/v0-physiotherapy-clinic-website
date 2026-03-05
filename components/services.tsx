"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { FadeIn } from "./fade-in"

const services = [
  {
    title: "Back Pain Relief",
    description:
      "Targeted spinal therapy combining manual techniques and advanced modalities to eliminate chronic and acute back pain at its source.",
    image: "/images/services-back.jpg",
    features: ["Spinal Decompression", "Manual Therapy", "Core Stabilization"],
  },
  {
    title: "Sports Rehabilitation",
    description:
      "Performance-focused recovery programs designed for athletes. Return to peak condition with biomechanical analysis and sport-specific training.",
    image: "/images/services-sports.jpg",
    features: [
      "Injury Prevention",
      "Performance Analysis",
      "Return-to-Play Protocols",
    ],
  },
  {
    title: "Post-Surgery Therapy",
    description:
      "Comprehensive post-operative rehabilitation that accelerates healing and restores full function after joint replacement, ACL repair, and more.",
    image: "/images/services-surgery.jpg",
    features: [
      "Joint Mobilization",
      "Scar Tissue Management",
      "Progressive Loading",
    ],
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-36 bg-card lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-24 max-w-3xl">
          <FadeIn>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Our Services
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-heading sm:text-5xl md:text-6xl">
              Precision care for
              <br />
              every condition.
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mt-8 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl md:leading-relaxed">
              Three specialized programs, one goal: getting you back to doing
              what you love, faster and stronger than before.
            </p>
          </FadeIn>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 150} direction="up">
              <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-background shadow-sm transition-all duration-700 hover:shadow-xl hover:border-primary/20">
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative p-9">
                  <div className="mb-5 flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-heading md:text-3xl">
                      {service.title}
                    </h3>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>
                  <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed">
                    {service.description}
                  </p>

                  {/* Feature tags */}
                  <div className="mt-7 flex flex-wrap gap-2.5">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-secondary-foreground md:text-sm"
                      >
                        {feature}
                      </span>
                    ))}
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
