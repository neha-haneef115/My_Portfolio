'use client';

import SectionHeading from '@/component/shared/SectionHeading';
import { 
  FaHtml5, 
  FaCss3Alt,  
  FaPython, 
  FaGithub 
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiSanity 
} from 'react-icons/si';
import { CgFigma } from "react-icons/cg";

type ProfessionalSkillProps = {
  name: string;
  percentage: number;
};

type TechSkillIconProps = {
  icon: React.ElementType;
  name: string;
  color: string;
};

const TechSkillIcon = ({ icon: Icon, name, color }: TechSkillIconProps) => {
  return (
    <div className="flex flex-col items-center justify-center bg-zinc-900 p-2 sm:p-4 rounded-lg w-24 h-24 sm:w-32 sm:h-32 m-1 sm:m-2 transition-all hover:scale-110">
      <Icon className="text-3xl sm:text-5xl mb-1 sm:mb-2" style={{ color }} />
      <p className="text-white text-center text-xs sm:text-sm mt-1 sm:mt-2">{name}</p>
    </div>
  );
};

const ProfessionalSkill = ({ name, percentage }: ProfessionalSkillProps) => {
  const circumference = 502;
  const strokeDashoffset = circumference - (circumference * percentage) / 100;

  return (
    <div className="flex flex-col items-center mb-4 sm:mb-8">
      <div className="relative w-28 h-28 sm:w-40 sm:h-40">
        <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
          <circle 
            cx="100" 
            cy="100" 
            r="80" 
            fill="transparent"
            stroke="#1f1f1f"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <circle 
            cx="100" 
            cy="100" 
            r="80" 
            fill="transparent"
            stroke="#d41f1f"
            strokeWidth="14"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
          />
        </svg>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl sm:text-2xl font-bold text-white">
            {percentage}%
          </span>
        </div>
      </div>
      
      <div className="mt-2 sm:mt-4 text-center">
        <span className="text-sm sm:text-lg font-medium text-white">
          {name}
        </span>
      </div>
    </div>
  );
};

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Python', icon: FaPython, color: '#3776AB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Figma', icon: CgFigma, color: '#F24E1E' },
    { name: 'Git & GitHub', icon: FaGithub, color: '#ffffff' },
    { name: 'Sanity CMS', icon: SiSanity, color: '#F03E2F' }
  ];

  const professionalSkills = [
    { name: 'Creativity', percentage: 90 },
    { name: 'Problem Solving', percentage: 75 },
    { name: 'Communication', percentage: 65 },
    { name: 'Teamwork', percentage: 85 }
  ];

  return (
    <section id="skills" className="min-h-screen py-10 sm:py-20 px-4 sm:px-[12%]">
      <SectionHeading highlightedText="Skills" className="text-center">MY</SectionHeading>
      
      <div className="flex flex-col lg:flex-row justify-between gap-4 sm:gap-8 mt-8 sm:mt-12">
        {/* Technical Skills */}
        <div className="w-full lg:w-[48%] py-6 sm:py-12 px-4 sm:px-8 bg-zinc-900/50 rounded-lg border border-zinc-700">
          <h1 className="text-center text-white underline decoration-2 sm:decoration-4 underline-offset-4 mb-4 sm:mb-8 text-lg sm:text-xl font-medium">
            Technical Skills
          </h1>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 justify-items-center">
            {technicalSkills.map((skill, index) => (
              <TechSkillIcon 
                key={index}
                icon={skill.icon}
                name={skill.name}
                color={skill.color}
              />
            ))}
          </div>
        </div>

        {/* Professional Skills */}
        <div className="w-full lg:w-[48%] py-6 sm:py-12 px-4 sm:px-8 bg-zinc-900/50 rounded-lg border border-zinc-700 mt-4 sm:mt-0">
          <h1 className="text-center text-white underline decoration-2 sm:decoration-4 underline-offset-4 mb-4 sm:mb-8 text-lg sm:text-xl font-medium">
            Professional Skills
          </h1>
          
          <div className="grid grid-cols-2 gap-2 sm:gap-8 place-items-center">
            {professionalSkills.map((skill, index) => (
              <ProfessionalSkill 
                key={index}
                name={skill.name}
                percentage={skill.percentage}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;