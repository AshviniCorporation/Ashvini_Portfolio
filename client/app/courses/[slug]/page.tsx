import Image from "next/image";
import { notFound } from "next/navigation";

import { coursesData } from "../data";
import { montserrat, outfit } from "../../fonts/font";

// 1. Update the type definition
type CourseDetailPageProps = {
  params: Promise<{ slug: string }>;
};

// 2. Make the component async
export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  // 3. Await the params
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  const course = coursesData.find((item) => item.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <section className="bg-white pt-28 pb-24 sm:pt-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-4xl relative overflow-hidden rounded-3xl border border-slate-100 bg-slate-900 text-white">
          <div className="relative z-10 flex flex-col gap-6 p-10 sm:p-14">
            <p
              className={`${outfit.className} text-xs font-semibold uppercase tracking-[0.3em] text-slate-300`}
            >
              {course.duration} · {course.price}
            </p>
            <h1
              className={`${montserrat.className} text-4xl font-semibold leading-tight sm:text-5xl`}
            >
              {course.title}
            </h1>
            <p className={`${outfit.className} max-w-3xl text-lg text-slate-200`}>
              {course.description}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button className={`${outfit.className} rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100`}>
                Enroll now
              </button>
              <span className={`${outfit.className} text-sm text-slate-300`}>
                Cohort seats update weekly · Secure your spot
              </span>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.25),_transparent_55%)]" />
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-10">
            <div>
              <h2 className={`${montserrat.className} text-2xl font-semibold text-slate-900`}>
                Syllabus overview
              </h2>
              <p className={`${outfit.className} mt-2 text-slate-500`}>
                Week-by-week breakdown designed to compound practical skill sets.
              </p>
            </div>

            <ol className="space-y-6">
              {course.syllabus.map((entry) => (
                <li
                  key={entry.week}
                  className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_30px_70px_-65px_rgba(15,23,42,0.8)]"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <span
                      className={`${outfit.className} text-xs font-semibold uppercase tracking-[0.3em] text-slate-400`}
                    >
                      Week {entry.week}
                    </span>
                    <p className={`${montserrat.className} text-lg font-semibold text-slate-900`}>
                      {entry.topic}
                    </p>
                  </div>
                  <p className={`${outfit.className} mt-3 text-sm text-slate-500`}>
                    {entry.details}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <aside className="space-y-8 rounded-3xl border border-slate-100 bg-slate-50 p-8">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4 h-28 w-28 overflow-hidden rounded-3xl">
                <Image
                  fill
                  sizes="112px"
                  className="object-cover"
                  src={course.mentor.image}
                  alt={course.mentor.name}
                />
              </div>
              <div className="space-y-1">
                <p className={`${montserrat.className} text-xl font-semibold text-slate-900`}>
                  {course.mentor.name}
                </p>
                <p className={`${outfit.className} text-sm text-slate-500`}>
                  Lead mentor
                </p>
              </div>
              <p className={`${outfit.className} mt-4 text-sm text-slate-600`}>
                {course.mentor.bio}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6">
              <p className={`${montserrat.className} text-lg font-semibold text-slate-900`}>
                What you get
              </p>
              <ul className={`${outfit.className} mt-4 space-y-2 text-sm text-slate-600`}>
                <li>• Weekly live mentor guidance</li>
                <li>• Curated resources and templates</li>
                <li>• Real-world, portfolio-worthy projects</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}