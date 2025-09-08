import { ReactNode } from 'react';

export default function Card({ title, children, footer }: {
  title: string; children: ReactNode; footer?: ReactNode;
}) {
  return (
    <section className="card">
      <h2 style={{ marginBottom: 8 }}>{title}</h2>
      <div>{children}</div>
      {footer && <div style={{ marginTop: 12, opacity: .9 }}>{footer}</div>}
    </section>
  );
}
