import ContactButton from "../components/ContactButton";
import ImageCarousel from "../components/ImageCarousel";
import heroImage from "../../../public/images/hero-image.png";
import Image from "next/image";

const pricesArray = [
  "From $12,000 To $16,000",
  "Leasing Options Available"
  
  
  ,
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
      id="/pricing"
      className="flex flex-col md:flex-row md:items-center gap-20 lg:gap-20 text-[#2A2669] md:max-w-full lg:max-w-full xl:max-full w-full mb-10 pt-32 pb-4"
    >
      <Image
        src={heroImage}
        alt="Photo of Urban Cocoon"
        className="relative w-full h-full lg:w-1/2 flex items-center justify-center p-4"
        priority
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-once="true"
      />
      <div className="flex flex-col w-full lg:w-1/2">
        <div
          className="flex flex-col gap-5 p-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <h1 className="flex text-[28px] md:text-[52px] lg:text-4xl xl:text-5xl leading-tight font-semibold ">
            Pricing
          </h1>
          <ul className="list-disc text-clutchBlue-700 ml-8 flex flex-col gap-2">
            {pricesArray.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <ContactButton buttonText="Contact For Info" />
        </div>
      </div>
    </section>
    
    
  );
}