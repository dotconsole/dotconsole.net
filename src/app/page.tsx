import Image from "next/image";

const projects = [
  { name: "Casually Social", domain: "casuallysocial.com", label: "01 / SOCIAL", color: "rose", icon: "/products/casually-social.png", description: "A project built around connection. Explore Casually Social." },
  { name: "TractionForge", domain: "tractionforge.io", label: "02 / FOUNDER TOOLS", color: "lime", icon: "/products/tractionforge.svg", description: "An AI-powered toolkit helping founders turn outreach into momentum." },
  { name: "FeatureLogs", domain: "featurelogs.com", label: "03 / PRODUCT", color: "violet", icon: "/products/featurelogs.svg", description: "Discover FeatureLogs, part of our growing collection of digital products." },
  { name: "WordLine", domain: "wordline.dotconsole.net", label: "04 / COMING SOON", color: "blue", icon: "/products/wordline.svg", description: "Meet WordLine. Coming soon to wordline.dotconsole.net." },
];

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="shell nav">
        <a className="brand" href="#" aria-label="Dotconsole home"><span className="brand-icon">d.</span>dotconsole<span className="brand-dot">®</span></a>
        <nav aria-label="Main navigation"><a href="#portfolio">Our work</a><a href="#services">What we do</a><a className="contact-link" href="mailto:info@dotconsole.net">Let’s talk <span aria-hidden="true">↗</span></a></nav>
      </header>
      <main id="main">
        <section className="shell hero">
          <p className="eyebrow"><span className="status" /> INDEPENDENT DIGITAL STUDIO</p>
          <h1>Good ideas.<br />Great <span>execution.</span></h1>
          <div className="hero-bottom"><p>We design and build thoughtful digital products.<br />From the first spark to the next big thing.</p><a className="button" href="#portfolio">Explore our work <span aria-hidden="true">↘</span></a></div>
          <div className="hero-note"><span>STRATEGY. DESIGN. DEVELOPMENT.</span><span>BUILT WITH INTENTION.</span></div>
        </section>
        <section className="shell work" id="portfolio" aria-labelledby="work-title">
          <div className="section-heading"><div><p className="eyebrow">IDEAS OUT IN THE WORLD</p><h2 id="work-title">Selected work<span className="accent">.</span></h2></div><span className="muted">A few things we’ve been building ↙</span></div>
          <div className="projects">{projects.map(project => <a className="project" key={project.domain} href={`https://${project.domain}`} target="_blank" rel="noopener noreferrer"><div className={`project-art ${project.color}`}><span className="project-label">{project.label}</span><Image className="project-icon" src={project.icon} alt={`${project.name} icon`} width={112} height={112} /><span className="visit">{project.name === "WordLine" ? "Coming soon ↗" : "Visit project ↗"}</span></div><div className="project-title"><h3>{project.name}</h3><span aria-hidden="true">↗</span></div><p>{project.description}</p><span className="domain">{project.domain}</span></a>)}</div>
        </section>
        <section className="services" id="services"><div className="shell services-inner"><div><p className="eyebrow">SMALL TEAM. BIG PICTURE.</p><h2>Your idea.<br />Our next challenge.</h2><p className="service-intro">We bring design and engineering together to make useful things that feel effortless.</p></div><div className="service-list">{[["01", "Product & strategy", "A clear direction, a focused scope, and a plan to bring your idea to life."], ["02", "Design & experience", "Considered interfaces that put people first, on every screen."], ["03", "Development & delivery", "Fast, accessible web applications built to grow with your business."]].map(([number, title, text]) => <div className="service" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></div></section>
        <section className="shell contact" id="contact"><p className="eyebrow">LET’S MAKE SOMETHING MATTER</p><h2>Have a good idea?<br /><a href="mailto:info@dotconsole.net">Let’s build it. <span aria-hidden="true">↗</span></a></h2><a className="email" href="mailto:info@dotconsole.net">info@dotconsole.net</a></section>
      </main>
      <footer className="shell footer"><a className="brand" href="#">dotconsole.</a><span>© {new Date().getFullYear()} Dotconsole</span><a href="#main">Back to top ↑</a></footer>
    </>
  );
}
