import React from 'react'

import Image from 'next/image'

import barGuy from '../../assets/BarGuy.svg'

const BarGuy = () => {
  return (
    <div className='h-full w-full'>
      <Image 
        src={barGuy}
        alt=''
        className='opacity-70 w-full h-full'
      />
    </div>
  )
}

export default BarGuy