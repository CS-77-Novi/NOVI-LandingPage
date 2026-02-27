"use client";

import { motion } from "framer-motion";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative z-[2] py-32">
      <div className="max-w-[1200px] mx-auto px-8">
        <RevealOnScroll>
          <SectionLabel>Teacher Voices</SectionLabel>
        </RevealOnScroll>
        <RevealOnScroll delay={0.05}>
          <h2 className="font-syne font-extrabold text-[clamp(2rem,4vw,3.25rem)] tracking-tight leading-tight mb-16">
            What Educators{" "}
            <span className="text-gradient-purple-cyan">Are Saying</span>
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <RevealOnScroll key={i} delay={i * 0.1}>
              <motion.div
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-purple/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] transition-all duration-300"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div
                  className="text-purple text-4xl leading-none mb-4 font-syne"
                  aria-hidden="true"
                >
                  "
                </div>
                <p className="text-muted text-sm leading-relaxed italic mb-7">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple to-blue flex items-center justify-center text-xs font-bold font-syne shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.author}</div>
                    <div className="font-mono text-[10px] text-muted mt-0.5">
                      {t.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
