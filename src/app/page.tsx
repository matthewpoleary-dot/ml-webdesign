import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import PortfolioCard from "@/components/PortfolioCard";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import { portfolioItems } from "@/lib/portfolio";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} | ${site.tagline}`,
  description: site.tagline,
  openGraph: {
    title: site.name,
    description: site.tagline,
    type: "website",
  },
};

const services = [
  {
    title: "Design",
    description: "Clean, modern interfaces that your customers will love. Mobile-first and conversion-focused.",
  },
  {
    title: "Build",
    description: "Fast, reliable websites built with Next.js. SEO-friendly and optimized for performance.",
  },
  {
    title: "Improve",
    description: "Turn your existing site into a lead-generating machine. Better UX, faster speeds, more conversions.",
  },
];

const faqItems = [
  {
    question: "How long does a project take?",
    answer: "Most projects take 2-4 weeks from start to finish. This depends on the scope and how quickly we can gather content and feedback.",
  },
  {
    question: "Do you work with small businesses?",
    answer: "Absolutely! I specialize in helping small businesses get online with professional, affordable websites that actually convert visitors into customers.",
  },
  {
    question: "What if I need changes after launch?",
    answer: "I offer ongoing support packages, or we can handle updates on an hourly basis. We'll discuss what works best for your needs.",
  },
  {
    question: "Can you help with SEO?",
    answer: "Yes! Every site I build includes basic SEO setup (meta tags, sitemaps, fast loading). I can also help with content optimization and local SEO for Dublin businesses.",
  },
];

export default function Home() {
  return (
    <main>
      <Hero />
      
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="What I do"
            subtitle="I help small businesses get online with websites that actually work."
            className="text-center"
          />
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white p-8 shadow-md shadow-gray-900/5 transition-all hover:shadow-xl hover:shadow-gray-900/10 hover:-translate-y-1 dark:bg-gray-800 dark:hover:shadow-gray-900/20"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Featured work"
            subtitle="Here are a few recent projects I'm proud of."
            className="text-center"
          />
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {portfolioItems.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <FAQ items={faqItems} />
      <CTA />
    </main>
  );
}
