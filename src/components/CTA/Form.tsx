import React from 'react'
import FormTitle from './FormTitle'
import Inputs from './Inputs'

const Form = () => {
  return (
    <form className='w-full h-full flex flex-col justify-center gap-6 p-4'>
      <FormTitle />

      <span className='text-white/60 text-xs'>
        get 50% off the first three classes you sign up for this month any GYM membership
      </span>

      <Inputs />

      <button className='p-3 w-36 border-[1px] border-red text-red uppercase font-bebas'>
        Let's join now
      </button>
    </form>
  )
}

export default Form