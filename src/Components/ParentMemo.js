import React, { Component } from 'react'
import Memo from './Memo'


 class ParentMemo extends Component {
    constructor(props) {
      super(props)
    
      this.state={
        name:'Surya'
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Surya' // when there is no change in props avoid rerendering
            })
        },2000)
    }
  render() {
    return (
      <div>ParentMemo
        <Memo name={this.state.name}/>
    
      </div>
    )
  }
}
 

export default ParentMemo