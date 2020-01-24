import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router,Switch } from 'react-router-dom'

//component imports
import App from './App';
import PenStyles from './components/prices/PenStyles'
import NotFound from './components/NotFound';


//styling imports
import './index.css';

const routing = (
    <Router>
      <Switch>
        <Route path="/" component={App} />
        <Route path="/prices" component={PenStyles} />
        {/* <Route path="/contact" component={Contact} /> */}
        <Route component={NotFound} />
      </Switch>
        {/* <Route path="/prices" component={Prices} /> */}
        {/* <Route path="/catalog" component={Catalog} /> */}
    </Router>
  )




ReactDOM.render(routing, document.getElementById('root'));
