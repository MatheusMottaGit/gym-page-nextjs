import React from 'react'

import EnterYourName from './Inputs/EnterYourName'
import EnterPhoneNumber from './Inputs/EnterPhoneNumber'
import EnterYourEmail from './Inputs/EnterYourEmail'

const Inputs = () => {
  return (
    <div className='grid grid-cols-2 gap-4 w-full relative'>
      <EnterYourName />

      <EnterPhoneNumber />

      <EnterYourEmail />
    </div>
  )
}

export default Inputs