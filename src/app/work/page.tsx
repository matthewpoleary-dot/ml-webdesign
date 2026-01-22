import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PortfolioCard from "@/components/PortfolioCard";
import CTA from "@/components/CTA";
import { portfolioItems } from "@/lib/portfolio";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Work | ${site.name}`,
  description: "Browse my portfolio of web design projects. See how I've helped small businesses get more customers online.",
  openGraph: {
    title: `Work | ${site.name}`,
    description: "Browse my portfolio of web design projects.",
    type: "website",
  },
};

export default function WorkPage() {
  return (
    <main>
      <PageHeader
        title="My work"
        subtitle="Here's a selection of projects I've built for clients. Each one is designed to convert visitors into customers."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {portfolioItems.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}

