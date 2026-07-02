import React from 'react';
import SectionHeader from '../components/SectionHeader';

const Labs: React.FC = () => {
  return (
    <div className="page-wrapper">
      <section className="section" style={{ paddingTop: '160px' }}>
        <div className="container">
          <SectionHeader 
            label="Labs"
            title="Experiments & R&D."
            description="Our innovation journal covering AI experiments, product concepts, and internal tools."
          />
        </div>
      </section>
      
      <section className="section bg-elevated section-border">
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Research & Prototypes</h2>
          <p style={{ color: 'var(--color-text-secondary)' }}>Content for AI Experiments, Product Concepts, Internal Tools, and Prototypes will go here.</p>
        </div>
      </section>
    </div>
  );
};

export default Labs;
