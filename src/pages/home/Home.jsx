import React from 'react'
import Header from '../../components/Header'
import { NavLink, Outlet } from 'react-router'
import Intro from './Intro'
import Tech from './Tech'
import Info from './Info'
import Footer from '../../components/Footer'
export default function Home() {
  return (
    <div className='py-2 space-y-2 max-sm:bg-amber-600'>
      {/* <div className='h-[300px] w-[300px] border-2 animate-myAni'>

      </div> */}
      {/* <button className='btn'>click</button>
      <div className='h-[200px] w-[200px] border-2 flex-center'>hello</div> */}
      {/* <div className='h-[400px] w-[400px] border-2'>
        <svg viewBox='-30 0 300 300'>
          <rect x={10} y={10} height={100} width={100} fill='red' stroke='black' />
          <rect x={100} y={100} height={100} width={100} fill='blue' />

        </svg>
      </div> */}
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
