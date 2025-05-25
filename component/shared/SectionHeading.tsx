import { ReactNode } from 'react';

type SectionHeadingProps = {
  children: ReactNode;
  highlightedText?: ReactNode;
  className?: string;
};

const SectionHeading = ({ 
  children, 
  highlightedText, 
  className = '' 
}: SectionHeadingProps) => {
  return (
    <h2 className={`text-5xl text-white font-heading md:text-6xl font-bold mb-10 ${className}`}>
      {children}{' '}
      {highlightedText && (
        <span className="text-[rgb(212,31,31)]">{highlightedText}</span>
      )}
    </h2>
  );
};

export default SectionHeading;