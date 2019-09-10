import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import M from 'materialize-css'

const Header = () => {
  useEffect(() => {
    M.Sidenav.init(document.querySelectorAll('.sidenav'), { edge: 'right' })
    M.AutoInit()
  }, [])
  return (
    <>
      <nav className="transparent z-depth-0">
        <div className="nav-wrapper container">
          <a
            href="#"
            data-target="mobile-demo"
            className="sidenav-trigger right"
          >
            <i className="material-icons white-text">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li className="nav-item">
              <Link to="/" className="orange-text text-darken-3">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="white-text">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <a
                href="https://github.com/NickRyanWeber"
                target="_blank"
                className="white-text"
              >
                GitHub
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://www.linkedin.com/in/nicholasryanweber/"
                target="_blank"
                className="white-text"
              >
                LinkedIn
              </a>
            </li>
            <li className="nav-item">
              <Link to="/about" className="white-text">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul
        className="sidenav teal lighten-5 teal-text text-darken-4 no-autoinit"
        id="mobile-demo"
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="https://github.com/NickRyanWeber">GitHub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/nicholasryanweber/">LinkedIn</a>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </>
  )
}

export default Header
