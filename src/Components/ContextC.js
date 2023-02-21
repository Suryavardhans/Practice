import React, { Component } from 'react'
import ContextD from './ContextD'


class ContextC extends Component {
  render() {
    return (
      <div>ContextC
        <ContextD />
      </div>
    )
  }
}

export default ContextC