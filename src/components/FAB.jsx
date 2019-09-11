import React from 'react'
import { Link } from 'react-router-dom'

const FAB = () => {
  return (
    <>
      <div className="fixed-action-btn">
        <a className="btn-floating btn-large orange darken-3">
          <i className="large material-icons white-text">link</i>
        </a>
        <ul className="fab-content">
          <li>
            <Link className="btn-floating white" to="/about">
              <i className="fab fa-slack orange-text text-darken-3"></i>
            </Link>
          </li>
          <li>
            <a
              className="btn-floating white"
              href="https://github.com/NickRyanWeber"
              target="_blank"
            >
              <i className="fab fa-github orange-text text-darken-3"></i>
            </a>
          </li>
          <li>
            <a
              className="btn-floating white"
              href="https://www.linkedin.com/in/nicholasryanweber/"
              target="_blank"
            >
              <i className="fab fa-linkedin-in orange-text text-darken-3"></i>
            </a>
          </li>
          <li>
            <Link className="btn-floating white" to="/about">
              <i className="far fa-address-card orange-text text-darken-3"></i>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default FAB
