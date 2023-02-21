import React,{useState} from 'react'

function HookState1() {
    const[count,setCount]=useState(0)
  return (
    <div>
        Count:{count}
        <button onClick={()=>setCount(count+5)}>Count{count}</button>

    </div>
  )
}

export default HookState1