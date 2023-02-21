import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
  render() {
    if(this.state.isLoggedIn){
        return(
            <div>Welcome Surya</div>
        )
    }
    else{
        return(
            <div>Welcome Guest</div>
        )
    }
    // return (
    //   <div>Welocme Surya
    //   <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting