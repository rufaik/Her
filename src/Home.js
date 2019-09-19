import React from 'react';
import Card from './Card'
import './App.css';
import './Me.css'
import './Complete.css'
import CardList from './CardList'
import { main } from './main'
import LogoHeader from './Logo header'
import Navigation from './Navigation'
import 'tachyons';
import {Link} from 'react-router-dom';

 

const Me = () => {
  return (
  	<div>
    <Navigation />
    <div className="pt5">
    <div className="tc">

     <div size={400} style = {{display: 'flex', justifyContent: 'center', width: 'fit-content', margin: '0 auto'}} className = "J pb0 mb0 pa2 pa3-ns ml1 ml7-ns mr1 mr7-ns">
    HerBasics
 
  </div>

<div style = {{display: 'flex', justifyContent: 'center', width: 'fit-content', margin: '0 auto', paddingBottom:'0'}} ><p
    className = "pa2 pt2 pt0-ns mt0 pa3-ns f7 f5-ns ml1 ml7-ns mr1 mr7-ns"> 
    Her Bra&ensp;&ensp;•&ensp;&ensp;Her Self-Esteem&ensp;&ensp;•&ensp;&ensp;Her Period</p></div><br></br>
  <div className= 'pl4 pl0-ns pr4 pr0-ns'>
    <CardList main={main}/>
    </div>
    </div>
    </div>
    </div>
  );
    }


export default Me;
