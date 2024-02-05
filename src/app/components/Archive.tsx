import {  getPostsByPage } from "../helper";
import Card from "./Card";
import Pagination from "./Pagination";

type PageProps = {
    params: {
        page: string;
      }
    };

export default async function Archive({ params }: PageProps) {
const posts = await getPostsByPage(Number(params.page));
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
