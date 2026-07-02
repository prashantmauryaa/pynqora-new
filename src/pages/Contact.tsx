import React, { useState } from 'react';
import AnimatedEntry from '../components/AnimatedEntry';
import SectionHeader from '../components/SectionHeader';
import { Send, CheckCircle, HelpCircle, ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'custom-software',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call for now (replace with actual form submission logic)
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', projectType: 'custom-software', message: '' });
    }, 1500);
  };

  const faqs = [
    { q: "What is your typical project timeline?", a: "For custom software, a functional MVP usually takes 8-12 weeks. We deploy in 2-week sprints, so you see progress immediately." },
    { q: "Do you work with startups or enterprises?", a: "Both. We partner with well-funded startups needing rapid scaling, and enterprises requiring legacy system modernization." },
    { q: "What is your pricing structure?", a: "We work on fixed-scope sprints or dedicated retainer models, depending on the predictability of your requirements. No hidden hourly billing." },
    { q: "Do you sign NDAs?", a: "Yes. We can sign a mutual Non-Disclosure Agreement before any technical discovery calls." }
  ];

  return (
    <div className="contact page-wrapper">
      {/* 1. Contact Hero */}
      <section className="section" style={{ paddingTop: '160px', paddingBottom: '40px' }}>
        <div className="container">
          <SectionHeader 
            label="Contact"
            title="Initiate a project."
            description="Provide details about your technical requirements, and our engineering team will get back to you within 12 business hours to schedule an architecture review."
          />
        </div>
      </section>

      {/* 2 & 3. Contact Form & Project Inquiry */}
      <section className="section bg-elevated section-border">
        <div className="container">
          <div className="grid-2 contact__grid" style={{ gap: '4rem' }}>
            <AnimatedEntry className="contact__info">
              <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Direct Inquiry</h3>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '3rem' }}>
                Please be as detailed as possible. The more context we have regarding your current architecture, business goals, and timeline, the better we can prepare for our initial consultation.
              </p>
              
              <div className="contact__details" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ padding: '0.75rem', backgroundColor: 'var(--color-surface)', borderRadius: '8px', border: '1px solid var(--color-border)', color: 'var(--color-accent)' }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Email Us Directly</span>
                    <a href="mailto:hello@pynqora.com" style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text)', textDecoration: 'none', fontWeight: 500 }}>hello@pynqora.com</a>
                  </div>
                </div>
              </div>
            </AnimatedEntry>

            <AnimatedEntry delay={0.1} className="contact__form-wrapper">
              {status === 'success' ? (
                <div style={{ padding: '3rem', backgroundColor: 'var(--color-bg)', borderRadius: '16px', border: '1px solid var(--color-border)', textAlign: 'center' }}>
                  <CheckCircle size={48} className="text-accent" style={{ margin: '0 auto 1.5rem' }} />
                  <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: '1rem' }}>Inquiry received.</h3>
                  <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>
                    Thank you. An engineering lead will review your requirements and respond shortly.
                  </p>
                  <button className="btn btn-secondary" onClick={() => setStatus('idle')}>
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '2rem', backgroundColor: 'var(--color-bg)', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        className="input" 
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Work Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        className="input" 
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="projectType" className="form-label">Project Type</label>
                    <select 
                      id="projectType" 
                      name="projectType" 
                      className="select"
                      value={formData.projectType}
                      onChange={handleChange}
                    >
                      <option value="custom-software">Custom Software Development</option>
                      <option value="ai-integration">AI / LLM Integration</option>
                      <option value="automation">Business Automation</option>
                      <option value="web-dev">Web Development</option>
                      <option value="ui-ux">UI/UX Design</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Technical Requirements</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      className="textarea" 
                      placeholder="Briefly describe your stack, goals, and timeline..."
                      value={formData.message}
                      onChange={handleChange}
                      required 
                      style={{ minHeight: '150px' }}
                    />
                  </div>
                  
                  <button type="submit" className="btn btn-accent" disabled={status === 'submitting'} style={{ width: '100%', justifyContent: 'center' }}>
                    {status === 'submitting' ? 'Submitting...' : 'Submit Inquiry'}
                    {status !== 'submitting' && <Send size={16} style={{ marginLeft: '0.5rem' }} />}
                  </button>
                </form>
              )}
            </AnimatedEntry>
          </div>
        </div>
      </section>

      {/* 4. FAQs */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <AnimatedEntry direction="up">
            <h2 className="section-heading text-center" style={{ marginBottom: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
              <HelpCircle size={24} className="text-accent" /> Frequently Asked Questions
            </h2>
          </AnimatedEntry>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {faqs.map((faq, idx) => (
              <AnimatedEntry direction="up" delay={0.1 * idx} key={idx}>
                <div style={{ padding: '2rem', backgroundColor: 'var(--color-elevated)', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: '0.75rem' }}>{faq.q}</h3>
                  <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{faq.a}</p>
                </div>
              </AnimatedEntry>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="section section-border bg-secondary cta-section">
        <div className="container">
          <div className="cta-banner" style={{ textAlign: 'center' }}>
            <AnimatedEntry direction="up">
              <h2 className="cta-banner__title" style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-4)' }}>Prefer to chat directly?</h2>
              <p className="cta-banner__desc" style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-8)' }}>Skip the form and email our founders directly to discuss your architecture.</p>
              <a href="mailto:founders@pynqora.com" className="btn btn-accent">
                Email Founders
                <ArrowRight size={16} style={{ marginLeft: '8px' }} />
              </a>
            </AnimatedEntry>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
