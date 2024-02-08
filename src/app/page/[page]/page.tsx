'use client'
import Archive from "@/app/components/Archive";

type PageProps = {
    params: {
        page: string;
      }
    };

export default async function Page({ params }: PageProps) {
  return (
    <main className="lg:pt-[100px] pt-[90px] md:pt-[120px] sm:px-[16px] pb-[90px]">
      <h2 className="text-3xl font-bold text-center pb-[16px]">บันทึกของไอ้อาร์ต</h2>
      <Archive params={{ page: params.page }} />
    </main>
  );
}
