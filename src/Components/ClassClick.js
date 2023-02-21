import React, { Component } from 'react'

export default class ClassClick extends Component {
    clickHandler(){
        console.log("Clicked the button");
    }
  render() {
    return (
      <div>ClassClick
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}
