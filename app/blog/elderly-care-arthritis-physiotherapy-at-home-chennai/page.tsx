import type { Metadata } from "next";
import BookingCTA from "@/components/BookingCTA";

export const metadata: Metadata = {
  title: "Elderly Care & Arthritis Physiotherapy at Home in Chennai | Therapy at Home",
  description:
    "Gentle, personalized physiotherapy for elderly and arthritis care in Chennai. Improve mobility, reduce pain, and stay independent at home.",
  alternates: {
    canonical: "https://therapyathome.in/blog/elderly-care-arthritis-physiotherapy-at-home-chennai",
  },
};

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 text-gray-800">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">
        Chennai · Elderly Care
      </p>
      <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
        Elderly Care & Arthritis Physiotherapy at Home in Chennai
      </h1>
      <p className="mb-6 text-lg text-gray-600">
        Gentle, personalized physiotherapy helps older adults stay mobile,
        independent, and confident — without the stress of travelling to a clinic.
      </p>

      <h2 className="mt-8 mb-3 text-2xl font-semibold text-gray-900">
        Why home care matters for arthritis and ageing joints
      </h2>
      <p className="mb-4 leading-relaxed text-gray-700">
        Arthritis, stiffness, and reduced balance often get worse when mobility is
        limited. Home physiotherapy allows the therapist to assess the actual
        environment, movement pattern, and daily routines that trigger pain.
      </p>

      <h2 className="mt-8 mb-3 text-2xl font-semibold text-gray-900">
        Common concerns we help with
      </h2>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
        <li>Joint pain and morning stiffness</li>
        <li>Difficulty climbing stairs or walking safely</li>
        <li>Reduced balance and increased fall risk</li>
        <li>Muscle weakness after bed rest or inactivity</li>
      </ul>

      <h2 className="mt-8 mb-3 text-2xl font-semibold text-gray-900">
        What a session includes
      </h2>
      <p className="mb-4 leading-relaxed text-gray-700">
        Sessions usually begin with a mobility and pain assessment, followed by
        guided strengthening, flexibility exercises, joint-friendly movement drills,
        and advice on safer daily habits that reduce strain.
      </p>

      <h2 className="mt-8 mb-3 text-2xl font-semibold text-gray-900">
        When to consider physiotherapy
      </h2>
      <p className="mb-6 leading-relaxed text-gray-700">
        You should consider a home assessment if pain is limiting daily life,
        walking is becoming difficult, strength is dropping, or a family member is
        noticing balance issues or frequent falls.
      </p>

      <BookingCTA
        heading="Book Elderly Care Physiotherapy in Chennai"
        subheading="Get a gentle, personalized home assessment designed around comfort, mobility, and independence."
        city="Chennai"
        service="elderly-care"
      />
    </article>
  )
}
