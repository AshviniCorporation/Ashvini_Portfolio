import { montserrat, outfit } from "../fonts/font";

const stats = [
  { label: "Studios", value: "4 regions" },
  { label: "Partners", value: "120+" },
  { label: "Ventures backed", value: "24" },
  { label: "Team", value: "380 builders" },
];

const principles = [
  {
    title: "Integrated pods",
    description:
      "Multidisciplinary squads stay embedded with client leadership so discovery, build, and adoption move together.",
  },
  {
    title: "Responsible scale",
    description:
      "We prioritize privacy, accessibility, and sustainability checklists before rolling a feature across markets.",
  },
  {
    title: "Learning loops",
    description:
      "Research sprints, design reviews, and release analytics live in the same workspace for radical transparency.",
  },
];

const milestones = [
  {
    period: "2014",
    title: "Ashvini Labs",
    detail: "Launched our first venture studio partnering with logistics leaders across South Asia.",
  },
  {
    period: "2017",
    title: "Global delivery",
    detail: "Opened Toronto and Rotterdam studios to offer follow-the-sun engineering coverage.",
  },
  {
    period: "2021",
    title: "Climate practice",
    detail: "Formed a cross-disciplinary team to co-build carbon intelligence platforms with exporters.",
  },
  {
    period: "2024",
    title: "Applied AI guild",
    detail: "Embedded AI researchers within every pod to accelerate copilots, automation, and governance.",
  },
];

const AboutPage = () => {
  return (
    <section className="min-h-screen bg-neutral-50 px-6 py-24">
      <div className="mx-auto max-w-5xl space-y-16">
        <header className="space-y-6">
          <p
            className={`${outfit.className} text-xs uppercase tracking-[0.4em] text-gray-500`}
          >
            About
          </p>
          <h1
            className={`${montserrat.className} text-4xl font-semibold text-gray-900 md:text-5xl`}
          >
            We build enduring systems with teams who care about every release.
          </h1>
          <p className="text-lg text-gray-600 md:w-4/5">
            Ashvini Corporation began as a research-led consultancy and has grown into a collective of product
            strategists, designers, and venture operators. We thrive in regulated industries where thoughtful rollout
            matters as much as velocity.
          </p>
        </header>

        <div className="grid gap-4 rounded-3xl border border-gray-200 bg-white/80 p-8 shadow-sm sm:grid-cols-2 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className={`${montserrat.className} text-2xl text-gray-900`}>{stat.value}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {principles.map((principle) => (
            <article
              key={principle.title}
              className="rounded-3xl border border-gray-200 bg-white/80 p-6 shadow-sm ring-1 ring-black/5"
            >
              <h2 className={`${montserrat.className} text-xl text-gray-900`}>
                {principle.title}
              </h2>
              <p className="mt-3 text-sm text-gray-600">{principle.description}</p>
            </article>
          ))}
        </div>

        <div className="space-y-6">
          <h3 className={`${montserrat.className} text-2xl text-gray-900`}>Milestones</h3>
          <ol className="relative border-l border-gray-200 pl-8">
            {milestones.map((entry) => (
              <li key={entry.period} className="relative mb-10 last:mb-0">
                <span className="absolute -left-[9px] top-2 inline-flex h-4 w-4 rounded-full border-4 border-neutral-50 bg-gray-900 shadow" />
                <p className={`${outfit.className} text-xs uppercase tracking-[0.3em] text-gray-400`}>
                  {entry.period}
                </p>
                <h4 className={`${montserrat.className} text-xl text-gray-900`}>{entry.title}</h4>
                <p className="mt-2 text-sm text-gray-600">{entry.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;