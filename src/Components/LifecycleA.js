import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

 class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Surya'
      }
    }
    static getDerivedStateFromProps(props,state){
        console.log('lifecycleA getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('lifecycleA componentDidMount')
    }
  render() {
    console.log('LifecycleA Render')
    return (
      <div>
        <LifecycleB />
        
        </div>
    )
  }
}

export default LifecycleA;
