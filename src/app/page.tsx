import fs from "fs"; // File system module to read files
import path from "path"; // Path module to handle file paths
import matter from "gray-matter"; // Library to parse Markdown front matter

type FrontMatter = {
  title: string;
  date: string;
};

type Post = {
  slug: string;
  data: FrontMatter;
};

async function getPosts(): Promise<Post[]> {
  const files = fs.readdirSync(path.join("src/posts"));
  return files.map((filename) => {
    const slug = filename.replace(".mdx", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("src/posts", filename),
      "utf-8"
    );
    const { data } = matter(markdownWithMeta);
    return { slug, data: data as FrontMatter };
  });
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">My Blog</h1>
      <ul>
        {posts.map((post: Post, index: number) => (
          <li key={index} className="mb-6">
            <a
              href={`/blog/${post.slug}`}
              className="text-blue-500 hover:underline"
            >
              <h2 className="text-xl font-semibold">{post.data.title}</h2>
            </a>
            <p className="text-gray-600">{post.data.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
