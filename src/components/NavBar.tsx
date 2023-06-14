import React from 'react'
import Logo from './Logo'
import NavList from './NavList'

const NavBar = () => {
  return (
    <nav className='w-full h-[10vh] border-b-2 border-b-platinum p-4 px-24 flex items-center justify-between font-bebas'>
      <Logo />

      <NavList />

      <button className='bg-red p-2 w-[120px] text-white'>
        Start Now
      </button>
    </nav>
  )
}

export default NavBar