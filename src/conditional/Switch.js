// if statement

import React, { Component } from 'react';
import User from './User';
import Guest from '../practice/Guest';

export default class Switch extends Component {
  render() {
    const isRegistered = this.props.consumer;
    if(isRegistered){
      return<User />;
    }
      return<Guest />;
    }
}
