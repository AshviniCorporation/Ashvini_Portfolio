import { portfolioData } from "@/data";
import { montserrat, outfit } from "../fonts/font";
import { Metadata } from "next";

const uniqueCategories = Array.from(
  new Set(portfolioData.map((project) => project.category))
);

export const metadata: Metadata = {
  title: "Portfolio | Ashvini Corp.",
  description:
    "Explore Ashvini Corp.'s diverse portfolio of case studies across regulated and global industries. Discover how we deliver purposeful systems that scale with your operators and customers.",
}


const PortfolioPage = () => {
  return (
    <section className="min-h-screen px-6 py-24 bg-neutral-50">
      <div className="mx-auto max-w-6xl space-y-12">
        <header className="space-y-5">
          <p
            className={`${outfit.className} text-xs tracking-[0.4em] uppercase text-gray-500`}
          >
            Portfolio
          </p>
          <div className="space-y-4">
            <h1
              className={`${montserrat.className} text-4xl font-semibold text-gray-900 md:text-5xl`}
            >
              Case studies across regulated, global industries.
            </h1>
            <p className="text-lg text-gray-600 md:w-3/4">
              We pair research, design, and engineering teams to deliver purposeful systems that scale with
              your operators and customers.
            </p>
          </div>
        </header>

        <div className="flex flex-wrap gap-3">
          {uniqueCategories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-gray-200 bg-white px-4 py-1 text-xs font-medium uppercase tracking-wide text-gray-600"
            >
              {category}
            </span>
          ))}
        </div>

        <div className="columns-1 gap-6 space-y-6 md:columns-2 xl:columns-3">
          {portfolioData.map((project) => (
            <article
              key={project.title}
              className="break-inside-avoid rounded-3xl border border-gray-200 bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className="h-56 w-full rounded-3xl rounded-b-none"
                style={{
                  backgroundImage: `linear-gradient(120deg, rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url(${project.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="space-y-4 px-6 py-6">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-gray-400">
                  <span>{project.category}</span>
                  <span>{project.tags.length} tags</span>
                </div>
                <h2 className={`${montserrat.className} text-2xl text-gray-900`}>
                  {project.title}
                </h2>
                <p className="text-sm text-gray-600">{project.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
