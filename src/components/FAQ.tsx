"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  className?: string;
}

export default function FAQ({ items, className }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={cn("py-16 sm:py-24", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl">
          <dl className="space-y-6">
            {items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-white p-6 shadow-md shadow-gray-900/5 dark:bg-gray-800"
                >
                  <dt>
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-start justify-between text-left"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                    >
                      <span className="text-base font-semibold text-gray-900 dark:text-white">
                        {item.question}
                      </span>
                      <svg
                        className={cn(
                          "h-5 w-5 flex-shrink-0 text-gray-500 transition-transform duration-200",
                          isOpen && "rotate-180"
                        )}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </dt>
                  {isOpen && (
                    <dd
                      id={`faq-answer-${index}`}
                      className="mt-4 animate-in fade-in slide-in-from-top-2"
                    >
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {item.answer}
                      </p>
                    </dd>
                  )}
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}

