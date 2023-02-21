import React, { Component } from 'react'
import LifecycleD from './LifecycleD'


 class LifecycleC extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Surya'
      }
    }
    static getDerivedStateFromProps(props,state){
        console.log('lifecycleC getDerivedStateFromProps')
        return null
    }
   shouldComponentUpdate(){
    console.log('LifecycleC shouldComponentUpdate')
    return true
   }
   getSnapshotBeforeUpdate(prevprops,prevstate){
    console.log('LifecycleC getSnapshotBeforeUpdate')
   }
   componentDidUpdate(){
    console.log('LifeCycleC componentDidUpdate')
   }
   changeState=()=>{
    this.setState({
        name:'code evolution'
    })
   }
  render() {
    console.log('LifecycleC Render')
    return (
      <div>
       <LifecycleD />
       <h1>LifecycleC</h1>
       <button onClick={this.changeState}>ChangeState</button>
       <h1>LifecycleD</h1>
        </div>
    )
  }
}

export default LifecycleC;
