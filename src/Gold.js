import React from 'react'
import './App.css';
import {Link} from 'react-router-dom';


const Gold = () => {
  return (
     <Link to="/Home">
     <button 
       className="b ph3 pv2 input-reset ba b--black bg-white grow pointer f6 dib" >FIND OUT MORE</button>
       </Link>
    )
}


export default Gold;
