

import './Footer.css'
import { Link } from 'react-scroll'
import pdf from '../resume.pdf'

export default function Footer() {
  return (
    <footer className="footer-section">

      <div className='left-footer'>
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
      </div>

      <div className='right-footer'>
        <nav>
          <Link
            className='hover-underline-animation'
            to='intro-section'
            smooth={true}
          >Home</Link>
          <a
            className='hover-underline-animation'
            href={pdf}
            target='none'
          >Resume</a>
        </nav>
      </div>

    </footer>
  )
}