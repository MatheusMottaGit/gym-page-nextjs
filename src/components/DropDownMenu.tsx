import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Link from 'next/link'

const DropDownMenu = () => {
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
            Hi, there! Click here to access our plans!

            <Link href={'/plans'} className='bg-chineseblack p-2 w-1/3 font-bold rounded-lg text-white text-xs'>
              See more
            </Link>
          </div>

          <DropdownMenu.Arrow className='fill-white'/>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default DropDownMenu