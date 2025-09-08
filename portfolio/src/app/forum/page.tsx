import Header from '../components/Header';

export const metadata = { title: 'Fórum • SigmaEazy' };

export default function ForumPage() {
  return (
    <>
      <Header />
      <main style={{ padding: 24, maxWidth: 960, margin: '0 auto' }}>
        <h1>💬 Fórum SigmaEazy</h1>
        <p>Enquanto o fórum (Discourse/NodeBB) não sobe, use as discussões do GitHub:</p>
        <ul>
          <li><a href="https://github.com/seuusuario/gota-ecosystem/discussions" target="_blank" rel="noreferrer">
            Acessar Discussões do Projeto ↗
          </a></li>
        </ul>
        <p style={{ marginTop: 12 }}>
          Quando abrirmos o fórum próprio, este link passará a apontar para <code>forum.sigmaeazy.dev</code>.
        </p>
      </main>
    </>
  );
}
