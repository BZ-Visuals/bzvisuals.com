import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { Image } from "@/components/ui/image";

// ─────────────────────────────────────────────────────────────
//  EDIT YOUR PORTFOLIO HERE
//  Add, remove, or change projects below. Each item needs:
//    title, category, image (URL), description
// ─────────────────────────────────────────────────────────────
const projects = [
  {
    title: "Brand Identity",
    category: "Logo & Identity",
    image: "https://media.base44.com/images/public/6a846fdfb04e0ceeb0e53d92/05ca2c3f4_generated_d113f407.png",
    description:
      "A complete visual identity system — logo, typography, and stationery — built around clarity and restraint.",
  },
  {
    title: "Poster Series",
    category: "Print Design",
    image: "https://media.base44.com/images/public/6a846fdfb04e0ceeb0e53d92/cba826886_generated_dedf1e6f.png",
    description:
      "Bold editorial posters exploring the tension between typography and abstract form.",
  },
  {
    title: "Social Media Kit",
    category: "Digital Design",
    image: "https://media.base44.com/images/public/6a846fdfb04e0ceeb0e53d92/e2e1990ea_generated_562103fb.png",
    description:
      "A cohesive set of Instagram templates designed to keep a brand recognizable across every post.",
  },
  {
    title: "Packaging Design",
    category: "Product & Packaging",
    image: "https://media.base44.com/images/public/6a846fdfb04e0ceeb0e53d92/6b2293f70_generated_5cf87f4e.png",
    description:
      "Minimalist packaging that lets the product breathe — matte finishes and quiet confidence.",
  },
  {
    title: "Business Cards",
    category: "Stationery",
    image: "https://media.base44.com/images/public/6a846fdfb04e0ceeb0e53d92/1b8e5caf7_generated_391b5a47.png",
    description:
      "Tactile, understated business cards that make a lasting impression without saying too much.",
  },
  {
    title: "Album Cover Art",
    category: "Music Branding",
    image: "https://media.base44.com/images/public/6a846fdfb04e0ceeb0e53d92/5c572dae4_generated_ef67dc5b.png",
    description:
      "Cover artwork that translates sound into a single, striking visual moment.",
  },
];
// ─────────────────────────────────────────────────────────────

const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

export default function Portfolio() {
  const [active, setActive] = useState(null);

  return (
    <section id="work" className="relative bg-black py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-white/40 mb-4">
              Selected Work
            </p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight text-white">
              The Portfolio
            </h2>
          </div>
          <p className="text-white/50 max-w-sm leading-relaxed">
            A selection of projects spanning brand identity, print, and digital
            design. Tap any piece to see more.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {projects.map((p, i) => (
            <motion.button
              key={p.title}
              onClick={() => setActive(p)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="group relative text-left overflow-hidden rounded-2xl bg-neutral-900"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fittingType="fill"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-6">
                <p className="text-xs tracking-widest uppercase text-white/50 mb-1.5">
                  {p.category}
                </p>
                <h3 className="font-display text-2xl text-white">{p.title}</h3>
              </div>
            </motion.button>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/60 mb-6">Have a project in mind?</p>
          <button
            onClick={() => scrollTo("#contact")}
            className="group inline-flex items-center gap-2 rounded-full bg-white text-black px-8 py-4 text-base font-medium hover:bg-white/90 transition-all duration-300"
          >
            Book Now
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setActive(null)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-3xl w-full bg-neutral-950 rounded-2xl overflow-hidden border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-[4/3] w-full overflow-hidden">
              <Image
                src={active.image}
                alt={active.title}
                fittingType="fill"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <p className="text-xs tracking-widest uppercase text-white/50 mb-2">
                {active.category}
              </p>
              <h3 className="font-display text-3xl text-white mb-3">{active.title}</h3>
              <p className="text-white/60 leading-relaxed">{active.description}</p>
              <button
                onClick={() => {
                  setActive(null);
                  scrollTo("#contact");
                }}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition-all"
              >
                Start a project like this <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}