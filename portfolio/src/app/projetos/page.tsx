import Header from '../components/Header';
import { projects } from '../../data/projects';

export const metadata = { title: 'Projetos • SigmaEazy' };

export default function ProjetosPage() {
  return (
    <>
      <Header />
      <main style={{ padding: 24, maxWidth: 960, margin: '0 auto' }}>
        <h1>🧩 Projetos</h1>
        <p style={{ color: '#9aa' }}>Módulos do Gota Ecosystem que estou construindo.</p>

        <ul style={{ listStyle: 'none', padding: 0, marginTop: 24 }}>
          {projects.map((p) => (
            <li
              key={p.name}
              style={{
                margin: '12px 0',
                padding: 16,
                border: '1px solid #333',
                borderRadius: 12,
                background: '#0c0f14',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
                <strong style={{ fontSize: 18 }}>{p.name}</strong>
                <span style={{ color: '#8aa' }}>{p.status}</span>
              </div>

              <p style={{ marginTop: 8 }}>{p.summary}</p>

              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 8 }}>
                {p.stack.map((s) => (
                  <span
                    key={s}
                    style={{
                      fontSize: 12,
                      padding: '4px 8px',
                      border: '1px solid #334',
                      borderRadius: 999,
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div style={{ marginTop: 8 }}>
                <a href={p.href} target="_blank" rel="noreferrer">
                  ver repositório ↗
                </a>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
