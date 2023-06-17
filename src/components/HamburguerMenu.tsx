import React from 'react'

const HamburguerMenu = () => {
  return (
    <div className='cursor-pointer hidden max-[728px]:block'>
      <div className='w-6 h-[2px] bg-white m-1'></div>
      <div className='w-6 h-[2px] bg-white m-1'></div>
      <div className='w-6 h-[2px] bg-white m-1'></div>
    </div>
  )
}

export default HamburguerMenu