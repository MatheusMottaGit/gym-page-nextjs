import React from 'react'
import { Children } from '@/types/types'

const CardContainer = ({ children }: Children) => {
  return (
    <div className='border-2 border-red w-full h-48 p-4 flex flex-col justify-center gap-4 font-bebas'>
      {children}
    </div>
  )
}

export default CardContainer