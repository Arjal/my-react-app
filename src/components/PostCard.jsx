import React from 'react'

export default function PostCard({ title, detail, imageUrl }) {

  return (
    <div className='w-[300px] space-y-3 shadow-2xl p-3'>
      <img className='h-[200px] w-full object-cover' src={imageUrl} alt="" />
      <div>
        <h1>{title}</h1>
        <p>{detail}</p>

      </div>
    </div>
  )
}