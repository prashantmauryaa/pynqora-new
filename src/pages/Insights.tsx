import React, { useState } from 'react';
import AnimatedEntry from '../components/AnimatedEntry';
import SectionHeader from '../components/SectionHeader';
import { ArrowRight, Mail, Calendar, Clock, ArrowUpRight } from 'lucide-react';
import { insights, insightCategories } from '../data/insights';

const Insights: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredInsights = activeCategory === 'all' 
    ? insights 
    : insights.filter(i => i.category === activeCategory);

  return (
    <div className="page-wrapper">
      {/* 1. Blog Landing Page Hero */}
      <section className="section" style={{ paddingTop: '160px', paddingBottom: '40px' }}>
        <div className="container">
          <SectionHeader 
            label="Insights"
            title="Engineering & Tech Journal."
            description="Our latest thoughts on software development, AI integration, automation, and cloud architecture. Built for engineers, by engineers."
          />
        </div>
      </section>
      
      {/* 2. Categories & 3. Featured Articles */}
      <section className="section bg-elevated section-border">
        <div className="container">
          <AnimatedEntry direction="up">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '4rem' }}>
              {insightCategories.map((cat, idx) => (
                <button 
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    padding: '0.5rem 1.25rem',
                    borderRadius: '99px',
                    border: '1px solid var(--color-border)',
                    backgroundColor: activeCategory === cat.id ? 'var(--color-text)' : 'var(--color-surface)',
                    color: activeCategory === cat.id ? 'var(--color-bg)' : 'var(--color-text)',
                    fontSize: 'var(--text-sm)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    fontWeight: activeCategory === cat.id ? 600 : 400
                  }}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </AnimatedEntry>

          <div className="grid-2" style={{ gap: '2.5rem' }}>
            {filteredInsights.map((article, idx) => (
              <AnimatedEntry direction="up" delay={0.1 * idx} key={article.id}>
                <a href="#" style={{ display: 'flex', flexDirection: 'column', padding: '2.5rem', backgroundColor: 'var(--color-bg)', borderRadius: '16px', border: '1px solid var(--color-border)', textDecoration: 'none', color: 'inherit', height: '100%', transition: 'border-color 0.2s' }} className="hover-border-accent">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <span style={{ fontSize: 'var(--text-xs)', padding: '0.25rem 0.75rem', backgroundColor: 'var(--color-surface)', borderRadius: '99px', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {insightCategories.find(c => c.id === article.category)?.name}
                    </span>
                    {article.featured && (
                      <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>Featured</span>
                    )}
                  </div>
                  
                  <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>
                    {article.title}
                  </h3>
                  
                  <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6, flexGrow: 1, marginBottom: '2rem' }}>
                    {article.excerpt}
                  </p>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--color-text-muted)', fontSize: 'var(--text-xs)' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Calendar size={14} /> {article.date}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Clock size={14} /> {article.readTime}</span>
                    </div>
                    <ArrowUpRight size={18} className="text-accent" />
                  </div>
                </a>
              </AnimatedEntry>
            ))}
          </div>
          
          {filteredInsights.length === 0 && (
            <div style={{ padding: '4rem', textAlign: 'center', backgroundColor: 'var(--color-bg)', borderRadius: '16px', border: '1px dashed var(--color-border)' }}>
              <p style={{ color: 'var(--color-text-secondary)' }}>No articles found for this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* 4. Newsletter CTA */}
      <section className="section section-border">
        <div className="container">
          <div style={{ backgroundColor: 'var(--color-surface)', padding: '4rem 2rem', borderRadius: '24px', border: '1px solid var(--color-border)', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <AnimatedEntry direction="up">
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', backgroundColor: 'var(--color-bg)', borderRadius: '50%', marginBottom: '2rem', border: '1px solid var(--color-border)', color: 'var(--color-accent)' }}>
                <Mail size={24} />
              </div>
              <h2 style={{ fontSize: 'var(--text-3xl)', marginBottom: '1rem', fontFamily: 'var(--font-heading)', fontWeight: 700 }}>Subscribe to our newsletter</h2>
              <p style={{ color: 'var(--color-text-secondary)', marginBottom: '3rem', fontSize: 'var(--text-lg)' }}>
                Get our latest technical articles, case studies, and engineering insights delivered directly to your inbox once a month. No spam, just code.
              </p>
              
              <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', gap: '1rem', maxWidth: '500px', margin: '0 auto', flexDirection: 'row', alignItems: 'center' }}>
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  required
                  style={{ flex: 1, padding: '1rem 1.5rem', borderRadius: '8px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg)', color: 'var(--color-text)', outline: 'none', fontSize: 'var(--text-base)' }}
                />
                <button type="submit" className="btn btn-accent" style={{ padding: '1rem 1.5rem' }}>
                  Subscribe
                </button>
              </form>
            </AnimatedEntry>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights;
