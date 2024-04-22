"use client";

import { PopupButton } from "@typeform/embed-react";

export default function ContactButton({ buttonText }) {
  return (
    <PopupButton
      id="dcdiUEyy"
      className="flex w-fit h-fit bg-[#2d1a3a] hover:bg-gray-800 transition duration-300 px-6 py-4 text-white font-medium uppercase rounded-full"
    >
      {buttonText}
    </PopupButton>
  );
}
