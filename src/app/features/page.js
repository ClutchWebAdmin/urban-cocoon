import ContactButton from "../components/ContactButton";
import ImageCarousel from "../components/ImageCarousel";
import Image from "next/image";
import Cocoon4 from "../../../public/images/Cocoon4.jpg";
import Cocoon9 from "../../../public/images/Cocoon9.jpeg";

const featuresArray = [
  "The Urban Cocoon shelter is meticulously crafted from high-quality, recyclable EPS foam, offering a sustainable, energy-efficient solution for temporary housing needs. With an impressive R20 insulation value, it maintains superior energy efficiency, keeping the interior comfortable across various climates. For added convenience, optional heating and air conditioning systems are available, ensuring a comfortable environment all year round, regardless of the season. Safety and connectivity are also built into the design, with integrated smoke detectors, carbon monoxide monitors, and USB chargers to keep devices powered. Additionally, the unit is WiFi-ready, making it simple to connect to the internet and stay in touch.",
  "Beyond its practicality, the Urban Cocoon shelter offers remarkable flexibility and ease of use. Available in one- or two-bed configurations, it is designed to be lightweight and easy to transport, while its fire-resistant materials enhance durability and occupant protection. As a low-cost solution that’s easy to ship, it caters to a wide range of applications—from temporary housing and backyard guest rooms to remote workspaces and other personal or professional uses. This shelter combines resilience and functionality, adapting effortlessly to various needs without compromising safety, comfort, or style.",
];

const featuresArray2 = [
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
    
    // <section
    //   id="/features"
    //   className="flex flex-col md:flex-row lg:items-center text-[#2A2669] gap-20 lg:gap-20 md:max-w-full lg:max-w-full xl:max-w-full w-full mb-10 pt-32 pb-4 "
    // >
    //   <ImageCarousel />
    //   <div className="flex flex-col w-full lg:w-1/2 p-2">
    //     <div
    //       className="flex flex-col gap-5"
    //       data-aos="fade-up"
    //       data-aos-duration="1000"
    //       data-aos-once="true"
    //     >
    //       <h1 className="flex text-[#2A2669] text-[28px] md:text-[52px] lg:text-4xl xl:text-5xl leading-tight font-semibold">
    //         Key Features
    //       </h1>
    //       <ul className="list-disc text-urbanPurple-700 ml-8 flex flex-col gap-2">
    //         {featuresArray.map((feature, index) => (
    //           <li key={index}>{feature}</li>
    //         ))}
    //       </ul>
    //       <ContactButton buttonText="Contact for more info" />
    //     </div>
    //   </div>
    // </section>

    <section
  id="/features"
  className="relative overflow-hidden bg-urbanPurple-950 pt-32 pb-32 space-y-24 w-full"
>
  <div className="flex justify-center items-center w-full">
    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-urbanPurple-100">
      Features
    </h1>
  </div>
  
  <div className="relative">
    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
      <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
        <div>
          <div>
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-urbanPurple-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
     stroke-width="1.5" stroke="currentColor" aria-hidden="true"
     className="h-8 w-8 text-urbanPurple-100">
  <path stroke-linecap="round" stroke-linejoin="round"
        d="M12 2.5l2.95 6.4 6.55.85-4.9 4.85 1.2 6.55L12 17.75l-5.8 3.4 1.2-6.55L2.5 9.75l6.55-.85L12 2.5z"/>
</svg>
            </span>
          </div>

          <div className="mt-6">
            <h2 className="text-3xl font-bold tracking-tight text-urbanPurple-500">
              Sustainable and Energy-Efficient Design:
            </h2>
            <p className="mt-4 text-lg text-urbanPurple-100">
              {featuresArray[0]}
            </p>
            <div className="mt-6">
              <ContactButton buttonText="Contact for more info"/>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
        <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
          <Image loading="lazy" width="647" height="486"
                 className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                 src={Cocoon9} />
        </div>
      </div>
    </div>
  </div>

    <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
        <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                    <Image loading="lazy" width="647" height="486"
                        className="w-full rounded-2xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                         src={Cocoon4} />
                </div>
            </div>
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">

                <div>
                    <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-urbanPurple-500">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                          stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                          className="h-8 w-8 text-urbanPurple-100">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M12 2.5l2.95 6.4 6.55.85-4.9 4.85 1.2 6.55L12 17.75l-5.8 3.4 1.2-6.55L2.5 9.75l6.55-.85L12 2.5z"/>
                          </svg>
                        </span>
                    </div>

                    <div className="mt-6">
                        <h2 className="text-3xl font-bold tracking-tight text-urbanPurple-500">
                        Flexible, Safe, and Easy to Deploy:
                        </h2>
                        <p className="mt-4 text-lg text-urbanPurple-100">
                            {featuresArray[1]}
                        </p>
                        <div className="mt-6">
                            <ContactButton buttonText="Contact for more info"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="relative lg:py-16">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">

                <div>
                  <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-urbanPurple-500">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                          stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                          className="h-8 w-8 text-urbanPurple-100">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M12 2.5l2.95 6.4 6.55.85-4.9 4.85 1.2 6.55L12 17.75l-5.8 3.4 1.2-6.55L2.5 9.75l6.55-.85L12 2.5z"/>
                          </svg>
                        </span>
                  </div>
                    

                    <div className="mt-6">
                        <h2 className="text-3xl font-bold tracking-tight text-urbanPurple-500">
                        Key Features:
                        </h2>
                        <ul className="list-disc text-urbanPurple-100 ml-8 flex flex-col gap-2 mt-4 text-lg text-urbanPurple-100">
                          {featuresArray2.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                        <div className="mt-6">
                            <ContactButton buttonText="Contact for more info"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                    
                         <ImageCarousel className=""/>
                </div>
            </div>
        </div>
    </div>
        
    
    </div>
    
    </section> 
    
    
  );
}
