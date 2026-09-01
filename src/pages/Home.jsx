import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'

const skills = ['React.js', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'MongoDB', 'Figma', 'REST APIs']

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
}

export default function Home() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section style={{
        minHeight: '100vh',
        display: 'flex', alignItems: 'center',
        padding: 'clamp(100px, 15vw, 140px) 1.25rem 4rem',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Background decoration */}
        <div style={{
          position: 'absolute', top: '10%', right: '-5%',
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(240,192,64,0.06) 0%, transparent 70%)',
          borderRadius: '50%', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '5%', left: '-10%',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(240,192,64,0.03) 0%, transparent 70%)',
          borderRadius: '50%', pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '3rem' }} className="hero-inner">
          <motion.div variants={stagger} initial="hidden" animate="show" style={{ flex: 1 }}>
            <motion.p variants={fadeUp} style={{
              fontFamily: 'var(--font-body)', fontSize: '0.875rem',
              letterSpacing: '0.15em', textTransform: 'uppercase',
              color: 'var(--accent)', marginBottom: '1.5rem',
              display: 'flex', alignItems: 'center', gap: '0.75rem'
            }}>
              <span style={{ display: 'inline-block', width: '32px', height: '1px', background: 'var(--accent)' }} />
              Hello, I'm Mayank Upadhyay
            </motion.p>

            <motion.h1 variants={fadeUp} style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              marginBottom: '0.25rem',
            }}>
              Software
            </motion.h1>
            <motion.h1 variants={fadeUp} style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              color: 'var(--accent)',
              marginBottom: '0.25rem',
            }}>
              Developer 1
            </motion.h1>
            

            <motion.p variants={fadeUp} style={{
              color: 'var(--text-muted)', fontSize: '1.125rem',
              maxWidth: '520px', lineHeight: 1.7, marginBottom: '3rem',
            }}>
              Building pixel-perfect, scalable and creatively Designed web applications with React , Next.js & Figma . Currently pursuing B.Tech in Computer Science & Engineering at ABES Institute of Technology.
            </motion.p>

            <motion.div variants={fadeUp} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/projects" style={{
                padding: '1rem 2.5rem',
                background: 'var(--accent)', color: '#000',
                borderRadius: '4px', fontWeight: 700,
                fontFamily: 'var(--font-display)', fontSize: '0.9rem',
                letterSpacing: '0.05em', textTransform: 'uppercase',
                transition: 'transform 0.2s, box-shadow 0.2s',
                display: 'inline-block',
              }}
                onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 24px rgba(240,192,64,0.3)' }}
                onMouseLeave={e => { e.target.style.transform = 'none'; e.target.style.boxShadow = 'none' }}
              >
                View Projects
              </Link>
              <Link to="/contact" style={{
                padding: '1rem 2.5rem',
                background: 'transparent', color: 'var(--text)',
                borderRadius: '4px', fontWeight: 600,
                fontFamily: 'var(--font-display)', fontSize: '0.9rem',
                letterSpacing: '0.05em', textTransform: 'uppercase',
                border: '1px solid var(--border)',
                transition: 'border-color 0.2s, color 0.2s',
                display: 'inline-block',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text)' }}
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero Photo */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hero-photo-wrap"
            style={{ flexShrink: 0, position: 'relative', paddingTop: '32px', paddingBottom: '32px', paddingLeft: '32px' }}
          >
            <div style={{
              width: '340px', height: '400px',
              borderRadius: '12px',
              border: '2px solid var(--border)',
              overflow: 'hidden',
              position: 'relative',
              background: 'var(--surface)',
            }}>
              <img
                src="/photo.png"
                alt="Mayank Upadhyay"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
              />
            </div>
            {/* floating badge - bottom left */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute', bottom: '4px', left: '0',
                background: 'var(--accent)', color: '#000',
                padding: '0.6rem 1rem', borderRadius: '6px',
                fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.8rem',
                boxShadow: '0 8px 24px rgba(240,192,64,0.4)',
                whiteSpace: 'nowrap',
              }}
            >
              Open to Work ✓
            </motion.div>
            {/* stats pill - top left */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              style={{
                position: 'absolute', top: '4px', left: '0',
                background: 'var(--surface)', border: '1px solid var(--border)',
                padding: '0.6rem 1rem', borderRadius: '6px',
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                whiteSpace: 'nowrap',
              }}
            >
              <span style={{ color: 'var(--accent)' }}>⚡</span> Internships + Hackathons
            </motion.div>
          </motion.div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .hero-inner {
              flex-direction: column !important;
              align-items: flex-start !important;
              gap: 5rem !important;
            }
            .hero-photo-wrap {
              width: 100% !important;
              display: flex !important;
              justify-content: center !important;
              padding-left: 32px !important;
              padding-right: 32px !important;
            }
            .hero-photo-wrap > div:first-child {
              width: 220px !important;
              height: 260px !important;
            }
          }
          @media (max-width: 480px) {
            .hero-photo-wrap > div:first-child {
              width: 190px !important;
              height: 230px !important;
            }
          }
        `}</style>
      </section>

      {/* Skills ticker */}
      <section style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '1.25rem 0', overflow: 'hidden', background: 'var(--bg2)' }}>
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{ display: 'flex', gap: '3rem', whiteSpace: 'nowrap', width: 'max-content' }}
        >
          {[...skills, ...skills].map((s, i) => (
            <span key={i} style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase',
              color: i % 4 === 0 ? 'var(--accent)' : 'var(--text-muted)',
              display: 'flex', alignItems: 'center', gap: '1rem',
            }}>
              {s} <span style={{ color: 'var(--accent)', fontSize: '0.5rem' }}>◆</span>
            </span>
          ))}
        </motion.div>
      </section>

      {/* Featured Work Preview */}
      <section style={{ padding: '5rem 1.25rem', maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}
        >
          <div>
            <p style={{ color: 'var(--accent)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>Featured Work</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>Selected Projects</h2>
          </div>
          <Link to="/projects" style={{ color: 'var(--accent)', fontSize: '0.875rem', fontWeight: 600, borderBottom: '1px solid var(--accent)', paddingBottom: '2px' }}>
            View All →
          </Link>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: '1.25rem' }}>
          {[
            {
              name: 'LMS Platform', category: 'Frontend', type: 'Learning Management System', emoji: '📚', color: '#60a5fa', year: '2025',
              desc: 'A React-based Learning Management System enabling course upload, student enrollment, and online learning with secure authentication and Clerk integration.',
              tags: ['React.js', 'Clerk Auth', 'Tailwind CSS'],
              live: 'https://lms-zeta-teal.vercel.app/',
              github: 'https://github.com/Mayankupadhyay-25/LMS.git',
            },
            {
             name: 'GrosMart',category: 'Frontend',type: 'E-Commerce Website',emoji: '🛒',color: '#4ade80', year: '2025',
             desc: 'A responsive e-commerce website for fresh food, vegetables, and seafood with a clean, user-friendly UI and optimized shopping experience.',
             longDesc: 'Built with HTML, Tailwind CSS, and React, GrosMart delivers smooth navigation, full responsiveness, and an optimized shopping flow. Focused on clean visual hierarchy and fast page performance.',
             tags: ['React.js', 'Tailwind CSS', 'HTML', 'Responsive Design'],
             github: 'https://github.com/Mayankupadhyay-25/GrosMart.git',
             live: 'https://gros-mart.vercel.app/',
             highlights: ['Responsive Design', 'Product Catalog', 'Cart System', 'Clean UI'],
            },
            {
             name: 'Dayitva',category: 'UI/UX',type: 'Travel Website',emoji: '✈️',color: '#f472b6',year: '2024',
             desc: 'A travel website designed from scratch in Figma and developed with Next.js, featuring smooth navigation, destination search, and a mobile-first responsive layout.',
             longDesc: 'The project began with a full Figma design process — user flows, wireframes, and high-fidelity mockups — then transitioned to a pixel-perfect Next.js implementation. Features destination search, smooth page transitions, and rich visual storytelling.',
             tags: ['Next.js', 'Figma', 'UI/UX Design', 'Mobile-First'],
             figma: 'https://www.figma.com/design/WsWj0wWCSeWOQsJwvslVfj/Daitvya?node-id=5-2&p=f&t=jZ8EoAtVOUfOLa0a-0',
             highlights: ['Figma Design', 'Destination Search', 'Mobile-First', 'Next.js Dev'],
            },
          ].map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              style={{
                background: 'var(--bg2)', border: '1px solid var(--border)',
                borderRadius: '8px', overflow: 'hidden', transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = p.color}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              {/* Card Top */}
              <div style={{
                padding: '1.5rem', height: '140px',
                background: `linear-gradient(135deg, ${p.color}15, ${p.color}05)`,
                display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
                borderBottom: '1px solid var(--border)',
              }}>
                <div style={{ fontSize: '2.25rem' }}>{p.emoji}</div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.65rem', color: p.color, fontFamily: 'var(--font-display)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.2rem 0.6rem', background: `${p.color}20`, borderRadius: '100px' }}>{p.category}</span>
                  <span style={{ fontSize: '0.65rem', color: 'var(--text-dim)' }}>{p.year}</span>
                </div>
              </div>
              {/* Card Body */}
              <div style={{ padding: '1.5rem' }}>
                <p style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>{p.type}</p>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.6rem' }}>{p.name}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.6, marginBottom: '1rem' }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem' }}>
                  {p.tags.map(t => (
                    <span key={t} style={{ padding: '0.2rem 0.55rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '100px', fontSize: '0.65rem', color: 'var(--text-muted)', fontFamily: 'var(--font-display)' }}>{t}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer"
                      style={{ padding: '0.35rem 0.85rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '4px', fontSize: '0.72rem', fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--text-muted)', textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = p.color; e.currentTarget.style.color = p.color }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)' }}
                    >Live ↗</a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      style={{ padding: '0.35rem 0.85rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '4px', fontSize: '0.72rem', fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--text-muted)', textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = p.color; e.currentTarget.style.color = p.color }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)' }}
                    >GitHub ↗</a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 1.25rem', background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}
        >
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
            Ready to build something<br /><span style={{ color: 'var(--accent)' }}>great together?</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '2.5rem' }}>
            I'm currently available for frontend development roles and internships. Let's connect!
          </p>
          <Link to="/contact" style={{
            display: 'inline-block', padding: '1.1rem 3rem',
            background: 'var(--accent)', color: '#000', borderRadius: '4px',
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem',
            textTransform: 'uppercase', letterSpacing: '0.05em',
          }}>
            Let's Talk →
          </Link>
        </motion.div>
      </section>
    </PageWrapper>
  )
}
