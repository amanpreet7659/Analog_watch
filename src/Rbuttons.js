import React, { useState } from 'react'
import './App.css'
const Rbuttons = ({check,setCheck}) => {
    const handleChange=(e)=>{
        let name=e.target.name,value=e.target.value
        if(name==='search')
        {
            setCheck({search:true,compare:false})
        }
        else
        {
            setCheck({search:false,compare:true})
        }
    }
    return (
        <div>
            <input onChange={()=>{console.log("helo")}} onClick={handleChange} name="search" type="radio" value="Search" checked={check.search} /><label className="R1">Search</label>
            <input onChange={()=>{console.log("helo1")}} onClick={handleChange} name="compare" type="radio" value="Compare" checked={check.compare} /><label className="R2">Compare</label>
        </div>
    )
}

export default Rbuttons
