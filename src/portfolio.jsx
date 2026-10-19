import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Code2, MapPin, Menu, X } from 'lucide-react';

const roles = [
  {
    id: 'rubrik', company: 'Rubrik', mark: 'R', markClass: 'rubrik', role: 'Software Engineer',
    period: 'Nov 2024 — Sep 2026', place: 'Bengaluru, India', kind: 'Full-time',
    summary: 'Making enterprise workloads, private cloud clusters, and Rubrik Security Cloud work together at scale.',
    detail: [
      <>Connected multiple CDM clusters to a single Windows workload host through multi-cluster RBA support.</>,
      <>Unified metadata sync and change-data capture for Windows volume groups, syncing CockroachDB metadata with Rubrik Security Cloud’s MySQL database.</>,
      <>Enabled Hyper-V workload management over IPv6 for Meta.</>,
      <>Designed SCVMM-to-Rubrik Security Cloud metadata integration that maps VM tags to automate SLA and hierarchy management for <strong>50,000+ VMs.</strong></>,
    ], tags: ['Go', 'Kubernetes', 'CockroachDB', 'MySQL', 'Hyper-V'],
  },
  {
    id: 'commvault-senior', company: 'Commvault', mark: 'C', markClass: 'commvault', role: 'Senior Software Engineer',
    period: 'May 2021 — Nov 2024', place: 'Bengaluru, India', kind: 'Full-time',
    summary: 'Worked across enterprise storage, backup services, and the tools customers use to manage them.',
    impact: '40%', impactText: 'fewer customer complaints after moving IntelliSnap from Java Swing into a React web app.',
    detail: [
      <>Managed production workloads for Fortune 500 customers including Nike and Shell, using Azure NetApp Files.</>,
      <>Built a Pure Storage FlashArray replication framework to distribute snapshots automatically across secondary sites.</>,
      <>Helped lead the IntelliSnap migration from Java Swing to React, improving the product experience and reducing customer complaints by 40%.</>,
      <>Developed OpenAPI-compliant REST APIs, designed a multi-tenant permissions model for on-premise storage, and provided Tier-3 customer support.</>,
    ], tags: ['Azure', 'React', 'Java', 'REST APIs', 'Storage'],
  },
  {
    id: 'commvault-intern', company: 'Commvault', mark: 'C', markClass: 'commvault', role: 'Software Engineering Intern',
    period: 'Nov 2020 — Apr 2021', place: 'Bengaluru, India', kind: 'Internship',
    summary: 'Created reporting tools that helped teams understand how customers used IntelliSnap.',
    detail: [
      <>Built SQL reports with Commvault’s reporting framework to analyze feature usage across <strong>50+ customer databases.</strong></>,
      <>Turned the results into clearer insights for customer utilization of IntelliSnap.</>,
    ], tags: ['SQL', 'Data analysis', 'Reporting'],
  },
  {
    id: 'apertus', company: 'Apertus', mark: 'A', markClass: 'apertus', role: 'Open Source Contributor · Google Summer of Code',
    period: 'Apr 2019 — Jul 2019', place: 'Remote', kind: 'Open source',
    summary: 'Contributed to OpenCine, building a bridge between raw12 video and everyday media players.',
    detail: [
      <>Designed a C++ utility that converts <code>.raw12</code> files to <code>.avi</code>, restructuring the internal file architecture along the way.</>,
      <>Integrated the utility into OpenCine so raw12 footage could be processed and frameserved to players such as VLC.</>,
    ], tags: ['C++', 'OpenCine', 'Image processing', 'Open source'],
  },
];

const skillGroups = [
  { label: 'Languages', items: ['Go', 'C / C++', 'Python'] },
  { label: 'Cloud & infrastructure', items: ['Azure', 'Docker', 'Kubernetes', 'CI/CD'] },
  { label: 'Data & tooling', items: ['SQL Server', 'MongoDB', 'Git', 'Swagger', 'CMake'] },
  { label: 'Testing', items: ['Jest', 'Unit testing', 'Functional testing'] },
];

