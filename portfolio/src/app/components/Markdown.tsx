'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type Props = { source: string };

export default function Markdown({ source }: Props) {
  return (
    <article className="prose prose-invert max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {source}
      </ReactMarkdown>
    </article>
  );
}
