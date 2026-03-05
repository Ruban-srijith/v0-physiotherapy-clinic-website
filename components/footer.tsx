export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row lg:px-8">
        <a
          href="#"
          className="text-xl font-bold tracking-tight text-heading"
        >
          Apex<span className="text-primary">Physio</span>
        </a>
        <div className="flex gap-8">
          {["About", "Services", "Testimonials", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link}
            </a>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          {"© 2026 Apex Physio. All rights reserved."}
        </p>
      </div>
    </footer>
  )
}
