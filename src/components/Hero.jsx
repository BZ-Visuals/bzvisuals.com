import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";

const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* ambient gradient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full bg-white/[0.04] blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[40vw] h-[40vw] rounded-full bg-neutral-400/[0.03] blur-[100px]" />
      </div>

      {/* subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.4em] uppercase text-white/50 mb-8"
        >
          Graphic Design Studio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-white"
        >
          We help bring
          <br />
          your ideas{" "}
          <span className="italic font-light text-white/70">to life.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
        >
          We're Zach and Brody, two graphic designers who love turning ideas
          into clean, minimalist visuals that actually say something.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo("#contact")}
            className="group inline-flex items-center gap-2 rounded-full bg-white text-black px-8 py-4 text-base font-medium hover:bg-white/90 transition-all duration-300"
          >
            Book Now
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          <button
            onClick={() => scrollTo("#work")}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 text-white px-8 py-4 text-base font-medium hover:bg-white/5 transition-all duration-300"
          >
            View Our Work
          </button>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("#work")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors"
        aria-label="Scroll to work"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </section>
  );
}