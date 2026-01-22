import Link from "next/link";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-2xl text-center px-6">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white">404</h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
          Page not found
        </p>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-2xl bg-gray-900 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-gray-900/20 transition-all hover:bg-gray-800 hover:shadow-xl hover:shadow-gray-900/30 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 dark:focus:ring-white"
          >
            Go back home
          </Link>
          <Link
            href="/contact"
            className="rounded-2xl border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-md shadow-gray-900/10 transition-all hover:bg-gray-50 hover:shadow-lg hover:shadow-gray-900/20 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-white"
          >
            Contact me
          </Link>
        </div>
      </div>
    </main>
  );
}

