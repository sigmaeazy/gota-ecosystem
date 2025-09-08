// src/app/diagramas/MermaidClient.tsx
"use client";
import { useEffect } from "react";
import mermaid from "mermaid";

export default function MermaidClient() {
  useEffect(() => {
    mermaid.initialize({ startOnLoad: true, theme: "dark" });
    mermaid.run();
  }, []);
  return null;
}
