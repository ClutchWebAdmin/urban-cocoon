"use client";

import { PopupButton } from "@typeform/embed-react";

export default function ContactButton({ buttonText }) {
  return (
    <PopupButton
      id="dcdiUEyy"
      className="hidden md:flex w-fit h-fit bg-gradient-to-tl from-urbanPurple-600 via-urbanPurple-200 to-urbanPurple-700  transition duration-300 px-6 py-4 text-urbanPurple-900 text-sm md:text-md font-medium uppercase rounded-full hover:bg-gradient-to-bl hover:from-urbanPurple-400 hover:via-urbanPurple-800 hover:to-urbanPurple-200 hover:border-urbanPurple-200 hover:text-urbanPurple-100 border-2 border-urbanPurple-700"
    >
      {buttonText}
    </PopupButton>
  );
}
