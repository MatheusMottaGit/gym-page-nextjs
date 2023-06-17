import React from 'react'

const Inputs = () => {
  return (
    <>
      <input 
        type="text" 
        className='p-2 border-[1px] border-white/60 bg-transparent text-xs text-white/60'
        placeholder='Enter your name...'
      />
      <input 
        type="text" 
        className='p-2 border-[1px] border-white/60 bg-transparent text-xs text-white/60'
        placeholder='Enter your phone number...'
      />
      <input 
        type="text" 
        className='p-2 border-[1px] border-white/60 bg-transparent col-span-2 max-[1042px]:col-auto text-xs text-white/60'
        placeholder='Enter your e-mail...'
      />
    </>
  )
}

export default Inputs