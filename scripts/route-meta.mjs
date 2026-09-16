// Single source of truth for per-route <head> metadata used by
// scripts/prerender.mjs. Keep this in sync with each page's <SEO ... />
// props in src/pages/*.tsx — the build doesn't verify they match.
const SITE_NAME = "Cognexa";
const SITE_URL = "https://www.cognexa.co.in";
const DEFAULT_IMAGE = "/home1.webp";

// For pages whose OG image is a bundled asset (import from src/assets/...)
// rather than a plain /public path, give the source path here so
// prerender.mjs can resolve the real hashed output URL from Vite's manifest.
const ASSET_IMAGES = {
  extracto: "src/assets/extracto/invoice-scan.webp",
  cognexaAgent: "src/assets/home/brand-voice.webp",
};

// Mirrors src/data/faqs.ts's helpFaqs — keep the question/answer text in sync,
// same caveat as everything else in this file.
const HELP_FAQS = [
  {
    question: "What does Cognexa actually do?",
    answer:
      "Cognexa builds AI automation products for businesses: Extracto for invoice data extraction, Vision IQ for camera-based monitoring, Cognexa Agent for real-time voice AI, GateVision for smart number plate recognition, plus analytics and RPA tooling.",
  },
  {
    question: "Do I need new hardware to get started?",
    answer:
      "No. Extracto works with your existing invoice inbox or upload folder, and Vision IQ and GateVision work with the cameras you already have, no new hardware required.",
  },
  {
    question: "How long does it take to go live?",
    answer:
      "Most teams go live in days, not months. There's no manual setup required, point us at your data source and the relevant product starts working immediately.",
  },
  {
    question: "Can these products integrate with our existing systems?",
    answer:
      "Yes. Our products ship with ready-to-use integrations for common accounting, ERP, and procurement systems, and our team can help set up custom integrations where needed.",
  },
  {
    question: "How do I get pricing or a demo?",
    answer:
      "Reach out through the contact form or book a demo directly, and our team will walk you through pricing based on your use case and scale.",
  },
  {
    question: "How can I reach the Cognexa team?",
    answer:
      "Call us at +91 91 7557 6999 or email support@cognexa.co.in, or use the contact form to reach out and we'll get back to you.",
  },
  {
    question: "What should I include when contacting support?",
    answer:
      "A short description of what you were trying to do, what happened instead, and which product it relates to helps us resolve things faster. Screenshots are welcome too.",
  },
  {
    question: "How is my data handled?",
    answer:
      "See our Privacy Policy for full details on what we collect and how it's used. In short: we don't sell your data, and it's only used to respond to inquiries and improve our products.",
  },
];

const faqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HELP_FAQS.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

function softwareApp({ name, path, description }) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description,
    url: `${SITE_URL}${path}`,
    brand: { "@type": "Brand", name: "Cognexa" },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/contacts`,
    },
  };
}

export const routes = [
  {
    path: "/about-us",
    title: "About Us",
    description:
      "Cognexa builds industrial AI, IoT, and automation solutions that go beyond RPA, helping businesses move faster in a fast-changing digital landscape.",
  },
  {
    path: "/solution",
    title: "Solutions by Industry",
    description:
      "IT solutions built for every industry: customer service, BFSI, healthcare, utilities, and retail. See how Cognexa adapts to your industry.",
  },
  {
    path: "/case-study",
    title: "Case Studies",
    description:
      "See how businesses use Cognexa's AI and automation solutions to cut costs, speed up support, and delight customers.",
    image: "/case-hero-og.webp",
  },
  {
    path: "/contacts",
    title: "Contact Us",
    description:
      "Tell us a bit about your business and we'll show you how Cognexa fits in. Book a demo or reach out to start your automation roadmap.",
  },
  {
    path: "/terms",
    title: "Terms and Conditions",
    description:
      "Read the terms and conditions governing your use of Cognexa's website, products, and automation services.",
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy",
    description:
      "How Cognexa collects, uses, stores, and protects your data, and what rights you have over your personal information.",
  },
  {
    path: "/help-topic",
    title: "FAQ & Help",
    description:
      "Find answers to common questions about Cognexa's AI automation products, pricing, integrations, and support.",
    structuredData: faqPage,
  },
  {
    path: "/vision-iq",
    title: "Vision IQ — AI Computer Vision",
    description:
      "Turn existing CCTV cameras into an AI-powered monitoring system. Vision IQ detects safety risks, security threats, and operational issues in real time.",
    image: "/visionhero.webp",
    structuredData: softwareApp({
      name: "Vision IQ",
      path: "/vision-iq",
      description:
        "Turn existing CCTV cameras into an AI-powered monitoring system. Vision IQ detects safety risks, security threats, and operational issues in real time.",
    }),
  },
  {
    path: "/extracto",
    title: "Extracto — AI Invoice Data Extraction",
    description:
      "Cognexa's Extracto reads any invoice, PDF, scan, or email attachment and turns it into clean, structured data your accounting systems can act on instantly.",
    assetImageKey: "extracto",
    structuredData: softwareApp({
      name: "Extracto",
      path: "/extracto",
      description:
        "Cognexa's Extracto reads any invoice, PDF, scan, or email attachment and turns it into clean, structured data your accounting systems can act on instantly.",
    }),
  },
  {
    path: "/gate-vision",
    title: "GateVision — Smart Number Plate Recognition",
    description:
      "Cognexa's GateVision reads vehicle plates in real time, matches them against watchlists, and automates entry, exit, and access decisions.",
    image: "/gatevision-composite.webp",
    structuredData: softwareApp({
      name: "GateVision",
      path: "/gate-vision",
      description:
        "Cognexa's GateVision reads vehicle plates in real time, matches them against watchlists, and automates entry, exit, and access decisions.",
    }),
  },
  {
    path: "/cognexa-agent",
    title: "Cognexa Agent — Real-Time Voice AI",
    description:
      "A real-time voice AI that generates and qualifies leads, arranges meetings, supports customers, and runs interviews, all from one platform.",
    assetImageKey: "cognexaAgent",
    structuredData: softwareApp({
      name: "Cognexa Agent",
      path: "/cognexa-agent",
      description:
        "A real-time voice AI that generates and qualifies leads, arranges meetings, supports customers, and runs interviews, all from one platform.",
    }),
  },
  {
    path: "/careers",
    title: "Careers",
    description:
      "Help us build the future of intelligent automation. We're a small, fast-moving team building AI that businesses put into production.",
  },
];

export { SITE_NAME, SITE_URL, DEFAULT_IMAGE, ASSET_IMAGES };
