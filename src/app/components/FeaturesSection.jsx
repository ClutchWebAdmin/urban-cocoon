import ContactButton from "./ContactButton";
import ImageCarousel from "./ImageCarousel";

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
      <ImageCarousel />
      <div className="flex flex-col w-full lg:w-1/2">
        <div
          className="flex flex-col gap-5"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <h1 className="flex text-[28px] md:text-[52px] lg:text-4xl xl:text-5xl leading-tight font-semibold">
            Key Features
          </h1>
          <ul className="list-disc ml-8 flex flex-col gap-2">
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
