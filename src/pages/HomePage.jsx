import React from 'react'
import Header from '../components/Header'
import FAB from '../components/FAB'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'

const HomePage = () => {
  const projects = [
    {
      name: 'Capstone Project',
      description:
        'The card game "War", built in React using only a single array to both visualize player and computer hands, as well as handle game logic.',
      imgLink: 'https://source.unsplash.com/random/1920x1080',
      readMoreLink: '',
      gitHubLink: '',
      checkItOutLink: ''
    },
    {
      name: 'War in a Single Array',
      description:
        'The card game "War", built in React using only a single array to both visualize player and computer hands, as well as handle game logic.',
      imgLink: 'https://source.unsplash.com/random/1920x1080',
      readMoreLink: '',
      gitHubLink: '',
      checkItOutLink: ''
    },
    {
      name: 'Stack-Overflow Clone',
      description:
        'The card game "War", built in React using only a single array to both visualize player and computer hands, as well as handle game logic.',
      imgLink: 'https://source.unsplash.com/random/1920x1080',
      readMoreLink: '',
      gitHubLink: '',
      checkItOutLink: ''
    },
    {
      name: 'Daily Analytics Automation',
      description:
        'The card game "War", built in React using only a single array to both visualize player and computer hands, as well as handle game logic.',
      imgLink: 'https://source.unsplash.com/random/1920x1080',
      readMoreLink: '',
      gitHubLink: '',
      checkItOutLink: ''
    },
    {
      name: 'Time Report Automation',
      description:
        'The card game "War", built in React using only a single array to both visualize player and computer hands, as well as handle game logic.',
      imgLink: 'https://source.unsplash.com/random/1920x1080',
      readMoreLink: '',
      gitHubLink: '',
      checkItOutLink: ''
    },
    {
      name: 'Twilio Schedule Reminder',
      description:
        'The card game "War", built in React using only a single array to both visualize player and computer hands, as well as handle game logic.',
      imgLink: 'https://source.unsplash.com/random/1920x1080',
      readMoreLink: '',
      gitHubLink: '',
      checkItOutLink: ''
    }
  ]
  return (
    <>
      <FAB />
      <header className="header-image z-depth-5">
        <Header />
        <section className="text-area container">
          <h3 className="white-text">Nicholas Ryan Weber</h3>
          <p className="white-text">Full-Stack Developer</p>
        </section>
      </header>
      <main className="container row">
        <h2 className="center teal-text text-lighten-5">Projects</h2>
        {projects.map(project => {
          return <ProjectCard data={project} />
        })}
      </main>
    </>
  )
}

export default HomePage
