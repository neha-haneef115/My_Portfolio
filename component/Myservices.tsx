import Link from "next/link";
import { CgWebsite } from "react-icons/cg";
import SectionHeading from "@/component/shared/SectionHeading";
import { FaLaptopCode } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";

type ServiceCardProps = {
  icon: any;
  title: string;
  description: string;
};

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-transparent p-6 sm:p-8 md:p-10 rounded-2xl shadow-[1px_1px_14px_rgb(212,31,31)] transition-all duration-500 hover:bg-black/20 hover:translate-y-[-10px]">
      <div className="text-4xl sm:text-5xl text-white mb-6 sm:mb-8">{icon}</div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-3 sm:mb-4">{title}</h2>
      <p className="text-sm sm:text-base mb-4 leading-relaxed">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <CgWebsite />,
      title: "Custom Web Apps",
      description: "I build custom web applications that solve real problems and deliver seamless user experiences. I develop scalable and interactive solutions using tools like Next.js, TypeScript, and modern APIs."
    },
    {
      icon: <FaLaptopCode />,
      title: "FRONT-END WEBSITES",
      description: "I build engaging and responsive websites that bring your ideas to life. Focusing on clean code and seamless user interactions, I ensure your site looks great and performs flawlessly on any device."
    },
    {
      icon: <IoIosColorPalette />,
      title: "UI / UX DESIGN",
      description: "I design intuitive interfaces and exceptional user experiences. From wireframes to final designs, I create user-centered solutions that are both visually appealing and highly functional."
    }
  ];

  return (
    <section className="mt-16 sm:mt-24 md:mt-32 lg:mt-40 px-4 sm:px-6 md:px-8 lg:px-12 text-white">
      <SectionHeading highlightedText="Services" className="text-center">MY</SectionHeading>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mt-8 sm:mt-10 md:mt-12">
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;