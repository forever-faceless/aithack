import React from 'react'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <div className='w-screen h-auto flex justify-center bg-transparent mt-24 flex-col'>
        <div className='flex flex-col items-center gap-4 bg-transparent'>
        <p className='text-black text-6xl font-Doto font-black tracking-tighter'><span className="text-[#7d72ff]">Collaborate</span> Effortlessly, <span className="text-[#26dda4]">Create</span> Seamlessly</p>
        <p className='text-5xl font-Doto font-extraboldx tracking-tighter text-[#000]'>Real-Time Ideas, Real-Time Voice.</p>
        </div>
        <div className='flex justify-center'>
          <a href="/login"><button className='w-64 h-16 bg-[#7d72ff] rounded-3xl my-8 text-2xl font-Doto font-black tracking-tighter shadow-[4px_4px_8px_4px_rgba(59,77,140)]'>Get Started</button></a>
      </div>
      <div className='w-screen h-1/2'>
        <Spline scene="https://prod.spline.design/GmZWDHMZhErK3WDt/scene.splinecode" />
      </div>
    </div>
  )
}

export default Hero