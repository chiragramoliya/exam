// inline if-else statement

import React, { Component } from 'react';
import User2 from "./User2";
import Guest from "./Guest";

export default class Switch3 extends Component {
  state = {
    isLoggedIn : false
  }

  clickLogin = () => {
    this.setState({isLoggedIn : true});
  };

  clickLogout = () => {
    this.setState({isLoggedIn : false});
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn
    return(
      <div>
         {isLoggedIn ? (
           <User2  clickData={this.clickLogout}/>
         ) : (
           <Guest clickData={this.clickLogin}/>)
         }  
      </div>
    )
  }
}
