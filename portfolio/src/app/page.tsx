// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import { projects } from "../data/projects";

export const metadata = {
  title: "Diego G. — Portfólio",
  description:
    "Portfólio do Diego — Engenharia de Computação, Dev/Arquiteto. Ecossistema Gota (Trading, Drop, SigmaEazy).",
};

export default function Page() {
  return (
    <>
      <Header />

      <main style={{ padding: "32px 24px 80px", maxWidth: 1040, margin: "0 auto" }}>
        {/* HERO */}
        <section style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 24, alignItems: "center" }}>
          <div className="avatar">
            <Image
              src="/avatar.jpg"   // altere para /avatar.png caso seu arquivo seja .png
              alt="Foto de perfil do Diego"
              width={112}
              height={112}
              priority
            />
          </div>

          <div>
            <h1 style={{ margin: 0, fontSize: 32, lineHeight: 1.2 }}>Diego G. — Portfólio</h1>
            <p style={{ margin: "8px 0 0", color: "var(--muted)" }}>
              Eng. de Computação • Dev/Arquiteto • Criador do <strong>Gota Ecosystem</strong> (Trading, Drop, SigmaEazy).
            </p>

            {/* Tags rápidas */}
            <div style={{ display: "flex", gap: 8, marginTop: 14, flexWrap: "wrap" }}>
              {["TypeScript","React/Next.js","Python/FastAPI","Firebase/Cloud","DevOps/GitHub"].map(t => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", gap: 12, marginTop: 18, flexWrap: "wrap" }}>
              <Link href="/projetos" className="btn">Ver projetos</Link>
              <Link href="/curriculo" className="btn">Currículo</Link>
              <Link href="/certificados" className="btn">Certificados</Link>
              <a className="btn" href="https://www.linkedin.com/in/diego-santos-5503a3194/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a className="btn" href="https://github.com/sigmaeazy" target="_blank" rel="noreferrer">GitHub ↗</a>
            </div>
          </div>
        </section>

        <hr className="hr" />

        {/* Sobre o site */}
        <section className="card">
          <h3 style={{margin:'0 0 8px'}}>Sobre este portfólio</h3>
          <p style={{margin:0, color:'var(--muted)'}}>
            Construído com <strong>Next.js (App Router)</strong>, publicado no <strong>GitHub Pages</strong> via
            <strong> GitHub Actions</strong>. Os dados (projetos/certificados) são versionados no repositório.
          </p>
        </section>

        {/* PROJETOS EM DESTAQUE */}
        <section>
          <h2 style={{ margin: "0 0 12px", fontSize: 22 }}>Destaques recentes</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 }}>
            {projects.slice(0, 4).map((p) => (
              <article key={p.name} className="card" style={{padding:14}}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                  <h3 style={{ margin: 0, fontSize: 18 }}>{p.name}</h3>
                  <span className="tag" style={{opacity:.7}}>{p.status}</span>
                </div>

                <p style={{ margin: "8px 0 10px", color: "var(--muted)" }}>{p.summary}</p>

                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {p.stack?.map((s) => <span className="tag" key={s}>{s}</span>)}
                </div>

                <div style={{ marginTop: 12 }}>
                  <a className="btn" href={p.href} target="_blank" rel="noreferrer">Abrir repositório ↗</a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* assinatura fixa */}
      <div
        style={{
          position: "fixed", right: 16, bottom: 12, fontSize: 12, letterSpacing: 1,
          textTransform: "lowercase", opacity: 0.35, userSelect: "none", pointerEvents: "none",
        }}
        aria-hidden
      >
        diegogsantos
      </div>
    </>
  );
}
