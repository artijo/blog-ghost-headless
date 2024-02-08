'use client'
import { useState, useEffect } from "react";
import {  getPostsByPage } from "../helper";
import Card from "./Card";
import Pagination from "./Pagination";

type PageProps = {
    params: {
        page: string;
      }
    };

const initPosts = async (page:Number) => {
  const posts = await getPostsByPage(page);
  return posts;
};

export default function Archive({ params }: PageProps) {
// const posts = await getPostsByPage(Number(params.page));
const [posts, setPosts] = useState({posts: [], meta: {pagination: { page: 1, limit: 1, total: 1, next: null, previous: null, pages: 1}}});
useEffect(() => {
  initPosts(Number(params.page)).then((posts) => {
    setPosts(posts);
  })
}
, [params.page]);
  return (
   <>
      <div className="px-[16px] mx-auto grid  max-w-[1120px] grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">

      {posts.posts.map((post: any) => (
                <Card key={post.id} slug={post.slug} feature_image={post.feature_image} title={post.title}
                />
      ))}
      </div>
      <Pagination
        page={posts.meta.pagination.page}
        limit={posts.meta.pagination.limit}
        total={posts.meta.pagination.total}
        next={posts.meta.pagination.next}
        previous={posts.meta.pagination.previous}
        pages={posts.meta.pagination.pages}
      />
    </>
  );
}
