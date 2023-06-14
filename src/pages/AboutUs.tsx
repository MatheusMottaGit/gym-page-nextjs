import React from 'react'
import Image from 'next/image'

import barGuy from '../assets/BarGuy.svg'
import Description from '@/components/AboutUs/Description'
import Title from '@/components/AboutUs/Title'

const AboutUs = () => {
  return (
    <section className="w-full bg-aboutUs bg-cover bg-center bg-fixed h-screen p-24 flex items-center justify-between gap-5">
      <div className='flex flex-col items-start gap-8'>
        <Title />

        <Description />

        <button className='border-[1px] border-red uppercase text-red p-4 font-bebas w-32'>
          About us
        </button>
      </div>

    </section>
  )
}

export default AboutUs