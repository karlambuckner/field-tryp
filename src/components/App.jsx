import React from 'react'
import Contact from './Contact'
import Dropdown from './Dropdown'
import Jumbotron from './Jumbotron'
import PropTypes from 'prop-types'
import Asheville from './Asheville'
import Portland from './Portland'
import { Switch, Route } from 'react-router-dom'

function App(props){
  var stylesComponents = {
    color: 'blue'
  }
  return (
    <div style={stylesComponents}>
      <div>
      <Switch>
      <Route exact path='/' component={Jumbotron} />
      <Route path='/asheville' component={Asheville} />
      <Route path='/portland' component={Portland} />

    </Switch>
        <div id="topnav">
          <h2 className="right">Field Tryp</h2>
          <a className="home" href="#home">About</a>
          <a href="#drive">Drive for Us</a>
          <a href="#ride">Ride with Us</a>
        </div>



        <br></br><br></br><br></br>
        <div>
          <br></br>
          <br></br>
          <h2>We get you outside major cities on a low cost, environmentally friendly round-trip adventure. Select your city below.</h2>
          <br></br>
        </div>
        <br></br>
        <Dropdown/>
        <br></br><br></br><br></br><br></br><br></br><br></br>
        <Contact/>
      </div>
    </div>
  )
}

export default App
