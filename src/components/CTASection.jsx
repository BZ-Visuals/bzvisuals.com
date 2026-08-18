import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

export default function CTASection() {
  return (
    <section className="relative bg-black py-20 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vw] rounded-full bg-brand-accent/[0.06] blur-[120px]" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative max-w-4xl mx-auto px-6 text-center"
      >
        <h2 className="font-display text-4xl md:text-6xl tracking-tight text-white leading-tight">
          Ready to start your{" "}
          <span className="italic font-light text-brand-accent">project?</span>
        </h2>
        <p className="mt-6 text-lg text-white/60 max-w-xl mx-auto">
          Tell us what you're envisioning and we'll help bring it to life.
        </p>
        <button
          onClick={() => scrollTo("#contact")}
          className="group mt-10 inline-flex items-center gap-2 rounded-full bg-white text-black px-8 py-4 text-base font-medium hover:bg-white/90 transition-all duration-300"
        >
          Book Now
          <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </motion.div>
    </section>
  );
}