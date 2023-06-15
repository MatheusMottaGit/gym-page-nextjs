import React from 'react'
import Button from '../Button'

const Presentation = () => {
  return (
    <div className='flex flex-col items-start gap-4 w-1/2 max-[1075px]:items-center'>
      <h1 className='uppercase text-white font-bebas text-7xl'>
        Ready to train 
        <br />
        <span className='text-red'>your body</span>
      </h1>

      <span className='text-white/60 text-sm'>
        Gym training is a structured and disciplined approach to physical exercise that focuses on strength, endurance and overall fitness improvement.
      </span>

      <Button>
        Let's join now
      </Button>
    </div>
  )
}

export default Presentation