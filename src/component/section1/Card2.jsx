import React from 'react'

const Card2 = ({bg,percentage}) => {

  return (
        <div className={`${bg} p-5 rounded-2xl space-y-3`}>
            <p className='flex justify-end'><i class="fa-solid fa-arrow-trend-up p-3 rounded-full bg-white"></i></p>
            <h2 className='text-white text-3xl font-bold'>{percentage}</h2>
            <p className='text-white text-lg'>Expected annual growth of eCom market size</p>
        </div>
  )
}

export default Card2;