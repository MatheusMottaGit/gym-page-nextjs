import React from 'react'

const Title = () => {
  return (
    <div className='flex flex-col gap-2 max-[1387px]:text-center'>
      <h1 className='text-white uppercase font-bebas text-6xl'>
        Let's start gym <span className='text-red'>training now</span>
      </h1>
      
      <span className='text-white/60 text-xs'>
        get 50% off the first three classes you sign up for this month any GYM membership
      </span>
    </div>
  )
}

export default Title