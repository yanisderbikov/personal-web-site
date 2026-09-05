import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Menu,
  Sparkles,
  X,
} from 'lucide-react'
import './styles.css'

const profile = {
  github: 'https://github.com/yanisderbikov',
  linkedin: 'https://www.linkedin.com/in/yanderbikov/',
  avatar: 'https://avatars.githubusercontent.com/u/56488301?v=4',
}

const stack = [
  'Java',
  'Spring',
  'Distributed systems',
  'Microservices',
  'RabbitMQ',
  'WebSocket',
  'Protobuf',
  'Stripe',
  'LangChain4j',
  'React',
  'PostgreSQL',
  'Docker',
]

const experience = [
  {
    company: 'Lightspeed · Ecwid',
    role: 'Software Engineer',
    period: 'Dec 2024 — Present',
    summary:
      'Building and stabilizing business-critical e-commerce systems used by merchants globally.',
    highlights: [
      'Resolved a critical Facebook Commerce sync issue that duplicated products and put significant merchant sales at risk.',
      'Designed a safe decommissioning flow for a legacy shipping integration, removing unused code and third-party costs.',
      'Restored Stripe recurring-payment metadata handling and redesigned Protobuf contracts for more reliable high-load services.',
    ],
  },
  {
    company: 'Vizhu.Online',
    role: 'Full-stack Developer',
    period: 'Jul 2023 — Sep 2024',
    summary:
      'Designed an AI chat product end to end, from backend architecture to a real-time React client.',
    highlights: [
      'Shipped real-time AI chat with voice recognition and near-instant responses.',
      'Built Spring + LangChain4j backend flows and WebSocket communication for always-on interactive AI experiences.',
      'Introduced a typed React API workflow that shortened onboarding and feature delivery time.',
    ],
  },
  {
    company: 'Lifemart',
    role: 'Backend Developer',
    period: 'Aug 2021 — Jul 2023',
    summary:
      'Built backend services for employee onboarding, learning, interview scheduling, and career progression.',
    highlights: [
      'Created a unified hiring and onboarding flow that reduced operational load on HR teams.',
      'Automated employee career progression and made development paths more transparent.',
      'Improved reliability under load with RabbitMQ-based service coordination and secure access control.',
    ],
  },
]

