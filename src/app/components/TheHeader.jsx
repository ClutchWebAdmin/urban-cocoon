"use client";
import logo from "../../../public/logos/urban-cocoon-logo.png";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ContactButton from "./ContactButton";
import { useState } from "react";
import { navLinks } from "../data/navLinks";
import { oxanium, barlow } from "../styles/fonts";
import MobileMenu from "./MobileMenu";



export default function TheHeader() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`${oxanium.className}sticky fixed  flex flex-row w-full z-50 border-b-2 border-urbanPurple-900 bg-gradient-to-r from-urbanPurple-400 via-urbanPurple-300 to-urbanPurple-800 bg-opacity-80 shadow-inner shadow-urbanPurple-900 shadow-2xl ${
        isMobileMenuOpen ? ' opacity-[95%]' : ' opacity-[90%]'
      }`}>
      
      <nav className={`flex flex-row w-full h-fit lg:items-center justify-between m-3 `}>
        
          <Link href="/">
            <Image
              src={logo}
              className="h-[70px] w-auto hover:scale-110 transition duration-300 hover:ring-2 ring-urbanPurple-900 ring-offset-2 p-1 rounded-lg"
              alt="Clutch"
              priority
            />
          </Link>
        
        

        <div className={`hidden md:flex flex-row items-center justify-center gap-6 lg:gap-2 xl:gap-8 lg:w-3/5 max-w-fit md:text-md font-medium`}>
          
            {navLinks.map((item, index) => (
              <Link
                  key={index}
                  href={item.linkTo}
                  className={`font-medium ${oxanium.variable} px-2 py-3 transition duration-300 cursor-pointer hover:text-white text-urbanPurple-900 transition duration-300 rounded-lg font-medium  hover:bg-gradient-to-tl from-urbanPurple-400 via-urbanPurple-800 to-urbanPurple-300`}
              >
                {item.text}
              </Link>
            ))}
            <Link
              href="https://clutch.invportal.com/login"
              className="font-medium px-2 py-3 transition duration-300 rounded-lg hover:text-white text-urbanPurple-900 hover:bg-gradient-to-tl from-urbanPurple-400 via-urbanPurple-800 to-urbanPurple-300"
            >
              Investor Portal
            </Link>  
          
        </div>
        <ContactButton buttonText="Contact Us" /> 
        
        <MobileMenu setMobileMenuOpen={setMobileMenuOpen} isMobileMenuOpen={isMobileMenuOpen} />
      </nav>
    </header>
  );
}
