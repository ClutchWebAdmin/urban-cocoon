import ContactButton from "./components/ContactButton";

export default function Home() {
  return (
    <main className="flex flex-col gap-3 xl:gap-5 flex-1 w-full md:w-4/5 lg:w-3/5 justify-center p-5 mb-5">
      <h1 className="md:hidden text-[28px] leading-tight font-semibold">
        A revolutionary shelter <br />
        designed to redefine <br />
        the way we address <br />
        homelessness.
      </h1>
      <h1 className="hidden md:flex lg:hidden text-5xl leading-tight font-semibold">
        A revolutionary shelter <br />
        designed to redefine <br />
        the way we address <br />
        homelessness.
      </h1>
      <h1 className="hidden lg:flex xl:hidden text-5xl leading-tight font-medium">
        A revolutionary shelter <br />
        designed to redefine <br />
        the way we address <br />
        homelessness.
      </h1>
      <h1 className="hidden xl:flex text-6xl font-medium">
        A revolutionary shelter <br />
        designed to redefine <br />
        the way we address <br />
        homelessness.
      </h1>
      <p className="text-xs md:text-sm text-gray-700 leading-snug xl:pr-14">
        More than just a refuge, the <span className="italic">Urban Cozy</span>{" "}
        is a sustainable haven crafted from recyclable foam with an outstanding
        R-value of 20, ensuring exceptional heat regulation. This innovative
        shelter embodies the essence of urban comfort, creating a positive
        impact on communities and the environment alike.
      </p>
      <ContactButton buttonText="Learn more" />
    </main>
  );
}
