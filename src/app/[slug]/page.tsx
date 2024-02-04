import { getPost } from "../helper";
import Image from "next/image";


export default async function Post({ params }: { params: { slug: string } }) {
    const post = await getPost(params.slug);
  return (
<main className='lg:pt-[150px pt-[90px] md:pt-[120px]'>
<div className='mx-auto max-w-4xl px-5'>
{
        post.posts.map((post: any) => (
            <div key={post.id} className="flex flex-col items-center">
                <h1 className='mb-4 text-4xl font-bold'>{post.title}</h1>
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
</div>
</main>
  );
}