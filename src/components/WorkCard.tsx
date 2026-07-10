import { useState } from "react";
import { motion } from "framer-motion";
import { Play, ArrowUpRight } from "lucide-react";
import type { Work } from "@/data/works";

interface WorkCardProps {
  work: Work;
  index: number;
  onClick: () => void;
  large?: boolean;
}

export default function WorkCard({ work, index, onClick, large = false }: WorkCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.08, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      className={`group cursor-pointer ${large ? "md:col-span-1" : ""}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-ink-light rounded-sm">
        <motion.div
          className={`relative ${large ? "aspect-[4/5]" : "aspect-[3/4]"}`}
          animate={{
            rotateY: isHovered ? 3 : 0,
            rotateX: isHovered ? -2 : 0,
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {work.type === "video" ? (
            <>
              <video
                src={work.thumbnail}
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
                preload="metadata"
                autoPlay={isHovered}
              />
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-ink/40"
                animate={{ opacity: isHovered ? 1 : 0.3 }}
                transition={{ duration: 0.4 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-rice/10 backdrop-blur-md flex items-center justify-center border border-rice/20"
                  animate={{ scale: isHovered ? 1.1 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Play className="w-7 h-7 text-rice ml-1" />
                </motion.div>
              </motion.div>
            </>
          ) : (
            <motion.img
              src={work.thumbnail}
              alt={work.title}
              className="w-full h-full object-cover"
              animate={{ scale: isHovered ? 1.08 : 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              loading="lazy"
            />
          )}

          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />

          <motion.div
            className="absolute bottom-0 left-0 right-0 p-6"
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs tracking-widest text-rice uppercase font-body">
              {work.tags[0]}
            </span>
            <h3 className="font-serif text-xl text-rice mt-2">{work.title}</h3>
            {work.subtitle && (
              <p className="text-sm text-rice-dark mt-1 font-body">{work.subtitle}</p>
            )}
          </motion.div>

          <motion.div
            className="absolute top-4 right-4"
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-10 h-10 rounded-full bg-ink/60 backdrop-blur-sm flex items-center justify-center border border-rice/10">
              <ArrowUpRight className="w-4 h-4 text-rice" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="mt-5 px-1">
        <h3 className="font-serif text-lg text-rice transition-colors duration-300 group-hover:text-rice">
          {work.title}
        </h3>
        <div className="flex items-center justify-between mt-1">
          <p className="text-sm text-rice-dark font-body">{work.year}</p>
          <div className="flex gap-2">
            {work.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-xs text-rice-dark/60 font-body px-2 py-0.5 border border-rice/10 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
