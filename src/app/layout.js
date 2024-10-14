import { Noto_Sans } from "next/font/google";
import "animate.css";
import "./globals.css";
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import AOSLoader from "./utils/AOSLoader";
import { oxanium, barlow } from "./styles/fonts";

const notoSans = Noto_Sans({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`relative min-h-svh flex flex-col items-center  } tracking-wide text-[#2A2669] pb-12   ${oxanium.variable} ${barlow.variable}`}
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
