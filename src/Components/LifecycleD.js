import React, { Component } from 'react'


 class LifecycleD extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Surya'
      }
    }
    static getDerivedStateFromProps(props,state){
        console.log('lifecycleD getDerivedStateFromProps')
        return null
    }
   shouldComponentUpdate(){
    console.log('LifecycleD shouldComponentUpdate')
    return true
   }
   getSnapshotBeforeUpdate(prevprops,prevstate){
    console.log('LifecycleD getSnapshotBeforeUpdate')
   }
   componentDidUpdate(){
    console.log('LifeCycleD componentDidUpdate')
   }
  render() {
    console.log('LifecycleD Render')
    return (
      <div>
       
        
        </div>
    )
  }
}

export default LifecycleD;
