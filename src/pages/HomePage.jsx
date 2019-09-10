import React from 'react'
import Header from '../components/Header'
import FAB from '../components/FAB'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import Projects from '../projects.json'

const HomePage = props => {
  return (
    <>
      <FAB />
      <header className="header-image z-depth-5">
        <Header {...props} />
        <section className="text-area container">
          <h3 className="white-text special-font">Nicholas Ryan Weber</h3>
          <p className="white-text">Full-Stack Developer</p>
        </section>
      </header>
      <main className="container row">
        <h2 className="center teal-text text-lighten-5 header-font">
          Projects
        </h2>
        {Projects.map((project, i) => {
          return <ProjectCard data={project} key={i} />
        })}
      </main>
    </>
  )
}

export default HomePage
