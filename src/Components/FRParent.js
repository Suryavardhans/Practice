import React, { Component } from 'react'
import FRChildInput from './FRChildInput'

 class FRParent extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef=React.createRef()
    }
    clickHandler=()=>{
        this.inputRef.current.focus()
    }
  render() {
    return (
      <div>
        <FRChildInput ref={this.inputRef}/>
        <button onClick={this.clickHandler}>FocusInput</button>
        </div>
    )
  }
}
 export default FRParent