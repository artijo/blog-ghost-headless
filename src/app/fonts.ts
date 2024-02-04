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
        path: '../fonts/chulabhornlikit/chulabhornlikittext-regular.woff2',
        weight: "400",
      },
      {
        path: '../fonts/chulabhornlikit/chulabhornlikittext-bold.woff2',
        weight: "700",
      }
    ],
  }
  );

  export {lineseed, clulabhornlikit}