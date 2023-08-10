import type { Metadata } from "next";
import Link from "next/link";

const getData = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    next: {
      revalidate: 60
    }
  });
  return res.json();
};
export const metadata: Metadata = {
  title: "Blog",
  description: "Good info",
};

const page = async () => {
  const posts = await getData();
  return (
    <>
      <h1>Blog Page</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default page;
