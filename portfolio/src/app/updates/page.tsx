import Header from '../components/Header';
import { updates } from '../../data/updates';

export const metadata = { title: 'Updates • SigmaEazy' };

function fmt(d: string) {
  try { return new Date(d).toLocaleDateString('pt-BR'); } catch { return d; }
}

export default function UpdatesPage() {
  const items = updates.slice().sort((a,b)=> +new Date(b.date) - +new Date(a.date));

  return (
    <>
      <Header />
      <main style={{ padding: 24, maxWidth: 960, margin: '0 auto' }}>
        <h1>📰 Updates</h1>
        <p style={{ color: '#9aa' }}>
          Anotações rápidas sobre o que estou construindo (trading, drop, IA, arquitetura).
        </p>

        <ul style={{ listStyle: 'none', padding: 0, marginTop: 24 }}>
          {items.map(u => (
            <li key={u.slug || u.title} style={{
              margin: '16px 0', padding: 16, border: '1px solid #333',
              borderRadius: 12, background: '#0c0f14'
            }}>
              <div style={{display:'flex',justifyContent:'space-between',gap:12,flexWrap:'wrap'}}>
                <strong style={{fontSize:18}}>{u.title}</strong>
                <span style={{color:'#8aa'}}>{fmt(u.date)}</span>
              </div>
              {u.summary && <p style={{marginTop:8}}>{u.summary}</p>}
              {!!u.tags?.length && (
                <div style={{display:'flex',gap:8,flexWrap:'wrap',marginTop:8}}>
                  {u.tags.map(t => (
                    <span key={t} style={{
                      fontSize:12, padding:'4px 8px', border:'1px solid #334',
                      borderRadius: 999
                    }}>#{t}</span>
                  ))}
                </div>
              )}
              {u.link && (
                <div style={{marginTop:8}}>
                  <a href={u.link} target="_blank" rel="noreferrer">ver detalhes ↗</a>
                </div>
              )}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
