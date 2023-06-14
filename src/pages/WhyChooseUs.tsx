import React from 'react'

import Cards from '@/components/WhyChooseUs/Cards'
import Title from '@/components/WhyChooseUs/Title'

const WhyChooseUs = () => {
  return (
    <section className='h-screen w-screen bg-chineseblack flex flex-col items-center justify-center gap-8 p-24'>
      <Title />

      <Cards />
    </section>
  )
}

export default WhyChooseUs