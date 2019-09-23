import React from 'react'
import Header from '../components/Header'
import FAB from '../components/FAB'
import ProjectCard from '../components/ProjectCard'
import Projects from '../projects.json'
import Modal from '../components/Modal'
import Resume from '../pictures/NicholasRyanWeberResume2019.pdf'
import * as Scroll from 'react-scroll'
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from 'react-scroll'

const HomePage = props => {
  return (
    <>
      <FAB />
      <main>
        <Header {...props} />
        <section className="row project-area teal darken-4" id="projects">
          <h2
            name="projects"
            className="center teal-text text-lighten-5 header-font"
          >
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
              <h5 className="white-text">Development</h5>
              <ul>
                <li className="white-text">C# / .NET Core</li>
                <li className="white-text">React / React-Hooks</li>
                <li className="white-text">APIs</li>
                <li className="white-text">SQL</li>
                <li className="white-text">Twilio</li>
                <li className="white-text">GitHub</li>
                <li className="white-text">Flexbox</li>
                <li className="white-text">HTML/CSS/JavaScript</li>
              </ul>
            </section>
            <section>
              <h5 className="white-text">Professional</h5>
              <ul>
                <li className="white-text">Automation</li>
                <li className="white-text">Analytics</li>
                <li className="white-text">Marketing</li>
                <li className="white-text">Account Management</li>
                <li className="white-text">Google App Scripts</li>
                <li className="white-text">SharpSpring</li>
                <li className="white-text">Film Production</li>
                <li className="white-text">Adobe Creative Suite</li>
              </ul>
            </section>
            <section>
              <h5 className="white-text">Personal</h5>
              <ul>
                <li className="white-text">Public Speaking</li>
                <li className="white-text">Sign Language</li>
                <li className="white-text">Zapier / IFTTT</li>
                <li className="white-text">Riding Motorcycles</li>
                <li className="white-text">Sign Spinning</li>
              </ul>
            </section>
          </section>
        </section>
        <section className="row teal contact-area">
          <h2 name="contact" className="center white-text header-font">
            Contact
          </h2>
          <section className="center contact-section">
            <p className="contact-group">
              <a
                className="orange darken-2 white-text btn-large contact-info-btn"
                target="_blank"
                href={Resume}
              >
                Resume
              </a>
              <a
                className="orange darken-2 white-text btn-large contact-info-btn"
                target="_blank"
                href="https://www.linkedin.com/in/nicholasryanweber/"
              >
                LinkedIn
              </a>
              <a
                className="orange darken-2 white-text btn-large contact-info-btn"
                target="_blank"
                href="https://github.com/NickRyanWeber"
              >
                GitHub
              </a>
              <a
                className="orange darken-2 white-text btn-large contact-info-btn"
                target="_blank"
                href="slack://user?team=T03QUJQ7L&id=ULB53KU7R"
              >
                Slack
              </a>
            </p>
            <a
              href="mailto:nicholasryanweber@gmail.com"
              target="_blank"
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
