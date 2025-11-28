import React from 'react'
import { eventsData } from "@/data";
import { montserrat, outfit } from "../fonts/font";

const sections = [
  {
    title: "Upcoming",
    events: eventsData.filter((event) => event.status === "upcoming"),
  },
  {
    title: "Past",
    events: eventsData.filter((event) => event.status === "past"),
  },
];

const EventsPage = () => {
  return (
    <section className="min-h-screen px-6 py-24 bg-neutral-50">
      <div className="mx-auto max-w-4xl space-y-12">
        <header className="space-y-4">
          <p
            className={`${outfit.className} text-xs tracking-[0.4em] uppercase text-gray-500`}
          >
            Events
          </p>
          <h1
            className={`${montserrat.className} text-4xl font-semibold text-gray-900 md:text-5xl`}
          >
            Moments where strategy meets community.
          </h1>
          <p className="text-lg text-gray-600">
            We convene policy leaders, operators, and investors to move bold roadmaps forward.
          </p>
        </header>

        <div className="space-y-16">
          {sections.map(({ title, events }) => (
            <div key={title} className="space-y-6">
              <div className="flex flex-col gap-2">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400">{title}</p>
                <h2 className={`${montserrat.className} text-2xl text-gray-900`}>
                  {title === "Upcoming"
                    ? "Engage with our leadership team in person."
                    : "Highlights from the road."}
                </h2>
              </div>

              {events.length === 0 ? (
                <p className="text-sm text-gray-500">No events in this category yet.</p>
              ) : (
                <ol className="relative border-l border-gray-200 pl-8">
                  {events.map((event) => (
                    <li key={event.title} className="relative mb-12 last:mb-0">
                      <span className="absolute -left-[9px] top-2 inline-flex h-4 w-4 rounded-full border-4 border-neutral-50 bg-gray-900 shadow" />
                      <div className="space-y-2 rounded-2xl bg-white/90 p-5 ring-1 ring-black/5">
                        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-gray-400">
                          <span>{event.date}</span>
                          <span>&bull;</span>
                          <span>{event.location}</span>
                        </div>
                        <h3 className={`${montserrat.className} text-xl text-gray-900`}>
                          {event.title}
                        </h3>
                        <p className="text-sm text-gray-600">{event.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsPage;