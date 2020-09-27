// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {
  constructor(props) {
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  bombState = () => {
    return this.state.secondsLeft > 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : "Boom!"
  }
 
  render() {
    return(
      <div>{this.bombState()}</div>
    )
  }
}