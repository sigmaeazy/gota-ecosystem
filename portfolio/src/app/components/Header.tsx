// src/app/components/Header.tsx
'use client';
import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ padding: 16, borderBottom: '1px solid #333' }}>
      <nav style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
        <Link href="/">🏠 Início</Link>
        <Link href="/curriculo">👤 Currículo</Link>
        <Link href="/certificados">📜 Certificados</Link>
        <Link href="/projetos">🧩 Projetos</Link>
        <Link href="/forum">💬 Fórum</Link>
        <Link href="/admin">⚙️ Admin</Link>
      </nav>
    </header>
  );
}
