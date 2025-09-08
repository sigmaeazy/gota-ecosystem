import Card from '../../components/Card';

export default function Diagramas() {
  return (
    <Card title="Diagramas de Arquitetura (Mermaid)">
      <p>Os diagramas oficiais ficam em <code>/docs/architecture.md</code>.</p>
      <p>
        Dica: podemos embutir Mermaid via client-side mais adiante; por ora, o link
        aponta para os documentos do repositório.
      </p>
      <a href="https://github.com/sigmaeazy/gota-ecosystem/blob/main/docs/architecture.md" target="_blank">
        Abrir architecture.md
      </a>
    </Card>
  );
}
