import React from 'react'
import logo from '../assets/image 7.png'

export default function Header() {
  return (
    <>
    <header className='container mx-auto px-5'>
      <div className='flex justify-end items-center py-4'>
        <img className='max-w-[249px]' src={logo} alt="" />
        </div>
    </header>
      
    </>
  )
}
