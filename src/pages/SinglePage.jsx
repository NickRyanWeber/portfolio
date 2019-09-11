import React, { useEffect } from 'react'
import M from 'materialize-css'
// import Header from '../components/Header'
// import FAB from '../components/FAB'
// import Projects from '../projects.json'

const SinglePage = props => {
  useEffect(() => {
    M.Carousel.init(document.querySelectorAll('.carousel'), {
      fullWidth: true
    })
  }, [])

  return (
    <>
      {/* <FAB /> */}
      <header className="header-image z-depth-5">
        {/* <Header {...props} /> */}
        <section className="text-area container">
          <h3 className="white-text special-font">Nicholas Ryan Weber</h3>
          <p className="white-text">Full-Stack Developer</p>
        </section>
      </header>
      <h2 className="teal-text text-lighten-5 header-font center">Projects</h2>
      <section className="projects-area">
        <section className="shown-projects">
          <div className="nw-card">
            <div className="card sticky-action">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  src="https://source.unsplash.com/random/960x540"
                />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Card Title<i className="material-icons right">more_vert</i>
                </span>
                <p className="card-action">
                  <a href="#">This is a link</a>
                </p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Card Title<i className="material-icons right">close</i>
                </span>
                <p>
                  Here is some more information about this product that is only
                  revealed once clicked on.
                </p>
              </div>
            </div>
          </div>
          <div className="nw-card">
            <div className="card sticky-action">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  src="https://source.unsplash.com/random/960x540"
                />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Card Title<i className="material-icons right">more_vert</i>
                </span>
                <p className="card-action">
                  <a href="#">This is a link</a>
                </p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Card Title<i className="material-icons right">close</i>
                </span>
                <p>
                  Here is some more information about this product that is only
                  revealed once clicked on.
                </p>
              </div>
            </div>
          </div>
          <div className="nw-card">
            <div className="card sticky-action">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  src="https://source.unsplash.com/random/960x540"
                />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Card Title<i className="material-icons right">more_vert</i>
                </span>
                <p className="card-action">
                  <a href="#">This is a link</a>
                </p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Card Title<i className="material-icons right">close</i>
                </span>
                <p>
                  Here is some more information about this product that is only
                  revealed once clicked on.
                </p>
              </div>
            </div>
          </div>
          <div className="nw-card">
            <div className="card sticky-action">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  src="https://source.unsplash.com/random/960x540"
                />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Card Title<i className="material-icons right">more_vert</i>
                </span>
                <p className="card-action">
                  <a href="#">This is a link</a>
                </p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Card Title<i className="material-icons right">close</i>
                </span>
                <p>
                  Here is some more information about this product that is only
                  revealed once clicked on.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default SinglePage
