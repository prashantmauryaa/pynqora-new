import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Code, Zap, Shield, Search, PenTool, Rocket, Server } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack';
import FlowingMenu from '../components/FlowingMenu';
import InfiniteMenu from '../components/InfiniteMenu';
import CircularGallery from '../components/CircularGallery';
import CardSwap, { Card } from '../components/CardSwap';
import { services } from '../data/services';
import { testimonials } from '../data/content';
import './Home.css';

const IconMap: Record<string, React.ElementType> = {
  Cpu, Code, Zap, Shield
};

const rotatingPhrases = [
  "AI Engineering",
  "Custom Software",
  "Business Automation",
  "Enterprise Applications",
  "Web Platforms",
  "Digital Products"
];

const industryItems = [
  { link: '#', text: 'Fintech & Banking', image: '/images/ind_fintech.png' },
  { link: '#', text: 'Healthcare Tech', image: '/images/ind_healthcare.png' },
  { link: '#', text: 'Enterprise SaaS', image: '/images/ind_saas.png' },
  { link: '#', text: 'E-Commerce', image: '/images/ind_ecommerce.png' },
  { link: '#', text: 'Logistics', image: '/images/ind_logistics.png' },
  { link: '#', text: 'PropTech', image: '/images/ind_proptech.png' }
];

const projectItems = [
  { image: '/images/proj_dashboard.png', text: 'Fintech Dashboard' },
  { image: '/images/proj_microservices.png', text: 'Distributed Systems' },
  { image: '/images/proj_ecommerce.png', text: 'Mobile E-Commerce' },
  { image: '/images/proj_ai.png', text: 'AI Integration' }
];

