"use client";

import Link from "next/link";
import Image from "next/image";
import { Code, FileText, Briefcase, MapPin, Calendar, GraduationCap, Quote } from "lucide-react";
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
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full border border-[var(--gold)] opacity-30 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full border border-[var(--gold)] opacity-20" />
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10 mt-6 mb-12">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="block w-6 h-px bg-[var(--gold)]" />
          <span className="text-[var(--gold)] text-xs font-semibold tracking-widest uppercase">Overview</span>
        </div>
        <h1 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight text-white mb-8">
          ABOUT <span className="text-[var(--gold)]">ME</span>
        </h1>

        {/* Bio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center mb-12">
          {/* Column 1: Square Double-Layer Image Frame (5 cols) */}
          <div className="md:col-span-5 relative w-full aspect-square max-w-[360px] mx-auto md:mx-0">
            {/* Outer/Back Offset Frame */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 border-2 border-[var(--gold)]/30 rounded-none -z-10" />
            {/* Inner Image Container */}
            <div className="relative w-full h-full overflow-hidden border border-white/10 bg-white/5 aspect-square">
              <Image
                src="/bg1.png"
                alt="Raphael Portrait"
                width={600}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Column 2: Main Info Summary (7 cols) */}
          <div className="md:col-span-7 space-y-6 text-white/70 leading-relaxed font-light">
            <p className="text-lg sm:text-xl text-white/95 font-normal leading-snug">
              Hello world! I am <span className="text-[var(--gold)] font-bold">Raphael</span>. I drive profitability and empower businesses and individuals to thrive through my strategic guidance and technical expertise.
            </p>
            <p className="text-sm md:text-base text-white/70 leading-relaxed font-light">
              <span className="text-4xl md:text-5xl font-bold font-display text-[var(--gold)] float-left mr-2.5 mt-1 leading-none">M</span>
              y mission is simple - to help my clients stay firmly ahead of the competition and thrive in today&apos;s fast-paced digital world. With a personalized, consultative approach and diverse skillset, I unlock new avenues for growth, streamline operations, and deliver measurable results that drive success.
            </p>
            <div className="pt-4">
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-300 w-fit cursor-pointer"
              >
                <span>DOWNLOAD CV</span>
                <FileText size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <div className="flex flex-col items-center justify-center text-center mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-6 h-px bg-[var(--gold)]" />
              <Code className="text-[var(--gold)]" size={16} />
              <span className="block w-6 h-px bg-[var(--gold)]" />
            </div>
            <h2 className="font-display font-bold text-2xl tracking-tight text-white uppercase">
              Skills &amp; Expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { name: "Website Development", level: 95, widthClass: "w-[95%]" },
              { name: "React & Next.js", level: 90, widthClass: "w-[90%]" },
              { name: "Technical Virtual Assistant", level: 90, widthClass: "w-[90%]" },
              { name: "Workflow Automation", level: 85, widthClass: "w-[85%]" },
              { name: "Project Management", level: 80, widthClass: "w-[80%]" },
              { name: "Laravel App Development", level: 60, widthClass: "w-[60%]" }
            ].map((skill) => (
              <div
                key={skill.name}
                className="bg-white/[0.02] border border-white/5 rounded-lg p-5 md:p-6 hover:border-[var(--gold)]/20 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/90">{skill.name}</span>
                  <span className="text-xs text-[var(--gold)] font-semibold font-mono">{skill.level}%</span>
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className={`h-full bg-[var(--gold)] rounded-full ${skill.widthClass}`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience & Education Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mt-16 pt-16 border-t border-white/5">
          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <h3 className="font-display font-bold text-2xl text-white uppercase">Experience</h3>
              <span className="block w-12 h-px bg-[var(--gold)]" />
            </div>

            <div className="space-y-8">
              {[
                {
                  role: "Lead Developer | Team Lead",
                  company: "Noplin Digital LLC",
                  location: "Lagos",
                  date: "Nov 2022 – present"
                },
                {
                  role: "Senior WordPress Developer",
                  company: "Stuvera Group",
                  location: "London",
                  date: "Nov 2019 – Jan 2022"
                },
                {
                  role: "Business Developer",
                  company: "Kings Uncommon Wisdom Ltd",
                  location: "Lekki Lagos",
                  date: "Aug 2016 – Feb 2020"
                }
              ].map((item, index) => (
                <div key={index} className="border-b border-white/5 pb-6 last:border-b-0 last:pb-0">
                  <h4 className="font-semibold text-white/95 text-base mb-2">{item.role}</h4>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-white/50 font-light">
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="flex items-center gap-1.5">
                        <Briefcase size={12} className="text-[var(--gold)]/70" />
                        {item.company}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={12} className="text-[var(--gold)]/70" />
                        {item.location}
                      </span>
                    </div>
                    <span className="flex items-center gap-1.5 sm:self-end">
                      <Calendar size={12} className="text-[var(--gold)]/70" />
                      {item.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <h3 className="font-display font-bold text-2xl text-white uppercase">Education</h3>
              <span className="block w-12 h-px bg-[var(--gold)]" />
            </div>

            <div className="space-y-8">
              {[
                {
                  degree: "Mckinsey Forward Program",
                  school: "McKinsey & Company",
                  date: "2024"
                },
                {
                  degree: "Bachelor in Computer Science",
                  school: "University of the People",
                  date: "2021"
                },
                {
                  degree: "Diploma in Computer Engineering",
                  school: "Fal Computer Institute",
                  date: "2013"
                }
              ].map((item, index) => (
                <div key={index} className="border-b border-white/5 pb-6 last:border-b-0 last:pb-0">
                  <h4 className="font-semibold text-white/95 text-base mb-2">{item.degree}</h4>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-white/50 font-light">
                    <div className="flex items-center gap-1.5 font-light">
                      <GraduationCap size={12} className="text-[var(--gold)]/70" />
                      {item.school}
                    </div>
                    <span className="flex items-center gap-1.5 sm:self-end">
                      <Calendar size={12} className="text-[var(--gold)]/70" />
                      {item.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-16 pt-16 border-t border-white/5">
          {/* Header Block */}
          <div className="flex flex-col items-center justify-center text-center mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-6 h-px bg-[var(--gold)]" />
              <span className="text-[var(--gold)] text-xs font-semibold tracking-widest uppercase">Feedback</span>
              <span className="block w-6 h-px bg-[var(--gold)]" />
            </div>
            <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight text-white uppercase text-center">
              Real feedback from <span className="text-[var(--gold)]">satisfied clients</span>
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
                  <div className="bg-white/[0.02] border border-white/5 rounded-lg p-8 backdrop-blur-sm relative min-h-[220px] flex flex-col justify-between hover:border-[var(--gold)]/20 transition-all duration-300">
                    <Quote className="text-[var(--gold)]/10 absolute top-6 right-6" size={48} />
                    <p className="text-sm md:text-base text-white/80 italic font-light leading-relaxed mb-8 pr-12 relative z-10">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="border-t border-white/5 pt-4">
                      <span className="block font-semibold text-white text-xs uppercase tracking-wider">
                        {t.author}
                      </span>
                      <span className="block text-[10px] text-[var(--gold)]/70 uppercase tracking-widest mt-0.5 font-light">
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
