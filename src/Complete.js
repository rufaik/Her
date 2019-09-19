import React, { Component } from 'react';
import './App.css';
import Logo from './Logo'
import Navigation from './Navigation'
import  Contact from './Contact'
import  Curriculum from './Curriculum'
import  Partners from './Partners'
import  About from './About'
import  Complete from './Complete'
import Home from './Home'
import Gold from './Gold'





class Complete extends Component {
  constructor() {
    super();
    this.state = {
      route:'about'
    }
  }

  onRouteChange = (route) => {
    this.setState({route:route})
  }

  render () {
  return (
   
    <div>
    <Navigation className= 'ma3' onRouteChange={this.onRouteChange}/>
    { this.state.route === 'curriculum' 
    ?<div>
     
      <Curriculum onRouteChange={this.onRouteChange}/>
        
      </div>
      : ( this.state.route === 'about'
          ? <About onRouteChange={this.onRouteChange} />
          : <Partners onRouteChange={this.onRouteChange} />
          )
      }
       </div>
      );
} 
} 


export default Complete;
