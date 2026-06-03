"use client";

import Link from "next/link";
import { Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full mt-16 flex flex-col items-center relative z-10">
      {/* Main Call to Action Block */}
      <div className="w-full bg-white/2 border-t border-white/5 py-16 px-6 flex flex-col items-center justify-center text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-normal text-white mb-8 tracking-tight font-display">
          Let&apos;s make something great!
        </h2>
        <Link
          href="/contact"
          className="btn-gold flex items-center justify-center gap-2.5 px-8 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-300 cursor-pointer"
        >
          <span>CONTACT ME</span>
          <Send size={14} className="transform rotate-0" />
        </Link>
      </div>

      {/* Copyright Footer */}
      <div className="w-full text-center text-white/30 text-xs tracking-wider py-6 border-t border-white/5 bg-black/20">
        © {new Date().getFullYear()} Raphael — All rights reserved.
      </div>
    </footer>
  );
}
