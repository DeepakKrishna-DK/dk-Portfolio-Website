import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./global-styles.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

import { META_DATA, PERSONAL_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: META_DATA.title,
  description: META_DATA.description,
  keywords: META_DATA.keywords,
  authors: [{ name: PERSONAL_INFO.name, url: PERSONAL_INFO.github }],
  openGraph: {
    title: META_DATA.openGraph.title,
    description: META_DATA.openGraph.description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: META_DATA.twitter.title,
    description: META_DATA.twitter.description,
  },
};

import BackgroundEffects from "@/components/ui/BackgroundEffects";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased text-white bg-[#020408]">
        <BackgroundEffects />
        {children}
      </body>
    </html>
  );
}
