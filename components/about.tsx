import Image from "next/image"

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "10K+", label: "Patients Treated" },
  { value: "98%", label: "Recovery Rate" },
  { value: "25+", label: "Expert Therapists" },
]

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section label */}
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          About Us
        </p>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Text column */}
          <div>
            <h2 className="text-balance text-4xl font-bold leading-tight tracking-tight text-heading md:text-5xl">
              Redefining recovery
              <br />
              through precision.
            </h2>
            <p className="mt-8 text-pretty text-lg leading-relaxed text-muted-foreground">
              At Apex Physio, we combine advanced clinical expertise with
              cutting-edge technology to deliver outcomes that redefine what
              recovery means. Every treatment plan is meticulously crafted for
              your unique anatomy and goals.
            </p>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Our team of certified specialists brings together decades of
              experience in musculoskeletal health, sports medicine, and
              post-operative rehabilitation, all within a space designed for
              healing.
            </p>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-card p-4 shadow-sm border border-border">
                  <p className="text-3xl font-bold text-heading md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image column */}
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
            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-border bg-card p-6 shadow-xl md:-bottom-8 md:-left-8">
              <p className="text-3xl font-bold text-primary">{"#1"}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Rated Clinic in the Region
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
