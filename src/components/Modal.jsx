import React from 'react'

const Modal = props => {
  return (
    <>
      <div id={props.data.projId} className="modal modal-fixed-footer">
        <div className="modal-content">
          <h4>{props.data.name}</h4>
          <p>{props.data.description}</p>
          {props.data.youtubeLink ? (
            <div className="video-container">
              <iframe
                width="560"
                height="315"
                src={props.data.youtubeLink}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="modal-footer">
          {props.data.checkItOutLink ? (
            <a
              className="orange-text text-darken-4 btn-flat"
              target="_blank"
              href={props.data.checkItOutLink}
            >
              Demo
            </a>
          ) : (
            <a className="grey-text btn-flat">Demo</a>
          )}
          {props.data.gitHubLink ? (
            <a
              className="orange-text text-darken-4 btn-flat"
              target="_blank"
              href={props.data.gitHubLink}
            >
              GitHub
            </a>
          ) : (
            <a className="grey-text btn-flat">Github</a>
          )}
          <a className="orange-text text-darken-4 btn-flat modal-close">
            Close
          </a>
        </div>
      </div>
    </>
  )
}

export default Modal
