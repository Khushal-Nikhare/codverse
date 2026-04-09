'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PortfolioGrid({ projects }) {
  const [activeFilter, setActiveFilter] = useState('All Projects');

  const filters = [
    'All Projects',
    'Web Development',
    'Business Automation',
    'Web Apps',
    'Indore Clients',
    'International Clients'
  ];

  const filteredProjects = activeFilter === 'All Projects'
    ? projects
    : projects.filter(project => project.filters.includes(activeFilter));

  return (
    <div className="portfolio-section">
      {/* Filter Bar - Hidden for now
      <div className="filter-container fade-up" style={{ marginBottom: '3rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`btn ${activeFilter === filter ? 'btn-primary' : 'btn-outline'}`}
            style={{ 
              padding: '0.5rem 1.25rem', 
              fontSize: '0.85rem',
              borderRadius: '50px',
              transition: 'all 0.3s ease'
            }}
          >
            {filter}
          </button>
        ))}
      </div>
      */}

      {/* Grid */}
      <div className="grid-3">
        {filteredProjects.map((project) => (
          <div key={project.id} className="card portfolio-card glass fade-up" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div
              className="portfolio-img"
              style={{
                background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url('${project.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '240px',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '1.5rem',
              }}
            >
              <Link 
                href={project.serviceLink}
                style={{
                  color: '#fff',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  fontSize: '0.7rem',
                  letterSpacing: '0.1em',
                  background: 'var(--secondary)',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '4px',
                  backdropFilter: 'blur(4px)',
                  textDecoration: 'none'
                }}
              >
                {project.serviceTag}
              </Link>
            </div>
            
            <div className="portfolio-content" style={{ padding: '2rem', textAlign: 'left', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--secondary)', fontWeight: 600, textTransform: 'uppercase' }}>{project.clientType}</span>
              </div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.4rem' }}>{project.name}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                {project.description}
              </p>
              
              <div style={{ marginTop: 'auto' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {project.techStack.map(tech => (
                    <span key={tech} style={{ 
                      fontSize: '0.7rem', 
                      background: 'var(--surface-low)', 
                      padding: '0.2rem 0.6rem', 
                      borderRadius: '4px',
                      border: '1px solid var(--glass-border)',
                      color: 'var(--text-muted)'
                    }}>{tech}</span>
                  ))}
                </div>
                
                {project.result && (
                  <div style={{ marginBottom: '1.5rem', padding: '0.75rem', background: 'var(--primary-glow)', borderRadius: '8px', borderLeft: '3px solid var(--primary)' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Result: </span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{project.result}</span>
                  </div>
                )}

                <div style={{ display: 'flex', gap: '1rem' }}>
                    <Link href={project.link} className="btn btn-primary" style={{ flex: 1, padding: '0.6rem', fontSize: '0.85rem', textAlign: 'center' }}>Case Study</Link>
                    <Link href={project.serviceLink} className="btn btn-outline" style={{ flex: 1, padding: '0.6rem', fontSize: '0.85rem', textAlign: 'center' }}>Explore Service</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div style={{ textAlign: 'center', padding: '5rem 0' }}>
          <p style={{ color: 'var(--text-muted)' }}>No projects found in this category yet. We're constantly building!</p>
        </div>
      )}
    </div>
  );
}
