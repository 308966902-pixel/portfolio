import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { works, categoryLabels, type Category } from "@/data/works";
import WorkCard from "@/components/WorkCard";
import Lightbox from "@/components/Lightbox";
import type { Work } from "@/data/works";

const categories: (Category | "all")[] = ["all", "duku", "lan", "xiazhi"];

export default function Gallery() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<Category | "all">(
    (searchParams.get("category") as Category) || "all"
  );
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const cat = searchParams.get("category") as Category;
    if (cat && categories.includes(cat)) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  const handleCategoryChange = (cat: Category | "all") => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveCategory(cat);
      if (cat === "all") {
        setSearchParams({});
      } else {
        setSearchParams({ category: cat });
      }
      setIsAnimating(false);
    }, 200);
  };

  const filteredWorks =
    activeCategory === "all"
      ? works
      : works.filter((w) => w.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <div className="min-h-screen pt-32 pb-24 noise-overlay">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs tracking-superwide text-rice uppercase font-body mb-3">
            Portfolio
          </p>
          <h1 className="font-body font-semibold text-4xl md:text-5xl text-rice">
            作品画廊
          </h1>
          <p className="text-base text-rice-dark mt-4 max-w-lg font-body leading-relaxed">
            涵盖公路旅行、东方花卉、节气文化三大主题的海报与动态视觉设计作品
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-16"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`px-6 py-2.5 text-sm tracking-wider font-body rounded-full transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-rice text-rice shadow-lg shadow-rice/10"
                  : "bg-transparent text-rice-dark border border-subtle hover:border-rice/30 hover:text-rice"
              }`}
            >
              {cat === "all" ? "全部" : categoryLabels[cat]}
            </motion.button>
          ))}
        </motion.div>

        {/* Works Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-6 md:gap-8"
          >
            {filteredWorks.map((work, index) => (
              <WorkCard
                key={work.id}
                work={work}
                index={index}
                onClick={() => setSelectedWork(work)}
                large={index % 3 === 0}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredWorks.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24"
          >
            <p className="text-rice-dark font-body">该分类下暂无作品</p>
          </motion.div>
        )}

        {/* Stats */}
        {activeCategory === "all" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 pt-12 border-t border-subtle"
          >
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              <div className="text-center">
                <p className="font-serif text-3xl text-rice">{works.length}</p>
                <p className="text-xs text-rice-dark mt-1 font-body tracking-wider">
                  总作品数
                </p>
              </div>
              <div className="w-px h-12 bg-subtle hidden md:block" />
              <div className="text-center">
                <p className="font-serif text-3xl text-rice">{categories.length - 1}</p>
                <p className="text-xs text-rice-dark mt-1 font-body tracking-wider">
                  创作主题
                </p>
              </div>
              <div className="w-px h-12 bg-subtle hidden md:block" />
              <div className="text-center">
                <p className="font-serif text-3xl text-rice">2026</p>
                <p className="text-xs text-rice-dark mt-1 font-body tracking-wider">
                  创作年份
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <Lightbox work={selectedWork} onClose={() => setSelectedWork(null)} />
    </div>
  );
}
