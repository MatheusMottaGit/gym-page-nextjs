import React from 'react'

const Title = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center gap-6 font-bebas uppercase text-white'>
      <h1 className='text-7xl'>
        Why <span className='text-red'>choose us</span>
      </h1>

      <span className='font-poppins text-white/60 text-xs'>
        Gym workouts offer a versatile and customisable experience, allowing <br /> everyone to set specific fitness goals.
      </span>
    </div>
  )
}

export default Title