"use client"
import Button from './shared/Button';
import React, { useState, useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaGithub, FaPalette, FaCode } from "react-icons/fa";

interface Project {
  id: number;
  title: string;
  type: 'UI/UX Design' | 'Next.js Application';
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
}

type ProjectFilter = 'all' | 'UI/UX Design' | 'Next.js Application';

const ProjectsSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all');
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "Health Care Website",
      type: "UI/UX Design",
      description: "Clean, calm UI for a trusted healthcare experience.",
      image: "/1.png",
      tags: ["Figma", "UI/UX", "Healthcare"],
      demoUrl: "https://www.behance.net/gallery/224694539/Averra-Real-state-website",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "AyaNova",
      type: "Next.js Application",
      description: "An astronomy-focused website that explores celestial wonders, validated with Quranic Ayahs",
      image: "/aya.png",
      tags: ["Next.js", "Tailwind", "TypeScript"],
      demoUrl: "https://aya-nova-neha-haneef115-neha-haneefs-projects.vercel.app/",
      githubUrl: "https://github.com/neha-haneef115/AyaNova"
    },
    {
      id: 3,
      title: "Averra Real Estate Website",
      type: "UI/UX Design",
      description: "Elegant design for luxury real estate.",
      image: "2.png",
      tags: ["Luxury Look", "Modern Web", "RealEstateUI"],
      demoUrl: "https://www.behance.net/gallery/224694539/Averra-Real-state-website",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Car rental website",
      type: "Next.js Application",
      description: "A web application facilitating car rentals.",
      image: "/car.png",
      tags: ["Next.js", "Frontend development"],
      demoUrl: "https://car-rent-website-puce.vercel.app/",
      githubUrl: "https://github.com/neha-haneef115/Hackhaton3-Nextjs_Design_Jam_2024"
    },
    {
      id: 5,
      title: "Camera rental website",
      type: "UI/UX Design",
      description: "A vibrant camera rental site designed for ease, speed, and professional presentation.",
      image: "/caremar.png",
      tags: ["RentalPlatform", "Landing Page"],
      demoUrl: "https://www.behance.net/gallery/219979735/Camflex-website",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Data Dashboard",
      type: "Next.js Application",
      description: "Interactive dashboard with charts and analytics",
      image: "/frame1.png",
      tags: ["Next.js", "Charts", "API Integration"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 7,
      title: "Personal Portfolio",
      type: "UI/UX Design",
      description: "A sleek, personal portfolio to showcase my work.",
      image: "/11.png",
      tags: ["PortfolioDesign", "Creative UI"],
      demoUrl: "https://www.behance.net/gallery/213537449/Personal-Portfolio",
      githubUrl: "#"
    },
    {
      id: 8,
      title: "Property Platform",
      type: "Next.js Application",
      description: "Property listing platform with advanced search and filtering",
      image: "/frame1.png",
      tags: ["Next.js", "Maps", "Search"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 9,
      title: "MealMate UX Case Study",
      type: "UI/UX Design",
      description: "UX case study solving food delivery pain points.",
      image: "/meal.png",
      tags: ["UX Design", "Case Study", "Food Delivery"],
      demoUrl: "https://www.behance.net/gallery/211121769/E-commerce-Casual-Outfit-Store",
      githubUrl: "#"
    },
    {
      id: 10,
      title: "Travel booking app",
      type: "UI/UX Design",
      description: "Modern and user-friendly travel app UI to explore, plan, and book trips with ease.",
      image: "/travel.png",
      tags: ["Booking App", "Travel Planner", "Mobile UI"],
      demoUrl: "https://www.behance.net/gallery/211180143/Travelling-App-UI",
      githubUrl: "#"
    },
    {
      id: 11,
      title: "Food Delivery Application",
      type: "UI/UX Design",
      description: "A sleek and intuitive food delivery app design for seamless ordering and real-time tracking.",
      image: "/food.png",
      tags: ["Food Delivery", "Mobile App", "UX Design"],
      demoUrl: "https://www.behance.net/gallery/211121769/E-commerce-Casual-Outfit-Store",
      githubUrl: "#"
    },
    {
      id: 12,
      title: "E-commerce outfit store",
      type: "UI/UX Design",
      description: "Comprehensive fashion e-commerce interface with modern styling",
      image: "/4.png",
      tags: ["Fashion Store", "Clean Layout", "E-commerce UI"],
      demoUrl: "https://www.behance.net/gallery/211121769/E-commerce-Casual-Outfit-Store",
      githubUrl: "#"
    },
    {
      id: 13,
      title: "Western clothing website",
      type: "UI/UX Design",
      description: "A bold and stylish website UI for western fashion, designed to highlight statement pieces",
      image: "/5.png",
      tags: ["Fashion Store", "Clean Layout", "E-commerce UI"],
      demoUrl: "https://www.behance.net/gallery/211121769/E-commerce-Casual-Outfit-Store",
      githubUrl: "#"
    },
    {
      id: 14,
      title: "Nike shoe app",
      type: "UI/UX Design",
      description: "A dynamic and sleek UI design for a Nike shoe shopping app, focused on product highlights and user experience.",
      image: "/shoe.png",
      tags: ["Shoe App", "Modern Design", "Nike"],
      demoUrl: "https://www.behance.net/gallery/225365103/Nike-shoe-app",
      githubUrl: "#"
    }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.type === activeFilter
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const maxScroll = container.scrollWidth - container.clientWidth;
      const currentScroll = container.scrollLeft;

      if (currentScroll >= maxScroll - 10) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: isMobile ? 280 : 320, behavior: 'smooth' });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, filteredProjects, isMobile]);

  const scroll = (direction: 'left' | 'right'): void => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const scrollAmount = isMobile ? 280 : 400;
    
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
    
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 100);
    
    setTimeout(() => {
      updateScrollButtons();
    }, 300);
  };

  const updateScrollButtons = (): void => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  const handleScroll = (): void => {
    updateScrollButtons();
  };

  const handleProjectClick = (url: string): void => {
    if (url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleFilterChange = (filter: ProjectFilter): void => {
    setActiveFilter(filter);
    setTimeout(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  const handleMouseEnter = (): void => {
    if (!isMobile) {
      setIsAutoPlaying(false);
    }
  };

  const handleMouseLeave = (): void => {
    if (!isMobile) {
      setIsAutoPlaying(true);
    }
  };

  return (
    <section id="project" className="bg-black py-6 sm:py-12 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-6 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
            Featured
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 ml-2 sm:ml-4">
              Projects
            </span>
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mt-6 sm:mt-10 mb-4 sm:mb-8 px-4 sm:px-0">
            <button
              onClick={() => handleFilterChange('all')}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
                activeFilter === 'all'
                  ? 'bg-[#080808] text-[rgb(212,31,31)] border-2 border-[rgb(212,31,31)]'
                  : 'bg-zinc-900/50 rounded-lg border border-zinc-700 text-gray-300'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => handleFilterChange('UI/UX Design')}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base ${
                activeFilter === 'UI/UX Design'
                  ? 'bg-[#080808] text-[rgb(212,31,31)] border-2 border-[rgb(212,31,31)]'
                  : 'bg-zinc-900/50 rounded-lg border border-zinc-700 text-gray-300'
              }`}
            >
              <FaPalette className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">UI/UX Design</span>
              <span className="sm:hidden">Design</span>
            </button>
            <button
              onClick={() => handleFilterChange('Next.js Application')}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base ${
                activeFilter === 'Next.js Application'
                  ? 'bg-[#080808] text-[rgb(212,31,31)] border-2 border-[rgb(212,31,31)]'
                  : 'bg-zinc-900/50 rounded-lg border border-zinc-700 text-gray-300'
              }`}
            >
              <FaCode className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Next.js Apps</span>
              <span className="sm:hidden">Apps</span>
            </button>
          </div>
        </div>

        <div 
          className="relative pb-2"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 transform hover:scale-105 ${
              canScrollLeft
                ? 'bg-red-600 border-red-600 text-white shadow-lg hover:bg-red-700'
                : 'bg-gray-800 border-gray-700 text-gray-500 cursor-not-allowed'
            }`}
            aria-label="Scroll left"
          >
            <FaChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 transform hover:scale-105 ${
              canScrollRight
                ? 'bg-red-600 border-red-600 text-white shadow-lg hover:bg-red-700'
                : 'bg-gray-800 border-gray-700 text-gray-500 cursor-not-allowed'
            }`}
            aria-label="Scroll right"
          >
            <FaChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>

          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-4 sm:gap-6 overflow-x-auto px-12 sm:px-1 py-2 sm:py-4"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {filteredProjects.map((project: Project, index: number) => (
              <div
                key={`${project.id}-${activeFilter}`}
                className="flex-shrink-0 w-72 sm:w-80 group cursor-pointer transform transition-all duration-300 hover:scale-105"
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="bg-zinc-900/50 rounded-lg border border-zinc-700 overflow-hidden transition-all duration-500 h-full hover:shadow-xl hover:shadow-red-500/10 hover:border-red-500/30">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 sm:h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                      <span className={`px-2 sm:px-3 py-1 rounded-sm text-xs font-semibold backdrop-blur-sm ${
                        project.type === 'UI/UX Design' 
                          ? 'bg-zinc-900/70 border border-zinc-400 text-gray-300' 
                          : 'bg-zinc-900/70 border border-zinc-400 text-gray-300'
                      }`}>
                        {isMobile && project.type === 'Next.js Application' ? 'Next.js' : project.type}
                      </span>
                    </div>

                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex gap-1 sm:gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={() => handleProjectClick(project.demoUrl)}
                        className="w-7 h-7 sm:w-8 sm:h-8 bg-zinc-900/70 backdrop-blur-sm rounded-lg border border-zinc-400 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300"
                        aria-label={`View ${project.title} demo`}
                      >
                        <FaExternalLinkAlt className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </button>
                      {project.type === 'Next.js Application' && (
                        <button
                          onClick={() => handleProjectClick(project.githubUrl)}
                          className="w-7 h-7 sm:w-8 sm:h-8 bg-zinc-900/70 backdrop-blur-sm rounded-lg border border-zinc-400 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300"
                          aria-label={`View ${project.title} source code`}
                        >
                          <FaGithub className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-red-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {project.tags.slice(0, isMobile ? 2 : 3).map((tag: string, tagIndex: number) => (
                        <span
                          key={tagIndex}
                          className="px-2 sm:px-3 py-1 bg-zinc-900/50 rounded-lg border border-zinc-700 text-gray-300 text-xs transition-colors duration-300 hover:border-red-500/50"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > (isMobile ? 2 : 3) && (
                        <span className="px-2 sm:px-3 py-1 bg-zinc-900/50 rounded-lg border border-zinc-700 text-gray-300 text-xs">
                          +{project.tags.length - (isMobile ? 2 : 3)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;