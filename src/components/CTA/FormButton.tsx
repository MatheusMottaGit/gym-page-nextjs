import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
  onClick?: string
}

const FormButton = ({ children }: Props) => {
  return (
    <button className="relative border-[1px] border-red text-red bg-transparent p-2 mt-8 w-36 uppercase font-bebas border-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-red before:transition-transform before:duration-300 before:content-[''] hover:text-chineseblack before:hover:scale-x-100 max-[914px]:w-full">
      {children}
    </button>
  )
}

export default FormButton