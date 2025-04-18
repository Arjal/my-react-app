import React from 'react'
import { DiAndroid, DiAngularSimple, DiGithub, DiJava, DiJavascript, DiPython, DiReact } from 'react-icons/di'

export default function Tech() {
  return (
    <div className='grid grid-cols-(--my-grid) justify-items-center '>
      <DiReact className='animate-bounce hover:text-red-600' size={200} />
      <DiPython className='hover:scale-110 ease-in transition duration-100' size={200} />
      <DiJavascript size={200} className='text-some' />
      <DiJava size={200} />
      <DiGithub size={200} />
      <DiPython size={200} />
      <DiAndroid size={200} />
      <DiAngularSimple size={200} />
    </div>
  )
}

