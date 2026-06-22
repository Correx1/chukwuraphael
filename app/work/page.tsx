"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper as SwiperClass } from "swiper";
import Footer from "@/components/shared/Footer";
import "swiper/css";
import "swiper/css/pagination";

interface MediaItem {
  type: string;
  url: string;
}

function ProjectMediaSlider({
  media,
  title,
  priority,
}: {
  media: MediaItem[];
  title: string;
  priority: boolean;
}) {
  const swiperRef = useRef<SwiperClass | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleSlideChange = (swiper: SwiperClass) => {
    const activeIndex = swiper.realIndex;
    const currentMedia = media[activeIndex];

    // Reset all other videos
    videoRefs.current.forEach((video, vIdx) => {
      if (video && vIdx !== activeIndex) {
        video.pause();
        video.currentTime = 0;
      }
    });

    if (currentMedia.type === "video") {
      swiper.autoplay.stop();
      const activeVideo = videoRefs.current[activeIndex];
      if (activeVideo) {
        activeVideo.currentTime = 0;
        activeVideo.play().catch((err) => {
          console.log("Video playback interrupted or blocked:", err);
          // If video fails to autoplay, slide to next after a delay
          setTimeout(() => {
            swiper.slideNext();
          }, 6000);
        });
      }
    } else {
      swiper.autoplay.start();
    }
  };

  const handleVideoEnded = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 6000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop={true}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
        // Initial slide check
        if (media[0].type === "video") {
          swiper.autoplay.stop();
        }
      }}
      onSlideChange={handleSlideChange}
      className="w-full h-full testimonials-swiper"
    >
      {media.map((med, mIdx) => (
        <SwiperSlide key={mIdx} className="w-full h-full relative overflow-hidden bg-black/20">
          {med.type === "video" ? (
            <video
              ref={(el) => {
                videoRefs.current[mIdx] = el;
              }}
              src={med.url}
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnded}
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <div className="relative w-full h-full">
              <Image
                src={med.url}
                alt={`${title} slide`}
                fill
                className="object-cover object-top rounded-lg"
                priority={priority}
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default function WorkPage() {
  const projects = [
    {
      category: "E-commerce Web Application",
      title: "Clautechzs",
      summary: " A mobile-responsive e-commerce platform with payments, Headless CMS, real time AI powered admin dashboard, sales and inventory management, rental and sales features, Offline POS features, and automated email notifications.",
      bullets: [
        "Payment gateways integration.",
        "Real-time AI-powered admin dashboard for sales analytics and inventory tracking.",
        "Offline POS mode with automatic data sync on reconnection.",
        "Dual-mode rental & sales flow with Sanity CMS for dynamic product management.",
        "Automated transactional email notifications for orders",
      ],
      stack: ["Next.js", "App Script", "Sanity CMS", "Payment Integration"],
      link: "https://clautechzs.com",
      media: [
        { type: "image", url: "/portfolio/ecom1.png" },
        { type: "image", url: "/portfolio/ecom2.png" },
        { type: "image", url: "/portfolio/ecom3.png" },
        { type: "image", url: "/portfolio/ecom4.png" },
      ]
    },
    {
      category: "Client Portal & Project Management Platform",
      title: "Custom Agency CRM",
      summary: "An all-in-one collaborative CRM that allows agencies to manage client projects, assign tasks to team, track team tasks,  AI to auto-generate project task breakdowns, overview and summary send real-time notifications, and securely handle chat messaging and billing.",
      bullets: [
        "Dedicated client dashboard that lets clients view project progress, messages, and invoices in one secure place.",
        "AI-powered assistant that auto-generates task breakdowns and structures deliverables",
        "Leads management to capture contact form inquiries, promote submissions to active leads, and track deals.",
        "Flexible billing engine with six different professional invoice templates that dynamically structure financial statements.",
      ],
      stack: ["Next.js", "Supabase", "AI SDK", "Tailwind CSS"],
      link: "https://noplin.com",
      media: [
        { type: "image", url: "/portfolio/noplincms.png" },
        { type: "video", url: "/portfolio/noplincmsvid2.mp4" },
        { type: "image", url: "/portfolio/noplincms3.png" },
        { type: "video", url: "/portfolio/noplincmsvid3.mp4" },
        { type: "image", url: "/portfolio/noplincms5.png" },
        { type: "image", url: "/portfolio/noplincms6.png" },
        { type: "image", url: "/portfolio/noplincms7.png" },
        { type: "image", url: "/portfolio/noplincms8.png" },
      ]
    },
    {
      category: "Certificate Generation & Bulk Issuance Tool",
      title: "Xertified",
      summary: "A simple and powerful web application that lets organizations design professional certificates, import lists of names from spreadsheets, and download them instantly in bulk as high-quality PDFs or images.",
      bullets: [
        "Includes 10 professional prebuilt certificate templates matching academic, corporate, and award themes.",
        "Allows bulk importing of recipient names and details from Excel or CSV files with smart header auto-matching.",
        "Easy-to-use customization studio to adjust colors, border styles, font families, and sizes on the fly.",
        "Enables simple uploads of logo images and signatory signatures with automatic background removal."
      ],
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      link: "https://xertified.vercel.app",
      media: [
        { type: "image", url: "/portfolio/xertify.png" },
        { type: "image", url: "/portfolio/xertify3.png" },
        { type: "image", url: "/portfolio/xertify5.png" },
        { type: "image", url: "/portfolio/xertify6.png" },
      ]
    },

    {
  category: "Business Website",
  title: "Corrconsult",
  summary: "A corporate website and headless CMS for a marine consultancy firm.",
  bullets: [
     "Easy-to-use Content Management System (CMS) to upload, update, and manage completed projects and job portfolios.",
    "Search engine optimized (SEO) with metadata configurations to help the business rank higher on Google search.",
    "Modern styling, professional color accents, and clean typography.",
    "Fully responsive design that looks stunning and works perfectly on all mobile, tablet, and desktop screens.",
  ],
  stack: ["Next.js", "Sanity CMS", "Tailwind CSS", "Framer Motion"],
      link: "https://corrconsult.vercel.app",
   media: [
        { type: "image", url: "/portfolio/corrconsult.png" },
        { type: "image", url: "/portfolio/corrconsult2.png" },
        { type: "image", url: "/portfolio/corrconsult3.png" }
      ]
    },

    {
      category: "Enterprise App",
      title: "School Pilot ERP",
      summary: "An all-in-one ERP system helping institutions manage student records, grading sheets, accounting logs, and teacher rosters.",
      bullets: [
        "Advanced course grading curves and automated GPA calculation.",
        "Automatic PDF invoicing and transactional SMS notifications.",
        "Comprehensive administrator controls with granular staff permissions."
      ],
      stack: ["React", "Tailwind CSS", "Laravel", "MySQL"],
      link: "#",
      media: [
        { type: "video", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
        { type: "image", url: "/bg3.png" },
        { type: "image", url: "/bg1.png" }
      ]
    }
  ];

  return (
    <main className="min-h-screen flex flex-col justify-between px-2 py-8 md:px-3 md:py-12 text-white relative">
      {/* Background ambient light flare */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-(--gold)/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-(--gold)/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 mt-6 mb-12">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="block w-6 h-px bg-(--gold)" />
          <span className="text-(--gold) text-xs font-semibold tracking-widest uppercase">Portfolio</span>
        </div>
        <h1 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight text-white mb-6">
          SELECTED <span className="text-(--gold)">PROJECTS</span>
        </h1>
        <p className="text-white/60 font-light max-w-xl mb-12">
          A selection of recent development projects, applications, and interactive experiences combining design principles with high-performance code.
        </p>

        {/* Alternating Project Sections */}
        <div className="space-y-12 md:space-y-16">
          {projects.map((proj, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={proj.title}
                className={`bg-white/2 border border-white/5 rounded-2xl p-3 sm:p-4 md:p-4 flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-4 md:gap-6 items-center hover:border-(--gold)/20 transition-all duration-500 shadow-2xl`}
              >
                {/* Left/Right Column: Swiper Media (50% width inside card) */}
                <div className="w-full md:w-[50%] aspect-4/3 md:aspect-3/2 relative z-10 rounded-xl overflow-hidden border border-white/10 bg-white/5 shadow-lg">
                  <ProjectMediaSlider
                    media={proj.media}
                    title={proj.title}
                    priority={idx === 0}
                  />
                </div>

                {/* Left/Right Column: Text Content (48% width inside card) */}
                <div className="w-full md:w-[50%] space-y-4 ">
                  <div>
                    {/* Underlined Category */}
                    <span className="text-(--gold) text-xs font-bold uppercase tracking-[0.2em] block w-fit pb-1.5 ">
                      {proj.category}
                    </span>
                    <h2 className="font-display font-extrabold text-2xl md:text-3xl lg:text-4xl text-white tracking-tight leading-tight mt-4">
                      {proj.title}
                    </h2>
                   
                  </div>
                  
                  <p className="text-white/70 text-sm md:text-base font-light leading-relaxed">
                    {proj.summary}
                  </p>

                  <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm text-white/50 font-light leading-relaxed">
                    {proj.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {proj.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[0.7rem] tracking-wider text-white/40 font-mono bg-white/5 px-2.5 py-0.5 rounded border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-6">
                    <Link
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-(--gold) hover:text-(--gold-light) font-semibold text-xs tracking-wider uppercase transition-colors duration-300 group cursor-pointer"
                    >
                      <span>View Project</span>
                      <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                    </Link>
                  </div>
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
