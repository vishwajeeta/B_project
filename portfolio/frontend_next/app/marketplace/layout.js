import Navbar from "../components/marketplace/Navbar";
import "../marketplace/globals.css";


export const metadata = {
  title: "Digital Marketplace | ASVSI",
  description: "one place for all digital contents",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["digital commerce","digital products","next.js", "nextjs13", "next13", "pwa", "next-pwa"],
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      {/* <body className={inter.className}>{children}</body> */}
      <body>
        <div className="layout">
            <header>
              <Navbar/>
            </header>
            <main className="main-container">
        {children}
        </main>
        </div>
        </body>
    </html>
  );
}
