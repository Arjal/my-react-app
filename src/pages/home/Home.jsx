import React, { useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const handleCount = () => {
    setCount((updated) => {
      const newupd = updated + 1;
      setText(newupd % 2 === 0 ? 'Even' : 'Odd');
      return newupd;
    })
  }
  return (
    <div>
      <h1 className='text-2xl'>{count}&nbsp;{text}</h1>
      <button onClick={handleCount} className='bg-black text-white px-2 py-2 cursor-pointer'>Increment</button>
    </div>
  )
}
