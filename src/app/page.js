import Image from "next/image";
import ContactButton from "./components/ContactButton";
import placeholder from "../../public/images/placeholder.png";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 mx-auto justify-center items-center px-5 md:px-10">
      <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-10 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mb-10 lg:mb-5">
        <div className="flex flex-col w-full lg:w-1/2 order-2 lg:order-1">
          <p className="uppercase text-gray-700 text-xs md:text-sm pb-2">
            Coming soon
          </p>
          <div className="flex flex-col gap-3 xl-gap-5 md:gap-4">
            <h1 className="md:hidden text-[28px] leading-tight font-semibold">
              A revolutionary shelter <br />
              designed to redefine <br />
              the way we address <br />
              homelessness.
            </h1>
            <h1 className="hidden md:flex lg:hidden text-[52px] leading-tight font-semibold">
              A revolutionary shelter <br />
              designed to redefine <br />
              the way we address <br />
              homelessness.
            </h1>
            <h1 className="hidden lg:flex xl:hidden text-4xl leading-tight font-medium">
              A revolutionary shelter <br />
              designed to redefine <br />
              the way we address <br />
              homelessness.
            </h1>
            <h1 className="hidden xl:flex text-5xl leading-tight font-medium">
              A revolutionary shelter <br />
              designed to redefine <br />
              the way we address <br />
              homelessness.
            </h1>
            <p className="text-xs md:text-sm text-gray-700 leading-snug xl:pr-14">
              More than just a refuge, the{" "}
              <span className="italic">Urban Cozy</span> is a sustainable haven
              crafted from recyclable foam with an outstanding R-value of 20,
              ensuring exceptional heat regulation. This innovative shelter
              embodies the essence of urban comfort, creating a positive impact
              on communities and the environment alike.
            </p>
            <ContactButton buttonText="Learn more" />
          </div>
        </div>
        <Image
          src={placeholder}
          alt="placeholder"
          className="w-full lg:w-1/2 h-auto object-cover order-1 lg:order-2"
        />
      </div>
    </main>
  );
}
