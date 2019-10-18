import React, { Component } from 'react';

export default class User2 extends Component {
  render() {
    return (
        <React.Fragment>
          <h1>Welcome Smith</h1>
          <button onClick={this.props.clickData} >Logout</button>
        </React.Fragment>
    )
  }
}
