import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "@/components/Logo";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Logo onClick={() => handleNav("#top")} />

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className="text-sm text-white/70 hover:text-white transition-colors duration-300"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#contact")}
            className="group inline-flex items-center gap-1.5 rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-white/90 transition-all duration-300"
          >
            Book Now
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
          <div className="px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className="text-left text-lg text-white/80 hover:text-white"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => handleNav("#contact")}
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-white text-black px-5 py-3 text-sm font-medium"
            >
              Book Now <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}