import Link from "next/link";

export default function LinkButton({ linkTo, text }) {
  return (
    <Link
      href={linkTo}
      className="flex w-fit h-fit bg-gradient-to-tl from-urbanPurple-400 via-urbanPurple-800 to-urbanPurple-200  transition duration-300 px-6 py-4 text-white text-sm md:text-md font-medium uppercase rounded-full hover:bg-gradient-to-bl hover:from-urbanPurple-600 hover:via-urbanPurple-200 hover:to-urbanPurple-700 hover:border-urbanPurple-200 hover:text-urbanPurple-900 border-2 border-urbanPurple-700"
    >
      {text}
    </Link>
  );
}
