/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { TypeAnimation } from "react-type-animation";
import { gsap } from "gsap";
import Link from "next/link";
import { User, Briefcase, Layers, ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/effect-fade";

const shapeRounded = ["rounded-full", "rounded-none", "rounded-[30%]", "rounded-full", "rounded-none", "rounded-[30%]", "rounded-full"];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const shapesRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [hasPhotos, setHasPhotos] = useState(false);
  const [greeting, setGreeting] = useState("Welcome");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 12)       setGreeting("Good Morning");
    else if (hour >= 12 && hour < 17) setGreeting("Good Afternoon");
    else                              setGreeting("Good Evening");
    setMounted(true);
  }, []);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setHasPhotos(true);
    img.onerror = () => setHasPhotos(false);
    img.src = "/bg1.png";
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.4 });
      const chars = headlineRef.current?.querySelectorAll(".char");
      if (chars?.length) {
        tl.fromTo(
          chars,
          { y: 80, opacity: 0, rotateX: -40 },
          { y: 0, opacity: 1, rotateX: 0, stagger: 0.05, duration: 0.9, ease: "power4.out" }
        );
      }
      tl.fromTo(subtitleRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.3");
      tl.fromTo(buttonsRef.current, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.3");

      shapesRef.current?.querySelectorAll<HTMLElement>(".shape").forEach((el, i) => {
        gsap.to(el, {
          y: () => window.scrollY * (i % 2 === 0 ? -0.18 : -0.28),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, [mounted]);

  const nameChars = "RAPHAEL".split("").map((c, i) => (
    <span key={i} className="char inline-block origin-bottom">
      {c}
    </span>
  ));

  return (
    <div ref={containerRef} className="hero-h w-full relative overflow-hidden">
      {/* Slideshow BG */}
      <div className="absolute inset-0 z-0">
        {hasPhotos ? (
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{ delay: 4500 }}
            loop
            speed={1800}
            className="w-full h-full"
          >
            <SwiperSlide>
              <div className="slide-bg slide-photo-1 w-full h-full" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-bg slide-photo-2 w-full h-full" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-bg slide-photo-3 w-full h-full" />
            </SwiperSlide>
          </Swiper>
        ) : (
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{ delay: 4000 }}
            loop
            speed={2000}
            className="w-full h-full"
          >
            <SwiperSlide>
              <div className="slide-bg slide-grad-1 w-full h-full" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-bg slide-grad-2 w-full h-full" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-bg slide-grad-3 w-full h-full" />
            </SwiperSlide>
          </Swiper>
        )}
      </div>

      {/* Overlays */}
      <div className="hero-overlay absolute inset-0 z-[1]" />
      <div className="hero-vignette absolute inset-0 z-[1]" />
      <div className="absolute inset-0 bg-black/60 z-[1]" />

      {/* Floating shapes */}
      <div ref={shapesRef} className="absolute inset-0 z-[2] pointer-events-none">
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className={`shape shape-${i} absolute border border-[var(--gold)] ${shapeRounded[i]}`} />
        ))}
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} className={`shape dot-${i} absolute w-1 h-1 rounded-full bg-[var(--gold)] opacity-45`} />
        ))}
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-8 py-16 sm:px-16 sm:py-24 md:px-24">
        {/* Greeting label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="block w-8 h-px bg-[var(--gold)]" />
          <span className="text-[var(--gold)] font-medium tracking-[0.2em] uppercase" style={{ fontSize: "clamp(0.75rem, 2vw, 1rem)" }}>
            {greeting} <span className="emoji-wave inline-block">👋</span>
          </span>
          <span className="block w-8 h-px bg-[var(--gold)]" />
        </div>

        {/* I'M line */}
        <p className="text-white/60 font-light tracking-widest uppercase mb-2" style={{ fontSize: "clamp(1.2rem, 3.5vw, 2rem)" }}>
          I&apos;m
        </p>

        {/* Name */}
        <div ref={headlineRef} className="mb-4 sm:mb-6 [perspective:600px]">
          <h1 className="hero-title text-white font-extrabold whitespace-nowrap">{nameChars}</h1>
        </div>

        {/* Typewriter */}
        <div ref={subtitleRef} className="mb-12 sm:mb-16 min-h-[1.8rem]">
          {mounted && (
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "Virtual Assistant",
                2000,
                "Creative Technologist",
                2000,
                "UI/UX Enthusiast",
                2000,
              ]}
              wrapper="p"
              className="typewriter"
              speed={50}
              deletionSpeed={65}
              repeat={Infinity}
            />
          )}
        </div>

        {/* Buttons */}
        <div ref={buttonsRef} className="flex flex-col items-center gap-4">
          <Link
            href="/about"
            className="btn-gold flex items-center gap-2 px-8 py-3 text-sm font-semibold tracking-wide transition-colors duration-300 cursor-pointer"
          >
            <User size={14} />
            About Me
          </Link>
          <div className="flex gap-4 justify-center">
            <Link
              href="/work"
              className="btn-outline flex items-center gap-2 px-7 py-3 text-sm font-medium transition-colors duration-300 cursor-pointer"
            >
              <Briefcase size={14} />
              My Work
            </Link>
            <Link
              href="/services"
              className="btn-outline flex items-center gap-2 px-7 py-3 text-sm font-medium transition-colors duration-300 cursor-pointer"
            >
              <Layers size={14} />
              My Service
            </Link>
          </div>
        </div>

        {/* Social Icons Row */}
        <div className="flex gap-6 mt-8 items-center justify-center">
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-white/40 hover:text-[var(--gold)] transition-colors duration-300 cursor-pointer"
          >
            <FaLinkedin size={20} />
          </Link>
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-white/40 hover:text-[var(--gold)] transition-colors duration-300 cursor-pointer"
          >
            <FaGithub size={20} />
          </Link>
          <Link
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-white/40 hover:text-[var(--gold)] transition-colors duration-300 cursor-pointer"
          >
            <FaWhatsapp size={20} />
          </Link>
          <Link
            href="/contact"
            aria-label="Contact Page"
            className="text-white/40 hover:text-[var(--gold)] transition-colors duration-300 cursor-pointer"
          >
            <FaEnvelope size={20} />
          </Link>
        </div>
      </div>

    </div>
  );
}
