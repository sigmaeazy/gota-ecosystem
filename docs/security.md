# Segurança & Segredos
- Use **GitHub Secrets** (primário) e **GCP Secret Manager** (backup).
- Chaves: `BINANCE_KEY`, `OPENROUTER_KEY`, `GEMINI_KEY`, `STRIPE_KEY`, `SENTRY_DSN`, `MONGO_URI`, `FIREBASE_JSON` (base64).
- Princípio do menor privilégio (IAM/RBAC).
- Rotação de credenciais a cada 90 dias.
- Auditoria com Sentry/DataDog + alertas de anomalia.