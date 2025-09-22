import { Inter } from 'next/font/google'; // Importa a função da fonte
import Header from './components/Header';
import './global.css';

// Configura a fonte 'Inter' com os pesos que vamos usar
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans', // Conecta a fonte com a nossa variável CSS
});

export const metadata = {
  title: 'SigmaEazy Dev | Portfólio',
  description: 'Portfólio de um Arquiteto e Engenheiro de Software',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // A classe da fonte é aplicada diretamente na tag <html>
    <html lang="pt-BR" className={inter.variable}>
      <body>
        <Header />
        {/* Adicionado um container para centralizar o conteúdo */}
        <main style={{ maxWidth: '1024px', margin: '0 auto', padding: '2rem' }}>
          {children}
        </main>
      </body>
    </html>
  );
}