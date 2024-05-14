import React from 'react'
import { Link } from 'react-router-dom'

export default function Breadcrums() {

        
  return (
    <div>
<div className='justify-center items-center gap-2.5 flex'>
      <Link className='inline-block place-items-center grid w-[74px] h-[74px] bg-yellow-400 rounded-full text-white text-2xl font-semibold' to="/" >1</Link>
      <Link className='inline-block place-items-center grid w-[74px] h-[74px] bg-yellow-400 rounded-full text-white text-2xl font-semibold' to="/pdf" >2</Link>
    </div>
    </div>
  )
}
