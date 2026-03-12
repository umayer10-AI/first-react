import React from 'react'

const Navbar = () => {
  return (
    <div className='max-w-[90%] mx-auto flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between items-center pb-7'>
        <h3 className='font-bold text-base bg-black text-white py-2 px-4 rounded-full'>Target Audience</h3>
        <ul className='flex justify-between gap-4'>
            <li className='font-bold text-base'><i class="fa-solid fa-arrow-turn-down"></i></li>
            <li className='font-bold text-base'>DIGITAL</li>
            <li className='font-bold text-base'>BANKING</li>
            <li className='font-bold text-base'>PLATFORM</li>
        </ul>
    </div>
  )
}

export default Navbar