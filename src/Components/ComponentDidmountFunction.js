import React,{useEffect, useState} from 'react'

function ComponentDidmountFunction() {
    const[count,setCount]=useState(0)
    
 useEffect(()=>{
    document.title=`You Clicked ${count} times`
 },[count])
 
  return (
    <div>
<button onClick={()=>setCount(count+1)}>Click {count}</button>
    </div>
  )
}

export default ComponentDidmountFunction