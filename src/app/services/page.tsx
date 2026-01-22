import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import PricingCard from "@/components/PricingCard";
import CTA from "@/components/CTA";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Services & Pricing | ${site.name}`,
  description: "Transparent pricing for web design services. From €200 for simple landing pages to custom solutions from €900.",
  openGraph: {
    title: `Services & Pricing | ${site.name}`,
    description: "Transparent pricing for web design services. From €200 for simple landing pages to custom solutions from €900.",
    type: "website",
  },
};

const pricingTiers = [
  {
    name: "Starter",
    priceRange: "€200–€500",
    description: "Best for: 1–2 page brochure/landing sites",
    features: [
      "1–2 pages",
      "Mobile-first design",
      "Basic SEO",
      "Fast performance",
      "CTA setup",
      "Deployment",
      "No complex integrations",
    ],
  },
  {
    name: "Business",
    priceRange: "€500–€900",
    description: "Best for: 3–6 page small business sites",
    features: [
      "3–6 pages",
      "Everything in Starter",
      "Improved information architecture",
      "Stronger design polish",
      "Analytics setup",
      "More rounds of revisions",
    ],
    popular: true,
  },
  {
    name: "Custom",
    priceRange: "From €900",
    description: "Best for: advanced features (booking integrations, payments, blog, more complex UI)",
    features: [
      "Advanced features",
      "Booking integrations",
      "Payment systems",
      "Blog functionality",
      "Complex UI/UX",
      "Custom integrations",
      "Pricing after scope call",
    ],
  },
];

const addOns = [
  {
    name: "Copy polish",
    description: "Professional copywriting to improve your messaging and conversions.",
    price: "€200",
  },
  {
    name: "Booking integration",
    description: "Connect your site to Calendly, Acuity, or other booking systems.",
    price: "€150",
  },
  {
    name: "Blog setup",
    description: "Full blog functionality with categories, tags, and RSS feed.",
    price: "€300",
  },
  {
    name: "Performance audit",
    description: "Comprehensive audit of your existing site with actionable recommendations.",
    price: "€250",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        title="Services & Pricing"
        subtitle="Transparent pricing, no surprises. Every project includes fast, mobile-friendly design and basic SEO."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <PricingCard
                key={tier.name}
                name={tier.name}
                priceRange={tier.priceRange}
                description={tier.description}
                features={tier.features}
                popular={tier.popular}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Add-ons"
            subtitle="Enhance your project with these optional services."
            className="text-center"
          />
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-2">
            {addOns.map((addOn) => (
              <div
                key={addOn.name}
                className="rounded-2xl bg-white p-6 shadow-md shadow-gray-900/5 dark:bg-gray-800"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {addOn.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      {addOn.description}
                    </p>
                  </div>
                  <p className="ml-4 text-lg font-bold text-gray-900 dark:text-white">
                    {addOn.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}

