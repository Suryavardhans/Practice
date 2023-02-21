import React, { Component } from 'react'
import ContextE from './ContextE'
import UserContext from './userContext'

 class ContextD extends Component {
  render() {
    return (
      <div>ContextD context {this.context}
        <ContextE/>
      </div>
    )
  }
}

ContextD.contextType=UserContext

export default ContextD