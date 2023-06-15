import React from 'react'

const EnterYourEmail = () => {
  return (
    <>
      <label className='absolute text-white/60 text-xs p-3 top-[58px]'>
        Enter your e-mail...
      </label>
      
      <input 
        type="number"
        className='p-3 bg-transparent col-span-2 text-white/60 border-[1px] border-white/60 text-xs'
      />
    </>
  )
}

export default EnterYourEmail