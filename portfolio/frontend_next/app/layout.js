// import { Inter } from "next/font/google";
import "./globals.css";
import ogImage from "../public/opengraph-image.png"
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
  metadataBase: new URL("https://portfolio-chi-inky-28.vercel.app"),
  openGraph:{
    title:'ASVSI',
    discription:'build your dreams.',
    images:[
      {
        url:ogImage.src,
        width: ogImage.width,
        height: ogImage.height
      },
    ],
  },
  
  twitter: {
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height
      },
    ]
  },
};

export const viewport = {
  themeColor: [{ media: "(prefers-color-scheme:light)", color: "#fff" }],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width,shrink-to-fit=no,viewport-fit=cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      {/* <body className={inter.className}>{children}</body> */}
      <body>{children}</body>
    </html>
  );
}
