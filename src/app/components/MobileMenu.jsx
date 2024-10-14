"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { navLinks } from "../data/navLinks";
import Image from "next/image";
import logo from "../../../public/logos/urban-cocoon-logo.png";
import { PopupButton } from "@typeform/embed-react";
import { usePathname } from "next/navigation";

export default function MobileMenu({ isMobileMenuOpen, setMobileMenuOpen }) {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
const pathname = usePathname();
const isHomePage = pathname === "/";

  useEffect(() => {
    const toggleBodyScroll = () => {
      document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    };

    toggleBodyScroll();

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className={isMobileMenuOpen ? "hidden" : "md:hidden flex flex-row gap-4"}>
        <button
          id="open-mobile-menu"
          aria-label="open-mobile-menu"
          onClick={toggleMobileMenu}
        >
          <AiOutlineMenu className="h-8 w-8 hover:text-[#2A2669]"/>
        </button>
      </div>

      {isMobileMenuOpen && (
        <button
          id="close-mobile-menu"
          aria-label="close-mobile-menu"
          onClick={toggleMobileMenu}
          className={`md:hidden z-[9998] animate__animated animate__rotateIn rounded-full hover:ring-2 ring-[#2A2669] ring-offset-4 transition duration-300 hover:text-[#2A2669] p-2`}
        >
          <AiOutlineClose className="h-8 w-10 text-white" />
        </button>
      )}

      {isMobileMenuOpen && (
        <nav className="md:hidden fixed inset-0 bg-clutchBlue-950 text-white opacity-[98%] z-[9000] animate__animated animate__slideInDown text-4xl">
          
          <div className="flex flex-col h-full items-center justify-center space-y-12 ">
            <Link href="/" className="p-2" onClick={toggleMobileMenu}>
                <Image
                 src={logo}
                 alt="cocoon"
                 className="w-[100px] h-auto hover:scale-110 transition duration-300 hover:ring-2 ring-[#2A2669] ring-offset-2 rounded-lg p-1"
                />
            </Link>
            {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.linkTo}
                className={`transition duration-300 rounded-sm font-medium hover:ring-2 ring-[#2A2669] ring-offset-4 hover:text-[#2A2669] p-2 ${pathname === `${item.linkTo}` ? 'text-amber-500' : ''}`}
                onClick={toggleMobileMenu}
              >
                {item.text}
              </Link>
            ))}
            <Link
              href="https://clutch.invportal.com/login"
              className="transition duration-300 rounded-sm hover:text-[#2A2669] text-white hover:ring-2 ring-[#2A2669] ring-offset-4 p-2"
            >
              Investor Portal
            </Link>
             
            <PopupButton
            id="dcdiUEyy"
            className="hover:ring-2 rounded-sm ring-[#2A2669] ring-offset-4 transition duration-300 hover:text-[#2A2669] p-2"
            onClick={toggleMobileMenu}
            >
                Contact us
            </PopupButton>
            
          </div>
        </nav>
      )}
    </>
  );
}