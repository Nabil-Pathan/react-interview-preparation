import React, { useState } from 'react'

const Pagination = ({ pages, active_page }) => {


    const [active , setActive] = useState(active_page)


    const handlePrevious = ()=>{
        setActive((prev)=>{
           return prev - 1
        })
    }


    const handleNext = ()=>{
        setActive((prev)=>{
            return prev + 1
        })
    }

    return (
        <div style={{display : "flex" , gap : "4px"}}>

            <button disabled={active === 1} onClick={handlePrevious}> Prev </button>
            {
                new Array(pages).fill(0).map((_, index) => {
                    return (
                        <span style={{backgroundColor : active === index + 1  ? "green" : "gray" , borderRadius : "50%" ,height : "20px" , width : "20px" , padding : "3px" , textAlign : "center"}}>{index + 1}</span>
                    )
                })
            }
            <button  disabled={active === pages} onClick={handleNext}> Next </button>
        </div>
    )
}

export default Pagination