import React,{useContext} from 'react'
import { channelContext, userContext } from '../App'
// import UseContextHook3 from './UseContextHook3'



function UseContextHook2() {
    const user=useContext(userContext)
const channel=useContext(channelContext)
  return (
    <div>
        {user}-{channel}
    </div>
  )
}

export default UseContextHook2