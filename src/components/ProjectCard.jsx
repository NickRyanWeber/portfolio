import React from 'react'
import AnalyticsAutomation from '../pictures/AnalyticsAutomation.jpg'
import GoogleAnalyticsFilterTool from '../pictures/GoogleAnalyticsFilterTool.jpg'
import SDGOverflow from '../pictures/SDGOverflow.jpg'
import TimeSheet from '../pictures/TimeSheet.jpg'
import WarSingleArray from '../pictures/WarSingleArray.jpg'
import Zydeco from '../pictures/Zydeco.jpg'

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
          <div className="card-action card-links">
            <a
              className="orange-text text-darken-4"
              href={`#${props.data.projId}`}
            >
              Read More
            </a>
            {props.data.checkItOutLink ? (
              <a
                className="orange-text text-darken-4"
                target="_blank"
                href={props.data.checkItOutLink}
              >
                DEMO
              </a>
            ) : (
              <a className="grey-text">DEMO</a>
            )}
            {props.data.gitHubLink ? (
              <a
                className="orange-text text-darken-4"
                target="_blank"
                href={props.data.gitHubLink}
              >
                GitHub
              </a>
            ) : (
              <a className="grey-text">Github</a>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectCard
