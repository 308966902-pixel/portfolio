import { motion } from "framer-motion";
import { Mail, MapPin, Palette, Film, PenTool, Layers } from "lucide-react";

const skills = [
  { icon: Palette, label: "海报设计", desc: "静态视觉与版式设计" },
  { icon: Film, label: "动态海报", desc: "视频与动态视觉表达" },
  { icon: PenTool, label: "品牌视觉", desc: "视觉识别系统设计" },
  { icon: Layers, label: "概念设计", desc: "创意概念与视觉实验" },
];

export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-24 noise-overlay">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <p className="text-xs tracking-superwide text-rice uppercase font-body mb-3">
            About
          </p>
          <h1 className="font-body font-semibold text-4xl md:text-5xl lg:text-6xl text-rice leading-tight">
            关于我
          </h1>
        </motion.div>

        {/* Main Content */}
        <div className="mt-16 grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Portrait area - using a work as visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <div className="aspect-[3/4] bg-ink-light rounded-sm overflow-hidden">
                <img
                  src="/images/兰-东方美学概念海报.png"
                  alt="代表作"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-rice/15 rounded-sm" />
              <div className="absolute -top-6 -left-6 w-24 h-24 border border-rice/10 rounded-sm" />
            </div>
          </motion.div>

          {/* Right: Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <div className="border-l-2 border-rice/30 pl-8">
              <h2 className="font-body font-semibold text-2xl md:text-3xl text-rice">
                大一数字媒体艺术学生
              </h2>
              <p className="text-sm text-rice-dark mt-2 font-body tracking-wider">
                2026年作品 | 专注东方美学与当代视觉表达
              </p>
            </div>

            <div className="mt-10 space-y-5 font-body text-rice-dark leading-relaxed">
              <p>
                我是一名数字媒体艺术专业的大一学生，这些作品是我在2026年完成的课程作业与个人探索。
                以东方美学为根基，我尝试在每一张海报中找到传统意境与现代视觉语言之间的平衡点。
              </p>
              <p>
                从独库公路的辽阔风景，到兰花的空灵姿态，再到夏至节气的诗意流转——
                这些作品记录了我作为设计初学者对视觉叙事的持续探索。
              </p>
              <p>
                动态海报是我近期重点探索的方向。通过 motion 的引入，静态的画面获得了
                时间的维度，情感的表达也因此更加丰富。
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:308966902@qq.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-subtle text-sm text-rice-dark hover:text-rice hover:border-rice/30 transition-all duration-300 font-body"
              >
                <Mail size={14} />
                联系合作
              </a>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-32 pt-16 border-t border-subtle"
        >
          <p className="text-xs tracking-superwide text-rice uppercase font-body mb-3">
            Skills
          </p>
          <h2 className="font-body font-semibold text-3xl text-rice mb-12">专业能力</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-6 border border-subtle hover:border-rice/20 hover:bg-ink-light transition-all duration-500"
              >
                <skill.icon className="w-6 h-6 text-rice/60 group-hover:text-rice transition-colors duration-300" />
                <h3 className="font-serif text-lg text-rice mt-4">
                  {skill.label}
                </h3>
                <p className="text-sm text-rice-dark mt-2 font-body">
                  {skill.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-32 text-center"
        >
          <p className="text-xs tracking-superwide text-rice uppercase font-body mb-4">
            Contact
          </p>
          <h2 className="font-body font-semibold text-3xl md:text-4xl text-rice">
            开启合作
          </h2>
          <p className="text-rice-dark mt-4 max-w-md mx-auto font-body leading-relaxed">
            如果您对海报设计、动态视觉或品牌视觉有兴趣，欢迎随时联系我探讨合作可能。
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:308966902@qq.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-rice text-rice text-sm tracking-wider font-body hover:bg-rice-dim transition-colors duration-300"
            >
              <Mail size={16} />
              发送邮件
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
