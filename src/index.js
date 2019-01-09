import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

import promise from 'redux-promise';

import routes from './routes';

import Async from './components/middlewares/async'

//oauth2 package
import hello from 'hellojs';

//material-ui provider
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const createStoreWithMiddleware = applyMiddleware(Async, reduxThunk, promise)(createStore);
const store = createStoreWithMiddleware(reducers);



ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={browserHistory} routes={routes} />
    </MuiThemeProvider>
  </Provider>
  , document.querySelector('.container'));

