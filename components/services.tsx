"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

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
    <section id="services" className="relative py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-20 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Our Services
          </p>
          <h2 className="text-balance text-4xl font-bold leading-tight tracking-tight text-heading md:text-5xl">
            Precision care for
            <br />
            every condition.
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Three specialized programs, one goal: getting you back to doing what
            you love, faster and stronger than before.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-background shadow-sm transition-all duration-500 hover:shadow-xl hover:border-primary/20"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-8">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-heading">
                    {service.title}
                  </h3>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
                <p className="text-pretty leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                {/* Feature tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
