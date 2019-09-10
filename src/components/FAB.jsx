import React from 'react'
import { Link } from 'react-router-dom'

const FAB = () => {
  return (
    <>
      <div className="fixed-action-btn">
        <a className="btn-floating btn-large orange darken-3">
          <i className="large material-icons white-text">link</i>
        </a>
        <ul>
          <li>
            <a
              className="btn-floating orange darken-3"
              href="https://github.com/NickRyanWeber"
              target="_blank"
            >
              <i class="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
              className="btn-floating orange darken-3"
              href="https://www.linkedin.com/in/nicholasryanweber/"
              target="_blank"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <Link className="btn-floating orange darken-3" to="/about">
              <i class="far fa-address-card"></i>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default FAB
