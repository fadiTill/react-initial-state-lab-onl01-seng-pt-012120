// your ImageSlider code here!
import React, {Component}  from 'react';
export default class ImageSlider extends Component {
 
    // we use the constructor to set the INITIAL STATE
    constructor() {
      super()
      this.state = {
        currentSlideIndex: 0
      }
    }
   
    
    render() {
      return (
        <div>I am on slide {this.state.currentSlideIndex}</div>
      )
    }
  }