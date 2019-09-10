import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = props => {
  return (
    <>
      <section className="col s12 m6">
        <div className="card teal lighten-5 z-depth-3">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={props.data.imgLink} />
          </div>
          <div className="card-content">
            <span className="card-title activator teal-text text-darken-4">
              {props.data.name}
            </span>
          </div>
          <div className="card-reveal">
            <i class="material-icons right card-title">close</i>
            <p className="card-title grey-text text-darken-4">
              {props.data.name}
            </p>
            <p>{props.data.description}</p>
            <p>
              <Link>Read More</Link> - <Link>Check it out</Link> -{' '}
              <Link>GitHub</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectCard
