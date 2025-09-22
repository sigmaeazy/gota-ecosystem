import { Certificate } from '@/data/certificates'; // Usaremos o tipo que você já tem

type Props = {
  certificate: Certificate;
};

export default function CertificateCard({ certificate }: Props) {
  return (
    <a 
      href={certificate.url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="card"
      style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--primary)' }}>{certificate.title}</h3>
        <span className="tag">{certificate.issuer}</span>
      </div>
      <p style={{ margin: '8px 0 0', color: '#aaa' }}>
        Emitido em: {new Date(certificate.date).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long' })}
      </p>
    </a>
  );
}