import React, { Component } from 'react'
import './Logo.css';
import Logo from './Logo'
import Navigation from './Navigation'
import Gold from './Gold'
import {Link} from 'react-router-dom';
import './Complete.css';
import {Animated} from "react-animated-css"




const Home = () => {
  return(
  	<div>
  <Navigation />
  <div>
  
    <div style = {{display: 'flex', justifyContent: 'center', width: 'fit-content', margin: '0 auto'}} className = "J pa2 pa3-ns f-headline ml1 ml7-ns pb0 mr1 mr7-ns">
    HerBasics
 
  </div>
  

    <div style = {{display: 'flex', justifyContent: 'center', width: 'fit-content', margin: '0 auto'}} ><p
    className = "pa2 mt0 pa3-ns f6 f4-ns ml1 ml7-ns mr1 mr7-ns"> 
    Her Bra&ensp;&ensp;•&ensp;&ensp;Her Self-Esteem&ensp;&ensp;•&ensp;&ensp;Her Period</p></div><br></br><br></br>
    <Gold/>



</div>
</div>
     )    
}

export default Home;



