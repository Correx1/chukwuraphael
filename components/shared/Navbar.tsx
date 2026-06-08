"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { X } from "lucide-react";

const links = [
  { label: "Home",       href: "/"         },
  { label: "About Me",   href: "/about"    },
  { label: "My Work",    href: "/work"     },
  { label: "My Service", href: "/services" },
  { label: "Contact",    href: "/contact"  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const drawer = drawerRef.current;
    const overlay = overlayRef.current;
    if (!drawer || !overlay) return;

    if (isFirstRender.current) {
      isFirstRender.current = false;
      // Set initial positions off-screen immediately on mount
      gsap.set(drawer, { x: "105%", visibility: "hidden" });
      gsap.set(overlay, { opacity: 0, pointerEvents: "none" });
      return;
    }

    if (open) {
      gsap.set(drawer, { visibility: "visible" });
      gsap.set(overlay, { pointerEvents: "auto" });
      gsap.to(overlay, { opacity: 1, duration: 0.3, ease: "power2.out" });
      gsap.to(drawer, { x: "0%", duration: 0.45, ease: "power4.out" });
      gsap.fromTo(
        linksRef.current?.querySelectorAll("a") ?? [],
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.07, duration: 0.4, ease: "power3.out", delay: 0.2 }
      );
    } else {
      gsap.to(overlay, { opacity: 0, duration: 0.25, onComplete: () => gsap.set(overlay, { pointerEvents: "none" }) });
      gsap.to(drawer, {
        x: "105%",
        duration: 0.4,
        ease: "power3.in",
        onComplete: () => gsap.set(drawer, { visibility: "hidden" }),
      });
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* Trigger — fixed to viewport */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="fixed z-900 w-11 h-11 flex items-center justify-center rounded bg-black/80 border border-(--gold)/25 backdrop-blur-md hover:border-(--gold)/70 transition-colors duration-300 cursor-pointer group"
        style={{ top: "calc(var(--frame, 0px) + 1.75rem)", right: "calc(var(--frame, 0px) + 1.5rem)" }}
      >
        <div className="flex flex-col gap-1.5 w-5 items-end">
          <span className="w-full h-[3px] bg-(--gold) rounded-full transition-all duration-300 group-hover:translate-x-[-2px]" />
          <span className="w-2/3 h-[3px] bg-(--gold) rounded-full transition-all duration-300 group-hover:w-full" />
        </div>
      </button>

      {/* Backdrop — always in DOM, GSAP controls opacity */}
      <div
        ref={overlayRef}
        onClick={() => setOpen(false)}
        className="fixed z-950 bg-black/50 backdrop-blur-sm cursor-pointer opacity-0 pointer-events-none"
        style={{
          top: "var(--frame, 0px)",
          left: "var(--frame, 0px)",
          right: "var(--frame, 0px)",
          height: "calc(100vh - 2 * var(--frame, 0px))",
        }}
      />

      {/* Drawer — always in DOM, GSAP controls x */}
      <div
        ref={drawerRef}
        className="fixed z-1000 w-[min(340px,90vw)] bg-[#0a0a0af5] backdrop-blur-3xl border-l border-white/5 flex flex-col p-10 translate-x-[105%] invisible"
        style={{
          top: "var(--frame, 0px)",
          right: "var(--frame, 0px)",
          height: "calc(100vh - 2 * var(--frame, 0px))",
        }}
      >
        {/* Close */}
        <button
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          className="self-end w-9 h-9 flex items-center justify-center border border-white/10 rounded text-white/50 hover:border-(--gold) hover:text-(--gold) transition-colors duration-300 mb-6 md:mb-10 cursor-pointer"
        >
          <X size={16} />
        </button>

        <p className="text-(--gold) text-[0.65rem] tracking-[0.2em] uppercase mb-4 md:mb-8">Menu</p>

        {/* Links */}
        <div ref={linksRef} className="flex flex-col gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 md:py-4 border-b border-white/5 text-white font-bold tracking-tight hover:text-(--gold) hover:pl-3 transition-all duration-300 text-lg sm:text-xl md:text-2xl font-display"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-auto">
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-gold flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold tracking-wide transition-colors duration-300 w-full cursor-pointer"
          >
            <span>Let&apos;s Talk</span>
          </Link>
          <p className="mt-5 text-white/30 text-xs tracking-wider">
            © {new Date().getFullYear()} Raphael
          </p>
        </div>
      </div>
    </>
  );
}
