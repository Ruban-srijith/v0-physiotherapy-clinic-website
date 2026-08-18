// Maps to: app/blog/knee-pain-physiotherapy-at-home-chennai/page.tsx
import { Metadata } from "next";
import BookingCTA from "@/components/BookingCTA";

export const metadata: Metadata = {
  title: "Knee Pain & Knee Replacement Recovery Physiotherapy at Home Chennai | Therapy at Home",
  description:
    "Home-based physiotherapy for knee pain, arthritis, and post-knee-replacement recovery in Chennai. Certified therapists guide you from walker to independent walking, safely at home.",
  keywords: [
    "knee pain physiotherapy Chennai",
    "knee replacement recovery Chennai",
    "post surgery physiotherapy Chennai",
    "home physiotherapist for knee pain Chennai",
    "arthritis knee pain treatment Chennai",
  ],
  alternates: {
    canonical: "https://therapyathome.in/blog/knee-pain-physiotherapy-at-home-chennai",
  },
  openGraph: {
    title: "Knee Pain & Knee Replacement Recovery Physiotherapy at Home Chennai",
    description:
      "From walker to independent walking — structured knee recovery physiotherapy at home in Chennai.",
    url: "https://therapyathome.in/blog/knee-pain-physiotherapy-at-home-chennai",
    type: "article",
  },
};

const faqs = [
  {
    question: "How soon after knee replacement surgery should physiotherapy start in Chennai?",
    answer:
      "Most surgeons recommend starting gentle mobilization within 24 to 48 hours of surgery, and structured physiotherapy at home once you're discharged, typically within the first week.",
  },
  {
    question: "Can physiotherapy help avoid knee replacement surgery?",
    answer:
      "In many early-to-moderate arthritis cases, a structured strengthening and mobility program can significantly reduce pain and delay or sometimes avoid the need for surgery. Your therapist will assess whether conservative treatment is appropriate.",
  },
  {
    question: "How long does full recovery after knee replacement take?",
    answer:
      "Most patients regain independent walking within 6 to 12 weeks with consistent physiotherapy, though full strength and confidence can take 3 to 6 months depending on age and pre-surgery fitness.",
  },
  {
    question: "Do you provide equipment like walkers or exercise bands during home sessions?",
    answer:
      "Our therapists guide you on the right equipment for each recovery stage and can recommend where to source walkers, canes, or resistance bands if you don't already have them.",
  },
  {
    question: "Is home physiotherapy safe for elderly patients recovering from knee surgery?",
    answer:
      "Yes — home-based recovery is often safer for elderly patients since it avoids risky travel on uneven surfaces and stairs immediately after surgery, while still delivering hospital-grade rehabilitation exercises.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  headline: "Knee Pain and Knee Replacement Recovery Physiotherapy at Home in Chennai",
  about: { "@type": "MedicalCondition", name: "Knee Osteoarthritis" },
  audience: { "@type": "MedicalAudience", audienceType: "Patient" },
  publisher: {
    "@type": "MedicalBusiness",
    name: "Therapy at Home",
    url: "https://therapyathome.in",
  },
  areaServed: { "@type": "City", name: "Chennai" },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-sm font-semibold text-blue-700 mb-2 uppercase tracking-wide">
          Chennai · Home Physiotherapy
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Knee Pain & Knee Replacement Recovery: Physiotherapy at Home in Chennai
        </h1>
        <p className="text-gray-600 mb-8">
          Whether it's arthritis-related knee pain or recovery after a knee
          replacement, structured physiotherapy at home helps Chennai
          patients regain movement safely — from walker, to stick, to walking
          independently again.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          Why Knee Pain Needs a Structured Recovery Plan
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Knee pain — whether from osteoarthritis, injury, or post-surgical
          recovery — rarely improves with rest alone. Muscles around the
          joint weaken quickly when movement is avoided, which can actually
          worsen long-term mobility. A physiotherapist builds a progressive
          plan that restores strength without risking re-injury.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          The Recovery Journey: Walker to Independent Walking
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Most post-surgery patients follow a predictable progression with
          the right guidance:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
          <li>
            <strong>Week 1–2:</strong> Gentle range-of-motion exercises,
            swelling management, and walker-assisted mobility at home.
          </li>
          <li>
            <strong>Week 3–6:</strong> Progressive strengthening, balance
            training, and transition to a walking stick.
          </li>
          <li>
            <strong>Week 6–12:</strong> Independent walking, stair practice,
            and return to daily activities.
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          Having a therapist physically present at each stage in your own
          home — rather than commuting to a clinic on a healing knee — makes
          this progression faster and safer.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          Why Chennai Patients Choose Home-Based Knee Rehab
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
          <li>No risky travel on a fresh surgical knee</li>
          <li>Therapist adapts exercises to your actual home layout, including stairs</li>
          <li>Family caregivers learn correct techniques for daily assistance</li>
          <li>Continuity — the same therapist tracks your progress every session</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          When to Start Physiotherapy for Knee Pain
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
          <li>Persistent knee pain during walking or climbing stairs</li>
          <li>Swelling or stiffness that limits daily activity</li>
          <li>Scheduled or recent knee replacement surgery</li>
          <li>Difficulty getting up from a chair or squatting</li>
        </ul>

        <BookingCTA
          heading="Book Knee Recovery Physiotherapy in Chennai"
          subheading="Get a personalized recovery plan, from your first assessment to independent walking."
          city="Chennai"
          service="knee-recovery"
        />

        <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
          Frequently Asked Questions
        </h2>
        <div className="space-y-5">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {faq.question}
              </h3>
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </article>
    </>
  );
}

export const blogCard = {
  slug: "knee-pain-physiotherapy-at-home-chennai",
  title: "Knee Pain & Knee Replacement Recovery at Home in Chennai",
  excerpt:
    "From walker to independent walking — structured knee recovery physiotherapy at home in Chennai.",
  category: "Condition-Specific",
  city: "Chennai",
  readTime: "7 min read",
};