import type { Metadata } from "next";
import BookingCTA from "@/components/BookingCTA";

export const metadata: Metadata = {
  title: "Stroke Recovery Physiotherapy at Home in Chennai | Therapy at Home",
  description:
    "Recover confidence and mobility after stroke with guided physiotherapy at home in Chennai. Personalized support for strength, balance, and daily movement.",
  alternates: {
    canonical: "https://therapyathome.in/blog/stroke-recovery-physiotherapy-at-home-chennai",
  },
};

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 text-gray-800">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">
        Chennai · Stroke Recovery
      </p>
      <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
        Stroke Recovery Physiotherapy at Home in Chennai
      </h1>
      <p className="mb-6 text-lg text-gray-600">
        Stroke recovery requires patience, consistency, and carefully guided therapy.
        Home-based physiotherapy can make that process more comfortable and more effective.
      </p>

      <h2 className="mt-8 mb-3 text-2xl font-semibold text-gray-900">
        What stroke rehab focuses on
      </h2>
      <p className="mb-4 leading-relaxed text-gray-700">
        Rehabilitation generally addresses muscle weakness, impaired balance, limited
        coordination, and difficulty with normal daily movements. The goal is to restore
        function in a safe, progressive way.
      </p>

      <h2 className="mt-8 mb-3 text-2xl font-semibold text-gray-900">
        Why home physiotherapy can help
      </h2>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
        <li>Exercises can be adapted to the patient’s actual living space</li>
        <li>Caregivers can learn to assist correctly between sessions</li>
        <li>Progress can be monitored in a familiar and less stressful setting</li>
      </ul>

      <h2 className="mt-8 mb-3 text-2xl font-semibold text-gray-900">
        Recovery often includes
      </h2>
      <p className="mb-4 leading-relaxed text-gray-700">
        Balance training, strength work, mobility drills, posture correction, and confidence
        building are commonly part of the plan. Every program is customized according to the
        patient’s condition and recovery stage.
      </p>

      <h2 className="mt-8 mb-3 text-2xl font-semibold text-gray-900">
        A steady plan creates better outcomes
      </h2>
      <p className="mb-6 leading-relaxed text-gray-700">
        Recovery after stroke often improves most when therapy is regular, realistic, and
        supported by family members. Consistency matters more than intensity in the early phase.
      </p>

      <BookingCTA
        heading="Book Stroke Recovery Support in Chennai"
        subheading="Get a guided, home-based rehabilitation plan focused on strength, balance, and daily confidence."
        city="Chennai"
        service="stroke-recovery"
      />
    </article>
  )
}
