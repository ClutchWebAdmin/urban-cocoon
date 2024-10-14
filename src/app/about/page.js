import ContactButton from "../components/ContactButton";
import ImageCarousel from "../components/ImageCarousel";
import teamphoto from "../../../public/images/clutchteamphoto.jpg";
import Image from "next/image";
import TeamMemberSection from "../components/TeamMemberSection";


const featuresArray = [
  "We are a team-driven company, motivated by the early challenges of projects that helped show us how effective a highly-aligned, well-chosen team (subcontractors, project managers, architects, land development) can be.",
  "We have built an amazing team to understand the challenges and changes, and we believe there is no other team in the Willamette Valley that has our skill set.",
  "We are looking forward to more opportunities and potential partners, projects, and development within our community.",
  
];


export default function FeaturesSection() {
  return (
    
    <section
      id="/about"
      className="flex flex-col lg:items-center text-[#2A2669] gap-20 lg:gap-20 md:max-w-full lg:max-w-full xl:max-w-full w-full mb-10 pt-32 pb-4 px-4"
    >
       
      
      <div className="flex sm:flex-row flex-col p-2 justify-between">
        <Image src={teamphoto} className="rounded-2xl w-full sm:w-1/2 h-auto object-cover order-2 p-2"/>
        <div
          className="p-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <h1 className="flex text-[#2A2669] text-[28px] md:text-[52px] lg:text-4xl xl:text-5xl leading-tight font-semibold">
            About Us
          </h1>
          <ul className="list-disc text-clutchBlue-700 ml-8 flex flex-col gap-2 pb-2">
            {featuresArray.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <ContactButton buttonText="Contact for more info" />
        </div>
      </div>
      <div className="p-2">
        <TeamMemberSection />
      </div>
      
    </section>
    
    
  );
}
