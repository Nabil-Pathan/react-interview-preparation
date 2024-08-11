import React from 'react'
import { useToggle } from './CustomHook'

const Theme = () => {

    const [isToggled , toggle] = useToggle(false)

    
  return (
    <div style={{height : "100vh" , backgroundColor : isToggled ? "black" : "white"}}>
        <button onClick={toggle}>Toggle</button>
    </div>
  )
}

export default Theme