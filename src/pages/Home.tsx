import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { works, featuredWorks, categoryLabels } from "@/data/works";
import WorkCard from "@/components/WorkCard";
import Lightbox from "@/components/Lightbox";
import type { Work } from "@/data/works";

export default function Home() {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  const featured = works.filter((w) => featuredWorks.includes(w.id));

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div ref={containerRef} className="noise-overlay">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain vignette">
        <motion.div
          style={{ y, scale, opacity }}
          className="absolute inset-0 z-0"
        >
          <video
            ref={videoRef}
            src="/videos/兰-动态海报.mp4"
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? "opacity-40" : "opacity-0"
            }`}
            muted
            loop
            playsInline
            preload="auto"
            onLoadedData={() => setVideoLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/50 to-ink" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-xs md:text-sm tracking-superwide text-rice-dark uppercase font-body mb-6">
              2026 &middot; 大一作品 &middot; 数字媒体艺术
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-body font-bold text-5xl md:text-7xl lg:text-8xl text-rice tracking-tight leading-tight"
          >
            视觉叙事者
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-6 text-lg md:text-xl text-rice-dark font-body max-w-xl mx-auto leading-relaxed"
          >
            以东方美学为根基，探索传统与现代的视觉对话
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/gallery"
              className="group inline-flex items-center gap-3 px-8 py-3 border border-rice/30 text-rice text-sm tracking-wider uppercase font-body hover:bg-rice hover:text-ink transition-all duration-400"
            >
              浏览作品
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 px-8 py-3 text-rice-dark text-sm tracking-wider uppercase font-body hover:text-rice transition-colors duration-300"
            >
              了解更多
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5 text-rice-dark" />
          </motion.div>
        </motion.div>

        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-ink to-transparent z-10" />
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-ink to-transparent z-10" />
      </section>

      {/* Featured Works Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-end justify-between mb-16"
          >
            <div>
              <p className="text-xs tracking-superwide text-rice uppercase font-body mb-3">
                Selected Works
              </p>
              <h2 className="font-body font-semibold text-3xl md:text-4xl lg:text-5xl text-rice">
                精选作品
              </h2>
            </div>
            <Link
              to="/gallery"
              className="hidden md:inline-flex items-center gap-2 text-sm text-rice-dark hover:text-rice transition-colors duration-300 font-body group"
            >
              查看全部
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {featured.map((work, index) => (
              <WorkCard
                key={work.id}
                work={work}
                index={index}
                onClick={() => setSelectedWork(work)}
              />
            ))}
          </div>

          <div className="mt-10 text-center md:hidden">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-sm text-rice-dark hover:text-rice transition-colors duration-300 font-body"
            >
              查看全部作品
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-24 md:py-32 bg-ink-light/30">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-superwide text-rice uppercase font-body mb-3">
              Themes
            </p>
            <h2 className="font-body font-semibold text-3xl md:text-4xl text-rice">
              创作主题
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {(["duku", "lan", "xiazhi"] as const).map((cat, i) => (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to={`/gallery?category=${cat}`}
                  className="group block p-8 md:p-12 border border-subtle hover:border-rice/20 transition-all duration-500 hover:bg-ink-light relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-rice/5 to-transparent"
                    animate={{ opacity: [0, 0.5, 0] }}
                    transition={{ repeat: Infinity, duration: 5 }}
                  />
                  <span className="relative text-4xl md:text-5xl font-serif text-rice-dark/20 group-hover:text-rice/30 transition-colors duration-500">
                    0{i + 1}
                  </span>
                  <h3 className="relative font-serif text-2xl text-rice mt-4 group-hover:text-rice transition-colors duration-300">
                    {categoryLabels[cat]}
                  </h3>
                  <p className="relative text-sm text-rice-dark mt-4 font-body leading-relaxed">
                    {cat === "duku" && "以公路旅行为线索，捕捉风景中的自由与辽阔"}
                    {cat === "lan" && "借兰花之意象，诠释东方美学的当代视觉表达"}
                    {cat === "xiazhi" && "以二十四节气为核，融合传统水墨与现代设计"}
                  </p>
                  <div className="relative mt-6 flex items-center gap-2 text-sm text-rice-dark group-hover:text-rice transition-colors duration-300 font-body">
                    探索作品
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <ArrowRight size={14} />
                    </motion.span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reading Band - Editorial Statement */}
      <section className="reading-band py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs tracking-superwide uppercase font-body mb-6" style={{ color: "#000000" }}>
              Design Statement
            </p>
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl leading-relaxed">
              "设计是文化与时代的对话。
              <br />
              每一张海报，都是一次与传统美学的深度交谈，
              也是对未来视觉语言的勇敢探索。"
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-px" style={{ background: "#000000" }} />
              <p className="text-sm font-body tracking-wider" style={{ color: "rgba(10,10,10,0.5)" }}>
                数字媒体艺术 / 2026
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 md:py-32 border-t border-subtle">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {[
              { number: "4", label: "作品数量" },
              { number: "3", label: "创作主题" },
              { number: "1", label: "设计师" },
              { number: "2026", label: "创作年份" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <motion.p
                  className="font-serif text-4xl md:text-5xl text-rice"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
                >
                  {stat.number}
                </motion.p>
                <p className="text-sm text-rice-dark mt-2 font-body tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox work={selectedWork} onClose={() => setSelectedWork(null)} />
    </div>
  );
}
