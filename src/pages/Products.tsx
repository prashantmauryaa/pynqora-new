import React from 'react';
import SectionHeader from '../components/SectionHeader';

const Products: React.FC = () => {
  return (
    <div className="page-wrapper">
      <section className="section" style={{ paddingTop: '160px' }}>
        <div className="container">
          <SectionHeader 
            label="Products"
            title="Software built in-house."
            description="Explore our suite of SaaS offerings, developer tools, and templates."
          />
        </div>
      </section>
      
      <section className="section bg-elevated section-border">
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Our Ecosystem</h2>
          <p style={{ color: 'var(--color-text-secondary)' }}>Content for Current Products, SaaS, Developer Tools, AI Tools, and Utilities will go here.</p>
        </div>
      </section>
    </div>
  );
};

export default Products;
