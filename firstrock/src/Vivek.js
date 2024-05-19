import React, { useState } from 'react'
import {useDispatch, useSelector } from "react-redux"
import {  increment, incrementByAmount } from './slices/ReduceSlice'

const Vivek = () => {
    let [value,setvalue]=useState()

    let dispatch=useDispatch()
    let data=useSelector((store)=>store.manage.amount)

   function inc(){
    dispatch(increment())
   }
   function add(){
    dispatch(incrementByAmount(value))
   }
  return (
    <div className='h-12 w-12 bg-blue-200'>

   counter:{data}
   <input type='text' onChange={(e)=>setvalue(e.target.value)}/>
   <button onClick={inc}>click</button>
   <button onClick={add}>+{value}</button>
         
    </div>
  )
}
export default Vivek
