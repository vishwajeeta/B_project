// import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
// const inter = Inter({ subsets: ["latin"] });

// PWA setting
export const metadata = {
  title: "My Portfolio App",
  description: "vishwajeet Portfolio",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["next.js", "nextjs13", "next13", "pwa", "next-pwa"],
  authors: [
    { name: "vishwajeet" },
    {
      name: "vishwajeet",
      url: "https://portfolio-chi-inky-28.vercel.app/",
    },
  ],

  icons: [
    { rel: "apple-touch-icon", url: "ios/128.png" },
    { rel: "icon", url: "ios/128.png" },
  ],
};

export const viewport = {
  themeColor: [{ media: "(prefers-color-scheme:light", color: "#fff" }],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width,shrink-to-fit=no,viewport-fit=cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:title" content="My Portfolio App which has all my projects. we provide services for web development and blockchain developments." />
        <meta property="og:description" content="vishwajeet Portfolio. it contains all my projects with additional informations.build your dream world,we provide services for web development and blockchain developments." />
        <meta property="og:image" content="https://portfolio-chi-inky-28.vercel.app/opengraph-image.png" />
        
        <meta property="og:url" content="https://portfolio-chi-inky-28.vercel.app" />
        <meta property="og:type" content="website" />

      </Head>
      {/* <body className={inter.className}>{children}</body> */}
      <body>{children}</body>
    </html>
  );
}
