import logo from "../../../public/logos/urban-cocoon-logo.png";
import Image from "next/image";
import Link from "next/link";
import ContactButton from "./ContactButton";

export default function TheHeader() {
  return (
    <header className="flex flex-row justify-between h-fit w-full p-5">
      <Link href="/">
        <Image
          src={logo}
          className="h-[120px] w-auto"
          alt="Urban Cocoon"
          priority
        />
      </Link>

      <ContactButton buttonText="Contact Us" />
    </header>
  );
}
