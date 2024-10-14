import Link from "next/link";

export default function LinkButton({ linkTo, text }) {
  return (
    <Link
      href={linkTo}
      className="flex w-fit h-fit bg-[#2A2669]  transition duration-300 px-6 py-4 text-white text-sm md:text-md font-medium uppercase rounded-full hover:bg-white hover:border-[#2A2669] hover:text-[#2A2669] border-2 border-[#2A2669]"
    >
      {text}
    </Link>
  );
}
