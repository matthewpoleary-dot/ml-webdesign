import Link from "next/link";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-20 sm:py-32">
      {/* Logo watermark background */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0 dark:hidden" style={{
          backgroundImage: 'url("/logo-mark.svg")',
          backgroundRepeat: 'repeat',
          backgroundSize: '250px 250px',
          backgroundPosition: 'center',
        }}></div>
        <div className="absolute inset-0 hidden dark:block" style={{
          backgroundImage: 'url("/logo-mark-dark.svg")',
          backgroundRepeat: 'repeat',
          backgroundSize: '250px 250px',
          backgroundPosition: 'center',
        }}></div>
      </div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/60 dark:to-gray-950/60"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200/20 dark:bg-purple-900/10 rounded-full blur-3xl"></div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-6xl">
            {site.name}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 sm:text-xl">
            {site.tagline}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="rounded-2xl bg-gray-900 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-gray-900/20 transition-all hover:bg-gray-800 hover:shadow-xl hover:shadow-gray-900/30 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 dark:focus:ring-white"
            >
              {site.primaryCTA}
            </Link>
            <Link
              href="/work"
              className="rounded-2xl bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-md shadow-gray-900/10 transition-all hover:bg-gray-50 hover:shadow-lg hover:shadow-gray-900/20 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-white"
            >
              {site.secondaryCTA}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

