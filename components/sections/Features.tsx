"use client";

import { motion } from "framer-motion";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";
import { FEATURES } from "@/lib/data";

const glowMap = {
  purple: "hover-glow-purple",
  blue: "hover-glow-blue",
  cyan: "hover-glow-cyan",
  green: "hover-glow-green",
};

export default function Features() {
  return (
    <section id="features" className="relative z-[2] py-32">
      <div className="max-w-[1200px] mx-auto px-8">
        <RevealOnScroll>
          <SectionLabel>What Makes NOVI Different</SectionLabel>
        </RevealOnScroll>
        <RevealOnScroll delay={0.05}>
          <h2 className="font-syne font-extrabold text-[clamp(2rem,4vw,3.25rem)] tracking-tight leading-tight mb-4">
            Packed with{" "}
            <span className="text-gradient-purple-cyan">Smart Features</span>
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <p className="text-muted text-lg leading-relaxed max-w-xl mb-16">
            Every feature is purpose-built to maximize engagement, reduce
            passive learning, and give educators real-time intelligence.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((feat, i) => (
            <RevealOnScroll key={i} delay={i * 0.07}>
              <motion.div
                className={`relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-2xl p-7 cursor-default feature-card-top transition-all duration-300 ${glowMap[feat.glow]} hover:-translate-y-1.5`}
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
                  style={{ background: feat.bg }}
                  aria-hidden="true"
                >
                  {feat.icon}
                </div>
                <h3 className="font-syne font-bold text-base mb-2.5">{feat.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{feat.desc}</p>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
