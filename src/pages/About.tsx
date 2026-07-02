import React from 'react';
import AnimatedEntry from '../components/AnimatedEntry';
import SectionHeader from '../components/SectionHeader';
import { ArrowRight, CheckCircle, Target, Compass, Zap, Shield, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-page page-wrapper">
      {/* 1. Story / Header */}
      <section className="section" style={{ paddingTop: '160px', paddingBottom: '80px' }}>
        <div className="container">
          <SectionHeader 
            label="About"
            title="We are engineers first."
            description="Pynqora was founded to bridge the gap between business needs and true technical excellence. We noticed a pattern: too many companies were receiving bloated, unmaintainable code from traditional agencies. We set out to change that by acting as a dedicated engineering partner that prioritizes resilient architecture and clean code."
          />
        </div>
      </section>

      {/* 2. Vision & Mission */}
      <section className="section section-border bg-elevated">
        <div className="container">
          <div className="grid-2 mission-vision" style={{ gap: '4rem' }}>
            <AnimatedEntry delay={0.1}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <Eye size={24} className="text-accent" />
                <h3 style={{ fontSize: '2rem', color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>Our Vision</h3>
              </div>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7, fontSize: 'var(--text-lg)' }}>
                To become the defacto engineering standard for startups and enterprises globally. We envision a digital landscape where businesses are empowered by their software architecture, rather than constrained by it.
              </p>
            </AnimatedEntry>
            <AnimatedEntry delay={0.2}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <Target size={24} className="text-accent" />
                <h3 style={{ fontSize: '2rem', color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>Our Mission</h3>
              </div>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7, fontSize: 'var(--text-lg)' }}>
                To replace brittle legacy systems and chaotic manual workflows with elegant, highly performant software. We aim to deliver uncompromising technical quality on every single deployment.
              </p>
            </AnimatedEntry>
          </div>
        </div>
      </section>

      {/* 3. Why Pynqora Exists */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <AnimatedEntry direction="up">
              <h2 className="section-heading" style={{ marginBottom: '2rem' }}>Why Pynqora Exists</h2>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
                The software development industry is plagued by misaligned incentives. Traditional agencies optimize for billable hours and rushed deliveries, resulting in "spaghetti code" that becomes a nightmare for internal teams to inherit.
              </p>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
                <strong>Pynqora exists to be the antidote.</strong> We align our success with yours by engineering systems designed for long-term scalability. We don't just build features; we build the technical foundation your company will run on for years.
              </p>
            </AnimatedEntry>
          </div>
        </div>
      </section>

      {/* 4. Philosophy & Core Values */}
      <section className="section section-border bg-secondary">
        <div className="container">
          <AnimatedEntry direction="up">
            <h2 className="section-heading text-center" style={{ marginBottom: '1rem' }}>Philosophy & Values</h2>
            <p className="text-center" style={{ color: 'var(--color-text-secondary)', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem' }}>The fundamental principles that govern our engineering culture.</p>
          </AnimatedEntry>
          
          <div className="values-grid grid-2" style={{ gap: '2rem' }}>
            {[
              { icon: <Shield size={24} />, title: 'Technical Rigor', desc: 'We write clean, strictly typed, and thoroughly tested code. Performance and security are treated as baseline features, not afterthoughts.' },
              { icon: <Zap size={24} />, title: 'Total Ownership', desc: 'When we deploy a system, we take full responsibility for its operation. We treat your infrastructure as if it were our own.' },
              { icon: <Compass size={24} />, title: 'Radical Transparency', desc: 'No black boxes. You get honest timelines, clear communication, and direct access to the engineers writing your code.' },
              { icon: <CheckCircle size={24} />, title: 'Continuous Delivery', desc: 'We deploy small, fast, and frequently. We believe in getting working software into users\' hands as quickly as possible to validate assumptions.' }
            ].map((val, idx) => (
              <AnimatedEntry key={val.title} delay={0.1 * idx}>
                <div style={{ backgroundColor: 'var(--color-bg)', padding: '2.5rem', borderRadius: '16px', height: '100%', border: '1px solid var(--color-border)' }}>
                  <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--color-surface)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--color-accent)' }}>
                    {val.icon}
                  </div>
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-text)', fontWeight: 600 }}>{val.title}</h4>
                  <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{val.desc}</p>
                </div>
              </AnimatedEntry>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Approach */}
      <section className="section">
        <div className="container">
          <AnimatedEntry direction="up">
            <h2 className="section-heading text-center" style={{ marginBottom: '4rem' }}>Our Approach</h2>
          </AnimatedEntry>
          <div className="grid-3" style={{ gap: '3rem' }}>
            <AnimatedEntry direction="up" delay={0.1}>
              <div style={{ borderTop: '3px solid var(--color-accent)', paddingTop: '1.5rem' }}>
                <span style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--color-surface)', lineHeight: 1, display: 'block', marginBottom: '1rem' }}>01</span>
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: '1rem' }}>Analyze deeply</h3>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>We dissect your business logic to understand the core problem before proposing any technical architecture.</p>
              </div>
            </AnimatedEntry>
            <AnimatedEntry direction="up" delay={0.2}>
              <div style={{ borderTop: '3px solid var(--color-border)', paddingTop: '1.5rem' }}>
                <span style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--color-surface)', lineHeight: 1, display: 'block', marginBottom: '1rem' }}>02</span>
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: '1rem' }}>Build securely</h3>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>We engineer the solution using enterprise-grade frameworks, prioritizing data security and scalable database modeling.</p>
              </div>
            </AnimatedEntry>
            <AnimatedEntry direction="up" delay={0.3}>
              <div style={{ borderTop: '3px solid var(--color-border)', paddingTop: '1.5rem' }}>
                <span style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--color-surface)', lineHeight: 1, display: 'block', marginBottom: '1rem' }}>03</span>
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: '1rem' }}>Deploy confidently</h3>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>Through automated CI/CD pipelines, we ensure that every update is rigorously tested and deployed with zero downtime.</p>
              </div>
            </AnimatedEntry>
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="section section-border bg-elevated cta-section">
        <div className="container">
          <div className="cta-banner" style={{ textAlign: 'center' }}>
            <AnimatedEntry direction="up">
              <h2 className="cta-banner__title" style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-4)' }}>Partner with our engineering team</h2>
              <p className="cta-banner__desc" style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-8)' }}>We take on a limited number of complex projects each quarter to ensure uncompromising quality.</p>
              <Link to="/contact" className="btn btn-accent">
                Start a conversation
                <ArrowRight size={16} style={{ marginLeft: '8px' }} />
              </Link>
            </AnimatedEntry>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
