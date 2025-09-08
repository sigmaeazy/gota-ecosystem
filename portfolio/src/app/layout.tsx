import './global.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Diego G. — Portfolio & Gota Ecosystem',
  description: 'Currículo, projetos (Gota Trading/Drop/IA) e fórum SigmaEazy',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
