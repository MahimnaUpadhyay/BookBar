import React from 'react'

const Heading = ({HeadingName}) => {
  return (
    <div className='flex w-full h-[100px] justify-center items-center font-semibold text-3xl mt-10'>
        {HeadingName}
    </div>
  )
}

export default Heading