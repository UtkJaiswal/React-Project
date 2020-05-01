import React from 'react';
import ReactDOM from 'react-dom';

import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';




import login from './Pages/login.js';

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <div>
      {/* <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} /> */}
     
      <Route path='/login' component={login} />
 
      {/* <Route path='/' component={Footer} /> */}
    </div>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
