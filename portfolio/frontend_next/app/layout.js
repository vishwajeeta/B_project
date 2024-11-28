// import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// PWD setting
export const metadata = {
  title: "My Portfolio App",
  description: "vishwajeet Portfolio",
  generator:"Next.js",
  manifest:"/manifest.json",
  keywords:["next.js","nextjs13","next13","pwa","next-pwa"],
  authors:[
    {name:"vishwajeet"},
    {
      name:"vishwajeet",
      url:"https://b-project-nine.vercel.app/",
    },
  ],
  openGraph:{
    images:'/opengraph-image.png',
  },
  icons:[
    {rel:"apple-touch-icon", url:"ios/128.png"},
    {rel: "icon",url:"ios/128.png"},
  ],
  twitter:{
    card:"summary_large_image"
  }
};

export const viewport = {
  themeColor:[
    {media:"(prefers-color-scheme:light",color:"#fff"}],
    viewport:"minimum-scale=1, initial-scale=1, width=device-width,shrink-to-fit=no,viewport-fit=cover",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body>{children}</body>
    </html>
  );
}
