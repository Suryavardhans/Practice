import React, { Component } from 'react'
import InputRef from './InputRef'

 class FocusInputRef extends Component {
    constructor(props) {
      super(props)
    
      this.componentRef=React.createRef()
    }
    clickHandler=()=>{
        this.componentRef.current.focusInputRef()
    }
  render() {
    return (
      <div>
        <InputRef ref={this.componentRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default FocusInputRef