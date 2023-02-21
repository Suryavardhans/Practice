import React,{useState} from 'react'

function HookCounterThree() {
    const[name,setName]=useState({
                                firstName:'',
                                lastName:''
                                })
  return (
    <div>
        Name:{name}
        <form>      
        <input type='text' value={name.firstName} onChange={e=>setName({firstName: e.target.value})} />
        <input type='text' value={name.lastName} onChange={(e)=>setName({lastName: e.target.value})} />
    
        </form>
       <h2>Your firstName is- {name.firstName}</h2>
        </div>
  )
}

export default HookCounterThree