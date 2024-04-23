"use client";

import { PopupButton } from "@typeform/embed-react";

export default function ContactButton({ buttonText }) {
  return (
    <PopupButton
      id="dcdiUEyy"
      className="flex w-fit h-fit bg-[#2A2669] hover:bg-indigo-950 transition duration-300 px-6 py-4 text-white text-sm md:text-md font-medium uppercase rounded-full"
    >
      {buttonText}
    </PopupButton>
  );
}
