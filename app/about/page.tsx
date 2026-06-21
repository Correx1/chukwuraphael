"use client";

import Image from "next/image";
import { Code, FileText, Briefcase, MapPin, Calendar, Quote, Globe, Zap, Settings, GitBranch } from "lucide-react";
import { FaReact, FaLaravel } from "react-icons/fa6";
import { SiTailwindcss, SiSanity, SiTypescript } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Footer from "@/components/shared/Footer";
import "swiper/css";
import "swiper/css/pagination";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col justify-between px-6 py-10 md:px-8 md:py-16 text-white relative">
      {/* Background shapes (subtle ambient look) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full border border-(--gold) opacity-30 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full border border-(--gold) opacity-20" />
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10 mt-6 mb-12">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="block w-6 h-px bg-(--gold)" />
          <span className="text-(--gold) text-xs font-semibold tracking-widest uppercase">Overview</span>
        </div>
        <h1 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight text-white mb-8">
          ABOUT <span className="text-(--gold)">ME</span>
        </h1>

        {/* Bio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center mb-12">
          {/* Column 1: Square Double-Layer Image Frame (5 cols) */}
          <div className="md:col-span-5 relative w-full aspect-square max-w-[360px] mx-auto md:mx-0">
            {/* Outer/Back Offset Frame */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 border-2 border-(--gold)/30 rounded-none -z-10" />
            {/* Inner Image Container */}
            <div className="relative w-full h-full overflow-hidden border border-white/10 bg-white/5 aspect-square">
              <Image
                src="/dp2.png"
                alt="Raphael Portrait"
                width={600}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            {/* Floating Name Overlay */}
            <div className="absolute bottom-4 left-4 z-20 bg-black/85 backdrop-blur-md border border-(--gold)/40 px-3 py-1.5 text-(--gold) font-display text-[10px] font-bold tracking-[0.25em] uppercase">
              C Raphael
            </div>
          </div>

          {/* Column 2: Main Info Summary (7 cols) */}
          <div className="md:col-span-7 space-y-6 text-white/70 leading-relaxed font-light">
 

<p className="text-sm md:text-base text-white/70 leading-relaxed font-light">
  <span className="text-4xl md:text-5xl font-bold font-display text-(--gold)
  float-left mr-2.5 mt-1 leading-none">M</span>y work spans a wide range of solutions,
              including corporate websites, e-commerce platforms,
              content management systems, customer portals,
              administration dashboards, booking systems,
              and custom business applications.  

<br/><br/>

              Beyond development, I help businesses simplify
              complex workflows by connecting systems,
              automating repetitive tasks, improving data management,
              and creating digital processes that save time and increase
              productivity. 

<br/><br/>
 my goal is simple: to help businesses, organizations,
              and growing brands strengthen their digital
              infrastructure, improve efficiency, enhance
              user experiences, and build technology that
              remains reliable as their needs evolve.

</p>

            <div className="pt-4">
              <a
                href="/works"
                className="btn-gold flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-300 w-fit cursor-pointer"
              >
                <span>My projects</span>
                <FileText size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <div className="flex flex-col items-center justify-center text-center mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-6 h-px bg-(--gold)" />
              <Code className="text-(--gold)" size={16} />
              <span className="block w-6 h-px bg-(--gold)" />
            </div>
            <h2 className="font-display font-bold text-2xl tracking-tight text-white uppercase">
              Skills &amp; Expertise
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-5 md:gap-x-6 md:gap-y-6">
            {[
              {
                name: "Web Application Development",
                icon: Globe
              },
            
              {
                name: "React & NextJs",
                icon: FaReact
              },
              {
                name: "Laravel & PHP Development",
                icon: FaLaravel
              },
              {
                name: "Tailwind CSS",
                icon: SiTailwindcss
              },
              {
                name: "TypeScript",
                icon: SiTypescript
              },
              {
                name: "Headless CMS",
                icon: SiSanity
              },
              
                {
                name: "Git & Version Control",
                icon: GitBranch
              },
              {
                name: "Technical Virtual Assistant",
                icon: Settings
              },
              {
                name: "Workflow Automation",
                icon: Zap
              }
            ].map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 transition-colors duration-300 hover:text-(--gold) last:col-span-2 last:justify-self-center sm:last:col-span-1 sm:last:justify-self-start"
                >
                  <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-(--gold)/10 border border-(--gold)/20 text-(--gold) shrink-0">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-display text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/90 leading-tight">
                    {skill.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-16 pt-16 border-t border-white/5">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="block w-12 h-px bg-(--gold)" />
            <h3 className="font-display font-bold text-2xl text-white uppercase text-center">Experience</h3>
            <span className="block w-12 h-px bg-(--gold)" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {[
              {
                role: "Frontend Developer | Project Manager",
                company: "Noplin Digital LLC",
                location: "Lagos",
                date: "Dec 2024 – present",
                accomplishments: [
                  "Developed and deployed several custom Next.js websites, client portals, and CRM dashboards.",
                  "Built and refined the frontend interfaces of a web-based school management platform.",
                  "Managed project timelines, tracked deliverable status, and coordinated schedules for leadership.",
                  "Integrated system automations that connect customer inquiries directly to CRM pipelines."
                ]
              },
              {
                role: "Technical Lead",
                company: "Clautechzs Services Ltd",
                location: "Nigeria",
                date: "Nov 2023 – present",
                accomplishments: [
                  "Designed and built a mobile-responsive e-commerce platform with secure payment integrations.",
                  "Created a custom Content Management System (CMS) for dynamic product listing and sales.",
                  "Oversee all remote technical operations, deployment configs, and platform databases.",
                  "Monitor website health, implement security updates, and quickly resolve system issues."
                ]
              }
            ].map((item, index) => (
              <div key={index} className="border-b border-white/5 md:border-b-0 pb-6 md:pb-0">
                <h4 className="font-bold text-white/95 text-lg sm:text-xl mb-1">{item.role}</h4>
                
                {/* Company & Date Meta */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-white/50 font-light mb-3">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="flex items-center gap-1.5">
                      <Briefcase size={13} className="text-(--gold)/70" />
                      {item.company}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-(--gold)/70" />
                      {item.location}
                    </span>
                  </div>
                  <span className="flex items-center gap-1.5 sm:self-end">
                    <Calendar size={13} className="text-(--gold)/70" />
                    {item.date}
                  </span>
                </div>

                {/* Bullet Accomplishments */}
                <ul className="space-y-2 list-disc pl-4 text-sm text-white/70 font-light leading-relaxed">
                  {item.accomplishments.map((acc, aIdx) => (
                    <li key={aIdx}>{acc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics Section */}
       

        {/* Testimonials Section */}
        <div className="mt-16 pt-16 border-t border-white/5">
          {/* Header Block */}
          <div className="flex flex-col items-center justify-center text-center mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-6 h-px bg-(--gold)" />
              <span className="text-(--gold) text-xs font-semibold tracking-widest uppercase">Feedback</span>
              <span className="block w-6 h-px bg-(--gold)" />
            </div>
            <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight text-white uppercase text-center">
              Real feedback from <span className="text-(--gold)">satisfied clients</span>
            </h2>
          </div>

          {/* Swiper Slider Block */}
          <div className="max-w-2xl mx-auto w-full">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop={true}
              className="w-full testimonials-swiper"
            >
              {[
                {
                  quote: "Raphael is an absolute lifesaver. Not only did he streamline our client onboarding workflows using Zapier, but he also rebuilt our portal dashboard in React. His versatility is unmatched.",
                  author: "Sarah Jenkins",
                  role: "Founder",
                  company: "Nexus Growth Partners"
                },
                {
                  quote: "A brilliant developer with an eye for detail. Raphael took our complex Figma layouts and translated them into clean, high-performance Tailwind code with smooth GSAP animations.",
                  author: "Marcus Chen",
                  role: "CTO",
                  company: "Aether Interactive"
                },
                {
                  quote: "We hired Raphael to manage our calendars and coordinate project deliverables. He went above and beyond, automating our data reporting systems and saving our team over 10 hours a week.",
                  author: "Elena Rostova",
                  role: "Operations Director",
                  company: "Zenith Solutions"
                }
              ].map((t, i) => (
                <SwiperSlide key={i} className="pb-10">
                  <div className="bg-white/2 border border-white/5 rounded-lg p-8 backdrop-blur-sm relative min-h-[220px] flex flex-col justify-between hover:border-(--gold)/20 transition-all duration-300">
                    <Quote className="text-(--gold)/10 absolute top-6 right-6" size={48} />
                    <p className="text-sm md:text-base text-white/80 italic font-light leading-relaxed mb-8 pr-12 relative z-10">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="border-t border-white/5 pt-4">
                      <span className="block font-semibold text-white text-xs uppercase tracking-wider">
                        {t.author}
                      </span>
                      <span className="block text-[10px] text-(--gold)/70 uppercase tracking-widest mt-0.5 font-light">
                        {t.role} — {t.company}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
