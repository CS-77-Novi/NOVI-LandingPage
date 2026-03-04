"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import Toast from "@/components/ui/Toast";

export default function FinalCTA() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = () => {
    if (!email || !email.includes("@")) {
      setError(true);
      return;
    }
    setError(false);
    setEmail("");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  return (
    <section id="cta" className="relative z-[2] py-40 text-center overflow-hidden">
      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(168,85,247,0.18) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-8 relative z-10">
        <RevealOnScroll>
          <SectionLabel>Early Access</SectionLabel>
        </RevealOnScroll>

        <RevealOnScroll delay={0.05}>
          <h2 className="font-syne font-extrabold text-[clamp(2.2rem,4.5vw,3.75rem)] tracking-tight leading-tight mb-5">
            Ready to transform
            <br />
            <span className="text-gradient-purple-cyan">
              how your class learns?
            </span>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <p className="text-muted text-lg mb-12">
            Join thousands of educators already on the waitlist. Be first to
            experience NOVI.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <div className="flex gap-3 justify-center flex-wrap">
            <motion.input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError(false);
              }}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              placeholder="your@email.edu"
              aria-label="Email address for early access"
              className={`bg-white/[0.05] border rounded-xl px-5 py-3.5 text-sm text-slate-100 w-72 outline-none transition-all duration-200 font-sans placeholder:text-muted ${
                error
                  ? "border-red-500 shadow-[0_0_0_3px_rgba(239,68,68,0.2)]"
                  : "border-white/10 focus:border-purple focus:shadow-[0_0_0_3px_rgba(168,85,247,0.15)]"
              }`}
              whileFocus={{ scale: 1.01 }}
            />
            <Button onClick={handleSubmit} variant="primary" size="lg">
              Get Early Access
            </Button>
          </div>
          {error && (
            <p className="text-red-400 text-xs mt-3 font-mono">
              Please enter a valid email address.
            </p>
          )}
        </RevealOnScroll>
      </div>

      <Toast show={showToast} />
    </section>
  );
}
