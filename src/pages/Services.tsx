import React from 'react';
import AnimatedEntry from '../components/AnimatedEntry';
import SectionHeader from '../components/SectionHeader';
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import './Services.css';

const Services: React.FC = () => {
  return (
    <div className="services-page page-wrapper">
      <section className="section" style={{ paddingTop: '160px', paddingBottom: '40px' }}>
        <div className="container">
          <SectionHeader 
            label="Expertise"
            title="Comprehensive technical capabilities."
            description="From artificial intelligence to cloud infrastructure, our engineering teams possess the deep domain expertise required to build resilient, scalable systems."
          />
        </div>
      </section>

      <section className="section" style={{ overflow: 'hidden' }}>
        <div className="container">
          <ScrollStack 
            useWindowScroll={true} 
            itemDistance={60} 
            itemScale={0.05} 
            baseScale={0.9} 
            blurAmount={2}
          >
            {services.map((svc, idx) => (
              <ScrollStackItem key={svc.id}>
                <div style={{ display: 'flex', gap: 'var(--space-8)', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    <div className="service-row__num" style={{ fontSize: 'var(--text-4xl)', color: 'var(--color-accent)', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                      0{idx + 1}
                    </div>
                    <h3 className="service-row__title" style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {svc.title}
                      {svc.isFlagship && (
                        <span style={{ fontSize: 'var(--text-xs)', backgroundColor: 'var(--color-accent)', color: 'var(--color-bg)', padding: '0.2rem 0.6rem', borderRadius: '99px', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', verticalAlign: 'middle' }}>
                          <Star size={12} fill="currentColor" /> Flagship
                        </span>
                      )}
                    </h3>
                  </div>
                  
                  <div>
                    <p className="service-row__desc" style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-secondary)', lineHeight: 1.6, maxWidth: '800px', marginBottom: '1.5rem' }}>
                      {svc.shortDesc}
                    </p>
                    
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                      {svc.subServices.map((sub, i) => (
                        <span key={i} style={{ padding: '0.4rem 0.8rem', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '4px', fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)' }}>
                          {sub}
                        </span>
                      ))}
                    </div>

                    <Link to={`/services/${svc.id}`} className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                      Explore {svc.title}
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </section>

      <section className="section section-border bg-elevated cta-section">
        <div className="container">
          <div className="cta-banner" style={{ textAlign: 'center' }}>
            <AnimatedEntry direction="up">
              <h2 className="cta-banner__title" style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-4)' }}>Have a specific technical requirement?</h2>
              <p className="cta-banner__desc" style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-8)' }}>We can tailor our engineering approach to fit your exact needs.</p>
              <Link to="/contact" className="btn btn-accent">
                Discuss your project
                <ArrowRight size={16} style={{ marginLeft: '8px' }} />
              </Link>
            </AnimatedEntry>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
