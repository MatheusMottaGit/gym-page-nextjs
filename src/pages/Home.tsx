import React from 'react'

import Presentation from '@/components/Home/Presentation'
import NumberStatistics from '@/components/Home/NumberStatistics'

const HomePage = () => {
  return (
    <section className='h-[90vh] w-screen p-24 flex flex-col justify-center gap-16 max-[1075px]:items-center max-[1075px]:text-center'>
      <Presentation />

      <NumberStatistics />
    </section>
  )
}

export default HomePage