import { servicesData } from "@/data";
import { montserrat, outfit } from "../fonts/font";

const ServicesPage = () => {
  return (
    <section className="min-h-screen px-6 py-24 bg-white">
      <div className="mx-auto max-w-6xl space-y-12">
        <header className="space-y-4">
          <p
            className={`${outfit.className} text-xs tracking-[0.4em] uppercase text-gray-500`}
          >
            Services
          </p>
          <h1
            className={`${montserrat.className} text-4xl font-semibold text-gray-900 md:text-5xl`}
          >
            Precision-built programs for ambitious teams.
          </h1>
          <p className="text-lg text-gray-600 md:w-3/4">
            We assemble product strategists, designers, and engineers into small pods that
            stay close to your KPIs while orchestrating global delivery.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {servicesData.map((service) => (
            <article
              key={service.title}
              className="group relative rounded-3xl border border-gray-200 bg-white/80 p-6 shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-6 flex items-center justify-between">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: service.accent }}
                >
                  {(() => {
                    const Icon = service.icon;
                    return <Icon className="h-5 w-5 text-gray-900" />;
                  })()}
                </div>
                <span className="text-xs uppercase tracking-[0.3em] text-gray-400">
                  {service.features.length} pts
                </span>
              </div>
              <h2 className={`${montserrat.className} text-2xl text-gray-900`}>
                {service.title}
              </h2>
              <p className="mt-3 text-sm text-gray-600">
                {service.description}
              </p>

              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-gray-900" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;