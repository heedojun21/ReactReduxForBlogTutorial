import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';


import Welcome from './components/welcome';
import reducers from './reducers';


export default (
  <div>
    <Route path="/" component={App}>
    <IndexRoute component={Welcome} />

      <Route path="welcome" component={Welcome} />
     
    </Route>

  </div>
);
