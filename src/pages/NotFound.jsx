import React from 'react'

export default function NotFound() {
  return (
    <div className='space-y-2 h-screen flex items-center justify-center flex-col'>
      <h1 className='font-bold text-red-600 text-2xl'> 404 Page Not Found</h1>
      <button className='bg-black px-2 text-white py-1 rounded-sm'>Go back home</button>
    </div>
  )
}
