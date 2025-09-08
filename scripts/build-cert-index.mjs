// Gera portfolio/public/certificates/index.json a partir dos .md
import { promises as fs } from 'fs';
import { join } from 'path';

const CONTENT_DIR = 'portfolio/content/certificates';
const OUT_FILE    = 'portfolio/public/certificates/index.json';

function parseFrontmatter(text) {
  // Parse bem simples: entre --- ... ---
  const m = text.match(/^---\s*([\s\S]*?)\s*---/);
  if (!m) return {};
  const lines = m[1].split('\n').map(l => l.trim()).filter(Boolean);
  const obj = {};
  for (const line of lines) {
    const idx = line.indexOf(':');
    if (idx > -1) {
      const k = line.slice(0, idx).trim();
      let v = line.slice(idx + 1).trim();
      v = v.replace(/^"(.*)"$/, '$1'); // remove aspas
      obj[k] = v;
    }
  }
  return obj;
}

async function main() {
  let items = [];
  try {
    const files = await fs.readdir(CONTENT_DIR);
    for (const f of files) {
      if (!f.endsWith('.md')) continue;
      const raw = await fs.readFile(join(CONTENT_DIR, f), 'utf8');
      const meta = parseFrontmatter(raw);
      if (meta.title && meta.file) {
        items.push({
          title: meta.title,
          issuer: meta.issuer || '',
          date: meta.date || '',
          file: meta.file,
          url: meta.url || ''
        });
      }
    }
    // ordem: mais novo primeiro (pela data)
    items.sort((a,b) => (b.date||'').localeCompare(a.date||''));
  } catch (e) {
    // se a pasta não existir ainda, tudo bem
    items = [];
  }
  await fs.mkdir('portfolio/public/certificates', { recursive: true });
  await fs.writeFile(OUT_FILE, JSON.stringify(items, null, 2));
  console.log(`Wrote ${OUT_FILE} with ${items.length} item(s).`);
}

main();
