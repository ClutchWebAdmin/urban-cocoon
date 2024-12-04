import Image from "next/image";
import LinkButton from "./LinkButton";
import heroImage from "../../../public/images/hero-image.png";
import Cocoon9 from "../../../public/images/Cocoon9.jpeg";

export default function HeroSection() {
  return (
    <section className="h-full w-full relative  bg-urbanPurple-100">
      {/* Background Image */}
      <div className="relative w-full h-svh">
      <video
  
  autoPlay
  loop
  muted
  playsInline
  src="/videos/CocoonBuild.mp4"
  className="absolute top-[7rem] left-0 w-full h-[calc(100vh-7rem)] object-cover"
  data-aos="fade-in"
  data-aos-duration="1000"
  data-aos-once="true"
/>
        {/* Hero Content */}
        <div className="absolute w-full lg:w-1/2 inset-0 flex flex-col justify-end items-center lg:items-start text-center lg:text-start text-white pb-2 md:pb-20 px-2 md:pl-10">
          <h1 className="text-[32px] md:text-[32px] lg:text-5xl xl:text-7xl leading-tight text-urbanPurple-500 font-semibold text-outline">
            Experience the future of shelters with <br />
            <span className="italic">Urban Cocoon</span>
          </h1>
          <p className="mt-4 text-sm md:text-xl leading-snug  text-outline">
            A revolutionary disaster relief shelter designed to provide rapid, secure, and
            comfortable refuge for individuals and families affected by disasters. The perfect blend
            of comfort, sustainability, and affordability. With its modular design and quick
            deployment, it ensures immediate protection while supporting long-term recovery and
            resilience for communities in need.
          </p>
          <div className="mt-6">
            <LinkButton linkTo="/features" text="Learn more" />
          </div>
        </div>
      </div>

      {/* About The Mission */}
      <div className="w-full py-10 bg-urbanPurple-100 px-5 md:px-10">
  <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-10">
    {/* Text and Link Section */}
    <div
      className="flex flex-col items-center lg:items-start gap-4 md:gap-10 justify-center text-center lg:text-left order-1"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <h1 className="text-[28px] md:text-4xl xl:text-5xl font-semibold">
        About The Mission
      </h1>
      <p className="text-xs md:text-lg leading-snug max-w-4xl text-urbanPurple-900">
        At <span className="italic">Urban Cocoon</span>, our mission is to provide swift,
        sustainable, and secure shelter solutions for individuals and families affected by
        disasters. Through innovative design and cutting-edge materials, we aim to create
        modular, resilient shelters that offer immediate protection and long-term comfort,
        ensuring dignity and safety in the aftermath of crises while supporting recovery and
        rebuilding efforts. By combining portability with ease of deployment, Urban Cocoon
        shelters can be rapidly transported and assembled in even the most challenging
        environments. Our commitment to innovation and community resilience drives us to
        continuously evolve our designs, empowering those affected by disasters with not just
        shelter, but a foundation for hope and renewal.
      </p>
      <div className="mt-6">
        <LinkButton linkTo="/pricing" text="Pricing" />
      </div>
    </div>

    {/* Image Section */}
    <Image
      src={heroImage}
      alt="Photo of Urban Cocoon"
      className="w-full h-auto object-cover order-2 lg:order-1 p-10"
      priority
      data-aos="fade-in"
      data-aos-duration="1000"
      data-aos-once="true"
    />
  </div>
</div>

        
      

      {/* Additional Info */}
      <div className="py-10 bg-urbanPurple-200 px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-wrap">
            <div className="flex flex-col pb-2 pr-2">
              <h6 className="uppercase text-sm text-urbanPurple-900">Name</h6>
              <p className="text-sm sm:text-lg">Historic Furlong Building</p>
            </div>
            <div className="flex flex-col pb-2 pr-2">
              <h6 className="uppercase text-sm text-urbanPurple-900">Location</h6>
              <p className="text-sm sm:text-lg">Central Business District</p>
            </div>
            <div className="flex flex-col pb-2 pr-2">
              <h6 className="uppercase text-sm text-urbanPurple-900">City</h6>
              <p className="text-sm sm:text-lg">Salem</p>
            </div>
            <div className="flex flex-col pb-2 pr-2">
              <h6 className="uppercase text-sm text-urbanPurple-900">State</h6>
              <p className="text-sm sm:text-lg">Oregon</p>
            </div>
          </div>

          {/* Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1034.0756271093355!2d-123.041991286519!3d44.9410963465145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54bfff72dc350ceb%3A0x9a27731d2444ba49!2s217%20State%20St%2C%20Salem%2C%20OR%2097301!5e0!3m2!1sen!2sus!4v1720221687393!5m2!1sen!2sus"
            className="w-full h-[400px] border-4 rounded-3xl border-white shadow-inner"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}