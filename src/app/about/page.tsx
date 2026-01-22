import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `About | ${site.name}`,
  description: "Learn about my background, skills, and approach to web design. Based in Dublin, Ireland.",
  openGraph: {
    title: `About | ${site.name}`,
    description: "Learn about my background and approach to web design.",
    type: "website",
  },
};

const skills = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "UX Design",
  "SEO Basics",
  "Performance Optimization",
];

const values = [
  {
    title: "Speed",
    description: "Fast websites keep visitors engaged and help with SEO. I optimize every project for performance.",
  },
  {
    title: "Clarity",
    description: "Clear messaging and intuitive navigation. Your visitors should know exactly what you do and how to contact you.",
  },
  {
    title: "Conversion",
    description: "Every design decision is made with your business goals in mind. More visitors should mean more customers.",
  },
  {
    title: "Honesty",
    description: "No upsells, no jargon. I'll tell you what you need and what you don't. Transparent pricing and communication.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        title="About me"
        subtitle="Building websites that help small businesses grow."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="max-w-none">
              <p className="text-lg leading-8 text-gray-600 dark:text-gray-400">
                I'm a Business & Computer Science student at Trinity College Dublin. 
                I love building practical digital solutions that solve real problems for real businesses.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
                When I'm not coding or studying, you'll find me running around Dublin or exploring 
                new coffee shops. I believe the best websites are simple, fast, and focused on 
                getting results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Skills"
            subtitle="The tools and technologies I use to build great websites."
            className="text-center"
          />
          <div className="mx-auto mt-12 flex max-w-2xl flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-md shadow-gray-900/5 transition-all hover:scale-105 hover:shadow-lg hover:shadow-gray-900/10 dark:bg-gray-800 dark:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="What I value"
            subtitle="The principles that guide my work."
            className="text-center"
          />
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl bg-white p-8 shadow-md shadow-gray-900/5 transition-all hover:shadow-xl hover:shadow-gray-900/10 hover:-translate-y-1 dark:bg-gray-800"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}

