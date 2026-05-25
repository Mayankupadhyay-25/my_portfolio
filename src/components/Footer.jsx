import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg2)',
      borderTop: '1px solid var(--border)',
      padding: '3rem 2rem 2rem',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem', marginBottom: '2rem' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem', marginBottom: '0.5rem' }}>
              MU<span style={{ color: 'var(--accent)' }}>.</span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', maxWidth: '280px' }}>
              Web Developer & UI Designer building pixel-perfect experiences.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: '1rem' }}>Navigation</p>
              {['/', '/about', '/projects', '/experience', '/contact'].map((path, i) => (
                <div key={path} style={{ marginBottom: '0.5rem' }}>
                  <Link to={path} style={{ color: 'var(--text-muted)', fontSize: '0.875rem', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = 'var(--text)'}
                    onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
                  >
                    {['Home', 'About', 'Projects', 'Experience', 'Contact'][i]}
                  </Link>
                </div>
              ))}
            </div>
            <div>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: '1rem' }}>Connect</p>
              {[
                { label: 'GitHub', url: 'https://github.com/Mayankupadhyay-25' },
                { label: 'LinkedIn', url: 'https://www.linkedin.com/in/mayank-upadhyay-ab2909279/' },
                { label: 'Email', url: 'mailto:mayankupadhyay9454@gmail.com' },
              ].map(s => (
                <div key={s.label} style={{ marginBottom: '0.5rem' }}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer"
                    style={{ color: 'var(--text-muted)', fontSize: '0.875rem', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = 'var(--text)'}
                    onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
                  >
                    {s.label} ↗
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>© 2025 Mayank Upadhyay. All rights reserved.</p>
          <p style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>Built with React + Vite ⚡</p>
        </div>
      </div>
    </footer>
  )
}
