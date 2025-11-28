import Image from "next/image";
import Link from "next/link";

import { coursesData } from "./data";
import { montserrat, outfit } from "../fonts/font";

const CoursesPage = () => (
  <section className="bg-white pt-28 pb-24 sm:pt-32">
    <div className="mx-auto max-w-6xl px-6">
      <header className="mb-16 flex flex-col gap-6 text-slate-900">
        <p
          className={`${outfit.className} inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400`}
        >
          Programs
          <span className="inline-block h-px w-16 bg-slate-300" />
        </p>
        <div className="space-y-5">
          <h1
            className={`${montserrat.className} text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl`}
          >
            Courses built for ambitious builders.
          </h1>
          <p className={`${outfit.className} max-w-3xl text-lg text-slate-500`}>
            A curated set of cohorts combining technical mastery, crafted mentor
            support, and tangible career outcomes. Minimal noise, maximum clarity.
          </p>
        </div>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        {coursesData.map((course) => (
          <Link
            key={course.slug}
            href={`/courses/${course.slug}`}
            className="group flex flex-col rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-[0_20px_70px_-45px_rgba(15,23,42,0.6)] transition-all hover:-translate-y-1 hover:border-slate-200 hover:shadow-[0_35px_120px_-60px_rgba(15,23,42,0.8)]"
          >
            <div className="flex items-center justify-between text-sm uppercase tracking-widest">
              <span className={`${outfit.className} text-slate-500`}>
                {course.duration}
              </span>
              <span className={`${montserrat.className} text-base font-semibold text-slate-900`}>
                {course.price}
              </span>
            </div>

            <h3 className={`${montserrat.className} mt-6 text-2xl font-semibold text-slate-900`}>
              {course.title}
            </h3>
            <p className={`${outfit.className} mt-3 text-base text-slate-500`}>
              {course.description}
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  fill
                  sizes="56px"
                  className="object-cover"
                  alt={course.mentor.name}
                  src={course.mentor.image}
                />
              </div>
              <div className="flex flex-col">
                <span className={`${montserrat.className} text-sm font-semibold text-slate-900`}>
                  {course.mentor.name}
                </span>
                <span className={`${outfit.className} text-sm text-slate-500`}>
                  {course.mentor.bio}
                </span>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
              <div className="space-y-1">
                <p className={`${outfit.className} text-xs font-semibold uppercase tracking-[0.3em] text-slate-400`}>
                  Outline glimpse
                </p>
                <p className={`${outfit.className} text-sm text-slate-500`}>
                  {course.syllabus[0].topic} · Week {course.syllabus[0].week}
                </p>
              </div>
              <span className={`${outfit.className} text-sm font-semibold text-slate-900 transition-colors group-hover:text-slate-600`}>
                View details →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default CoursesPage;