const projects = [
  {
    name: 'AnyForms Education',
    type: 'Learning platform backend',
    description:
      'A production-oriented Java 21 backend for the AnyForms education platform: email-code authentication, JWT sessions, paid-course access checks between services, PostgreSQL/Flyway persistence, direct S3 and Kinescope uploads, DRM-aware video access, and a full admin API.',
    tech: ['Java 21', 'Spring Boot', 'PostgreSQL', 'Flyway', 'S3', 'Kinescope'],
    href: 'https://github.com/yanisderbikov/edu.anyforms-back',
    index: '01',
  },
  {
    name: 'Vizhu.Online',
    type: 'Real-time AI platform',
    description:
      'An AI chat platform built around real-time conversations, speech recognition, scalable backend services, and an interactive web client.',
    tech: ['Spring', 'LangChain4j', 'WebSocket', 'React', 'AI'],
    href: 'https://github.com/yanisderbikov/vizhuonline',
    index: '02',
  },
  {
    name: 'World Cup Scoreboard',
    type: 'Java library',
    description:
      'A compact Java library for starting football matches, updating scores, finishing games, and producing an ordered live scoreboard summary.',
    tech: ['Java', 'OOP', 'Testing', 'API design'],
    href: 'https://github.com/yanisderbikov/football-world-cup-scoreboard',
    index: '03',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className="site-shell">
      <header className={`topbar ${scrolled ? 'topbar--scrolled' : ''}`}>
        <a className="brand" href="#top" onClick={() => setMenuOpen(false)}>
          ID<span>.</span>
        </a>
        <nav className="nav-desktop" aria-label="Primary navigation">
          <button onClick={() => go('#about')}>About</button>
          <button onClick={() => go('#experience')}>Resume</button>
          <button onClick={() => go('#projects')}>Projects</button>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <ArrowUpRight size={14} />
          </a>
        </nav>
        <button
          className="menu-button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      {menuOpen && (
        <div className="mobile-menu">
          <button onClick={() => go('#about')}>About</button>
          <button onClick={() => go('#experience')}>Resume</button>
          <button onClick={() => go('#projects')}>Projects</button>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <ArrowUpRight size={16} />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight size={16} />
          </a>
        </div>
      )}

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-glow hero-glow--one" />
          <div className="hero-glow hero-glow--two" />
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="status-dot" /> Available for ambitious engineering work</div>
            <h1>
              I build backend systems<br />
              that <em>move products forward.</em>
            </h1>
            <p className="hero-lead">
              I’m <strong>Ian Derbikov</strong>, a software engineer focused on Java, distributed systems, and product-minded delivery — from high-load e-commerce flows to real-time AI products.
            </p>
            <div className="hero-actions">
              <button className="button button--primary" onClick={() => go('#experience')}>
                View résumé <ArrowDown size={17} />
              </button>
              <button className="button button--ghost" onClick={() => go('#projects')}>
                Selected projects
              </button>
            </div>
            <div className="social-row" aria-label="Social links">
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={17} /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={17} /></a>
            </div>
          </div>

          <div className="hero-card reveal reveal--delay">
            <div className="portrait-wrap">
              <img src={profile.avatar} alt="Ian Derbikov" className="portrait" />
              <div className="portrait-ring" />
            </div>
            <div className="hero-card-meta">
              <span>Software Engineer</span>
              <span>Java · Backend · AI</span>
            </div>
            <div className="code-card" aria-hidden="true">
              <div><span className="code-muted">01</span><span className="code-purple">engineer</span> Ian {'{'}</div>
              <div><span className="code-muted">02</span>&nbsp;&nbsp;focus: <span className="code-green">"impact"</span>,</div>
              <div><span className="code-muted">03</span>&nbsp;&nbsp;stack: <span className="code-green">"Java"</span>,</div>
              <div><span className="code-muted">04</span>&nbsp;&nbsp;mode: <span className="code-green">"ship"</span></div>
              <div><span className="code-muted">05</span>{'}'}</div>
            </div>
          </div>
        </section>

        <section className="ticker" aria-label="Technology stack">
          <div className="ticker-track">
            {[...stack, ...stack].map((item, index) => (
              <span key={`${item}-${index}`}>{item}<i>✦</i></span>
            ))}
          </div>
        </section>

        <section id="about" className="section section-wrap about-grid">
          <div>
            <div className="section-kicker">01 / About</div>
            <h2>Engineering with<br /><em>product context.</em></h2>
          </div>
          <div className="about-copy">
            <p className="about-main">
              I work best where technical decisions are tied directly to customer and business outcomes. I’ve designed full-stack architectures from scratch, stabilized payment and commerce flows, and built real-time AI experiences.
            </p>
            <p>
              My strongest work usually sits at the boundary between systems thinking and product ownership: understanding the real problem, choosing the smallest robust solution, and carrying it all the way to production.
            </p>
            <div className="principles">
              <div><span>01</span><strong>Own the outcome</strong><p>Not just the ticket. Understand what changes for the user.</p></div>
              <div><span>02</span><strong>Design for failure</strong><p>Distributed systems are reliable when failure is expected, not ignored.</p></div>
              <div><span>03</span><strong>Keep it shippable</strong><p>Prefer clear, maintainable systems over architecture for architecture’s sake.</p></div>
            </div>
          </div>
        </section>

        <section id="experience" className="section section-wrap">
          <div className="section-head">
            <div>
              <div className="section-kicker">02 / Resume</div>
              <h2>Experience</h2>
            </div>
            <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">
              Full profile <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="experience-list">
            {experience.map((job) => (
              <article className="experience-item" key={job.company}>
                <div className="experience-meta">
                  <span className="experience-period">{job.period}</span>
                  <span className="experience-role"><BriefcaseBusiness size={15} /> {job.role}</span>
                </div>
                <div className="experience-body">
                  <h3>{job.company}</h3>
                  <p className="experience-summary">{job.summary}</p>
                  <ul>
                    {job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section section-wrap projects-section">
          <div className="section-head">
            <div>
              <div className="section-kicker">03 / Selected work</div>
              <h2>Projects that show<br /><em>how I think.</em></h2>
            </div>
            <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">
              All repositories <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <a className="project-card" href={project.href} target="_blank" rel="noreferrer" key={project.name}>
                <div className="project-topline">
                  <span>{project.index}</span>
                  <ArrowUpRight size={20} />
                </div>
                <div>
                  <p className="project-type">{project.type}</p>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
                <div className="tags">
                  {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="section section-wrap capabilities">
          <div className="section-kicker">04 / Toolkit</div>
          <div className="capabilities-grid">
            <h2>Backend first.<br /><em>Full-stack when useful.</em></h2>
            <div className="stack-cloud">
              {stack.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </section>

        <section className="cta section-wrap">
          <div className="cta-inner">
            <Sparkles className="cta-icon" size={24} />
            <p className="section-kicker">Let’s build something useful</p>
            <h2>Need an engineer who can<br />own the feature, not just the code?</h2>
            <div className="cta-actions">
              <a className="button button--light" href={profile.linkedin} target="_blank" rel="noreferrer">
                Message me on LinkedIn <ArrowUpRight size={17} />
              </a>
              <a className="button button--outline-light" href={profile.github} target="_blank" rel="noreferrer">
                Explore GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#top">ID<span>.</span></a>
        <p>Ian Derbikov · Software Engineer</p>
        <p>Built with React · Hosted on GitHub Pages</p>
      </footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
