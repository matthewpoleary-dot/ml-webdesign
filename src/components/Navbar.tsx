"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: site.urls.home, label: "Home" },
    { href: site.urls.work, label: "Work" },
    { href: site.urls.services, label: "Services" },
    { href: site.urls.about, label: "About" },
    { href: site.urls.contact, label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/80">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:focus:ring-white rounded"
            aria-label="Home"
          >
            <Image
              src="/logo-mark.svg"
              alt="ML Webdesign"
              width={32}
              height={32}
              className="dark:hidden"
              priority
            />
            <Image
              src="/logo-mark-dark.svg"
              alt="ML Webdesign"
              width={32}
              height={32}
              className="hidden dark:block"
              priority
            />
            <span className="hidden sm:block text-xl font-semibold text-gray-900 dark:text-white">
              ML Webdesign
            </span>
          </Link>
          <div className="hidden sm:flex sm:items-center sm:gap-x-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:focus:ring-white rounded-md px-3 py-2",
                    isActive
                      ? "text-gray-900 dark:text-white"
                      : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div className="sm:hidden">
            <Link
              href="/contact"
              className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

