import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Header from './Components/Header/Header'
import Error from './Components/Error/Error'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Resultat from './Components/Resultat/Resultat'
import Freelancers from './Components/Freelancers/Freelancers'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/survey/:questionNumber">
          <Survey />
        </Route>
        <Route path="/result">
          <Resultat />
        </Route>
        <Route path="/freelances">
          <Freelancers />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
