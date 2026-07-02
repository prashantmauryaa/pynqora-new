import React from 'react';
import SectionHeader from '../components/SectionHeader';

const Manifesto: React.FC = () => {
  return (
    <div className="page-wrapper">
      <section className="section" style={{ paddingTop: '160px' }}>
        <div className="container">
          <SectionHeader 
            label="Manifesto"
            title="What we believe."
            description="Our core engineering principles and product philosophy."
          />
        </div>
      </section>
      
      <section className="section bg-elevated section-border">
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Quality Standards</h2>
          <p style={{ color: 'var(--color-text-secondary)' }}>Detailed text outlining Engineering Principles, Working Style, and Long-term Vision will go here.</p>
        </div>
      </section>
    </div>
  );
};

export default Manifesto;
