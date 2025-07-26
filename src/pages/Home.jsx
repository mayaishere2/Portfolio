import { Link } from 'react-router-dom'
import cvFile from '../assets/Rahmani_Houda_ENG.pdf';

export default function Home() {
  return (
    <section className="hero">
      <h1>Rahmani Houda</h1>
      <p>
        AI &amp; Data Engineering · Python Developer · C++ Developer · Game Developer · Frontend Developer
      </p>

      <p>
        I’m a fourth-year student at the National Higher School of Artificial Intelligence (ENSIA) with a strong academic background (Baccalauréat score: 18.29). I build AI applications for decision support, rigorous data analysis, and creative integrations in game development.
      </p>

      <div style={{ marginTop: '1.2rem' }}>
        <a
          className="cta"
          href={cvFile}
          download
        >
          Download CV
        </a>
      </div>


      <h2 className="section-title">Quick Links</h2>
      <div className="badge-list" style={{ justifyContent: 'center' }}>
        <a className="badge" href="https://github.com/mayaishere2" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a className="badge" href="https://www.linkedin.com/in/houda-rahmani-258114298" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <Link className="badge" to="/projects">
          Projects
        </Link>
        <Link className="badge" to="/about">
          About Me
        </Link>
      </div>
    </section>
  )
}
