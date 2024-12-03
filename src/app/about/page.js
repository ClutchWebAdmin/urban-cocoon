import ContactButton from "../components/ContactButton";
import ImageCarousel from "../components/ImageCarousel";
import teamphoto from "../../../public/images/clutchteamphoto.jpg";
import Image from "next/image";
import TeamMemberSection from "../components/TeamMemberSection";
import Chris from "../../../public/images/Chris-Blackburn.webp"


const featuresArray = [
  "Chris Blackburn is a seasoned entrepreneur and leader with over two decades of experience in various industries, including IT, construction, real estate development, and blockchain technology.",
  "As the Director, CEO, and Partner of Clutch Industries Inc. since December 2016, Chris has been instrumental in driving the company's ambitious growth in construction and real estate development.",
  "Chris Blackburn's diverse experience and entrepreneurial spirit have positioned him as a key figure in Oregon's construction, real estate, and technology sectors.",
  
];


export default function FeaturesSection() {
  return (
    
    <section
      id="/about"
      className="flex flex-col lg:items-center text-urbanPurple-500 gap-20 lg:gap-20 md:max-w-full lg:max-w-full xl:max-w-full w-full mb-10 pt-32 pb-4 px-4 bg-urbanPurple-950"
    >
       <h2 className="text-4xl md:text-7xl 2xl:text-8xl text-center">
        Our Team
      </h2>
      
      <div className="flex sm:flex-row flex-col lg:p-8 justify-between shadow-inner shadow-[#2A2669] rounded-lg bg-urbanPurple-200">
        <Image src={Chris} alt="Photo of Team" className="rounded-2xl w-full sm:w-1/3  object-cover order-1 lg:order-2 p-2"/>
        <div
          className="p-2 order-2 lg:order-1"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <h1 className="flex text-urbanPurple-950 pb-8 text-[28px] md:text-[52px] lg:text-4xl xl:text-5xl leading-tight font-semibold">
            Chris Blackburn
          </h1>
          <ul className="list-disc text-urbanPurple-950 ml-8 flex flex-col gap-2 pb-8 lg:text-[24px]">
            {featuresArray.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          {/* <ContactButton buttonText="Contact for more info" /> */}
        </div>
      </div>
      <div className="flex sm:flex-row flex-col lg:p-8 justify-between shadow-inner shadow-[#2A2669] rounded-lg bg-urbanPurple-200">
      <div
          className="p-2 order-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <h1 className="flex text-urbanPurple-950 pb-8 text-[28px] md:text-[52px] lg:text-4xl xl:text-5xl leading-tight font-semibold">
            Justin Boswell
          </h1>
          <ul className="list-disc text-urbanPurple-950 ml-8 flex flex-col gap-2 pb-8 lg:text-[24px]">
            {featuresArray.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          {/* <ContactButton buttonText="Contact for more info" /> */}
        </div>
        <Image src={teamphoto} alt="Photo of Team" className="rounded-2xl w-full sm:w-1/2 h-auto object-cover order-1 p-2"/>
        
      </div>
      {/* <div className="p-2">
        <TeamMemberSection />
      </div> */}
      
    </section>
    
    
  );
}
