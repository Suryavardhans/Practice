import React from 'react'
import {userContext,channelContext} from '../App'


function UseContextHook3() {
  return (
    <div>
       <userContext.Consumer>
          {
            user=>{
                return(
                <channelContext.Consumer>
                    {
                        channel=>{
                            return <div>This is {user} and {channel}</div>
                        }
                    }
                   
                </channelContext.Consumer>)
              
            }
          }
       </userContext.Consumer>
    </div>
  )
}

export default UseContextHook3