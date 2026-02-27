"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";
import Modal from "@/components/ui/Modal";
import { TEAM, type TeamMember } from "@/lib/data";

// Angles for each orbit ring member
const INNER_RING = [0, 120, 240]; // indices 0,1,2 → 110px radius
const OUTER_RING = [60, 180, 300]; // indices 3,4,5 → 180px radius

interface NodeProps {
  member: TeamMember;
  angle: number;
  radius: number;
  onClick: () => void;
}

function MemberNode({ member, angle, radius, onClick }: NodeProps) {
  const rad = (angle * Math.PI) / 180;
  const x = Math.cos(rad) * radius;
  const y = Math.sin(rad) * radius;

  return (
    <motion.div
      className="absolute cursor-pointer flex flex-col items-center"
      style={{
        top: "50%",
        left: "50%",
        marginLeft: -36,
        marginTop: -36,
        x,
        y,
        width: 72,
      }}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      tabIndex={0}
      role="button"
      aria-label={`View ${member.name}'s profile`}
      whileHover={{ scale: 1.12 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="w-[72px] h-[72px] rounded-full border-2 border-white/15 overflow-hidden bg-white/[0.06] flex items-center justify-center font-syne font-extrabold text-sm hover:border-purple hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300">
        <Image
          src={member.img}
          alt={`Professional headshot of ${member.name}, ${member.role} — university student in formal attire with neutral background`}
          width={72}
          height={72}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
            const parent = target.parentElement;
            if (parent) parent.textContent = member.initials;
          }}
        />
      </div>
      <span className="text-[10px] text-muted text-center mt-2 leading-tight whitespace-nowrap">
        {member.name}
      </span>
    </motion.div>
  );
}

export default function TeamOrbit() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

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
            <p className="text-muted text-lg max-w-xl mx-auto leading-relaxed">
              A passionate group of engineers, designers, and ML researchers
              building the future of distraction-aware education.
            </p>
          </RevealOnScroll>
        </div>

        {/* Orbit layout — desktop */}
        <div
          className="hidden sm:block"
          aria-label="Team members in radial orbit layout"
        >
          <div className="relative mx-auto" style={{ width: 440, height: 440 }}>
            {/* Rings */}
            <div
              className="orbit-ring"
              style={{ width: 220, height: 220 }}
              aria-hidden="true"
            />
            <div
              className="orbit-ring orbit-ring-reverse"
              style={{ width: 360, height: 360, "--orbit-speed": "40s" } as React.CSSProperties}
              aria-hidden="true"
            />

            {/* Center logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-purple to-blue flex items-center justify-center font-syne font-extrabold text-xl shadow-[0_0_40px_rgba(168,85,247,0.5)] z-10">
              NOVI
            </div>

            {/* Inner ring: first 3 members */}
            {INNER_RING.map((angle, i) => (
              <MemberNode
                key={i}
                member={TEAM[i]}
                angle={angle}
                radius={110}
                onClick={() => setSelectedMember(TEAM[i])}
              />
            ))}

            {/* Outer ring: members 3-5 */}
            {OUTER_RING.map((angle, i) => (
              <MemberNode
                key={i + 3}
                member={TEAM[i + 3]}
                angle={angle}
                radius={180}
                onClick={() => setSelectedMember(TEAM[i + 3])}
              />
            ))}
          </div>
        </div>

        {/* Grid fallback — mobile */}
        <div className="grid grid-cols-2 gap-5 sm:hidden">
          {TEAM.map((member, i) => (
            <RevealOnScroll key={i} delay={i * 0.07}>
              <motion.div
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-center cursor-pointer hover:border-purple/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300"
                onClick={() => setSelectedMember(member)}
                onKeyDown={(e) => e.key === "Enter" && setSelectedMember(member)}
                tabIndex={0}
                role="button"
                aria-label={`View ${member.name}'s profile`}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple to-blue mx-auto mb-4 border-2 border-purple/40 overflow-hidden flex items-center justify-center font-syne font-extrabold text-xl">
                  <Image
                    src={member.img}
                    alt={`Professional headshot of ${member.name}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  {member.initials}
                </div>
                <div className="font-syne font-bold text-sm">{member.name}</div>
                <div className="font-mono text-[11px] text-cyan mt-1">{member.role}</div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      {/* Member modal */}
      <Modal
        open={!!selectedMember}
        onClose={() => setSelectedMember(null)}
        title={selectedMember?.name}
      >
        {selectedMember && (
          <div className="text-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple to-blue mx-auto mb-5 border-2 border-purple/40 overflow-hidden flex items-center justify-center font-syne font-extrabold text-2xl">
              <Image
                src={selectedMember.img}
                alt={`Professional headshot of ${selectedMember.name}`}
                width={96}
                height={96}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              {selectedMember.initials}
            </div>
            <h3 className="font-syne font-extrabold text-xl mb-1">
              {selectedMember.name}
            </h3>
            <p className="font-mono text-xs text-cyan tracking-wider mb-5">
              {selectedMember.role}
            </p>
            <p className="text-muted text-sm leading-relaxed mb-6">
              {selectedMember.bio}
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              {selectedMember.socials.map((s) => (
                <span
                  key={s}
                  className="px-4 py-2 border border-white/10 rounded-lg text-xs text-muted hover:border-purple hover:text-purple transition-colors cursor-pointer"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
