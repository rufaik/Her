import React from 'react';
import './Logo.css';
import Logo from './Logo'
import Navigation from './Navigation'
import Gold from './Gold'
import {Link} from 'react-router-dom';




const Home = () => {
  return(
  	<div>
  <Navigation />
  <div>
    <Logo />
    <p className = "pa3 center"> Her Bra&ensp;&ensp;•&ensp;&ensp;Her Self-Esteem&ensp;&ensp;•&ensp;&ensp;Her Period</p><br></br><br></br>
    <Gold/>
</div>
</div>
     )    
}

export default Home;



