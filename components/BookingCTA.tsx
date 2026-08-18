type BookingCTAProps = {
  heading: string
  subheading: string
  city: string
  service?: string
}

export default function BookingCTA({
  heading,
  subheading,
  city,
  service = 'general',
}: BookingCTAProps) {
  const href = `https://therapyathome.in/#contact?city=${encodeURIComponent(city)}&service=${encodeURIComponent(service)}`

  return (
    <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6 text-center shadow-sm">
      <p className="text-lg font-semibold text-blue-900">{heading}</p>
      <p className="mt-2 text-sm leading-relaxed text-gray-700">{subheading}</p>
      <a
        href={href}
        className="mt-5 inline-block rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
      >
        Book a Session
      </a>
    </div>
  )
}
