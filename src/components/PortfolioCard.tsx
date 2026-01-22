"use client";

import { useState } from "react";
import { PortfolioItem } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

interface PortfolioCardProps {
  item: PortfolioItem;
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group rounded-2xl bg-white p-8 shadow-md shadow-gray-900/5 transition-all hover:shadow-xl hover:shadow-gray-900/10 hover:-translate-y-1 dark:bg-gray-800 dark:hover:shadow-gray-900/20">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {item.title}
          </h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {item.summary}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="mt-6 space-y-4 animate-in fade-in slide-in-from-top-2">
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
              Description
            </h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {item.description}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
              Highlights
            </h4>
            <ul className="mt-2 space-y-1">
              {item.highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="flex items-start text-sm text-gray-600 dark:text-gray-400"
                >
                  <span className="mr-2 text-gray-400 dark:text-gray-500">•</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 dark:focus:ring-white"
        >
          Visit site
        </a>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-900 transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-white"
          aria-expanded={isExpanded}
          aria-label={isExpanded ? "Collapse case study" : "Expand case study"}
        >
          {isExpanded ? "Show less" : "Case study"}
        </button>
      </div>
    </div>
  );
}

