'use client'
import React, { useContext, useState } from 'react'

import Logo from './Logo'
import NavList from './NavList'
import DropDownMenu from './DropDownMenu'
import { AuthContext } from '@/contexts/auth/AuthContext'

const NavBar = () => {

  const { signed } = useContext(AuthContext)

  const [isOpen, setIsOpen] = useState(false)

  function handleToggle(){
    setIsOpen(!isOpen)
  }

  return (
    <nav className='w-full h-[10vh] border-b-2 border-b-platinum p-4 px-24 flex items-center justify-between font-bebas'>
      <Logo />

      <NavList />

      {signed ? <DropDownMenu /> : <p>Sign - In</p>}
    </nav>
  )
}

export default NavBar