"use client";

import { motion } from "framer-motion";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";
import { USE_CASES } from "@/lib/data";

export default function UseCases() {
  return (
    <section id="usecases" className="relative z-[2] py-32">
      <div className="max-w-[1200px] mx-auto px-8">
        <RevealOnScroll>
          <SectionLabel>Flexible by Design</SectionLabel>
        </RevealOnScroll>
        <RevealOnScroll delay={0.05}>
          <h2 className="font-syne font-extrabold text-[clamp(2rem,4vw,3.25rem)] tracking-tight leading-tight mb-16">
            Built for Every{" "}
            <span className="text-gradient-purple-cyan">Learning Context</span>
          </h2>
        </RevealOnScroll>

        <div className="flex flex-wrap gap-4">
          {USE_CASES.map((uc, i) => (
            <RevealOnScroll key={i} delay={i * 0.07}>
              <motion.div
                className="flex items-center gap-4 bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 cursor-default transition-all duration-300 hover:border-purple/40 hover:bg-purple/[0.06] hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <span className="text-2xl" aria-hidden="true">
                  {uc.icon}
                </span>
                <div>
                  <div className="font-semibold text-sm">{uc.title}</div>
                  <div className="text-muted text-xs mt-0.5">{uc.sub}</div>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
