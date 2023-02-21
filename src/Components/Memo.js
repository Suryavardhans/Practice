import React from 'react'

function Memo({name}) {   // when there is no change in props avoid rerendering
    console.log('Rendering Mem Component')//will not rerender for every rerender in parent component
  return (         //Memo:Avoid Re-rendering
    <div>
        {name}
    </div>
  )
}

export default React.memo(Memo)