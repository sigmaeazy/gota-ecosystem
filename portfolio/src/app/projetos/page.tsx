import projects from '../../data/projects.json';
import ProjectCard from '../components/ProjectCard';

export default function ProjetosPage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Projetos</h1>
      <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        {projects.map((p) => (
          <ProjectCard key={p.slug} {...p} />
        ))}
      </div>
    </main>
  );
}
