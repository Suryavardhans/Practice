import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    greetParent(childName){
        alert(`hello ${this.state.parentName} from $ {childName}`)
    }
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent}/>
      </div>
    )
  }
}
export default ParentComponent;
