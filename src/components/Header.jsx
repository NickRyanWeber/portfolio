import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import M from 'materialize-css'

const Header = props => {
  // const [url, setUrl] = useState(props)
  useEffect(() => {
    M.Sidenav.init(document.querySelectorAll('.sidenav'), { edge: 'right' })
    M.AutoInit()
  }, [])

  useEffect(() => {
    console.log({ props })
  }, [props])

  return (
    <>
      <header className="header-image ">
        <nav className="transparent z-depth-0">
          <div className="nav-wrapper container">
            <ul className="right">
              <li className="nav-item">
                <Link to="#projects" className="nav-link">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <section className="text-area container">
          <h3 className="white-text special-font">Nicholas Ryan Weber</h3>
          <p className="white-text">Full-Stack Developer</p>
          <br></br>
          <section className="white-text">
            <a
              href="https://github.com/NickRyanWeber"
              target="_blank"
              className="header-link"
            >
              GitHub
            </a>{' '}
            -{' '}
            <a
              href="https://www.linkedin.com/in/nicholasryanweber/"
              target="_blank"
              className="header-link"
            >
              LinkedIn
            </a>{' '}
            -{' '}
            <a href="" target="_blank" className="header-link">
              Resume
            </a>
          </section>
        </section>
      </header>
    </>
  )
}

export default Header
