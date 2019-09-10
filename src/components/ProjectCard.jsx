import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = props => {
  return (
    <>
      <section className="col s12 m6">
        <div className="card teal lighten-5 z-depth-3 hoverable">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={props.data.imgLink} alt="" />
          </div>
          <div className="card-content">
            <span className="card-title activator teal-text text-darken-4">
              {props.data.name}
            </span>
          </div>
          <div className="card-reveal teal lighten-5">
            <i className="material-icons right card-title teal-text text-darken-4">
              close
            </i>
            <p className="card-title teal-text text-darken-4">
              {props.data.name}
            </p>
            <p className="teal-text text-darken-4">{props.data.description}</p>
            <p className="center">
              <Link
                className="orange-text text-darken-4"
                target="_blank"
                to={props.data.readMoreLink}
              >
                Read More
              </Link>{' '}
              -{' '}
              <a
                className="orange-text text-darken-4"
                target="_blank"
                href={props.data.checkItOutLink}
              >
                Check it out
              </a>{' '}
              -{' '}
              <a
                className="orange-text text-darken-4"
                target="_blank"
                href={props.data.gitHubLink}
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectCard
