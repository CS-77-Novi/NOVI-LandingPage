"use client";

import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";
import Accordion from "@/components/ui/Accordion";
import { FAQS } from "@/lib/data";

export default function FAQ() {
  return (
    <section id="faq" className="relative z-[2] py-32">
      <div className="max-w-[1200px] mx-auto px-8">
        <RevealOnScroll>
          <SectionLabel>Got Questions?</SectionLabel>
        </RevealOnScroll>
        <RevealOnScroll delay={0.05}>
          <h2 className="font-syne font-extrabold text-[clamp(2rem,4vw,3.25rem)] tracking-tight leading-tight mb-16">
            Frequently Asked{" "}
            <span className="text-gradient-purple-cyan">Questions</span>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="max-w-3xl">
            <Accordion items={FAQS} />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
