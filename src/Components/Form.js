import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comments:'',
         password:'',
         topic:'React'
      }
    }

    handleUsername=(event)=>{
        this.setState({
            username:event.target.value
        })
        
    }
    handlePasswordChange=(event)=>{
        this.setState({
            password:event.target.value
        })
    }
    handleCommentsChange=(event)=>{
        this.setState({
            comments:event.target.value
        })
    }
    handleSelectChange=(event)=>{
        this.setState({
            topic:event.target.value
        })

    }
    SumbitFormHandler=event=>{
        alert(`${this.state.username} ${this.state.password} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }

  render() {
    return (
        <form onSubmit={this.SumbitFormHandler}>
      <div>
        <label>USerName:</label>
        <input type="text" value={this.state.username} onChange={this.handleUsername}/> 
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
      </div>
      <div>
        <label>Comments</label>
        <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
      </div>
      <div>
        <label>Topic: </label>
        <select value={this.state.topic} onChange={this.handleSelectChange}>
            <option value='react'>React</option>
            <option value='angular'>Angular</option>
            <option value='vue.js'>Vue.js</option>
        </select>
      </div>
      <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Form;
