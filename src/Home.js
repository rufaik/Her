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
import Gold from './Gold'
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
    <Nav  />
   <br></br>
<div size={400} style = {{ width: 'fit-content'}} className = "J gown pb0  pa2 pa3-ns ">
    HerBasics <br></br><div className='f7 f4-ns mt2 mt0-ns frontfont'>Equipping girls with 3 basic elements 
    <br></br>so that they can build their lives on healthy foundations
    <br></br>Her Bra
    <br></br> Her Self-Esteem
    <br></br> Her Period
    <br></br>
      <br ></br>
    <Link to="/Curriculum" ><button type="button" class="btn mt2 mt0-ns f7 f5-ns btn-outline-warning">Check out Our Curriculum >>></button></Link>
    </div>
   
   


  </div>


 

    <div className="slide-container mt5 mt6-ns" >
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
