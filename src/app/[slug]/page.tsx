import { getPost } from "../helper";
import Image from "next/image";


export default async function Post({ params }: { params: { slug: string } }) {
    const post = await getPost(params.slug);
    console.log(post);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {
        post.posts.map((post: any) => (
            <div key={post.id} className="flex flex-col items-center">
                <h2 className="text-2xl font-bold">{post.title}</h2>
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
            ))
      }
    </main>
  );
}