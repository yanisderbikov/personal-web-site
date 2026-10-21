import React from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowUpRight, ArrowRight, Mail, PenTool, Code2, Rocket, Check, Github, Linkedin } from 'lucide-react'
import ExperiencePage from './ExperiencePage'
import './styles.css'
import './landing.css'

const email = 'ian@derbikov.com'
const subject = encodeURIComponent('My idea for a 3-day MVP')
const body = encodeURIComponent("Hi Ian,\n\nHere's what I'd like to build:\n\nWho it's for:\n\nWhat the MVP should do:\n\nBest,\n")
const contact = `mailto:${email}?subject=${subject}&body=${body}`

function StudioLanding() {
  return (
    <div className="studio">
      <header className="studio-header studio-container">
        <a className="studio-mark" href="/" aria-label="Ian Derbikov home">D<span className="studio-mark-dot">.</span></a>
        <nav aria-label="Main navigation">
          <a href="#process">What I do</a>
          <a href="/experience">Experience <ArrowUpRight size={14}/></a>
        </nav>
        <a className="studio-header-mail" href={contact}><Mail size={15}/> Let's talk</a>
      </header>

      <main>
        <section className="studio-hero studio-container">
          <div className="studio-topline"><span className="studio-led"></span> INDEPENDENT, FOUNDER-LED SOFTWARE STUDIO <span className="studio-topline-end">IAN DERBIKOV / NYC</span></div>
          <div className="studio-hero-grid">
            <div className="studio-hero-copy">
              <p className="studio-index">YOUR IDEA, MADE REAL.</p>
              <h1>Design.<br/>Develop.<br/><span>Deploy.</span></h1>
              <p className="studio-hero-description">From the first sketch to a working product. I design, build, and launch custom software — with you working directly with me, not an account manager.</p>
              <div className="studio-hero-actions">
                <a className="studio-btn studio-btn-primary" href={contact}>Get your free MVP <ArrowUpRight size={19}/></a>
                <a className="studio-btn studio-btn-secondary" href="/experience">See my experience <ArrowRight size={18}/></a>
              </div>
              <p className="studio-under-cta"><Check size={15}/> No forms. No commitment. Just email me your idea.</p>
            </div>
            <div className="studio-promise">
              <div className="studio-promise-top"><span>THE 3-DAY CHALLENGE</span><span>01 — 03</span></div>
              <div className="studio-big-number">03<span>days</span></div>
              <div className="studio-promise-bottom"><span className="studio-promise-spark">✳</span><h2>I'll build a free MVP of your idea.</h2><p>Send me a short description. I'll put together a focused, working prototype and show you what's possible within 3 days.</p><a href={contact}>Tell me what you're building <ArrowUpRight size={17}/></a></div>
            </div>
          </div>
          <div className="studio-hero-bottom"><span>ONE PERSON TO TALK TO. END-TO-END EXECUTION.</span><span>SCROLL TO EXPLORE ↓</span></div>
        </section>

        <section className="studio-services" id="process">
          <div className="studio-container">
            <div className="studio-section-label"><span>01 / THE PROCESS</span><span>THREE STEPS. ONE PARTNER.</span></div>
            <div className="studio-services-heading"><h2>Everything it takes<br/>to <em>ship.</em></h2><p>Not just mockups. Not just code. I take your product from an idea to something real people can use.</p></div>
            <div className="studio-service-grid">
              <article><span className="studio-service-number">01 /</span><PenTool size={31} strokeWidth={1.5}/><h3>Design</h3><p>Product thinking, user flows, clean interfaces, and a clear plan before building.</p></article>
              <article><span className="studio-service-number">02 /</span><Code2 size={31} strokeWidth={1.5}/><h3>Develop</h3><p>Web applications, customer portals, dashboards, integrations, and backend systems.</p></article>
              <article><span className="studio-service-number">03 /</span><Rocket size={31} strokeWidth={1.5}/><h3>Deploy</h3><p>From a local prototype to a live, usable product — with hosting and handoff handled.</p></article>
            </div>
          </div>
        </section>

        <section className="studio-about studio-container">
          <div className="studio-section-label"><span>02 / WHO YOU WORK WITH</span><span>PERSONAL BY DESIGN</span></div>
          <div className="studio-about-grid">
            <div><p className="studio-kicker">HI, I'M IAN.</p><h2>Your developer.<br/><em>Not your middleman.</em></h2></div>
            <div className="studio-about-detail"><p>I'm <strong>Ian Derbikov</strong>, a software engineer with experience building production systems at Ecwid / Lightspeed and end-to-end AI products.</p><p>Whether you're a founder testing an idea or a design studio that needs a dependable technical partner, you'll communicate directly with me. I handle the technical delivery and bring in trusted engineering support when the project needs it.</p><a href="/experience">More about my background <ArrowUpRight size={17}/></a></div>
          </div>
        </section>

        <section className="studio-final">
          <div className="studio-container studio-final-inner">
            <p className="studio-kicker">03 / LET'S MAKE IT REAL</p>
            <h2>Have an idea?<br/><span>Let's build it.</span></h2>
            <p>Email me what you have in mind. I'll reply personally and explore a small free MVP I can show you within 3 days.</p>
            <a className="studio-btn studio-btn-dark" href={contact}>Email Ian about my MVP <ArrowUpRight size={20}/></a>
            <a className="studio-email" href={`mailto:${email}`}>{email}</a>
            <small>Free offer applies to a focused prototype, with scope confirmed by email.</small>
          </div>
        </section>
      </main>
      <footer className="studio-footer studio-container">
        <a className="studio-mark" href="/">D<span className="studio-mark-dot">.</span></a>
        <p>© {new Date().getFullYear()} Ian Derbikov. Design / Develop / Deploy.</p>
        <div><a href="/experience">Experience</a><a href="https://github.com/yanisderbikov" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17}/></a><a href="https://www.linkedin.com/in/yanderbikov/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a></div>
      </footer>
    </div>
  )
}

const isExperience = /^\/experience\/?$/.test(window.location.pathname)
document.title = isExperience ? 'Experience — Ian Derbikov' : 'Ian Derbikov — Design. Develop. Deploy.'
document.querySelector('meta[name="description"]')?.setAttribute('content', isExperience ? 'Experience, projects, and engineering background of Ian Derbikov.' : 'Design. Develop. Deploy. Custom software built directly with Ian Derbikov. Email your idea for a free MVP prototype in 3 days.')
createRoot(document.getElementById('root')).render(
  <React.StrictMode>{isExperience ? <ExperiencePage /> : <StudioLanding />}</React.StrictMode>
)
