// src/data/projects.ts
export type Project = {
  slug: string;
  name: string;
  stack: string[];
  summary: string;
  href: string;
  status: "MVP" | "em desenvolvimento" | "estável";
  detailsMd?: string; // caminho do MD opcional
};

export const projects: Project[] = [
  {
    slug: "gota-trading",
    name: "Gota-Trading",
    stack: ["Python", "FastAPI", "Firebase", "Binance"],
    summary: "Bot de trading com simulação ao vivo, backtesting e IA evolutiva.",
    href: "https://github.com/sigmaeazy/gota-ecosystem",
    status: "em desenvolvimento",
    detailsMd: "/content/projects/gota-trading.md",
  },
  {
    slug: "gota-drop",
    name: "Gota-Drop",
    stack: ["FastAPI", "React", "MongoDB Atlas"],
    summary:
      "Middleware de dropshipping com fornecedores via API e split de pagamentos.",
    href: "https://github.com/sigmaeazy/gota-ecosystem",
    status: "MVP",
    detailsMd: "/content/projects/gota-drop.md",
  },
];
