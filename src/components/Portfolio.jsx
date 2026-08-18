import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { Image } from "@/components/ui/image";

// ─────────────────────────────────────────────────────────────
//  YOUR PORTFOLIO — edit this list to make it your own.
//
//  Each project needs: title, category, image (URL), description.
//  - Reorder the items below to change how they appear on the site.
//  - Add a new object to add a project, or delete one to remove it.
//  - Swap the "image" URL for your own work (upload it and paste the link).
//  - The images below are placeholders so the page isn't empty — replace
//    them with your real projects whenever you're ready.
// ─────────────────────────────────────────────────────────────
const projects = [
  {
    title: "Brand Identity",
    category: "Logo & Identity",
    image: "/__generating__/b6abe74a-1382-4dcd-9db2-471855c7f431.png",
    description:
      "A full visual identity system, from logo and typography to stationery, built around clarity and restraint.",
  },
  {
    title: "Poster Series",
    category: "Print Design",
    image: "/__generating__/783542d2-e89f-43a3-8a4a-1661292ab0f7.png",
    description:
      "Bold editorial posters playing with the space between typography and abstract form.",
  },
  {
    title: "Social Media Kit",
    category: "Digital Design",
    image: "/__generating__/45d2b823-66bd-4af6-808b-df0686632e00.png",
    description:
      "A cohesive set of Instagram templates to keep a brand recognizable across every post.",
  },
  {
    title: "Packaging Design",
    category: "Product & Packaging",
    image: "/__generating__/f5fb9f31-1d27-4a53-937f-541a7acefede.png",
    description:
      "Minimalist packaging that lets the product breathe, with matte finishes and quiet confidence.",
  },
  {
    title: "Business Cards",
    category: "Stationery",
    image: "/__generating__/e8df4079-d2c8-4b64-96fc-a377e0696202.png",
    description:
      "Tactile, understated business cards that leave a lasting impression without saying too much.",
  },
  {
    title: "Album Cover Art",
    category: "Music Branding",
    image: "/__generating__/cc98f55c-426d-499a-8d2a-829bf3524c34.png",
    description:
      "Cover artwork that turns sound into a single, striking visual moment.",
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
              Our Portfolio
            </h2>
          </div>
          <p className="text-white/50 max-w-sm leading-relaxed">
            A look at some of the work we're proud of. Tap any piece to see more.
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