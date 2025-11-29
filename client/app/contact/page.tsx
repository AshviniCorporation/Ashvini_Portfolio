import { Mail, MapPin, Phone } from "lucide-react";
import { montserrat, outfit } from "../fonts/font";
import { Metadata } from "next";

const contactChannels = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@ashvini.corp",
  },
  {
    icon: Phone,
    label: "Direct line",
    value: "+1 (437) 555-0112",
  },
  {
    icon: MapPin,
    label: "Studios",
    value: "Toronto · Singapore · Rotterdam · Kathmandu",
  },
];

export const metadata: Metadata = {
  title: "Contact Us | Ashvini Corp.",
  description:
    "Get in touch with Ashvini Corp. to discuss your next project, partnership, or any inquiries you may have. We're here to help you innovate and grow.",
}

const ContactPage = () => {
  return (
    <section className="min-h-screen bg-white px-6 py-24">
      <div className="mx-auto max-w-5xl space-y-12">
        <header className="space-y-4">
          <p
            className={`${outfit.className} text-xs uppercase tracking-[0.4em] text-gray-500`}
          >
            Contact
          </p>
          <h1
            className={`${montserrat.className} text-4xl font-semibold text-gray-900 md:text-5xl`}
          >
            Brief us on your next release or summit.
          </h1>
          <p className="text-lg text-gray-600 md:w-3/4">
            Tell us where you are in your roadmap. We’ll assemble a pod within 48 hours and
            align on what success looks like before we scope.
          </p>
        </header>

        {/* MAIN GRID */}
        <div className="grid gap-8 rounded-[32px] border border-gray-200 bg-neutral-50/70 p-8 shadow-sm md:grid-cols-[1fr,1.2fr]">
          <div className="space-y-8">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-gray-400">Touchpoints</p>
              <h2 className={`${montserrat.className} mt-2 text-2xl text-gray-900`}>
                Work with our integrated pods.
              </h2>
            </div>

            <div className="space-y-5">
              {contactChannels.map((channel) => (
                <div key={channel.label} className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-gray-900">
                    {(() => {
                      const Icon = channel.icon;
                      return <Icon className="h-5 w-5" />;
                    })()}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                      {channel.label}
                    </p>
                    <p className={`${montserrat.className} text-base text-gray-900`}>
                      {channel.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-dashed border-gray-300 p-4 text-sm text-gray-600">
              <p className="font-semibold text-gray-900">Office hours</p>
              <p>Monday – Friday · 9am to 7pm local studio time</p>
            </div>
          </div>

          {/* FORM */}
          <form className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-gray-600">
                Full name
                <input
                  type="text"
                  placeholder="Priya Raman"
                  className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm focus:border-gray-900 focus:outline-none"
                />
              </label>
              <label className="space-y-2 text-sm text-gray-600">
                Work email
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm focus:border-gray-900 focus:outline-none"
                />
              </label>
            </div>

            <label className="space-y-2 text-sm text-gray-600">
              Company
              <input
                type="text"
                placeholder="Nimbus Logistics"
                className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm focus:border-gray-900 focus:outline-none"
              />
            </label>

            <label className="space-y-2 text-sm text-gray-600">
              How can we help?
              <textarea
                rows={5}
                placeholder="Platform modernization, venture support, event partnerships…"
                className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm focus:border-gray-900 focus:outline-none"
              />
            </label>

            <button
              type="submit"
              className={`${outfit.className} w-full rounded-2xl bg-gray-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-black`}
            >
              Send request
            </button>
          </form>
        </div>

        {/* MAP SECTION */}
        <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-sm">
          <iframe
            title="Our Studios"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.4475489228076!2d-79.383934!3d43.653226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d34bdf3c6f%3A0x1c8b5a1f8c6c4c3!2sToronto!5e0!3m2!1sen!2sca!4v1700000000000"
            className="h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
