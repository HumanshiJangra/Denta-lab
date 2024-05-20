import React from 'react'
import logo from '../assets/image 7.png'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
    <header className='container mx-auto px-5'>
      <div className='flex justify-end items-center py-4'>
        <Link to='/'>
        <img className='max-w-[249px]' src={logo} alt="" />
        </Link>
      
        </div>
    </header>
      
    </>
  )
}
