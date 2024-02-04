import Image from "next/image";
import Link from "next/link";
import { getPosts } from "./helper";
import Card from "./components/Card";

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className="lg:pt-[100px] pt-[90px] md:pt-[120px]">
      <h2 className="text-3xl font-bold text-center pb-[16px]">บันทึกของไอ้อาร์ต</h2>
      <div className="mx-auto grid  max-w-[1120px] gap-4 md:grid-cols-3 md:gap-5">

      {posts.posts.map((post: any) => (
                <Card key={post.id} slug={post.slug} feature_image={post.feature_image} title={post.title}
                />
      ))}
      </div>
    </main>
  );
}
