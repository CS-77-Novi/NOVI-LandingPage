"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";
import Modal from "@/components/ui/Modal";
import { TEAM, type TeamMember } from "@/lib/data";

const INNER_ANGLES = [0, 120, 240];
const OUTER_ANGLES = [60, 180, 300];

// Tweak these to resize everything
const CONTAINER   = 660;
const INNER_R     = 160;
const OUTER_R     = 270;
const AVATAR_SIZE = 96;

interface NodeProps {
  member: TeamMember;
  angle: number;
  radius: number;
  onClick: () => void;
}

function MemberNode({ member, angle, radius, onClick }: NodeProps) {
  const rad  = (angle * Math.PI) / 180;
  const x    = Math.cos(rad) * radius;
  const y    = Math.sin(rad) * radius;
  const half = AVATAR_SIZE / 2;

  return (
    <motion.div
      suppressHydrationWarning
      className="absolute cursor-pointer flex flex-col items-center"
      style={{ top: "50%", left: "50%", marginLeft: -half, marginTop: -half, x, y, width: AVATAR_SIZE }}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      tabIndex={0}
      role="button"
      aria-label={"View " + member.name + "'s profile"}
      whileHover={{ scale: 1.12 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div
        className="rounded-full overflow-hidden flex items-center justify-center font-syne font-extrabold text-base transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.7)]"
        style={{
          width: AVATAR_SIZE,
          height: AVATAR_SIZE,
          border: "2px solid rgba(168,85,247,0.55)",
          background: "linear-gradient(135deg,rgba(168,85,247,0.2),rgba(59,130,246,0.2))",
        }}
      >
        <Image
          src={member.img}
          alt={"Headshot of " + member.name}
          width={AVATAR_SIZE}
          height={AVATAR_SIZE}
          className="w-full h-full object-cover"
          onError={(e) => {
            const t = e.target as HTMLImageElement;
            t.style.display = "none";
            const p = t.parentElement;
            if (p) p.textContent = member.initials;
          }}
        />
      </div>
      <span className="text-[11px] text-slate-300 text-center mt-2 leading-tight whitespace-nowrap font-medium">
        {member.name}
      </span>
      <span className="text-[10px] text-purple-400 text-center leading-tight whitespace-nowrap font-mono">
        {member.role}
      </span>
    </motion.div>
  );
}

export default function TeamOrbit() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const innerD = INNER_R * 2;
  const outerD = OUTER_R * 2;

  return (
    <section id="team" className="relative z-[2] py-32">
      <div className="max-w-[1200px] mx-auto px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <RevealOnScroll>
            <SectionLabel>The Builders</SectionLabel>
          </RevealOnScroll>
          <RevealOnScroll delay={0.05}>
            <h2 className="font-syne font-extrabold text-[clamp(2rem,4vw,3.25rem)] tracking-tight leading-tight mb-4">
              Meet the <span className="text-gradient-purple-cyan">Team</span>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
              A passionate group of engineers, designers, and ML researchers
              building the future of distraction-aware education.
            </p>
          </RevealOnScroll>
        </div>

        {/* Orbit — desktop */}
        <div className="hidden sm:flex justify-center">
          <div className="relative" style={{ width: CONTAINER, height: CONTAINER }}>

            {/* Inner ring */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "50%", left: "50%",
                width: innerD, height: innerD,
                marginLeft: -(innerD / 2), marginTop: -(innerD / 2),
                borderRadius: "50%",
                border: "1.5px dashed rgba(168,85,247,0.55)",
                boxShadow: "0 0 24px rgba(168,85,247,0.15), inset 0 0 24px rgba(168,85,247,0.06)",
                animation: "spinOrbit 25s linear infinite",
              }}
            />

            {/* Outer ring */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "50%", left: "50%",
                width: outerD, height: outerD,
                marginLeft: -(outerD / 2), marginTop: -(outerD / 2),
                borderRadius: "50%",
                border: "1.5px dashed rgba(6,182,212,0.5)",
                boxShadow: "0 0 28px rgba(6,182,212,0.12), inset 0 0 28px rgba(6,182,212,0.05)",
                animation: "spinOrbitRev 40s linear infinite",
              }}
            />

            {/* Center badge */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center font-syne font-extrabold text-xl text-white rounded-full"
              style={{
                width: 90, height: 90,
                background: "linear-gradient(135deg,#a855f7,#3b82f6)",
                boxShadow: "0 0 50px rgba(168,85,247,0.55), 0 0 20px rgba(168,85,247,0.3)",
              }}
            >
              NOVI
            </div>

            {/* Inner members */}
            {INNER_ANGLES.map((angle, i) => (
              <MemberNode
                key={i}
                member={TEAM[i]}
                angle={angle}
                radius={INNER_R}
                onClick={() => setSelectedMember(TEAM[i])}
              />
            ))}

            {/* Outer members */}
            {OUTER_ANGLES.map((angle, i) => (
              <MemberNode
                key={i + 3}
                member={TEAM[i + 3]}
                angle={angle}
                radius={OUTER_R}
                onClick={() => setSelectedMember(TEAM[i + 3])}
              />
            ))}
          </div>
        </div>

        {/* Grid — mobile */}
        <div className="grid grid-cols-2 gap-5 sm:hidden">
          {TEAM.map((member, i) => (
            <RevealOnScroll key={i} delay={i * 0.07}>
              <motion.div
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-center cursor-pointer hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300"
                onClick={() => setSelectedMember(member)}
                tabIndex={0}
                role="button"
                aria-label={"View " + member.name + "'s profile"}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 mx-auto mb-4 border-2 border-purple-500/40 overflow-hidden flex items-center justify-center font-syne font-extrabold text-xl">
                  <Image
                    src={member.img}
                    alt={"Headshot of " + member.name}
                    width={80} height={80}
                    className="w-full h-full object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                  {member.initials}
                </div>
                <div className="font-syne font-bold text-sm">{member.name}</div>
                <div className="font-mono text-[11px] text-cyan-400 mt-1">{member.role}</div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal open={!!selectedMember} onClose={() => setSelectedMember(null)} title={selectedMember?.name}>
        {selectedMember && (
          <div className="text-center">
            <div
              className="rounded-full mx-auto mb-5 overflow-hidden flex items-center justify-center font-syne font-extrabold text-2xl"
              style={{
                width: 100, height: 100,
                background: "linear-gradient(135deg,#a855f7,#3b82f6)",
                border: "2px solid rgba(168,85,247,0.5)",
              }}
            >
              <Image
                src={selectedMember.img}
                alt={"Headshot of " + selectedMember.name}
                width={100} height={100}
                className="w-full h-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
              {selectedMember.initials}
            </div>
            <h3 className="font-syne font-extrabold text-xl mb-1">{selectedMember.name}</h3>
            <p className="font-mono text-xs text-cyan-400 tracking-wider mb-5">{selectedMember.role}</p>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">{selectedMember.bio}</p>
            <div className="flex gap-3 justify-center flex-wrap">
              {selectedMember.socials.map((s) => (
                <a key={s.platform} href={s.url} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-white/10 rounded-lg text-xs text-slate-400 hover:border-purple-500 hover:text-purple-400 transition-colors cursor-pointer">
                  {s.platform}
                </a>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
