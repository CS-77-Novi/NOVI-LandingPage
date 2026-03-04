"use client";

import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";
import Tabs from "@/components/ui/Tabs";
import { HOW_GROUP, HOW_INDIVIDUAL, type HowItWorksStep } from "@/lib/data";

function StepGrid({ steps }: { steps: HowItWorksStep[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {steps.map((step, i) => (
        <div
          key={i}
          className="relative overflow-hidden feature-card-top bg-white/[0.03] border border-white/10 rounded-2xl p-7 hover:border-purple/30 transition-all duration-300 hover:-translate-y-1"
        >
          <div className="font-mono text-[11px] text-cyan tracking-widest mb-4">
            {step.num}
          </div>
          <h3 className="font-syne font-bold text-base mb-3">{step.title}</h3>
          <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how" className="relative z-[2] py-32">
      <div className="max-w-[1200px] mx-auto px-8">
        <RevealOnScroll>
          <SectionLabel>The Process</SectionLabel>
        </RevealOnScroll>
        <RevealOnScroll delay={0.05}>
          <h2 className="font-syne font-extrabold text-[clamp(2rem,4vw,3.25rem)] tracking-tight leading-tight mb-12">
            How <span className="text-gradient-purple-cyan">NOVI</span> Works
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <Tabs
            tabs={[
              {
                label: "👥 Group Meeting",
                content: <StepGrid steps={HOW_GROUP} />,
              },
              {
                label: "🎧 Individual Learning",
                content: <StepGrid steps={HOW_INDIVIDUAL} />,
              },
            ]}
          />
        </RevealOnScroll>
      </div>
    </section>
  );
}
