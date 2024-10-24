import React from 'react'
import WhoWeAre from './AboutPageComponent/WhoWeAre'
import FAQs from './AboutPageComponent/FAQs'

const page = () => {
  return (
    <>
      <div className='flex flex-col w-full h-auto justify-center items-center mb-10'>
        <WhoWeAre />
        <FAQs />
      </div>
    </>
  )
}

export default page