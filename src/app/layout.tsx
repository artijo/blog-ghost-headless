import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Script from 'next/script';
import localFont from 'next/font/local'

const lineseed = localFont({
    variable: '--font-lineseed',
    src: [
      {
        path: './fonts/LineSeed/lineseedsansth_rg-webfont.woff2',
        weight: "400",
      },
      {
        path: './fonts/LineSeed/lineseedsansth_bd-webfont.woff2',
        weight: "700",
      },
    ]
  }
  );
  
  const clulabhornlikit = localFont({
    variable: '--font-clulabhornlikit',
    src: [
      {
        path: './fonts/chulabhornlikit/chulabhornlikittext-regular.woff2',
        weight: "400",
      },
      {
        path: './fonts/chulabhornlikit/chulabhornlikittext-bold.woff2',
        weight: "700",
      }
    ],
  }
  );

export const metadata: Metadata = {
  title: "ARTIJO - บันทึกของไอ้อาร์ต",
  description: "บันทึกของไอ้อาร์ต",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`min-h-screen bg-slate-100 antialiased ${lineseed.variable} ${clulabhornlikit.variable}`}>
        <Header />
        {children}
        <Script id='nav' src='/js/nav.js' />
        </body>
    </html>
  );
}
