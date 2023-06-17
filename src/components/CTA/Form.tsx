import React from 'react'

import Title from './Title'
import Inputs from './Inputs'
import FormButton from './FormButton'

const Form = () => {
  return (
    <form className='w-2/3 p-6 flex flex-col justify-center gap-4 z-0'>
      <Title />

      <div className='grid grid-cols-2 gap-6 max-[1042px]:grid-cols-1'>
        <Inputs />
      </div>

      <FormButton>
        Let's start join now
      </FormButton>
    </form>
  )
}

export default Form