"use client";

import { Monitor, CheckSquare, Check } from "lucide-react";
import Footer from "@/components/shared/Footer";

export default function ServicesPage() {
  const services = [
    {
      icon: Monitor,
      title: "Website & Web App Development",
      description: "I build fast, secure, and modern websites that turn visitors into customers. Instead of just writing code, I focus on creating digital experiences that load instantly, work perfectly on all devices, and rank well on search engines. I handle the technical details—from checkouts to custom admin portals—so you can focus on running your business.",
      features: [
        "Responsive UI design across all devices",
        "SEO optimization (on-page SEO and performance)",
        "CMS integration (headless CMS and admin dashboards)",
        "Core Web Vitals & speed optimization",
        "Secure payment gateway integrations",
        "Reliable deployment & hosting setups",
        "Ongoing website maintenance & scaling"
      ]
    },
    {
      icon: CheckSquare,
      title: "Virtual Assistant (Tech & Operations Focus)",
      description: "I provide reliable remote support by helping individuals and teams stay organized, meet deadlines, and handle daily digital tasks efficiently. I support operations through structured task execution, documentation, reporting, and online coordination so your business runs smoothly behind the scenes.",
      features: [
        "CRM setup and systems management",
        "Email inbox and document handling",
        "Accurate data entry and record keeping",
        "Consistent task execution and follow-up",
        "Calendar management and scheduling support",
        "Basic website, platform, and content updates",
        "Online research and information gathering"
      ]
    }
  ];

  return (
    <main className="min-h-screen flex flex-col justify-between px-6 py-10 md:px-8 md:py-16 text-white relative">
      {/* Background ambient grids */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-size-[40px_40px]" />
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10 mt-6 mb-1">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="block w-6 h-px bg-(--gold)" />
          <span className="text-(--gold) text-xs font-semibold tracking-widest uppercase">Offerings</span>
        </div>
        <h1 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight text-white mb-16">
          MY <span className="text-(--gold)">SERVICES</span>
        </h1>

        {/* Services Layout */}
        <div className="space-y-12 md:space-y-16 mb-5">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                className="flex flex-col md:flex-row items-start gap-10 md:gap-16 lg:gap-20 py-4"
              >
                {/* Info Column */}
                <div className="w-full md:w-[45%] space-y-5">
                  <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-(--gold)/10 border border-(--gold)/25 text-(--gold) group-hover:scale-110 transition-transform duration-300">
                    <Icon size={26} />
                  </div>
                  <h2 className="font-extrabold text-2xl md:text-3xl text-white tracking-tight">
                    {svc.title}
                  </h2>
                  <p className="text-white/60 text-sm md:text-base font-light leading-relaxed pr-0 md:pr-4">
                    {svc.description}
                  </p>
                </div>

                {/* Features Checklist Column */}
                <div className="w-full md:w-[50%]">
                  <ul className="grid grid-cols-1 gap-3">
                    {svc.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-3.5 text-xs md:text-sm text-white/75 font-light bg-white/2 border border-white/5 rounded-lg p-4 hover:border-(--gold)/20 hover:bg-white/4 transition-all duration-300"
                      >
                        <div className="w-5 h-5 flex items-center justify-center rounded-full bg-(--gold)/10 border border-(--gold)/20 text-(--gold) mt-0.5 shrink-0">
                          <Check size={11} />
                        </div>
                        <span className="leading-tight">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </main>
  );
}
