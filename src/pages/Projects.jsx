import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'

const projects = [
  {
    name: 'CarRental',
    category: 'Full-Stack',
    type: 'MERN Stack Application',
    emoji: '🚗',
    color: '#f0c040',
    year: '2024',
    desc: 'A full-stack car rental platform built on the MERN stack with secure JWT authentication, real-time car listings, and an intuitive booking system with location and date selection.',
    longDesc: 'Implemented a comprehensive admin dashboard for inventory management, booking oversight, and Image Kit integration for optimized media delivery. The system supports user authentication, car browsing, and complete booking lifecycle management.',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT Auth', 'Image Kit'],
    github: 'https://github.com/Mayankupadhyay-25/CarRental.git',
    live: 'https://car-rentalfrontend-liart.vercel.app/',
    highlights: ['JWT Authentication', 'Booking System', 'Admin Dashboard', 'Image Kit'],
  },
  {
    name: 'LMS Platform',
    category: 'Frontend',
    type: 'Learning Management System',
    emoji: '📚',
    color: '#60a5fa',
    year: '2024',
    desc: 'A React-based Learning Management System enabling course upload, student enrollment, and online learning with secure authentication and Clerk integration.',
    longDesc: 'Developed complete course management with upload capabilities, student enrollment flow, and integrated Clerk\'s ready-made Sign-In, Sign-Up, and Profile UI components for a seamless authentication experience.',
    tags: ['React.js', 'Clerk Auth', 'Tailwind CSS'],
    github: 'https://github.com/Mayankupadhyay-25/LMS.git',
    live: 'https://lms-zeta-teal.vercel.app/',
    highlights: ['Course Management', 'Clerk Auth Integration', 'Enrollment System', 'Video Learning'],
  },
  {
    name: 'GrosMart',
    category: 'Frontend',
    type: 'E-Commerce Website',
    emoji: '🛒',
    color: '#4ade80',
    year: '2024',
    desc: 'A responsive e-commerce website for fresh food, vegetables, and seafood with a clean, user-friendly UI and optimized shopping experience.',
    longDesc: 'Built with HTML, Tailwind CSS, and React, GrosMart delivers smooth navigation, full responsiveness, and an optimized shopping flow. Focused on clean visual hierarchy and fast page performance.',
    tags: ['React.js', 'Tailwind CSS', 'HTML', 'Responsive Design'],
    github: 'https://github.com/Mayankupadhyay-25/GrosMart.git',
    live: 'https://gros-mart.vercel.app/',
    highlights: ['Responsive Design', 'Product Catalog', 'Cart System', 'Clean UI'],
  },
  {
    name: 'Dayitva',
    category: 'UI/UX',
    type: 'Travel Website',
    emoji: '✈️',
    color: '#f472b6',
    year: '2024',
    desc: 'A travel website designed from scratch in Figma and developed with Next.js, featuring smooth navigation, destination search, and a mobile-first responsive layout.',
    longDesc: 'The project began with a full Figma design process — user flows, wireframes, and high-fidelity mockups — then transitioned to a pixel-perfect Next.js implementation. Features destination search, smooth page transitions, and rich visual storytelling.',
    tags: ['Next.js', 'Figma', 'UI/UX Design', 'Mobile-First'],
    figma: 'https://www.figma.com/design/WsWj0wWCSeWOQsJwvslVfj/Daitvya?node-id=5-2&p=f&t=jZ8EoAtVOUfOLa0a-0',
    highlights: ['Figma Design', 'Destination Search', 'Mobile-First', 'Next.js Dev'],
  },
  {
    name: 'Financial Sanctuary',
    category: 'UI/UX',
    type: 'Personal Finance App',
    emoji: '💰',
    color: '#34d399',
    year: '2024',
    desc: 'A calming personal finance app designed to help users achieve a more serene financial life. Focuses on clarity, simplicity, and peace of mind.',
    longDesc: 'Designed with a focus on reducing financial anxiety through clean data visualization, clear spending breakdowns, and calm, approachable UI. Prioritizes user well-being alongside functionality.',
    tags: ['Figma', 'UI Design', 'UX Research', 'Data Visualization'],
    figma: 'https://www.figma.com/design/lW07UaLBqGoCLLwTPSIKTt/Personal-Finance-assessment?node-id=0-1&p=f&t=SoOaPpyn8HFLwKA4-0',
    highlights: ['UI/UX Design', 'Budget Tracking', 'Data Visualization', 'Calm UX'],
  },
  {
    name: 'School Website',
    category: 'UI/UX ',
    type: 'Information Platform',
    emoji: '🏫',
    color: '#fb923c',
    year: '2024',
    desc: 'A modern, responsive school website designed in Figma with clean layout, intuitive navigation, and easy access to academic resources and announcements.',
    longDesc: 'Provides students, parents, and staff with easy access to admission info, announcements, contact details, and academic resources. Designed with accessibility and clarity as primary goals, then developed as a responsive frontend.',
    tags: ['Figma', 'UI Design', 'UX Research', 'Data Visualization'],
    figma: 'https://www.figma.com/design/f4uvWxOoNJB2bv4HKwCBPy/school-admission-site-project?node-id=0-1&t=s7B6ecqO81I70Z0I-1',
    highlights: ['Figma Design', 'Information Architecture', 'Responsive'],
  },
  {
    name: 'Sudhar',
    category: 'UI/UX',
    type: 'Sustainability Platform',
    emoji: '🌿',
    color: '#86efac',
    year: '2025',
    desc: 'A sustainability platform ensuring accountability and tracking progress across the nation. Built to empower transparent governance and community action.',
    longDesc: 'Sudhar is a civic-tech platform designed to connect citizens with accountability tools for tracking sustainability goals at a national scale. The platform features reporting mechanisms, progress dashboards, and community engagement tools.',
    tags: ['Figma', 'Civic Tech', 'UI Design', 'Data Dashboards'],
    figma: 'https://www.figma.com/design/LPfNuyxfptvTnyunlHJI5H/Sudhar-%E2%80%93-Data-Dashboard?node-id=0-1&p=f&t=d2E37JIlOAKeKHef-0',
    highlights: ['Civic Technology', 'Progress Tracking', 'Community Tools', 'Sustainability'],
  },
  {
    name: 'Coffee Website',
    category: 'Frontend',
    type: 'Brand Website',
    emoji: '☕',
    color: '#c8834a',
    year: '2025',
    desc: 'A visually rich coffee brand website with smooth UI, product showcase, and an immersive browsing experience built for modern web aesthetics.',
    longDesc: 'Designed and developed a responsive coffee brand website focusing on elegant typography, warm color palettes, and smooth scroll interactions. Features product listings, brand story section, and a fully responsive layout across all devices.',
    tags: ['Javascript', 'CSS', 'Responsive Design', 'UI/UX'],
    live: 'https://coffee-website-rosy-ten.vercel.app/',
    github: 'https://github.com/Mayankupadhyay-25/Coffee-Website.git',
    highlights: ['Brand Design', 'Product Showcase', 'Responsive Layout', 'Smooth UI'],
  },
  {
    name: 'Task Manager',
    category: 'Full-Stack',
    type: 'Team Productivity App',
    emoji: '✅',
    color: '#a78bfa',
    year: '2025',
    desc: 'A full-stack team task manager with role-based access, real-time task assignments, status tracking, and a clean dashboard for productivity management.',
    longDesc: 'Built a complete backend-heavy task management system supporting team collaboration with role-based permissions (admin/member), task creation, assignment, priority levels, and status updates. Features a secure login system and a clean React frontend.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'React.js', 'JWT Auth'],
    live: 'https://team-task-manager-frontend-mu.vercel.app/login',
    github: 'https://github.com/Mayankupadhyay-25/-Team-Task-Manager-Frontend.git',
    highlights: ['Role-Based Access', 'Task Assignment', 'Status Tracking', 'Team Dashboard'],
  },
]

