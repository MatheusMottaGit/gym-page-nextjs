import Link from 'next/link'
import React from 'react'
import HamburguerMenu from './HamburguerMenu'

interface Props {
  isOpen?: boolean
}

// const navList = 'absolute right-0 top-[6vh] h-[40vh] w-screen font-bold flex-col items-center justify-around'

const NavList = ({ isOpen }: Props) => {
  return (
    <ul className={`uppercase text-white flex items-center gap-10`}>

      <HamburguerMenu />

      <Link href={'/'} className="relative text-white bg-transparent uppercase font-bebas transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:border-b-2 before:border-b-red before:transition-transform before:duration-300 before:content-[''] hover:text-zinc-500 before:hover:scale-x-100">
        Home
      </Link>

      <Link href={'/'} className="relative text-white bg-transparent uppercase font-bebas transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:border-b-2 before:border-b-red before:transition-transform before:duration-300 before:content-[''] hover:text-zinc-500 before:hover:scale-x-100">
        Service
      </Link>

      <Link href={'/'} className="relative text-white bg-transparent uppercase font-bebas transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:border-b-2 before:border-b-red before:transition-transform before:duration-300 before:content-[''] hover:text-zinc-500 before:hover:scale-x-100">
        Trainers
      </Link>

      <Link href={'/'} className="relative text-white bg-transparent uppercase font-bebas transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:border-b-2 before:border-b-red before:transition-transform before:duration-300 before:content-[''] hover:text-zinc-500 before:hover:scale-x-100">
        Testimonial
      </Link>

      <Link href={'/'} className="relative text-white bg-transparent uppercase font-bebas transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:border-b-2 before:border-b-red before:transition-transform before:duration-300 before:content-[''] hover:text-zinc-500 before:hover:scale-x-100">
        Contact Us
      </Link>
    </ul>
  )
}

export default NavList

