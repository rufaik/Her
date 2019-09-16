import React from 'react';
import './Logo.css';
import hers from './Big.png' 
import {Link} from 'react-router-dom';



const Logo = () => {
  return (
    <div className = 'forms mt8 pa3'>
      
      <img  alt ='logo' src={hers}/>

    </div>

  );
    };



export default Logo;



