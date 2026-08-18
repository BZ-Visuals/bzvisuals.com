import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Loader2, Mail } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { useToast } from "@/components/ui/use-toast";

const services = [
  "Brand Identity",
  "Logo Design",
  "Poster / Print Design",
  "Social Media Design",
  "Packaging Design",
  "Other",
];

export default function ContactForm() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading || sent) return;
    setLoading(true);
    try {
      const res = await base44.functions.invoke("handleContactForm", form);
      if (res?.data?.error) throw new Error(res.data.error);
      setSent(true);
      toast({ title: "Message sent!", description: "We'll be in touch soon." });
    } catch (err) {
      toast({
        title: "Something went wrong",
        description: err?.message || "Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative bg-neutral-950 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-[0.4em] uppercase text-white/40 mb-4">
              Contact Us
            </p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight text-white leading-tight">
              Let's make
              <br />
              something{" "}
              <span className="italic font-light text-white/70">great.</span>
            </h2>
            <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-md">
              Have a project, a question, or just want to say hi? Drop us a
              message and we'll get back to you.
            </p>

            <div className="mt-10 flex items-center gap-3 text-white/50">
              <Mail className="w-5 h-5" />
              <a href="mailto:hello@bzvisuals.com" className="hover:text-white transition-colors">
                hello@bzvisuals.com
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {sent ? (
              <div className="rounded-2xl border border-white/10 bg-black/40 p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-3xl text-white mb-3">Message sent!</h3>
                <p className="text-white/60 mb-8">
                  Thanks for reaching out — we'll get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setForm({ name: "", email: "", service: "", message: "" });
                    setSent(false);
                  }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 text-white px-6 py-3 text-sm font-medium hover:bg-white/5 transition-all"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-black/40 p-6 md:p-8 space-y-5">
                <div>
                  <label className="block text-sm text-white/70 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Your name"
                    className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/70 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@email.com"
                    className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/70 mb-2">
                    What do you need? <span className="text-white/30">(optional)</span>
                  </label>
                  <select
                    value={form.service}
                    onChange={update("service")}
                    className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s} value={s} className="bg-neutral-900">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-white/70 mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Tell us about your project..."
                    className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-6 py-4 text-base font-medium hover:bg-white/90 transition-all duration-300 disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}