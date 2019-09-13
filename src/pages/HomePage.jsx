import React from 'react'
import Header from '../components/Header'
import FAB from '../components/FAB'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import Projects from '../projects.json'
import Modal from '../components/Modal'

const HomePage = props => {
  return (
    <>
      <FAB />
      <main>
        <Header {...props} />
        <section className="row project-area teal darken-4" id="projects">
          <h2 className="center teal-text text-lighten-5 header-font">
            Projects
          </h2>
          {Projects.map((project, i) => {
            return <ProjectCard data={project} key={i} />
          })}
          {Projects.map((project, i) => {
            return <Modal data={project} key={i} />
          })}
        </section>
        <section className="teal darken-2 skills-area">
          <h2 className="center white-text header-font">Skills</h2>
          <section className="skills-section">
            <section>
              <h5 className="white-text">Skill Set 1</h5>
              <ul>
                <li className="white-text">Skill 1</li>
                <li className="white-text">Skill 2</li>
                <li className="white-text">Skill 3</li>
              </ul>
            </section>
            <section>
              <h5 className="white-text">Skill Set 2</h5>
              <ul>
                <li className="white-text">Skill 1</li>
                <li className="white-text">Skill 2</li>
                <li className="white-text">Skill 3</li>
              </ul>
            </section>
            <section>
              <h5 className="white-text">Skill Set 3</h5>
              <ul>
                <li className="white-text">Skill 1</li>
                <li className="white-text">Skill 2</li>
                <li className="white-text">Skill 3</li>
              </ul>
            </section>
          </section>
        </section>
        <section className="row teal contact-area">
          <h2 className="center white-text header-font">Contact</h2>
          <section className="center contact-section">
            <p className="contact-group">
              <a
                className="orange darken-2 white-text contact-info btn-large"
                href="#"
              >
                Resume
              </a>
              <a
                className="orange darken-2 white-text contact-info btn-large"
                href="https://www.linkedin.com/in/nicholasryanweber/"
              >
                LinkedIn
              </a>
              <a
                className="orange darken-2 white-text contact-info btn-large"
                href="https://github.com/NickRyanWeber"
              >
                GitHub
              </a>
              <a
                className="orange darken-2 white-text contact-info btn-large"
                href="slack://user?team=T03QUJQ7L&id=ULB53KU7R"
              >
                Slack
              </a>
            </p>
            <a
              href="mailto:nicholasryanweber@gmail.com"
              className="white-text contact-info contact-email"
            >
              NicholasRyanWeber@gmail.com
            </a>
          </section>
        </section>
      </main>
    </>
  )
}

export default HomePage
