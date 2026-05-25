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
        padding: '120px 2rem 4rem',
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
              Web
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
              Developer
            </motion.h1>
            <motion.h1 variants={fadeUp} style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              WebkitTextStroke: '1px var(--border)',
              color: 'transparent',
              marginBottom: '2.5rem',
            }}>
              & UI Designer
            </motion.h1>

            <motion.p variants={fadeUp} style={{
              color: 'var(--text-muted)', fontSize: '1.125rem',
              maxWidth: '520px', lineHeight: 1.7, marginBottom: '3rem',
            }}>
              Building pixel-perfect, scalable web applications with React & Next.js. Currently pursuing B.Tech in CS (Data Science) at ABES Institute of Technology.
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
            style={{ flexShrink: 0, position: 'relative' }}
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
              {/* accent corner decorations */}
              <div style={{ position: 'absolute', top: '12px', right: '12px', width: '40px', height: '40px', border: '2px solid var(--accent)', borderRadius: '4px', opacity: 0.6 }} />
            </div>
            {/* floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute', bottom: '-16px', left: '-20px',
                background: 'var(--accent)', color: '#000',
                padding: '0.6rem 1rem', borderRadius: '6px',
                fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.8rem',
                boxShadow: '0 8px 24px rgba(240,192,64,0.4)',
              }}
            >
              Open to Work ✓
            </motion.div>
            {/* stats pill */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              style={{
                position: 'absolute', top: '-16px', left: '-24px',
                background: 'var(--surface)', border: '1px solid var(--border)',
                padding: '0.6rem 1rem', borderRadius: '6px',
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
              }}
            >
              <span style={{ color: 'var(--accent)' }}>⚡</span> Internship Experience
            </motion.div>
          </motion.div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .hero-inner { flex-direction: column-reverse !important; align-items: flex-start !important; }
            .hero-photo-wrap { width: 100% !important; display: flex; justify-content: center; }
            .hero-photo-wrap > div { width: 240px !important; height: 280px !important; }
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
      <section style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
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

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5px', background: 'var(--border)' }}>
          {[
            { name: 'CarRental', type: 'MERN Stack', desc: 'Full-stack car rental platform with secure auth, booking system, and admin dashboard.', tags: ['MongoDB', 'Express', 'React', 'Node.js'], emoji: '🚗' },
            { name: 'Dayitva', type: 'Travel Website', desc: 'Responsive travel website designed in Figma, built with Next.js with smooth destination search.', tags: ['Next.js', 'Figma', 'UI/UX'], emoji: '✈️' },
            { name: 'Financial Sanctuary', type: 'Personal Finance App', desc: 'A calming personal finance app helping users track and manage their finances.', tags: ['React', 'UI Design', 'Figma'], emoji: '💰' },
            { name: 'School Website', type: 'Information Platform', desc: 'Modern responsive school website with clean navigation and academic resource access.', tags: ['Next.js', 'Figma', 'Responsive'], emoji: '🏫' },
          ].map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              style={{
                background: 'var(--bg2)', padding: '2.5rem',
                cursor: 'default', position: 'relative', overflow: 'hidden',
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{p.emoji}</div>
              <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: '0.5rem' }}>{p.type}</p>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.75rem' }}>{p.name}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>{p.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {p.tags.map(t => (
                  <span key={t} style={{
                    padding: '0.25rem 0.75rem', background: 'var(--surface)',
                    border: '1px solid var(--border)', borderRadius: '100px',
                    fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-display)',
                  }}>{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '6rem 2rem', background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
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
