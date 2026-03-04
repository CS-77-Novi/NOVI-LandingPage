"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center gap-6"
          role="status"
          aria-label="Loading NOVI"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-syne text-5xl font-extrabold text-grad-purple-cyan tracking-[-0.04em]"
          >
            NOVI
          </motion.div>

          <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <div className="loader-bar-anim h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-400" />
          </div>

          <p className="font-mono text-xs tracking-[0.15em] uppercase text-slate-500">
            Initializing attention engine…
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
