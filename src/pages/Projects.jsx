import React from 'react'
import Header from '../components/Header'
import FAB from '../components/FAB'
import ProjectsList from '../projects.json'
import ProjectCard from '../components/ProjectCard'

const Projects = props => {
  return (
    <>
      <FAB />
      <Header {...props} />
      <main className="container row">
        <h1 className="center teal-text text-lighten-5 header-font">
          Projects
        </h1>
        {ProjectsList.map((project, i) => {
          return <ProjectCard data={project} key={i} />
        })}
      </main>
    </>
  )
}

export default Projects
