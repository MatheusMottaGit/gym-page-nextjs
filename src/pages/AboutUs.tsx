import React from 'react'

import Description from '@/components/AboutUs/Description'
import Title from '@/components/AboutUs/Title'
import BarGuy from '@/components/AboutUs/BarGuy'

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

      <BarGuy />

    </section>
  )
}

export default AboutUs