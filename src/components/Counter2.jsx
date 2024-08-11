// import React, { useState } from 'react'

// const Counter2 = () => {

//     const [count , setCount] = useState(0)


//     const handleIncrement = ()=>{
//         setCount((prevCount)=> prevCount + 1)
//     }

//     const handleDecrement = ()=>{
//         setCount(count - 1)
//     }
//   return (
//     <div>
//     <button onClick={handleIncrement}>+</button>
//     {count}
//     <button  onClick={handleDecrement}>-</button>
// </div>
//   )
// }

// export default Counter2

import React from "react"

class Counter2 extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
    }


    handleIncrement = () => {
        this.setState({count : this.state.count + 1}) 
    }

    handleDecrement = () => {
        this.setState({count : this.state.count - 1})        
    }

    render() {
        return (
            <div>
                <button onClick={this.handleIncrement}>+</button>
                {this.state.count}
                <button onClick={this.handleDecrement}>-</button>
            </div>
        )
    }
}

export default Counter2
