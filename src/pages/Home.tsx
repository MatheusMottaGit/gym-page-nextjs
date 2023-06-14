import React from 'react'

import Presentation from '@/components/Home/Presentation'
import NumberStatistics from '@/components/Home/NumberStatistics'

const HomePage = () => {
  return (
    <section className='h-[90vh] w-screen p-24 flex flex-col items-start gap-16'>
      <Presentation />
      <NumberStatistics />
    </section>
  )
}

export default HomePage