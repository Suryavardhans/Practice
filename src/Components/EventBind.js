import React, { Component } from 'react'
//We have 4 Approaches to bind 
//1.Binding in render Method =>{this.clickHandler.bind(this)}
//2.Arrow Function in render =>{()=>this.clickHandler()} easy way
//3.Binding in the Constructor ==>this.clickHandler=this.clickHandler.bind(this)
//4.class property as Arrow Function ==>clickHandler=()={this.setState({message:'goodbye'})}
export class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello'
      }
    //   this.clickHandler=this.clickHandler.bind(this)
    }
    clickHandler=()=>{          //New Approach
        this.setState({
            message:"goodbye"
        })
        console.log(this)
    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.clickHandler}>Click</button>
        
        </div>
    )
  }
}

export default EventBind