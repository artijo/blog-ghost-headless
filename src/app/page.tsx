import { getPosts } from "./helper";
import Card from "./components/Card";

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className="lg:pt-[100px] pt-[90px] md:pt-[120px] sm:px-[16px] pb-[90px]">
      <h2 className="text-3xl font-bold text-center pb-[16px]">บันทึกของไอ้อาร์ต</h2>
      <div className="px-[16px] mx-auto grid  max-w-[1120px] grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">

      {posts.posts.map((post: any) => (
                <Card key={post.id} slug={post.slug} feature_image={post.feature_image} title={post.title}
                />
      ))}
      </div>
    </main>
  );
}
