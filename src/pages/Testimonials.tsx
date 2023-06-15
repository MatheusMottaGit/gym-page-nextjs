import React from 'react'

import Description from '@/components/Testimonials/Description'
import Title from '@/components/Testimonials/Title'

const Testimonials = () => {
  return (
    <section className="w-full bg-testimonials bg-cover bg-center bg-fixed h-screen p-24 flex flex-col items-center justify-center gap-8 text-center">
      <Title />

      <Description />  
    </section>
  )
}

export default Testimonials