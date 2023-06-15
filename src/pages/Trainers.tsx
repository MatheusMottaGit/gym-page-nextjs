import React from 'react'

import BorneyCard from '@/components/Trainers/BorneyCard'
import ElsaCard from '@/components/Trainers/ElsaCard'
import GeourgeCard from '@/components/Trainers/GeourgeCard'
import Title from '@/components/Trainers/Title'

const Trainers = () => {
  return (
    <section className="w-full bg-chineseblack h-screen p-24 flex flex-col items-center justify-center gap-12 max-[888px]:h-fit">
      <Title />

      <div className='flex items-center gap-6 max-[888px]:flex-col'>
        <BorneyCard />

        <ElsaCard />

        <GeourgeCard />
      </div>
    </section>
  )
}

export default Trainers