import { getPost } from "../helper";
import Image from "next/image";
import type { Metadata, ResolvingMetadata } from 'next'
import { Camera } from 'lucide-react';
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug);
  return {
    title: post.posts[0].title,
    image: post.posts[0].feature_image,
  } as Metadata;
}

export default async function Post({ params }: { params: { slug: string } }) {
  
  const post = await getPost(params.slug);
  
  return (
  <>
    <main className='lg:pt-[150px pt-[90px] md:pt-[120px]'>

    <div className='mb-12'>
      <div className='mx-auto max-w-7xl px-5 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:text-center'>
          <h2 className='mb-4 text-sm font-bold tracking-wider text-sky-700'>
            {post.posts[0].tags.map((tag: any) => (
              <span key={tag.id} className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-sky-100 text-sky-800'>
                {/* <Camera className='h-4 w-4 mr-1' /> */}
                {tag.name}
              </span>
            ))}
          </h2>
          <Image
                src={post.posts[0].feature_image}
                alt={post.posts[0].title}
                width={1024}
                height={512}
                className='h-auto max-w-full rounded-lg shadow-xl dark:shadow-gray-800 mx-auto'
                />
          <h2 className='my-6 text-3xl  font-bold sm:text-4xl'>
            {post.posts[0].title}
          </h2>
          <p className='text-base text-gray-600 dark:text-gray-400'>
            {new Date(post.posts[0].created_at).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
       
<div className='mx-auto max-w-4xl px-5'>
{
        post.posts.map((post: any) => (
            <div key={post.id} className="flex flex-col items-center">
                <div
                className="prose dark:prose-dark max-w-none w-full"
                dangerouslySetInnerHTML={{
                    __html: post.html
                }}
                />
            </div>
            ))
      }
</div>
</main>
</>
  );
}