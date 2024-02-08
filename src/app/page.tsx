'use client'
import { getPosts } from "./helper";
import Archive from "./components/Archive";

export default async function Home() {
  return (
    <main className="lg:pt-[100px] pt-[90px] md:pt-[120px] sm:px-[16px] pb-[90px]">
      <h2 className="text-3xl font-bold text-center pb-[16px]">บันทึกของไอ้อาร์ต</h2>
      <Archive params={{ page: "1" }} />
    </main>
  );
}
