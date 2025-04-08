import React from 'react'

export default function ButtonComponent({ greetEvent }) {
  return (
    <div>
      <button onClick={(e) => greetEvent('ram')}
        className='bg-amber-300 text-white px-2 hover:bg-amber-800'>click to view</button>
    </div>
  )
}
