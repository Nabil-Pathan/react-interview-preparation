import React from 'react'

import { useReducer } from 'react'


const reducer = (state,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return { count : state.count + 1}
        case 'DECREMENT':
            return { count : state.count - 1}    
    }
}

const Counter = () => {

    const [state , dispatch] = useReducer(reducer,{ count : 0})

    const handleIncrement = ()=>{
        dispatch({type : 'INCREMENT'})
    }

    const handleDecrement = ()=>{
        dispatch({type : 'DECREMENT'})
    }
  return (
    <div>
        <button onClick={handleIncrement}>+</button>
        {state.count}
        <button disabled={state.count < 1} onClick={handleDecrement}>-</button>
    </div>
  )
}

export default Counter