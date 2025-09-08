
import path from "node:path";
import * as fs from "node:fs/promises";
import Link from "next/link";
import Header from "../../components/Header";
import { projects } from "../../../data/projects";

async function loadMd(p?: string) {
  if (!p) return null;
  if (!p.startsWith("/content/")) return null;
  const file = path.join(process.cwd(), "public", p);
  try {
    return await fs.readFile(file, "utf8");
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) {
    return (
      <>
        <Header />
        <main style={{ padding: 24 }}>
          <p>Projeto não encontrado.</p>
          <Link href="/projetos">← Voltar</Link>
        </main>
      </>
    );
  }
  const md = await loadMd(project.detailsMd);

  return (
    <>
      <Header />
      <main style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
        <Link href="/projetos">← Voltar</Link>
        <h1 style={{ marginTop: 12 }}>{project.name}</h1>
        <p style={{ color: "#9aa0a6" }}>{project.summary}</p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
          {project.stack.map((s) => (
            <span key={s} style={{ border: "1px solid #333", padding: "4px 8px", borderRadius: 999 }}>
              {s}
            </span>
          ))}
          <span
            style={{ marginLeft: "auto", border: "1px solid #333", padding: "4px 8px", borderRadius: 999 }}
          >
            {project.status}
          </span>
        </div>

        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          style={{ display: "inline-block", border: "1px solid #333", padding: "8px 12px", borderRadius: 10 }}
        >
          Repositório ↗
        </a>

        {/* Render MD puro (simples); mermaid será ativado via script no /diagramas */}
        {md && (
          <article
            style={{ marginTop: 18, borderTop: "1px solid #222", paddingTop: 12 }}
            dangerouslySetInnerHTML={{ __html: md
              .replace(/^# (.*$)/gim, "<h2>$1</h2>")
              .replace(/^## (.*$)/gim, "<h3>$1</h3>")
              .replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>")
              .replace(/\n$/gim, "<br/>")
            }}
          />
        )}
        {!md && <p style={{ marginTop: 18, opacity: .7 }}>Sem documento detalhado (MD).</p>}
      </main>
    </>
  );
}
