import Link from "next/link";
import { site } from "@/lib/site";

interface CTAProps {
  title?: string;
  description?: string;
  primaryText?: string;
  secondaryText?: string;
  primaryHref?: string;
  secondaryHref?: string;
  className?: string;
}

export default function CTA({
  title = "Ready to get started?",
  description = "Let's chat about your project and see how I can help.",
  primaryText = site.primaryCTA,
  secondaryText = site.secondaryCTA,
  primaryHref = "/contact",
  secondaryHref = "/work",
  className = "",
}: CTAProps) {
  return (
    <section className={`bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 py-16 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            {description}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href={primaryHref}
              className="rounded-2xl bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-lg shadow-white/20 transition-all hover:bg-gray-100 hover:shadow-xl hover:shadow-white/30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              {primaryText}
            </Link>
            <Link
              href={secondaryHref}
              className="rounded-2xl bg-gray-800 px-6 py-3 text-base font-semibold text-white shadow-md shadow-black/20 transition-all hover:bg-gray-700 hover:shadow-lg hover:shadow-black/30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              {secondaryText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