const Home: React.FC = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      {/* 1. Hero Section */}
      <section className="hero">
        <div className="container hero__container">
          <div className="hero__content">
            <h1 className="hero__title">
              <span className="hero__title-static">We build intelligent </span>
              <span className="rotating-text-wrapper">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={phraseIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="rotating-text"
                  >
                    {rotatingPhrases[phraseIndex]}.
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
            
            <p className="hero__subtitle">
              Our senior engineering team partners with you to deliver reliable software and strengthen your infrastructure, even under complex constraints.
            </p>
            
            <div className="hero__actions">
              <Link to="/contact" className="btn btn-accent">
                Let's talk
              </Link>
            </div>
          </div>
          
          <div className="hero__visual">
            <CardSwap
              cardDistance={50}
              verticalDistance={70}
              delay={3500}
              width={480}
              height={380}
              pauseOnHover={true}
            >
              <Card customClass="hero-card" />
              <Card customClass="hero-card" />
              <Card customClass="hero-card" />
            </CardSwap>
          </div>
        </div>
      </section>

      {/* 2. Introduction / Why Pynqora */}
      <section className="section">
        <div className="container">
          <div className="grid-2 intro-grid">
            <div>
              <h2 className="intro-title">Engineering over agency.</h2>
            </div>
            <div>
              <p className="intro-text">
                We are fundamentally an engineering company. We don't just build websites; we architect complex digital infrastructure. We partner with technical founders and enterprise leaders who value clean code, resilient systems, and long-term stability over short-term hacks.
              </p>
              <Link to="/about" className="intro-link">
                Read our manifesto <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Services (What We Do) */}
      <section className="section" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: 'var(--space-12)' }}>
            <SectionHeader 
              title="Get full-stack coverage."
              description="Unblock execution across the SDLC with our senior engineering teams."
              align="center"
            />
            <Link to="/services" className="btn btn-ghost" style={{ display: 'inline-flex', alignItems: 'center', marginTop: 'var(--space-4)' }}>
              Everything we do <ArrowRight size={14} style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        </div>
        
        <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
          <InfiniteMenu 
            items={services.map(s => ({
              image: s.image,
              link: '/services',
              title: s.title,
              description: s.shortDesc
            }))}
          />
        </div>
      </section>

      {/* 4. Industries We Serve */}
      <section className="section" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <div className="container">
          <SectionHeader 
            label="Industries" 
            title="Industries We Serve" 
          />
        </div>
        <div style={{ height: '600px', width: '100%', position: 'relative', marginTop: 'var(--space-8)' }}>
          <FlowingMenu 
            items={industryItems} 
            bgColor="var(--color-bg)"
            marqueeBgColor="var(--color-accent)"
            marqueeTextColor="#ffffff"
            textColor="var(--color-text-secondary)"
            borderColor="var(--color-border)"
          />
        </div>
      </section>

      {/* 5. Featured Projects */}
      <section className="section">
        <div className="container">
          <SectionHeader 
            label="Work" 
            title="Featured Projects" 
          />
          
          <div style={{ height: '600px', position: 'relative', marginTop: 'var(--space-8)' }}>
            <CircularGallery
              items={projectItems}
              bend={3}
              textColor="#ffffff"
              borderRadius={0.05}
              fontUrl="https://fonts.googleapis.com/css2?family=Outfit:wght@700&display=swap"
              font="bold 40px Outfit"
              scrollEase={0.05}
            />
          </div>
        </div>
      </section>

      {/* 6. Our Process */}
      <section className="section">
        <div className="container">
          <SectionHeader 
            label="Process" 
            title="Our Engineering Process" 
          />
          <div style={{ paddingBottom: '10vh', marginTop: 'var(--space-8)' }}>
            <ScrollStack 
              useWindowScroll={true} 
              itemDistance={50} 
              itemScale={0.04} 
              baseScale={0.85} 
              blurAmount={2}
            >
              <ScrollStackItem>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', padding: 'var(--space-8)' }}>
                  <div className="process-icon" style={{ width: '64px', height: '64px' }}><Search size={28} /></div>
                  <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600 }}>1. Discovery & Audit</h3>
                  <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>Deep technical audit, architecture review, and requirements gathering to identify performance bottlenecks.</p>
                </div>
              </ScrollStackItem>
              <ScrollStackItem>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', padding: 'var(--space-8)' }}>
                  <div className="process-icon" style={{ width: '64px', height: '64px' }}><Server size={28} /></div>
                  <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600 }}>2. Architecture Design</h3>
                  <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>System design, scalable database modeling, stack selection, and infrastructure planning.</p>
                </div>
              </ScrollStackItem>
              <ScrollStackItem>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', padding: 'var(--space-8)' }}>
                  <div className="process-icon" style={{ width: '64px', height: '64px' }}><Code size={28} /></div>
                  <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600 }}>3. Iterative Engineering</h3>
                  <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>Agile development execution with strict code reviews, test-driven development, and high standards.</p>
                </div>
              </ScrollStackItem>
              <ScrollStackItem>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', padding: 'var(--space-8)' }}>
                  <div className="process-icon" style={{ width: '64px', height: '64px' }}><Rocket size={28} /></div>
                  <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600 }}>4. Deployment & Scale</h3>
                  <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>CI/CD pipelines, container orchestration, zero-downtime releases, and comprehensive stress testing.</p>
                </div>
              </ScrollStackItem>
            </ScrollStack>
          </div>
        </div>
      </section>

      {/* 7. Technologies */}
      <section className="section tech-section">
        <div className="container text-center">
          <p className="tech-label">Core Technologies</p>
          <div className="tech-list">
            <span>React</span>
            <span>TypeScript</span>
            <span>Node.js</span>
            <span>Python</span>
            <span>Go</span>
            <span>PostgreSQL</span>
            <span>Redis</span>
            <span>AWS</span>
            <span>Docker</span>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="section">
        <div className="container">
          <SectionHeader 
            label="Partners" 
            title="Client Testimonials" 
          />
          
          <div className="grid-3 testimonials__grid">
            {testimonials.map((t) => (
              <div key={t.id} className="card testimonial-card">
                <p className="testimonial-card__quote">"{t.quote}"</p>
                <div className="testimonial-card__author">
                  <span className="testimonial-card__name">{t.author}</span>
                  <span className="testimonial-card__role">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Bottom CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-banner">
            <div style={{ zIndex: 2, position: 'relative' }}>
              <h2 className="cta-banner__title">Ready to build something exceptional?</h2>
              <p className="cta-banner__desc">Partner with Pynqora to construct your next digital platform.</p>
              <Link to="/contact" className="btn btn-accent mt-6">
                Start a conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
