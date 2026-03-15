import fs from 'fs'; // File system module to read files
import path from 'path'; // Path module to handle file paths
import matter from 'gray-matter';
import { getLocale, getTranslations } from 'next-intl/server';

type FrontMatter = {
  title: string;
  date: string;
  description: string;
};

type Post = {
  slug: string;
  data: FrontMatter;
};

async function getPosts(locale: string): Promise<Post[]> {
  const postsPath = path.join('src/posts', locale); // Include locale in the path

  if (!fs.existsSync(postsPath)) {
    return []; // Return an empty array if the locale folder doesn't exist
  }

  const files = fs.readdirSync(postsPath);
  return files.map((filename) => {
    const slug = filename.replace('.mdx', '');
    const markdownWithMeta = fs.readFileSync(path.join(postsPath, filename), 'utf-8');
    const { data } = matter(markdownWithMeta);
    return { slug, data: data as FrontMatter };
  });
}

export default async function Home() {
  const locale = await getLocale();
  const posts = await getPosts(locale);
  const t = await getTranslations('home');

  return (
    <div>
      <h1 className='text-xl font-medium mb-8 mt-8 text-rose-500'>BLOG</h1>
      <div>
        {posts.map((post: Post) => (
          <div key={post.slug} className='mb-6'>
            <a href={`/blog/${post.slug}`} className='hover:underline mb-2 block decoration-yellow-500 decoration-2'>
              <h2 className='text-xl mb-0 mt-0 font-semibold'>{post.data.title}</h2>
            </a>
            <p className='text-gray-900 mb-2 text-base'>{post.data.description}</p>
            <a href={`/blog/${post.slug}`} className='font-medium hover:underline decoration-yellow-500 decoration-2'>
              {t('readMore')} -&gt;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
