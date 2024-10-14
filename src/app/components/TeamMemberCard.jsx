import Image from "next/image";
import { MdOutlineEmail } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";

export default function TeamMemberCard({
  fullName,
  title,
  email,
  // photoUrl,
  blurDataURL,
  height,
  width,
  quote
}) {
  return (
    <div  className="grid grid-cols-2 p-2 content-between w-full h-full "
    // className="w-fit h-full object-cover"
    >
      {/* <Image
        src={photoUrl}
        alt={fullName}
        className="md:w-80 md:h-96 sm:h-72 object-cover"
        blurDataURL={blurDataURL}
        height={height}
        width={width} 
      /> */}
      
      <h5 className="col-start-1 text-xs md:text-lg font-xs md:font-medium">{fullName}</h5>
      
      <BsPersonCircle className="col-start-3 text-6xl md:text-9xl justify-self-end"/>

       <a
            href={`mailto:${email}`}
            target="_blank"
            aria-label="Contact by email"
            className="col-end-2"
          ><MdOutlineEmail className="text-2xl" />
          </a>
          
          
          <p className="col-end-4 text-clutchBlue-700 font-medium text-xs md:text-sm justify-self-center">{title}</p>
       
          
          
          {/* <p>
            {quote} 
          </p> */}
       
      
    </div>
  );
}
