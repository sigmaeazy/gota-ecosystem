import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Project } from '@/data/projects';
import Markdown from '@/app/components/Markdown'; // O componente que renderiza Markdown

// Função para buscar os dados de UM projeto específico pelo seu slug (nome do arquivo)
const getProjectData = (slug: string): { project: Project; content: string } | null => {
  const filePath = path.join(process.cwd(), 'public/content/projects', `${slug}.md`);

  // Verifica se o arquivo para o slug solicitado realmente existe
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents); // Separa os metadados (data) do conteúdo principal (content)

  const project = {
    slug: data.slug || slug,
    name: data.name,
    summary: data.summary,
    stack: data.stack ? String(data.stack).split(',').map((item: string) => item.trim()) : [],
    href: data.href,
    status: data.status,
    detailsMd: content,
  } as Project;

  return { project, content };
};

// Função para gerar as páginas estáticas no momento do build
export async function generateStaticParams() {
  const projectsDirectory = path.join(process.cwd(), 'public/content/projects');
  if (!fs.existsSync(projectsDirectory)) return [];
  
  const fileNames = fs.readdirSync(projectsDirectory);
  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.md$/, ''),
  }));
}

// O componente da página
export default function ProjectDetailsPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const projectData = getProjectData(slug);

  if (!projectData) {
    return <div style={{ textAlign: 'center', marginTop: '4rem' }}><h1>404</h1><p>Projeto não encontrado.</p></div>;
  }

  const { project, content } = projectData;

  return (
    <article className="card" style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '3rem', color: 'var(--primary)', borderBottom: '1px solid var(--border)', paddingBottom: '1rem', marginBottom: '1rem' }}>
        {project.name}
      </h1>
      <p style={{ marginTop: '0.5rem', color: '#aaa', fontSize: '1.2rem' }}>
        {project.summary}
      </p>
      
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', margin: '1.5rem 0' }}>
        {project.stack.map((tech) => (
          <span key={tech} className="tag">
            {tech}
          </span>
        ))}
      </div>

      {/* Aqui a mágica acontece: renderizamos o conteúdo do Markdown */}
      <div className="prose" style={{ color: '#ddd', lineHeight: '1.8' }}>
        <Markdown content={content} />
      </div>
    </article>
  );
}