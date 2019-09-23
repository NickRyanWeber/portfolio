import React from 'react'
import { Link } from 'react-router-dom'
import Resume from '../pictures/NicholasRyanWeberResume2019.pdf'

const FAB = () => {
  return (
    <>
      <div className="fixed-action-btn">
        <a className="btn-floating btn-large orange darken-3">
          <i className="large material-icons white-text">link</i>
        </a>
        <ul className="fab-content">
          <li>
            <a
              className="btn-floating white"
              href="slack://user?team=T03QUJQ7L&id=ULB53KU7R"
              target="_blank"
            >
              <i className="fab fa-slack orange-text text-darken-3"></i>
            </a>
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
            <a className="btn-floating white" target="_blank" href={Resume}>
              <i className="far fa-address-card orange-text text-darken-3"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default FAB
