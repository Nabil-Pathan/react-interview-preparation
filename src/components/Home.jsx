import React, { useState } from 'react'

const Home = ({data}) => {


    const [selectedCountry , setSelectedCountry] = useState("")

    const [selectedState , setSelectedState] = useState("")

    const [selectedCity , setSelectedCity] = useState("")

    const countries = Object.keys(data.countries)

    const states = Object.keys(data.states).filter((state)=>{
        return data.states[state].country === selectedCountry
    })

    const cities = Object.keys(data.cities).filter((city)=>{
       return data.cities[city].country === selectedCountry && data.cities[city].state === selectedState
    })


    const handleCountryChange = (e)=>{   
        setSelectedCountry(e.target.value)
    }

    const handleStateChange = (e)=>{
        setSelectedState(e.target.value)
    }

    const handleCityChange = (e)=>{
        setSelectedCity(e.target.value)
    }


  return (
    <div>
        <select value={selectedCountry} onChange={handleCountryChange}>
            <option value="" hidden>Select Country</option>
            {
                countries.map((country)=>(
                    <option key={country} value={country}>{country}</option>
                ))
            }
        </select>


        <select value={selectedState} onChange={handleStateChange}>
            <option value="" >Select State</option>
            {
                states.map((state)=>(
                    <option key={state} value={state}>{state}</option>
                ))
            }
        </select>


        <select value={selectedCity} onChange={handleCityChange}>
            <option value="" >Select City</option>
            {
                cities.map((city)=>(
                    <option key={city} value={city}>{city}</option>
                ))
            }
        </select>
    </div>
  )
}

export default Home