import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <CTASection />
        <About />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}