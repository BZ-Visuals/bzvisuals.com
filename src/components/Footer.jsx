import React from "react";
import { ArrowUpRight, Instagram, Facebook } from "lucide-react";
import Logo from "@/components/Logo";

const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

// Add your links here when you're ready (replace the "#" with your profile URL).
const socials = [
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "Facebook", href: "#", icon: Facebook },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <div>
            <Logo onClick={() => scrollTo("#top")} />
            <p className="mt-5 text-white/50 max-w-xs leading-relaxed">
              Modern, minimalist graphic design that speaks louder than words.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-6">
            <button
              onClick={() => scrollTo("#contact")}
              className="group inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition-all duration-300"
            >
              Book Now
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors"
                >
                  {s.label}
                  <s.icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} B&Z Visuals. All rights reserved.
          </p>
          <p className="text-sm text-white/40">Designed & built with intention.</p>
        </div>
      </div>
    </footer>
  );
}