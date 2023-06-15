import { Children } from '@/types/types'
import React from 'react'

const FormContainer = ({ children }: Children) => {
  return (
    <div className='w-3/4 h-full bg-black border-[1px] border-red flex justify-start'>
      {children}
    </div>
  )
}

export default FormContainer