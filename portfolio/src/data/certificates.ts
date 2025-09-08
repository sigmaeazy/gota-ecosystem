export type Certificate = {
  name: string;
  issuer: string;
  year: number;
  url: string;
};

export const certificates: Certificate[] = [
  {
    name: "Google Cloud Fundamentals",
    issuer: "Google Cloud Skills Boost",
    year: 2025,
    url: "https://…"
  },
  {
    name: "GitHub Foundations",
    issuer: "GitHub",
    year: 2025,
    url: "https://…"
  }
];
