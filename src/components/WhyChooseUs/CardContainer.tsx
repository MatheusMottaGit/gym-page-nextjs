import React, { ReactNode } from 'react'
import { Children } from '@/types/types'

interface Props {
  children: ReactNode
  animation: string
}

const CardContainer = ({ children, animation }: Props) => {
  return (
    <div className={`border-2 border-red w-full h-48 p-4 flex flex-col justify-center gap-4 font-bebas max-[1075px]:text-xs max-[1075px]:h-fit max-[1075px]:gap-0`}>
      {children}
    </div>
  )
}

export default CardContainer