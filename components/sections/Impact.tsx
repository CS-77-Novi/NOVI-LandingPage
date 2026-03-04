"use client";

import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";
import { IMPACT_STATS } from "@/lib/data";

export default function Impact() {
  return (
    <section id="impact" className="relative z-[2] py-32">
      <div className="max-w-[1200px] mx-auto px-8">
        <RevealOnScroll>
          <SectionLabel>By The Numbers</SectionLabel>
        </RevealOnScroll>
        <RevealOnScroll delay={0.05}>
          <h2 className="font-syne font-extrabold text-[clamp(2rem,4vw,3.25rem)] tracking-tight leading-tight mb-16">
            The <span className="text-gradient-purple-cyan">NOVI</span> Impact
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {IMPACT_STATS.map((stat, i) => (
            <RevealOnScroll key={i} delay={i * 0.08}>
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 text-center hover:border-purple/40 hover:-translate-y-1 transition-all duration-300 group">
                <div
                  className={`font-syne font-extrabold text-4xl mb-3 ${stat.gradient}`}
                >
                  {stat.value}
                </div>
                <div className="text-muted text-sm leading-relaxed">{stat.label}</div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
