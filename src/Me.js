import React from 'react';
import Card from './Card'
import './App.css';
import './Me.css'
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
    <div className="tc">
    <LogoHeader size={400} /><br></br>
    <CardList main={main}/>

    </div>
    </div>
  );
    }


export default Me;
