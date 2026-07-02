import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Zap } from 'lucide-react';
import { services } from '../data/services';
import AnimatedEntry from '../components/AnimatedEntry';
import './ServiceDetail.css';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find the requested service
  const service = services.find(s => s.id === id);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="service-detail-page page-wrapper">
      {/* Hero Section */}
      <section className="section bg-secondary" style={{ paddingTop: '160px', paddingBottom: '80px', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <AnimatedEntry direction="up">
            <Link to="/services" className="back-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-secondary)', marginBottom: '2rem', fontSize: 'var(--text-sm)', textDecoration: 'none' }}>
              <ArrowLeft size={16} /> Back to Services
            </Link>
            
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontFamily: 'var(--font-heading)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1.5rem', maxWidth: '900px' }}>
              {service.title}
            </h1>
            
            <p style={{ fontSize: 'var(--text-xl)', color: 'var(--color-text-secondary)', maxWidth: '700px', lineHeight: 1.6, marginBottom: '3rem' }}>
              {service.shortDesc}
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {service.subServices.map((sub, i) => (
                <span key={i} style={{ padding: '0.5rem 1rem', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '99px', fontSize: 'var(--text-sm)', color: 'var(--color-text)' }}>
                  {sub}
                </span>
              ))}
            </div>
          </AnimatedEntry>
        </div>
      </section>

      {/* Overview & Why it Matters */}
      <section className="section">
        <div className="container">
          <div className="service-grid">
            <div className="service-content">
              <AnimatedEntry direction="up" delay={0.1}>
                <h2 className="section-heading">Overview</h2>
                <p className="body-text">{service.overview}</p>
              </AnimatedEntry>

              <AnimatedEntry direction="up" delay={0.2} style={{ marginTop: '4rem' }}>
                <h2 className="section-heading">Why it matters</h2>
                <p className="body-text">{service.whyItMatters}</p>
              </AnimatedEntry>
            </div>
            
            <div className="service-sidebar">
              <AnimatedEntry direction="up" delay={0.3}>
                <div className="info-card bg-elevated">
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Zap size={20} className="text-accent" /> Key Benefits
                  </h3>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {service.benefits.map((benefit, i) => (
                      <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                        <CheckCircle size={18} className="text-accent" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ fontSize: 'var(--text-base)', color: 'var(--color-text-secondary)' }}>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="info-card bg-elevated" style={{ marginTop: '2rem' }}>
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: '1.5rem' }}>Technologies</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {service.technologies.map((tech, i) => (
                      <span key={i} style={{ padding: '0.3rem 0.6rem', backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '4px', fontSize: 'var(--text-xs)' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedEntry>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section bg-secondary section-border">
        <div className="container">
          <AnimatedEntry direction="up">
            <h2 className="section-heading text-center" style={{ marginBottom: '4rem' }}>What's Included</h2>
          </AnimatedEntry>
          
          <div className="features-grid">
            {service.whatsIncluded.map((feature, idx) => (
              <AnimatedEntry direction="up" delay={idx * 0.1} key={idx}>
                <div className="feature-card">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-desc">{feature.desc}</p>
                </div>
              </AnimatedEntry>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <AnimatedEntry direction="up">
            <h2 className="section-heading">Our Process</h2>
          </AnimatedEntry>
          
          <div className="process-timeline" style={{ marginTop: '3rem' }}>
            {service.process.map((step, idx) => (
              <AnimatedEntry direction="left" delay={idx * 0.15} key={idx}>
                <div className="process-step">
                  <div className="process-step__num text-accent">{step.step}</div>
                  <div className="process-step__content">
                    <h3 className="process-step__title">{step.title}</h3>
                    <p className="process-step__desc">{step.desc}</p>
                  </div>
                </div>
              </AnimatedEntry>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-elevated section-border">
        <div className="container" style={{ maxWidth: '800px' }}>
          <AnimatedEntry direction="up">
            <h2 className="section-heading text-center" style={{ marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          </AnimatedEntry>
          
          <div className="faqs-list" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {service.faqs.map((faq, idx) => (
              <AnimatedEntry direction="up" delay={idx * 0.1} key={idx}>
                <div className="faq-item" style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: '0.75rem' }}>{faq.question}</h3>
                  <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{faq.answer}</p>
                </div>
              </AnimatedEntry>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-border">
        <div className="container">
          <div className="cta-banner text-center" style={{ backgroundColor: 'var(--color-surface)', padding: '4rem 2rem', borderRadius: '24px', border: '1px solid var(--color-border)' }}>
            <AnimatedEntry direction="up">
              <h2 className="cta-banner__title" style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-4)', fontFamily: 'var(--font-heading)', fontWeight: 700 }}>Ready to get started?</h2>
              <p className="cta-banner__desc" style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-8)', fontSize: 'var(--text-lg)', maxWidth: '600px', margin: '0 auto 2rem' }}>
                Let's discuss how our {service.title.toLowerCase()} expertise can accelerate your business goals.
              </p>
              <Link to="/contact" className="btn btn-accent btn-lg">
                Book a consultation
              </Link>
            </AnimatedEntry>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
