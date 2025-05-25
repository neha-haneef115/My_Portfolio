'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#project', label: 'Project' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <header className="fixed top-0 left-0 border-b-1 border-white w-full px-[5%] py-4 flex justify-between items-center z-50 bg-black/30 backdrop-blur-md">
      <Link href="#home" className="text-3xl font-extrabold text-white animate-[slideRight_1s_ease_forwards]  transition-transform duration-300 hover:scale-110">
      N<span className="text-[rgb(212,31,31)] [text-shadow:_0_0_10px_rgb(212,31,31)]">11</span>.
      </Link>
      
      <div 
        className="text-3xl text-[rgb(212,31,31)] cursor-pointer md:hidden z-[1001]"
        onClick={toggleMenu}
      >
        <RxHamburgerMenu />
      </div>
      
    <nav className={`
  md:flex gap-8
  ${menuOpen 
    ? 'fixed top-0 right-0 w-[240px] h-screen text-center bg-black/70 backdrop-blur-lg shadow-lg border-l border-white/10 z-[1000] flex flex-col items-start pl-8 pt-24'
    : 'hidden md:block'
  }
  transition-all duration-300 ease-in-out
`}>
  {navLinks.map((link) => (
    <Link
      key={link.label}
      href={link.href}
      className={`
        text-lg font-medium py-3 w-full relative
        ${activeSection === link.href.slice(1) 
          ? 'text-[rgb(212,31,31)] after:absolute after:w-[100%] after:bottom-0 after:left-1/2 after:-translate-x-1/2  after:h-0.5 after:bg-[rgb(212,31,31)]' 
          : 'text-gray-100 hover:text-[rgb(212,31,31)]'
        }
        transition-colors duration-200
      `}
      onClick={() => setMenuOpen(false)}
    >
      {link.label}
    </Link>
  ))}
</nav>
    </header>
  );
};

export default Header;