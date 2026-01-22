import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              {site.name}
            </h3>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              {site.tagline}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href={site.urls.work}
                  className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:focus:ring-white rounded"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href={site.urls.services}
                  className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:focus:ring-white rounded"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href={site.urls.about}
                  className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:focus:ring-white rounded"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={site.urls.contact}
                  className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:focus:ring-white rounded"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href={site.urls.privacy}
                  className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:focus:ring-white rounded"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              Connect
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:focus:ring-white rounded"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="mr-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:focus:ring-white rounded"
                  aria-label="Email"
                >
                  <svg
                    className="mr-2 h-4 w-4"
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
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {currentYear} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

