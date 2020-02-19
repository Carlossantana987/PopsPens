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
import backI from './img/backI.jpg';


const BackI = styled.div`
  width: 100%;
  height:900px;
  background-image: url(${backI});
  background-size: cover; /* or contain depending on what you want */
  background-position: center;
  background-repeat: no-repeat;
  text-align:center;
  margin:auto;
  padding:0;
  z-index:-2;
  filter:blur(2px)
  border:30px solid red;
  `;


const Routing = (
    <Router>
      <BackI/>
      <Navbar />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/prices" component={PenStyles} />
        {/* <Route path="/contact" component={Contact} /> */}
        <Route component={NotFound} />
      </Switch>

    </Router>
  )




ReactDOM.render(Routing, document.getElementById('root'));
