

---


## 3) `docs/architecture.md` (mermaid + mapa de módulos)


```md
# Arquitetura — Gota Ecosystem


```mermaid
flowchart LR
A[Cliente/Browser] -- Portfolio/Docs --> P[Next.js (GitHub Pages)]
A -- Painel Trading/Drop --> API[(FastAPI Gateway)]
subgraph Trading
T1[Motor de Sinais\n(ML + Indicadores)]
T2[Executor\nSimulado/Real]
T3[Binance/MT5]
end
subgraph Dropshipping
D1[Conector Fornecedores\n(API)]
D2[Marketplace Core]
D3[Pagamentos Split]
end
subgraph SigmaEazy
S1[IA Conteúdo/Moderação]
S2[Fórum]
end
API --> T1 --> T2 --> T3
API --> D1 --> D2 --> D3
API --> S1 --> S2
subgraph Dados
DB1[(MongoDB/Firestore)]
BQ[(BigQuery/ClickHouse)]
ST[(Storage/DO Spaces)]
end
T1 --> DB1
D2 --> DB1
S2 --> DB1
DB1 --> BQ
P -. links .-> docs