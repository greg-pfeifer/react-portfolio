

import './Header.css'

import { Link } from 'react-scroll'
import pdf from '../resume.pdf'

export default function Header() {

  return (
    <section id="intro-section"className="intro-section">
      <header>
        <nav className='header-page-devicons'>
          <a
            className='devIcon'
            target="none"
            href="https://github.com/greg-pfeifer">
            <i className="devicon-github-original"
            />
          </a>
          <a
            className='devIcon'
            target="none"
            href="https://www.linkedin.com/in/greg-p-54590b15a">
            <i className="devicon-linkedin-plain"
            />
          </a>
        </nav>
        <nav className='header-page-nav'>
          <Link
            to='skills'
            smooth={true}
            className='hover-underline-animation'
          >About</Link>
          <Link
            to='portfolio'
            smooth={true}
            className='hover-underline-animation'
          >Portfolio</Link>
          <Link
            to='contact'
            smooth={true}
            className='hover-underline-animation'
          >Contact</Link>
        </nav>
      </header>
      <div>
        <article className="intro-article">
          <h1>Hi I'm Greg</h1>
          <p>A full-stack web developer</p>
          <button className="intro-button">
            <Link
              to='portfolio'
              smooth={true}
            >View Portfolio</Link>
          </button>
          <button className="intro-button">
            <a
              href={pdf}
              target='none'
            >View Resume</a>
          </button>
        </article>
      </div>
    </section>
  );
}
