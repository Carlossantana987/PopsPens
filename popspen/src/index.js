import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router,Switch } from 'react-router-dom'

//component imports
import App from './App';
import Navbar from './components/Navbar';
import PenStyles from './components/prices/PenStyles';
import NotFound from './components/NotFound';


//styling imports
import './index.css';
import styled from 'styled-components'
import backgroundImg from './img/backgroundImg.jpg';


const BackgroundImg = styled.div`
  width: 100%;
  height:690px;
  background-image: url(${backgroundImg});
  background-size: cover; /* or contain depending on what you want */
  background-position: center;
  background-repeat: no-repeat;
  text-align:center;
  margin:auto;
  padding:0;
  z-index:-2;
  filter:blur(2px)
  `;


const Routing = (
    <Router>
      <BackgroundImg/>
      <Navbar />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/prices" component={PenStyles} />
        {/* <Route path="/contact" component={Contact} /> */}
        <Route component={NotFound} />
      </Switch>
        {/* <Route path="/prices" component={Prices} /> */}
        {/* <Route path="/catalog" component={Catalog} /> */}
    </Router>
  )




ReactDOM.render(Routing, document.getElementById('root'));
