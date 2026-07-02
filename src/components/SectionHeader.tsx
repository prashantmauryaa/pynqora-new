import React from 'react';
import AnimatedEntry from './AnimatedEntry';
import './SectionHeader.css';

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  label, 
  title, 
  description, 
  align = 'left' 
}) => {
  return (
    <div className={`section-header section-header--${align}`}>
      <AnimatedEntry delay={0.05}>
        <h2 className="section-header__title">{title}</h2>
      </AnimatedEntry>
      {description && (
        <AnimatedEntry delay={0.1}>
          <p className="section-header__desc">{description}</p>
        </AnimatedEntry>
      )}
    </div>
  );
};

export default SectionHeader;
