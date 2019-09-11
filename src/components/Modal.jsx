import React from 'react'

const Modal = props => {
  return (
    <>
      {/* <!-- Modal Structure --> */}
      <div id={props.data.projId} className="modal">
        <div className="modal-content">
          <h4>{props.data.name}</h4>
          <p>{props.data.description}</p>
        </div>
        <div className="modal-footer">
          <a
            className="orange-text text-darken-4"
            target="_blank"
            href={props.data.checkItOutLink}
          >
            Link
          </a>
          {' - '}
          <a
            className="orange-text text-darken-4"
            target="_blank"
            href={props.data.gitHubLink}
          >
            GitHub
          </a>
        </div>
      </div>
    </>
  )
}

export default Modal
