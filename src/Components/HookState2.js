import React,{useState} from 'react'
//Previous state

function HookState2() {     
    const initialCount=0
    const[count,setCount]=useState(initialCount)
  return (
    <div>
        Count:{count}
        <button onClick={()=>setCount(prevCount=>prevCount)}>Count</button>
        <button onClick={()=>setCount(prevCount=>prevCount+1)}>Increment</button>
        <button onClick={()=>setCount(prevCount=>prevCount-1)}>Decrement</button>


    </div>
  )
}

export default HookState2