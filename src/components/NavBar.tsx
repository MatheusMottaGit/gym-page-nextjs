'use client'
import React, { useState } from 'react'

import Logo from './Logo'
import NavList from './NavList'

const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false)

  function handleToggle(){
    setIsOpen(!isOpen)
  }

  return (
    <nav className='w-full h-[10vh] border-b-2 border-b-platinum p-4 px-24 flex items-center justify-between font-bebas'>
      <Logo />

      <NavList 
        isOpen={isOpen}
      />
    </nav>
  )
}

export default NavBar