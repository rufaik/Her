import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation'
import Contact from './Contact'
import Curriculum from './Curriculum'
import Partners from './Partners'
import About from './About'
import Me from './Me'
import Gold from './Gold'
import Home from './Home'
import ThankYou from './ThankYou'
import {
  Route,
  Switch,
  BrowserRouter,
  Redirect
} from "react-router-dom"





const App = () => {
  return(
    <BrowserRouter>
  <Switch>
  
      <Route path ={"/Home"} component={Home} />
      <Route exact path ={"/"} component={Home} />
      <Route exact path ={"/Contact"} component={Contact} />
      <Route exact path ={"/Me"} component={Me} />
      <Route exact path ={"/About"} component={About} />
      <Route exact path ={"/Curriculum"} component={Curriculum} />
      <Route exact path ={"/Partners"} component={Partners} />
      <Route exact path ={"/ThankYou"} component={ThankYou} />

    

    
     </Switch>
    
 
   

</BrowserRouter>
     )      
          
      
     
} 



export default App;
