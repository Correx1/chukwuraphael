"use client";

import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Action details
  };

  return (
    <main className="min-h-screen flex flex-col justify-between px-6 py-10 md:px-8 md:py-16 text-white relative">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-[10%] left-[80%] w-[350px] h-[350px] rounded-full bg-(--gold)/5 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[75%] w-[450px] h-[450px] rounded-full bg-(--gold)/3 blur-[150px]" />
      </div>

      {/* Grid background overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-size-[40px_40px]" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10 mt-6 mb-12">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="block w-6 h-px bg-(--gold)" />
          <span className="text-(--gold) text-xs font-semibold tracking-widest uppercase">Connection</span>
        </div>
        <h1 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight text-white mb-10">
          GET IN <span className="text-(--gold)">TOUCH</span>
        </h1>
        <p className="text-white/60 font-light max-w-xl mb-16 leading-relaxed">
          Let&apos;s build something amazing together. Reach out via the form below or connect through social channels.
        </p>

        {/* Form and Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
          {/* Contact Details (5 cols) */}
          <div className="md:col-span-5 space-y-8">
            {/* Direct Contact Card */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-md relative overflow-hidden group shadow-2xl transition-all duration-300 hover:border-(--gold)/30">
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-(--gold) group-hover:w-full transition-all duration-500" />
              <h3 className="text-(--gold) text-sm font-bold uppercase tracking-[0.15em] mb-6">Direct Contact</h3>
              <a
                href="mailto:contact@example.com"
                className="flex items-center gap-5 text-white/80 hover:text-(--gold) transition-colors duration-300 group"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-(--gold)/10 border border-(--gold)/30 text-(--gold) group-hover:bg-(--gold) group-hover:text-black transition-all duration-500 shrink-0">
                  <Mail size={22} />
                </div>
                <span className="text-base sm:text-lg font-light tracking-wide break-all">contact@example.com</span>
              </a>
            </div>

            {/* Social Presence Card */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-md relative overflow-hidden group shadow-2xl transition-all duration-300 hover:border-(--gold)/30">
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-(--gold) group-hover:w-full transition-all duration-500" />
              <h3 className="text-(--gold) text-sm font-bold uppercase tracking-[0.15em] mb-6">Social &amp; Chat</h3>
              <div className="flex flex-col gap-6">
                <a
                  href="#"
                  className="flex items-center gap-5 text-white/80 hover:text-(--gold) transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-(--gold)/10 border border-(--gold)/30 text-(--gold) group-hover:bg-(--gold) group-hover:text-black transition-all duration-500 shrink-0">
                    <FaGithub size={22} />
                  </div>
                  <span className="text-base sm:text-lg font-light tracking-wide">GitHub Profile</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-5 text-white/80 hover:text-(--gold) transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-(--gold)/10 border border-(--gold)/30 text-(--gold) group-hover:bg-(--gold) group-hover:text-black transition-all duration-500 shrink-0">
                    <FaLinkedin size={22} />
                  </div>
                  <span className="text-base sm:text-lg font-light tracking-wide">LinkedIn Profile</span>
                </a>
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 text-white/80 hover:text-(--gold) transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-(--gold)/10 border border-(--gold)/30 text-(--gold) group-hover:bg-(--gold) group-hover:text-black transition-all duration-500 shrink-0">
                    <FaWhatsapp size={22} />
                  </div>
                  <span className="text-base sm:text-lg font-light tracking-wide">WhatsApp Direct</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form Box (7 cols) */}
          <div className="md:col-span-7 bg-white/5 border border-white/10 rounded-xl p-8 md:p-10 backdrop-blur-md shadow-2xl relative overflow-hidden group transition-all duration-300 hover:border-(--gold)/30">
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-(--gold) group-hover:w-full transition-all duration-500" />
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-widest text-white/60 mb-2.5 font-bold">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-white/5 border border-white/15 rounded-lg px-5 py-4 text-base text-white focus:border-(--gold) focus:bg-white/10 focus:outline-none transition-all duration-300 placeholder:text-white/30"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-widest text-white/60 mb-2.5 font-bold">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-white/5 border border-white/15 rounded-lg px-5 py-4 text-base text-white focus:border-(--gold) focus:bg-white/10 focus:outline-none transition-all duration-300 placeholder:text-white/30"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-widest text-white/60 mb-2.5 font-bold">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full bg-white/5 border border-white/15 rounded-lg px-5 py-4 text-base text-white focus:border-(--gold) focus:bg-white/10 focus:outline-none transition-all duration-300 resize-none placeholder:text-white/30"
                />
              </div>

              <button
                type="submit"
                className="btn-gold flex items-center justify-center gap-3 px-8 py-4 text-base font-bold tracking-wider transition-colors duration-300 w-full cursor-pointer group"
              >
                <span>Send Message</span>
                <Send size={16} className="transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer copyright */}
      <div className="w-full text-center text-white/30 text-xs tracking-wider mt-16 py-4 border-t border-white/5">
        © {new Date().getFullYear()} Raphael — All rights reserved.
      </div>
    </main>
  );
}
