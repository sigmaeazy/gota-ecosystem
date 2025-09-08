# Gota-Trading (visão de arquitetura)

**Stack**: Python, FastAPI, Firebase, BigQuery (roadmap), Binance

```mermaid
flowchart LR
  Strategy-->Signal
  Signal-->Orders
  Orders--sim/real-->Binance
  Orders-->Firestore[(Firestore)]
  Firestore-->Dashboard
