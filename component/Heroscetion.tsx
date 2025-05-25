'use client';

import Button from '@/component/shared/Button';
import SocialIcons from '@/component/shared/SocialIcons';
import { useEffect, useRef } from 'react';
import pf from '@/public/Pf.png'
import Image from 'next/image';

const HeroSection = () => {
  const professionRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const professions = ["Front-end Developer", "UI / UX Designer"];
    let currentIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const type = () => {
      const currentProfession = professions[currentIndex];
      
      if (isDeleting) {
        if (professionRef.current) {
          professionRef.current.textContent = currentProfession.substring(0, charIndex - 1);
          charIndex--;
        }
        typingSpeed = 50;
      } else {
        if (professionRef.current) {
          professionRef.current.textContent = currentProfession.substring(0, charIndex + 1);
          charIndex++;
        }
        typingSpeed = 100;
      }

      if (!isDeleting && charIndex === currentProfession.length) {
        isDeleting = true;
        typingSpeed = 1000; 
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % professions.length;
      }

      setTimeout(type, typingSpeed);
    };

    const typeTimer = setTimeout(type, 1000);
    return () => clearTimeout(typeTimer);
  }, []);

  return (
    <section id="home" className="flex flex-col-reverse md:flex-row py-[80px] md:py-[150px] px-[20px] md:px-[60px] items-center justify-center gap-6 md:gap-16">
      <div className="flex flex-col items-center md:items-start justify-center w-full md:w-1/2 text-center md:text-left">
        <h3 className="text-2xl md:text-5xl text-white font-bold animate-[slideBottom2_1s_ease_forwards_0.7s]">
          Hello, This is
        </h3>
        <h1 className="text-4xl md:text-5xl font-bold mt-2 md:mt-4 animate-[slideRight_1s_ease_forwards_1s]">
          <span className="text-[rgb(212,31,31)]">Neha Haneef.</span>
        </h1>
        <h3 className="text-2xl md:text-3xl font-semibold text-white mt-2 md:mt-6 mb-4 md:mb-8 animate-[slideBottom_1s_ease_forwards_0.7s]">
          I&apos;m a <span ref={professionRef} className="text-[rgb(212,31,31)]"></span>
        </h3>
        <p className="text-base md:text-lg leading-relaxed max-w-[500px] text-white animate-[slideLeft_1s_ease_forwards_1s]">
          I am an experienced front-end web developer and UI/UX designer with a passion for crafting responsive, user-centered designs.
          Whether it&apos;s showcasing services or launching an online store, I&apos;m here to help your business shine online with a user-friendly touch.
        </p>
        
        <SocialIcons className="mt-6 md:mt-4" />
        
        <div className="flex gap-4 mt-5">
          <Button href="#contact">Hire</Button>
          <Button href="https://wa.me/qr/7E65GKK7VU5VK1" variant="outline">Contact</Button>
        </div>
      </div>
      
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden shadow-[0_0_25px_rgb(212,31,31)] transition-shadow duration-300 hover:shadow-[0_0_25px_rgb(212,31,31),0_0_50px_rgb(212,31,31),0_0_100px_rgb(212,31,31)]">
          <Image 
            src={pf} 
            alt="Profile Picture"
            className="w-full h-full object-cover 
                      transition-transform duration-500 ease-in-out 
                      group-hover:scale-105"
            width={450}
            height={450}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;