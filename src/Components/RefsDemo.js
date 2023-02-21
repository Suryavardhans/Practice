import React, { Component } from 'react'
//4 steps for  performing Refs
//1.createRef(this.inputRef=React.createRef)
//2.Attach Ref in render(ref={this.inputRef})
//3.FocusMethod(componentDidMount(){this.inputRef.cuurnt.focus()})
//4.Fetch Input value(clickHandler=()=>{this.inputRef.currnt.value})
class RefsDemo extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef=React.createRef()
    }
    componentDidMount(){
        console.log(this.inputRef)
        this.inputRef.current.focus()
    }
    clickHandler=()=>{
        alert(this.inputRef.current.value)
    }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.clickHandler}>CLick</button>

        </div>
    )
  }
}



export default RefsDemo