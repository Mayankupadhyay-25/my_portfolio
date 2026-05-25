import { useState } from 'react'
import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const mailto = `mailto:mayankupadhyay9454@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`)}`
    window.open(mailto)
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  const inputStyle = {
    width: '100%', padding: '1rem 1.25rem',
    background: 'var(--surface)', border: '1px solid var(--border)',
    borderRadius: '4px', color: 'var(--text)',
    fontFamily: 'var(--font-body)', fontSize: '0.9rem',
    outline: 'none', transition: 'border-color 0.2s',
  }

  return (
    <PageWrapper>
      <div style={{ padding: '120px 2rem 6rem', maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ marginBottom: '5rem' }}
        >
          <p style={{ color: 'var(--accent)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>
            <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'var(--accent)', verticalAlign: 'middle', marginRight: '0.75rem' }} />
            Let's Connect
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 0.95 }}>
            Get in<br /><span style={{ color: 'var(--accent)' }}>Touch</span>
          </h1>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '4rem', alignItems: 'start' }} className="contact-grid">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '3rem', fontSize: '1rem' }}>
              I'm actively looking for Web developer opportunities. Whether you have a role, a project, or just want to say hello — my inbox is always open!
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
              {[
                { label: 'Email', value: 'mayankupadhyay9454@gmail.com', href: 'mailto:mayankupadhyay9454@gmail.com', icon: '✉️' },
                { label: 'Phone', value: '+91 73909 66383', href: 'tel:+917390966383', icon: '📞' },
                { label: 'Location', value: 'Uttar Pradesh, India', href: null, icon: '📍' },
              ].map(c => (
                <div key={c.label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '44px', height: '44px', flexShrink: 0,
                    background: 'var(--surface)', border: '1px solid var(--border)',
                    borderRadius: '8px', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: '1.1rem',
                  }}>{c.icon}</div>
                  <div>
                    <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>{c.label}</p>
                    {c.href ? (
                      <a href={c.href} style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.9rem', fontFamily: 'var(--font-display)' }}>{c.value}</a>
                    ) : (
                      <p style={{ color: 'var(--text)', fontWeight: 600, fontSize: '0.9rem', fontFamily: 'var(--font-display)' }}>{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '1rem' }}>Find me on</p>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {[
                  { label: 'GitHub', url: 'https://github.com/Mayankupadhyay-25', icon: '⌨️' },
                  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/mayank-upadhyay-ab2909279/', icon: '💼' },
                  { label: 'Figma Portfolio', url: '#', icon: '🎨' },
                ].map(s => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '0.6rem 1rem',
                      background: 'var(--surface)', border: '1px solid var(--border)',
                      borderRadius: '6px', fontSize: '0.78rem',
                      fontFamily: 'var(--font-display)', fontWeight: 600,
                      color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)' }}
                  >
                    <span>{s.icon}</span> {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Your Name</label>
                <input
                  name="name" required value={form.name} onChange={handle}
                  placeholder="John Doe"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Email</label>
                <input
                  name="email" type="email" required value={form.email} onChange={handle}
                  placeholder="john@company.com"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Subject</label>
              <input
                name="subject" value={form.subject} onChange={handle}
                placeholder="Frontend Developer Role / Project Collaboration"
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Message</label>
              <textarea
                name="message" required value={form.message} onChange={handle}
                rows={7}
                placeholder="Tell me about the opportunity, project, or just say hello..."
                style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'}
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, boxShadow: '0 8px 32px rgba(240,192,64,0.3)' }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: '1.1rem 2.5rem',
                background: sent ? '#4ade80' : 'var(--accent)',
                color: '#000', border: 'none', borderRadius: '4px',
                fontFamily: 'var(--font-display)', fontWeight: 700,
                fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em',
                cursor: 'pointer', transition: 'background 0.3s',
                alignSelf: 'flex-start',
              }}
            >
              {sent ? '✓ Message Sent!' : 'Send Message →'}
            </motion.button>
          </motion.form>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; } }
        input::placeholder, textarea::placeholder { color: var(--text-dim); }
      `}</style>
    </PageWrapper>
  )
}
