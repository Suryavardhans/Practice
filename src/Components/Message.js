import React, { Component } from 'react'

export class Message extends Component {
    constructor(props) {
      super(props)
    
      this.state = {          //this.state is initial value
         message:"Welcome Visitor"
      }
    }
    changeMessage(){
        this.setState({    //with this.setState we can update the data in class COmponent
            message:"Thank u for Subscribing"
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.changeMessage()}>Subscribe</button>
      </div>
    )
  }
}

export default Message;