import React from 'react'

const Project = props => {
  console.log(props)

  return (
    <main className="container">
      <h1 className="center teal-text text-lighten-5 header-font">
        {props.project.name}
      </h1>
      <p className="teal-text text-lighten-5">{props.project.description}</p>
      <br></br>
      <section className="center project-buttons">
        <button className="btn">GitHub</button>
        <button className="btn">Check it out!</button>
      </section>
      <br></br>
      <div className="video-container">
        <iframe
          src={props.project.youtubeLink}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <br></br>
    </main>
  )
}

export default Project
