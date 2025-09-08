export type Update = {
  slug?: string;
  title: string;
  date: string;      // ISO ex: "2025-09-08"
  tags?: string[];
  summary?: string;
  link?: string;
};

export const updates: Update[] = [
  {
    slug: "setup-portfolio",
    title: "Portfolio Next.js + GitHub Pages online",
    date: "2025-09-08",
    tags: ["portfolio","pages","ci"],
    summary: "Estrutura inicial no ar (certificados, projetos, fórum)."
  },
  {
    slug: "trading-diagrama",
    title: "Diagrama de arquitetura Gota-Trading",
    date: "2025-09-07",
    tags: ["trading","arquitetura"],
    summary: "Sinal neural, módulos e fluxo de simulação visual."
  }
];
