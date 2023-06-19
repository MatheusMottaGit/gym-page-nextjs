import React, { useContext } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Link from 'next/link'
import { AuthContext } from '@/contexts/auth/AuthContext'

const DropDownMenu = () => {

  const { user, signOut } = useContext(AuthContext)

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className='outline-none'>
        <span className='text-white/60 underline font-poppins text-xs'>
          See our plans
        </span>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <div className='p-4 bg-white rounded-lg h-44 w-64 animate-slideDownFade flex flex-col gap-3 items-center justify-center text-center text-xs text-zinc-500'>
            Hi, {user?.name}! Click here to access our plans!

            <Link href={'/plans'} className='bg-chineseblack p-2 w-1/3 font-bold rounded-lg text-white text-xs'>
              See more
            </Link>

            <div className='flex justify-center items-center gap-2 w-full'>
              <div className='w-1/3 p-[0.5px] bg-zinc-400'></div> or <div className='w-1/3 p-[0.5px] bg-zinc-400'></div>
            </div>

            <span className='underline cursor-pointer' onClick={signOut}>
              Sign-out
            </span>
          </div>

          <DropdownMenu.Arrow className='fill-white'/>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default DropDownMenu