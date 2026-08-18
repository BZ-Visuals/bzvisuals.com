import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

const founders = [
  {
    name: "Zach",
    initials: "Z",
    blurb:
      "Obsessed with typography and the discipline of whitespace. Zach leads identity and print work.",
  },
  {
    name: "Brody",
    initials: "B",
    blurb:
      "Drawn to motion and digital craft. Brody brings brands to life across screens and social.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-neutral-950 py-24 md:py-32 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <p className="text-xs tracking-[0.4em] uppercase text-white/40 mb-4">
              About Us
            </p>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight text-white leading-tight">
              Two designers.
              <br />
              One shared{" "}
              <span className="italic font-light text-white/70">obsession.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <p className="text-lg text-white/60 leading-relaxed mb-12 max-w-xl">
              B&Z Visuals is a creative studio founded by Zach and Brody, blending
              precision and emotion through design. Our work focuses on
              simplicity, clarity, and impact — visuals that feel effortless but
              are built with intention.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {founders.map((f) => (
                <div
                  key={f.name}
                  className="rounded-2xl border border-white/10 bg-black/40 p-6 hover:border-white/20 transition-colors duration-300"
                >
                  <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center mb-4">
                    <span className="font-display text-xl text-white">{f.initials}</span>
                  </div>
                  <h3 className="font-display text-2xl text-white mb-2">{f.name}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{f.blurb}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollTo("#contact")}
              className="group mt-10 inline-flex items-center gap-2 rounded-full border border-white/20 text-white px-7 py-3.5 text-sm font-medium hover:bg-white/5 transition-all duration-300"
            >
              Work with us
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}