import Card from '../../components/Card';
import data from '../../../certificates/list.json';

type Cert = { title: string; org: string; link?: string; year?: string };

export default function Certificates() {
  const certs = (data as Cert[]) || [];
  return (
    <Card title="Certificados">
      {certs.length === 0 && <p>Adicione certificados em <code>/certificates/list.json</code>.</p>}
      <ul>
        {certs.map((c, i) => (
          <li key={i} style={{ marginBottom: 8 }}>
            <b>{c.title}</b> — {c.org} {c.year ? `(${c.year})` : ''}
            {c.link && <> — <a href={c.link} target="_blank">ver</a></>}
          </li>
        ))}
      </ul>
    </Card>
  );
}
