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

const Nav = () => {
  return (
  	<div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white bb frontfont b--yellow shadow-5">
  <a class="navbar-brand" href="#"><img  alt='robots' 
                    src='./logo.png' className ='w2'/></a>
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/Home">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Curriculum">Our Curriculum</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/About">Who We Are</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Contact">Contact Us</a>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Nav;