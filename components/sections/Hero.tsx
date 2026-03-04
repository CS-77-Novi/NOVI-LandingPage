"use client";

import { useEffect, useRef } from "react";
import { motion, type Variants } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  const mockupRef = useRef<HTMLDivElement>(null);

  // Parallax scroll effect on mockup
  useEffect(() => {
    const onScroll = () => {
      if (mockupRef.current) {
        mockupRef.current.style.transform = `translateY(${window.scrollY * 0.06}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] } },
  };

  return (
    <section
      id="hero"
      className="relative z-[2] min-h-screen flex items-center pt-24 pb-20"
    >
      <div className="max-w-[1200px] mx-auto px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 bg-purple/10 border border-purple/30 rounded-full px-4 py-1.5 text-purple text-xs font-mono tracking-wider mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-green att-pulse inline-block" />
                ML-Powered Distraction Detection
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-syne font-extrabold text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.05] tracking-[-0.04em] mb-6"
            >
              Attention-Aware
              <br />
              <span className="text-gradient-purple-cyan">Online Learning</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-muted text-lg leading-relaxed mb-10 max-w-[480px]"
            >
              NOVI uses computer vision and audio signals to detect distraction
              in real-time — keeping every student focused, every session
              engaged, every outcome measurable.
            </motion.p>

            <motion.div variants={item} className="flex gap-4 flex-wrap">
              <Button href="#cta" variant="primary" size="lg">
                Get Early Access
              </Button>
              <Button href="#how" variant="ghost" size="lg">
                Watch Demo ▶
              </Button>
            </motion.div>
          </motion.div>

          {/* Right — product mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <div
              ref={mockupRef}
              className="hero-float relative border border-white/10 rounded-2xl overflow-hidden bg-[rgba(15,15,25,0.9)] shadow-[0_0_60px_rgba(168,85,247,0.25)] aspect-[16/10]"
              role="img"
              aria-label="Dashboard mockup screenshot showing attention analytics, distraction detection, and participant grid in neon cyber theme"
            >
              <MockupUI />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── Inline mockup UI ──────────────────────────────────────────────────
function MockupUI() {
  return (
    <div className="w-full h-full p-5 flex flex-col gap-3 font-mono text-[11px]">
      {/* Top bar */}
      <div className="flex items-center gap-2 pb-3 border-b border-white/10">
        <span className="w-2 h-2 rounded-full bg-red-500" />
        <span className="w-2 h-2 rounded-full bg-yellow" />
        <span className="w-2 h-2 rounded-full bg-green" />
        <span className="text-muted ml-2 text-[10px] tracking-wide">
          NOVI — Live Session • CS301 — 24 participants
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-2 flex-1">
        {/* Avg attention */}
        <div className="bg-white/[0.04] border border-white/10 rounded-lg p-3">
          <div className="text-muted uppercase tracking-wider text-[9px] mb-2">Avg. Attention</div>
          <div className="font-syne font-extrabold text-3xl text-green leading-none">87%</div>
          <div className="flex gap-3 mt-2">
            <span className="text-green text-[9px]">▲ Focused (18)</span>
            <span className="text-red-400 text-[9px]">▼ Distracted (6)</span>
          </div>
        </div>

        {/* Distracted top */}
        <div className="bg-white/[0.04] border border-white/10 rounded-lg p-3">
          <div className="text-muted uppercase tracking-wider text-[9px] mb-2">Distracted — On Top</div>
          <div className="flex gap-1.5 mt-1">
            {["AJ", "MK", "RS"].map((initials) => (
              <div
                key={initials}
                className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-[9px] font-bold"
              >
                {initials}
              </div>
            ))}
          </div>
        </div>

        {/* Engagement bars */}
        <div className="col-span-2 bg-white/[0.04] border border-white/10 rounded-lg p-3">
          <div className="text-muted uppercase tracking-wider text-[9px] mb-3">Session Engagement</div>
          <div className="flex flex-col gap-1.5">
            {[
              { w: "87%", from: "#a855f7", to: "#22c55e" },
              { w: "74%", from: "#3b82f6", to: "#06b6d4" },
              { w: "62%", from: "#eab308", to: "#f97316" },
            ].map((bar, i) => (
              <div key={i} className="h-1 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bar-fill-animate"
                  style={{
                    width: bar.w,
                    background: `linear-gradient(90deg, ${bar.from}, ${bar.to})`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
