type P = { title: string; summary: string; stack: string[]; url: string; status: string };
export default function ProjectCard({ title, summary, stack, url, status }: P) {
  return (
    <article style={{ padding: 16, border: '1px solid #333', borderRadius: 12 }}>
      <h3 style={{ marginBottom: 8 }}>{title}</h3>
      <p>{summary}</p>
      <p><strong>Stack:</strong> {stack.join(' • ')}</p>
      <p><strong>Status:</strong> {status}</p>
      <a href={url} target="_blank">Acessar</a>
    </article>
  );
}
