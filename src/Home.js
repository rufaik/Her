import React from 'react';
import Card from './Card'
import './App.css';
import './Me.css'
import './Home.css'
import './Complete.css'
import CardList from './CardList'
import { main } from './main'
import LogoHeader from './Logo header'
import Navigation from './Navigation'
import 'tachyons';
import {Link} from 'react-router-dom';
import Logo from './Logo'
import './Logo.css';
import Gold from './Gold'
import {Animated} from "react-animated-css"
import { Slide } from 'react-slideshow-image';
import { Fade } from 'react-slideshow-image';
import Nav from './Nav'


  const fadeImages = [
  './booked.svg',
  './inspec.svg',
  './team.svg'
];
 
const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}

const Me = () => {
  return (
  	<div>
    <Nav />
   
<div size={400} style = {{ width: 'fit-content'}} className = "J pb0 mb0 mt1 mt5-ns pa2 pa3-ns ml1 ml0-ns mr1 mr7-ns">
    HerBasics <br></br><div className='f7 f4-ns  frontfont'>Equipping girls with 3 basic elements 
    <br></br>so that they can build their lives on healthy foundations
    <br></br>Her Bra
    <br></br> Her Self-Esteem
    <br></br> Her Period
    <br></br>
      <br></br>
    <Link to="/Curriculum"><button type="button" class="btn btn-outline-warning">Check out Our Curriculum >>></button></Link>
    </div>
   
   


  </div>


 

    <div className="slide-container mt6" >
      <Fade {...fadeProperties}>
        <div className="each-fade">
        <h2></h2>
          <div className="image-container">
            <img src={fadeImages[0]} />
          </div>
          
        </div>
        <div className="each-fade">
         <h2></h2>
          <div className="image-container">
            <img src={fadeImages[1]} />
          </div>
         
        </div>
        <div className="each-fade">
        <h2></h2>
          <div className="image-container">
            <img src={fadeImages[2]} />
          </div>
          
        </div>
      </Fade>
    </div>
    </div>
  )
}











export default Me;
