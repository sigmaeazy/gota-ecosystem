// src/app/updates/page.tsx
import Header from "../components/Header";

type GhIssue = {
  id: number;
  title: string;
  html_url: string;
  created_at: string;
  user: { login: string };
  labels: { name: string }[];
};

async function getUpdates(): Promise<GhIssue[]> {
  const r = await fetch(
    "https://api.github.com/repos/sigmaeazy/gota-ecosystem/issues?labels=update&state=open",
    { next: { revalidate: 300 } } // 5 min cache
  );
  if (!r.ok) return [];
  return r.json();
}

export const metadata = { title: "Updates • Diego G." };

export default async function UpdatesPage() {
  const items = await getUpdates();

  return (
    <>
      <Header />
      <main style={{ padding: 24, maxWidth: 860, margin: "0 auto" }}>
        <h1>Updates (timeline)</h1>
        <p style={{ color: "#9aa0a6" }}>
          Postado via Issues com label <code>update</code>.
        </p>
        <ul style={{ listStyle: "none", padding: 0, marginTop: 16 }}>
          {items.map((i) => (
            <li
              key={i.id}
              style={{ border: "1px solid #333", borderRadius: 12, padding: 12, marginBottom: 10 }}
            >
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <strong>{i.title}</strong>
                <span style={{ fontSize: 12, opacity: 0.6 }}>
                  • {new Date(i.created_at).toLocaleDateString("pt-BR")}
                </span>
              </div>
              <div style={{ marginTop: 6 }}>
                <a href={i.html_url} target="_blank" rel="noreferrer">
                  ver issue ↗
                </a>
              </div>
            </li>
          ))}
        </ul>
        {items.length === 0 && <p>Nenhum update ainda. Abra uma Issue “update”.</p>}
      </main>
    </>
  );
}
