import React from 'react'

import Logo from './Logo'
import NavList from './NavList'

import { CopyrightIcon } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='bg-black flex flex-col'>
      <div className='w-full p-[72px] border-b-[1px] border-b-white/60 flex flex-col items-center justify-center gap-8'>
        <Logo />

        <NavList isOpen/>
      </div>

      <div className='p-6 w-full flex items-center justify-between text-xs text-white/60'>
        <span>Privacy | Terms and condition</span>

        <span className='flex items-center gap-4'>
          <CopyrightIcon size={10}/>

          <span>2023 All rights reserved. IronGym Company</span>
        </span>
      </div>
    </footer>
  )
}

export default Footer