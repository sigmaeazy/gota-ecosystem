import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";

type Cert = {
  title: string;     // Título (ex: "Google Cloud Digital Leader")
  issuer: string;    // Emissor (ex: "Google")
  date: string;      // "2025-08" ou "2025"
  file?: string;     // Caminho para PDF dentro de /public/certificates
  url?: string;      // Link público (Credly, Coursera, etc)
};

export const metadata: Metadata = {
  title: "Certificados | Portfólio",
  description: "Lista de certificados com comprovações em PDF e links.",
};

function loadIndex(): Cert[] {
  try {
    const p = path.join(process.cwd(), "public", "certificates", "index.json");
    if (!fs.existsSync(p)) return [];
    const raw = fs.readFileSync(p, "utf-8");
    const data = JSON.parse(raw) as Cert[];
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export default function CertificadosPage() {
  const certs = loadIndex();

  return (
    <main style={{ padding: 24, maxWidth: 940, margin: "0 auto" }}>
      <h1 style={{ marginBottom: 8 }}>Certificados</h1>
      <p style={{ color: "#777", marginBottom: 24 }}>
        Esta lista é gerada automaticamente a partir de PDFs/links enviados por Issue.
      </p>

      {certs.length === 0 ? (
        <div style={{ padding: 16, border: "1px dashed #666", borderRadius: 12 }}>
          <strong>Nenhum certificado publicado ainda.</strong>
          <p style={{ marginTop: 8 }}>
            Abra uma Issue com o título do certificado, emissor e anexe o PDF/URL.
            O bot cria um PR e atualiza este índice.
          </p>
        </div>
      ) : (
        <ul style={{ paddingLeft: 0, listStyle: "none" }}>
          {certs.map((c, i) => (
            <li
              key={i}
              style={{
                margin: "14px 0",
                padding: 16,
                border: "1px solid #333",
                borderRadius: 12,
                display: "flex",
                justifyContent: "space-between",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <div>
                <div style={{ fontWeight: 600 }}>{c.title}</div>
                <div style={{ color: "#aaa" }}>
                  {c.issuer} {c.date ? `(${c.date})` : ""}
                </div>
              </div>
              <div style={{ display: "flex", gap: 12 }}>
                {c.file && (
                  <a href={c.file} target="_blank" rel="noreferrer">
                    Abrir PDF
                  </a>
                )}
                {c.url && (
                  <a href={c.url} target="_blank" rel="noreferrer">
                    Ver credencial
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}

      <hr style={{ margin: "24px 0", opacity: 0.2 }} />

      <section>
        <h2 style={{ marginBottom: 8 }}>Como adicionar um novo certificado</h2>
        <ol style={{ lineHeight: 1.7 }}>
          <li>Acesse <code>Issues → New issue → “Add certificate”</code>.</li>
          <li>Preencha título, emissor, data e anexe o PDF (ou informe a URL).</li>
          <li>Envie a Issue — o workflow cria um PR com:
            <ul>
              <li>Upload do PDF em <code>/public/certificates</code></li>
              <li>Atualização do <code>index.json</code></li>
            </ul>
          </li>
          <li>Ao dar merge, a página é atualizada automaticamente.</li>
        </ol>
      </section>
    </main>
  );
}
