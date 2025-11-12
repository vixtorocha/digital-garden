import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote/rsc";

type Props = {
  readonly params: { readonly slug: string };
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const markdownWithMeta = fs.readFileSync(
    path.join("src/posts", `${slug}.mdx`),
    "utf-8"
  );
  const { data, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
      <p className="text-gray-600 mb-8">{data.date}</p>
      <article className="prose lg:prose-xl dark:prose-invert">
        <MDXRemote {...mdxSource} source={content} />
      </article>
    </div>
  );
}
