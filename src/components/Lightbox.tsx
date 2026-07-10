import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";
import type { Work } from "@/data/works";

interface LightboxProps {
  work: Work | null;
  onClose: () => void;
}

export default function Lightbox({ work, onClose }: LightboxProps) {
  useEffect(() => {
    if (work) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [work]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {work && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-ink/95 backdrop-blur-xl" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative z-10 w-full max-w-6xl max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-ink-light/80 text-rice hover:text-rice transition-colors duration-300"
              aria-label="关闭"
            >
              <X size={20} />
            </button>

            <div className="grid md:grid-cols-2 gap-6 md:gap-10">
              <div className="relative bg-ink-light rounded-sm overflow-hidden">
                {work.type === "video" ? (
                  <div className="relative aspect-[3/4]">
                    <video
                      src={work.source}
                      className="w-full h-full object-cover"
                      controls
                      autoPlay
                      playsInline
                    />
                  </div>
                ) : (
                  <img
                    src={work.source}
                    alt={work.title}
                    className="w-full h-auto object-contain"
                  />
                )}
              </div>

              <div className="flex flex-col justify-center py-4 md:py-8">
                <span className="text-xs tracking-widest text-rice uppercase font-body">
                  {work.tags.join(" / ")}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-rice mt-3">
                  {work.title}
                </h2>
                {work.subtitle && (
                  <p className="text-lg text-rice-dark mt-2 font-body">
                    {work.subtitle}
                  </p>
                )}
                <div className="w-12 h-px bg-rice/30 mt-6 mb-6" />
                <p className="text-base text-rice-dark leading-relaxed font-body">
                  {work.description}
                </p>
                <p className="text-sm text-rice-dark/60 mt-6 font-body">
                  {work.year}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
