"use client";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Toast({ show, message = "You're on the list! We'll be in touch soon." }: { show: boolean; message?: string }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          className="fixed bottom-8 right-8 z-[300] flex items-center gap-3 bg-[#0a0a12] border border-green-500/40 rounded-xl px-6 py-4 text-sm shadow-[0_0_30px_rgba(34,197,94,0.2)]"
          role="alert"
          aria-live="polite"
        >
          <CheckCircle size={18} className="text-green-400 flex-shrink-0" />
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
