import Image from 'next/image';
import Header from '../components/Header';
import Markdown from '../components/Markdown';
import fs from 'fs/promises';
import path from 'path';

export const metadata = { title: 'Currículo • Diego Santos' };

export default async function CurriculoPage() {
  // o app roda dentro de /portfolio; o ABOUT.me.md está na raiz do repo
  const repoRoot = path.join(process.cwd(), '..');
  const aboutPath = path.join(repoRoot, 'ABOUT.me.md');

  let md = '# Currículo\n(arquivo ABOUT.me.md não encontrado)';
  try {
    md = await fs.readFile(aboutPath, 'utf-8');
  } catch (e) {
    // mantém fallback
  }

  return (
    <>
      <Header />
      <main style={{ padding: 24, maxWidth: 900, margin: '0 auto' }}>
        {/* Cabeçalho com avatar menor */}
        <section style={{display:'grid', gridTemplateColumns:'120px 1fr', gap:16, alignItems:'center', marginBottom:16}}>
          <div className="avatar">
            {/* use o arquivo que você subiu no /public: avatar.jpg (ou .png) */}
            <Image src="/avatar.png" alt="Foto - Diego Santos" width={112} height={112} priority />
          </div>
          <div>
            <h1 style={{margin:0}}>Diego da Silva Pereira Santos</h1>
            <p style={{margin:'6px 0 0', color:'var(--muted)'}}>
              Engenharia de Computação • Desenvolvedor & Arquiteto de Software
            </p>
            <div>
              <span className="tag">TypeScript</span>
              <span className="tag">React/Next.js</span>
              <span className="tag">Python/FastAPI</span>
              <span className="tag">Firebase/Nuvem</span>
              <span className="tag">DevOps/GitHub</span>
            </div>
          </div>
        </section>

        {/* Markdown do ABOUT.me.md */}
        <Markdown source={md} />
      </main>
    </>
  );
}
