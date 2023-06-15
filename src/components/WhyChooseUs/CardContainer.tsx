import React from 'react'
import { Children } from '@/types/types'

const CardContainer = ({ children }: Children) => {
  return (
    <div className='border-2 border-red w-full h-48 p-4 flex flex-col justify-center gap-4 font-bebas max-[1075px]:text-xs max-[1075px]:h-fit max-[1075px]:gap-0'>
      {children}
    </div>
  )
}

export default CardContainer