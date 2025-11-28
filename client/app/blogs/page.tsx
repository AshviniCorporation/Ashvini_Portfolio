import { blogPosts } from "@/data/blogs";
import { montserrat, outfit } from "../fonts/font";

const BlogsPage = () => {
  return (
    <section className="min-h-screen bg-neutral-50 px-6 py-24">
      <div className="mx-auto max-w-5xl space-y-10">
        <header className="space-y-4">
          <p
            className={`${outfit.className} text-xs uppercase tracking-[0.4em] text-gray-500`}
          >
            Journal
          </p>
          <h1
            className={`${montserrat.className} text-4xl font-semibold text-gray-900 md:text-5xl`}
          >
            Notes from the Ashvini studio floor.
          </h1>
          <p className="text-lg text-gray-600 md:w-3/4">
            Dispatches from our product strategists, venture partners, and reliability engineers building for
            regulated industries.
          </p>
        </header>

        <div className="space-y-6">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="rounded-3xl border border-gray-200 bg-white/90 p-6 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.3em] text-gray-400">
                <span>{post.category}</span>
                <span>&bull;</span>
                <span>{post.date}</span>
                <span>&bull;</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className={`${montserrat.className} mt-4 text-2xl text-gray-900`}>{post.title}</h2>
              <p className="mt-3 text-sm text-gray-600">{post.excerpt}</p>
              <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
                <div>
                  <p className="font-semibold text-gray-900">{post.author.name}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-400">{post.author.role}</p>
                </div>
                <button className={`${outfit.className} text-xs font-semibold uppercase tracking-[0.3em] text-gray-900`}>
                  Read →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsPage;