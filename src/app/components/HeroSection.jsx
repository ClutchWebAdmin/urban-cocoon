import Image from "next/image";
import LinkButton from "./LinkButton";
import heroImage from "../../../public/images/hero-image.png";

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      className="flex flex-col lg:flex-col lg:items-center gap-10 lg:gap-10 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mb-10 pt-28"
    >
      <div className="lg:items-center order-1 flex flex-col sm:flex-row">
        <div
        className="flex flex-col w-full pt-10 lg:w-1/2 order-2 lg:order-1"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
        >
          {/* <p className="uppercase text-gray-500 text-xs md:text-sm pb-2 font-semibold">
            Coming soon
          </p> */}
        <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 ">
          <h1 className="flex text-[28px] md:text-[28px] lg:text-4xl xl:text-5xl leading-tight font-semibold">
          Experience the future of shelters with{" "}
            Urban Cocoon
          </h1>
          <p className="text-xs md:text-sm text-clutchBlue-700 leading-snug xl:pr-14">
          A revolutionary disaster relief shelter designed to provide rapid, secure, and comfortable refuge for individuals and families affected by disasters. The perfect blend of comfort, sustainability, and affordability. With its modular design and quick deployment, it ensures immediate protection while supporting long-term recovery and resilience for communities in need.
          </p>
          <LinkButton linkTo="/features" text="Learn more" />
        </div>
      </div>
      <Image
        src={heroImage}
        alt="Photo of Urban Cocoon"
        className="w-full lg:w-1/2 h-auto object-cover order-2"
        priority
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-once="true"
      />
      </div>
      <div className="order-3 w-full pt-20">
        <div
        className="flex flex-col order-2 lg:order-1"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true">
        
          <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 ">
            <h1 className="flex justify-center text-[28px] md:text-[52px]justify-self-center lg:text-4xl xl:text-5xl leading-tight font-semibold">
              About The Mission
            </h1>
            <p className="text-xs md:text-sm justify-center text-clutchBlue-700 leading-snug xl:pr-14">
               At {" "}
              <span className="italic">Urban Cocoon</span> our mission is to provide swift, sustainable, and secure shelter solutions for individuals and families affected by disasters. Through innovative design and cutting-edge materials, we aim to create modular, resilient shelters that offer immediate protection and long-term comfort, ensuring dignity and safety in the aftermath of crises while supporting recovery and rebuilding efforts. By combining portability with ease of deployment, Urban Cocoon shelters can be rapidly transported and assembled in even the most challenging environments. Our commitment to innovation and community resilience drives us to continuously evolve our designs, empowering those affected by disasters with not just shelter, but a foundation for hope and renewal.
            </p>
            <div className="flex justify-end">
              <LinkButton linkTo="/pricing" text="Pricing"/>
            </div>
          </div>
        </div>
      </div>

      <div className="order-3 w-full pt-20">
        <div
        className="flex flex-col order-2 lg:order-1"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true">
        
          <div className="flex flex-col sm:flex-row justify-between gap-3 md:gap-4 lg:gap-5">
            <div className="flex md:block justify-between">
              <div className="flex flex-col col-span-full lg:col-span-5 pb-2 pr-2">
                <h6 className="uppercase text-sm text-clutchBlue-700">
                  Name
                </h6>
                <p className="text-sm sm:text-lg">Historic Furlong Building</p>
              </div>

              <div className="flex flex-col col-span-full lg:col-span-5 pb-2 pr-2">
                <h6 className="uppercase text-sm text-clutchBlue-700">
                  Location
                </h6>
                <p className="text-sm sm:text-lg">Central Business District</p>
              </div>

              <div className="flex flex-col col-span-full lg:col-span-3 pb-2 pr-2">
                <h6 className="uppercase text-sm text-clutchBlue-700">
                  Address
                </h6>
                <p className="text-sm sm:text-lg">217 State St & 140 Front St</p>
              </div>

              <div className="flex flex-col lg:col-span-2 pb-2 pr-2">
                <h6 className="uppercase text-sm text-clutchBlue-700">
                  City
                </h6>
                <p className="text-sm sm:text-lg">Salem</p>
              </div>

              <div className="flex flex-col lg:col-span-2 pb-2 pr-2">
                <h6 className="uppercase text-sm text-clutchBlue-700">
                  State
                </h6>
                <p className="text-sm sm:text-lg">Oregon</p>
              </div>

              <div className="flex flex-col lg:col-span-2 pb-2 pr-2">
                <h6 className="uppercase text-sm text-clutchBlue-700">
                  Zip Code
                </h6>
                <p className="text-sm sm:text-lg">97301</p>
              </div>
            </div>
            
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1034.0756271093355!2d-123.041991286519!3d44.9410963465145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54bfff72dc350ceb%3A0x9a27731d2444ba49!2s217%20State%20St%2C%20Salem%2C%20OR%2097301!5e0!3m2!1sen!2sus!4v1720221687393!5m2!1sen!2sus"
              className="h-[400px] border-4 rounded-3xl border-white flex justify-end w-full md:w-1/2  object-cover shadow-inner shadow-white shadow-2xl"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
    
  );
}
