import { createRoot } from 'react-dom/client';
import './style.css';

const papers = [
  {
    year: '2026',
    venue: 'MACHINE LEARNING',
    title: 'TRAIL: Trajectory-Based Representation and Integration for Limiting Over-Smoothing',
    copy: 'A trajectory-aware graph representation method for preserving useful structural information as graph models deepen.',
    links: [['Paper', 'https://www.doi.org/10.1007/s10994-026-07015-z'], ['Code', 'https://github.com/Hamsss/TRAIL']],
  },
  {
    year: '2026',
    venue: 'AISTATS',
    title: 'TESLA: Taylor Expansion of Sinusoidal Learnable Activations',
    copy: 'Research on learnable sinusoidal activations for more expressive neural networks.',
    links: [['Preprint', 'https://arxiv.org/pdf/2608.11970']],
  },
];

const projects = [
  { number: '01', title: 'Won HANA', label: 'FSS Governor’s Grand Prize · 2023', copy: 'ESG hyper-personalization for financial services, combining content understanding, recommendation, and safeguards against manipulated children’s images.', href: 'https://github.com/wonHANANA' },
  { number: '02', title: 'University chatbot', label: 'Industry-Academia Grand Prize · 2023', copy: 'A retrieval-augmented campus assistant built with ChatGPT, Llama, scheduled web crawling, multilingual preprocessing, and ChromaDB.', href: 'https://github.com/orgs/HangaPeople/repositories' },
  { number: '03', title: 'Vision systems', label: 'Applied AI · 2022–2024', copy: 'Thermal surveillance with YOLOv5/YOLOv7 and image-based bird recognition and description assistance.', href: 'https://github.com/CELEBIT' },
  { number: '04', title: 'Sreop intelligence', label: 'Community AI · 2023', copy: 'BERT moderation and YOLOv8 apparel classification for a celebrity-item information community.', href: 'https://github.com/CELEBIT' },
];

function Link({ label, href }: { label: string; href: string }) {
  return <a href={href} target="_blank" rel="noreferrer">{label} <span>↗</span></a>;
}

function App() {
  return <main>
    <a className="skip-link" href="#research">Skip to research</a>
    <header className="header shell">
      <a href="#top" className="wordmark">SEUNGHYUN <b>HAM</b></a>
      <nav aria-label="Primary"><a href="#research">Research</a><a href="#projects">Projects</a><a href="#profile">Profile</a></nav>
      <a className="mail" href="mailto:sh9109@nyu.edu">sh9109@nyu.edu</a>
    </header>

    <section id="top" className="hero shell">
      <div className="hero-top"><p>AI RESEARCHER / DATA SCIENCE</p><p>NEW YORK · SEOUL</p></div>
      <div className="hero-main">
        <h1>Structured thinking<br />for <em>connected</em> data.</h1>
        <div className="hero-copy"><span className="lime-dot" /><p>I trace the relationships in data, then turn them into useful, efficient models.</p><small>Incoming M.S. in Data Science<br />New York University · 2026–2028</small></div>
      </div>
      <div className="topic-bar"><span>GRAPH NEURAL NETWORKS</span><span>GRAPHRAG</span><span>KNOWLEDGE GRAPHS</span><span>DATA EMBEDDING</span></div>
    </section>

    <section className="manifesto"><div className="shell"><span>FIELD NOTE / 01</span><p>Better models do not only learn patterns. They retain the relations that give those patterns meaning.</p><a href="https://github.com/KAU-QuantumAILab" target="_blank" rel="noreferrer">Quantum AI Lab ↗</a></div></section>

    <section id="research" className="section shell">
      <div className="section-title"><p>01 / RESEARCH</p><h2>Published work</h2><span>Graph learning, neural representation, and effective information propagation.</span></div>
      <div className="paper-list">{papers.map((paper) => <article className="paper" key={paper.title}>
        <div className="paper-meta"><b>{paper.year}</b><span>{paper.venue}</span></div><div><h3>{paper.title}</h3><p>{paper.copy}</p></div><div className="paper-links">{paper.links.map(([label, href]) => <Link key={label} label={label} href={href} />)}</div>
      </article>)}</div>
    </section>

    <section id="projects" className="section project-section"><div className="shell">
      <div className="section-title"><p>02 / PROJECTS</p><h2>Applied systems</h2><span>Research translated into practical, user-facing AI.</span></div>
      <div className="project-grid">{projects.map((project) => <article className="project" key={project.title}>
        <div className="project-head"><b>{project.number}</b><span>{project.label}</span></div><h3>{project.title}</h3><p>{project.copy}</p><Link label="View project" href={project.href} />
      </article>)}</div>
    </div></section>

    <section id="profile" className="section shell profile">
      <div className="section-title"><p>03 / PROFILE</p><h2>Training & practice</h2></div>
      <div className="profile-grid">
        <div className="direction-card"><span>RESEARCH DIRECTION</span><h3>Data relationships<br /><em>→ applied models.</em></h3><p>I uncover the structure that shapes data, then select or design the most effective model for the problem — language, graph, vision, or otherwise.</p></div>
        <div className="credentials">
          <div><span>EDUCATION</span><p><strong>M.S. Data Science</strong><br />New York University<br /><small>2026–2028 · Expected</small></p><p><strong>M.S. Artificial Intelligence</strong><br />Korea Aerospace University<br /><small>2024–2026</small></p><p><strong>B.S. Software & Computer Engineering</strong><br />Korea Aerospace University<br /><small>2022–2024</small></p></div>
          <div><span>MENTORING & SERVICE</span><p><strong>Research mentor & teaching assistant</strong><br /><small>Korea Aerospace University · 2023–2025</small></p><p>Mentored capstone teams and supported AI programming and deep-learning courses.</p><p><strong>Republic of Korea Army Sergeant</strong><br /><small>Honorable discharge · 2017–2019</small></p></div>
        </div>
      </div>
      <div className="toolkit"><span>TOOLKIT</span><p>Python · PyTorch · PyG · TensorFlow · scikit-learn · Docker · NumPy · Pandas · R · C++</p><span>Korean / English / Chinese</span></div>
    </section>

    <footer><div className="shell"><p>AVAILABLE FOR RESEARCH CONVERSATIONS</p><a href="mailto:sh9109@nyu.edu">sh9109@nyu.edu <span>↗</span></a><div><span>© 2026 SEUNGHYUN HAM</span><a href="https://github.com/Hamsss" target="_blank" rel="noreferrer">GitHub ↗</a></div></div></footer>
  </main>;
}

createRoot(document.getElementById('root')!).render(<App />);
