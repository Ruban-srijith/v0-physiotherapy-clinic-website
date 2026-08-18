import Link from 'next/link'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Physiotherapy & Ayurveda Blog | Therapy at Home",
  description:
    "Expert articles on physiotherapy, Ayurvedic treatment, back pain relief, and home healthcare in Coimbatore and Theni. Written by certified therapists at Therapy at Home.",
  alternates: {
    canonical: "https://therapyathome.in/blog",
  },
  openGraph: {
    title: "Physiotherapy & Ayurveda Blog | Therapy at Home",
    description:
      "Expert articles on physiotherapy, Ayurveda, and home healthcare in Coimbatore and Theni.",
    url: "https://therapyathome.in/blog",
    siteName: "Therapy at Home",
    type: "website",
    images: [
      {
        url: "https://therapyathome.in/og-home.jpg",
        width: 1200,
        height: 628,
        alt: "Therapy at Home blog — physiotherapy and Ayurveda articles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@therapyathome",
    title: "Physiotherapy & Ayurveda Blog | Therapy at Home",
    description:
      "Expert articles on physiotherapy, Ayurveda, and home healthcare in Coimbatore and Theni.",
    images: ["https://therapyathome.in/og-home.jpg"],
  },
};

const posts = [
  {
    slug: 'physiotherapy-at-home-coimbatore',
    title: 'Physiotherapy at Home in Coimbatore: What to Expect, Cost & How to Book',
    description:
      'Everything you need to know before booking a home physiotherapy session in Coimbatore — conditions treated, session flow, cost, and areas covered.',
    tag: 'Coimbatore',
    tagColor: 'bg-blue-100 text-blue-700',
    readTime: '6 min read',
  },
  {
    slug: 'back-pain-not-going-away',
    title: "5 Reasons Your Neck and Back Pain Isn't Going Away (And What Actually Helps)",
    description:
      'Most people treat the symptom, not the cause. Here are the five real reasons chronic back and neck pain keeps returning — and what actually fixes it.',
    tag: 'Pain Relief',
    tagColor: 'bg-red-100 text-red-700',
    readTime: '7 min read',
  },
  {
    slug: 'what-is-abhyanga-massage',
    title: 'What is Abhyanga Massage? Benefits, Process and Who Should Try It',
    description:
      'A complete guide to Abhyanga — the traditional Ayurvedic full-body oil massage. What it is, which oils are used, what happens during a session, and who benefits most.',
    tag: 'Ayurveda',
    tagColor: 'bg-green-100 text-green-700',
    readTime: '8 min read',
  },
  {
    slug: 'why-home-physiotherapy-treatment-growing-india',
    title: 'Why Home Physiotherapy Treatment Is Growing in India',
    description:
      'Explore why home physiotherapy is becoming the preferred choice in India for pain relief, recovery, and family-centered care.',
    tag: 'India Growth',
    tagColor: 'bg-orange-100 text-orange-700',
    readTime: '5 min read',
  },
  {
    slug: 'home-physiotherapy-vs-clinic-coimbatore',
    title: 'Home Physiotherapy vs Clinic: Which is Better for Back Pain in Coimbatore?',
    description:
      'An honest head-to-head comparison — attention, cost, convenience, and outcomes. Includes a real cost breakdown for 10 sessions in Coimbatore.',
    tag: 'Guide',
    tagColor: 'bg-purple-100 text-purple-700',
    readTime: '7 min read',
  },
  {
    slug: 'physiotherapy-ayurveda-home-theni',
    title: 'Ayurveda and Physiotherapy at Home in Theni — Now Available',
    description:
      'Certified physiotherapy and Ayurvedic treatment now available at your home across Theni district. No need to travel to Madurai or Coimbatore.',
    tag: 'Theni',
    tagColor: 'bg-yellow-100 text-yellow-700',
    readTime: '6 min read',
  },
  {
    slug: 'back-pain-physiotherapy-at-home-chennai',
    title: 'Back Pain Physiotherapy at Home in Chennai: What You Need to Know',
    description:
      'Get relief from back pain without long clinic waits or travel. Learn how home physiotherapy for Chennai residents works in real life.',
    tag: 'Chennai',
    tagColor: 'bg-blue-100 text-blue-700',
    readTime: '6 min read',
  },
  {
    slug: 'full-body-relaxation-massage-at-home-chennai',
    title: 'Full-Body Relaxation Massage at Home in Chennai: Is It Worth It?',
    description:
      'A complete guide to full-body relaxation massage at home in Chennai — including benefits, what to expect, and when it helps most.',
    tag: 'Massage',
    tagColor: 'bg-pink-100 text-pink-700',
    readTime: '5 min read',
  },
  {
    slug: 'knee-pain-physiotherapy-at-home-chennai',
    title: 'Knee Pain Physiotherapy at Home in Chennai: Relief Without the Clinic',
    description:
      'Simple, practical physiotherapy guidance for knee pain in Chennai — covering causes, treatment goals, and home-based recovery options.',
    tag: 'Knee Care',
    tagColor: 'bg-yellow-100 text-yellow-700',
    readTime: '6 min read',
  },
  {
    slug: 'elderly-care-arthritis-physiotherapy-at-home-chennai',
    title: 'Elderly Care & Arthritis Physiotherapy at Home in Chennai',
    description:
      'Gentle, practical physiotherapy guidance for elderly patients and arthritis sufferers in Chennai — built for safer movement and less joint pain at home.',
    tag: 'Elderly Care',
    tagColor: 'bg-violet-100 text-violet-700',
    readTime: '6 min read',
  },
  {
    slug: 'post-surgery-recovery-physiotherapy-at-home-chennai',
    title: 'Post-Surgery Recovery Physiotherapy at Home in Chennai',
    description:
      'A structured, low-stress recovery plan after surgery — with home-based rehab that helps you regain mobility without the stress of hospital visits.',
    tag: 'Recovery',
    tagColor: 'bg-emerald-100 text-emerald-700',
    readTime: '7 min read',
  },
  {
    slug: 'stroke-recovery-physiotherapy-at-home-chennai',
    title: 'Stroke Recovery Physiotherapy at Home in Chennai',
    description:
      'A practical guide to improving strength, balance, and confidence at home after stroke with tailored physiotherapy support and safe progression.',
    tag: 'Neurology',
    tagColor: 'bg-cyan-100 text-cyan-700',
    readTime: '7 min read',
  },
  {slug: 'knee-pain-not-going-away',  
    title: 'Knee Pain Not Going Away? Here’s What You Need to Know',
    description: 'Simple, physiotherapist-approved exercises to relieve knee pain at home. Takes only 10 minutes a day.',
    tag: 'knee pain guide',
    tagColor: 'bg-yellow-100 text-yellow-700',
    readTime: '6 min read',
  },
  {
  slug: 'frozen-shoulder-home-physiotherapy',
  title: 'Frozen Shoulder Pain? Home Physiotherapy Exercises That Actually Work',
  description: 'Stage-by-stage exercises to safely regain shoulder movement at home. Takes only 10 minutes a day.',
  tag: 'shoulder pain guide',
  tagColor: 'bg-orange-100 text-orange-700',
  readTime: '7 min read',
},
{
  slug: 'sciatica-pain-relief-at-home',
  title: 'Sciatica Pain Relief at Home: Causes, Exercises & When to See a Physio',
  description: 'Physiotherapist-approved nerve-gliding exercises and stretches to relieve sciatica at home. Takes only 10 minutes a day.',
  tag: 'sciatica guide',
  tagColor: 'bg-red-100 text-red-700',
  readTime: '8 min read',
},
{
  slug: 'cervical-spondylosis-desk-jobs',
  title: 'Cervical Spondylosis: Why Desk Jobs Are Wrecking Your Neck (and How to Fix It)',
  description: 'That daily neck stiffness after work isn\'t normal aging — it\'s desk-job neck damage, and it\'s fixable.',
  tag: 'neck pain guide',
  tagColor: 'bg-blue-100 text-blue-700',
  readTime: '7 min read',
},
{
  slug: 'arthritis-elderly-parents-home-care',
  title: 'Arthritis and Joint Pain in Elderly Parents: A Home Care Guide for Families',
  description: 'Gentle, physiotherapist-approved exercises and a home safety checklist for families caring for aging parents with arthritis.',
  tag: 'elderly care guide',
  tagColor: 'bg-purple-100 text-purple-700',
  readTime: '8 min read',
},
{
  slug: 'plantain-leaf-bath-therapy',
  title: 'Plantain Leaf Bath Therapy: Ayurvedic Pain Relief Explained',
  description: 'A traditional Ayurvedic sudation treatment for back, neck, and joint pain — and why it works differently from a spa treatment.',
  tag: 'ayurvedic therapy guide',
  tagColor: 'bg-amber-100 text-amber-700',
  readTime: '7 min read',
},

]

export default function BlogIndex() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-3">Health & Wellness Blog</h1>
        <p className="text-gray-600 text-lg">
          Expert articles on physiotherapy, Ayurvedic treatment, and home healthcare —
          written by the team at{' '}
          <a href="https://therapyathome.in" className="text-blue-600 underline">
            Therapy at Home
          </a>
          , serving Coimbatore and Theni.
        </p>
      </div>

      {/* Featured Post */}
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
          Featured
        </p>
        <Link href={`/blog/${posts[0].slug}`} className="block group">
          <div className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${posts[0].tagColor}`}>
                {posts[0].tag}
              </span>
              <span className="text-xs text-gray-400">{posts[0].readTime}</span>
            </div>
            <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
              {posts[0].title}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              {posts[0].description}
            </p>
            <p className="mt-4 text-blue-600 text-sm font-semibold group-hover:underline">
              Read article →
            </p>
          </div>
        </Link>
      </div>

      {/* Divider */}
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
        All Articles
      </p>

      {/* Post List */}
      <div className="space-y-4">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
            <div className="border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-sm transition-all">
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${post.tagColor}`}>
                  {post.tag}
                </span>
                <span className="text-xs text-gray-400">{post.readTime}</span>
              </div>
              <h2 className="text-base font-bold mb-1 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                {post.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 bg-blue-50 border border-blue-200 rounded-xl p-8 text-center">
        <h2 className="text-xl font-bold mb-2">Ready to book a session?</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Certified physiotherapy and Ayurvedic treatment at your home in
          Coimbatore and Theni. Same-day appointments available.
        </p>
        <a
          href="https://therapyathome.in/#contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Book a Home Session
        </a>
      </div>

    </main>
  )
}