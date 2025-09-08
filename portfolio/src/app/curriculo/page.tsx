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
        <Markdown source={md} />
      </main>
    </>
  );
}
