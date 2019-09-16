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
    <div style = {{display: 'flex', justifyContent: 'center', width: 'fit-content', margin: '0 auto'}} ><p
    className = "pa2 pa3-ns f4 f3-ns ml1 ml7-ns mr1 mr7-ns"> 
    Her Bra&ensp;&ensp;•&ensp;&ensp;Her Self-Esteem&ensp;&ensp;•&ensp;&ensp;Her Period</p></div><br></br><br></br>
    <Gold/>
</div>
</div>
     )    
}

export default Home;



