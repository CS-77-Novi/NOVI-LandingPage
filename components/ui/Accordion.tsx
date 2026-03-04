"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionItem {
  q: string;
  a: string;
}

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-3 max-w-3xl">
      {items.map((item, i) => (
        <div
          key={i}
          className="bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden"
        >
          <button
            className="w-full text-left px-6 py-5 flex items-center justify-between font-semibold text-[0.95rem] text-slate-100 hover:text-purple-400 transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            aria-controls={`faq-answer-${i}`}
          >
            {item.q}
            <ChevronDown
              size={16}
              className={`text-slate-500 flex-shrink-0 ml-4 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
            />
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                id={`faq-answer-${i}`}
                role="region"
                key="answer"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-5 text-slate-400 text-sm leading-relaxed">{item.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
