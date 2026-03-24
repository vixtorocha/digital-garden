import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getLocale } from 'next-intl/server';
import { Metadata } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeHighlight from 'rehype-highlight';
import '@/styles/highlight-js/intellij-light.css';

type Props = {
  readonly params: { readonly slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await getLocale();
  const { slug } = await params;

  const markdownWithMeta = fs.readFileSync(path.join('src/posts', `${locale}/${slug}.mdx`), 'utf-8');

  const { data } = matter(markdownWithMeta);

  const ogImageUrl = `/api/og?${new URLSearchParams({
    title: data.title,
    description: data.description || '',
  }).toString()}`;

  return {
    title: data.title,
    description: data.description ?? undefined, // optional
    openGraph: {
      title: data.title,
      description: data.description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
    },
  };
}

const options = {
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
  },
};

export default async function BlogPostPage({ params }: Props) {
  const locale = await getLocale();
  const { slug } = await params;
  const markdownWithMeta = fs.readFileSync(path.join('src/posts', `${locale}/${slug}.mdx`), 'utf-8');
  const { data, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return (
    <div>
      <h1 className='text-4xl font-bold mb-4'>{data.title}</h1>
      <p className='text-gray-600 mb-8'>{data.date}</p>
      <article className='mdx prose lg:prose-xl dark:prose-invert'>
        <MDXRemote {...mdxSource} options={options} source={content} />
      </article>
    </div>
  );
}
