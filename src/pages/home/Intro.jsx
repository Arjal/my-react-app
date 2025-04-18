import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
export default function Intro() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-[1fr_1.7fr] items-center gap-6 p-6 '>
      <div className='w-full max-w-sm mx-auto aspect-square'>
        <DotLottieReact
          src="https://lottie.host/264691cd-9e20-4eb0-9c62-a9b8efa3daac/4SIuBFaDQ5.lottie"
          loop
          autoplay
        />
      </div>

      <div className='max-sm:text-center'>
        <h1 className='font-bold text-2xl'>Hi i am john</h1>
        <p className='text-amber-300 italic'>Dev, Ai, Machine Learning</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque cumque libero sunt maxime aliquam, deleniti similique aspernatur delectus repellendus magni!</p>
      </div>

    </div>
  )
}
