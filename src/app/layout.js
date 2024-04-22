import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import logo from "../../public/logos/urban-cocoon-logo.png";
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";

const notoSans = Noto_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Urban Cocoon",
  description:
    "A revolutionary shelter designed to redefine the way we address homelessness. Coming soon...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`relative min-h-svh flex flex-col items-center justify-center ${notoSans.className} tracking-wide pb-12 text-[#2d1a3a]`}
      >
        <TheHeader />
        {children}
        <TheFooter />
      </body>
    </html>
  );
}
