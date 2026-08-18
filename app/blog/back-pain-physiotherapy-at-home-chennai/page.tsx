// Maps to: app/blog/back-pain-physiotherapy-at-home-chennai/page.tsx
import { Metadata } from "next";
import BookingCTA from "@/components/BookingCTA";

export const metadata: Metadata = {
  title: "Back Pain Physiotherapy at Home in Chennai | Therapy at Home",
  description:
    "Struggling with back pain in Chennai? Get expert physiotherapy at your doorstep — no travel, no waiting rooms. Personalized treatment plans by certified therapists across Chennai.",
  keywords: [
    "back pain physiotherapy Chennai",
    "physiotherapy at home Chennai",
    "home physiotherapist Chennai",
    "lower back pain treatment Chennai",
    "spine physiotherapy Chennai",
  ],
  alternates: {
    canonical: "https://therapyathome.in/blog/back-pain-physiotherapy-at-home-chennai",
  },
  openGraph: {
    title: "Back Pain Physiotherapy at Home in Chennai | Therapy at Home",
    description:
      "Doorstep physiotherapy for back pain relief in Chennai. Certified therapists, personalized care, no travel required.",
    url: "https://therapyathome.in/blog/back-pain-physiotherapy-at-home-chennai",
    type: "article",
  },
};

const faqs = [
  {
    question: "How soon can I get a physiotherapist at home in Chennai?",
    answer:
      "In most Chennai localities we serve, a certified physiotherapist can visit your home within 24 to 48 hours of booking, often the same day depending on availability.",
  },
  {
    question: "Is home physiotherapy as effective as visiting a clinic?",
    answer:
      "Yes. For back pain especially, treating you in your actual living environment lets the therapist correct posture, sitting habits, and movement patterns exactly where the pain occurs — often making it more effective than a generic clinic session.",
  },
  {
    question: "What causes lower back pain in Chennai's working professionals?",
    answer:
      "Long hours at a desk, IT and BPO shift work, commuting on Chennai's traffic-heavy roads, and poor posture on two-wheelers are common contributors, along with muscle weakness and disc-related issues.",
  },
  {
    question: "Do you offer back pain physiotherapy for elderly patients in Chennai?",
    answer:
      "Yes, we have therapists experienced in geriatric care who adapt techniques for age-related conditions like spinal stenosis, osteoporosis, and degenerative disc disease.",
  },
  {
    question: "How many sessions are usually needed for back pain relief?",
    answer:
      "Mild to moderate back pain often improves within 6 to 10 sessions, while chronic or post-injury cases may need a longer personalized plan. Your therapist will assess this during the first visit.",
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
  headline: "Back Pain Physiotherapy at Home in Chennai",
  about: { "@type": "MedicalCondition", name: "Back Pain" },
  audience: { "@type": "MedicalAudience", audienceType: "Patient" },
  publisher: {
    "@type": "MedicalBusiness",
    name: "Therapy at Home",
    url: "https://therapyathome.in",
  },
  areaServed: {
    "@type": "City",
    name: "Chennai",
  },
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
          Back Pain Physiotherapy at Home in Chennai: What You Need to Know
        </h1>
        <p className="text-gray-600 mb-8">
          If back pain is slowing you down, you don't need to sit in Chennai
          traffic to reach a clinic. A qualified physiotherapist can now treat
          you at home — in Adyar, Anna Nagar, Velachery, T. Nagar, and across
          the city.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          Why Back Pain Is So Common in Chennai
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Between long IT office hours, daily commutes on congested roads,
          and sedentary lifestyles, back pain has become one of the most
          common complaints among working adults in Chennai. Add in the
          city's humid climate, which can stiffen muscles and joints, and
          it's no surprise clinics across the city report a steady rise in
          spine-related consultations.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          For elderly residents, degenerative conditions like spinal
          stenosis, spondylosis, and osteoporosis-related pain are common,
          and travelling to a clinic can itself worsen discomfort.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          Why Home Physiotherapy Works Better for Back Pain
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
          <li>
            Your therapist assesses your actual chair, mattress, and daily
            movement patterns — the real causes of most back pain — not a
            generic clinic setup.
          </li>
          <li>
            No painful car or auto rides to a clinic while your back is
            already inflamed.
          </li>
          <li>
            Family members can be shown exactly how to assist with exercises
            and posture correction between sessions.
          </li>
          <li>
            Consistent one-on-one attention, rather than a rushed 15-minute
            clinic slot.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          What a Home Physiotherapy Session Includes
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Your first visit starts with a full assessment of posture,
          movement range, pain triggers, and daily habits. From there, your
          therapist builds a plan combining manual therapy, targeted
          strengthening exercises, posture correction, and — where suitable —
          complementary treatments like portable steam therapy to ease
          muscle stiffness before mobility work.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
          When to See a Physiotherapist for Back Pain
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
          <li>Pain lasting more than a few days despite rest</li>
          <li>Pain that radiates down the leg (possible sciatica)</li>
          <li>Stiffness that limits bending or sitting for long periods</li>
          <li>Recurring pain after long desk hours or travel</li>
          <li>Post-pregnancy or post-surgery back discomfort</li>
        </ul>

        <BookingCTA
          heading="Book a Back Pain Assessment in Chennai"
          subheading="A certified physiotherapist will visit your home for a full assessment and personalized treatment plan."
          city="Chennai"
          service="back-pain"
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

// Blog listing card object — add to your blog index array
export const blogCard = {
  slug: "back-pain-physiotherapy-at-home-chennai",
  title: "Back Pain Physiotherapy at Home in Chennai",
  excerpt:
    "Get expert back pain relief without leaving home. Certified physiotherapists now serving Chennai.",
  category: "Condition-Specific",
  city: "Chennai",
  readTime: "6 min read",
};