import React from 'react';
import './App.css'
import 'font-awesome/css/font-awesome.min.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, Switch, Route, } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contect'
import Shop from './pages/Shop'






function App(){

  
  return(

    <div>
      <BrowserRouter>
        <Switch>
        <Route path="/" exact component={Home}/>   
        <Route path="/about" exact component={About}/>        
        <Route path="/contact" exact component={Contact}/>   
        <Route path="/shop" exact component={Shop}/>               
        </Switch>
      </BrowserRouter>
    </div>
  )
    
}





export default App;
