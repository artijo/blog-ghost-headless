'use client'
import Link from 'next/link';
import Image from 'next/image';

export default function Card({ slug, feature_image, title}: { slug: string, feature_image: string, title: string }) {


  return (
    <article
      className='overflow-hidden rounded-md bg-white shadow-sm dark:bg-slate-800 mx-auto w-full'
    //   key={post.id}
    >
      <Link href={`/${slug}`} prefetch={true}>
        <Image
          src={feature_image}
          alt={title}
          width={360}
          height={189}
          className='aspect-[120/63] w-full object-cover'
        />
      </Link>
      <div className='p-4'>
        <h3 className='mb-3 text-xl font-bold dark:text-white'>
          <Link href={`/${slug}`} prefetch={true}>{title}</Link>
        </h3>
        {/* <div className='flex items-center gap-2 text-gray-600 dark:text-gray-400'>
          <Image
            src={avatar}
            alt={post.author.first_name}
            width={28}
            height={28}
            className='aspect-square rounded-full object-cover'
          />
          <span>{post.author.first_name}</span>
        </div> */}
      </div>
    </article>
  );
}