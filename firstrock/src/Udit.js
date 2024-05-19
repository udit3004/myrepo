import React, { useEffect, useState } from 'react'
import axios from "axios"

const Udit = () => {
    let [data,setdata]=useState()
    useEffect(()=>{
        const Api=axios.get("http://localhost:3000/bags")
       
    },[])
  

  return (
    <div className='h-5 w-full bg-slate-300'>
     
    </div>
  )
}

export default Udit
