import Header from '../components/Header';
import { certificates } from '../../data/certificates';

export const metadata = { title: 'Certificados • SigmaEazy' };

export default function CertificadosPage() {
  const items = certificates.slice().sort((a,b) => b.year - a.year);

  return (
    <>
      <Header />
      <main style={{ padding: 24, maxWidth: 960, margin: '0 auto' }}>
        <h1>📜 Certificados</h1>
        <p style={{ color: '#9aa' }}>Esta página é gerada a partir de um módulo de dados versionado no repositório.</p>

        <ul style={{ listStyle: 'none', padding: 0, marginTop: 24 }}>
          {items.map(c => (
            <li key={`${c.name}-${c.year}`} style={{
              margin: '12px 0', padding: 16, border: '1px solid #333',
              borderRadius: 12, background: '#0c0f14'
            }}>
              <div style={{display:'flex',justifyContent:'space-between',gap:12,flexWrap:'wrap'}}>
                <strong>{c.name}</strong>
                <span style={{color:'#8aa'}}>{c.issuer} • {c.year}</span>
              </div>
              <div style={{marginTop:8}}>
                <a href={c.url} target="_blank" rel="noreferrer">ver credencial ↗</a>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
