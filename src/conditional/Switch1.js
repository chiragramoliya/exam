// inline if statement

import React, { Component } from 'react';
import User1 from './User1'

export default class Switch1 extends Component {
  render() {
    const primeMember = this.props.primeMember;
    return (
      <React.Fragment>
        <h1>Welcome User</h1>
        {primeMember && <User1 />}
      </React.Fragment>
        
      
    )
  }
}
