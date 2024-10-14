import ContactButton from "../components/ContactButton";
import ImageCarousel from "../components/ImageCarousel";

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

// export const metadata = {
//   title: "Cocoon",
//   description: "Cocoon",
//   keywords:
//     "shelter, cocoon",
//   openGraph: {
//     title: "Shelter",
//     description: "Shelter",
//     siteName: "Urban Cocoon",
//     type: "website",
//     locale: "en_US",
//     url: "https://urbancocoon.us",
    
//   },
//   images: [
//     {
//       url: "https://clutchindustries.com/images/og-image.png",
//       alt: "Clutch Industries",
//     },
//   ],
// };


export default function FeaturesSection() {
  return (
    
    <section
      id="/features"
      className="flex flex-col md:flex-row lg:items-center text-[#2A2669] gap-20 lg:gap-20 md:max-w-full lg:max-w-full xl:max-w-full w-full mb-10 pt-32 pb-4 "
    >
      <ImageCarousel />
      <div className="flex flex-col w-full lg:w-1/2 p-2">
        <div
          className="flex flex-col gap-5"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <h1 className="flex text-[#2A2669] text-[28px] md:text-[52px] lg:text-4xl xl:text-5xl leading-tight font-semibold">
            Key Features
          </h1>
          <ul className="list-disc text-clutchBlue-700 ml-8 flex flex-col gap-2">
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
