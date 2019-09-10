import React from 'react'
import ProjectsList from '../projects.json'
import Project from '../pages/Project.jsx'
import Header from './Header.jsx'

const ProjectFinder = props => {
  const projId = props.match.params.projId

  const project = ProjectsList.find(project => {
    return project.projId === projId
  })

  console.log({ project })

  return (
    <>
      <Header {...props} />
      {project ? <Project project={project} /> : <h1>404</h1>}
    </>
  )
}

export default ProjectFinder
// add if/else finding from JSON (iterate through) handbook => array helpers
// render project page if found
// render 404 if not
