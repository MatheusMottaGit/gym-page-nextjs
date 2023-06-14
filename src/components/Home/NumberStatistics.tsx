import React from 'react'

const NumberStatistics = () => {
  return (
    <div className='flex items-start justify-between gap-4 w-1/2'>
      <div className='pr-4 flex flex-col items-end border-r-2 border-r-white/60 font-bebas'>
        <h2 className='uppercase text-4xl text-red'>20+</h2>
        <span className='text-white/60 font-poppins text-sm'>Years of experience</span>
      </div>

      <div className='pr-4 flex flex-col items-end border-r-2 border-r-white/60 font-bebas'>
        <h2 className='uppercase text-4xl text-red'>15k+</h2>
        <span className='text-white/60 font-poppins text-sm'>Members join</span>
      </div>

      <div className='pr-4 flex flex-col items-end border-r-2 border-r-white/60 font-bebas'>
        <h2 className='uppercase text-4xl text-red'>14k+</h2>
        <span className='text-white/60 font-poppins text-sm'>Happy members</span>
      </div>
    </div>
  )
}

export default NumberStatistics