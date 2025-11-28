import React from 'react'
import { testimonialsData } from "@/data";
import { montserrat, outfit } from "../fonts/font";

const TestimonialsPage = () => {
  return (
    <section className="min-h-screen px-6 py-24 bg-white">
      <div className="mx-auto max-w-5xl space-y-12">
        <header className="space-y-4 text-center">
          <p
            className={`${outfit.className} text-xs tracking-[0.4em] uppercase text-gray-500`}
          >
            Testimonials
          </p>
          <h1
            className={`${montserrat.className} text-4xl font-semibold text-gray-900 md:text-5xl`}
          >
            Trust that compounds across boardrooms.
          </h1>
          <p className="mx-auto text-lg text-gray-600 md:w-3/4">
            Operators and founders partner with us for the long haul—here’s what they share when asked why.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonialsData.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-3xl border border-gray-200 bg-neutral-50/60 p-6 shadow-sm ring-1 ring-black/5"
            >
              <p className={`${montserrat.className} text-lg text-gray-900`}>
                “{testimonial.quote}”
              </p>
              <div className="mt-6 flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                    {testimonial.role} &middot; {testimonial.company}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPage;