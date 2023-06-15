import React from 'react'

const EnterYourName = () => {
  return (
    <>
      <label className='absolute text-white/60 text-xs p-3'>
        Enter your name...
      </label>
      
      <input 
        type="text"
        className='p-3 bg-transparent text-white/60 border-[1px] border-white/60 text-xs'
      />
    </>
  )
}

export default EnterYourName