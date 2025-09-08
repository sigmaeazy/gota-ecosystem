import Header from './components/Header';
import Card from './components/Card';

export default function Page() {
  return (
    <>
      <Header />
      <main style={{ padding: 16 }}>
        <Card title="Bem-vindo ao portfólio">
          <p>Ecossistema Gota — Trading, Drop e SigmaEazy.</p>
        </Card>
      </main>
    </>
  );
}
