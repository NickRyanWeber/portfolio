import React from 'react'
import Header from '../components/Header'
import FAB from '../components/FAB'

const About = props => {
  return (
    <>
      <Header {...props} />
      <FAB />
      <main className="container">
        <h1 className="teal-text text-lighten-5 header-font center">Contact</h1>
      </main>
    </>
  )
}

export default About
