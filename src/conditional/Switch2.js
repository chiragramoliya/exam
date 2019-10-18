// if-else statement

import React, { Component } from 'react';
import User2 from "./User2";
import Guest from "../practice/Guest";

export default class Switch2 extends Component {
  state = {
    isLoggedIn : true
  }

  clickLogin = () => {
    this.setState({isLoggedIn : true});
  };

  clickLogout = () => {
    this.setState({isLoggedIn : false});
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn
    if(isLoggedIn){
      return <User2   clickData={this.clickLogout}/>;
    }else{
      return <Guest  clickData={this.clickLogin}/>;
    }
    
  }
}
