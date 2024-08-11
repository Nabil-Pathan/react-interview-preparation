// Controlled Component Example 
import React, { useState } from 'react';

const Form = () => {
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);  // React manages the state of the input
    }

    return (
        <div>
            <input onChange={handleChange} type="text" value={text} />
        </div>
    );
}

export default Form;


// UnControlled Component Example 


// import React from 'react'
// import { useRef } from 'react'

// const Form = () => {

//     const textRef = useRef()


//     console.log(textRef.current);
    
//     const handleChange = (e)=>{
//         console.log(textRef.current.value);
//     }

//   return (
//     <div>
//         <input  ref={textRef} onChange={handleChange} type="text" />
//     </div>
//   )
// }

// export default Form