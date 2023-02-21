import React, { Component } from 'react'

export class Previoustate extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Count:1    
        
        }
    }
    increment(){
        this.setState((prevState)=>({                //prevState we can get the values of Preivous state value
            Count:prevState.Count+1}))
            console.log(this.state.Count)
        
    }
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        
    }
  render() {
    return (
      <div>Previoustate{this.state.Count}
      <button onClick={()=>this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Previoustate