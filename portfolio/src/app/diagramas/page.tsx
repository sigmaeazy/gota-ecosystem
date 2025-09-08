// src/app/diagramas/page.tsx
import Header from "../components/Header";
import dynamic from "next/dynamic";

const MermaidClient = dynamic(() => import("./MermaidClient"), { ssr: false });

export const metadata = { title: "Diagramas • Diego G." };

const DIAGRAMS = [
`flowchart LR
  User-->Frontend
  Frontend-->API
  API-->Firestore[(Firestore)]
  API-->BigQuery[(BigQuery)]
  API-->Binance[(Binance)]`,
`sequenceDiagram
  participant U as User
  participant FE as Frontend
  participant BE as FastAPI
  U->>FE: Confirma ordem real
  FE->>BE: /orders/execute-real
  BE->>Binance: Place Order
  BE-->>FE: status + id
  FE-->>U: notifica`
];

export default function DiagramasPage() {
  return (
    <>
      <Header />
      <main style={{ padding: 24, maxWidth: 960, margin: "0 auto" }}>
        <h1>Diagramas do Ecossistema</h1>
        <p style={{ color: "#9aa0a6" }}>
          Render mermaid local (client-side). Cole novos blocos no código.
        </p>

        <MermaidClient />
        <div style={{ display: "grid", gap: 16 }}>
          {DIAGRAMS.map((code, i) => (
            <pre
              key={i}
              className="mermaid"
              style={{
                border: "1px solid #333",
                borderRadius: 12,
                padding: 12,
                overflowX: "auto",
              }}
            >
              {code}
            </pre>
          ))}
        </div>
      </main>
    </>
  );
}
