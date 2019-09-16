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
    <p  style = {{display: 'flex', justifyContent: 'center'}} className = "pt2 pb3 f4 f3-ns ml1 ml7-ns mr1 mr7-ns"> Her Bra&ensp;&ensp;•&ensp;&ensp;Her Self-Esteem&ensp;&ensp;•&ensp;&ensp;Her Period</p><br></br><br></br>
    <Gold/>
</div>
</div>
     )    
}

export default Home;



