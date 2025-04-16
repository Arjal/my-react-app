import React from 'react'
import Header from '../../components/Header'
import { NavLink, Outlet } from 'react-router'
import Intro from './Intro'
import Tech from './Tech'
import Info from './Info'
export default function Home() {
  return (
    <div className='py-2'>
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
