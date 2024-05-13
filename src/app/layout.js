import { Noto_Sans } from "next/font/google";
import "./globals.css";
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import AOSLoader from "./utils/AOSLoader";

const notoSans = Noto_Sans({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://urban-cocoon.vercel.app"),
  title: "Urban Cocoon",
  description:
    "A revolutionary shelter designed to redefine the way we address homelessness. Coming soon...",
  keywords:
    "Shelter, homeless shelter, homeless shelters, homeless shelters for sale, temporary housing solutions, pallet shelter, affordable, temporary housing",
  openGraph: {
    title: "Urban Cocoon",
    description:
      "A revolutionary shelter designed to redefine the way we address homelessness. Coming soon...",
    siteName: "Urban Cocoon",
    type: "website",
    locale: "en_US",
    url: "https://urban-cocoon.vercel.app",
    images: [
      {
        url: "https://urban-cocoon.vercel.app/images/og-image.png",
        alt: "Urban Cocoon",
      },
    ],
  },
  images: [
    {
      url: "https://urban-cocoon.vercel.app/images/og-image.png",
      alt: "Urban Cocoon",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`relative min-h-svh flex flex-col items-center justify-center ${notoSans.className} tracking-wide pb-12 text-indigo-950`}
      >
        <TheHeader />
        {children}
        <TheFooter />
        <AOSLoader />
        <Analytics />
        <GoogleAnalytics gaId="G-CZ13CNF79B" />
      </body>
    </html>
  );
}
