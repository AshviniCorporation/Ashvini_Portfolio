import React from 'react'
import { venturesData } from "@/data";
import { montserrat, outfit } from "../fonts/font";

const VenturesPage = () => {
  return (
    <section className="min-h-screen px-6 py-24 bg-white">
      <div className="mx-auto max-w-5xl space-y-12">
        <header className="space-y-4">
          <p
            className={`${outfit.className} text-xs tracking-[0.4em] uppercase text-gray-500`}
          >
            Ventures
          </p>
          <h1
            className={`${montserrat.className} text-4xl font-semibold text-gray-900 md:text-5xl`}
          >
            A portfolio crafted around resilient infrastructure.
          </h1>
          <p className="text-lg text-gray-600 md:w-3/4">
            We back founders who build responsible systems—from climate fintech rails to automation
            platforms that unlock new markets.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {venturesData.map((venture) => (
            <article
              key={venture.name}
              className="rounded-3xl border border-gray-200 bg-neutral-50/70 p-6 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                    {venture.stage}
                  </p>
                  <h2 className={`${montserrat.className} text-2xl text-gray-900`}>
                    {venture.name}
                  </h2>
                </div>
                <a
                  href={venture.website}
                  className="text-sm font-medium text-gray-500 underline-offset-4 hover:text-gray-900"
                >
                  Visit
                </a>
              </div>

              <p className="mt-4 text-sm uppercase tracking-[0.2em] text-gray-500">
                {venture.focus}
              </p>
              <p className="mt-3 text-sm text-gray-600">{venture.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VenturesPage;