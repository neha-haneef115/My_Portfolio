import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
  children: ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};

const Button = ({ 
  href, 
  onClick, 
  variant = 'primary', 
  children, 
  className = '',
  type = 'button'
}: ButtonProps) => {
  const baseClasses = 'inline-block py-3 px-7 rounded-lg text-base font-semibold tracking-wider transition-all duration-200 hover:scale-105';
  
  const variantClasses = {
    primary: 'bg-[#080808] text-[rgb(212,31,31)] border-2 border-[rgb(212,31,31)] hover:bg-[rgb(212,31,31)] hover:text-white',
    outline: 'bg-[#080808] text-[rgb(212,31,31)] border-2 border-[rgb(212,31,31)] hover:bg-[rgb(212,31,31)] hover:text-white'
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;