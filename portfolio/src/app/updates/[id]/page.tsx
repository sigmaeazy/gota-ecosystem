import Header from '../../components/Header';
import { updates } from '../../../data/updates';

export async function generateStaticParams() {
  return updates.map((u) => ({ id: u.slug ?? '' }));
}


type Update = {
  slug: string;
  title: string;
  date: string;
  tags?: string[];
  summary?: string;
};

export default function UpdateDetail({ params }: { params: { id: string } }) {
  const post = (updates as Update[]).find((u) => u.slug === params.id);
  if (!post) {
    return (
      <>
        <Header />
        <main style={{ padding: 24 }}><h1>Post não encontrado.</h1></main>
      </>
    );
  }
  return (
    <>
      <Header />
      <main style={{ padding: 24, maxWidth: 860, margin: '0 auto' }}>
        <h1>{post.title}</h1>
        <div style={{ fontSize: 12, color: '#aaa', marginBottom: 16 }}>
          {post.date} · {post.tags?.join(' · ')}
        </div>
        {post.summary && <p style={{ lineHeight: 1.8 }}>{post.summary}</p>}
      </main>
    </>
  );
}
