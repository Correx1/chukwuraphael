"use client";

import { Monitor, Server, Sparkles, CheckSquare, Zap, Users } from "lucide-react";
import Footer from "@/components/shared/Footer";

export default function ServicesPage() {
  const services = [
    {
      icon: Monitor,
      title: "Website Development",
      description: "Building modern, high-performance web applications using React, Next.js, and TypeScript, optimized for fast loading and SEO.",
      features: ["Next.js & React SPA/SSR", "Mobile-First Responsive Layouts", "SEO & Performance Audits"]
    },
    {
      icon: Server,
      title: "Laravel App Development",
      description: "Developing secure, robust, and scalable backend services and MVC web applications using Laravel, MySQL, and RESTful APIs.",
      features: ["Laravel API & MVC Architecture", "Database Schema Optimization", "Secure Admin Portals"]
    },
    {
      icon: Sparkles,
      title: "Creative Motion & Design",
      description: "Crafting immersive user interfaces with sophisticated animations, interactive page transitions, and smooth scrolling experiences using GSAP and Framer Motion.",
      features: ["GSAP ScrollTrigger Scroll Effects", "Lenis & Smooth Scrolling", "Micro-interactions & SVG Animates"]
    },
    {
      icon: CheckSquare,
      title: "Technical Virtual Assistance",
      description: "Providing premium technical and administrative support, managing calendars, organizing documents, and coordinating team operations behind the scenes.",
      features: ["Calendar & Inbox Organization", "Document & Data Structuring", "Project Management System Setup"]
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Integrating cloud tools and APIs to automate repetitive business processes, linking Slack, Gmail, and CRM platforms using Zapier or Make.",
      features: ["Zapier & Make Integrations", "Database Sync & Lead Automations", "Custom Scripting & Webhooks"]
    },
    {
      icon: Users,
      title: "Project Coordination",
      description: "Managing project boards, organizing Kanban boards, scheduling sprints, tracking deliverables, and facilitating seamless team alignment.",
      features: ["Trello, Notion & Asana Setup", "Sprint Deliverables Tracking", "Team Scheduling & Check-ins"]
    }
  ];

  return (
    <main className="min-h-screen flex flex-col justify-between px-6 py-10 md:px-8 md:py-16 text-white relative">
      {/* Background ambient grids */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-size-[40px_40px]" />
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10 mt-6 mb-12">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="block w-6 h-px bg-(--gold)" />
          <span className="text-(--gold) text-xs font-semibold tracking-widest uppercase">Offerings</span>
        </div>
        <h1 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight text-white mb-10">
          MY <span className="text-(--gold)">SERVICES</span>
        </h1>
        <p className="text-white/60 font-light max-w-xl mb-16">
          Tailored digital solutions blending modern development, creative design, and administrative expertise to elevate your workflow and brand.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                className="bg-white/2 border border-white/5 rounded-lg p-6 sm:p-8 flex flex-col justify-between backdrop-blur-md hover:border-(--gold)/20 hover:bg-white/4 transition-all duration-300 group"
              >
                <div>
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-(--gold)/10 border border-(--gold)/25 text-(--gold) mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-4 group-hover:text-(--gold) transition-colors duration-300">
                    {svc.title}
                  </h3>
                  <p className="text-white/60 text-xs font-light leading-relaxed mb-6">
                    {svc.description}
                  </p>
                </div>
                <ul className="space-y-2 border-t border-white/5 pt-6">
                  {svc.features.map((feat) => (
                    <li key={feat} className="text-[10px] text-white/50 flex items-center gap-2">
                      <span className="w-1 h-1 bg-(--gold) rounded-full" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </main>
  );
}
