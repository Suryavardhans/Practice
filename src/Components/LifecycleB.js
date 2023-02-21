import React, { Component } from 'react'

 class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Surya'
      }
    }
    static getDerivedStateFromProps(props,state){
        console.log('lifecycleB getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('lifecycleB componentDidMount')
    }
  render() {
    console.log('LifecycleB Render')
    return (
      <div>LifecycleB</div>
    )
  }
}

export default LifecycleB;