const categories = ['All', 'Full-Stack', 'Frontend', 'UI/UX']

export default function Projects() {
  const [active, setActive] = useState('All')
  const [expanded, setExpanded] = useState(null)

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <PageWrapper>
      <div style={{ padding: '120px 2rem 6rem', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ marginBottom: '4rem' }}
        >
          <p style={{ color: 'var(--accent)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>
            <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'var(--accent)', verticalAlign: 'middle', marginRight: '0.75rem' }} />
            My Work
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 0.95, marginBottom: '1.5rem' }}>
            Projects &<br /><span style={{ color: 'var(--accent)' }}>Case Studies</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '500px', lineHeight: 1.7 }}>
            A collection of projects spanning full-stack development, frontend engineering, and UI/UX design — each built to solve real problems.
          </p>
        </motion.div>

        {/* Filter */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                padding: '0.5rem 1.25rem',
                background: active === cat ? 'var(--accent)' : 'var(--surface)',
                color: active === cat ? '#000' : 'var(--text-muted)',
                border: active === cat ? 'none' : '1px solid var(--border)',
                borderRadius: '100px', cursor: 'pointer',
                fontFamily: 'var(--font-display)', fontWeight: 600,
                fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.05em',
                transition: 'all 0.2s',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
          <AnimatePresence>
            {filtered.map((p, i) => (
              <motion.div
                key={p.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                onClick={() => setExpanded(expanded === p.name ? null : p.name)}
                style={{
                  background: 'var(--bg2)', border: '1px solid var(--border)',
                  borderRadius: '8px', overflow: 'hidden',
                  cursor: 'pointer', transition: 'border-color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = p.color}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                {/* Card Top */}
                <div style={{
                  padding: '2rem', height: '160px',
                  background: `linear-gradient(135deg, ${p.color}15, ${p.color}05)`,
                  display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
                  borderBottom: '1px solid var(--border)',
                }}>
                  <div style={{ fontSize: '2.5rem' }}>{p.emoji}</div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.7rem', color: p.color, fontFamily: 'var(--font-display)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.2rem 0.6rem', background: `${p.color}20`, borderRadius: '100px' }}>{p.category}</span>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>{p.year}</span>
                  </div>
                </div>

                <div style={{ padding: '1.75rem' }}>
                  <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>{p.type}</p>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.75rem' }}>{p.name}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>{p.desc}</p>

                  <AnimatePresence>
                    {expanded === p.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.825rem', lineHeight: 1.7, marginBottom: '1rem', paddingTop: '0.5rem', borderTop: '1px solid var(--border)' }}>{p.longDesc}</p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '1.25rem' }}>
                          {(p.highlights || []).map(h => (
                            <div key={h} style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                              <span style={{ color: p.color }}>✓</span> {h}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                    {p.tags.map(t => (
                      <span key={t} style={{
                        padding: '0.2rem 0.6rem',
                        background: 'var(--surface)', border: '1px solid var(--border)',
                        borderRadius: '100px', fontSize: '0.68rem',
                        color: 'var(--text-muted)', fontFamily: 'var(--font-display)',
                      }}>{t}</span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <button style={{
                      background: 'none', border: 'none', cursor: 'pointer',
                      color: 'var(--accent)', fontSize: '0.8rem', fontFamily: 'var(--font-display)', fontWeight: 600,
                      padding: 0,
                    }}>
                      {expanded === p.name ? '↑ Show Less' : '↓ View Details'}
                    </button>
                    <div style={{ display: 'flex', gap: '0.5rem' }} onClick={e => e.stopPropagation()}>
                      {p.live && (
                        <a href={p.live} target="_blank" rel="noopener noreferrer"
                          style={{ padding: '0.4rem 1rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '4px', fontSize: '0.75rem', fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--text-muted)', textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s' }}
                          onMouseEnter={e => { e.currentTarget.style.borderColor = p.color; e.currentTarget.style.color = p.color }}
                          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)' }}
                        >Live ↗</a>
                      )}
                      {p.github && (
                        <a href={p.github} target="_blank" rel="noopener noreferrer"
                          style={{ padding: '0.4rem 1rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '4px', fontSize: '0.75rem', fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--text-muted)', textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s' }}
                          onMouseEnter={e => { e.currentTarget.style.borderColor = p.color; e.currentTarget.style.color = p.color }}
                          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)' }}
                        >GitHub ↗</a>
                      )}
                      {p.figma && (
                        <a href={p.figma} target="_blank" rel="noopener noreferrer"
                          style={{ padding: '0.4rem 1rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '4px', fontSize: '0.75rem', fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--text-muted)', textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s' }}
                          onMouseEnter={e => { e.currentTarget.style.borderColor = p.color; e.currentTarget.style.color = p.color }}
                          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)' }}
                        >Figma ↗</a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </PageWrapper>
  )
}
