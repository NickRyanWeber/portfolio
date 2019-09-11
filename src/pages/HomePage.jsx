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
      <header className="header-image z-depth-5">
        <Header {...props} />
        <section className="text-area container">
          <h3 className="white-text special-font">Nicholas Ryan Weber</h3>
          <p className="white-text">Full-Stack Developer</p>
          <br></br>
          <section className="white-text">
            <a href="" target="_blank" className="orange-text text-darken-4">
              GitHub
            </a>{' '}
            -{' '}
            <a href="" target="_blank" className="orange-text text-darken-4">
              LinkedIn
            </a>{' '}
            -{' '}
            <a href="" target="_blank" className="orange-text text-darken-4">
              Resume
            </a>
          </section>
        </section>
      </header>
      <main>
        <section className="row project-area teal darken-3">
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
        <section className="row teal contact-area">
          <h2 className="center teal-text text-lighten-5 header-font">
            Contact
          </h2>
        </section>
      </main>
    </>
  )
}

export default HomePage
