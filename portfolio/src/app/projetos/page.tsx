import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ProjectCard from '../components/ProjectCard';
import { Project } from '@/data/projects';

// A função que lê dinamicamente os projetos que o CMS cria
const getProjects = (): Project[] => {
  const projectsDirectory = path.join(process.cwd(), 'public/content/projects');

  if (!fs.existsSync(projectsDirectory)) {
    console.warn("Diretório de projetos não encontrado. Crie 'public/content/projects' e adicione projetos via CMS.");
    return [];
  }

  const fileNames = fs.readdirSync(projectsDirectory);

  const allProjectsData = fileNames
    .filter((fileName) => fileName.endsWith('.md')) // Garante que estamos lendo apenas arquivos markdown
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug: data.slug || slug,
        name: data.name,
        summary: data.summary,
        stack: data.stack ? String(data.stack).split(',').map((item: string) => item.trim()) : [],
        href: data.href,
        status: data.status,
        detailsMd: content,
      } as Project;
    });

  return allProjectsData;
};

// A página que renderiza a lista
export default function ProjetosPage() {
  const projects = getProjects();

  return (
    <section>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>
        Projetos
      </h1>
      <p style={{ marginBottom: '2.5rem', color: '#aaa' }}>
        Módulos do Gota Ecosystem que estou construindo via CMS.
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
        {projects.length > 0 ? (
           projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))
        ) : (
          <p>Nenhum projeto encontrado. Adicione um novo projeto no painel de administração para vê-lo aqui.</p>
        )}
      </div>
    </section>
  );
}