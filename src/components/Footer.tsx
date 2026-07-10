import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-subtle py-12 md:py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-body text-xl text-rice tracking-widest">
              作品集
            </p>
            <p className="text-sm text-rice-dark mt-2 font-body">
              数字媒体艺术 / 2026
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:308966902@qq.com"
              className="group flex items-center gap-2 text-sm text-rice-dark hover:text-rice transition-colors duration-300 font-body"
            >
              联系邮箱
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-subtle text-center">
          <p className="text-xs text-rice-dark/50 font-body">
            &copy; {new Date().getFullYear()} 个人作品集. 保留所有权利.
          </p>
        </div>
      </div>
    </footer>
  );
}
