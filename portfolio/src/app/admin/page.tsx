import Header from '../components/Header';

export const metadata = { title: 'Admin • SigmaEazy' };

export default function AdminPage() {
  return (
    <>
      <Header />
      <main style={{ padding: 24, maxWidth: 960, margin: '0 auto' }}>
        <h1>⚙️ Admin (atalhos rápidos)</h1>
        <p style={{ color: '#9aa' }}>Use estes links para publicar/editar conteúdo direto no GitHub (sem backend).</p>

        <h2 style={{ marginTop: 24 }}>📜 Certificados</h2>
        <ul>
          <li>
            <a
              href="https://github.com/sigmaeazy/gota-ecosystem/edit/main/portfolio/src/data/certificates.ts"
              target="_blank"
              rel="noreferrer"
            >
              Adicionar/editar certificados (TS) ↗
            </a>
          </li>
          <li>
            <a
              href="https://github.com/sigmaeazy/gota-ecosystem/issues/new?template=feature_request.md&title=Novo+Certificado"
              target="_blank"
              rel="noreferrer"
            >
              Abrir issue “Novo Certificado” (rascunho) ↗
            </a>
          </li>
        </ul>

        <h2 style={{ marginTop: 16 }}>🧩 Projetos</h2>
        <ul>
          <li>
            <a
              href="https://github.com/sigmaeazy/gota-ecosystem/edit/main/portfolio/src/data/projects.ts"
              target="_blank"
              rel="noreferrer"
            >
              Adicionar/editar projetos (TS) ↗
            </a>
          </li>
          <li>
            <a
              href="https://github.com/sigmaeazy/gota-ecosystem/issues/new?template=feature_request.md&title=Novo+Projeto"
              target="_blank"
              rel="noreferrer"
            >
              Abrir issue “Novo Projeto” (rascunho) ↗
            </a>
          </li>
        </ul>

        <h2 style={{ marginTop: 16 }}>📰 Updates (Posts do trabalho)</h2>
        <ul>
          <li>
            <a
              href="https://github.com/sigmaeazy/gota-ecosystem/edit/main/portfolio/src/data/updates.ts"
              target="_blank"
              rel="noreferrer"
            >
              Publicar/editar updates (TS) ↗
            </a>
          </li>
          <li>
            <a
              href="https://github.com/sigmaeazy/gota-ecosystem/issues/new?template=feature_request.md&title=Novo+Update"
              target="_blank"
              rel="noreferrer"
            >
              Abrir issue “Novo Update” (rascunho) ↗
            </a>
          </li>
        </ul>

        <h2 style={{ marginTop: 16 }}>💬 Fórum</h2>
        <ul>
          <li>
            <a href="https://github.com/sigmaeazy/gota-ecosystem/discussions/new/choose" target="_blank" rel="noreferrer">
              Novo tópico (GitHub Discussions) ↗
            </a>
          </li>
          <li>
            <a href="https://github.com/sigmaeazy/gota-ecosystem/discussions" target="_blank" rel="noreferrer">
              Ver fórum (Discussões) ↗
            </a>
          </li>
        </ul>

        <h2 style={{ marginTop: 16 }}>📦 Uploads/arquivos grandes</h2>
        <ul>
          <li>
            <a href="https://github.com/sigmaeazy/gota-ecosystem/releases/new" target="_blank" rel="noreferrer">
              Publicar PDFs/ZIPs grandes via Releases ↗
            </a>
          </li>
        </ul>

        <p style={{ color: '#999', marginTop: 12 }}>
          Próximo passo: autenticação e painel de upload (quando migrarmos para um bucket).
        </p>
      </main>
    </>
  );
}
