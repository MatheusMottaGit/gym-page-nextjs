import React from 'react'
import Image from 'next/image'

import man from '../assets/Man.svg'
import FormContainer from '@/components/CTA/FormContainer'
import Form from '@/components/CTA/Form'

const CTA = () => {
  return (
   <section className="w-full bg-chineseblack h-screen p-24 flex items-center justify-center"> 
    <FormContainer>
      <Image 
        src={man} 
        alt=''
        className='max-[1460px]:hidden'
      />

      <Form />
    </FormContainer>
   </section>
  )
}

export default CTA