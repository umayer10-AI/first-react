import React from 'react'

const Top = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-10 items-center'>
        <div>
            <img className='rounded-full object-cover h-[100px] w-[100px] lg:h-[150px] lg:w-[150px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC1G62tlDD9oZE9n7hCLY9KEn4cj7HQM2slA&s" alt="" />
        </div>
        <div>
            <h2 className='text-3xl text-center lg:text-left lg:text-5xl font-bold mb-3'>PRESENTATION DESIGN</h2>
            <p className='text-2xl text-center lg:text-left lg:text-4xl'>My name is Umayer Ahmad I am Boss In the World</p>
        </div>
    </div>
  )
}

export default Top;