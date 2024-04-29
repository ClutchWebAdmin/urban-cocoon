import placeholder from "../../../public/images/placeholder.png";
import ContactButton from "./ContactButton";
import Image from "next/image";

const featuresArray = [
  "Crafted from high-quality, recyclable EPS foam",
  "R20 insulation value for superior energy efficiency",
  "Optional heating and AC systems for year-round comfort",
  "Built-in USB chargers to keep devices powered",
  "Integrated smoke detectors and CO monitors for safety",
  "WiFi ready for easy internet connectivity",
  "Available in one or two bed configurations",
  "Lightweight and easy to transport",
  "Fire-resistant for enhanced protection",
  "Low-cost and easy to ship",
  "Versatile design for various applications (temporary housing, backyard guest rooms, remote workspaces)",
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-10 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl w-full mb-10"
    >
      <Image
        src={placeholder}
        alt="placeholder"
        className="w-full lg:w-1/2 h-auto object-cover"
        placeholder="blur"
        priority
      />
      <div className="flex flex-col w-full lg:w-1/2">
        <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 ">
          <h1 className="flex text-[28px] md:text-[52px] lg:text-4xl xl:text-5xl leading-tight font-semibold">
            Key Features
          </h1>
          <ul className="list-disc ml-8">
            {featuresArray.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <ContactButton buttonText="Contact for more info" />
        </div>
      </div>
    </section>
  );
}
