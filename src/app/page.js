import Image from "next/image";
import ContactButton from "./components/ContactButton";
import placeholder from "../../public/images/placeholder.png";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 mx-auto justify-center items-center px-5 md:px-10">
      <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-10 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mb-10">
        <div className="flex flex-col w-full lg:w-1/2 order-2 lg:order-1">
          <p className="uppercase text-gray-500 text-xs md:text-sm pb-2 font-semibold">
            Coming soon
          </p>
          <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 ">
            <h1 className="flex text-[28px] md:text-[52px] lg:text-4xl xl:text-5xl leading-tight font-semibold">
              A revolutionary shelter <br />
              designed to redefine <br />
              the way we address <br />
              homelessness.
            </h1>
            <p className="text-xs md:text-sm text-gray-800 leading-snug xl:pr-14">
              More than just a refuge, the{" "}
              <span className="italic">Urban Cozy</span> is a sustainable haven
              crafted from recyclable foam. This innovative shelter embodies the
              essence of urban comfort, creating a positive impact on
              communities and the environment alike.
            </p>
            <ContactButton buttonText="Learn more" />
          </div>
        </div>
        <Image
          src={placeholder}
          alt="placeholder"
          className="w-full lg:w-1/2 h-auto object-cover order-1 lg:order-2"
          placeholder="blur"
          priority
        />
      </div>
    </main>
  );
}
