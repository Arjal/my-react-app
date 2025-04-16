import React from 'react'
import { DiGithub, DiJava, DiJavascript, DiPython, DiReact } from 'react-icons/di'

export default function Tech() {
  return (
    <div className='grid grid-cols-4 justify-items-center'>
      <DiReact className='animate-bounce hover:text-red-600' size={200} />
      <DiPython className='hover:scale-110 ease-in transition duration-100' size={200} />
      <DiJavascript size={200} className='text-some' />
      <DiJava size={200} />
      <DiGithub size={200} />
    </div>
  )
}

