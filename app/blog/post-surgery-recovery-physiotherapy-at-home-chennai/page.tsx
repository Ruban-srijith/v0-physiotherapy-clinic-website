import type { Metadata } from "next";
import BookingCTA from "@/components/BookingCTA";

export const metadata: Metadata = {
  title: "Post-Surgery Recovery Physiotherapy at Home in Chennai | Therapy at Home",
  description:
    "Recover safely after surgery with guided home physiotherapy in Chennai. Improve strength, mobility, and confidence without commuting to a clinic.",
  alternates: {
    canonical: "https://therapyathome.in/blog/post-surgery-recovery-physiotherapy-at-home-chennai",
  },
};

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 text-gray-800">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">
        Chennai · Recovery Care
      </p>
      <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
        Post-Surgery Recovery Physiotherapy at Home in Chennai
      </h1>
      <p className="mb-6 text-lg text-gray-600">
        Recovery after surgery is not just about rest. It is about rebuilding strength,
        mobility, and confidence in a safe, structured way.
      </p>

      <h2 className="mt-8 mb-3 text-2xl font-semibold text-gray-900">
        Why post-surgery rehab matters
      </h2>
      <p className="mb-4 leading-relaxed text-gray-700">
        Without guided movement, tissues can stiffen, joints may become limited, and
        recovery often takes longer. A physiotherapist helps you return to normal movement
        gradually and safely.
      </p>

      <h2 className="mt-8 mb-3 text-2xl font-semibold text-gray-900">
        Common recovery goals
      </h2>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
        <li>Improve joint mobility and range of motion</li>
        <li>Reduce swelling and stiffness</li>
        <li>Build strength without overloading the surgical area</li>
        <li>Return to daily tasks with more confidence</li>
      </ul>

      <h2 className="mt-8 mb-3 text-2xl font-semibold text-gray-900">
        Benefits of home-based rehab
      </h2>
      <p className="mb-4 leading-relaxed text-gray-700">
        Home sessions are especially useful when movement is limited after surgery. Your
        therapist can work around your actual routine, adjust exercises to your comfort,
        and monitor healing in a more relaxed setting.
      </p>

      <h2 className="mt-8 mb-3 text-2xl font-semibold text-gray-900">
        Start early and recover with structure
      </h2>
      <p className="mb-6 leading-relaxed text-gray-700">
        Early rehabilitation can reduce pain, improve blood flow, and support better scar
        tissue healing. The goal is not rushed training, but gradual, steady progress.
      </p>

      <BookingCTA
        heading="Book Post-Surgery Recovery Support in Chennai"
        subheading="Call us for a guided recovery plan that helps you rebuild strength and movement safely at home."
        city="Chennai"
        service="post-surgery"
      />
    </article>
  )
}
