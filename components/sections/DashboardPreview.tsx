"use client";

import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";

const PARTICIPANTS = [
  {
    initials: "AJ",
    name: "Alex Johnson",
    status: "Eyes averted · Yawning detected · 2m 14s",
    badge: "Distracted",
    distracted: true,
    avatarBg: "rgba(239,68,68,0.15)",
    avatarColor: "#ef4444",
    badgeBg: "rgba(239,68,68,0.12)",
    badgeColor: "#ef4444",
  },
  {
    initials: "MK",
    name: "Maya Kumar",
    status: "Head pose off · Low audio signal · 1m 05s",
    badge: "Distracted",
    distracted: true,
    avatarBg: "rgba(239,68,68,0.15)",
    avatarColor: "#ef4444",
    badgeBg: "rgba(239,68,68,0.12)",
    badgeColor: "#ef4444",
  },
  {
    initials: "RS",
    name: "Riya Sharma",
    status: "Gaze fixated · Active engagement",
    badge: "Focused",
    distracted: false,
    avatarBg: "rgba(34,197,94,0.15)",
    avatarColor: "#22c55e",
    badgeBg: "rgba(34,197,94,0.12)",
    badgeColor: "#22c55e",
  },
  {
    initials: "BT",
    name: "Ben Torres",
    status: "Attentive · Responding actively",
    badge: "Focused",
    distracted: false,
    avatarBg: "rgba(34,197,94,0.15)",
    avatarColor: "#22c55e",
    badgeBg: "rgba(34,197,94,0.12)",
    badgeColor: "#22c55e",
  },
];

const PROGRESS_BARS = [
  { label: "Eye Gaze Focus", value: 91, from: "#a855f7", to: "#06b6d4" },
  { label: "Head Pose Alignment", value: 78, from: "#3b82f6", to: "#a855f7" },
  { label: "Facial Alertness", value: 83, from: "#06b6d4", to: "#22c55e" },
  { label: "Audio Participation", value: 65, from: "#eab308", to: "#3b82f6" },
];

export default function DashboardPreview() {
  const circumference = 2 * Math.PI * 50;
  const attentionPct = 87;
  const strokeDashoffset = circumference * (1 - attentionPct / 100);

  return (
    <section id="dashboard" className="relative z-[2] py-32">
      <div className="max-w-[1200px] mx-auto px-8">
        <RevealOnScroll>
          <SectionLabel>Live Preview</SectionLabel>
        </RevealOnScroll>
        <RevealOnScroll delay={0.05}>
          <h2 className="font-syne font-extrabold text-[clamp(2rem,4vw,3.25rem)] tracking-tight leading-tight mb-4">
            Engagement{" "}
            <span className="text-gradient-purple-cyan">Dashboard</span>
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <p className="text-muted text-lg leading-relaxed max-w-xl mb-16">
            Real-time visibility into every participant&apos;s focus state.
            Distracted participants surface automatically so instructors never
            miss a moment.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* ── Attention Meter ── */}
          <RevealOnScroll>
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 text-center hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] hover:border-purple/30 transition-all duration-300">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted mb-6">
                Overall Attention Level
              </p>

              <div className="relative w-32 h-32 mx-auto mb-6">
                <svg
                  viewBox="0 0 120 120"
                  className="w-full h-full -rotate-90"
                  aria-hidden="true"
                >
                  <circle
                    cx="60" cy="60" r="50"
                    fill="none"
                    stroke="rgba(255,255,255,0.07)"
                    strokeWidth="10"
                  />
                  <circle
                    cx="60" cy="60" r="50"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    style={{ transition: "stroke-dashoffset 1.5s ease" }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-syne font-extrabold text-3xl text-green leading-none">
                    87%
                  </span>
                  <span className="font-mono text-[10px] text-muted uppercase tracking-wider mt-1">
                    Focused
                  </span>
                </div>
              </div>

              <div className="flex justify-center gap-6 flex-wrap">
                {[
                  { color: "#22c55e", label: "Good >80%" },
                  { color: "#eab308", label: "Fair 50-79%" },
                  { color: "#ef4444", label: "Low <50%" },
                ].map((d) => (
                  <span key={d.label} className="flex items-center gap-1.5 text-xs text-muted">
                    <span
                      className="w-2 h-2 rounded-full inline-block"
                      style={{ background: d.color }}
                    />
                    {d.label}
                  </span>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* ── Distracted on Top ── */}
          <RevealOnScroll delay={0.1}>
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] hover:border-purple/30 transition-all duration-300">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted mb-6">
                ⚡ Distracted Participants — on Top
              </p>
              <div className="flex flex-col gap-3">
                {PARTICIPANTS.map((p) => (
                  <div
                    key={p.initials}
                    className={`flex items-center gap-3 p-3 rounded-xl border transition-colors ${
                      p.distracted
                        ? "distracted-pulse border-red-500/25 bg-red-500/[0.04]"
                        : "border-white/10 bg-white/[0.02]"
                    }`}
                  >
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0 font-syne"
                      style={{ background: p.avatarBg, color: p.avatarColor }}
                    >
                      {p.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold truncate">{p.name}</div>
                      <div className="text-[11px] text-muted font-mono mt-0.5 truncate">{p.status}</div>
                    </div>
                    <span
                      className="px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider font-mono shrink-0"
                      style={{ background: p.badgeBg, color: p.badgeColor }}
                    >
                      {p.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* ── Engagement Breakdown ── */}
          <RevealOnScroll delay={0.15} className="md:col-span-2">
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] hover:border-purple/30 transition-all duration-300">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted mb-8">
                Individual Engagement Breakdown
              </p>
              <div className="flex flex-col gap-5">
                {PROGRESS_BARS.map((bar) => (
                  <div key={bar.label}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">{bar.label}</span>
                      <span className="text-sm font-mono text-muted">{bar.value}%</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bar-fill-animate"
                        style={{
                          width: `${bar.value}%`,
                          background: `linear-gradient(90deg, ${bar.from}, ${bar.to})`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
