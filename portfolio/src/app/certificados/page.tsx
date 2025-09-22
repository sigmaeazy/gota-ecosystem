import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Certificate } from '@/data/certificates';
import CertificateCard from '../components/CertificateCard';

// Função para ler os certificados da pasta de conteúdo do CMS
const getCertificates = (): Certificate[] => {
  const certsDirectory = path.join(process.cwd(), 'src/data/certificates');
  if (!fs.existsSync(certsDirectory)) return [];

  const fileNames = fs.readdirSync(certsDirectory);

  const allCertsData = fileNames
    .filter(file => file.endsWith('.md'))
    .map((fileName) => {
      const fullPath = path.join(certsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        title: data.title,
        issuer: data.issuer,
        date: new Date(data.date).toISOString(),
        url: data.url,
        image: data.image,
      } as Certificate;
    });

  // Ordena os certificados do mais recente para o mais antigo
  return allCertsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export default function CertificadosPage() {
  const certificates = getCertificates();

  return (
    <section>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--primary)' }}>
        Certificados e Conquistas
      </h1>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {certificates.length > 0 ? (
          certificates.map((cert) => (
            <CertificateCard key={cert.title} certificate={cert} />
          ))
        ) : (
          <p>Nenhum certificado adicionado ainda. Adicione no painel de administração.</p>
        )}
      </div>
    </section>
  );
}