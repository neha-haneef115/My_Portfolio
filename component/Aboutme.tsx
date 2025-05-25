import Button from "@/component/shared/Button";
import SectionHeading from "@/component/shared/SectionHeading";
import pf from "@/public/Pf.png"
import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
      <div className="hidden md:flex justify-center">
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[450px] xl:h-[450px] rounded-full overflow-hidden shadow-[0_0_25px_rgb(212,31,31)] transition-shadow duration-300 hover:shadow-[0_0_25px_rgb(212,31,31),0_0_50px_rgb(212,31,31),0_0_100px_rgb(212,31,31)]">
          <Image 
            src={pf} 
            alt="Profile Picture"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            width={450}
            height={450}
          />
        </div>
      </div>
      
      <div className="text-white">
        <SectionHeading highlightedText="Me" className="text-center md:text-left text-4xl md:text-6xl mb-4">About</SectionHeading>
        <h4 className="text-2xl sm:text-3xl font-semibold mb-4 md:mb-6">Front-end Developer</h4>
        <p className="text-base sm:text-lg leading-relaxed mb-8">
          I'm a front-end developer and UI/UX designer passionate about crafting intuitive, 
          responsive, and visually appealing web experiences. My projects blend modern technologies 
          like HTML, CSS, Python, TypeScript, React, Next.js, and Tailwind CSS with thoughtful 
          design principles using tools like Figma. I specialize in building seamless user interfaces
          and scalable front-end architectures, often collaborating with teams to bring ideas to life.
          From clean code to pixel-perfect designs, I focus on creating solutions that are both 
          functional and user-centered.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;