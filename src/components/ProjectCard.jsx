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
              className="orange-text text-darken-4 modal-trigger"
              href={`#${props.data.projId}`}
            >
              <i className="fas fa-info-circle"></i>
            </a>
            <a
              className="orange-text text-darken-4"
              target="_blank"
              href={props.data.checkItOutLink}
            >
              <i className="fas fa-external-link-alt"></i>
            </a>
            <a
              className="orange-text text-darken-4"
              target="_blank"
              href={props.data.gitHubLink}
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectCard
