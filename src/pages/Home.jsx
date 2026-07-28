import { Link } from 'react-router-dom'
import cvFile from '../assets/Rahmani_Houda_ENG.pdf';

export default function Home() {
  return (
    <section className="hero">
      <h1>Rahmani Houda</h1>

      <p>
        AI Engineer · Machine Learning Developer · NLP Enthusiast · Python Developer · C++ Developer · Frontend Developer
      </p>

      <p>
        I'm a fifth-year Artificial Intelligence Engineering student at the National Higher School of Artificial Intelligence (ENSIA) with a strong academic foundation (Baccalauréat score: 18.29). I develop intelligent systems ranging from machine learning and natural language processing to industrial AI applications and interactive software, with a focus on building practical solutions that solve real-world problems.
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
        <a
          className="badge"
          href="https://github.com/mayaishere2"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          className="badge"
          href="https://www.linkedin.com/in/houda-rahmani-258114298"
          target="_blank"
          rel="noreferrer"
        >
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