import { Children } from '@/types/types'
import React from 'react'

const Button = ({ children }: Children) => {
  return (
    <button className="relative border-[1px] border-red text-red bg-transparent p-4 mt-8 w-36 uppercase transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-red before:transition-transform before:duration-300 before:content-[''] hover:text-chineseblack font-bebas before:hover:scale-x-100">
      {children}
    </button>
  )
}

export default Button