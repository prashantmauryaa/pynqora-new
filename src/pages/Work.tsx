import React from 'react';
import AnimatedEntry from '../components/AnimatedEntry';
import SectionHeader from '../components/SectionHeader';
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack';
import { ArrowRight, ArrowUpRight, Code, Cpu, Search, Rocket } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { workProjects } from '../data/work';
import './Work.css';

const Work: React.FC = () => {
  const featured = workProjects.filter(p => p.type === 'featured');
  const concepts = workProjects.filter(p => p.type === 'concept');
  const openSource = workProjects.filter(p => p.type === 'open-source');

  return (
    <div className="page-wrapper">
      {/* 1. Introduction */}
      <section className="section" style={{ paddingTop: '160px', paddingBottom: '40px' }}>
        <div className="container">
          <SectionHeader 
            label="Work"
            title="Engineered for scale."
            description="We build software that solves hard business problems. Explore our portfolio of custom platforms, experimental AI concepts, and open source contributions."
          />
        </div>
      </section>

      {/* 2. Featured Projects — ScrollStack */}
      <section className="section bg-elevated section-border">
        <div className="container">
          <AnimatedEntry direction="up">
            <h2 className="section-heading" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Code size={24} className="text-accent" /> Featured Projects
            </h2>
          </AnimatedEntry>

          <div style={{ paddingBottom: '6vh', marginTop: '2rem' }}>
            <ScrollStack>
              {featured.map((project) => (
                <ScrollStackItem key={project.id}>
                  <div className="work-stack-card">
                    <div className="work-stack-card__info">
                      {project.client && (
                        <span className="work-stack-card__client">{project.client}</span>
                      )}
                      <h3 className="work-stack-card__title">{project.title}</h3>
                      <p className="work-stack-card__desc">{project.description}</p>
                      <div className="work-stack-card__tags">
                        {project.tags.map(tag => (
                          <span key={tag} className="work-stack-card__tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                    {project.image && (
                      <div className="work-stack-card__visual">
                        <div className="work-stack-card__chrome">
                          <span className="work-stack-card__chrome-dot" />
                          <span className="work-stack-card__chrome-dot" />
                          <span className="work-stack-card__chrome-dot" />
                        </div>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="work-stack-card__img"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>
        </div>
      </section>

      {/* 3. Concept Projects */}
      <section className="section">
        <div className="container">
          <AnimatedEntry direction="up">
            <h2 className="section-heading" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Cpu size={24} className="text-accent" /> Concept Labs
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', marginBottom: '3rem' }}>
              Internal R&D projects where we explore bleeding-edge architectures, primarily focusing on agentic workflows and edge computing.
            </p>
          </AnimatedEntry>

          <div className="grid-2" style={{ gap: '2rem' }}>
            {concepts.map((project, idx) => (
              <AnimatedEntry direction="up" delay={0.1 * idx} key={project.id}>
                <div style={{ backgroundColor: 'var(--color-elevated)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--color-border)', height: '100%' }}>
                  <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, marginBottom: '1rem' }}>{project.title}</h3>
                  <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>{project.description}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {project.tags.map(tag => (
                      <span key={tag} style={{ fontSize: 'var(--text-xs)', padding: '0.25rem 0.5rem', border: '1px solid var(--color-border)', borderRadius: '4px', color: 'var(--color-text-dim)' }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </AnimatedEntry>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Open Source */}
      <section className="section bg-secondary section-border">
        <div className="container">
          <AnimatedEntry direction="up">
            <h2 className="section-heading" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '3rem' }}>
              <FaGithub size={24} className="text-accent" /> Open Source
            </h2>
          </AnimatedEntry>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {openSource.map((project, idx) => (
              <AnimatedEntry direction="up" delay={0.1 * idx} key={project.id}>
                <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1.5rem', backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '12px', textDecoration: 'none', color: 'inherit', transition: 'border-color 0.2s' }} className="hover-border-accent">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600 }}>{project.title}</h3>
                    <ArrowUpRight size={18} className="text-muted" />
                  </div>
                  <p style={{ color: 'var(--color-text-secondary)' }}>{project.description}</p>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {project.tags.map(tag => (
                      <span key={tag} style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-dim)' }}>{tag}</span>
                    ))}
                  </div>
                </a>
              </AnimatedEntry>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Development Approach — Timeline */}
      <section className="section">
        <div className="container">
          <AnimatedEntry direction="up">
            <SectionHeader
              label="Process"
              title="Our Approach"
              description="A disciplined engineering methodology that eliminates guesswork and delivers predictable, high-quality outcomes."
            />
          </AnimatedEntry>

          <div className="work-approach-timeline" style={{ marginTop: '3.5rem' }}>
            {[
              {
                step: '01',
                icon: <Search size={24} />,
                title: 'Discovery & Architecture',
                desc: 'We don\'t write a single line of code until the database schema, API contracts, and core architecture are explicitly defined and validated.',
                tags: ['System Design', 'Schema Review', 'RFC Drafts'],
              },
              {
                step: '02',
                icon: <Code size={24} />,
                title: 'Iterative Sprints',
                desc: 'We build in fast, 2-week sprints. You get continuous access to a staging environment to see progress in real-time, not just on a slide deck.',
                tags: ['CI/CD', 'Code Reviews', 'Staging Deploys'],
              },
              {
                step: '03',
                icon: <Rocket size={24} />,
                title: 'Resilient Deployment',
                desc: 'CI/CD pipelines, automated testing, and secure containerization ensure that when we push to production, the system stays up.',
                tags: ['Zero Downtime', 'Load Testing', 'Monitoring'],
              },
            ].map((item, idx) => (
              <AnimatedEntry direction="up" delay={0.12 * idx} key={item.step}>
                <div className="work-approach-step">
                  <div className="work-approach-step__indicator">
                    <div className="work-approach-step__number">{item.step}</div>
                    {idx < 2 && <div className="work-approach-step__line" />}
                  </div>
                  <div className="work-approach-step__card">
                    <div className="work-approach-step__icon">
                      {item.icon}
                    </div>
                    <h3 className="work-approach-step__title">{item.title}</h3>
                    <p className="work-approach-step__desc">{item.desc}</p>
                    <div className="work-approach-step__tags">
                      {item.tags.map(tag => (
                        <span key={tag} className="work-approach-step__tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedEntry>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="section section-border bg-elevated cta-section">
        <div className="container">
          <div className="cta-banner" style={{ textAlign: 'center' }}>
            <AnimatedEntry direction="up">
              <h2 className="cta-banner__title" style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-4)' }}>Want to see what we can build for you?</h2>
              <p className="cta-banner__desc" style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-8)' }}>Our engineering team is ready to review your requirements.</p>
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

export default Work;
