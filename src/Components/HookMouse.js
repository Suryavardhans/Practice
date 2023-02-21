import React,{useEffect, useState} from 'react'

function HookMouse() {
    const[x,setX]=useState(0);
    const[y,setY]=useState(0)

   const logMousePosition=e=>{
    console.log('Mouse Event')
    setX(e.clientx)
    setY(e.clienty)
   }

  useEffect(()=>{
    console.log('UseEffect called')
    window.addEventListener('Mouse move',logMousePosition)
  })
  return (
    <div>
        Hooks {x}- {y}
    </div>
  )
}

export default HookMouse