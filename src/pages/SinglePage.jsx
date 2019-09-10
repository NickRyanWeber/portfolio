import React, { useEffect } from 'react'
import M from 'materialize-css'
// import Header from '../components/Header'
// import FAB from '../components/FAB'
// import Projects from '../projects.json'

const SinglePage = props => {
  useEffect(() => {
    M.Carousel.init(document.querySelectorAll('.carousel'), {
      indicators: true,
      numVisible: 3
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
      <main className="container row">
        <h2 className="center teal-text text-lighten-5 header-font">
          Projects
        </h2>
        <div className="carousel">
          <a className="carousel-item" href="#one!">
            <div className="card medium blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">Card Title</span>
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
              </div>
            </div>
          </a>
          <a className="carousel-item" href="#two!">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">Card Title</span>
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
              </div>
            </div>{' '}
          </a>
          <a className="carousel-item" href="#three!">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">Card Title</span>
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
              </div>
            </div>
          </a>
          <a className="carousel-item" href="#four!">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">Card Title</span>
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
              </div>
            </div>{' '}
          </a>
          <a className="carousel-item" href="#five!">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">Card Title</span>
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
              </div>
            </div>{' '}
          </a>
        </div>
      </main>
    </>
  )
}

export default SinglePage
