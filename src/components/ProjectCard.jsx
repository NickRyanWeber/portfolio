import React from 'react'

const ProjectCard = props => {
  return (
    <>
      <section className="col s12 m6 l4 card-container">
        <div className="card teal lighten-5 z-depth-2 hoverable sticky-action">
          <a href={`#${props.data.projId}`} className="modal-trigger">
            <div className="card-image waves-effect waves-block waves-light">
              <img src={props.data.imgLink} alt="" />
            </div>
            <div className="card-content">
              <p className="teal-text text-darken-4">{props.data.name}</p>
            </div>
          </a>
          <div className="card-action card-links center">
            <a
              className="orange-text text-darken-4"
              target="_blank"
              href={props.data.checkItOutLink}
            >
              DEMO
            </a>
            <a
              className="orange-text text-darken-4"
              target="_blank"
              href={props.data.gitHubLink}
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectCard
