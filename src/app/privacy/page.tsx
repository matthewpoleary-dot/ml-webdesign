import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${site.name}`,
  description: `Privacy policy for ${site.name} website.`,
  openGraph: {
    title: `Privacy Policy | ${site.name}`,
    description: `Privacy policy for ${site.name} website.`,
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <main>
      <PageHeader title="Privacy Policy" />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="max-w-none">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>

            <h2 className="mt-8 text-2xl font-bold text-gray-900 dark:text-white">
              Introduction
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              This privacy policy explains how {site.name} ("we", "our", or "us") collects, uses, 
              and protects your personal information when you visit our website.
            </p>

            <h2 className="mt-8 text-2xl font-bold text-gray-900 dark:text-white">
              Information We Collect
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              When you use our contact form, we collect the information you provide, including:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600 dark:text-gray-400">
              <li>Name</li>
              <li>Email address</li>
              <li>Business name (if provided)</li>
              <li>Budget information (if provided)</li>
              <li>Message content</li>
            </ul>

            <h2 className="mt-8 text-2xl font-bold text-gray-900 dark:text-white">
              How We Use Your Information
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              We use the information you provide to:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600 dark:text-gray-400">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you information about our services (only if you've requested it)</li>
              <li>Improve our website and services</li>
            </ul>

            <h2 className="mt-8 text-2xl font-bold text-gray-900 dark:text-white">
              Analytics
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              This website may use analytics tools to understand how visitors interact with our site. 
              This information is collected anonymously and helps us improve the user experience.
            </p>

            <h2 className="mt-8 text-2xl font-bold text-gray-900 dark:text-white">
              Cookies
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              We may use cookies to enhance your browsing experience. You can control cookie settings 
              through your browser preferences.
            </p>

            <h2 className="mt-8 text-2xl font-bold text-gray-900 dark:text-white">
              Data Security
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              We take reasonable measures to protect your personal information. However, no method 
              of transmission over the internet is 100% secure.
            </p>

            <h2 className="mt-8 text-2xl font-bold text-gray-900 dark:text-white">
              Contact Us
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              If you have questions about this privacy policy, please contact us at{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-gray-900 underline transition-colors hover:text-gray-700 dark:text-white dark:hover:text-gray-300"
              >
                {site.email}
              </a>
              .
            </p>

            <p className="mt-8 text-sm text-gray-500 dark:text-gray-500">
              Note: This is a generic privacy policy for a portfolio website. For legal advice, 
              please consult with a qualified attorney.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

