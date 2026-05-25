import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'

const skills = [
  { cat: 'Frontend', items: [
    { name: 'React.js', pct: 90 },
    { name: 'Next.js', pct: 85 },
    { name: 'TypeScript', pct: 75 },
    { name: 'Tailwind CSS', pct: 90 },
    { name: 'HTML & CSS', pct: 95 },
  ]},
  { cat: 'Backend & DB', items: [
    { name: 'Node.js', pct: 70 },
    { name: 'REST APIs', pct: 80 },
    { name: 'MongoDB', pct: 72 },
    { name: 'MySQL', pct: 68 },
  ]},
  { cat: 'Design & Tools', items: [
    { name: 'Figma', pct: 88 },
    { name: 'UI/UX Design', pct: 85 },
    { name: 'Git & GitHub', pct: 80 },
    { name: 'Postman', pct: 75 },
  ]},
  { cat: 'Languages', items: [
    { name: 'JavaScript', pct: 88 },
    { name: 'TypeScript', pct: 75 },
    { name: 'C++', pct: 65 },
  ]},
]

const achievements = [
  { icon: '🏆', title: 'Smart India Hackathon 2025 Finalist', desc: 'Led a team of 4, resolved 15+ issues, integrated AI-based modules.' },
  { icon: '✅', title: 'Manual Testing Certified', desc: 'Certified by ABESIT in manual software testing.' },
  { icon: '⚛️', title: 'React.js Certified', desc: 'Completed React.js training at ABESIT Institute.' },
  { icon: '🎨', title: 'UI/UX Design Certificate', desc: 'Issued by Indibus Software Solutions Pvt. Ltd.' },
  { icon: '☕', title: 'Core JAVA Certificate', desc: 'Certified by Softpro India & AICTE.' },
  { icon: '🩸', title: 'Blood Donation Camp Volunteer', desc: 'Active participation in community welfare initiatives.' },
]

function SkillBar({ name, pct, delay = 0 }) {
  return (
    <div style={{ marginBottom: '1.25rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
        <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>{name}</span>
        <span style={{ fontSize: '0.75rem', color: 'var(--accent)', fontFamily: 'var(--font-display)', fontWeight: 700 }}>{pct}%</span>
      </div>
      <div style={{ height: '4px', background: 'var(--surface)', borderRadius: '2px', overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
          style={{ height: '100%', background: 'linear-gradient(90deg, var(--accent2), var(--accent))', borderRadius: '2px' }}
        />
      </div>
    </div>
  )
}

export default function About() {
  return (
    <PageWrapper>
      <div style={{ padding: '120px 2rem 6rem', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '5rem' }}
        >
          <p style={{ color: 'var(--accent)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>
            <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'var(--accent)', verticalAlign: 'middle', marginRight: '0.75rem' }} />
            About Me
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 0.95, marginBottom: '2rem' }}>
            Passionate<br /><span style={{ color: 'var(--accent)' }}>Developer.</span>
          </h1>
        </motion.div>

        {/* Bio Section */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '6rem', alignItems: 'start' }} className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{
              width: '100%', aspectRatio: '4/5',
              background: 'var(--surface)',
              borderRadius: '4px', border: '1px solid var(--border)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              position: 'relative', overflow: 'hidden',
            }}>
              <img src="/photo.png" alt="Mayank Upadhyay" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)',
                padding: '2rem', textAlign: 'center',
              }}>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem' }}>Mayank Upadhyay</p>
                <p style={{ color: 'var(--accent)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Web Developer & UI Designer</p>
              </div>
              {/* decorative corner */}
              <div style={{ position: 'absolute', top: '1rem', right: '1rem', width: '48px', height: '48px', border: '2px solid var(--accent)', borderRadius: '4px', opacity: 0.4 }} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem' }}>
              A self-taught UI/UX designer<br />turned Web Developer
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              I'm a passionate Website developer with 3+ years of experience in internships and projects. I enjoy solving real-world problems by designing intuitive user flows and building polished, high-performance interfaces.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Currently pursuing B.Tech in Computer Science and Engineering (Data Science) at ABES Institute of Technology, Ghaziabad. I specialize in React.js, Next.js, and modern CSS — bridging the gap between design and development.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              My work focuses on usability, simplicity, and delivering meaningful user experiences that make a real difference. I believe great code and great design go hand in hand.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { label: 'Location', value: 'Uttar Pradesh, India' },
                { label: 'Availability', value: 'Open to Work ✅' },
                { label: 'Education', value: 'B.Tech CS (DS) 2022–26' },                { label: 'Languages', value: 'English, Hindi' },
              ].map(i => (
                <div key={i.label} style={{ padding: '1rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '4px' }}>
                  <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>{i.label}</p>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.9rem', color: i.label === 'Availability' ? 'var(--accent)' : 'var(--text)' }}>{i.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '6rem' }}
        >
          <p style={{ color: 'var(--accent)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>Technical Proficiency</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '3rem' }}>Skills & Expertise</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2.5rem' }}>
            {skills.map((cat, ci) => (
              <motion.div
                key={cat.cat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.1 }}
                style={{ padding: '2rem', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '4px' }}
              >
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: '1.5rem' }}>{cat.cat}</h3>
                {cat.items.map((item, ii) => (
                  <SkillBar key={item.name} name={item.name} pct={item.pct} delay={ii * 0.1} />
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p style={{ color: 'var(--accent)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>Recognition</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '3rem' }}>Achievements & Certifications</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ borderColor: 'var(--accent)' }}
                style={{ padding: '1.5rem', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '4px', transition: 'border-color 0.2s' }}
              >
                <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{a.icon}</div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.4rem' }}>{a.title}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.825rem', lineHeight: 1.5 }}>{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </PageWrapper>
  )
}
