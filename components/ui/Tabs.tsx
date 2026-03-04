"use client";
import { useState } from "react";
import { motion } from "framer-motion";

interface Tab {
  label: string;
  content: React.ReactNode;
}

export default function Tabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div
        className="flex gap-1 bg-white/[0.04] border border-white/10 rounded-xl p-1 w-fit mb-12"
        role="tablist"
      >
        {tabs.map((tab, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={active === i}
            aria-controls={`tabpanel-${i}`}
            onClick={() => setActive(i)}
            className={`relative px-6 py-[10px] rounded-[10px] text-sm font-semibold transition-colors duration-200 ${
              active === i ? "text-white" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            {active === i && (
              <motion.div
                layoutId="tab-bg"
                className="absolute inset-0 rounded-[10px] bg-gradient-to-br from-purple-500 to-blue-500"
                style={{ zIndex: -1 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>

      {tabs.map((tab, i) => (
        <div
          key={i}
          id={`tabpanel-${i}`}
          role="tabpanel"
          hidden={active !== i}
        >
          {active === i && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              {tab.content}
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}
