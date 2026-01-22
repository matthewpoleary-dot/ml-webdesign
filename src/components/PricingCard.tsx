interface PricingCardProps {
  name: string;
  priceRange: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export default function PricingCard({
  name,
  priceRange,
  description,
  features,
  popular = false,
}: PricingCardProps) {
  return (
    <div
      className={`relative rounded-2xl bg-white p-8 shadow-md shadow-gray-900/5 transition-all hover:shadow-xl hover:shadow-gray-900/10 hover:-translate-y-1 dark:bg-gray-800 dark:hover:shadow-gray-900/20 ${
        popular ? "ring-2 ring-gray-900 dark:ring-white" : ""
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-gray-900 px-4 py-1 text-xs font-semibold text-white dark:bg-white dark:text-gray-900">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
        {name}
      </h3>
      <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
        {priceRange}
      </p>
      <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        {description}
      </p>
      <ul className="mt-8 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg
              className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="ml-3 text-sm text-gray-600 dark:text-gray-400">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

