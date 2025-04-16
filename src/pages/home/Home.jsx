import React from 'react'
import Header from '../../components/Header'
import { NavLink, Outlet } from 'react-router'
import Intro from './Intro'
import Tech from './Tech'
import Info from './Info'
export default function Home() {
  return (
    <div className='py-2 max-sm:bg-amber-600'>
      {/* <div className='h-[300px] w-[300px] border-2 animate-myAni'>

      </div> */}
      <button className='btn'>click</button>
      <div className='h-[200px] w-[200px] border-2 flex-center'>hello</div>
      <Intro />

      <Tech />
      <Info />


      {/* <nav className='space-x-3'>
        <NavLink to={'/'}>Page1</NavLink>
        <NavLink to={'/page-2'}>Page2</NavLink>
      </nav>
      <Outlet /> */}
    </div>
  )
}
