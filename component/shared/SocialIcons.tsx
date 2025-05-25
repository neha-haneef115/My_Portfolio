import Link from 'next/link';
import { FaLinkedinIn } from "react-icons/fa";
import { RxGithubLogo } from "react-icons/rx";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoBehance } from "react-icons/io5";

type SocialIconsProps = {
  className?: string;
};

const SocialIcons = ({ className = '' }: SocialIconsProps) => {
  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/neha-haneef-299b40243/',
      icon: <FaLinkedinIn />,
      label: 'LinkedIn'
    },
    {
      href: 'https://github.com/neha-haneef115',
      icon: <RxGithubLogo />,
      label: 'GitHub'
    },
    {
      href: 'https://x.com/astrotistic115',
      icon: <FaXTwitter />,
      label: 'X'
    },
    {
      href: 'https://www.behance.net/nehahaneef115',
      icon: <IoLogoBehance />,
      label: 'Behance'
    }
  ];

  return (
    <div className={`flex gap-4 ${className}`}>
     {socialLinks.map((link) => (
  <Link 
    key={link.label}
    href={link.href}
    aria-label={link.label}
    className="flex items-center justify-center w-12 h-12 border-2 border-[rgb(212,31,31)] rounded-full text-2xl text-[rgb(212,31,31)] transition-all hover:scale-110 hover:-translate-y-1 hover:bg-[rgb(212,31,31)] hover:text-white"
  >
    {link.icon}
  </Link>
))}

    </div>
  );
};

export default SocialIcons;