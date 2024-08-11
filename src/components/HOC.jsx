import React from 'react'


const EnhancedHOC = (Component)=>{

    return (props)=>{
        return (
            <Component {...props} name="Nabil Khan"/>
        )
    }

}



const HOC = ({name}) => {
  return (
    <div>{name}</div>
  )
}

export default EnhancedHOC(HOC)
