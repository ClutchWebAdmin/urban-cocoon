"use client";
import LinkButton from "./LinkButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TheFooter() {
  const pathname = usePathname();
  const isTermsPage = pathname === "/terms";

  return (
    <footer className=" flex flex-col justify-between h-fit w-full text-center  text-xs ">
    

      <div className="md:absolute bottom-0 md:left-0 md:right-0 font-medium p-2 transition duration-300 hover:text-clutchBlue-950 text-[#2A2669]">
        <Link href="https://clutchindustries.com/" >
        © 2024 Clutch Industries Inc.
        </Link>
      </div>

      <div className={`md:absolute bottom-0 md:right-0 font-medium p-2 transition duration-300 hover:text-clutchBlue-950 text-[#2A2669] ${pathname === '/terms' ? 'hidden' : ''}`}>
        <Link 
              href="/terms" 
              text="Terms of Service"
              >
          Terms of Service
        </Link>
      </div>

      <div className="md:absolute bottom-0  md:left-0 p-2">© 2024 Urban Cocoon</div>
               
    </footer>
  );
}
