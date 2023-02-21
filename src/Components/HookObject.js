
import React,{useState}from 'react'

function HookObject() {
    const[name,setName]=useState({
        firstName:'',
        lastName:'',
        User:'',
        topic:'React'
    })
   
  return (
    <div>
        <form > 
       <input type='text' value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})} />
       <input type='text' value={name.lastName}  onChange={e=>setName({...name,lastName:e.target.value})} /><br /><hr />
       <label>Comments</label>
       <textarea value={name.User} onChange={e=>setName({User:e.target.value})} /><br/><hr/>
       <label>Topics</label>
       <select value={name.topic} onChange={e=>setName({topic:e.target.value})}>
        <option value='react'>React</option>
        <option value='angular'>Angular</option>
        <option value='vuejs'>VueJs</option>
        </select>
        <button type='submit'>Submit</button>
        </form>
       <h2>your firstname is-{name.firstName}</h2>
       <h2>Your LastName is-{name.lastName}</h2>
       <h2>Yur Comments {name.User}</h2>
       <h2>Topics :{name.topic}</h2>
        </div>

  )
}

export default HookObject