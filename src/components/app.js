import React, { Component } from 'react';
import { connect } from 'react-redux';
import hello from 'hellojs'
import { browserHistory } from 'react-router';

import { bindActionCreators } from 'redux';

import {  } from '../actions/index';



class App extends Component {

  constructor(props) {

    super(props)
    this.state = {  };

  }

  render() {
    return (

      <div>
        {this.props.children}
      </div>

    );
  }
}



function mapStateToProps(state) {
  return {
     
  };
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators({  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
