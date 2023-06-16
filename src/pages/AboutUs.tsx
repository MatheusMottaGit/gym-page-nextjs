import React from 'react'

import Description from '@/components/AboutUs/Description'
import Title from '@/components/AboutUs/Title'
import BarGuy from '@/components/AboutUs/BarGuy'
import Button from '@/components/Button'

const AboutUs = () => {
  return (
    <section className="w-full bg-aboutUs bg-cover bg-center bg-fixed h-screen p-24 flex items-center justify-between gap-12 max-[1085px]:flex-col max-[1085px]:h-fit">
      <div className='flex flex-col gap-5 max-[1085px]:items-center max-[1085px]:text-center z-10'>
        <Title />

        <Description />

        <Button>
          Let's join now
        </Button>
      </div>

      <BarGuy />
    </section>
  )
}

export default AboutUs