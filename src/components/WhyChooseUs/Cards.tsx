import React from 'react'
import CardContainer from './CardContainer'

const Cards = () => {
  return (
    <div className='w-full h-fit grid grid-cols-2 place-items-center gap-4'>
      <CardContainer>
        <h1 className='text-white text-4xl'>01</h1>
        <div className='flex flex-col'>
          <h2 className='text-red text-xl'>Personal training</h2>
          <span className='text-white/60 font-poppins'>
            Our gyms offer personalized training sessions with certified personal trainers who create customized workout plans based on individual goals
          </span>
        </div>
      </CardContainer>

      <CardContainer>
        <h1 className='text-white text-4xl'>02</h1>
        <div className='flex flex-col'>
          <h2 className='text-red text-xl'>Equipment and facilities</h2>
          <span className='text-white/60 font-poppins'>
            Our gyms offer personalized training sessions with certified personal trainers who create customized workout plans based on individual goals
          </span>
        </div>
      </CardContainer>

      <CardContainer>
        <h1 className='text-white text-4xl'>03</h1>
        <div className='flex flex-col'>
          <h2 className='text-red text-xl'>Nutrition counseling</h2>
          <span className='text-white/60 font-poppins'>
            Our gyms offer personalized training sessions with certified personal trainers who create customized workout plans based on individual goals
          </span>
        </div>
      </CardContainer>

      <CardContainer>
        <h1 className='text-white text-4xl'>04</h1>
        <div className='flex flex-col'>
          <h2 className='text-red text-xl'>Speciality programs</h2>
          <span className='text-white/60 font-poppins'>
            Our gyms offer personalized training sessions with certified personal trainers who create customized workout plans based on individual goals
          </span>
        </div>
      </CardContainer>
    </div>
  )
}

export default Cards