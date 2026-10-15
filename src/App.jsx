import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FiArrowUpRight, FiArrowRight, FiGithub, FiLinkedin, FiMenu, FiX, FiCode, FiLayers, FiDatabase, FiCpu } from 'react-icons/fi';
import { socialConfig as profile } from './data/socialConfig';
import { portfolioProjects } from './data/portfolioContent';

const capabilities = [
  { icon: FiCode, title: 'Full-stack development', text: 'Building business applications from the API to the interface, with practical, maintainable code.', tags: ['C# / ASP.NET Core', 'React', 'Blazor', 'Node.js'] },
  { icon: FiLayers, title: 'Architecture & delivery', text: 'Structuring application layers, modeling business workflows, and packaging services for consistent deployment.', tags: ['Clean Architecture', 'REST APIs', 'Docker', 'Git'] },
  { icon: FiDatabase, title: 'Data & analytics', text: 'Working with relational data, Python processing, and dashboards that make operational information easier to understand.', tags: ['Python', 'SQL', 'SQLite', 'Data analysis'] },
  { icon: FiCpu, title: 'Deep learning', text: 'Hands-on learning with TensorFlow: building neural networks, exploring CNNs, and understanding model training and evaluation.', tags: ['TensorFlow', 'Neural networks', 'CNNs', 'Model evaluation'] },
];
function ExternalLink({ href, children, className = '' }) {
  return <a href={href} className={className} target="_blank" rel="noopener noreferrer">{children}</a>;
}
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('All work');
  const location = useLocation();
  useEffect(() => {
    const section = { '/about': 'about', '/projects': 'projects', '/portfolio': 'projects', '/contact': 'contact' }[location.pathname];
    if (section) document.getElementById(section)?.scrollIntoView();
  }, [location.pathname]);
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><div className="container nav-inner">
      <a href="/#" className="wordmark" aria-label="Samuel home">samuel<span>.</span><small>SOFTWARE ENGINEER</small></a>
      <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <FiX /> : <FiMenu />}</button>
      <nav id="main-nav" className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
        {[['About', 'about'], ['Projects', 'projects'], ['Expertise', 'expertise'], ['Experience', 'experience']].map(([label, id]) => <a href={`#${id}`} key={id} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <a className="button button-small" href="#contact" onClick={() => setMenuOpen(false)}>Let’s talk <FiArrowUpRight /></a>
      </nav>
    </div></header>
    <main id="main">
      <section className="hero"><div className="container hero-grid"><div className="hero-copy">
        <div className="eyebrow"><span className="status-dot" /> ACCRA, GHANA · OPEN TO REMOTE ROLES</div>
        <h1>Hi, I’m Samuel.<br />I turn ideas into<br /><em>working software.</em></h1>
        <p className="hero-description">Full-stack software engineer building thoughtful web applications, reliable backends, and practical business systems. Exploring what’s possible with data and deep learning.</p>
        <div className="hero-actions"><a className="button" href="#projects">Explore my work <FiArrowRight /></a><ExternalLink className="text-link" href={profile.github}><FiGithub /> My GitHub <FiArrowUpRight /></ExternalLink></div>
        <div className="hero-footnote"><span>BUILDING WITH</span><p>C# / .NET <b>·</b> React <b>·</b> Docker <b>·</b> Python</p></div>
      </div><div className="portrait-wrap"><div className="portrait-frame"><img src="/Me.JPG" alt="Samuel Johnson Sokpoli" fetchPriority="high" /><span className="portrait-index">01 / THE PERSON BEHIND THE CODE</span></div><div className="portrait-note"><span className="note-mark">&lt;/&gt;</span><div>Built with purpose.<small>From a real problem to a working solution.</small></div></div></div></div></section>
      <section className="section" id="about"><div className="container about-grid"><div><div className="eyebrow">A LITTLE ABOUT ME</div><h2>Curious by nature.<br />An engineer <em>by practice.</em></h2></div><div className="about-copy"><p>I’m Samuel Johnson Sokpoli, a software engineer based in Accra, Ghana. I work across frontend development, backend systems, and deployment, with a particular interest in software that helps people manage complex everyday work.</p><p>My projects span school administration, church media automation, financial tracking, and desktop analytics. Alongside application development, I’m expanding my practice in data analysis and deep learning through Python and TensorFlow projects.</p><a className="text-link" href="#experience">More about my experience <FiArrowRight /></a></div></div></section>
      <section className="section projects-section" id="projects"><div className="container"><div className="section-heading"><div><div className="eyebrow">SELECTED PROJECTS</div><h2>Less talk.<br /><em>More working software.</em></h2></div><p>A look at the systems I build, the problems they address, and the tools behind them.</p></div>
        <div className="filters" role="group" aria-label="Filter projects">{['All work', 'Business systems', 'Web & desktop', 'Machine learning'].map(f => <button key={f} aria-pressed={filter === f} className={filter === f ? 'active' : ''} onClick={() => setFilter(f)}>{f}</button>)}</div>
        <div className="project-grid">{portfolioProjects.filter(p => filter === 'All work' || p.category === filter).map(project => <article className="project-card" key={project.id}>
          {project.image ? <div className="project-image"><img src={project.image} alt={project.alt} loading="lazy" /></div> : <div className="project-image neural-art" role="img" aria-label="Illustration of a neural network"><div className="network-layers">{[3, 5, 5, 2].map((n, i) => <div key={i}>{Array.from({ length: n }, (_, j) => <span key={j} />)}</div>)}</div><span>INPUT → LEARN → EVALUATE</span></div>}
          <div className="project-body"><div className="project-label">{project.label}</div><h3>{project.title}</h3><p>{project.description}</p><details><summary>Engineering focus <span>+</span></summary><p>{project.detail}</p></details><div className="tags">{project.tags.map(t => <span key={t}>{t}</span>)}</div><ExternalLink href={project.website || project.github} className="project-link">{project.linkLabel || 'Explore repository'} <FiArrowUpRight /></ExternalLink></div>
        </article>)}</div><div className="projects-footer"><p>More experiments, code, and work in progress.</p><ExternalLink className="text-link" href={profile.github}>Find me on GitHub <FiArrowUpRight /></ExternalLink></div>
      </div></section>
      <section className="section" id="expertise"><div className="container"><div className="section-heading"><div><div className="eyebrow">TECHNICAL TOOLKIT</div><h2>The tools matter.<br /><em>So does how you use them.</em></h2></div><p>Connecting interfaces, systems, and data to solve the problem at hand.</p></div><div className="capability-grid">{capabilities.map(({ icon: Icon, title, text, tags }, i) => <article className="capability" key={title}><div className="capability-top"><Icon /><span>0{i + 1}</span></div><h3>{title}</h3><p>{text}</p><div className="tags">{tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div></div></section>
      <section className="section experience-section" id="experience"><div className="container experience-grid"><div><div className="eyebrow">EXPERIENCE & GROWTH</div><h2>Learning deeply.<br /><em>Building practically.</em></h2><p className="experience-intro">A practice shaped by client projects, independent development, and continuous learning.</p></div><div className="experience-list">
        <article><span className="experience-type">CLIENT & INDEPENDENT PROJECTS</span><h3>Full-stack software development</h3><p>Building web applications and management systems across education, church media, and commerce. Working across React and Blazor interfaces, .NET APIs, relational databases, and Docker deployment.</p><a href="#projects" className="text-link">See selected projects <FiArrowUpRight /></a></article>
        <article><span className="experience-type">APPLICATION & DATA PROJECTS</span><h3>Desktop software & data analysis</h3><p>Combining Electron, React, Python, and SQLite to explore local data processing, offline application workflows, and analytical reporting.</p></article>
        <article><span className="experience-type">HANDS-ON LEARNING</span><h3>Deep learning & neural networks</h3><p>Developing a foundation in neural networks and convolutional neural networks (CNNs), building models with TensorFlow, and exploring how data preparation and evaluation affect model behavior.</p><ExternalLink href="https://github.com/Jayhubexp/Deep-Learning" className="text-link">Explore my learning work <FiArrowUpRight /></ExternalLink></article>
      </div></div></section>
      <section className="contact-section" id="contact"><div className="container contact-grid"><div><div className="eyebrow">LET’S BUILD SOMETHING USEFUL</div><h2>A good conversation<br />can start <em>something great.</em></h2><p>I’m open to software engineering roles and meaningful collaborations. Let’s talk about your team, your challenges, and where I can contribute.</p><a className="button" href={`mailto:${profile.email}`}>Get in touch <FiArrowUpRight /></a></div><div className="contact-details"><span>SAY HELLO</span><a href={`mailto:${profile.email}`}>{profile.email} <FiArrowUpRight /></a><span>ELSEWHERE</span><div><ExternalLink href={profile.github}><FiGithub /> GitHub <FiArrowUpRight /></ExternalLink><ExternalLink href={profile.linkedin}><FiLinkedin /> LinkedIn <FiArrowUpRight /></ExternalLink></div><p><span className="status-dot" /> Accra, Ghana · Open to remote opportunities</p></div></div></section>
    </main><footer className="container footer"><a className="wordmark" href="/#">samuel<span>.</span></a><p>© {new Date().getFullYear()} Samuel Johnson Sokpoli</p><a href="#main">Back to top ↑</a></footer>
  </>;
}
