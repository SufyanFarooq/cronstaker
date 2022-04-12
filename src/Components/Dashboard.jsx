import React,{useState} from 'react'
import Earning from './Earning/Earning'
import Home from './HomePage/Home'
import Packages from './Packges/Packages'

export default function Dashboard({isToggle, setIsToogel}) {
    
    return (
        <div>
        <Home isToggle={isToggle} setIsToogel={setIsToogel} />
        <Packages  isToggle={isToggle}  setIsToogel={setIsToogel}/>
        <Earning isToggle={isToggle} setIsToogel={setIsToogel}/>



        </div>
    )
}
