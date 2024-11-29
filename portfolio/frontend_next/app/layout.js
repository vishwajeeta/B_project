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
  openGraph:{
    title:'ASVSI',
    discription:'build your dreams.',
    images:'/opengraph-image.png',
  },
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
        <meta property="og:title" content="My Portfolio App" />
        <meta property="og:description" content="vishwajeet Portfolio.  build your dream world." />
        <meta property="og:image" content="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJTZzLF81ya01XBhLw9DhgApXKZfykBLQJgQCYcop7OzXC9WIgV9r1yAMjdWaX8ZF5S-iPN1GO1o__4fmjEC25-8uUnnNSjjAO7a8S5mg7tUVvAEanFzaMg_MrL224jzmTEDytQh0JyUIqh2_hDeDj3TjaS8ei4GC4AZ-kxIgf_ETXnvFnjALoIo_r6b0/s1200/opengraph-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="ASVSI" />
        <meta property="og:image:type" content="image/png" />
        <meta property="twitter:image:alt" content="ASVSI" />
        
        <meta property="og:url" content="https://portfolio-chi-inky-28.vercel.app" />
        <meta property="og:type" content="website" />

      </Head>
      {/* <body className={inter.className}>{children}</body> */}
      <body>{children}</body>
    </html>
  );
}
