"use client";

import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-4xl bg-black aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-black/60 text-white rounded-full hover:bg-black/90 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              className="w-full h-full border-0"
              src="https://www.youtube.com/embed/5_XSYA90o84?autoplay=1"
              title="HIFI Traffic Data Tech Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
