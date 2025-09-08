// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import { projects } from "../data/projects"; // já temos esse arquivo .ts

export const metadata = {
  title: "Diego G. — Portfólio",
  description:
    "Portfólio do Diego — Engenharia de Computação, Dev/Arquiteto. Ecossistema Gota (Trading, Drop, SigmaEazy).",
};

export default function Page() {
  return (
    <>
      <Header />

      {/* HERO */}
      <main
        style={{
          padding: "32px 24px 80px",
          maxWidth: 1040,
          margin: "0 auto",
        }}
      >
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "120px 1fr",
            gap: 24,
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              overflow: "hidden",
              border: "1px solid #333",
              boxShadow: "0 4px 24px rgba(0,0,0,.35)",
            }}
          >
            <Image
              src="/avatar.png" // coloque seu arquivo em public/avatar.png
              alt="Foto de perfil do Diego"
              width={120}
              height={120}
              priority
            />
          </div>

          <div>
            <h1 style={{ margin: 0, fontSize: 32, lineHeight: 1.2 }}>
              Diego G. — Portfólio
            </h1>
            <p style={{ margin: "8px 0 0", color: "#9aa0a6" }}>
              Eng. de Computação • Dev/Arquiteto • Criador do{" "}
              <strong>Gota Ecosystem</strong> (Trading, Drop, SigmaEazy).
            </p>

            {/* Tags rápidas */}
            <div style={{ display: "flex", gap: 8, marginTop: 14, flexWrap: "wrap" }}>
              {["TypeScript", "React/Next.js", "Python/FastAPI", "Firebase/Cloud", "DevOps/GitHub"].map(
                (t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: 12,
                      padding: "6px 10px",
                      border: "1px solid #333",
                      borderRadius: 999,
                      background: "rgba(255,255,255,0.02)",
                    }}
                  >
                    {t}
                  </span>
                )
              )}
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", gap: 12, marginTop: 18, flexWrap: "wrap" }}>
              <Link
                href="/projetos"
                style={{
                  padding: "10px 14px",
                  borderRadius: 10,
                  border: "1px solid #333",
                  background: "linear-gradient(180deg,rgba(255,255,255,.04),rgba(255,255,255,.02))",
                }}
              >
                Ver projetos
              </Link>
              <Link
                href="/curriculo"
                style={{
                  padding: "10px 14px",
                  borderRadius: 10,
                  border: "1px solid #333",
                }}
              >
                Currículo
              </Link>
              <Link
                href="/certificados"
                style={{
                  padding: "10px 14px",
                  borderRadius: 10,
                  border: "1px solid #333",
                }}
              >
                Certificados
              </Link>
              <a
                href="https://www.linkedin.com/in/diego-santos-5503a3194/"
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: "10px 14px",
                  borderRadius: 10,
                  border: "1px solid #333",
                }}
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/sigmaeazy"
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: "10px 14px",
                  borderRadius: 10,
                  border: "1px solid #333",
                }}
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </section>

        {/* LINHA */}
        <hr style={{ borderColor: "#222", margin: "28px 0 18px" }} />

        {/* PROJETOS EM DESTAQUE */}
        <section>
          <h2 style={{ margin: "0 0 12px", fontSize: 22 }}>Destaques recentes</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 14,
            }}
          >
            {projects.slice(0, 4).map((p) => (
              <article
                key={p.name}
                style={{
                  border: "1px solid #333",
                  borderRadius: 16,
                  padding: 14,
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                  <h3 style={{ margin: 0, fontSize: 18 }}>{p.name}</h3>
                  <span
                    style={{
                      fontSize: 12,
                      opacity: 0.7,
                      border: "1px solid #333",
                      padding: "2px 8px",
                      borderRadius: 999,
                    }}
                  >
                    {p.status}
                  </span>
                </div>

                <p style={{ margin: "8px 0 10px", color: "#9aa0a6" }}>{p.summary}</p>

                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {p.stack?.map((s) => (
                    <span
                      key={s}
                      style={{
                        fontSize: 11,
                        border: "1px solid #333",
                        padding: "4px 8px",
                        borderRadius: 999,
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div style={{ marginTop: 12 }}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontSize: 13,
                      border: "1px solid #333",
                      padding: "8px 10px",
                      borderRadius: 10,
                      display: "inline-block",
                    }}
                  >
                    Abrir repositório ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* ASSINATURA FIXA */}
      <div
        style={{
          position: "fixed",
          right: 16,
          bottom: 12,
          fontSize: 12,
          letterSpacing: 1,
          textTransform: "lowercase",
          opacity: 0.35,
          userSelect: "none",
          pointerEvents: "none",
        }}
        aria-hidden
      >
        diegogsantos
      </div>
    </>
  );
}
