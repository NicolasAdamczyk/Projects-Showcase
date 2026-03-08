import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Sidebars from "./components/layout/Sidebars";
import InteractiveBackground from "./components/ui/InteractiveBackground";

export const metadata = {
  title: "Nicolas Adamczyk | Showcase",
  description: "Developer specializing in AI & Computer Vision - Available for apprenticeship.",
  openGraph: {
    title: "Nicolas Adamczyk | Showcase",
    description: "Developer specializing in AI & Computer Vision - Available for apprenticeship.",
    siteName: "Portfolio Nicolas Adamczyk",
    locale: "fr_FR",
    type: "website",
  },
  icons: {
    icon: [
      { url: "./icon.svg", type: "image/svg+xml" },
    ],
  },
};

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body>
        <InteractiveBackground />
        <Navbar />
        <div className="relative flex-grow">
          <Sidebars />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
