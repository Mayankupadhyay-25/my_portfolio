import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'

const experiences = [
  {
    company: 'Campaigning Source Pvt. Ltd.',
    role: 'Design & Development Intern',
    type: 'Remote',
    period: 'Oct 2024 – Jan 2025',
    duration: '4 months',
    color: '#f0c040',
    logo: '📣',
    points: [
      'Built and deployed full-stack features across three projects with primary focus on frontend development using React to create responsive UI components.',
      'Led a team of 4 members, resolved 15+ issues, and contributed to integrating AI-based modules to streamline and improve deployment efficiency.',
      'Improved frontend efficiency in React applications by refining component structure and handling application state effectively, ensuring smooth and consistent user experience across multiple browsers.',
    ],
    skills: ['React.js', 'Team Leadership', 'AI Integration', 'Frontend Dev', 'State Management'],
  },
  {
    company: 'Indibus Software Solutions',
    role: 'UI/UX & Next.js Intern',
    type: 'On-site',
    period: 'May 2024 – Aug 2024',
    duration: '4 months',
    color: '#60a5fa',
    logo: '💡',
    points: [
      'Developed responsive frontend components using Next.js and improved UI performance across multiple product surfaces.',
      'Collaborated with cross-functional team members to implement scalable features across multiple projects.',
      'Optimized component structure for better state management and rendering efficiency, significantly improving page load times.',
    ],
    skills: ['Next.js', 'UI/UX Design', 'Figma', 'Component Architecture', 'Performance'],
  },
]

const education = [
  {
    degree: 'B.Tech in Computer Science & Engineering (Data Science)',
    school: 'ABES Institute of Technology',
    university: 'Dr. A.P.J. Abdul Kalam Technical University, UP',
    period: '2022 – 2026',
    icon: '🎓',
    color: '#f0c040',
  },
  {
    degree: '12th — Science',
    school: 'Sanskaar International School, Prayagraj',
    university: 'Central Board of Secondary Education (CBSE)',
    period: '2020 – 2021',
    icon: '📐',
    color: '#4ade80',
  },
  {
    degree: '10th — Science',
    school: 'B.N.S School Kursato Chaukhandi, Varanasi',
    university: 'Central Board of Secondary Education (CBSE)',
    period: '2018 – 2019',
    icon: '📖',
    color: '#fb923c',
  },
]

export default function Experience() {
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
            Career
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 0.95 }}>
            Experience &<br /><span style={{ color: 'var(--accent)' }}>Education</span>
          </h1>
        </motion.div>

        {/* Work Experience */}
        <section style={{ marginBottom: '6rem' }}>
          <motion.h2
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-muted)', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
          >
            <span>Work Experience</span>
            <span style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
          </motion.h2>

          <div style={{ position: 'relative' }}>
            {/* Timeline line */}
            <div style={{ position: 'absolute', left: '28px', top: 0, bottom: 0, width: '1px', background: 'var(--border)' }} />

            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                style={{ display: 'flex', gap: '2.5rem', marginBottom: '3.5rem', position: 'relative' }}
              >
                {/* Timeline dot */}
                <div style={{
                  width: '56px', height: '56px', flexShrink: 0,
                  background: 'var(--bg)', border: `2px solid ${exp.color}`,
                  borderRadius: '8px', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: '1.5rem', zIndex: 1,
                }}>
                  {exp.logo}
                </div>

                <div style={{ flex: 1, paddingBottom: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem', marginBottom: '0.25rem' }}>{exp.role}</h3>
                      <p style={{ color: exp.color, fontSize: '0.875rem', fontWeight: 600 }}>{exp.company}</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-display)' }}>{exp.period}</p>
                      <p style={{ fontSize: '0.7rem', color: 'var(--text-dim)', marginTop: '0.2rem' }}>{exp.type} · {exp.duration}</p>
                    </div>
                  </div>

                  <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.5rem', marginTop: '1rem' }}>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem' }}>
                      {exp.points.map((pt, j) => (
                        <li key={j} style={{ display: 'flex', gap: '0.75rem', color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                          <span style={{ color: exp.color, flexShrink: 0, marginTop: '0.25rem' }}>▸</span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                      {exp.skills.map(s => (
                        <span key={s} style={{
                          padding: '0.25rem 0.75rem',
                          background: `${exp.color}15`, border: `1px solid ${exp.color}40`,
                          borderRadius: '100px', fontSize: '0.7rem',
                          color: exp.color, fontFamily: 'var(--font-display)', fontWeight: 600,
                        }}>{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <motion.h2
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-muted)', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
          >
            <span>Education</span>
            <span style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
          </motion.h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 4 }}
                style={{
                  display: 'flex', gap: '1.5rem', alignItems: 'center',
                  padding: '1.5rem', background: 'var(--bg2)',
                  border: '1px solid var(--border)', borderRadius: '8px',
                  transition: 'border-color 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = edu.color}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <div style={{
                  width: '52px', height: '52px', flexShrink: 0,
                  background: `${edu.color}15`, border: `1px solid ${edu.color}40`,
                  borderRadius: '8px', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: '1.5rem',
                }}>
                  {edu.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.25rem' }}>{edu.degree}</h3>
                  <p style={{ color: edu.color, fontSize: '0.825rem', fontWeight: 600 }}>{edu.school}</p>
                  <p style={{ color: 'var(--text-dim)', fontSize: '0.75rem' }}>{edu.university}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{
                    padding: '0.3rem 0.75rem', background: `${edu.color}15`,
                    border: `1px solid ${edu.color}30`, borderRadius: '100px',
                    fontSize: '0.75rem', color: edu.color,
                    fontFamily: 'var(--font-display)', fontWeight: 600,
                  }}>{edu.period}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Frontend Approach */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginTop: '5rem', padding: '3rem', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '8px' }}
        >
          <p style={{ color: 'var(--accent)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>My Philosophy</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '2rem' }}>Frontend Development Approach</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: '⚡', title: 'Component-Driven', desc: 'Build scalable, reusable component-based interfaces using React for maintainability and DRY code.' },
              { icon: '🔄', title: 'Smart State Management', desc: 'Manage data flow efficiently to ensure smooth, interactive, and predictable user experiences.' },
              { icon: '📱', title: 'Responsive by Default', desc: 'Implement mobile-first layouts using modern CSS with focus on cross-device compatibility.' },
              { icon: '🚀', title: 'Performance Focused', desc: 'Optimize rendering, debug with developer tools, and ensure lightning-fast application performance.' },
            ].map(item => (
              <div key={item.title}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.4rem' }}>{item.title}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </PageWrapper>
  )
}
