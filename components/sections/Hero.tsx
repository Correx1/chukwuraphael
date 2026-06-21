"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { TypeAnimation } from "react-type-animation";
import { gsap } from "gsap";
import Link from "next/link";
import { User, Briefcase, Layers } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/effect-fade";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);



  useEffect(() => {
    if (!mounted) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.4 });
      const heading = headlineRef.current?.querySelector("h1");
      if (heading) {
        tl.fromTo(
          heading,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        );
      }
      tl.fromTo(subtitleRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.3");
      tl.fromTo(buttonsRef.current, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.3");
    }, containerRef);
    return () => ctx.revert();
  }, [mounted]);

  return (
    <div ref={containerRef} className="hero-h w-full relative overflow-hidden">
      {/* Slideshow BG */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          loop
          speed={1800}
          className="w-full h-full"
        >
          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image
                src="/dp1.png"
                alt="Background slide 1"
                fill
                priority
                className="object-cover object-center slide-bg"
                sizes="100vw"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image
                src="/dp2.png"
                alt="Background slide 2"
                fill
                className="object-cover object-center slide-bg"
                sizes="100vw"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image
                src="/dp3.png"
                alt="Background slide 3"
                fill
                className="object-cover object-center slide-bg"
                sizes="100vw"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Overlays */}
      <div className="hero-overlay absolute inset-0 z-1" />
      <div className="hero-vignette absolute inset-0 z-1" />
      <div className="absolute inset-0 bg-black/60 z-1" />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-8 py-16 sm:px-16 sm:py-24 md:px-24 translate-y-10 sm:translate-y-16">
        {/* Category Line */}
        <div className="flex flex-col items-center gap-2 mb-4">
          <p className="text-white/60 font-bold tracking-widest uppercase" style={{ fontSize: "clamp(0.9rem, 2vw, 1.3rem)" }}>
            I Build
          </p>
          <span className="block w-6 h-[2px] bg-(--gold)" />
        </div>

        {/* Headline */}
        <div ref={headlineRef} className="mb-6 sm:mb-8 max-w-3xl mx-auto">
          <h1 className="text-white font-extrabold tracking-tight leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Digital Systems That Help Businesses Operate Better
          </h1>
        </div>

        {/* Typewriter */}
        <div ref={subtitleRef} className="mb-12 sm:mb-16 min-h-[1.8rem]">
          {mounted && (
            <TypeAnimation
              sequence={[
                "Custom Web Applications",
                3000,
                "Business websites",
                3000,
                "CMS and CRM systems",
                3000,
                "Operational Tools",
                3000,
              ]}
              wrapper="p"
              className="typewriter font-bold"
              speed={40}
              deletionSpeed={65}
              repeat={Infinity}
            />
          )}
        </div>

        {/* Buttons */}
        <div ref={buttonsRef} className="flex flex-col items-center gap-4">
          <Link
            href="/work"
            className="btn-gold flex items-center gap-2 px-8 py-3 text-sm font-semibold tracking-wide transition-colors duration-300 cursor-pointer"
          >
            <Briefcase size={14} />
           <span>Portfolio</span>
          </Link>
          <div className="flex gap-4 justify-center">
            <Link
              href="/services"
              className="btn-outline flex items-center gap-2 px-7 py-3 text-sm font-medium transition-colors duration-300 cursor-pointer"
            >
              <Layers size={14} />
             Services
            </Link>
            <Link
              href="/about"
              className="btn-outline flex items-center gap-2 px-7 py-3 text-sm font-medium transition-colors duration-300 cursor-pointer"
            >
              <User size={14} />
             About 
            </Link>
          </div>
        </div>

        {/* Social Icons Row */}
        <div className="flex gap-6 mt-8 items-center justify-center">
          <Link
            href="https://www.linkedin.com/in/chukwu-raphael-8893a6249"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-white/40 hover:text-(--gold) transition-colors duration-300 cursor-pointer"
          >
            <FaLinkedin size={20} />
          </Link>
          <Link
            href="https://github.com/Correx1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-white/40 hover:text-(--gold) transition-colors duration-300 cursor-pointer"
          >
            <FaGithub size={20} />
          </Link>
          <Link
            href="https://wa.link/n7yp6l"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-white/40 hover:text-(--gold) transition-colors duration-300 cursor-pointer"
          >
            <FaWhatsapp size={20} />
          </Link>
          <Link
            href="/contact"
            aria-label="Contact Page"
            className="text-white/40 hover:text-(--gold) transition-colors duration-300 cursor-pointer"
          >
            <FaEnvelope size={20} />
          </Link>
        </div>
      </div>

    </div>
  );
}
