export type Category = "duku" | "lan" | "xiazhi";
export type WorkType = "image" | "video";

export interface Work {
  id: string;
  title: string;
  subtitle?: string;
  category: Category;
  type: WorkType;
  thumbnail: string;
  source: string;
  description: string;
  year: string;
  tags: string[];
}

export const categoryLabels: Record<Category, string> = {
  duku: "独库公路",
  lan: "兰",
  xiazhi: "夏至江莲",
};

export const works: Work[] = [
  {
    id: "duku-1",
    title: "独库公路",
    subtitle: "公路旅行主题海报",
    category: "duku",
    type: "image",
    thumbnail: "/images/独库公路海报.png",
    source: "/images/独库公路海报.png",
    description:
      "以新疆独库公路为灵感，展现中国最美公路的壮丽风光。通过大胆的构图与色彩对比，传递自由与探索的精神。",
    year: "2026",
    tags: ["海报设计", "旅行", "风景"],
  },
  {
    id: "lan-1",
    title: "兰",
    subtitle: "动态海报",
    category: "lan",
    type: "video",
    thumbnail: "/videos/兰-动态海报.mp4",
    source: "/videos/兰-动态海报.mp4",
    description:
      "以兰花为意象，融合东方美学与现代动态设计。花瓣的舒展与光影的流转，诠释优雅与坚韧并存的品格。",
    year: "2026",
    tags: ["动态海报", "东方美学", "花卉"],
  },
  {
    id: "lan-2",
    title: "兰·LAN",
    subtitle: "东方美学概念海报",
    category: "lan",
    type: "image",
    thumbnail: "/images/兰-东方美学概念海报.png",
    source: "/images/兰-东方美学概念海报.png",
    description:
      "将传统兰花的意象进行当代视觉转译，以极简构图与留白，呈现东方美学的空灵与意境。",
    year: "2026",
    tags: ["概念海报", "东方美学", "极简"],
  },

  {
    id: "xiazhi-2",
    title: "夏至·江莲",
    subtitle: "节气主题海报",
    category: "xiazhi",
    type: "image",
    thumbnail: "/images/夏至江莲-节气海报.png",
    source: "/images/夏至江莲-节气海报.png",
    description:
      "传统二十四节气之夏至，以荷塘月色为视觉核心，融合中国水墨意境与现代版式设计。",
    year: "2026",
    tags: ["海报设计", "节气", "水墨"],
  },
];

export const featuredWorks = ["duku-1", "lan-2", "xiazhi-2"];
