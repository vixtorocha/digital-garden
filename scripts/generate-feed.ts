import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import matter from 'gray-matter';
import { Feed } from 'feed';
import { marked } from 'marked';

dotenv.config();

const siteUrl =
  process.env.SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://yourblog.com');
const normalizedSiteUrl = siteUrl.replace(/\/$/, '');
const authorName = 'João Victor Rocha';
const locales = ['en', 'pt'];

// Parse frontmatter from MDX files using gray-matter for robust YAML parsing
function parseFrontmatter(content: string): {
  title?: string;
  date?: Date;
  description?: string;
  body?: string;
} {
  const { data, content: body } = matter(content);
  return {
    title: typeof data.title === 'string' ? data.title.trim() : undefined,
    date: data.date ? new Date(String(data.date)) : undefined,
    description: typeof data.description === 'string' ? data.description.trim() : undefined,
    body: body.trim(),
  };
}

// Read posts from file system
function getPosts(postsDir: string): Array<{
  title: string;
  slug: string;
  description: string;
  date: Date;
  content: string;
}> {
  const files = fs.readdirSync(postsDir).filter((file) => file.endsWith('.mdx'));

  const posts = files
    .map((file) => {
      const filePath = path.join(postsDir, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const metadata = parseFrontmatter(content);

      return {
        title: metadata.title || file.replace('.mdx', ''),
        slug: file.replace('.mdx', ''),
        description: metadata.description || '',
        date: metadata.date || new Date(0),
        content: marked.parse(metadata.body || '') as string,
      };
    })
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  return posts;
}

// Generate feeds for each locale
locales.forEach((locale) => {
  const postsDir = path.join(process.cwd(), 'src/posts', locale);
  const posts = getPosts(postsDir);

  const localeLabel = locale === 'en' ? 'English' : 'Português';

  const feed = new Feed({
    title: `João Victor Rocha's Blog (${localeLabel})`,
    description: 'Backend, cloud and architecture posts',
    id: `${normalizedSiteUrl}/${locale}`,
    link: `${normalizedSiteUrl}/${locale}`,
    language: locale,
    favicon: `${normalizedSiteUrl}/favicon.png`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    updated: posts[0]?.date || new Date(),
    generator: 'Next.js',
    feedLinks: {
      atom: `${normalizedSiteUrl}/feed-${locale}.xml`,
    },
    author: {
      name: authorName,
    },
  });

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `${normalizedSiteUrl}/blog/${post.slug}`,
      link: `${normalizedSiteUrl}/blog/${post.slug}`,
      description: post.description,
      content: post.content,
      date: post.date,
      author: [
        {
          name: authorName,
        },
      ],
    });
  });

  fs.writeFileSync(path.join(process.cwd(), `public/feed-${locale}.xml`), feed.atom1());
  console.log(`Generated ${locale} feed: public/feed-${locale}.xml`);
});
