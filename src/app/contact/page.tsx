import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact | ${site.name}`,
  description: "Get in touch to discuss your web design project. Book a free 15-minute call or send me a message.",
  openGraph: {
    title: `Contact | ${site.name}`,
    description: "Get in touch to discuss your web design project.",
    type: "website",
  },
};

const nextSteps = [
  {
    step: "1",
    title: "We chat",
    description: "Tell me about your project and goals. I'll ask a few questions to understand what you need.",
  },
  {
    step: "2",
    title: "I propose",
    description: "I'll send you a proposal with timeline, pricing, and what you'll get. No pressure, no sales pitch.",
  },
  {
    step: "3",
    title: "We build",
    description: "Once you're happy, we get started. You'll see regular updates and can provide feedback along the way.",
  },
];

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        title="Get in touch"
        subtitle="Let's chat about your project. I'll get back to you within 24 hours."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Or reach out directly
            </h2>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Connect with us on{" "}
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gray-900 underline transition-colors hover:text-gray-700 dark:text-white dark:hover:text-gray-300"
              >
                LinkedIn
              </a>
              .
            </p>
            <div className="mt-6 space-y-4">
              <a
                href={`mailto:${site.email}`}
                className="block rounded-xl bg-white p-6 shadow-md shadow-gray-900/5 transition-all hover:shadow-lg hover:shadow-gray-900/10 hover:-translate-y-0.5 dark:bg-gray-800"
              >
                <div className="flex items-center">
                  <svg
                    className="h-6 w-6 text-gray-900 dark:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="ml-3 text-base font-medium text-gray-900 dark:text-white">
                    {site.email}
                  </span>
                </div>
              </a>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl bg-white p-6 shadow-md shadow-gray-900/5 transition-all hover:shadow-lg hover:shadow-gray-900/10 hover:-translate-y-0.5 dark:bg-gray-800"
              >
                <div className="flex items-center">
                  <svg
                    className="h-6 w-6 text-gray-900 dark:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="ml-3 text-base font-medium text-gray-900 dark:text-white">
                    LinkedIn
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <SectionHeading
              title="What happens next?"
              subtitle="Here's how we'll work together."
            />
            <div className="mt-12 space-y-8">
              {nextSteps.map((item) => (
                <div
                  key={item.step}
                  className="flex gap-6 rounded-2xl bg-white p-6 shadow-md shadow-gray-900/5 transition-all hover:shadow-lg hover:shadow-gray-900/10 hover:-translate-y-0.5 dark:bg-gray-800"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white dark:bg-white dark:text-gray-900">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

