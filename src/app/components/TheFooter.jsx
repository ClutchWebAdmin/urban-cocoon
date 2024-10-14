"use client";
import LinkButton from "./LinkButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TheFooter() {
  const pathname = usePathname();
  const isTermsPage = pathname === "/terms";

  return (
    <footer className=" flex flex-col h-fit w-full text-center  text-xs ">
      <Link href="https://github.com/ClutchWebAdmin/clutch-industries" className="absolute bottom-0 p-2 hover:text-clutchBlue-950">
        © 2024 Clutch Industries Inc.
      </Link>

      <div className="md:absolute bottom-0 right-0 left-0 p-2 hover:text-clutchBlue-950">© 2024 Urban Cocoon</div>
      
      
              <Link 
              href="/terms" 
              text="Terms of Service"
              className={`absolute bottom-0 right-0 font-medium p-2 transition duration-300 hover:text-clutchBlue-950 text-[#2A2669] ${pathname === '/terms' ? 'hidden' : ''}`}
              >Terms of Service</Link>
            
    </footer>
  );
}
