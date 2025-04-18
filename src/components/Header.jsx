import React from 'react'
import { NavLink } from 'react-router-dom';


export default function Header() {
  return (
    <div className='bg-black text-white py-2 px-2 flex justify-between items-baseline'>
      <h1 className='text-2xl'>Tailwind</h1>

      <nav className='space-x-3 max-sm:hidden'>
        <NavLink className={(e) => e.isActive ? 'text-red-700' : ''} to={'/about'}>About</NavLink>
        <NavLink className={(e) => e.isActive ? 'text-amber-300' : ''} to={'/contact'}>Contact</NavLink>
      </nav>

    </div>
  )
}
