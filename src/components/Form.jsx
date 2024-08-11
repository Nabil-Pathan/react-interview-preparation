import React from 'react'
import { useState } from 'react'


const Form = () => {

    const [value , setValue] = useState("")
    const [todos , setTodos] = useState([])

    const handleSubmit = (e) =>{
        e.preventDefault()
        setTodos([...todos, value])
        setValue("")
    }

    const handleChange = (e)=>{
        setValue(e.target.value)
    }

    const handleRemove = (index)=>{
        const newTodos = [...todos]
        const updatedTodos = newTodos.filter((_, i)=> i !== index)
        setTodos(updatedTodos)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text"  onChange={handleChange} />            
            <button type='submit'>Create</button>
        </form>

        <ul>
            {
                todos && todos.map((todo ,index)=>{
                    return (
                        <li key={index}>{todo} <button onClick={()=> handleRemove(index)}>Remove</button></li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Form