function App() {
  const [active, setActive] = useState(roles[0].id);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const assetBase = import.meta.env.BASE_URL + 'assets/';

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const cards = roles.map(({ id }) => document.getElementById(id)).filter(Boolean);
        if (!cards.length) return;
        const marker = window.innerHeight * 0.44;
        let currentIndex = 0;
        cards.forEach((card, index) => {
          if (card.getBoundingClientRect().top <= marker) currentIndex = index;
        });
        setActive(roles[currentIndex].id);
        const first = cards[0].getBoundingClientRect().top + window.scrollY;
        const last = cards[cards.length - 1].getBoundingClientRect().top + window.scrollY;
        const walked = Math.max(0, window.scrollY + marker - first);
        setProgress(Math.max(0, Math.min(100, Math.round(walked / Math.max(last - first, 1) * 100))));
      });
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return <>
    <div className="ambient-glow" aria-hidden="true" />
    <header className="header">
      <a className="brand" href="#home" aria-label="Devender Singh, home"><span className="brand-icon">d<span>.</span></span><span className="brand-divider" /><span className="brand-name">Devender Singh</span></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
      <nav className={'navigation ' + (menuOpen ? 'navigation-open' : '')} aria-label="Main navigation">
        <a href="#experience" onClick={closeMenu}>Experience</a><a href="#about" onClick={closeMenu}>About</a>
        <a className="nav-contact" href="mailto:shaktawatdevendra17@gmail.com" onClick={closeMenu}>Get in touch <ArrowUpRight size={15} /></a>
      </nav>
    </header>

    <main id="home" className="page-shell">
      <aside className="profile">
        <div className="portrait-wrap"><img className="portrait" src={assetBase + 'portrait-placeholder.svg'} alt="Initials DS; portrait to be added" /><span className="portrait-online" title="Open to a conversation"><span /></span></div>
        <p className="profile-kicker"><span className="availability-dot" /> SOFTWARE ENGINEER</p>
        <h1>Devender<br /><span>Singh.</span></h1>
        <p className="profile-intro">I build the systems behind the things people rely on.</p>
        <div className="profile-location"><MapPin size={15} strokeWidth={1.7} /> Bengaluru, India</div>
        <div className="profile-divider" />
        <div className="profile-links">
          <a href="https://github.com/Devender1703" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a>
          <a href="https://www.linkedin.com/in/devender-singh-b14087161/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15} /></a>
          <a href="mailto:shaktawatdevendra17@gmail.com">Email <ArrowUpRight size={15} /></a>
        </div>
        <div className="resume-wrap"><a className="resume-link" href={assetBase + 'Devender-Singh-Resume.pdf'} target="_blank" rel="noreferrer">Download résumé <ArrowUpRight size={15} /></a></div>
        <div className="profile-foot"><span><Code2 size={14} /> Backend · Cloud · Data</span><span>01—26</span></div>
      </aside>

      <div className="content">
        <section id="experience" className="experience-section">
          <div className="section-kicker"><span className="section-index">01</span><span>MY CAREER SO FAR</span><span className="kicker-line" /><span className="section-count">04 ROLES</span></div>
          <div className="heading-row"><div><h2>Building systems.<br /><span>Growing along the way.</span></h2><p className="section-intro">A path through enterprise software, cloud infrastructure, and open source.</p></div><a className="heading-scroll" href="#rubrik" aria-label="Scroll to latest experience"><ArrowDownRight size={20} /></a></div>
          <div className="journey-progress">
            <div className="journey-progress-label"><span>CAREER TIMELINE</span><span>{String(roles.findIndex((item) => item.id === active) + 1).padStart(2, '0')} <span className="slash">/</span> 04 <span className="progress-percent">{progress}%</span></span></div>
            <div className="journey-progress-track" role="progressbar" aria-label="Career timeline progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow={progress}><span style={{ width: progress + '%' }} /></div>
          </div>
          <div className="timeline"><span className="timeline-spine" aria-hidden="true" /><span className="timeline-progress-spine" aria-hidden="true" style={{ height: progress + '%' }} />
            {roles.map((item, index) => <article id={item.id} key={item.id} className={'experience-card ' + (active === item.id ? 'experience-active ' : '') + (index === 0 ? 'experience-current' : '')}>
              <span className="timeline-marker" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <div className="experience-panel">
                <div className="card-header"><div className="company-lockup"><span className={'company-mark ' + item.markClass}>{item.mark}</span><span className="company-meta"><span className="company-name">{item.company}</span><span className="experience-kind">{item.kind}</span></span></div><span className="role-period">{item.period}</span></div>
                <div className="role-title-row"><h3>{item.role}</h3>{index === 0 && <span className="current-badge"><span /> LATEST</span>}</div>
                <p className="role-summary">{item.summary}</p>
                {item.impact && <div className="impact"><span className="impact-number">{item.impact}</span><span>{item.impactText}</span></div>}
                <details className="role-details" open={index === 0}>
                  <summary>{index === 0 ? 'What I worked on' : 'More about this role'} <ArrowRight size={15} /></summary>
                  <ul>{item.detail.map((point, i) => <li key={i}>{point}</li>)}</ul>
                  <div className="tag-list">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </details>
                <div className="card-bottom"><span><MapPin size={13} /> {item.place}</span><span>{String(index + 1).padStart(2, '0')} <span className="slash">/</span> 04</span></div>
              </div>
            </article>)}
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="section-kicker"><span className="section-index">02</span><span>A LITTLE ABOUT ME</span><span className="kicker-line" /></div>
          <div className="about-grid"><div><h2>Good work starts<br /><span>with good questions.</span></h2><p className="about-copy">I’m a software engineer with 4+ years of experience across backend development, DevOps, and microservices. I like the hard problems that sit between infrastructure and the people who depend on it.</p><p className="education"><span className="education-icon">AIT</span><span><strong>Army Institute of Technology</strong><small>B.E. Computer Science · Pune · 2017—2021</small></span></p></div>
            <div className="skills-panel"><p className="skills-heading">TOOLS I WORK WITH</p>{skillGroups.map((group) => <div className="skill-group" key={group.label}><h3>{group.label}</h3><div>{group.items.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}</div></div>)}</div>
          </div>
        </section>
        <section className="contact-section"><div><span className="contact-kicker">THE NEXT CHAPTER</span><h2>Have a good problem?<br /><span>I’d like to hear about it.</span></h2></div><a href="mailto:shaktawatdevendra17@gmail.com" className="contact-button">Let’s talk <ArrowUpRight size={17} /></a></section>
        <footer className="footer"><a className="brand footer-brand" href="#home"><span className="brand-icon">d<span>.</span></span></a><span>Designed & built with care.</span><a href="#home">BACK TO TOP <ArrowUpRight size={13} /></a></footer>
      </div>
    </main>
  </>;
}

export default App;
