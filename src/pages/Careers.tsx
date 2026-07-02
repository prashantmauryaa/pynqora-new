import React from 'react';
import SectionHeader from '../components/SectionHeader';

const Careers: React.FC = () => {
  return (
    <div className="page-wrapper">
      <section className="section" style={{ paddingTop: '160px' }}>
        <div className="container">
          <SectionHeader 
            label="Careers"
            title="Join the engineering team."
            description="We are always looking for exceptional talent to build robust software."
          />
        </div>
      </section>
      
      <section className="section bg-elevated section-border">
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Open Positions</h2>
          <p style={{ color: 'var(--color-text-secondary)' }}>Content for Job Listings, Internships, Culture, and Benefits will go here.</p>
        </div>
      </section>
    </div>
  );
};

export default Careers;
