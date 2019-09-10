import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'
import HomePage from './pages/HomePage.jsx'
import SinglePage from './pages/SinglePage.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import ProjectFinder from './components/ProjectFinder.jsx'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/test" component={SinglePage}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/projects" component={Projects}></Route>
            <Route
              exact
              path="/project/:projId"
              component={ProjectFinder}
            ></Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
