import Image from "next/image";
import Link from "next/link";
import { getPosts } from "./helper";

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {posts.posts.map((post: any) => (
        <div key={post.id} className="flex flex-col items-center">
          <Link href={`/${post.slug}`}>
            <h2 className="text-2xl font-bold">{post.title}</h2>
          </Link>
          
          <Image
            src={post.feature_image}
            alt={post.title}
            width={500}
            height={300}
          />
          <div
            dangerouslySetInnerHTML={{
              __html: post.html
            }}
          />
        </div>
      ))}
    </main>
  );
}
