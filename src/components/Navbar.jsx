import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999,
        padding: '0 2rem',
        background: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.4s ease',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '72px',
      }}
    >
      <NavLink to="/" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.02em' }}>
        MU<span style={{ color: 'var(--accent)' }}>.</span>
      </NavLink>

      {/* Desktop Links */}
      <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="desktop-nav">
        {links.map(l => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === '/'}
            style={({ isActive }) => ({
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              fontWeight: 500,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              color: isActive ? 'var(--accent)' : 'var(--text-muted)',
              transition: 'color 0.2s',
              position: 'relative',
            })}
          >
            {({ isActive }) => (
              <>
                {l.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    style={{
                      position: 'absolute', bottom: '-4px', left: 0, right: 0,
                      height: '2px', background: 'var(--accent)', borderRadius: '2px'
                    }}
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
        <a
          href="mailto:mayankupadhyay9454@gmail.com"
          style={{
            padding: '0.5rem 1.25rem',
            background: 'var(--accent)',
            color: '#000',
            borderRadius: '4px',
            fontWeight: 700,
            fontSize: '0.8rem',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-display)',
          }}
        >
          Hire Me
        </a>
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="hamburger"
        style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none', flexDirection: 'column', gap: '5px', padding: '4px' }}
        aria-label="Toggle menu"
      >
        {[0, 1, 2].map(i => (
          <motion.span
            key={i}
            animate={open ? (i === 1 ? { opacity: 0 } : i === 0 ? { rotate: 45, y: 7 } : { rotate: -45, y: -7 }) : { rotate: 0, y: 0, opacity: 1 }}
            style={{ display: 'block', width: '24px', height: '2px', background: 'var(--text)', borderRadius: '2px', transformOrigin: 'center' }}
          />
        ))}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed', top: '72px', left: 0, right: 0,
              background: 'var(--bg2)', borderBottom: '1px solid var(--border)',
              padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem',
              zIndex: 998,
            }}
            className="mobile-menu"
          >
            {links.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                style={({ isActive }) => ({
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: isActive ? 'var(--accent)' : 'var(--text)',
                })}
              >
                {l.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  )
}
