import TeamMemberCard from "./TeamMemberCard";
import { BsPersonCircle } from "react-icons/bs";

export default async function TeamMemberSection() {
  const data = [
    {
      fullName: "Johnathan Smith",
      imageUrl: "https://example.com/johnathan-smith.jpg",
      title: "Software Engineer",
      email: "johnathan.smith@example.com",
      height: 300,
      width: 300,
      blurDataUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD",
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores illum asperiores provident ullam, ab eum veniam nulla ex rem explicabo placeat saepe sit perferendis cupiditate minima facilis totam quo suscipit?"
    },
    {
      fullName: "Emma Thompson",
      imageUrl: "https://example.com/emma-thompson.jpg",
      title: "Product Manager",
      email: "emma.thompson@example.com",
      height: 300,
      width: 300,
      blurDataUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD",
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores illum asperiores provident ullam, ab eum veniam nulla ex rem explicabo placeat saepe sit perferendis cupiditate minima facilis totam quo suscipit?"
    },
    {
      fullName: "Michael Johnson",
      imageUrl: "https://example.com/michael-johnson.jpg",
      title: "UX Designer",
      email: "michael.johnson@example.com",
      height: 300,
      width: 300,
      blurDataUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD",
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores illum asperiores provident ullam, ab eum veniam nulla ex rem explicabo placeat saepe sit perferendis cupiditate minima facilis totam quo suscipit?"
    },
    {
      fullName: "Sophia Martinez",
      imageUrl: "https://example.com/sophia-martinez.jpg",
      title: "Marketing Specialist",
      email: "sophia.martinez@example.com",
      height: 300,
      width: 300,
      blurDataUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD",
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores illum asperiores provident ullam, ab eum veniam nulla ex rem explicabo placeat saepe sit perferendis cupiditate minima facilis totam quo suscipit?"
    },
    {
      fullName: "David Brown",
      imageUrl: "https://example.com/david-brown.jpg",
      title: "Data Analyst",
      email: "david.brown@example.com",
      height: 300,
      width: 300,
      blurDataUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD"
    },
    {
      fullName: "Olivia Lee",
      imageUrl: "https://example.com/olivia-lee.jpg",
      title: "Sales Executive",
      email: "olivia.lee@example.com",
      height: 300,
      width: 300,
      blurDataUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD"
    },
    {
      fullName: "James Wilson",
      imageUrl: "https://example.com/james-wilson.jpg",
      title: "Operations Manager",
      email: "james.wilson@example.com",
      height: 300,
      width: 300,
      blurDataUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD"
    },
    {
      fullName: "Isabella Taylor",
      imageUrl: "https://example.com/isabella-taylor.jpg",
      title: "Customer Support",
      email: "isabella.taylor@example.com",
      height: 300,
      width: 300,
      blurDataUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD"
    },
    {
      fullName: "Liam Garcia",
      imageUrl: "https://example.com/liam-garcia.jpg",
      title: "Financial Analyst",
      email: "liam.garcia@example.com",
      height: 300,
      width: 300,
      blurDataUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD"
    },
    {
      fullName: "Mia Clark",
      imageUrl: "https://example.com/mia-clark.jpg",
      title: "HR Manager",
      email: "mia.clark@example.com",
      height: 300,
      width: 300,
      blurDataUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD"
    }
  ];

  // const teamMembersArray = data[0]?.teamMembers;

  return (
    <section
      id="team"
      className="p-4"
    >
      <h2 className="text-4xl md:text-7xl 2xl:text-8xl text-center">
        Our Team
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 p-2 gap-4 ">
        {data.map((member, index) => (
          <figure data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" key={index} className="h-full w-full shadow-inner shadow-[#2A2669] rounded-lg ">
              <TeamMemberCard
              fullName={member.fullName}
              // photoUrl={member.imageUrl}
              blurDataURL={member.blurDataURL}
              height={member.height}
              width={member.width}
              title={member.title}
              email={member.email}
              // quote={member.quote} 
            />
          </figure>
          
        ))}
      </div>
    </section>
  );
}
