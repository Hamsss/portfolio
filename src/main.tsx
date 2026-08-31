import { createRoot } from 'react-dom/client';
import './style.css';

type Link = { label: string; href: string };

const research = [
  {
    date: '2026',
    kind: 'JOURNAL ARTICLE',
    title: 'TRAIL: Trajectory-Based Representation and Integration for Limiting Over-Smoothing',
    description: 'A trajectory-aware representation and integration method for retaining useful graph structure as models deepen.',
    links: [
      { label: 'Journal', href: 'https://www.doi.org/10.1007/s10994-026-07015-z' },
      { label: 'Code', href: 'https://github.com/Hamsss/TRAIL' },
    ],
  },
  {
    date: '2026',
    kind: 'CONFERENCE PAPER',
    title: 'TESLA: Taylor Expansion of Sinusoidal Learnable Activations',
    description: 'An investigation of expressive learnable activation functions for neural networks. Presented at AISTATS 2026.',
    links: [{ label: 'Preprint', href: 'https://arxiv.org/pdf/2608.11970' }],
  },
];

const systems = [
  {
    title: 'Won HANA',
    context: 'Financial Supervisory Service Governor’s Award · 2023',
    description: 'ESG hyper-personalization for mutual-growth finance: content understanding, financial recommendation, and safeguards against manipulated children’s images.',
    href: 'https://github.com/wonHANANA',
  },
  {
    title: 'University information chatbot',
    context: 'Industry-Academia R&D Grand Prize · 2023',
    description: 'A campus assistant built with ChatGPT and Llama, scheduled web crawling, multilingual preprocessing, and Chroma vector retrieval.',
    href: 'https://github.com/orgs/HangaPeople/repositories',
  },
  {
    title: 'Sreop community intelligence',
    context: 'Applied AI project · 2023',
    description: 'Comment moderation with BERT and apparel classification with YOLOv8 for a celebrity-item community service.',
    href: 'https://github.com/CELEBIT',
  },
];

function ExternalLink({ link }: { link: Link }) {
  return <a className="external-link" href={link.href} target="_blank" rel="noreferrer">{link.label}<span aria-hidden="true">↗</span></a>;
}

function App() {
  return (
    <main>
      <header className="site-header shell">
        <a className="monogram" href="#top" aria-label="Seunghyun Ham home">S<span>H</span></a>
        <nav aria-label="Main navigation"><a href="#research">Research</a><a href="#systems">Systems</a><a href="#profile">Profile</a></nav>
        <a className="contact-link" href="mailto:gka304@gmail.com">gka304@gmail.com</a>
      </header>

      <section id="top" className="hero shell">
        <p className="kicker">SEUNGHYUN HAM / AI RESEARCHER</p>
        <div className="hero-grid">
          <h1>Graph learning,<br /><i>carefully</i> pursued.</h1>
          <div className="hero-note">
            <span className="rule" />
            <p>I investigate how graph neural networks preserve information, represent structure, and become more reliable in the problems they are asked to solve.</p>
            <p className="hero-affiliation">Quantum Artificial Intelligence Laboratory<br />Korea Aerospace University</p>
          </div>
        </div>
        <div className="hero-footer"><span>SEOUL · REPUBLIC OF KOREA</span><span>FOCUS: GNN / REPRESENTATION / KNOWLEDGE GRAPHS</span></div>
      </section>

      <section className="statement"><div className="shell"><p>Researching the paths information takes — and the structure it must not lose.</p><a href="https://github.com/KAU-QuantumAILab" target="_blank" rel="noreferrer">Quantum AI Lab <span>↗</span></a></div></section>

      <section id="research" className="section shell">
        <div className="section-heading"><p className="kicker">01 / RESEARCH</p><h2>Selected publications</h2></div>
        <div className="research-list">
          {research.map((item) => <article className="research-item" key={item.title}>
            <div className="research-date"><span>{item.date}</span><small>{item.kind}</small></div>
            <div><h3>{item.title}</h3><p>{item.description}</p></div>
            <div className="link-stack">{item.links.map((link) => <ExternalLink key={link.label} link={link} />)}</div>
          </article>)}
        </div>
      </section>

      <section id="systems" className="section section-tint"><div className="shell">
        <div className="section-heading"><p className="kicker">02 / APPLIED SYSTEMS</p><h2>Research in practice</h2></div>
        <div className="system-grid">{systems.map((item, index) => <article className="system-card" key={item.title}>
          <span className="card-number">0{index + 1}</span><p className="card-context">{item.context}</p><h3>{item.title}</h3><p className="card-description">{item.description}</p><a href={item.href} target="_blank" rel="noreferrer">View project <span>→</span></a>
        </article>)}</div>
      </div></section>

      <section id="profile" className="section shell profile">
        <div className="section-heading"><p className="kicker">03 / PROFILE</p><h2>A deliberate change of direction</h2></div>
        <div className="profile-grid">
          <p className="profile-lead">A campus delivery robot first made me curious about how intelligent systems sense, decide, and adapt. That question redirected my studies toward software engineering and became the foundation of my research practice.</p>
          <div className="facts">
            <div><span>EDUCATION</span><p>M.S. in Artificial Intelligence<br />Korea Aerospace University<br /><small>2024–2026</small></p><p>B.S. in Software & Computer Engineering<br />Korea Aerospace University<br /><small>2022–2024</small></p></div>
            <div><span>MENTORING</span><p>Research mentor and teaching assistant<br /><small>Software & Computer Engineering, KAU · 2023–2025</small></p><p>Mentored capstone teams in AI programming and deep learning.</p></div>
          </div>
        </div>
        <div className="competencies"><span>METHODS & TOOLS</span><p>Python · PyTorch · PyG · TensorFlow · scikit-learn · Docker · R · C++</p></div>
      </section>

      <footer className="site-footer"><div className="shell"><p className="kicker">OPEN TO THOUGHTFUL COLLABORATION</p><a href="mailto:gka304@gmail.com">gka304@gmail.com <span>↗</span></a><div className="footer-line"><span>© 2026 SEUNGHYUN HAM</span><a href="https://github.com/Hamsss" target="_blank" rel="noreferrer">GitHub ↗</a></div></div></footer>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
