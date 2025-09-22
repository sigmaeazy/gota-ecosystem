import { Project } from '@/data/projects';
import Link from 'next/link';

type Props = {
  project: Project;
};

// Objeto para mapear cada status a uma cor e fundo específicos
const statusStyles: { [key: string]: React.CSSProperties } = {
  "Em Desenvolvimento": {
    color: '#fde047', // Amarelo
    backgroundColor: 'rgba(253, 224, 71, 0.1)',
    borderColor: 'rgba(253, 224, 71, 0.2)',
  },
  "Estável": {
    color: '#86efac', // Verde
    backgroundColor: 'rgba(134, 239, 172, 0.1)',
    borderColor: 'rgba(134, 239, 172, 0.2)',
  },
  "MVP": {
    color: '#93c5fd', // Azul
    backgroundColor: 'rgba(147, 197, 253, 0.1)',
    borderColor: 'rgba(147, 197, 253, 0.2)',
  },
};

export default function ProjectCard({ project }: Props) {
  // Pega o estilo correspondente ao status do projeto, com um padrão seguro
  const currentStatusStyle = statusStyles[project.status] || statusStyles['Em Desenvolvimento'];

  return (
    // 1. Usamos a classe .card para o container principal
    <article className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{project.name}</h3>
        <span 
          style={{
            fontSize: '0.75rem',
            padding: '4px 10px',
            borderRadius: '999px',
            fontWeight: '600',
            border: '1px solid',
            ...currentStatusStyle,
          }}
        >
          {project.status}
        </span>
      </div>

      <p style={{ marginTop: '0.75rem', color: '#aaa', flexGrow: 1, minHeight: '60px' }}>
        {project.summary}
      </p>

      {/* 2. Usamos a classe .tag para cada item da stack */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: 'auto', paddingTop: '1rem' }}>
        {project.stack.map((tech) => (
          <span key={tech} className="tag">
            {tech}
          </span>
        ))}
      </div>
      
      {/* 3. Estilizando os links para parecerem botões */}
      <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--border)', paddingTop: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Link 
          href={`/projetos/${project.slug}`} 
          style={{ 
            backgroundColor: 'var(--primary)', 
            color: 'var(--background)',
            padding: '8px 16px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 'bold',
            transition: 'opacity 0.2s ease',
          }}
          onMouseOver={e => e.currentTarget.style.opacity = '0.9'}
          onMouseOut={e => e.currentTarget.style.opacity = '1'}
        >
          Ver Detalhes →
        </Link>
        {project.href && (
          <a href={project.href} target="_blank" rel="noopener noreferrer">
            Repositório ↗
          </a>
        )}
      </div>
    </article>
  );
}